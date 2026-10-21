# Liquid Glass React — adapted optical / elastic layer

Source: https://github.com/rdev/liquid-glass-react/blob/master/src/index.tsx

Retrieved 2026-10-21. Portions of the SVG RGB channel displacement, edge compositing and pointer elasticity were adapted into a native DOM implementation in `src/vendor/rdev-glass.js`. The experimental CPU fragment-map generator is adapted in `src/vendor/rdev-shader-map.js` from https://github.com/rdev/liquid-glass-react/blob/master/src/shader-utils.ts , itself adapted from https://github.com/shuding/liquid-glass . The game does not install or use the React runtime. Local modifications cap map allocation, add a generated edge mask, bound elastic transforms, and handle reduced-motion preferences, lazy initialization and cleanup. Demo images and example-site assets are not included.

MIT License

Copyright 2025 MAX ROVENSKY

Copyright (c) 2025 Shu Ding

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
