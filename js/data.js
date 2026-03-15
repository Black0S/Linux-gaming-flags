/* ════════════════════════════════════════
   Linux Gaming Flags — data.js
   All sections & flags (FR + EN)
════════════════════════════════════════ */
const DATA = [
  {
    id:'proton', icon:'⚗️', css:'sc-proton', tags:['Proton','Wine','Steam'],
    rows:[
      {f:'PROTON_USE_NTSYNC=1',                t:'env', fr:'Active NTSYNC — réduit le stuttering en jeu',                                        en:'Enable NTSYNC — reduces in-game stuttering'},
      {f:'PROTON_ENABLE_WAYLAND=1',            t:'env', fr:'Utilise Wayland natif au lieu de XWayland',                                          en:'Use native Wayland instead of XWayland'},
      {f:'PROTON_ENABLE_NVAPI=1',              t:'env', fr:'Active NVAPI — support DLSS, Reflex, NVIDIA features',                               en:'Enable NVAPI — DLSS, Reflex, NVIDIA features support'},
      {f:'PROTON_NO_ESYNC=1',                  t:'env', fr:'Désactive Eventfd Sync (ESYNC)',                                                      en:'Disable Eventfd Synchronization (ESYNC)'},
      {f:'PROTON_NO_FSYNC=1',                  t:'env', fr:'Désactive Futex Sync (FSYNC)',                                                        en:'Disable Futex Synchronization (FSYNC)'},
      {f:'PROTON_FORCE_LARGE_ADDRESS_AWARE=1', t:'env', fr:'Autorise >4 Go de RAM pour les jeux 32-bit',                                         en:'Allow >4 GB RAM access for 32-bit games'},
      {f:'PROTON_LOG=1',                       t:'val', fr:'Active le logging complet de Proton (fichier steam-APPID.log)',                       en:'Enable full Proton logging (steam-APPID.log)'},
      {f:'PROTON_LOG=debug',                   t:'val', fr:'Active les logs de débogage détaillés',                                               en:'Enable verbose debug logs'},
      {f:'PROTON_NO_D3D11=1',                  t:'env', fr:'Désactive la couche Direct3D 11',                                                     en:'Disable Direct3D 11 layer'},
      {f:'PROTON_NO_D3D12=1',                  t:'env', fr:'Désactive la couche Direct3D 12',                                                     en:'Disable Direct3D 12 layer'},
      {f:'PROTON_USE_WINED3D=1',               t:'env', fr:'Force WineD3D au lieu de DXVK (plus compatible, moins performant)',                   en:'Force WineD3D instead of DXVK (more compatible, less fast)'},
      {f:'PROTON_HIDE_NVIDIA_GPU=1',           t:'env', fr:'Masque le GPU NVIDIA (contourne certains anti-cheats)',                               en:'Hide NVIDIA GPU (bypass some anti-cheat checks)'},
      {f:'PROTON_USE_D9VK=1',                  t:'env', fr:'Force D9VK (DirectX9 → Vulkan) pour les jeux DX9',                                   en:'Force D9VK (DirectX9 to Vulkan) for DX9 games'},
      {f:'PROTON_NO_STEAM_XINPUT=1',           t:'env', fr:"Désactive l'émulation XInput de Steam",                                              en:'Disable Steam XInput emulation'},
      {f:'PROTON_NO_XIM=1',                    t:'env', fr:"Désactive X Input Method (résout des problèmes de clavier)",                         en:'Disable X Input Method (fixes keyboard issues)'},
      {f:'PROTON_ENABLE_NVAPI_WISDOMCRAFTER=1',t:'env', fr:'Active NVAPI étendu pour DLSS Frame Generation',                                     en:'Enable extended NVAPI for DLSS Frame Generation'},
      {f:'WINE_LARGE_ADDRESS_AWARE=1',         t:'env', fr:"Autorise l'accès à plus de 2 Go pour les processus Wine 32-bit",                     en:'Allow >2 GB access for 32-bit Wine processes'},
      {f:'WINE_FULLSCREEN_INTEGER_SCALING=1',  t:'env', fr:"Mise à l'échelle entière en plein écran (pixel art)",                                en:'Integer scaling in fullscreen (pixel art games)'},
      {f:'WINEPREFIX=<path>',                  t:'env', fr:"Chemin du préfixe Wine",                                                             en:'Wine prefix path'},
      {f:'WINEESYNC=1',                        t:'env', fr:'Active Esync sur Wine natif',                                                         en:'Enable Esync on native Wine'},
      {f:'WINEFSYNC=1',                        t:'env', fr:'Active Fsync sur Wine natif',                                                         en:'Enable Fsync on native Wine'},
      {f:'STAGING_WRITECOPY=1',                t:'env', fr:'Active wine-staging write-copy (améliore la compatibilité)',                          en:'Enable wine-staging write-copy (improves compatibility)'},
    ]
  },
  {
    id:'dxvk', icon:'🔺', css:'sc-dxvk', tags:['DXVK','Vulkan','Shaders'],
    rows:[
      {f:'DXVK_ASYNC=1',                        t:'val', fr:'Compilation de shaders asynchrone (FPS plus fluide)',                                en:'Async shader compilation (smoother FPS)'},
      {f:'DXVK_HUD=1',                          t:'val', fr:'Affiche le HUD DXVK (FPS, VRAM, frametime)',                                         en:'Show DXVK HUD (FPS, VRAM, frametime)'},
      {f:'DXVK_HUD=fps',                        t:'val', fr:'HUD minimaliste — FPS uniquement',                                                   en:'Minimal HUD — FPS only'},
      {f:'DXVK_HUD=full',                       t:'val', fr:'HUD complet (fps, memory, draws, pipelines…)',                                       en:'Full HUD (fps, memory, draws, pipelines…)'},
      {f:'DXVK_HUD=fps,memory,gpuload',         t:'val', fr:'HUD personnalisé : FPS + mémoire + charge GPU',                                      en:'Custom HUD: FPS + memory + GPU load'},
      {f:'DXVK_LOG_LEVEL=none',                 t:'val', fr:'Désactive tous les logs DXVK',                                                       en:'Disable all DXVK logs'},
      {f:'DXVK_LOG_LEVEL=info',                 t:'val', fr:'Logs DXVK niveau info',                                                              en:'DXVK info-level logs'},
      {f:'DXVK_LOG_LEVEL=warn',                 t:'val', fr:'Logs DXVK niveau avertissement',                                                     en:'DXVK warning-level logs'},
      {f:'DXVK_LOG_LEVEL=error',                t:'val', fr:'Logs DXVK niveau erreur uniquement',                                                 en:'DXVK error-level logs only'},
      {f:'DXVK_LOG_PATH=<path>',                t:'env', fr:'Chemin de sauvegarde des logs DXVK',                                                 en:'DXVK log file save path'},
      {f:'DXVK_STATE_CACHE=1',                  t:'val', fr:'Active le cache pipeline (réduit le stutter)',                                       en:'Enable pipeline cache (reduces stutter)'},
      {f:'DXVK_STATE_CACHE_PATH=<path>',        t:'env', fr:'Chemin du cache de shaders DXVK',                                                    en:'DXVK shader cache path'},
      {f:'DXVK_ENABLE_FULLSCREEN=1',            t:'val', fr:'Active le plein écran exclusif',                                                     en:'Enable exclusive fullscreen'},
      {f:'DXVK_SHADER_ALLOW_SLOW_OPS=1',        t:'val', fr:'Autorise les opérations lentes (compatibilité)',                                     en:'Allow slow operations (compatibility fix)'},
      {f:'DXVK_ENABLE_VRS=1',                   t:'val', fr:'Active Variable Rate Shading (VRS)',                                                 en:'Enable Variable Rate Shading (VRS)'},
      {f:'DXVK_DISABLE_EXPLICIT_FLUSH=1',       t:'val', fr:'Désactive le flush GPU explicite (fix de rendu)',                                    en:'Disable explicit GPU flush (rendering fix)'},
      {f:'DXVK_FRAME_RATE=<num>',               t:'val', fr:'Limite les FPS au niveau DXVK',                                                      en:'Limit FPS at DXVK level'},
      {f:'DXVK_GPLAASYNC=1',                    t:'val', fr:'Active le patch async DXVK-gplasync',                                               en:'Enable DXVK-gplasync async patch'},
      {f:'DXVK_FILTER_DEVICE_NAME=<name>',      t:'env', fr:'Force DXVK à utiliser un GPU spécifique par nom',                                   en:'Force DXVK to use a specific GPU by name'},
      {f:'__VK_LAYER_NV_optimus=NVIDIA_only',   t:'env', fr:'Force le GPU NVIDIA sur systèmes Optimus (laptops)',                                 en:'Force NVIDIA GPU on Optimus systems (laptops)'},
      {f:'__VK_LAYER_MESA_device_select=1',     t:'env', fr:'Active la sélection de GPU Mesa',                                                    en:'Enable Mesa GPU device selection layer'},
      {f:'VK_ICD_FILENAMES=<path>',             t:'env', fr:'Spécifie manuellement le fichier ICD Vulkan',                                        en:'Manually specify the Vulkan ICD file'},
      {f:'MESA_LOADER_DRIVER_OVERRIDE=<drv>',   t:'env', fr:'Force un driver Mesa spécifique (ex: radeonsi, iris)',                               en:'Force a specific Mesa driver (e.g. radeonsi, iris)'},
      {f:'RADV_PERFTEST=<options>',             t:'env', fr:'Options de performance expérimentales RADV (ex: aco)',                               en:'Experimental RADV performance options (e.g. aco)'},
      {f:'ANV_ENABLE_PIPELINE_CACHE=1',         t:'val', fr:'Active le cache pipeline pour ANV (Intel Vulkan)',                                   en:'Enable pipeline cache for ANV (Intel Vulkan driver)'},
      {f:'RADV_DEBUG=<options>',                t:'env', fr:'Options de débogage du driver Vulkan RADV (AMD)',                                    en:'Debug options for RADV Vulkan driver (AMD)'},
      {f:'VKD3D_CONFIG=<options>',              t:'env', fr:'Options de configuration VKD3D (DirectX 12 sur Vulkan)',                             en:'VKD3D configuration options (DirectX 12 over Vulkan)'},
    ]
  },
  {
    id:'nvidia', icon:'🟢', css:'sc-nvidia', tags:['NVIDIA','OpenGL','GPU'],
    rows:[
      {f:'__NV_PRIME_RENDER_OFFLOAD=1',             t:'env', fr:'Active le GPU offload NVIDIA sur laptops hybrides',                              en:'Enable NVIDIA GPU offload on hybrid laptops'},
      {f:'__NV_PRIME_RENDER_OFFLOAD_PROVIDER=NVIDIA-G0',t:'env',fr:'Spécifie le provider GPU NVIDIA',                                            en:'Specify the NVIDIA GPU provider'},
      {f:'__GL_THREADED_OPTIMIZATIONS=1',           t:'val', fr:'Active les optimisations multithread OpenGL',                                   en:'Enable OpenGL multi-thread optimizations'},
      {f:'__GL_THREADED_OPTIMIZATIONS=0',           t:'val', fr:'Désactive les optimisations multithread OpenGL',                                en:'Disable OpenGL multi-thread optimizations'},
      {f:'__GL_SYNC_TO_VBLANK=0',                  t:'val', fr:'Désactive le VSync OpenGL',                                                      en:'Disable OpenGL VSync'},
      {f:'__GL_SYNC_TO_VBLANK=1',                  t:'val', fr:'Active le VSync OpenGL',                                                         en:'Enable OpenGL VSync'},
      {f:'__GL_MaxFramesAllowed=<num>',             t:'val', fr:'Limite la profondeur de la file GPU (0 = latence min)',                          en:'Limit GPU render queue depth (0 = min latency)'},
      {f:'__NV_FSAA_MODE=<mode>',                  t:'val', fr:'Mode anti-aliasing NVIDIA (Full Scene AA)',                                       en:'NVIDIA anti-aliasing mode (Full Scene AA)'},
      {f:'__GL_SHADER_DISK_CACHE=1',               t:'val', fr:'Active le cache disque des shaders OpenGL',                                      en:'Enable OpenGL shader disk cache'},
      {f:'__GL_SHADER_DISK_CACHE_PATH=<path>',     t:'env', fr:'Chemin du cache disque des shaders NVIDIA',                                      en:'NVIDIA OpenGL shader disk cache path'},
      {f:'__GL_SHADER_DISK_CACHE_SIZE=<bytes>',    t:'val', fr:'Taille maximale du cache disque shaders',                                        en:'Maximum shader disk cache size (bytes)'},
      {f:'NVIDIA_VISIBLE_DEVICES=all',             t:'env', fr:'Rend tous les GPU NVIDIA visibles',                                              en:'Make all NVIDIA GPUs visible'},
      {f:'__GL_GSYNC_ALLOWED=1',                   t:'val', fr:'Autorise G-Sync en mode fenêtré sans bordure',                                   en:'Allow G-Sync in borderless windowed mode'},
      {f:'CUDA_VISIBLE_DEVICES=<id>',              t:'env', fr:'Limite CUDA à un/des GPU spécifiques',                                           en:'Restrict CUDA to specific GPU(s)'},
      {f:'NV_PRIME_RENDER_OFFLOAD=1',              t:'env', fr:"Alias de __NV_PRIME_RENDER_OFFLOAD pour certains compositors",                    en:'Alias of __NV_PRIME_RENDER_OFFLOAD for some compositors'},
      {f:'__GL_ALLOW_UNOFFICIAL_PROTOCOL=1',       t:'val', fr:'Autorise les protocoles non-officiels OpenGL',                                   en:'Allow unofficial OpenGL protocols'},
    ]
  },
  {
    id:'wayland', icon:'🌊', css:'sc-wayland', tags:['Wayland','X11','Audio'],
    rows:[
      {f:'XDG_SESSION_TYPE=wayland',    t:'env', fr:'Définit la session courante comme Wayland',                           en:'Set current session type to Wayland'},
      {f:'XDG_SESSION_TYPE=x11',        t:'env', fr:'Définit la session courante comme X11',                              en:'Set current session type to X11'},
      {f:'MOZ_ENABLE_WAYLAND=1',        t:'env', fr:'Active le backend Wayland natif pour Firefox',                       en:'Enable native Wayland backend for Firefox'},
      {f:'GDK_BACKEND=wayland',         t:'env', fr:'Force GTK à utiliser le backend Wayland',                            en:'Force GTK to use Wayland backend'},
      {f:'GDK_BACKEND=x11',             t:'env', fr:'Force GTK à utiliser X11 (XWayland)',                                en:'Force GTK to use X11 (XWayland)'},
      {f:'QT_QPA_PLATFORM=wayland',     t:'env', fr:'Force Qt à utiliser Wayland',                                        en:'Force Qt to use Wayland backend'},
      {f:'QT_QPA_PLATFORM=xcb',         t:'env', fr:'Force Qt à utiliser X11 (XCB)',                                      en:'Force Qt to use X11 (XCB)'},
      {f:'SDL_VIDEODRIVER=wayland',     t:'env', fr:'Force SDL2 à utiliser Wayland',                                      en:'Force SDL2 to use Wayland backend'},
      {f:'SDL_VIDEODRIVER=x11',         t:'env', fr:'Force SDL2 à utiliser X11',                                          en:'Force SDL2 to use X11 backend'},
      {f:'LIBGL_ALWAYS_SOFTWARE=1',     t:'val', fr:'Force le rendu OpenGL logiciel (Mesa llvmpipe)',                      en:'Force software OpenGL rendering (Mesa llvmpipe)'},
      {f:'LIBGL_ALWAYS_INDIRECT=1',     t:'val', fr:'Force le rendu OpenGL indirect',                                     en:'Force indirect OpenGL rendering'},
      {f:'WLR_NO_HARDWARE_CURSORS=1',   t:'val', fr:'Désactive les curseurs matériels Wayland (fix GPU)',                 en:'Disable Wayland hardware cursors (GPU fix)'},
      {f:'WLR_RENDERER=vulkan',         t:'val', fr:'Force le renderer Vulkan pour wlroots',                              en:'Force Vulkan renderer for wlroots compositors'},
      {f:'WLR_RENDERER=gles2',          t:'val', fr:'Force le renderer GLES2 pour wlroots',                               en:'Force GLES2 renderer for wlroots compositors'},
      {f:'WLR_RENDERER_DEBUG=1',        t:'val', fr:'Active le débogage du renderer wlroots',                             en:'Enable wlroots renderer debug output'},
      {f:'WLR_OUTPUT_SCALE=<float>',    t:'val', fr:'Facteur de scale HiDPI Wayland',                                     en:'HiDPI scale factor for Wayland'},
      {f:'WLR_DRM_DEVICES=<path>',      t:'env', fr:'Spécifie le périphérique DRM pour wlroots',                         en:'Specify the DRM device for wlroots'},
      {f:'WAYLAND_DISPLAY=<socket>',    t:'env', fr:'Socket de connexion au serveur Wayland',                             en:'Wayland server connection socket'},
      {f:'XWAYLAND_NO_GLAMOR=1',        t:'val', fr:'Désactive Glamor dans XWayland (fix compat)',                        en:'Disable Glamor in XWayland (compatibility fix)'},
      {f:'DISPLAY=:0',                  t:'env', fr:"Numéro d'affichage X11",                                             en:'X11 display number'},
      {f:'PIPEWIRE_LATENCY="128/48000"',t:'val', fr:'Latence audio PipeWire (128 frames / 48000 Hz)',                     en:'PipeWire audio latency (128 frames / 48000 Hz)'},
      {f:'PIPEWIRE_LATENCY="256/48000"',t:'val', fr:'Latence audio PipeWire faible (256 frames)',                         en:'Low PipeWire audio latency (256 frames)'},
      {f:'PULSE_LATENCY_MSEC=<ms>',     t:'val', fr:'Latence cible PulseAudio en millisecondes',                          en:'Target PulseAudio latency in milliseconds'},
      {f:'ALSA_CARD=<num>',             t:'env', fr:'Numéro de carte ALSA',                                               en:'ALSA sound card number'},
    ]
  },
  {
    id:'gamescope', icon:'🎮', css:'sc-gamescope', tags:['Gamescope','FSR','DLSS'],
    rows:[
      {f:'gamescope -f',                         t:'flag', fr:'Démarre en mode plein écran',                                                    en:'Start in fullscreen mode'},
      {f:'gamescope --windowed',                  t:'flag', fr:'Démarre en mode fenêtré',                                                        en:'Start in windowed mode'},
      {f:'gamescope --borderless',                t:'flag', fr:'Mode plein écran sans bordure',                                                  en:'Borderless fullscreen windowed mode'},
      {f:'--rt',                                  t:'flag', fr:'Rendu temps réel (priorité haute)',                                              en:'Real-time rendering (high priority)'},
      {f:'-r <Hz>',                               t:'flag', fr:'Refresh rate cible en Hz',                                                       en:'Target refresh rate in Hz'},
      {f:'-o <Hz>',                               t:'flag', fr:'Refresh rate de sortie (écran physique)',                                        en:'Output refresh rate (physical display)'},
      {f:'-F fsr',                                t:'flag', fr:'Upscaling FSR (FidelityFX Super Resolution)',                                    en:'FSR upscaling (FidelityFX Super Resolution)'},
      {f:'-F fsr-ultra',                          t:'flag', fr:'FSR mode Ultra Quality',                                                         en:'FSR Ultra Quality mode'},
      {f:'-F nis',                                t:'flag', fr:'Upscaling NIS (NVIDIA Image Scaling)',                                           en:'NIS upscaling (NVIDIA Image Scaling)'},
      {f:'-F dlss',                               t:'flag', fr:'DLSS (Deep Learning Super Sampling, NVIDIA)',                                    en:'DLSS (Deep Learning Super Sampling, NVIDIA)'},
      {f:'-F pixel',                              t:'flag', fr:'Upscaling pixel (nearest neighbor — jeux 2D)',                                   en:'Pixel upscaling (nearest neighbor — 2D games)'},
      {f:'-w <w> -h <h>',                         t:'flag', fr:'Résolution interne (rendu)',                                                     en:'Internal render resolution'},
      {f:'-W <w> -H <h>',                         t:'flag', fr:'Résolution de sortie (affichage)',                                               en:'Output display resolution'},
      {f:'--force-grab-cursor',                   t:'flag', fr:'Force la capture du curseur',                                                    en:'Force cursor capture'},
      {f:'--scale=<float>',                       t:'flag', fr:"Facteur d'échelle d'affichage",                                                  en:'Display scale factor'},
      {f:'--present-mode=mailbox',                t:'flag', fr:'Mode mailbox (faible latence, pas de tearing)',                                  en:'Mailbox present mode (low latency, no tearing)'},
      {f:'--present-mode=fifo',                   t:'flag', fr:'Mode FIFO (VSync strict)',                                                       en:'FIFO present mode (strict VSync)'},
      {f:'--present-mode=fifo-relaxed',           t:'flag', fr:'Mode FIFO relaxed (VSync souple)',                                               en:'Relaxed FIFO present mode (soft VSync)'},
      {f:'--max-fps=<num>',                       t:'flag', fr:'Limite le nombre de FPS maximal',                                                en:'Limit maximum FPS'},
      {f:'--min-fps=<num>',                       t:'flag', fr:'FPS minimal (évite les micro-stutters)',                                         en:'Minimum FPS (avoids micro-stutters)'},
      {f:'--disable-vblank',                      t:'flag', fr:'Désactive la synchronisation vblank',                                            en:'Disable vblank synchronization'},
      {f:'--pixel-doubling',                      t:'flag', fr:'Double chaque pixel (2x pour jeux rétro/2D)',                                    en:'Double each pixel (2x for retro/2D games)'},
      {f:'--expose-wayland',                      t:'flag', fr:'Expose un socket Wayland pour les apps internes',                                en:'Expose a Wayland socket for apps inside Gamescope'},
      {f:'--steam',                               t:'flag', fr:"Mode d'intégration Steam (utilisé par SteamOS)",                                 en:'Steam integration mode (used by SteamOS)'},
      {f:'--adaptive-sync',                       t:'flag', fr:'Synchronisation adaptative (FreeSync / G-Sync)',                                 en:'Adaptive sync (FreeSync / G-Sync Compatible)'},
      {f:'--hdr-enabled',                         t:'flag', fr:'Active HDR (nécessite support écran + driver)',                                  en:'Enable HDR (requires display + driver support)'},
      {f:'--hdr-sdr-content-nits=<val>',          t:'flag', fr:'Luminosité du contenu SDR en mode HDR (nits)',                                  en:'SDR content brightness in HDR mode (nits)'},
      {f:'-e',                                    t:'flag', fr:'Mode Steam Deck / embedded',                                                     en:'Steam Deck / embedded mode'},
    ]
  },
  {
    id:'gamemode', icon:'⚡', css:'sc-gamemode', tags:['GameMode','CPU'],
    rows:[
      {f:'gamemoderun',                               t:'cmd', fr:'Lance une app avec GameMode (optimisation CPU/GPU)',                           en:'Launch app with GameMode (CPU/GPU optimization)'},
      {f:'gamemoderun gamescope --',                  t:'cmd', fr:'Combine GameMode + Gamescope',                                                en:'Combine GameMode with Gamescope'},
      {f:'GAMEMODE_AUTO_SUSPEND=1',                   t:'val', fr:'Suspend les processus non essentiels en jeu',                                 en:'Auto-suspend non-essential processes while gaming'},
      {f:'GAMEMODE_LOG_LEVEL=info',                   t:'val', fr:'Log GameMode : infos générales',                                              en:'GameMode log level: general information'},
      {f:'GAMEMODE_LOG_LEVEL=debug',                  t:'val', fr:'Log GameMode : débogage détaillé',                                            en:'GameMode log level: verbose debug'},
      {f:'GAMEMODE_PRIORITY=<priority>',              t:'val', fr:'Priorité CPU pour le processus de jeu (nice value)',                          en:'CPU priority for the game process (nice value)'},
      {f:'LD_PRELOAD=/usr/lib/libgamemodeauto.so.0',  t:'env', fr:'Active GameMode via LD_PRELOAD (sans modifier la commande)',                   en:'Enable GameMode via LD_PRELOAD (no command change)'},
      {f:'gamemoded -d',                              t:'cmd', fr:'Lance le daemon GameMode en mode debug',                                      en:'Start GameMode daemon with debug mode'},
      {f:'gamemodeset -r',                            t:'cmd', fr:"Active GameMode manuellement",                                                en:'Manually activate GameMode'},
      {f:'gamemodeset -q',                            t:'cmd', fr:"Désactive GameMode manuellement",                                             en:'Manually deactivate GameMode'},
    ]
  },
  {
    id:'wine', icon:'🍷', css:'sc-wine', tags:['Wine','DLL'],
    rows:[
      {f:'WINEDLLOVERRIDES="d3d11=n,b"',        t:'env', fr:'Override D3D11 par Wine natif',                                                   en:'Override D3D11 with native Wine'},
      {f:'WINEDLLOVERRIDES="dxgi=n,b"',         t:'env', fr:'Override DXGI par Wine natif',                                                    en:'Override DXGI with native Wine'},
      {f:'WINEDLLOVERRIDES="winhttp=n,b"',      t:'env', fr:'Override WinHTTP (utile pour certains DRM)',                                      en:'Override WinHTTP (useful for some DRM games)'},
      {f:'WINEDLLOVERRIDES="xaudio2_7=n,b"',   t:'env', fr:'Override XAudio2_7 (fix audio)',                                                  en:'Override XAudio2_7 (audio fix)'},
      {f:'WINEDLLOVERRIDES="msvcrt=n,b"',       t:'env', fr:'Force le runtime Microsoft C',                                                    en:'Force Microsoft C runtime'},
      {f:'WINEDLLOVERRIDES="dinput8=n,b"',      t:'env', fr:'Override dinput8 (fix manette)',                                                  en:'Override dinput8 (gamepad fix)'},
      {f:'WINEDLLOVERRIDES="bcrypt=n,b"',       t:'env', fr:'Override bcrypt (jeux avec cryptographie)',                                       en:'Override bcrypt (games using cryptography)'},
      {f:'WINEDLLOVERRIDES="winmm=n,b"',        t:'env', fr:'Override winmm (fix audio et timers)',                                            en:'Override winmm (audio and timer fix)'},
      {f:'WINEDLLOVERRIDES="nvapi,nvapi64=n,b"',t:'env', fr:'Désactive NVAPI dans Wine',                                                       en:'Disable NVAPI in Wine'},
      {f:'WINEDLLOVERRIDES="d3d9=n,b"',         t:'env', fr:'Force D3D9 Wine natif (désactive DXVK pour DX9)',                                 en:'Force native Wine D3D9 (disable DXVK for DX9)'},
      {f:'WINEDLLOVERRIDES="vulkan-1=n,b"',     t:'env', fr:'Override DLL Vulkan par la native système',                                       en:'Override Vulkan DLL with system native'},
      {f:'WINE_MONO_OVERRIDES=<dll>=n,b',       t:'env', fr:'Override les DLL .NET dans Wine Mono',                                            en:'Override .NET DLLs in Wine Mono'},
      {f:'WINEARCH=win64',                      t:'env', fr:'Force un préfixe Wine 64-bit',                                                    en:'Force a 64-bit Wine prefix'},
      {f:'WINEARCH=win32',                      t:'env', fr:'Force un préfixe Wine 32-bit (compat jeux anciens)',                              en:'Force a 32-bit Wine prefix (old game compatibility)'},
      {f:'WINE_ENABLE_IPV6=1',                  t:'val', fr:"Active l'IPv6 dans Wine",                                                         en:'Enable IPv6 support in Wine'},
      {f:'WINESERVER=<path>',                   t:'env', fr:'Chemin vers le binaire wineserver',                                               en:'Path to the wineserver binary'},
    ]
  },
  {
    id:'steam', icon:'🎯', css:'sc-steam', tags:['Steam','Launch'],
    rows:[
      {f:'%command%',                                             t:'val', fr:'Placeholder obligatoire pour les options de lancement Steam',         en:'Mandatory placeholder for Steam launch options'},
      {f:'PROTON_USE_NTSYNC=1 %command%',                        t:'cmd', fr:'Exemple : variable avant %command%',                                  en:'Example: pass variable before %command%'},
      {f:'gamemoderun %command%',                                t:'cmd', fr:'Active GameMode pour ce jeu',                                         en:'Enable GameMode for this game'},
      {f:'gamescope -f -- %command%',                            t:'cmd', fr:'Lance dans Gamescope en plein écran',                                 en:'Launch inside Gamescope fullscreen'},
      {f:'gamemoderun gamescope -f -- %command%',                t:'cmd', fr:'GameMode + Gamescope + jeu Steam (combo optimal)',                     en:'GameMode + Gamescope + Steam game (optimal combo)'},
      {f:'STEAM_COMPAT_DATA_PATH=<path> %command%',              t:'env', fr:'Préfixe Proton personnalisé',                                          en:'Set custom Proton prefix path'},
      {f:'STEAM_COMPAT_CLIENT_INSTALL_PATH=<path>',              t:'env', fr:"Chemin d'installation Steam (Proton custom)",                          en:'Steam install path (custom Proton)'},
      {f:'STEAM_FORCE_DESKTOPUI_SCALING=<float>',                t:'env', fr:'Force le scale UI Steam (ex: 1.5)',                                    en:'Force Steam UI scaling (e.g. 1.5)'},
      {f:'-windowed -noborder',                                  t:'flag', fr:'Mode fenêtré sans bordure (Source Engine)',                           en:'Borderless windowed mode (Source Engine)'},
      {f:'-fullscreen',                                          t:'flag', fr:'Force le plein écran (Source Engine)',                                en:'Force fullscreen (Source Engine)'},
      {f:'-w <width> -h <height>',                               t:'flag', fr:'Résolution au lancement (Source Engine)',                             en:'Set launch resolution (Source Engine)'},
      {f:'MANGOHUD=1 %command%',                                 t:'cmd', fr:'Active MangoHud pour ce jeu',                                         en:'Enable MangoHud for this game'},
      {f:'ENABLE_VKBASALT=1 %command%',                          t:'cmd', fr:'Active vkBasalt (post-process Vulkan)',                                en:'Enable vkBasalt (Vulkan post-process effects)'},
      {f:'SteamDeck=1 %command%',                                t:'cmd', fr:'Simule l\'environnement Steam Deck',                                  en:'Simulate Steam Deck environment'},
      {f:'PROTON_LOG=1 %command%',                               t:'cmd', fr:'Active les logs Proton pour ce jeu spécifiquement',                   en:'Enable Proton logs for this specific game'},
    ]
  },
  {
    id:'mangohud', icon:'📊', css:'sc-mangohud', tags:['MangoHud','HUD'],
    rows:[
      {f:'MANGOHUD=1',                            t:'val', fr:"Active l'overlay MangoHud",                                                       en:'Enable MangoHud overlay'},
      {f:'MANGOHUD=0',                            t:'val', fr:'Désactive MangoHud',                                                              en:'Disable MangoHud'},
      {f:'MANGOHUD_CONFIG=<options>',             t:'env', fr:'Passe des options de config MangoHud inline',                                     en:'Pass inline MangoHud configuration options'},
      {f:'MANGOHUD_CONFIG=fps,cpu_temp,gpu_temp', t:'val', fr:'Affiche FPS + températures CPU & GPU',                                            en:'Show FPS + CPU & GPU temperatures'},
      {f:'MANGOHUD_CONFIG=full',                  t:'val', fr:'Active tous les éléments du HUD',                                                 en:'Enable all HUD elements'},
      {f:'MANGOHUD_CONFIG=no_display',            t:'val', fr:'MangoHud actif mais masqué (toggle par raccourci)',                               en:'MangoHud active but hidden (toggle with shortcut)'},
      {f:'MANGOHUD_DLSYM=1',                      t:'val', fr:'Utilise dlsym pour l\'injection (compat améliorée)',                               en:'Use dlsym for injection (improved compatibility)'},
      {f:'MANGOHUD_OUTPUT=<path>',                t:'env', fr:'Chemin de sortie des logs de benchmark',                                          en:'Output path for benchmark logs'},
      {f:'MANGOHUD_BENCHMARK=1',                  t:'val', fr:'Active l\'enregistrement automatique des perfs',                                  en:'Enable automatic performance recording'},
      {f:'mangohud <command>',                    t:'cmd', fr:'Lance une app avec MangoHud actif',                                               en:'Launch an app with MangoHud enabled'},
      {f:'mangohud --dlsym <command>',            t:'cmd', fr:'Lance avec MangoHud en mode dlsym',                                               en:'Launch with MangoHud in dlsym mode'},
      {f:'MANGOHUD_CONFIG=position=top-right',    t:'val', fr:'Position overlay : haut-droite',                                                  en:'Overlay position: top-right'},
      {f:'MANGOHUD_CONFIG=position=top-left',     t:'val', fr:'Position overlay : haut-gauche',                                                  en:'Overlay position: top-left'},
      {f:'MANGOHUD_CONFIG=font_size=<px>',        t:'val', fr:"Taille de police de l'overlay",                                                   en:'Overlay font size'},
      {f:'MANGOHUD_CONFIG=legacy_layout=0',       t:'val', fr:'Désactive le layout legacy (nouveau format config)',                              en:'Disable legacy layout (use new config format)'},
    ]
  },
  {
    id:'mesa', icon:'🔷', css:'sc-mesa', tags:['Mesa','AMD','Intel'],
    rows:[
      {f:'RADV_PERFTEST=aco',              t:'env', fr:'Force le backend ACO (compilateur AMD — actif par défaut)',                             en:'Force ACO backend (AMD shader compiler — default)'},
      {f:'RADV_PERFTEST=rt',               t:'env', fr:'Active le ray tracing expérimental RADV',                                               en:'Enable experimental RADV ray tracing'},
      {f:'RADV_PERFTEST=mesh_shaders',     t:'env', fr:'Active les mesh shaders expérimentaux RADV',                                            en:'Enable experimental RADV mesh shaders'},
      {f:'RADV_PERFTEST=nggc',             t:'env', fr:'Active NGG Culling expérimental (perfs geometry)',                                       en:'Enable experimental NGG Culling (geometry perf)'},
      {f:'RADV_DEBUG=nocache',             t:'env', fr:'Désactive le cache de pipeline RADV',                                                    en:'Disable RADV pipeline cache'},
      {f:'RADV_DEBUG=nofastclears',        t:'env', fr:'Désactive les fast clears RADV (debug visuel)',                                          en:'Disable RADV fast clears (visual debug)'},
      {f:'AMD_VULKAN_ICD=RADV',            t:'env', fr:'Force le driver RADV (Mesa open-source) pour Vulkan AMD',                               en:'Force RADV driver (Mesa open-source) for AMD Vulkan'},
      {f:'AMD_VULKAN_ICD=AMDVLK',          t:'env', fr:'Force AMDVLK (driver Vulkan officiel AMD)',                                             en:'Force AMDVLK (official AMD Vulkan driver)'},
      {f:'MESA_GLSL_CACHE_DISABLE=false',  t:'val', fr:'S\'assure que le cache GLSL Mesa est activé',                                           en:'Ensure Mesa GLSL cache is enabled'},
      {f:'MESA_GLSL_CACHE_DIR=<path>',     t:'env', fr:'Chemin du cache GLSL Mesa',                                                             en:'Mesa GLSL cache directory path'},
      {f:'MESA_GLSL_CACHE_MAX_SIZE=<size>',t:'val', fr:'Taille maximale du cache GLSL (ex: 1G)',                                                en:'Maximum Mesa GLSL cache size (e.g. 1G)'},
      {f:'MESA_NO_ERROR=1',                t:'val', fr:'Désactive la vérification des erreurs Mesa (légère perf)',                              en:'Disable Mesa error checking (slight perf boost)'},
      {f:'MESA_GL_VERSION_OVERRIDE=<ver>', t:'val', fr:'Force une version OpenGL spécifique (ex: 4.5)',                                         en:'Force a specific OpenGL version (e.g. 4.5)'},
      {f:'MESA_GLES_VERSION_OVERRIDE=<v>', t:'val', fr:'Force une version OpenGL ES spécifique',                                               en:'Force a specific OpenGL ES version'},
      {f:'INTEL_DEBUG=<flags>',            t:'env', fr:'Flags de débogage Intel Mesa (ANV/i965)',                                               en:'Debug flags for Intel Mesa driver (ANV/i965)'},
      {f:'ANV_ENABLE_PIPELINE_CACHE=1',    t:'val', fr:'Active le cache pipeline ANV (Intel Vulkan)',                                           en:'Enable pipeline cache for ANV (Intel Vulkan)'},
      {f:'NOUVEAU_ENABLE_CRC=1',           t:'val', fr:'Active le CRC Nouveau (NVIDIA open-source Mesa)',                                       en:'Enable CRC in Nouveau (Mesa open-source NVIDIA)'},
      {f:'R600_DEBUG=<options>',           t:'env', fr:'Options de débogage r600/r700 (anciens GPU AMD)',                                       en:'Debug options for r600/r700 (older AMD GPUs)'},
      {f:'SI_DEBUG=<options>',             t:'env', fr:'Options de débogage Southern Islands (GCN1)',                                           en:'Debug options for Southern Islands (GCN1)'},
      {f:'GALLIUM_DRIVER=<driver>',        t:'env', fr:'Force un driver Gallium spécifique (ex: softpipe)',                                     en:'Force a specific Gallium driver (e.g. softpipe)'},
    ]
  },

  /* ─────────────────────────────────────────────────
     11. UPSCALING / FSR / DLSS / XeSS
  ───────────────────────────────────────────────── */
  {
    id:'upscaling', icon:'🔭', css:'sc-upscaling', tags:['FSR','DLSS','XeSS'],
    rows:[
      // FSR Wine/Proton (fshack)
      {f:'WINE_FULLSCREEN_FSR=1',                t:'env', fr:'Active FSR via Wine fshack — upscale fenêtre → plein écran',                       en:'Enable FSR via Wine fshack — upscale window to fullscreen'},
      {f:'WINE_FULLSCREEN_FSR_STRENGTH=<0-5>',   t:'val', fr:'Netteté FSR : 0 = max sharp, 5 = min sharp, défaut 2',                            en:'FSR sharpness: 0 = max sharp, 5 = min sharp, default 2'},
      {f:'WINE_FULLSCREEN_FSR_MODE=ultra',        t:'val', fr:'FSR preset Ultra Quality (résolution très proche du natif)',                       en:'FSR Ultra Quality preset (very close to native resolution)'},
      {f:'WINE_FULLSCREEN_FSR_MODE=quality',      t:'val', fr:'FSR preset Quality (rapport qualité/perf recommandé)',                             en:'FSR Quality preset (recommended quality/perf ratio)'},
      {f:'WINE_FULLSCREEN_FSR_MODE=balanced',     t:'val', fr:'FSR preset Balanced (compromis qualité/performances)',                             en:'FSR Balanced preset (quality/performance compromise)'},
      {f:'WINE_FULLSCREEN_FSR_MODE=performance',  t:'val', fr:'FSR preset Performance (gain FPS maximal)',                                        en:'FSR Performance preset (maximum FPS gain)'},
      {f:'WINE_FULLSCREEN_FSR_CUSTOM_MODE=<WxH>', t:'val', fr:'Résolution interne FSR custom (ex: 1477x831 pour 1080p→1440p)',                   en:'Custom FSR internal resolution (e.g. 1477x831 for 1080p→1440p)'},
      {f:'WINE_VULKAN_NEGATIVE_MIP_BIAS=<N>',    t:'env', fr:'Biais MIP négatif pour améliorer la netteté des textures avec FSR (N/100)',        en:'Negative MIP bias to improve texture sharpness with FSR (N/100)'},
      // FSR 3 / FSR 4 GE-Proton
      {f:'PROTON_FSR4_UPGRADE=1',                t:'env', fr:'Télécharge et applique FSR 4 aux jeux utilisant FSR 3.1 (RDNA4, GE-Proton 10-26+)',en:'Download and apply FSR 4 to games using FSR 3.1 (RDNA4, GE-Proton 10-26+)'},
      {f:'PROTON_FSR4_UPGRADE="4.0.1"',          t:'val', fr:'Spécifie la version FSR4 DLL à télécharger',                                       en:'Specify the FSR4 DLL version to download'},
      {f:'PROTON_FSR4_RDNA3_UPGRADE=1',          t:'env', fr:'FSR 4 optimisé pour RDNA3 (RX 7000 series), DLL 4.0.0 par défaut',                 en:'FSR 4 optimized for RDNA3 (RX 7000 series), DLL 4.0.0 by default'},
      {f:'PROTON_FSR4_INDICATOR=1',              t:'env', fr:'Affiche le watermark FSR4 en haut à gauche',                                       en:'Show FSR4 watermark indicator top-left'},
      {f:'PROTON_FSR3_UPGRADE=1',                t:'env', fr:'Upgrade les DLL FSR 3.1 automatiquement',                                          en:'Auto-upgrade FSR 3.1 DLLs'},
      {f:'FSR4_WATERMARK=1',                     t:'val', fr:'Active le watermark FSR4 directement',                                              en:'Enable FSR4 watermark directly'},
      // MLFG
      {f:'MLFG_UPGRADE=1',                       t:'env', fr:'Active Multi-Frame Generation (MLFG) avec FSR4',                                   en:'Enable Multi-Frame Generation (MLFG) with FSR4'},
      {f:'PROTON_MLFG_UPGRADE=0',                t:'val', fr:'Désactive MLFG quand FSR4_UPGRADE est actif',                                      en:'Disable MLFG when FSR4_UPGRADE is active'},
      {f:'MLFG_WATERMARK=1',                     t:'val', fr:'Active le watermark MLFG',                                                          en:'Enable MLFG watermark'},
      // DLSS
      {f:'PROTON_DLSS_UPGRADE=1',                t:'env', fr:'Télécharge les dernières DLL DLSS (nvngx_dlss) automatiquement',                   en:'Auto-download latest DLSS DLLs (nvngx_dlss)'},
      {f:'PROTON_DLSS_UPGRADE="310.2"',          t:'val', fr:'Télécharge une version DLSS spécifique',                                           en:'Download a specific DLSS version'},
      {f:'PROTON_DLSS_INDICATOR=1',              t:'env', fr:'Affiche l\'overlay DLSS actif en bas à gauche',                                    en:'Show active DLSS overlay bottom-left'},
      // XeSS
      {f:'PROTON_XESS_UPGRADE=1',                t:'env', fr:'Upgrade les DLL XeSS (Intel) automatiquement',                                     en:'Auto-upgrade XeSS (Intel) DLLs'},
      // HDR
      {f:'PROTON_ENABLE_HDR=1',                  t:'env', fr:'Active le support HDR (nécessite Gamescope ou Wayland + driver)',                  en:'Enable HDR support (requires Gamescope or Wayland + driver)'},
      {f:'ENABLE_HDR_WSI=1',                     t:'env', fr:'Active HDR via WSI sur NVIDIA avec winewayland',                                   en:'Enable HDR via WSI on NVIDIA with winewayland'},
    ]
  },

  /* ─────────────────────────────────────────────────
     12. VKD3D-PROTON (DirectX 12 → Vulkan)
  ───────────────────────────────────────────────── */
  {
    id:'vkd3d', icon:'🔶', css:'sc-vkd3d', tags:['VKD3D','DX12','Vulkan'],
    rows:[
      {f:'VKD3D_CONFIG=dxr',                 t:'val', fr:'Force l\'activation DXR (ray tracing) même si jugé non sûr (actif par défaut depuis v2.11)', en:'Force-enable DXR even if deemed unsafe (default since v2.11)'},
      {f:'VKD3D_CONFIG=dxr12',               t:'val', fr:'Active le support expérimental DXR 1.2 (VK_EXT_opacity_micromap requis)',                   en:'Enable experimental DXR 1.2 support (VK_EXT_opacity_micromap required)'},
      {f:'VKD3D_CONFIG=nodxr',               t:'val', fr:'Désactive le ray tracing DXR',                                                              en:'Disable DXR ray tracing'},
      {f:'VKD3D_CONFIG=force_static_cbv',    t:'val', fr:'Optimisation NVIDIA non sûre — peut améliorer les perfs (YMMV)',                            en:'Unsafe NVIDIA speed hack — may improve performance (YMMV)'},
      {f:'VKD3D_CONFIG=single_queue',        t:'val', fr:'Désactive les queues async compute/transfer (debug)',                                        en:'Disable async compute/transfer queues (debug)'},
      {f:'VKD3D_CONFIG=no_upload_hvv',       t:'val', fr:'Bloque l\'utilisation de la VRAM host-visible (ReBAR) pour le heap UPLOAD',                en:'Block host-visible VRAM (ReBAR) use for UPLOAD heap'},
      {f:'VKD3D_CONFIG=force_host_cached',   t:'val', fr:'Force toutes les allocations host-visible en mode CACHED (accélère les captures)',          en:'Force all host-visible allocations to CACHED mode (speeds up captures)'},
      {f:'VKD3D_CONFIG=vk_debug',            t:'val', fr:'Active les extensions de débogage Vulkan et le validation layer',                           en:'Enable Vulkan debug extensions and validation layer'},
      {f:'VKD3D_CONFIG=skip_application_workarounds', t:'val', fr:'Ignore tous les workarounds applicatifs (debug uniquement)',                       en:'Skip all application workarounds (debug only)'},
      {f:'VKD3D_DEBUG=none',                 t:'val', fr:'Désactive tous les logs VKD3D',                                                             en:'Disable all VKD3D logs'},
      {f:'VKD3D_DEBUG=err',                  t:'val', fr:'Logs VKD3D niveau erreur',                                                                  en:'VKD3D error-level logs'},
      {f:'VKD3D_DEBUG=warn',                 t:'val', fr:'Logs VKD3D niveau avertissement',                                                           en:'VKD3D warning-level logs'},
      {f:'VKD3D_DEBUG=trace',                t:'val', fr:'Logs VKD3D niveau trace complet (très verbeux)',                                            en:'VKD3D full trace logs (very verbose)'},
      {f:'VKD3D_SHADER_DEBUG=none',          t:'val', fr:'Désactive les logs du compilateur de shaders VKD3D',                                       en:'Disable VKD3D shader compiler logs'},
      {f:'VKD3D_SHADER_DEBUG=trace',         t:'val', fr:'Logs complets du compilateur de shaders',                                                   en:'Full shader compiler logs'},
      {f:'VKD3D_SHADER_DUMP_PATH=<path>',    t:'env', fr:'Dossier où dumper tous les shaders compilés (debug)',                                      en:'Folder to dump all compiled shaders (debug)'},
      {f:'VKD3D_LOG_FILE=<path>',            t:'env', fr:'Redirige les logs VKD3D vers un fichier',                                                   en:'Redirect VKD3D logs to a file'},
      {f:'VKD3D_VULKAN_DEVICE=<index>',      t:'val', fr:'Force un GPU Vulkan par index (0, 1, 2…)',                                                 en:'Force a Vulkan GPU by index (0, 1, 2…)'},
      {f:'VKD3D_FILTER_DEVICE_NAME=<n>',  t:'env', fr:'Force VKD3D à utiliser un GPU dont le nom contient cette substring',                       en:'Force VKD3D to use a GPU whose name contains this substring'},
      {f:'VKD3D_DISABLE_EXTENSIONS=<ext>',   t:'env', fr:'Désactive des extensions Vulkan spécifiques dans VKD3D',                                   en:'Disable specific Vulkan extensions in VKD3D'},
      {f:'VKD3D_SHADER_CACHE_PATH=<path>',   t:'env', fr:'Chemin du cache de shaders VKD3D',                                                         en:'VKD3D shader cache path'},
      {f:'VKD3D_SHADER_CACHE_PATH=0',        t:'val', fr:'Désactive complètement le cache shaders VKD3D',                                            en:'Completely disable VKD3D shader cache'},
      {f:'VKD3D_FRAME_RATE=<num>',           t:'val', fr:'Limite les FPS au niveau VKD3D',                                                           en:'Limit FPS at VKD3D level'},
      {f:'VKD3D_QUEUE_PROFILE=1',            t:'val', fr:'Active le profiling des queues VKD3D (debug perfs)',                                       en:'Enable VKD3D queue profiling (performance debug)'},
    ]
  },

  /* ─────────────────────────────────────────────────
     13. VKBASALT / POST-PROCESS
  ───────────────────────────────────────────────── */
  {
    id:'vkbasalt', icon:'🎨', css:'sc-vkbasalt', tags:['vkBasalt','CAS','SMAA'],
    rows:[
      {f:'ENABLE_VKBASALT=1',                      t:'env', fr:'Active vkBasalt (post-process Vulkan : CAS, SMAA, FXAA, DLS…)',                 en:'Enable vkBasalt (Vulkan post-process: CAS, SMAA, FXAA, DLS…)'},
      {f:'ENABLE_VKBASALT=1 %command%',             t:'cmd', fr:'Active vkBasalt pour un jeu Steam',                                            en:'Enable vkBasalt for a Steam game'},
      {f:'VKBASALT_CONFIG_FILE=<path>',             t:'env', fr:'Chemin vers un fichier vkBasalt.conf custom',                                  en:'Path to a custom vkBasalt.conf file'},
      {f:'VKBASALT_LOG_LEVEL=none',                 t:'val', fr:'Désactive tous les logs vkBasalt',                                             en:'Disable all vkBasalt logs'},
      {f:'VKBASALT_LOG_LEVEL=error',                t:'val', fr:'Logs vkBasalt niveau erreur',                                                  en:'vkBasalt error-level logs'},
      {f:'VKBASALT_LOG_LEVEL=warn',                 t:'val', fr:'Logs vkBasalt niveau avertissement',                                           en:'vkBasalt warning-level logs'},
      {f:'VKBASALT_LOG_LEVEL=info',                 t:'val', fr:'Logs vkBasalt niveau info',                                                    en:'vkBasalt info-level logs'},
      {f:'VKBASALT_LOG_LEVEL=debug',                t:'val', fr:'Logs vkBasalt niveau debug complet',                                           en:'vkBasalt full debug logs'},
      {f:'VKBASALT_LOG_FILE=<path>',                t:'env', fr:'Redirige les logs vkBasalt vers un fichier',                                   en:'Redirect vkBasalt logs to a file'},
      // Effets dans vkBasalt.conf
      {f:'effects=cas',                             t:'val', fr:'vkBasalt.conf : active Contrast Adaptive Sharpening',                         en:'vkBasalt.conf: enable Contrast Adaptive Sharpening'},
      {f:'effects=fxaa',                            t:'val', fr:'vkBasalt.conf : active Fast Approximate Anti-Aliasing',                       en:'vkBasalt.conf: enable Fast Approximate Anti-Aliasing'},
      {f:'effects=smaa',                            t:'val', fr:'vkBasalt.conf : active Enhanced Subpixel Morphological AA',                   en:'vkBasalt.conf: enable Enhanced Subpixel Morphological AA'},
      {f:'effects=dls',                             t:'val', fr:'vkBasalt.conf : active Denoised Luma Sharpening',                             en:'vkBasalt.conf: enable Denoised Luma Sharpening'},
      {f:'effects=lut',                             t:'val', fr:'vkBasalt.conf : active Color LookUp Table (LUT)',                             en:'vkBasalt.conf: enable Color LookUp Table (LUT)'},
      {f:'effects=cas:smaa:fxaa',                   t:'val', fr:'vkBasalt.conf : chaîne d\'effets combinés (ordre gauche→droite)',             en:'vkBasalt.conf: combined effects chain (left to right order)'},
      {f:'casSharpness=<0.0-1.0>',                  t:'val', fr:'vkBasalt.conf : intensité CAS (0.0=doux, 1.0=max sharp)',                     en:'vkBasalt.conf: CAS sharpness (0.0=soft, 1.0=max sharp)'},
      {f:'dlsSharpness=<0.0-1.0>',                  t:'val', fr:'vkBasalt.conf : intensité DLS sharpening',                                    en:'vkBasalt.conf: DLS sharpening strength'},
      {f:'dlsDenoise=<0.0-1.0>',                    t:'val', fr:'vkBasalt.conf : intensité débruitage DLS',                                    en:'vkBasalt.conf: DLS denoise strength'},
      {f:'smaaEdgeDetection=luma',                  t:'val', fr:'vkBasalt.conf : détection de contours SMAA par luminance (défaut)',           en:'vkBasalt.conf: SMAA edge detection by luma (default)'},
      {f:'smaaEdgeDetection=color',                 t:'val', fr:'vkBasalt.conf : détection de contours SMAA par couleur (plus précise)',       en:'vkBasalt.conf: SMAA edge detection by color (more precise)'},
      {f:'toggleKey=Home',                          t:'val', fr:'vkBasalt.conf : touche pour activer/désactiver les effets (défaut: Home)',    en:'vkBasalt.conf: key to toggle effects on/off (default: Home)'},
      {f:'enableOnLaunch=True',                     t:'val', fr:'vkBasalt.conf : effets actifs au lancement (défaut)',                         en:'vkBasalt.conf: effects enabled on launch (default)'},
    ]
  },

  /* ─────────────────────────────────────────────────
     14. GPU HYBRIDE / PRIME OFFLOAD
  ───────────────────────────────────────────────── */
  {
    id:'prime', icon:'⚙️', css:'sc-prime', tags:['PRIME','Hybrid','GPU'],
    rows:[
      // AMD PRIME
      {f:'DRI_PRIME=1',                             t:'env', fr:'Force le GPU dédié AMD/Intel sur systèmes hybrides (iGPU+dGPU)',               en:'Force dedicated AMD/Intel GPU on hybrid systems (iGPU+dGPU)'},
      {f:'DRI_PRIME=0',                             t:'env', fr:'Force l\'iGPU (GPU intégré) sur systèmes hybrides',                            en:'Force iGPU (integrated GPU) on hybrid systems'},
      {f:'DRI_PRIME=pci-0000_01_00_0',              t:'env', fr:'Cible un GPU AMD/Mesa spécifique par adresse PCI',                             en:'Target a specific AMD/Mesa GPU by PCI address'},
      {f:'DRI_PRIME=1 %command%',                   t:'cmd', fr:'Active le dGPU AMD pour ce jeu Steam',                                        en:'Enable AMD dGPU for this Steam game'},
      // NVIDIA PRIME offload
      {f:'__GLX_VENDOR_LIBRARY_NAME=nvidia',        t:'env', fr:'Force la bibliothèque GLX NVIDIA (nécessaire avec PRIME offload NVIDIA)',      en:'Force NVIDIA GLX vendor library (required with NVIDIA PRIME offload)'},
      {f:'__NV_PRIME_RENDER_OFFLOAD=1 __GLX_VENDOR_LIBRARY_NAME=nvidia <cmd>', t:'cmd', fr:'Combo complet PRIME NVIDIA — lance sur le GPU dédié', en:'Full NVIDIA PRIME combo — launch on dedicated GPU'},
      {f:'prime-run <command>',                     t:'cmd', fr:'Script nvidia-prime — lance sur le GPU NVIDIA dédié (Arch/Debian)',            en:'nvidia-prime script — launch on dedicated NVIDIA GPU (Arch/Debian)'},
      {f:'switcherooctl launch <command>',          t:'cmd', fr:'Lance une app sur le GPU dédié via switcheroo-control (GNOME/KDE)',            en:'Launch app on dedicated GPU via switcheroo-control (GNOME/KDE)'},
      // GameMode + PRIME
      {f:'GAMEMODERUNEXEC=optirun',                 t:'env', fr:'Utilise optirun comme wrapper dans gamemoderun (Bumblebee)',                   en:'Use optirun as gamemoderun wrapper (Bumblebee)'},
      {f:'GAMEMODERUNEXEC="env DRI_PRIME=1"',       t:'env', fr:'Combine GameMode + PRIME AMD dans un seul export global',                     en:'Combine GameMode + AMD PRIME in a single global export'},
      {f:'GAMEMODERUNEXEC="env __NV_PRIME_RENDER_OFFLOAD=1 __GLX_VENDOR_LIBRARY_NAME=nvidia"', t:'env', fr:'Combine GameMode + PRIME NVIDIA globalement', en:'Combine GameMode + NVIDIA PRIME globally'},
      // GPU tools
      {f:'glxinfo | grep "OpenGL renderer"',        t:'cmd', fr:'Vérifie quel GPU est utilisé par OpenGL',                                     en:'Check which GPU is used by OpenGL'},
      {f:'vulkaninfo | grep "GPU id"',              t:'cmd', fr:'Liste les GPU Vulkan disponibles et leurs index',                              en:'List available Vulkan GPUs and their indexes'},
      {f:'xrandr --listproviders',                  t:'cmd', fr:'Liste les providers GPU disponibles (X11)',                                    en:'List available GPU providers (X11)'},
    ]
  },
];

const totalFlags = () => DATA.reduce((a,s) => a + s.rows.length, 0);
const newFlags   = () => Math.max(0, totalFlags() - 66);
