# 来源与借鉴说明

维护记录：2026-10-21。项目维护者为 [lingziyu186-coder](https://github.com/lingziyu186-coder)；[项目仓库](https://github.com/lingziyu186-coder/Tidal-drive)。本文件说明使用事实，不是重新授权他人作品，也不宣称所有算法或美术完全原创。中文在前、英文在后，原始许可证文本保持不变。

“实际采用/改编”表示存在相应运行依赖、代码适配或随包素材；“下载来源”不表示复制该站点的应用代码；“研究参考”不表示把该仓库整体搬进项目。下方源码路径指开发工程内的对应文件，当前网页运行包中的代码已合并至 `game.bundle.js`。

## 一、实际运行依赖与改编代码

| 上游项目 / 作者 | 对应部分与本地文件 | 使用方式、改动与许可 |
| --- | --- | --- |
| [mrdoob/three.js](https://github.com/mrdoob/three.js/tree/r180)，Three.js Authors | Three.js 0.180.0；渲染器、GLTFLoader、材质/几何、EffectComposer、抗锯齿与其他 addons | 实际运行依赖，不是项目自创引擎。项目海面、物理、交互等在其上实现。MIT，保留完整版权文本，见 `licenses/three-MIT.txt`。 |
| [rdev/liquid-glass-react](https://github.com/rdev/liquid-glass-react)，MAX ROVENSKY | `src/vendor/rdev-glass.js`、`src/vendor/rdev-shader-map.js`、`src/liquid-glass.js` | 从 `src/index.tsx` 和 `src/shader-utils.ts` 改编 RGB 通道折射、边缘合成、鼠标弹性与实验性位移图；改为原生 DOM/SVG，未安装 React 运行时。增加尺寸上限、缓存、延迟创建、清理和降级；参数按用户图示调整。MIT，见 `RDEV_GLASS_NOTICE.md`、`licenses/rdev-MIT.txt`。 |
| [shuding/liquid-glass](https://github.com/shuding/liquid-glass)，Shu Ding | `src/vendor/rdev-shader-map.js` | rdev 的位移图上游来源，属于间接采用的算法实现，不应因经由 rdev 取用而省略 Shu Ding 署名。保留 MIT 和原版权，见 `licenses/shuding-MIT.txt`。 |
| [kwlck/liquid-glass-web](https://github.com/kwlck/liquid-glass-web)，kwlck | `src/vendor/liquid-glass/geometry.js`；被 rdev 位移图适配中的边缘计算调用 | 改编距离场/几何计算用于玻璃轮廓与 bevel 遮罩，不是只看了演示。结合 rdev 光学层，增加蓝通道边缘数据和尺寸/缓存控制。MIT，见 `licenses/kwlck-MIT.txt`。其演示照片有独立 Unsplash 许可，本包未使用。 |
| [codrops/RainEffect](https://github.com/codrops/RainEffect)，Lucas Bebber / Codrops | `src/lens-water.js`；上游 `water.frag` | 将屏幕水滴折射适配至动态水珠、滑落、实时场景颜色；不原样再分发演示站、照片或音频。上游 README 允许整合/改编，并提示不得按原样再分发/出售，另链接 [Codrops 许可](https://tympanus.net/codrops/licensing/)。保留既有 MIT 声明及这项提示，见 `licenses/codrops-MIT.txt`。 |

前三款玻璃来源于此前开发阶段记录的主分支文件，取材日期记录为 2026-10-21，**没有保存可核实的固定上游提交号**。不能事后把今天主分支的提交伪称为原始取材版本。当前本地发布文件哈希记录在清单中；Three.js 则按版本 r180 / 0.180.0 标识。

## 二、实际随包的纹理、天空与人物

| 来源 / 作者 | 本地素材或用途 | 许可和实际采用范围 |
| --- | --- | --- |
| [wave-harmonic/crest](https://github.com/wave-harmonic/crest)，Wave Harmonic and contributors | 上游 `crest/Assets/Crest/Crest/Textures/Foam2.png`，本地 `assets/fx/crest-foam-2.png` | MIT 的纹理素材，用作短暂泡沫/白水遮罩；没有引入 Unity Crest 运行库或闭源 Crest Water 5。许可见 [上游 LICENSE](https://github.com/wave-harmonic/crest/blob/master/crest/Assets/Crest/Crest/LICENSE) 和 `licenses/crest-MIT.txt`。 |
| [Kenney Particle Pack](https://kenney.nl/assets/particle-pack)，Kenney | `smoke_04.png` → `assets/fx/kenney-smoke-04.png` | CC0 1.0 的水雾遮罩；水雾运动、触发与粒子更新属于项目集成代码，不把 Kenney 的整套粒子包当成自创素材。 |
| [Poly Haven](https://polyhaven.com/license)，Greg Zaal / Jarod Guest | [kloofendal_48d_partly_cloudy_puresky](https://polyhaven.com/a/kloofendal_48d_partly_cloudy_puresky)、[kloppenheim_06_puresky](https://polyhaven.com/a/kloppenheim_06_puresky) | CC0 1.0 的天空 HDR；实际嵌入用于天空/环境光，不包含网站页面和标志。 |
| [met4citizen/TalkingHead](https://github.com/met4citizen/TalkingHead)，MakeHuman MPFB avatar | 固定提交 `2afe6d79779313db8909badebf46f9805a6c7b70` 的 `avatars/mpfb.glb` → `mpfb-rider.glb` | [对应 README](https://github.com/met4citizen/TalkingHead/blob/2afe6d79779313db8909badebf46f9805a6c7b70/README.md) 对该人物记录为 CC0；不是把该仓库所有人物/动作都当成 CC0。移除不需要的语音形变、保留纹理/骨架并加入坐姿 IK、眨眼与驾驶适配；没有采用 TalkingHead 应用 JavaScript。 |

## 三、载具作者与模型下载来源

所有实际随包 GLB 的作者、原作链接、许可字段、改动说明和文件哈希见 [MODEL_CREDITS.md](MODEL_CREDITS.md)。Sketchfab 是来源平台，不代替真实模型作者署名；文件写了 CC 也不等于已验证上传者对全部几何、贴图、车标和涂装有权授权。

[bob6664569/open-water](https://github.com/bob6664569/open-water) 是 **Sea-Doo 与 Assault Boat 两个模型文件的下载来源**：记录使用固定提交 `285b6ce32057c70191a7fe16c31d979fa383ac64` 下的 `site/assets/boats/seadoo-gti_3.4.glb` 和 `assault-boat_9.5.glb`。模型仍分别署名 BoatUS Foundation 与 tnnv，按各自 CC BY 4.0 记录处理。没有将 open-water 作为本项目整份应用代码的来源，也不能以该仓库代码许可替代模型本身的许可。

其余保留车型为用户提供的 GLB，许可依据主要是内嵌作者/来源/许可记录，不能宣称每款都由项目维护者建模或当前重新获得过作者单独授权。

## 四、开发记录中仅作研究或比较的项目

- [jbouny/fft-ocean](https://github.com/jbouny/fft-ocean)、[dli/waves](https://github.com/dli/waves)、[squall01337/abyssal-ocean](https://github.com/squall01337/abyssal-ocean)：海面/光学研究参考；当前运行依赖图未把这些仓库作为库引入。参考思路不等于宣称算法全为项目首创，也不是穷尽式源码相似性鉴定。
- [Alchemist0823/three.quarks](https://github.com/Alchemist0823/three.quarks) 与 [Quarks 文档](https://docs.quarks.art/docs)：尾焰效果研究参考，当前没有把 Quarks 库、演示纹理或其完整系统打入发布包。当前尾焰使用项目里的体积/平面着色器与触发逻辑。
- Picster 候选效果、以前的 Sam/Zodiac、Mixamo Soldier/Michelle：只在私人开发资料中做过比较或回归，不属于当前发布版素材。不能把它们的文件或截图随本包一并上传。
- Mazda、LEGO、行走猫与猫咪动作：当前发布配置明确排除，不包含其网格、纹理或重定向动作；私人完整版的保留不等于允许公开再分发。

## 五、构建工具与项目实现

开发环境使用 [evanw/esbuild](https://github.com/evanw/esbuild) 0.25.10（MIT，Evan Wallace）做打包；它是构建工具，不是随网页运行的模型/特效库。若后续发布完整构建工具链，应保留该工具自己的许可。历史 LEGO 减面工具不用于本发布包。

木船程序化几何、游戏物理/海浪生命周期/驾驶交互、自定义模型调试和集成适配等为项目实现范围，开发包含 AI 辅助实现与重构。这不是对每行代码独创性或可版权性的法律判断，也不覆盖以上列明的第三方部分。未进行穷尽的专利、商标或全球源码相似性审查。

## 六、二创时如何保留这些信息

请同时注明 TIDAL 项目来源与实际使用的上游作者；只写“感谢开源社区”或“灵感来自某库”不能替代适用许可要求的版权/许可文本。不要删掉上游 MIT 声明；使用 CC BY 资产时保留作者、作品链接、许可和改动信息；使用 CC BY-NC-SA 的模型改编部分时还须遵守其非商业、同许可与无额外限制要求。

项目自有部分适用 [LICENSE.md](LICENSE.md) 中的《TIDAL 署名·非商业许可 1.0》，自 2026-10-23 生效，不覆盖或收紧上游原有权利。具体许可全文优先于本摘要。本记录可能有遗漏，发现来源或署名问题应补证修订，不以“已致谢”代替授权。

---

# Credits and provenance — English

Recorded 2026-10-21. Maintainer: [lingziyu186-coder](https://github.com/lingziyu186-coder); [project repository](https://github.com/lingziyu186-coder/Tidal-drive). This documents use and provenance; it does not relicense others' work or claim that every algorithm and artwork is original.

“Used/adapted” means a runtime dependency, adapted implementation or shipped asset. A download source is not necessarily the source of application code. A research reference does not mean the whole repository was incorporated. Source paths below refer to the development project; runtime code is bundled into `game.bundle.js`.

## 1. Runtime code and adaptations

| Upstream / author | Local portion | Use, changes and terms |
| --- | --- | --- |
| [mrdoob/three.js](https://github.com/mrdoob/three.js/tree/r180), Three.js Authors | Three.js 0.180.0, renderer, GLTFLoader, materials/geometry, EffectComposer, antialiasing and addons | Actual engine dependency, not a project-authored engine. Ocean rendering, physics and interaction are implemented on top of it. MIT; full notice in `licenses/three-MIT.txt`. |
| [rdev/liquid-glass-react](https://github.com/rdev/liquid-glass-react), MAX ROVENSKY | `src/vendor/rdev-glass.js`, `src/vendor/rdev-shader-map.js`, `src/liquid-glass.js` | Adapts RGB refraction, edge compositing, pointer elasticity and experimental displacement-map generation from `src/index.tsx` and `src/shader-utils.ts`. Native DOM/SVG integration, no React runtime; allocation caps, caching, lazy creation, cleanup, fallback and user-selected parameters added. MIT; see `RDEV_GLASS_NOTICE.md` and `licenses/rdev-MIT.txt`. |
| [shuding/liquid-glass](https://github.com/shuding/liquid-glass), Shu Ding | `src/vendor/rdev-shader-map.js` | Indirect upstream of rdev's displacement-map implementation. Attribution is retained even though the implementation was obtained through rdev. MIT; `licenses/shuding-MIT.txt`. |
| [kwlck/liquid-glass-web](https://github.com/kwlck/liquid-glass-web), kwlck | `src/vendor/liquid-glass/geometry.js`, used by the adapted map's edge calculation | Actual distance-field/shape code adaptation, not merely viewing the demo. Used for outlines and bevel masking with the rdev optical layer; blue-channel mask, allocation and caching integration added. MIT; `licenses/kwlck-MIT.txt`. The upstream demo photographs have separate Unsplash terms and are not included. |
| [codrops/RainEffect](https://github.com/codrops/RainEffect), Lucas Bebber / Codrops | `src/lens-water.js`, upstream `water.frag` | Refraction adapted for moving/sliding analytic droplets and live scene colour. Original demo site, photos and audio are not republished. Upstream permits integration/adaptation and warns against redistributing or selling the demo as-is; see [Codrops licensing](https://tympanus.net/codrops/licensing/). The retained MIT notice and this qualification remain; `licenses/codrops-MIT.txt`. |

The three glass sources were recorded as main-branch files retrieved during development on 2026-10-21. **No verifiable exact upstream commit was retained**; today's branch head must not be represented retrospectively as the original source revision. Local shipped hashes are recorded in the manifest. Three.js is identified by r180 / 0.180.0.

## 2. Shipped textures, skies and character

| Source / creator | Asset / purpose | Actual scope and licence |
| --- | --- | --- |
| [wave-harmonic/crest](https://github.com/wave-harmonic/crest), Wave Harmonic and contributors | `crest/Assets/Crest/Crest/Textures/Foam2.png` → `assets/fx/crest-foam-2.png` | MIT texture used as a transient foam/whitewater mask. No Unity Crest runtime or closed-source Crest Water 5 is included. [Upstream licence](https://github.com/wave-harmonic/crest/blob/master/crest/Assets/Crest/Crest/LICENSE); `licenses/crest-MIT.txt`. |
| [Kenney Particle Pack](https://kenney.nl/assets/particle-pack), Kenney | `smoke_04.png` → `assets/fx/kenney-smoke-04.png` | CC0 1.0 mist mask. Project integration handles motion, triggering and particle updates; the entire pack is not claimed as original project art. |
| [Poly Haven](https://polyhaven.com/license), Greg Zaal / Jarod Guest | [kloofendal_48d_partly_cloudy_puresky](https://polyhaven.com/a/kloofendal_48d_partly_cloudy_puresky), [kloppenheim_06_puresky](https://polyhaven.com/a/kloppenheim_06_puresky) | CC0 1.0 HDRs embedded for sky and environment lighting, not the website or its logo. |
| [met4citizen/TalkingHead](https://github.com/met4citizen/TalkingHead), MakeHuman MPFB avatar | `avatars/mpfb.glb` at commit `2afe6d79779313db8909badebf46f9805a6c7b70` → `mpfb-rider.glb` | The [pinned README](https://github.com/met4citizen/TalkingHead/blob/2afe6d79779313db8909badebf46f9805a6c7b70/README.md) records this avatar as CC0, not every character/motion in that repository. Unused speech morphs removed; textures and rig retained; seated IK, blinking, garment and material integration added. TalkingHead application JavaScript is not used. |

## 3. Vehicles and download provenance

[MODEL_CREDITS.md](MODEL_CREDITS.md) lists every shipped GLB's creator, work link, recorded licence, modifications and hash. Sketchfab is a hosting platform, not a replacement for creator attribution. A CC field in a file does not independently verify the uploader's rights to all geometry, images, logos or liveries.

[bob6664569/open-water](https://github.com/bob6664569/open-water) is the **download source for two model files**, `site/assets/boats/seadoo-gti_3.4.glb` and `assault-boat_9.5.glb`, at recorded commit `285b6ce32057c70191a7fe16c31d979fa383ac64`. Their creators remain BoatUS Foundation and tnnv respectively, under their recorded CC BY 4.0 terms. This does not identify open-water as the source of the whole game's application code, and its code licence does not substitute for model licences.

Other retained vehicles were supplied by the user as GLBs. Licence evidence primarily consists of embedded creator/source/licence records; the maintainer is not claimed to have modelled them or obtained fresh individual author approval for each one.

## 4. Research and development comparisons, not shipped libraries

- [jbouny/fft-ocean](https://github.com/jbouny/fft-ocean), [dli/waves](https://github.com/dli/waves), [squall01337/abyssal-ocean](https://github.com/squall01337/abyssal-ocean): ocean/optics references in development records, not libraries imported by the current build graph. This does not claim all ideas are novel or constitute an exhaustive code-similarity review.
- [Alchemist0823/three.quarks](https://github.com/Alchemist0823/three.quarks) and [Quarks documentation](https://docs.quarks.art/docs): exhaust-effect research. The Quarks runtime, demo textures and full system are not shipped; current exhaust uses project shader and triggering code.
- Picster candidate effects, earlier Sam/Zodiac, and Mixamo Soldier/Michelle: private development comparisons or regression fixtures, not current release assets. Do not upload their files or screenshots with this package.
- Mazda, LEGO, the walking cat and cat motions: explicitly excluded from the release graph and output, including meshes, textures and retargeted motion. Retaining them in the private full game is not permission to redistribute them publicly.

## 5. Tooling and project implementation

[evanw/esbuild](https://github.com/evanw/esbuild) 0.25.10 (MIT, Evan Wallace) is a build tool, not a shipped game or effect runtime. Its own licence must be retained if a future full toolchain is distributed. Historical LEGO simplification tools are not used for this package.

Procedural rowboat geometry, game physics, wave lifetimes, driving interaction, the model workbench and integration work form part of the project implementation, including AI-assisted development and refactoring. This is not a legal determination that every line is original or copyrightable and does not cover the third-party portions above. No exhaustive patent, trademark or worldwide source-similarity review has been performed.

## 6. Reuse attribution

Credit both TIDAL and the upstream creators actually used. A generic “thanks to open source” or “inspired by” statement does not replace required copyright and licence notices. Preserve MIT notices; provide required creator, work, licence and change information for CC BY assets; satisfy noncommercial, ShareAlike and no-additional-restrictions requirements for corresponding CC BY-NC-SA adaptations.

The identified project-owned portions use the TIDAL Attribution–NonCommercial Licence 1.0 in [LICENSE.md](LICENSE.md), effective 2026-10-23, without overriding upstream rights. Actual licence texts take precedence over this summary. Attribution is not a substitute for permission; omissions or provenance errors require evidence and correction.
