# 潮汐 TIDAL

海面驾驶与冲浪实验：木船、摩托艇与汽车，支持巨浪、飞跃、潜水、氮气和本地 GLB 模型调试。

**当前为私人仓库准备版本，未公开发布或部署。项目自有部分的二创条款待维护者确认；不要把草案当成已生效的许可。**

维护者：[lingziyu186-coder](https://github.com/lingziyu186-coder)。项目仓库：[lingziyu186-coder/Tidal-drive](https://github.com/lingziyu186-coder/Tidal-drive)，目前为 Private；未获访问权限者不能读取。本文中文在前、英文在后；第三方许可证保留其原文，说明性译文不替代原许可。

## 运行与目录范围

入口为 `index.html`，需通过 HTTP/HTTPS 静态网站服务运行；这是网页包，不能直接用 `file:` 双击代替网站服务。部署时需要同目录 CSS、JS、`models/` 和许可文件。

目前提供的是**网页运行包，不是完整的可复现源码工程**。`game.bundle.js` 混合了项目代码与第三方代码，不能把整份脚本统一套成项目自有许可。后续如需开放可编辑源码，应另行准备只含发布配置和必要素材的干净源码包，不能上传整个私人开发目录。

内置载具保留原按键：1 木船、2 Sea-Doo、3 Kawasaki、4 Assault Boat、5 Mercedes、6 小米、8 Jesko、9 Aventador。7 号 Mazda、0 号 LEGO 和减号猫咪及动作因缺少可核实的外观再分发许可，未进入本包；编号不重排。

主要操作：W/S 前后、A/D 转向、E/Shift 氮气、Space 水面漂移/水下上浮、C 停车、R 复位、F 设置、F11 全屏、Esc 返回封面、封面 Space 开始/继续。GLB 调试入口在 F 设置内的“我的模型”。自定义导入不代表项目已取得该素材的权利，分享自定义模型或配置前需自行确认权限。

## 来源、借鉴与第三方素材

- [CREDITS.md](CREDITS.md)：逐项区分实际使用/改编、素材来源与仅作研究参考，并说明对应文件和改动。
- [MODEL_CREDITS.md](MODEL_CREDITS.md)：本包 8 个实际 GLB 的作者、来源、许可、改动、文件大小和 SHA-256；木船为程序化几何。
- [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md)、[RDEV_GLASS_NOTICE.md](RDEV_GLASS_NOTICE.md) 和 `licenses/`：保留的完整第三方声明。
- [LICENSE_SCOPE.md](LICENSE_SCOPE.md)：哪些部分可按什么许可使用，为什么不能给整包统一贴 MIT 标签。

这不是任何被参考仓库的官方续作，不暗示维护者、素材作者或车辆品牌背书；项目没有把上游代码与素材宣称为个人原创。

## 使用本仓库二创

维护者选择的方向是：**对维护者有权授权的项目自有代码/文档，允许署名的非商业使用和二创；具体条款须先经维护者确认**。候选文本在 [REMIX_POLICY_DRAFT.md](REMIX_POLICY_DRAFT.md)，尚未生效。此方向不等于给他人的 MIT、CC BY、CC0 资产追加非商业限制。

已记录的第三方许可不因草案而暂停或改变。特别是载具 6、8、9 的记录为 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)，相应模型改编部分必须履行其非商业、署名、改动说明和同许可等义务；其他素材按各自条款处理。免费不自动等于非商业。商用不能只找本项目维护者取得整包授权，第三方部分须另行确认。

署名至少应指出项目名称、维护者、本项目实际仓库链接、使用的版本/提交、采用部分和所作改动，同时保留相关上游作者与许可。草案内提供模板；私密仓库链接不代表接收者已获得仓库访问权。

## 文件与检查边界

本目录只含运行文件、实际使用的 GLB、来源/许可说明、待确认的项目二创草案及文件清单，不含聊天、测试截图、私人回退、平台配置、Git 历史或依赖安装目录。`release-manifest.json` 记录本包文件哈希。

此前 293 项完整回归与 11 项发布专项检查通过；几何/动作 CPU 检查会跳过纹理解码，不能据此宣称完成浏览器/GPU 画面试玩。本轮文档另有专项一致性与隐私模式检查。具体结果以本地检查记录为准，不保证任何显卡零问题或绝对无安全漏洞。

来源许可主要依据下载文件中的声明、已留存记录和可访问上游许可页；不等于已独立验证所有上传者的完整权利链、品牌、涂装、设计或肖像等权利。若发现署名错误或权利争议，有仓库访问权的用户可通过本仓库 Issues 联系维护者；未虚构联系邮箱。私密上传也不自动解决素材权限问题。

