# AstroMagic 2.5 — Photoshop plugin for astrophotography

AstroMagic is the Photoshop half of the PiMagic Studio workflow: it takes the
files PiMagic hands over and builds the layer structure for you — narrowband
palettes (SHO, HOO, Ha), star and annotation groups, continuum subtraction, and
structure enhancement — so the creative work starts where the busywork usually
does.

AstroMagic is **free**. No licence key, no activation, no server contact.

© 2026 Christian Sasse & Craig Stocks • PiMagic Studio

---

## What's new in 2.5 (build 2.5-0001)

**Photoshop UI compatibility fix.** Adobe's new UXP interface backend (Photoshop
Beta 27.8, public release 27.9) draws native chrome over HTML `<button>`
elements, which left every AstroMagic button grey with only a thin coloured rim.
The whole panel is now built from styled `<div>` controls with an opaque colour
under every gradient, so the colour coding is back and stays robust against
further changes to Adobe's control styling. The panel title also no longer
relies on gradient-clipped text, which the same update turned into a solid box.

No processing behaviour changed — this release is purely the interface.

## Requirements

- Adobe Photoshop 2024 (v24) or later — verified on Photoshop Beta 27.8
- Recommended: PiMagic Studio in PixInsight, for the full pipeline

## Install

1. **Plugin** — double-click `AstroMagic_PS.ccx`. Creative Cloud installs it.
   Restart Photoshop, then open it from **Plugins → AstroMagic**.
2. **Actions** — in Photoshop, `File → Scripts → Browse…` and choose
   `Install_PsMagic_Actions.jsx`. Keep `PsMagic_Actions.atn` in the same folder.
   The PsMagic Actions set is required.
3. `SaveForPiMagic.atn` is an extra action set for handing files back to PiMagic.

Updating from an earlier version: install the new `.ccx` the same way and
restart Photoshop.

## What's in this folder

| File | Purpose |
| --- | --- |
| `AstroMagic_PS.ccx` | the Photoshop plugin |
| `PsMagic_Actions.atn` | required Photoshop action set |
| `Install_PsMagic_Actions.jsx` | installs the action set |
| `SaveForPiMagic.atn` | save-back action set |
| `AstroMagic.html` / `.pdf` | AstroMagic reference |
| `AstroMagic_User_Manual_v1.5.pdf` | user manual |
| `PiMagic_AstroMagic_Installation_Guide.html` / `.pdf` | full workflow install guide |

More at [pimagicstudio.com](https://pimagicstudio.com).
