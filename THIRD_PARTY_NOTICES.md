# Third-party notices — current runtime package / 当前运行包第三方声明

This HTTP/HTTPS runtime package contains vehicles 1, 2, 3, 4, 5, 6, 8 and 9, plus the rider. Vehicle 1 is procedural; the other seven vehicles and rider are the eight credited GLBs. Mazda, LEGO, the walking cat and cat motions are not shipped. See MODEL_CREDITS.md for actual files, authors, recorded licences, hashes and project changes.

本包仅含 1、2、3、4、5、6、8、9 号载具与人物；1 号木船为程序化几何，其余七款载具与人物共 8 个 GLB。Mazda、LEGO、行走猫及猫咪动作未随包。实际文件、作者、许可记录、哈希和改动见 MODEL_CREDITS.md。

Each third-party component retains its own licence. CC BY-NC-SA 4.0 applies to the corresponding 6, 8 and 9 model adaptations, not to unrelated MIT, CC BY or CC0 materials. The project-owned portions identified in LICENSE.md use the separate TIDAL Attribution–NonCommercial Licence 1.0; no blanket relicence is asserted. Embedded model metadata is evidence of a recorded licence, not an independent guarantee of the uploader's rights to brands, livery or designs. No official endorsement is implied.

第三方素材分别遵守原许可；6、8、9 号模型改编保留 CC BY-NC-SA 4.0，不限制无关的 MIT、CC BY 或 CC0 材料。LICENSE.md 列明的项目自有部分适用独立的《TIDAL 署名·非商业许可 1.0》，不是整体重新授权。模型内嵌记录不等于完整权利链或品牌、涂装、外观权利已核实，不暗示官方背书。

Complete code notices are retained below and in licenses/three-MIT.txt, licenses/crest-MIT.txt, licenses/codrops-MIT.txt, licenses/kwlck-MIT.txt, licenses/rdev-MIT.txt and licenses/shuding-MIT.txt; the glass adaptation is also documented in RDEV_GLASS_NOTICE.md. Historical sections explicitly marked not shipped are retained for provenance only, not as a current dependency or distribution claim.

## Retained automotive models and exhaust / 随包汽车与尾焰

Vehicle 8 — 2023 Koenigsegg Jesko Attack by Ddiaz Design. CC BY-NC-SA 4.0.
https://sketchfab.com/3d-models/2023-koenigsegg-jesko-attack-18240b21b4d747c7b7e86a404c3a195a
https://creativecommons.org/licenses/by-nc-sa/4.0/
User-supplied self-contained GLB; original embedded source/author/licence metadata, all 375,148 triangles and 37 images retained. Runtime adaptations: metre scale/orientation, native wheel articulation, material-preserving batching, seated driver IK and fictional ocean support/exhaust. Adapted model retains CC BY-NC-SA 4.0; non-commercial use only.

Vehicle 9 — Lamborghini Aventador SVJ Mansory Twin Turbo PBR by VTX. CC BY-NC-SA 4.0.
https://sketchfab.com/3d-models/lamborghini-aventador-svj-mansory-twin-turbo-pbr-7fc25aa2e7a24e28be35829d635e93fa
https://creativecommons.org/licenses/by-nc-sa/4.0/
User-supplied self-contained GLB; original metadata, all 975,118 triangles and 86 embedded images retained. Adaptations: scale/orientation, native wheels/steering, material-preserving batching, driver IK and twin-turbo-positioned fictional exhaust. Adapted model retains CC BY-NC-SA 4.0; non-commercial use only.


Six automotive exhaust volume shaders are original game code. Research references only, no code or texture copied: https://github.com/Alchemist0823/three.quarks and https://docs.quarks.art/docs . Ship and jetski exhaust is unchanged. Overturning crest geometry, world-space swell and support-aware amplitude lifetime are original procedural approximations, not physical fluid simulation.

## Historical build-time tool — NOT SHIPPED / 历史工具，未随包

meshoptimizer 1.2.0, https://github.com/zeux/meshoptimizer , was evaluated for simplifying the excluded local-only LEGO model. Neither that model nor this build-time tool is included or used by the current runtime package. The following complete MIT notice is retained as a historical provenance record, not as an assertion that meshoptimizer is a shipped dependency.

