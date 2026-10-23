param([switch]$NoBrowser, [int]$Port = 18765)
$ErrorActionPreference = 'Stop'
$root = $PSScriptRoot
try {
    if (-not (Test-Path -LiteralPath (Join-Path $root 'index.html'))) {
        throw 'Extract the entire ZIP first. Keep this launcher next to index.html.'
    }
    Add-Type -TypeDefinition @'
using System;
using System.IO;
using System.Net;
using System.Net.Sockets;
using System.Text;
using System.Threading;

public class TidalLocalServer {
    private readonly string root;
    private TcpListener listener;
    public TidalLocalServer(string directory) {
        root = Path.GetFullPath(directory).TrimEnd(Path.DirectorySeparatorChar) + Path.DirectorySeparatorChar;
    }
    public int Start(int firstPort) {
        for (int p = firstPort; p <= firstPort + 20 && p <= 65535; p++) {
            try {
                listener = new TcpListener(IPAddress.Loopback, p);
                listener.Start();
                Thread t = new Thread(Accept);
                t.IsBackground = true;
                t.Start();
                return p;
            } catch (SocketException) { if (listener != null) listener.Stop(); }
        }
        throw new IOException("No free local port. Close an older TIDAL window and retry.");
    }
    public void Stop() { if (listener != null) listener.Stop(); }
    private void Accept() {
        while (true) {
            try {
                TcpClient client = listener.AcceptTcpClient();
                ThreadPool.QueueUserWorkItem(delegate(object state) { Serve((TcpClient)state); }, client);
            } catch (SocketException) { break; }
              catch (ObjectDisposedException) { break; }
        }
    }
    private static void Header(Stream s, int status, string type, long length) {
        string reason = status == 200 ? "OK" : status == 403 ? "Forbidden" : status == 405 ? "Method Not Allowed" : "Not Found";
        byte[] h = Encoding.ASCII.GetBytes("HTTP/1.1 " + status + " " + reason + "\r\nContent-Type: " + type + "\r\nContent-Length: " + length + "\r\nConnection: close\r\nX-Content-Type-Options: nosniff\r\nCache-Control: no-cache\r\n\r\n");
        s.Write(h, 0, h.Length);
    }
    private static string Mime(string extension) {
        switch(extension.ToLowerInvariant()) {
            case ".html": return "text/html; charset=utf-8";
            case ".css": return "text/css; charset=utf-8";
            case ".js": return "text/javascript; charset=utf-8";
            case ".json": return "application/json; charset=utf-8";
            case ".glb": return "model/gltf-binary";
            case ".png": return "image/png";
            case ".jpg": case ".jpeg": return "image/jpeg";
            case ".webp": return "image/webp";
            case ".svg": return "image/svg+xml";
            case ".md": case ".txt": return "text/plain; charset=utf-8";
            default: return null;
        }
    }
    private void Serve(TcpClient client) {
        using(client) {
            try {
                client.ReceiveTimeout = 15000;
                client.SendTimeout = 15000;
                using(NetworkStream stream = client.GetStream()) {
                    StreamReader reader = new StreamReader(stream, Encoding.ASCII, false, 4096, true);
                    string request = reader.ReadLine();
                    if (request == null || request.Length > 8192) return;
                    string[] parts = request.Split(' ');
                    if (parts.Length < 3) return;
                    bool head = parts[0] == "HEAD";
                    if (parts[0] != "GET" && !head) { Header(stream, 405, "text/plain", 0); return; }
                    int headerSize = 0;
                    string line;
                    while (!String.IsNullOrEmpty(line = reader.ReadLine())) {
                        headerSize += line.Length;
                        if (headerSize > 32768) return;
                    }
                    string path = Uri.UnescapeDataString(parts[1].Split('?')[0]);
                    if (path == "/__tidal_health") {
                        byte[] body = Encoding.UTF8.GetBytes("{\"app\":\"TIDAL\",\"status\":\"ready\"}");
                        Header(stream, 200, "application/json", body.Length);
                        if (!head) stream.Write(body, 0, body.Length);
                        return;
                    }
                    if (path == "/") path = "/index.html";
                    string file = Path.GetFullPath(Path.Combine(root, path.TrimStart('/').Replace('/', Path.DirectorySeparatorChar)));
                    if (!file.StartsWith(root, StringComparison.OrdinalIgnoreCase)) { Header(stream, 403, "text/plain", 0); return; }
                    string mime = Mime(Path.GetExtension(file));
                    if (mime == null || !File.Exists(file)) { Header(stream, 404, "text/plain", 0); return; }
                    using(FileStream input = File.OpenRead(file)) {
                        Header(stream, 200, mime, input.Length);
                        if (!head) input.CopyTo(stream);
                    }
                }
            } catch (Exception) { /* Closed tabs and interrupted downloads end only this request. */ }
        }
    }
}
'@
    $server = New-Object TidalLocalServer($root)
    $actualPort = $server.Start($Port)
    $url = "http://127.0.0.1:$actualPort/"
    Write-Host ''
    Write-Host 'TIDAL is ready.' -ForegroundColor Cyan
    Write-Host "Game: $url"
    Write-Host 'Keep this window open while playing.'
    Write-Host 'Close this window to stop the game server. No installation is needed.'
    if (-not $NoBrowser) { Start-Process $url }
    try { while ($true) { Start-Sleep -Seconds 1 } }
    finally { $server.Stop() }
} catch {
    Write-Host $_.Exception.Message -ForegroundColor Red
    if (-not $NoBrowser) { [void](Read-Host 'Press Enter to close') }
    exit 1
}
