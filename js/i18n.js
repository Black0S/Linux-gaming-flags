/* ═══════════════════════════════════════════════════════
   LINUX GAMING FLAGS — i18n.js
   Internationalization: FR / EN
═══════════════════════════════════════════════════════ */

const I18N = {
  fr: {
    /* Navbar */
    nav_badge:      'v2.0 · Référence',
    nav_brand:      'Linux Gaming Flags',
    nav_brand_sub:  'Reference',

    /* Hero */
    hero_eyebrow:   'Documentation complète',
    hero_title_1:   'Flags &',
    hero_title_2:   'Variables',
    hero_title_3:   'Linux Gaming',
    hero_desc:      'Référence exhaustive des variables d\'environnement et flags pour Steam, Proton, Wine, Vulkan, DXVK, Gamescope, Wayland, NVIDIA, MangoHud et GameMode.',

    /* Stats */
    stat_total:     'Total flags',
    stat_cats:      'Catégories',
    stat_visible:   'Affichés',
    stat_new:       'Nouveaux',

    /* Search */
    search_placeholder: 'Rechercher une variable, un flag, une description…',
    filter_all:         'Tout',

    /* Table headers */
    th_flag:        'Variable / Flag',
    th_desc:        'Description',
    th_type:        'Type',

    /* Type badges */
    type_env:       'ENV',
    type_flag:      'FLAG',
    type_cmd:       'CMD',
    type_val:       'VAL',

    /* No results */
    noresult_title: 'Aucun résultat',
    noresult_sub:   'Essayez un autre terme de recherche.',

    /* Toast */
    toast_copied:   'Copié dans le presse-papiers',

    /* Footer */
    footer_copy:    '© 2025 Linux Gaming Flags',
    footer_link1:   'GitHub',
    footer_link2:   'Arch Wiki',
    footer_link3:   'ProtonDB',

    /* Section titles */
    s_proton:     'Proton / Wine',
    s_dxvk:       'DXVK / Vulkan',
    s_nvidia:     'NVIDIA / OpenGL',
    s_wayland:    'Wayland / X11 / Audio',
    s_gamescope:  'Gamescope / Upscaling',
    s_gamemode:   'GameMode / CPU',
    s_wine:       'Wine / DLL Overrides',
    s_steam:      'Steam / Launch Options',
    s_mangohud:   'MangoHud / Overlay',
    s_mesa:       'Mesa / AMD / Intel',

    /* Section counts */
    s_vars:       'variables',
  },

  en: {
    /* Navbar */
    nav_badge:      'v2.0 · Reference',
    nav_brand:      'Linux Gaming Flags',
    nav_brand_sub:  'Reference',

    /* Hero */
    hero_eyebrow:   'Complete Documentation',
    hero_title_1:   'Flags &',
    hero_title_2:   'Variables',
    hero_title_3:   'Linux Gaming',
    hero_desc:      'Exhaustive reference of environment variables and flags for Steam, Proton, Wine, Vulkan, DXVK, Gamescope, Wayland, NVIDIA, MangoHud and GameMode.',

    /* Stats */
    stat_total:     'Total flags',
    stat_cats:      'Categories',
    stat_visible:   'Displayed',
    stat_new:       'New',

    /* Search */
    search_placeholder: 'Search a variable, flag, description…',
    filter_all:         'All',

    /* Table headers */
    th_flag:        'Variable / Flag',
    th_desc:        'Description',
    th_type:        'Type',

    /* Type badges */
    type_env:       'ENV',
    type_flag:      'FLAG',
    type_cmd:       'CMD',
    type_val:       'VAL',

    /* No results */
    noresult_title: 'No results found',
    noresult_sub:   'Try a different search term.',

    /* Toast */
    toast_copied:   'Copied to clipboard',

    /* Footer */
    footer_copy:    '© 2025 Linux Gaming Flags',
    footer_link1:   'GitHub',
    footer_link2:   'Arch Wiki',
    footer_link3:   'ProtonDB',

    /* Section titles */
    s_proton:     'Proton / Wine',
    s_dxvk:       'DXVK / Vulkan',
    s_nvidia:     'NVIDIA / OpenGL',
    s_wayland:    'Wayland / X11 / Audio',
    s_gamescope:  'Gamescope / Upscaling',
    s_gamemode:   'GameMode / CPU',
    s_wine:       'Wine / DLL Overrides',
    s_steam:      'Steam / Launch Options',
    s_mangohud:   'MangoHud / Overlay',
    s_mesa:       'Mesa / AMD / Intel',

    /* Section counts */
    s_vars:       'variables',
  }
};

/* ─── Current language state ─── */
let currentLang = localStorage.getItem('lgf_lang') || 'fr';

function t(key) {
  return (I18N[currentLang] && I18N[currentLang][key]) || key;
}

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('lgf_lang', lang);
}

function getLang() {
  return currentLang;
}