MIT License

Copyright (c) 2016-2026 Arseny Kapoulkine

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Crest whitewater texture (2026-10-13)

`assets/fx/crest-foam-2.png` is the unmodified `Foam2.png` from Wave Harmonic's
Crest Ocean System: https://github.com/wave-harmonic/crest/blob/master/crest/Assets/Crest/Crest/Textures/Foam2.png

SHA-256: `0f11e52a0bba9eaefd6eb26684de18784058de208d602496df2c0f82ac950ad6`.
The image is used as a small fragment/temporary surface-foam mask, not as an
ocean-wide repeating whitecap coating. Particle simulation and collapse geometry
are original local code. No Unity runtime or closed-source Crest Water 5 code is
included. Source license: https://github.com/wave-harmonic/crest/blob/master/crest/Assets/Crest/Crest/LICENSE

MIT License

Copyright (c) 2019 Wave Harmonic and contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

Picster CC0 effect_1/effect_2 textures were evaluated as candidates, but are
radial lensflare masks, not water splashes; they are not imported in the game.


Three.js 0.180.0 — https://github.com/mrdoob/three.js/tree/r180
MIT License. Copyright © 2010-2025 three.js authors.
The full MIT notice is retained in the generated JavaScript bundle and licenses/three-MIT.txt.

Current rider — met4citizen / TalkingHead MPFB avatar, including MakeHuman MPFB skin, outfit, eyes, hair, facial geometry and rig. CC0 1.0 (public domain).
https://github.com/met4citizen/TalkingHead/blob/2afe6d79779313db8909badebf46f9805a6c7b70/avatars/mpfb.glb
https://github.com/met4citizen/TalkingHead/blob/2afe6d79779313db8909badebf46f9805a6c7b70/README.md
https://creativecommons.org/publicdomain/zero/1.0/
Adaptation: unused speech morphs removed while preserving all seven original texture atlases, skin weights and bind matrices. Blink morphs retained. Seated rowing / craft-specific IK and subtle skin/fabric response added locally. No TalkingHead application code is included.

Current vehicle 2 — 2012 Sea-Doo GTI SE 130 by BoatUS Foundation. CC BY 4.0.
https://sketchfab.com/3d-models/2012-sea-doo-gti-se-130-d7b3e903d7dc43a694720bd347f4fadf
https://sketchfab.com/boatusfoundation
https://creativecommons.org/licenses/by/4.0/
Obtained from https://github.com/bob6664569/open-water/tree/285b6ce32057c70191a7fe16c31d979fa383ac64/site/assets/boats . Adaptation: unit/orientation/waterline correction, animated native steering bone, rider anchors and original game nitro hardware. Native geometry and all original texture atlases retained. Brand names describe the third-party asset; no endorsement is implied.

Current vehicle 3 — Kawasaki 310XUltra Jet Ski by XOIAL. CC BY 4.0.
https://sketchfab.com/3d-models/kawasaki-310xultra-jet-ski-37a2348f02da472d98310fd5621307c6
https://sketchfab.com/XOIAL
https://creativecommons.org/licenses/by/4.0/
User-provided local GLB. Embedded author/source/license metadata retained. All four original embedded texture atlases retained. Adaptations: metre scale, bow/waterline correction, native disconnected handlebar components reparented for steering, restrained clearcoat and enabled normal response, craft-specific seated hand/foot IK and original game nitro hardware. Brand/model names identify the asset only; fictional game boost performance does not describe a real Kawasaki vehicle and no endorsement is implied.

