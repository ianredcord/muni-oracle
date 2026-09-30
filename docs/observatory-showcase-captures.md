# Showcase captures — 2026-09-30

Real existing male-model renders; interface excluded.

- Meridians: all 21 available non-Tung groups; 860 point meshes. Camera [8,-0.2,-28], target [0,-0.2,0]. Labels/rulers hidden. Actual circulation shader speed 1, 6.45-second WebM loop. Four stomach segments absent; flow direction unverified.
- Anatomy: bone/organ and muscle renders, camera [0,-0.2,-29], target [0,-0.2,0]. Composited at image midline; not a live clipping feature.
- Tung: DSQX regions 1/2/3, 81 bilateral point meshes. Camera [-3.5,0.7,-7.5], target [-3.5,0.7,0.4]. Cropped hand/forearm; dorsal points occluded.
- FM: 218 records, 422 existing male placement markers and 10 category connections. Camera [5,-0.2,-29]. Draft placements/connections unverified.

Bilingual copy retains limitations. Video has controls, muted inline playback, poster and no autoplay under reduced motion.

## Full-frame trains and trigger captures
- Superficial Back Line: rear oblique camera [6,-0.2,29], target [0,-0.2,0]. Original muscle/tendon layers, bone opacity 0.7; labels off.
- Infraspinatus: camera [-8,4.3,17], target [0,3.7,0]. Existing candidate points and referred-pain atlas; meridians/rulers hidden. Markers use x-ray visibility.
- Both captures: 1600 x 913, same canvas proportions as the anatomy showcase. Preliminary registration limitations retained.

## Review fixes
- Unused source PNGs, prompt files and rejected sculpture WebP moved to docs/design-assets/observatory (not publicly served).
- Hero retains the chosen concept image, prominently labelled above it at 15px desktop / 14px mobile.
- Both video encodings begin with 0.3 seconds of the populated poster render; no initial seek in page code. MP4: H.264/yuv420p, faststart, 1600x914 at 20fps. WebM: VP9, same first frame. MP4 source is listed first.
- Production build, TypeScript and targeted ESLint passed. Chromium chose MP4 and rendered time 0. Desktop/mobile checked for overflow. Real iPhone Safari remains untested.
