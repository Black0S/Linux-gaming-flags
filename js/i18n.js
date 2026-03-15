/* LGF · i18n.js */
const LANG = {
  fr: {
    nav_status: 'v3.0 · LIVE',
    hero_eye: 'Référence complète',
    hero_l1: 'Linux',
    hero_l2: 'Gaming',
    hero_l3: 'FLAGS',
    hero_desc: "Référence exhaustive des variables d'environnement et flags pour Steam, Proton, Wine, DXVK, VKD3D, Vulkan, Gamescope, Wayland, NVIDIA, MangoHud, GameMode, FSR, DLSS, vkBasalt, PRIME et Mesa. Centralisé pour la communauté, maintenu par la communauté.",
    stat_total: 'Total', stat_cats: 'Catégories', stat_vis: 'Affichés', stat_new: 'Nouveaux',
    search_ph: 'Rechercher un flag, une variable, une description…',
    pill_all: 'Tout',
    th_flag: 'Variable / Flag', th_desc: 'Description', th_type: 'Type',
    nores_t: 'Aucun résultat', nores_s: 'Essayez un autre terme de recherche.',
    toast: 'Copié !',
    sb_title: 'Catégories',
    s_proton: 'Proton / Wine', s_dxvk: 'DXVK / Vulkan', s_nvidia: 'NVIDIA / OpenGL',
    s_wayland: 'Wayland / X11', s_gamescope: 'Gamescope', s_gamemode: 'GameMode',
    s_wine: 'Wine / DLL', s_steam: 'Steam Launch', s_mangohud: 'MangoHud',
    s_mesa: 'Mesa / AMD', s_upscaling: 'FSR / DLSS / XeSS', s_vkd3d: 'VKD3D / DX12',
    s_vkbasalt: 'vkBasalt', s_prime: 'GPU PRIME',
    vars: 'vars',
    footer: '© 2026 Linux Gaming Flags',
    by: 'par',
  },
  en: {
    nav_status: 'v3.0 · LIVE',
    hero_eye: 'Complete Reference',
    hero_l1: 'Linux',
    hero_l2: 'Gaming',
    hero_l3: 'FLAGS',
    hero_desc: 'Exhaustive reference of environment variables and flags for Steam, Proton, Wine, DXVK, VKD3D, Vulkan, Gamescope, Wayland, NVIDIA, MangoHud, GameMode, FSR, DLSS, vkBasalt, PRIME and Mesa. Centralized for the community, maintained by the community.',
    stat_total: 'Total', stat_cats: 'Categories', stat_vis: 'Displayed', stat_new: 'New',
    search_ph: 'Search a flag, variable, description…',
    pill_all: 'All',
    th_flag: 'Variable / Flag', th_desc: 'Description', th_type: 'Type',
    nores_t: 'No results', nores_s: 'Try a different search term.',
    toast: 'Copied!',
    sb_title: 'Categories',
    s_proton: 'Proton / Wine', s_dxvk: 'DXVK / Vulkan', s_nvidia: 'NVIDIA / OpenGL',
    s_wayland: 'Wayland / X11', s_gamescope: 'Gamescope', s_gamemode: 'GameMode',
    s_wine: 'Wine / DLL', s_steam: 'Steam Launch', s_mangohud: 'MangoHud',
    s_mesa: 'Mesa / AMD', s_upscaling: 'FSR / DLSS / XeSS', s_vkd3d: 'VKD3D / DX12',
    s_vkbasalt: 'vkBasalt', s_prime: 'GPU PRIME',
    vars: 'vars',
    footer: '© 2026 Linux Gaming Flags',
    by: 'by',
  }
};
let lang = localStorage.getItem('lgf_lang') || 'fr';
const t = k => LANG[lang]?.[k] ?? k;
const setLang = l => { lang=l; localStorage.setItem('lgf_lang',l); };
const getLang = () => lang;