Current vehicle 6 — 2025 Xiaomi SU7 Ultra Production Version by Ddiaz Design. CC BY-NC-SA 4.0.
https://sketchfab.com/3d-models/2025-xiaomi-su7-ultra-production-version-9d0a0a9285cb4ca59ccb9322ddf58d24
https://sketchfab.com/ddiaz-design
http://creativecommons.org/licenses/by-nc-sa/4.0/
User-provided local GLB. The original binary, all 747,246 triangles and all 28 embedded images are retained. Runtime adaptations: metre scale/orientation, native wheel/steering articulation, cockpit-sized driver and original game nitro / fictional sea support. The adapted Xiaomi model is offered under the same CC BY-NC-SA 4.0 terms; non-commercial use only. This licence does not relicense unrelated engine code or other separately credited assets. Publication and access status depend on the distribution channel; the corresponding model adaptation remains subject to its NonCommercial licence condition.


Current vehicle 5 — Mercedes AMG GT3 Evo 2020 | www.vecarz.com by vecarz (heynic). CC BY 4.0.
https://sketchfab.com/3d-models/mercedes-amg-gt3-evo-2020-wwwvecarzcom-39e77243109f4e5cb7134b6f31c8f619
https://sketchfab.com/heynic
https://creativecommons.org/licenses/by/4.0/
User-provided local file `mercedes_benz_amg_gt3_red_bull.glb`. The 496,613 source triangles and all 41 embedded images are retained. Adaptations: metre scale/orientation, native wheels partitioned for rolling and front steering, native steering wheel articulation, left-cockpit driver IK, restrained rubber/paint/glass response and original game nitro nozzles. The fictional sea-driving, wave flight and current 240 / 340 km/h limits are game mechanics, not real-world Mercedes performance. Brand names and livery identify the supplied artwork only; no endorsement or trademark licence is implied. The model is self-contained and requires no separate texture folder; the web runtime downloads its packaged GLB from the serving origin.

Current vehicle 4 — Assault Boat by tnnv. CC BY 4.0.
https://sketchfab.com/3d-models/assault-boat-0d4fca4f2e014cd7b6aefd4653b1508c
https://sketchfab.com/tnnv
https://creativecommons.org/licenses/by/4.0/
Obtained from the pinned open-water repository above: assault-boat_9.5.glb. All three native 4K colour / metallic-roughness / normal atlases are retained. Adaptations: metre scale and waterline, duplicated native outboard for twin-engine layout, original missing helm / seat / steering wheel, inboard nitro hardware and craft-specific rig. Current fictional ORCA 100 / 160 km/h limits are game settings, not real boat specifications. No application code from open-water is included.

## Historical models — NOT SHIPPED / 历史模型，未随包

These records describe private development candidates and backups only. Their model, texture and animation files are not distributed in this runtime package.

Previous vehicle 3 (historical source regression fixture, NOT SHIPPED) — Zodiac boat by RedC130. CC BY 4.0.
https://sketchfab.com/3d-models/zodiac-boat-a10b7997f1514bd7829ece74f68c681c
https://sketchfab.com/RedC130
https://creativecommons.org/licenses/by/4.0/
Obtained from the same pinned open-water repository above. Adaptation: physical unit/waterline correction, non-emissive rubber/paint materials, craft-specific rider pose, added inboard nitro nozzles and plumes. The game's fictional ORCA performance (200 / 360 km/h) is not a claim about a real Zodiac vessel. Source geometry was retained in the historical development fixture. Its source hash records are not included in this runtime-only package.

Previous rider (historical development backup only, NOT SHIPPED): Sam character, rig and embedded textures — Innerscene, adapted from MakeHuman/MPFB assets; released CC0 1.0 (public domain).
https://www.innerscene.com/tools/library/3d-parts/run-sam-3d-person-animated-fa008c06
https://creativecommons.org/publicdomain/zero/1.0/
Custom seated rowing pose and IK were added for this project; the original run animation is not played. The held phone is hidden. This character replaces the temporary Mixamo model used during development.

Previous Sam garment images (historical development backup only, NOT SHIPPED): MakeHuman male_casualsuit02 garment diffuse and ambient-occlusion images — CC0 1.0.
Data Collection AB, Joel Palmius and Jonas Hauquier. Released CC0 September 2020, as recorded in the current official asset archive. Source: https://static.makehumancommunity.org/assets/assetpacks/makehuman_system_assets.html .
Exact UV correspondence with the existing Sam clothes was verified. Attribution, the original dedication, asset licence and image hashes were retained with the historical development candidate; those candidate files are not part of this runtime-only package.