---

# TIDAL — Ocean Driving

A browser-based ocean-driving experiment with boats, personal watercraft and cars, massive waves, jumps, underwater travel, nitro and a local GLB model workbench.

**Private repository preparation only: no public release or website deployment. The policy for project-owned material is an unapproved draft, not an effective licence.**

Maintainer: [lingziyu186-coder](https://github.com/lingziyu186-coder). Repository: [lingziyu186-coder/Tidal-drive](https://github.com/lingziyu186-coder/Tidal-drive), currently private. A repository link does not grant access. Chinese appears first and English follows; original third-party licence texts remain authoritative for their respective material.

## Running and package scope

Serve `index.html` and its neighbouring CSS, JavaScript, `models/` and licence files over HTTP/HTTPS. This web package is not a `file:` double-click offline build.

This is a **runtime web package, not a complete reproducible source project**. `game.bundle.js` combines project and third-party code; a single project licence cannot be applied indiscriminately to the whole bundle. A future editable source release needs a separate, cleaned source package with the release profile and necessary assets, not the entire private development directory.

Original vehicle keys remain: 1 wooden rowboat, 2 Sea-Doo, 3 Kawasaki, 4 Assault Boat, 5 Mercedes, 6 Xiaomi, 8 Jesko and 9 Aventador. Mazda (7), LEGO (0), and the cat and its animations (minus) are excluded because a verifiable redistribution licence for their appearance was not established. Keys are not renumbered.

Controls: W/S forward/back, A/D steering, E/Shift nitro, Space surface drift/underwater recovery, C stop, R reset, F settings, F11 fullscreen, Esc cover screen, and Space on the cover to start/continue. The GLB workbench is under F settings → My Models. Importing a model does not grant rights to it; verify permission before sharing models, textures, motions or exported configurations.

## Attribution and licensing

- [CREDITS.md](CREDITS.md): actual dependencies/adaptations, asset download sources, research-only references, corresponding files and modifications.
- [MODEL_CREDITS.md](MODEL_CREDITS.md): authors, sources, recorded licences, modifications, sizes and SHA-256 hashes of all eight shipped GLBs. The rowboat is procedural.
- [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md), [RDEV_GLASS_NOTICE.md](RDEV_GLASS_NOTICE.md) and `licenses/`: retained third-party notices and full licence texts.
- [LICENSE_SCOPE.md](LICENSE_SCOPE.md): which terms apply to which material, and why this is not an all-MIT package.

This is not an official sequel to any referenced repository and does not imply endorsement by upstream authors, asset creators or vehicle brands. Third-party code and assets are not claimed as the maintainer's original work.

## Remixing material from this repository

The maintainer's selected direction is **credited, noncommercial reuse and remixing of material the maintainer is entitled to license**, subject to approval of the actual terms. [REMIX_POLICY_DRAFT.md](REMIX_POLICY_DRAFT.md) is a proposal, not an effective grant. It does not add noncommercial restrictions to third-party MIT, CC BY or CC0 material.

Existing third-party licences remain separate. Vehicles 6, 8 and 9 are recorded under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/); their corresponding model adaptations must satisfy attribution, change notices, noncommercial use, ShareAlike and other applicable requirements. Free of charge does not automatically mean noncommercial. Permission from this maintainer alone cannot clear third-party material or brands for commercial use.

The proposed attribution identifies TIDAL, its maintainer and actual repository URL, the version/commit used, the portions used and your changes, while retaining required upstream attribution and licence texts. The draft contains a template. A private URL does not give the recipient repository access.

## Checks and limitations

The package contains runtime files, shipped GLBs, source/licence documentation, a pending remix-policy draft and a hash manifest. It excludes chats, test screenshots, private rollback versions, platform configuration, Git history and dependency installation directories. See `release-manifest.json` for hashes.

Previously, 293 regression checks and 11 release-specific checks passed. CPU geometry/animation smoke checks skip image decoding and are not browser/GPU playtests. Documentation has additional consistency and privacy-pattern checks; consult the local maintenance record for current results. No guarantee is made for every GPU or for absolute security.

Licence records rely on downloaded metadata, retained evidence and accessible upstream licence pages, not an independent verification of every uploader's rights chain, trademark, livery, design or likeness rights. Users with repository access can report attribution or rights concerns through its Issues; no contact email is invented. Private uploading does not itself resolve asset rights.
