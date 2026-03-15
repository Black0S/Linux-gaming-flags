/* ═══════════════════════════════════════════════════════
   LINUX GAMING FLAGS — data.js
   All flags, variables & descriptions (FR + EN)
   Sections: Proton, DXVK, NVIDIA, Wayland, Gamescope,
             GameMode, Wine/DLL, Steam, MangoHud, Mesa
═══════════════════════════════════════════════════════ */

const SECTIONS = [
  /* ─────────────────────────────────────────────────
     1. PROTON / WINE
  ───────────────────────────────────────────────── */
  {
    id: 'proton',
    icon: '⚗️',
    cssClass: 'section-proton',
    tags: ['Proton', 'Wine', 'Steam'],
    rows: [
      { flag: 'PROTON_USE_NTSYNC',                 type: 'env',  fr: 'Active NTSYNC — réduit le stuttering en jeu',                              en: 'Enables NTSYNC — reduces in-game stuttering' },
      { flag: 'PROTON_ENABLE_WAYLAND',             type: 'env',  fr: 'Utilise Wayland au lieu de XWayland',                                      en: 'Use native Wayland instead of XWayland' },
      { flag: 'PROTON_ENABLE_NVAPI',               type: 'env',  fr: 'Active NVAPI — support des fonctionnalités NVIDIA (DLSS, Reflex…)',         en: 'Enables NVAPI — NVIDIA features support (DLSS, Reflex…)' },
      { flag: 'PROTON_NO_ESYNC',                   type: 'env',  fr: 'Désactive Eventfd Sync (ESYNC)',                                            en: 'Disable Eventfd Synchronization (ESYNC)' },
      { flag: 'PROTON_NO_FSYNC',                   type: 'env',  fr: 'Désactive Futex Sync (FSYNC)',                                              en: 'Disable Futex Synchronization (FSYNC)' },
      { flag: 'PROTON_FORCE_LARGE_ADDRESS_AWARE',  type: 'env',  fr: 'Autorise l\'accès à plus de 4 Go de RAM pour les jeux 32-bit',             en: 'Allow >4 GB RAM access for 32-bit games' },
      { flag: 'PROTON_LOG=1',                      type: 'val',  fr: 'Active le logging complet de Proton (fichier steam-APPID.log)',             en: 'Enable full Proton logging (steam-APPID.log file)' },
      { flag: 'PROTON_LOG=debug',                  type: 'val',  fr: 'Active les logs de débogage détaillés',                                     en: 'Enable verbose debug logs' },
      { flag: 'PROTON_NO_D3D11',                   type: 'env',  fr: 'Désactive la couche Direct3D 11',                                           en: 'Disable Direct3D 11 layer' },
      { flag: 'PROTON_NO_D3D12',                   type: 'env',  fr: 'Désactive la couche Direct3D 12',                                           en: 'Disable Direct3D 12 layer' },
      { flag: 'PROTON_USE_WINED3D',                type: 'env',  fr: 'Force WineD3D au lieu de DXVK (plus compatible, moins performant)',         en: 'Force WineD3D instead of DXVK (more compatible, less fast)' },
      { flag: 'PROTON_HIDE_NVIDIA_GPU',            type: 'env',  fr: 'Masque le GPU NVIDIA (pour contourner certaines protections anti-cheat)',   en: 'Hide NVIDIA GPU (bypass some anti-cheat protections)' },
      { flag: 'PROTON_USE_D9VK',                   type: 'env',  fr: 'Force D9VK (DirectX9 vers Vulkan) pour les jeux DX9',                      en: 'Force D9VK (DirectX9 to Vulkan) for DX9 games' },
      { flag: 'PROTON_NO_STEAM_XINPUT',            type: 'env',  fr: 'Désactive l\'émulation XInput de Steam (utile pour les manettes custom)',   en: 'Disable Steam XInput emulation (useful for custom controllers)' },
      { flag: 'PROTON_NO_XIM',                     type: 'env',  fr: 'Désactive X Input Method (résout des problèmes de clavier)',                en: 'Disable X Input Method (fixes keyboard issues)' },
      { flag: 'PROTON_ENABLE_NVAPI_WISDOMCRAFTER', type: 'env',  fr: 'Active NVAPI étendu pour DLSS Frame Generation',                            en: 'Enable extended NVAPI for DLSS Frame Generation' },
      { flag: 'WINE_LARGE_ADDRESS_AWARE=1',        type: 'env',  fr: 'Version Wine de LARGE_ADDRESS_AWARE pour les processus 32-bit',             en: 'Wine version of LARGE_ADDRESS_AWARE for 32-bit processes' },
      { flag: 'WINE_FULLSCREEN_INTEGER_SCALING',   type: 'env',  fr: 'Mise à l\'échelle entière en plein écran pour jeux pixelart',               en: 'Integer scaling in fullscreen for pixel art games' },
      { flag: 'WINEPREFIX=<path>',                 type: 'env',  fr: 'Définit le chemin du préfixe Wine utilisé',                                 en: 'Set the Wine prefix path to use' },
      { flag: 'WINEESYNC=1',                       type: 'env',  fr: 'Active Esync sur Wine natif (hors Proton)',                                  en: 'Enable Esync on native Wine (outside Proton)' },
      { flag: 'WINEFSYNC=1',                       type: 'env',  fr: 'Active Fsync sur Wine natif (hors Proton)',                                  en: 'Enable Fsync on native Wine (outside Proton)' },
      { flag: 'STAGING_WRITECOPY=1',               type: 'env',  fr: 'Active wine-staging write-copy (améliore la compatibilité)',                 en: 'Enable wine-staging write-copy (improves compatibility)' },
    ]
  },

  /* ─────────────────────────────────────────────────
     2. DXVK / VULKAN
  ───────────────────────────────────────────────── */
  {
    id: 'dxvk',
    icon: '🔺',
    cssClass: 'section-dxvk',
    tags: ['DXVK', 'Vulkan', 'Shaders'],
    rows: [
      { flag: 'DXVK_ASYNC=1',                          type: 'val',  fr: 'Compilation de shaders asynchrone (FPS plus fluide, peut causer des glitches)',        en: 'Async shader compilation (smoother FPS, may cause glitches)' },
      { flag: 'DXVK_HUD=1',                            type: 'val',  fr: 'Affiche le HUD DXVK (FPS, VRAM, frametime)',                                            en: 'Show DXVK HUD (FPS, VRAM, frametime)' },
      { flag: 'DXVK_HUD=fps',                          type: 'val',  fr: 'HUD minimaliste — uniquement les FPS',                                                   en: 'Minimal HUD — FPS only' },
      { flag: 'DXVK_HUD=full',                         type: 'val',  fr: 'HUD complet (fps, memory, draws, etc.)',                                                 en: 'Full HUD (fps, memory, draws, etc.)' },
      { flag: 'DXVK_HUD=fps,memory,gpuload',           type: 'val',  fr: 'HUD personnalisé : FPS + mémoire + charge GPU',                                          en: 'Custom HUD: FPS + memory + GPU load' },
      { flag: 'DXVK_LOG_LEVEL=none',                   type: 'val',  fr: 'Désactive tous les logs DXVK',                                                           en: 'Disable all DXVK logs' },
      { flag: 'DXVK_LOG_LEVEL=info',                   type: 'val',  fr: 'Logs DXVK niveau info',                                                                  en: 'DXVK info-level logs' },
      { flag: 'DXVK_LOG_LEVEL=warn',                   type: 'val',  fr: 'Logs DXVK niveau avertissement',                                                         en: 'DXVK warning-level logs' },
      { flag: 'DXVK_LOG_LEVEL=error',                  type: 'val',  fr: 'Logs DXVK niveau erreur uniquement',                                                     en: 'DXVK error-level logs only' },
      { flag: 'DXVK_LOG_PATH=<path>',                  type: 'env',  fr: 'Chemin de sauvegarde des logs DXVK',                                                     en: 'Path to save DXVK log files' },
      { flag: 'DXVK_STATE_CACHE=1',                    type: 'val',  fr: 'Active le cache pipeline pour shaders (réduit le stutter)',                              en: 'Enable pipeline cache for shaders (reduces stutter)' },
      { flag: 'DXVK_STATE_CACHE_PATH=<path>',          type: 'env',  fr: 'Chemin du cache de shaders DXVK',                                                        en: 'DXVK shader cache path' },
      { flag: 'DXVK_ENABLE_FULLSCREEN=1',              type: 'val',  fr: 'Active le plein écran exclusif',                                                         en: 'Enable exclusive fullscreen' },
      { flag: 'DXVK_ENABLE_FULLSCREEN=0',              type: 'val',  fr: 'Désactive le plein écran exclusif',                                                       en: 'Disable exclusive fullscreen' },
      { flag: 'DXVK_SHADER_ALLOW_SLOW_OPS=1',          type: 'val',  fr: 'Autorise les opérations lentes pour améliorer la compatibilité',                         en: 'Allow slow operations to improve compatibility' },
      { flag: 'DXVK_ENABLE_VRS=1',                     type: 'val',  fr: 'Active Variable Rate Shading (VRS)',                                                     en: 'Enable Variable Rate Shading (VRS)' },
      { flag: 'DXVK_DISABLE_EXPLICIT_FLUSH=1',         type: 'val',  fr: 'Désactive le flush GPU explicite (fix de bugs de rendu)',                                en: 'Disable explicit GPU flush (rendering bug fix)' },
      { flag: 'DXVK_FRAME_RATE=<num>',                 type: 'val',  fr: 'Limite les FPS au niveau DXVK',                                                          en: 'Limit FPS at DXVK level' },
      { flag: 'DXVK_GPLAASYNC=1',                      type: 'val',  fr: 'Active le patch async DXVK-gplasync (compilations asynchrones GPLASYNC)',                en: 'Enable DXVK-gplasync async patch (GPL async compilations)' },
      { flag: 'DXVK_FILTER_DEVICE_NAME=<name>',        type: 'env',  fr: 'Forcer DXVK à utiliser un GPU spécifique par nom',                                       en: 'Force DXVK to use a specific GPU by name' },
      { flag: '__VK_LAYER_NV_optimus=NVIDIA_only',      type: 'env',  fr: 'Force le GPU NVIDIA sur systèmes Optimus (laptops)',                                     en: 'Force NVIDIA GPU on Optimus systems (laptops)' },
      { flag: '__VK_LAYER_MESA_device_select=1',        type: 'env',  fr: 'Active la sélection de GPU Mesa',                                                        en: 'Enable Mesa GPU device selection layer' },
      { flag: 'VK_ICD_FILENAMES=<path>',               type: 'env',  fr: 'Spécifie manuellement le fichier ICD Vulkan à utiliser',                                 en: 'Manually specify the Vulkan ICD file to use' },
      { flag: 'MESA_LOADER_DRIVER_OVERRIDE=<driver>',   type: 'env',  fr: 'Force un driver Mesa spécifique (ex: radeonsi, iris)',                                   en: 'Force a specific Mesa driver (e.g. radeonsi, iris)' },
      { flag: 'RADV_DEBUG=<options>',                   type: 'env',  fr: 'Options de débogage du driver Vulkan RADV (AMD)',                                        en: 'Debug options for RADV Vulkan driver (AMD)' },
      { flag: 'RADV_PERFTEST=<options>',                type: 'env',  fr: 'Options de performance expérimentales RADV (ex: aco, rt)',                               en: 'Experimental RADV performance options (e.g. aco, rt)' },
      { flag: 'ANV_ENABLE_PIPELINE_CACHE=1',            type: 'val',  fr: 'Active le cache pipeline pour ANV (Intel Vulkan driver)',                                en: 'Enable pipeline cache for ANV (Intel Vulkan driver)' },
    ]
  },

  /* ─────────────────────────────────────────────────
     3. NVIDIA / OPENGL
  ───────────────────────────────────────────────── */
  {
    id: 'nvidia',
    icon: '🟢',
    cssClass: 'section-nvidia',
    tags: ['NVIDIA', 'OpenGL', 'GPU'],
    rows: [
      { flag: '__NV_PRIME_RENDER_OFFLOAD=1',              type: 'env',  fr: 'Active le GPU offload NVIDIA sur laptops hybrides',                     en: 'Enable NVIDIA GPU offload on hybrid laptops' },
      { flag: '__NV_PRIME_RENDER_OFFLOAD_PROVIDER=NVIDIA-G0', type: 'env', fr: 'Spécifie le provider GPU NVIDIA à utiliser',                        en: 'Specify which NVIDIA GPU provider to use' },
      { flag: '__GL_THREADED_OPTIMIZATIONS=1',            type: 'val',  fr: 'Active les optimisations multithread OpenGL',                            en: 'Enable OpenGL multi-thread optimizations' },
      { flag: '__GL_THREADED_OPTIMIZATIONS=0',            type: 'val',  fr: 'Désactive les optimisations multithread OpenGL',                         en: 'Disable OpenGL multi-thread optimizations' },
      { flag: '__GL_SYNC_TO_VBLANK=0',                   type: 'val',  fr: 'Désactive le VSync OpenGL',                                              en: 'Disable OpenGL VSync' },
      { flag: '__GL_SYNC_TO_VBLANK=1',                   type: 'val',  fr: 'Active le VSync OpenGL',                                                 en: 'Enable OpenGL VSync' },
      { flag: '__GL_MaxFramesAllowed=<num>',              type: 'val',  fr: 'Limite la profondeur de la file GPU (0 = minimum latence)',               en: 'Limit GPU render queue depth (0 = minimum latency)' },
      { flag: '__NV_FSAA_MODE=<mode>',                   type: 'val',  fr: 'Mode d\'anti-aliasing NVIDIA (Full Scene AA)',                            en: 'NVIDIA anti-aliasing mode (Full Scene AA)' },
      { flag: '__GL_SHADER_DISK_CACHE=1',                type: 'val',  fr: 'Active le cache disque des shaders OpenGL',                              en: 'Enable OpenGL shader disk cache' },
      { flag: '__GL_SHADER_DISK_CACHE_PATH=<path>',      type: 'env',  fr: 'Chemin du cache disque des shaders OpenGL NVIDIA',                       en: 'Path for NVIDIA OpenGL shader disk cache' },
      { flag: '__GL_SHADER_DISK_CACHE_SIZE=<bytes>',     type: 'val',  fr: 'Taille maximale du cache disque shaders (en bytes)',                      en: 'Maximum shader disk cache size (in bytes)' },
      { flag: 'NVIDIA_VISIBLE_DEVICES=all',              type: 'env',  fr: 'Rend tous les GPU NVIDIA visibles (utile en multi-GPU)',                  en: 'Make all NVIDIA GPUs visible (useful in multi-GPU setups)' },
      { flag: '__GL_ALLOW_UNOFFICIAL_PROTOCOL=1',        type: 'val',  fr: 'Autorise les protocoles non-officiels OpenGL',                            en: 'Allow unofficial OpenGL protocols' },
      { flag: 'CUDA_VISIBLE_DEVICES=<id>',               type: 'env',  fr: 'Limite CUDA à un/des GPU spécifiques',                                   en: 'Restrict CUDA to specific GPU(s)' },
      { flag: '__GL_GSYNC_ALLOWED=1',                    type: 'val',  fr: 'Autorise G-Sync en mode plein écran sans bordure',                        en: 'Allow G-Sync in borderless windowed mode' },
      { flag: 'NV_PRIME_RENDER_OFFLOAD=1',               type: 'env',  fr: 'Alias courant de __NV_PRIME_RENDER_OFFLOAD pour certains compositors',   en: 'Common alias of __NV_PRIME_RENDER_OFFLOAD for some compositors' },
    ]
  },

  /* ─────────────────────────────────────────────────
     4. WAYLAND / X11 / AUDIO
  ───────────────────────────────────────────────── */
  {
    id: 'wayland',
    icon: '🌊',
    cssClass: 'section-wayland',
    tags: ['Wayland', 'X11', 'Audio'],
    rows: [
      { flag: 'XDG_SESSION_TYPE=wayland',       type: 'env',  fr: 'Définit la session courante comme Wayland',                           en: 'Set current session type to Wayland' },
      { flag: 'XDG_SESSION_TYPE=x11',           type: 'env',  fr: 'Définit la session courante comme X11',                              en: 'Set current session type to X11' },
      { flag: 'MOZ_ENABLE_WAYLAND=1',           type: 'env',  fr: 'Active le backend Wayland natif pour Firefox',                       en: 'Enable native Wayland backend for Firefox' },
      { flag: 'GDK_BACKEND=wayland',            type: 'env',  fr: 'Force GTK à utiliser le backend Wayland',                            en: 'Force GTK to use Wayland backend' },
      { flag: 'GDK_BACKEND=x11',                type: 'env',  fr: 'Force GTK à utiliser le backend X11 (XWayland)',                     en: 'Force GTK to use X11 backend (XWayland)' },
      { flag: 'QT_QPA_PLATFORM=wayland',        type: 'env',  fr: 'Force Qt à utiliser le backend Wayland',                             en: 'Force Qt to use Wayland backend' },
      { flag: 'QT_QPA_PLATFORM=xcb',            type: 'env',  fr: 'Force Qt à utiliser X11 (XCB)',                                      en: 'Force Qt to use X11 (XCB)' },
      { flag: 'SDL_VIDEODRIVER=wayland',        type: 'env',  fr: 'Force SDL2 à utiliser le backend Wayland',                           en: 'Force SDL2 to use Wayland backend' },
      { flag: 'SDL_VIDEODRIVER=x11',            type: 'env',  fr: 'Force SDL2 à utiliser X11',                                          en: 'Force SDL2 to use X11 backend' },
      { flag: 'LIBGL_ALWAYS_SOFTWARE=1',        type: 'val',  fr: 'Force le rendu OpenGL logiciel (Mesa llvmpipe)',                      en: 'Force software OpenGL rendering (Mesa llvmpipe)' },
      { flag: 'LIBGL_ALWAYS_INDIRECT=1',        type: 'val',  fr: 'Force le rendu OpenGL indirect',                                     en: 'Force indirect OpenGL rendering' },
      { flag: 'WLR_NO_HARDWARE_CURSORS=1',      type: 'val',  fr: 'Désactive les curseurs matériels Wayland (fix pour certains GPU)',    en: 'Disable Wayland hardware cursors (fix for some GPUs)' },
      { flag: 'WLR_RENDERER=vulkan',            type: 'val',  fr: 'Force le renderer Vulkan pour wlroots',                              en: 'Force Vulkan renderer for wlroots compositors' },
      { flag: 'WLR_RENDERER=gles2',             type: 'val',  fr: 'Force le renderer GLES2 pour wlroots',                               en: 'Force GLES2 renderer for wlroots compositors' },
      { flag: 'WLR_RENDERER_DEBUG=1',           type: 'val',  fr: 'Active le débogage du renderer wlroots',                             en: 'Enable wlroots renderer debug output' },
      { flag: 'WLR_OUTPUT_SCALE=<float>',       type: 'val',  fr: 'Définit le facteur de scale pour les écrans HiDPI',                  en: 'Set the display scale factor for HiDPI screens' },
      { flag: 'WLR_DRM_DEVICES=<path>',         type: 'env',  fr: 'Spécifie le périphérique DRM à utiliser par wlroots',               en: 'Specify the DRM device for wlroots to use' },
      { flag: 'WAYLAND_DISPLAY=<socket>',       type: 'env',  fr: 'Socket de connexion au serveur Wayland',                             en: 'Wayland server connection socket' },
      { flag: 'XWAYLAND_NO_GLAMOR=1',           type: 'val',  fr: 'Désactive Glamor dans XWayland (fix de compatibilité)',              en: 'Disable Glamor in XWayland (compatibility fix)' },
      { flag: 'DISPLAY=:0',                     type: 'env',  fr: 'Numéro d\'affichage X11 à utiliser',                                 en: 'X11 display number to use' },
      { flag: 'PIPEWIRE_LATENCY="128/48000"',   type: 'val',  fr: 'Définit la latence audio PipeWire (128 frames / 48000 Hz)',          en: 'Set PipeWire audio latency (128 frames / 48000 Hz)' },
      { flag: 'PIPEWIRE_LATENCY="256/48000"',   type: 'val',  fr: 'Latence audio PipeWire faible (256 frames)',                         en: 'Low PipeWire audio latency (256 frames)' },
      { flag: 'PULSE_LATENCY_MSEC=<ms>',        type: 'val',  fr: 'Latence cible PulseAudio en millisecondes',                          en: 'Target PulseAudio latency in milliseconds' },
      { flag: 'ALSA_CARD=<num>',                type: 'env',  fr: 'Numéro de carte ALSA à utiliser',                                    en: 'ALSA sound card number to use' },
    ]
  },

  /* ─────────────────────────────────────────────────
     5. GAMESCOPE / UPSCALING
  ───────────────────────────────────────────────── */
  {
    id: 'gamescope',
    icon: '🎮',
    cssClass: 'section-gamescope',
    tags: ['Gamescope', 'FSR', 'DLSS'],
    rows: [
      { flag: 'gamescope -f',                            type: 'flag', fr: 'Démarre en mode plein écran',                                                   en: 'Start in fullscreen mode' },
      { flag: 'gamescope --windowed',                    type: 'flag', fr: 'Démarre en mode fenêtré',                                                       en: 'Start in windowed mode' },
      { flag: 'gamescope --borderless',                  type: 'flag', fr: 'Mode plein écran sans bordure (fenêtré borderless)',                             en: 'Borderless fullscreen windowed mode' },
      { flag: '--rt',                                    type: 'flag', fr: 'Active le rendu temps réel (priorité haute)',                                    en: 'Enable real-time rendering (high priority)' },
      { flag: '-r <Hz>',                                 type: 'flag', fr: 'Définit le refresh rate cible en Hz',                                            en: 'Set target refresh rate in Hz' },
      { flag: '-o <Hz>',                                 type: 'flag', fr: 'Définit le refresh rate de sortie (écran physique)',                             en: 'Set output refresh rate (physical display)' },
      { flag: '-F fsr',                                  type: 'flag', fr: 'Active l\'upscaling FSR (FidelityFX Super Resolution)',                          en: 'Enable FSR upscaling (FidelityFX Super Resolution)' },
      { flag: '-F fsr-ultra',                            type: 'flag', fr: 'Active FSR mode Ultra Quality',                                                  en: 'Enable FSR Ultra Quality mode' },
      { flag: '-F nis',                                  type: 'flag', fr: 'Active NIS (NVIDIA Image Scaling) upscaling',                                    en: 'Enable NIS (NVIDIA Image Scaling) upscaling' },
      { flag: '-F dlss',                                 type: 'flag', fr: 'Active DLSS (Deep Learning Super Sampling, NVIDIA)',                             en: 'Enable DLSS (Deep Learning Super Sampling, NVIDIA)' },
      { flag: '-F pixel',                                type: 'flag', fr: 'Mode upscaling pixel (nearest neighbor — pour jeux 2D)',                        en: 'Pixel upscaling mode (nearest neighbor — for 2D games)' },
      { flag: '-w <width> -h <height>',                  type: 'flag', fr: 'Résolution interne (rendu)',                                                     en: 'Internal resolution (render target)' },
      { flag: '-W <width> -H <height>',                  type: 'flag', fr: 'Résolution de sortie (affichage final)',                                         en: 'Output resolution (final display)' },
      { flag: '--force-grab-cursor',                     type: 'flag', fr: 'Force la capture du curseur dans Gamescope',                                     en: 'Force cursor capture inside Gamescope' },
      { flag: '--scale=<float>',                         type: 'flag', fr: 'Facteur d\'échelle d\'affichage',                                                en: 'Display scale factor' },
      { flag: '--present-mode=mailbox',                  type: 'flag', fr: 'Mode de présentation mailbox (faible latence, pas de tearing)',                  en: 'Mailbox present mode (low latency, no tearing)' },
      { flag: '--present-mode=fifo',                     type: 'flag', fr: 'Mode FIFO (VSync strict)',                                                       en: 'FIFO present mode (strict VSync)' },
      { flag: '--present-mode=fifo-relaxed',             type: 'flag', fr: 'Mode FIFO relaxed (VSync souple)',                                               en: 'Relaxed FIFO present mode (soft VSync)' },
      { flag: '--max-fps=<num>',                         type: 'flag', fr: 'Limite le nombre de FPS maximal',                                                en: 'Limit maximum FPS' },
      { flag: '--min-fps=<num>',                         type: 'flag', fr: 'Définit un FPS minimal (pour éviter les micro-stutters)',                        en: 'Set minimum FPS (to avoid micro-stutters)' },
      { flag: '--disable-vblank',                        type: 'flag', fr: 'Désactive la synchronisation vblank',                                            en: 'Disable vblank synchronization' },
      { flag: '--pixel-doubling',                        type: 'flag', fr: 'Double chaque pixel (scale 2x pour jeux rétro/2D)',                              en: 'Double each pixel (2x scale for retro/2D games)' },
      { flag: '--expose-wayland',                        type: 'flag', fr: 'Expose un socket Wayland pour les applications dans Gamescope',                  en: 'Expose a Wayland socket for apps running inside Gamescope' },
      { flag: '--steam',                                 type: 'flag', fr: 'Mode d\'intégration Steam (utilisé par SteamOS)',                                en: 'Steam integration mode (used by SteamOS)' },
      { flag: '--adaptive-sync',                         type: 'flag', fr: 'Active la synchronisation adaptative (FreeSync / G-Sync Compatible)',            en: 'Enable adaptive sync (FreeSync / G-Sync Compatible)' },
      { flag: '--hdr-enabled',                           type: 'flag', fr: 'Active HDR (nécessite support écran + driver)',                                  en: 'Enable HDR (requires display + driver support)' },
      { flag: '--hdr-sdr-content-nits=<val>',            type: 'flag', fr: 'Luminosité du contenu SDR en mode HDR (nits)',                                  en: 'SDR content brightness in HDR mode (nits)' },
      { flag: '-e',                                      type: 'flag', fr: 'Active le mode Steam Deck / embedded (simplifie l\'UI)',                         en: 'Enable Steam Deck / embedded mode (simplifies UI)' },
    ]
  },

  /* ─────────────────────────────────────────────────
     6. GAMEMODE / CPU
  ───────────────────────────────────────────────── */
  {
    id: 'gamemode',
    icon: '⚡',
    cssClass: 'section-gamemode',
    tags: ['GameMode', 'CPU'],
    rows: [
      { flag: 'gamemoderun',                              type: 'cmd',  fr: 'Lance une application avec GameMode actif (optimisation CPU/GPU)',              en: 'Launch an app with GameMode active (CPU/GPU optimization)' },
      { flag: 'gamemoderun gamescope --',                  type: 'cmd',  fr: 'Combine GameMode et Gamescope pour des perfs maximales',                        en: 'Combine GameMode with Gamescope for maximum performance' },
      { flag: 'GAMEMODE_AUTO_SUSPEND=1',                  type: 'val',  fr: 'Suspend automatiquement les processus non essentiels en jeu',                   en: 'Auto-suspend non-essential processes while gaming' },
      { flag: 'GAMEMODE_LOG_LEVEL=info',                  type: 'val',  fr: 'Niveau de log GameMode : infos générales',                                       en: 'GameMode log level: general information' },
      { flag: 'GAMEMODE_LOG_LEVEL=debug',                 type: 'val',  fr: 'Niveau de log GameMode : débogage détaillé',                                     en: 'GameMode log level: verbose debug' },
      { flag: 'GAMEMODE_PRIORITY=<priority>',             type: 'val',  fr: 'Priorité CPU allouée au processus de jeu (nice value)',                          en: 'CPU priority for the game process (nice value)' },
      { flag: 'LD_PRELOAD=/usr/lib/libgamemodeauto.so.0', type: 'env',  fr: 'Active GameMode via LD_PRELOAD sans modifier la commande de lancement',          en: 'Enable GameMode via LD_PRELOAD without modifying launch command' },
      { flag: 'gamemoded -d',                             type: 'cmd',  fr: 'Lance le daemon GameMode en arrière-plan en mode debug',                         en: 'Start GameMode daemon in background with debug mode' },
      { flag: 'gamemodeset -r',                           type: 'cmd',  fr: 'Demande à GameMode de s\'activer manuellement',                                  en: 'Manually request GameMode activation' },
      { flag: 'gamemodeset -q',                           type: 'cmd',  fr: 'Demande à GameMode de se désactiver manuellement',                               en: 'Manually request GameMode deactivation' },
    ]
  },

  /* ─────────────────────────────────────────────────
     7. WINE / DLL OVERRIDES
  ───────────────────────────────────────────────── */
  {
    id: 'wine',
    icon: '🍷',
    cssClass: 'section-wine',
    tags: ['Wine', 'DLL'],
    rows: [
      { flag: 'WINEDLLOVERRIDES="d3d11=n,b"',       type: 'env',  fr: 'Remplace D3D11 par l\'implémentation native Wine',                                en: 'Override D3D11 with native Wine implementation' },
      { flag: 'WINEDLLOVERRIDES="dxgi=n,b"',        type: 'env',  fr: 'Remplace DXGI par l\'implémentation native Wine',                                 en: 'Override DXGI with native Wine implementation' },
      { flag: 'WINEDLLOVERRIDES="winhttp=n,b"',     type: 'env',  fr: 'Remplace WinHTTP (utile pour certains jeux avec DRM)',                            en: 'Override WinHTTP (useful for some DRM-protected games)' },
      { flag: 'WINEDLLOVERRIDES="xaudio2_7=n,b"',  type: 'env',  fr: 'Remplace XAudio2_7 (fix audio pour certains titres)',                             en: 'Override XAudio2_7 (audio fix for some titles)' },
      { flag: 'WINEDLLOVERRIDES="msvcrt=n,b"',      type: 'env',  fr: 'Force le runtime Microsoft C (peut améliorer la compatibilité)',                 en: 'Force Microsoft C runtime (may improve compatibility)' },
      { flag: 'WINEDLLOVERRIDES="dinput8=n,b"',     type: 'env',  fr: 'Remplace dinput8 (fix de manette / conflit DI)',                                  en: 'Override dinput8 (gamepad fix / DI conflict)' },
      { flag: 'WINEDLLOVERRIDES="bcrypt=n,b"',      type: 'env',  fr: 'Remplace bcrypt (pour jeux avec cryptographie)',                                  en: 'Override bcrypt (for games using cryptography)' },
      { flag: 'WINEDLLOVERRIDES="winmm=n,b"',       type: 'env',  fr: 'Remplace winmm (fix audio et timers)',                                            en: 'Override winmm (audio and timer fix)' },
      { flag: 'WINEDLLOVERRIDES="nvapi,nvapi64=n,b"',type: 'env', fr: 'Désactive NVAPI dans Wine (peut contourner anti-cheat)',                          en: 'Disable NVAPI in Wine (may bypass some anti-cheats)' },
      { flag: 'WINEDLLOVERRIDES="d3d9=n,b"',        type: 'env',  fr: 'Force D3D9 Wine natif (désactive DXVK pour DX9)',                                en: 'Force native Wine D3D9 (disable DXVK for DX9 games)' },
      { flag: 'WINEDLLOVERRIDES="steam.exe=b,n"',   type: 'env',  fr: 'Contournement pour compatibilité Steam dans Wine',                               en: 'Steam compatibility workaround in Wine' },
      { flag: 'WINEDLLOVERRIDES="vulkan-1=n,b"',    type: 'env',  fr: 'Remplace la DLL Vulkan par la native système',                                   en: 'Override Vulkan DLL with system native' },
      { flag: 'WINE_MONO_OVERRIDES=<dll>=n,b',      type: 'env',  fr: 'Override les DLL .NET dans Wine Mono',                                            en: 'Override .NET DLLs in Wine Mono' },
      { flag: 'WINEARCH=win64',                     type: 'env',  fr: 'Force un préfixe Wine 64-bit',                                                    en: 'Force a 64-bit Wine prefix' },
      { flag: 'WINEARCH=win32',                     type: 'env',  fr: 'Force un préfixe Wine 32-bit (compatibilité jeux anciens)',                       en: 'Force a 32-bit Wine prefix (old game compatibility)' },
      { flag: 'WINE_ENABLE_IPV6=1',                 type: 'val',  fr: 'Active l\'IPv6 dans Wine',                                                        en: 'Enable IPv6 support in Wine' },
    ]
  },

  /* ─────────────────────────────────────────────────
     8. STEAM / LAUNCH OPTIONS
  ───────────────────────────────────────────────── */
  {
    id: 'steam',
    icon: '🎯',
    cssClass: 'section-steam',
    tags: ['Steam', 'Launch'],
    rows: [
      { flag: '%command%',                                                type: 'val',  fr: 'Placeholder obligatoire pour les options de lancement Steam',              en: 'Mandatory placeholder for Steam launch options' },
      { flag: 'PROTON_USE_NTSYNC=1 %command%',                           type: 'cmd',  fr: 'Exemple : passer une variable avant la commande Steam',                    en: 'Example: pass a variable before the Steam command' },
      { flag: 'gamemoderun %command%',                                   type: 'cmd',  fr: 'Active GameMode pour ce jeu depuis Steam',                                 en: 'Enable GameMode for this game from Steam' },
      { flag: 'gamescope -f -- %command%',                               type: 'cmd',  fr: 'Lance le jeu dans Gamescope en plein écran',                               en: 'Launch game inside Gamescope in fullscreen' },
      { flag: 'gamemoderun gamescope -f -- %command%',                   type: 'cmd',  fr: 'Combine GameMode + Gamescope + jeu Steam',                                 en: 'Combine GameMode + Gamescope + Steam game' },
      { flag: 'STEAM_COMPAT_DATA_PATH=<path> %command%',                 type: 'env',  fr: 'Définit le chemin du préfixe Proton personnalisé',                         en: 'Set custom Proton prefix path' },
      { flag: 'STEAM_COMPAT_CLIENT_INSTALL_PATH=<path>',                 type: 'env',  fr: 'Chemin d\'installation du client Steam (pour Proton personnalisé)',         en: 'Steam client install path (for custom Proton)' },
      { flag: 'STEAM_FORCE_DESKTOPUI_SCALING=<float>',                   type: 'env',  fr: 'Force le scale UI Steam (ex: 1.5)',                                        en: 'Force Steam UI scaling (e.g. 1.5)' },
      { flag: '-windowed -noborder',                                     type: 'flag', fr: 'Lance en mode fenêtré sans bordure (Source Engine)',                       en: 'Launch borderless windowed mode (Source Engine)' },
      { flag: '-fullscreen',                                             type: 'flag', fr: 'Force le plein écran (Source Engine)',                                     en: 'Force fullscreen (Source Engine)' },
      { flag: '-w <width> -h <height>',                                  type: 'flag', fr: 'Définit la résolution au lancement (Source Engine)',                       en: 'Set launch resolution (Source Engine)' },
      { flag: 'MANGOHUD=1 %command%',                                    type: 'cmd',  fr: 'Active MangoHud pour ce jeu depuis Steam',                                 en: 'Enable MangoHud for this game from Steam' },
      { flag: 'ENABLE_VKBASALT=1 %command%',                             type: 'cmd',  fr: 'Active vkBasalt (effets post-process Vulkan) pour ce jeu',                 en: 'Enable vkBasalt (Vulkan post-process effects) for this game' },
      { flag: 'obs-gamecapture %command%',                               type: 'cmd',  fr: 'Utilise le capture de jeu OBS via l\'intégration Steam',                   en: 'Use OBS game capture via Steam integration' },
      { flag: 'SteamDeck=1 %command%',                                   type: 'cmd',  fr: 'Simule l\'environnement Steam Deck (certains jeux ont des optimisations)',  en: 'Simulate Steam Deck environment (some games have optimizations)' },
    ]
  },

  /* ─────────────────────────────────────────────────
     9. MANGOHUD / OVERLAY
  ───────────────────────────────────────────────── */
  {
    id: 'mangohud',
    icon: '📊',
    cssClass: 'section-mangohud',
    tags: ['MangoHud', 'Overlay', 'HUD'],
    rows: [
      { flag: 'MANGOHUD=1',                             type: 'val',  fr: 'Active l\'overlay MangoHud',                                                         en: 'Enable MangoHud overlay' },
      { flag: 'MANGOHUD=0',                             type: 'val',  fr: 'Désactive MangoHud',                                                                  en: 'Disable MangoHud' },
      { flag: 'MANGOHUD_CONFIG=<options>',              type: 'env',  fr: 'Passe des options de configuration MangoHud inline',                                  en: 'Pass inline MangoHud configuration options' },
      { flag: 'MANGOHUD_CONFIG=fps,cpu_temp,gpu_temp',  type: 'val',  fr: 'Affiche FPS + températures CPU & GPU',                                                en: 'Show FPS + CPU & GPU temperatures' },
      { flag: 'MANGOHUD_CONFIG=full',                   type: 'val',  fr: 'Active tous les éléments du HUD MangoHud',                                            en: 'Enable all MangoHud HUD elements' },
      { flag: 'MANGOHUD_CONFIG=no_display',             type: 'val',  fr: 'MangoHud actif mais non affiché (toggle avec raccourci)',                              en: 'MangoHud active but hidden (toggle with shortcut)' },
      { flag: 'MANGOHUD_DLSYM=1',                       type: 'val',  fr: 'Utilise dlsym pour l\'injection (compatibilité améliorée)',                            en: 'Use dlsym for injection (improved compatibility)' },
      { flag: 'MANGOHUD_OUTPUT=<path>',                 type: 'env',  fr: 'Chemin de sortie pour les logs de benchmarks MangoHud',                               en: 'Output path for MangoHud benchmark logs' },
      { flag: 'MANGOHUD_BENCHMARK=1',                   type: 'val',  fr: 'Active l\'enregistrement automatique des performances (benchmark)',                    en: 'Enable automatic performance recording (benchmark mode)' },
      { flag: 'mangohud <command>',                     type: 'cmd',  fr: 'Lance une application avec MangoHud actif',                                            en: 'Launch an app with MangoHud enabled' },
      { flag: 'mangohud --dlsym <command>',             type: 'cmd',  fr: 'Lance avec MangoHud en mode dlsym',                                                    en: 'Launch with MangoHud in dlsym mode' },
      { flag: 'MANGOHUD_CONFIG=position=top-right',     type: 'val',  fr: 'Position de l\'overlay: haut-droite',                                                  en: 'Overlay position: top-right' },
      { flag: 'MANGOHUD_CONFIG=font_size=<px>',         type: 'val',  fr: 'Taille de police de l\'overlay MangoHud',                                              en: 'MangoHud overlay font size' },
      { flag: 'MANGOHUD_CONFIG=legacy_layout=0',        type: 'val',  fr: 'Désactive le layout legacy (utilise le nouveau format de config)',                     en: 'Disable legacy layout (use new config format)' },
    ]
  },

  /* ─────────────────────────────────────────────────
     10. MESA / AMD / INTEL
  ───────────────────────────────────────────────── */
  {
    id: 'mesa',
    icon: '🔷',
    cssClass: 'section-mesa',
    tags: ['Mesa', 'AMD', 'Intel'],
    rows: [
      { flag: 'RADV_PERFTEST=aco',                        type: 'env',  fr: 'Force le backend ACO (compilateur de shaders AMD — actif par défaut)',            en: 'Force ACO backend (AMD shader compiler — enabled by default)' },
      { flag: 'RADV_PERFTEST=rt',                         type: 'env',  fr: 'Active le ray tracing expérimental RADV',                                         en: 'Enable experimental RADV ray tracing' },
      { flag: 'RADV_PERFTEST=mesh_shaders',               type: 'env',  fr: 'Active les mesh shaders expérimentaux RADV',                                      en: 'Enable experimental RADV mesh shaders' },
      { flag: 'RADV_PERFTEST=nggc',                       type: 'env',  fr: 'Active NGG Culling expérimental (améliore les perfs geometry)',                    en: 'Enable experimental NGG Culling (improves geometry perf)' },
      { flag: 'RADV_DEBUG=nocache',                       type: 'env',  fr: 'Désactive le cache de pipeline RADV',                                              en: 'Disable RADV pipeline cache' },
      { flag: 'RADV_DEBUG=nomemorycache',                 type: 'env',  fr: 'Désactive le cache mémoire RADV',                                                  en: 'Disable RADV memory cache' },
      { flag: 'RADV_DEBUG=nofastclears',                  type: 'env',  fr: 'Désactive les fast clears RADV (debug visuel)',                                    en: 'Disable RADV fast clears (visual debug)' },
      { flag: 'AMD_VULKAN_ICD=RADV',                      type: 'env',  fr: 'Force le driver RADV (Mesa open-source) pour Vulkan AMD',                         en: 'Force RADV driver (Mesa open-source) for AMD Vulkan' },
      { flag: 'AMD_VULKAN_ICD=AMDVLK',                    type: 'env',  fr: 'Force AMDVLK (driver Vulkan officiel AMD) au lieu de RADV',                       en: 'Force AMDVLK (official AMD Vulkan driver) instead of RADV' },
      { flag: 'MESA_GLSL_CACHE_DISABLE=false',            type: 'val',  fr: 'S\'assure que le cache GLSL Mesa est activé',                                     en: 'Ensure Mesa GLSL cache is enabled' },
      { flag: 'MESA_GLSL_CACHE_DIR=<path>',               type: 'env',  fr: 'Chemin du cache GLSL Mesa',                                                       en: 'Mesa GLSL cache directory path' },
      { flag: 'MESA_GLSL_CACHE_MAX_SIZE=<size>',          type: 'val',  fr: 'Taille maximale du cache GLSL Mesa (ex: 1G)',                                     en: 'Maximum Mesa GLSL cache size (e.g. 1G)' },
      { flag: 'MESA_NO_ERROR=1',                          type: 'val',  fr: 'Désactive la vérification des erreurs Mesa (légère amélioration des perfs)',       en: 'Disable Mesa error checking (slight performance boost)' },
      { flag: 'MESA_GL_VERSION_OVERRIDE=<ver>',           type: 'val',  fr: 'Force une version OpenGL spécifique (ex: 4.5)',                                   en: 'Force a specific OpenGL version (e.g. 4.5)' },
      { flag: 'MESA_GLES_VERSION_OVERRIDE=<ver>',         type: 'val',  fr: 'Force une version OpenGL ES spécifique',                                          en: 'Force a specific OpenGL ES version' },
      { flag: 'INTEL_DEBUG=<flags>',                      type: 'env',  fr: 'Flags de débogage du driver Intel Mesa (ANV/i965)',                                en: 'Debug flags for Intel Mesa driver (ANV/i965)' },
      { flag: 'ANV_ENABLE_PIPELINE_CACHE=1',              type: 'val',  fr: 'Active le cache pipeline pour le driver ANV (Intel Vulkan)',                       en: 'Enable pipeline cache for ANV driver (Intel Vulkan)' },
      { flag: 'NOUVEAU_ENABLE_CRC=1',                     type: 'val',  fr: 'Active le CRC Nouveau (driver NVIDIA open-source Mesa)',                           en: 'Enable CRC in Nouveau (Mesa open-source NVIDIA driver)' },
      { flag: 'R600_DEBUG=<options>',                     type: 'env',  fr: 'Options de débogage r600/r700 (anciens GPU AMD)',                                  en: 'Debug options for r600/r700 (older AMD GPUs)' },
      { flag: 'SI_DEBUG=<options>',                       type: 'env',  fr: 'Options de débogage Southern Islands (GCN1)',                                      en: 'Debug options for Southern Islands (GCN1)' },
    ]
  },
];

/* ─── Flat list for search ─── */
function getAllRows() {
  let all = [];
  SECTIONS.forEach(sec => {
    sec.rows.forEach(row => {
      all.push({ ...row, section: sec.id });
    });
  });
  return all;
}

/* ─── Count totals ─── */
function getTotalFlags() {
  return SECTIONS.reduce((acc, s) => acc + s.rows.length, 0);
}

function getNewFlags() {
  /* Flags added beyond original list */
  const originalCount = 11 + 11 + 8 + 8 + 16 + 4 + 8;
  return Math.max(0, getTotalFlags() - originalCount);
}