## Shipped sky assets / 随包天空素材

Poly Haven HDR skies — CC0 1.0, photographed by Greg Zaal, edited by Jarod Guest:
https://polyhaven.com/a/kloofendal_48d_partly_cloudy_puresky
https://polyhaven.com/a/kloppenheim_06_puresky
https://polyhaven.com/license
The HDRs are embedded in the distributed JavaScript bundle rather than requested from Poly Haven at play time. Initial delivery of this web bundle and its other packaged resources uses HTTP/HTTPS; this is not an offline standalone-file build.

Ocean simulation/shaders, retained wooden rowboat geometry, added nitro hardware, procedural surface detail, controls and visual design were authored for this game. The legacy procedural jetski and catamaran remain in source regression fixtures only; current motor craft use the credited GLBs above. Spectral rendering research references (not vendored code): https://github.com/jbouny/fft-ocean , https://github.com/dli/waves , https://github.com/squall01337/abyssal-ocean . The original CPU FFT implementation is in src/spectrum.js. The runtime uses packaged resources served from the hosting origin, not an upstream asset CDN. HTTP/HTTPS delivery is required; any host sign-in requirement depends on the deployment audience and provider. This statement does not promise account-free hosting or an offline launch.

## Historical development comparisons — NOT SHIPPED / 历史对比素材，未随包

Development comparisons (model, texture and animation files are not included in this runtime package): assets/Soldier.glb and assets/Michelle.glb, Mixamo models from the official Three.js r180 examples. Mixamo assets retain Adobe's original licensing terms, not the MIT license. See https://helpx.adobe.com/creative-cloud/faq/mixamo-faq.html and https://github.com/mrdoob/three.js/blob/r180/examples/webgpu_skinning.html .

## Shipped water-entry and glass effects / 随包入水与玻璃效果

Water-entry mist mask: Kenney Particle Pack, Copyright 2020 Kenney, CC0 1.0 Universal. https://kenney.nl/assets/particle-pack . Embedded assets/fx/kenney-smoke-04.png, original smoke_04.png, used as transparent fine mist.

Lens-water refraction adapted from Lucas Bebber / Codrops RainEffect water.frag, https://github.com/codrops/RainEffect . The original README allows integration/modification in personal or commercial projects, prohibits redistribution or sale as-is, and refers to https://tympanus.net/codrops/licensing/ . Current license notice below. This game adapts the refraction to moving analytic drops and live scene color; it does not redistribute the original demo as-is.

Settings and model-workbench glass material: generated edge geometry adapted from kwlck/liquid-glass-web, https://github.com/kwlck/liquid-glass-web . Source: src/geometry.js, retrieved 2026-10-21. Local modifications encode a bevel mask in the blue channel, cap map dimensions and cache geometry. The main optical/elastic material now uses the rdev native adapter documented below. No demo photographs or Apple assets are included.

MIT License

Copyright (c) 2026 kwlck

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

The original code and documentation are covered by this license. The photographs in assets/*.jpg are excluded and retain the Unsplash License; none are included here.

The following notice applies to the Codrops adaptation above:

Copyright (c) 2026 Codrops

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---

## Liquid Glass React — adapted optical / elastic layer

Source: https://github.com/rdev/liquid-glass-react/blob/master/src/index.tsx

Retrieved 2026-10-21. Portions of the SVG RGB channel displacement, edge compositing and pointer elasticity were adapted into a native DOM implementation in `src/vendor/rdev-glass.js`. The experimental CPU fragment-map generator is adapted in `src/vendor/rdev-shader-map.js` from https://github.com/rdev/liquid-glass-react/blob/master/src/shader-utils.ts , itself adapted from https://github.com/shuding/liquid-glass . The game does not install or use the React runtime. Local modifications cap map allocation, add a generated edge mask, bound elastic transforms, and handle reduced-motion preferences, lazy initialization and cleanup. Demo images and example-site assets are not included.

MIT License

Copyright 2025 MAX ROVENSKY

Copyright (c) 2025 Shu Ding

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
