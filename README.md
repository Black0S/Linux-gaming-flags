# ⚡ Linux Gaming Flags

> The centralized reference for Linux Gaming environment variables and flags.

---

## Overview

A dependency-free static site covering every useful flag and variable for gaming on Linux — Proton, DXVK, Vulkan, NVIDIA, Gamescope, Wayland, MangoHud, GameMode, Mesa, Wine and more.

**→ [Live demo](#)**

---

## Structure

```
linux-gaming-flags/
├── index.html
├── css/
│   ├── main.css          # Variables, reset, layout
│   ├── components.css    # Navbar, tables, search, toast
│   └── animations.css    # Keyframes, transitions
└── js/
    ├── i18n.js           # FR / EN translations
    ├── data.js           # All data (flags + descriptions)
    ├── search.js         # Search engine + highlight
    └── app.js            # Main logic, DOM, interactions
```

---

## Contributing

This project aims to be **the single place** where every Linux Gaming flag lives.

If you know a missing flag, have a correction, or a better description — pull requests are open and very much welcome. The more people contribute, the more useful this becomes for everyone.

**How to contribute:**

1. Fork the repo
2. Add your flags in `js/data.js` following the existing format
3. Open a Pull Request with a short description

**Flag format in `data.js`:**

```js
{ flag: 'MY_FLAG=1', type: 'env', fr: 'Description en français', en: 'Description in English' }
```

Available types: `env` · `flag` · `cmd` · `val`

---

## Categories

`Proton / Wine` · `DXVK / Vulkan` · `NVIDIA / OpenGL` · `Wayland / X11 / Audio`  
`Gamescope / Upscaling` · `GameMode / CPU` · `Wine DLL Overrides` · `Steam / Launch Options`  
`MangoHud / Overlay` · `Mesa / AMD / Intel`

---

## License

MIT