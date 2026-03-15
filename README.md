![Linux Gaming Flags Preview](/file/001.png)

# ⚡ Linux Gaming Flags

> The centralized reference for Linux Gaming environment variables and flags.

**[→ Live Site](https://black0s.github.io/Linux-gaming-flags/#)**

---

## What is this?

A fully static, dependency-free reference site covering **276+ flags and environment variables** across 14 categories for gaming on Linux — Proton, Wine, DXVK, VKD3D, Vulkan, Gamescope, Wayland, NVIDIA, MangoHud, GameMode, FSR, DLSS, XeSS, vkBasalt, PRIME, Mesa and more.

The goal is simple: **one place, all the flags.** No more hunting across wikis, GitHub issues and forum posts.

---

## Features

- **276+ flags** across 14 categories
- Live search with highlight — across flags and descriptions
- Sidebar navigation with scroll-spy (desktop)
- Category filter pills (mobile)
- One-click copy for every flag
- FR / EN language toggle
- Fully responsive — desktop, tablet, mobile
- Animated premium UI — zero dependencies, fully static

---

## Stack

```
index.html
css/
  tokens.css       Design system, fluid spacing, color palette
  layout.css       Topbar, sidebar, page grid, footer
  components.css   Hero, tables, cards, badges, toast
js/
  bg.js            Animated background (orbs, canvas mesh, scanline, cursor)
  i18n.js          FR / EN translations
  data.js          All flags and descriptions
  app.js           Search, filter, sidebar, scroll-spy, copy
```

---

## A note on partial AI assistance

This project was built with the help of AI to accelerate development — both for the UI/UX code and for researching and compiling the initial list of flags. Over time, I intend to manually verify each flag to ensure accuracy.

**This site is a potential flag database, not a guaranteed reference.** Flags, their effects, and their compatibility can vary depending on your kernel version, driver version, hardware, and Proton/Wine build. Always cross-reference with official documentation before applying flags to your system.

---

## ⚠️ Disclaimer

> The information provided on this site is compiled from various community sources and AI-assisted research. I am not responsible for any result, damage, system instability, or data loss caused by the use of any flag or variable listed here. **Use at your own risk.** Always verify flags against official documentation for your specific setup.

---

## Contributing

If you know a missing flag, have a correction, or a better description — PRs are open.

1. Fork the repo
2. Add your flags in `js/data.js` following the existing format
3. Open a Pull Request with a short description

**Flag format:**
```js
{ f: 'MY_FLAG=1', t: 'env', fr: 'Description en français', en: 'Description in English' }
```

Types: `env` · `flag` · `cmd` · `val`

---

## License

MIT — Created by **Black0S**