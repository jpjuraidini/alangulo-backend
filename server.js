<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Al Ángulo · Mundial 2026</title>
<link rel="manifest" href="/manifest.json">
<meta name="theme-color" content="#006838">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="apple-mobile-web-app-title" content="Al Ángulo">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="preload" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" as="style">
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<style>body{margin:0;background:#0a0e1a}</style>
<style>
/* ── DESIGN TOKENS ── */
:root{
  --bg:#f2f4f8;
  --surface:#ffffff;
  --ink:#0a0e1a;
  --ink2:#2e3448;
  --ink3:#7880a0;
  --border:#e2e6f0;
  --border2:#c8cedd;
  --green:#006838;--green2:#009650;--green3:#00c46a;
  --red:#c0001a;--red2:#e8001f;
  --blue:#003087;--blue2:#0052cc;--blue3:#3d87ff;
  --g:var(--green);--g2:var(--green2);--g3:var(--green3);
  --g-bg:#e6f5ee;--g-bg2:#c8eada;
  --r:var(--red);--r2:var(--red2);--r-bg:#fce8ea;
  --b:var(--blue);--b2:var(--blue2);--b-bg:#e0eaff;
  --gld:#9a6500;--gld-bg:#fdf0d8;
  --grad-tri:linear-gradient(135deg,#006838 0%,#003087 50%,#c0001a 100%);
  --grad-gb:linear-gradient(135deg,#006838 0%,#0052cc 100%);
  --grad-gr:linear-gradient(135deg,#006838 0%,#c0001a 100%);
  --grad-br:linear-gradient(135deg,#003087 0%,#c0001a 100%);
  --grad-light:linear-gradient(135deg,rgba(0,104,56,.07) 0%,rgba(0,48,135,.05) 50%,rgba(192,0,26,.04) 100%);
  --rad:12px;--rad-lg:18px;
  --sh:0 1px 3px rgba(10,14,26,.06),0 4px 16px rgba(10,14,26,.08);
  --sh2:0 4px 12px rgba(10,14,26,.1),0 16px 48px rgba(10,14,26,.12);
}
body.dark{
  --bg:#080b14;--surface:#111525;--ink:#eef0f8;
  --ink2:#dde0f0;
  --ink3:#b0b8d8;
  --border:#1e2438;--border2:#2a3050;
  --green:#00c46a;--green2:#00e07a;--green3:#40ff98;
  --red:#ff3355;--red2:#ff5570;
  --blue:#3d87ff;--blue2:#60a0ff;--blue3:#88bbff;
  --g:var(--green);--g2:var(--green2);--g3:var(--green3);
  --g-bg:#051a0e;--g-bg2:#082814;
  --r:var(--red);--r2:var(--red2);--r-bg:#1a0508;
  --b:var(--blue);--b2:var(--blue2);--b-bg:#050f24;
  --gld:#e8a020;--gld-bg:#1a1000;
  --grad-tri:linear-gradient(135deg,#00c46a 0%,#3d87ff 50%,#ff3355 100%);
  --grad-gb:linear-gradient(135deg,#00c46a 0%,#3d87ff 100%);
  --grad-gr:linear-gradient(135deg,#00c46a 0%,#ff3355 100%);
  --grad-br:linear-gradient(135deg,#3d87ff 0%,#ff3355 100%);
  --grad-light:linear-gradient(135deg,rgba(0,196,106,.07) 0%,rgba(61,135,255,.06) 50%,rgba(255,51,85,.05) 100%);
  --sh:0 1px 3px rgba(0,0,0,.3),0 4px 16px rgba(0,0,0,.4);
  --sh2:0 4px 12px rgba(0,0,0,.4),0 16px 48px rgba(0,0,0,.5);
}
body.dark .nav{background:rgba(8,11,20,.92);border-bottom:1px solid rgba(61,135,255,.12);box-shadow:0 1px 0 rgba(61,135,255,.08),0 4px 24px rgba(0,0,0,.5)}
body.dark .auth{background:var(--grad-tri)}
body.dark .auth-card{background:rgba(17,21,37,.97);box-shadow:0 32px 80px rgba(0,0,0,.6)}
body.dark .lp-modal-card{background:rgba(17,21,37,.98)}
body.dark input,body.dark textarea,body.dark select{background:var(--bg)!important;color:var(--ink)!important;border-color:var(--border)!important}
body.dark .gcard-hd{background:linear-gradient(135deg,#071a10,#060e20)}
body.dark .br-col-hd.d16{background:linear-gradient(135deg,#1a1d30,#0d1022)}
body.dark .modal-box,body.dark .smodal{background:#111525;border-color:var(--border)}
body.dark .prizes-hero{background:var(--grad-tri)}
body.dark .chat-bubble{background:var(--bg)}

*{margin:0;padding:0;box-sizing:border-box}
body{
  background:var(--bg);color:var(--ink);
  font-family:"Plus Jakarta Sans",sans-serif;min-height:100vh;
  background-image:var(--grad-light);background-attachment:fixed;
}
::-webkit-scrollbar{width:4px;height:4px}
::-webkit-scrollbar-thumb{background:var(--border2);border-radius:2px}

/* GRADIENT TEXT UTILITY */
.grad-text{background:var(--grad-tri);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}

/* SKELETON LOADING — placeholders animados que reemplazan los "Cargando..." */
@keyframes skShimmer{from{background-position:-200% 0}to{background-position:200% 0}}
.sk{display:block;border-radius:8px;background:linear-gradient(90deg,var(--bg) 25%,var(--border) 50%,var(--bg) 75%);background-size:200% 100%;animation:skShimmer 1.4s linear infinite;height:14px;width:100%;margin:0}
body.dark .sk{background:linear-gradient(90deg,#13182a 25%,#1f2540 50%,#13182a 75%);background-size:200% 100%}
.sk.circle{border-radius:50%}
.sk.row{display:flex;gap:10px;align-items:center;background:none;animation:none;height:auto;padding:10px 12px;border-radius:12px;border:1px solid var(--border);background-color:var(--surface);margin-bottom:8px}
.sk.row .sk{margin:0}
.sk-stack{display:flex;flex-direction:column;gap:8px}

/* NAV */
.nav{
  height:62px;
  background:rgba(255,255,255,.88);
  backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);
  border-bottom:1px solid rgba(0,104,56,.1);
  display:flex;align-items:center;justify-content:space-between;padding:0 1.5rem;
  position:sticky;top:0;z-index:200;
  box-shadow:0 1px 0 rgba(0,104,56,.06),0 4px 24px rgba(10,14,26,.07);
}
.nav-logo{font-weight:800;font-size:1.2rem;letter-spacing:-.3px;display:flex;align-items:center;gap:10px;background:var(--grad-tri);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.nav-logo-badge{width:34px;height:34px;background:var(--grad-tri);border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:1rem;box-shadow:0 2px 10px rgba(0,104,56,.3);flex-shrink:0}
.nav-tabs{display:flex;gap:2px}
.ntab{padding:6px 14px;border-radius:20px;border:none;background:none;font-family:"Plus Jakarta Sans";font-size:.75rem;font-weight:600;text-transform:uppercase;letter-spacing:.5px;color:var(--ink3);cursor:pointer;transition:all .2s cubic-bezier(.22,1,.36,1)}
.ntab:hover{color:var(--ink);background:var(--border)}
.ntab.on{background:var(--grad-tri);color:#fff;box-shadow:0 3px 12px rgba(0,104,56,.3);transform:translateY(-1px)}
.nav-user{font-size:.8rem;color:var(--ink3);display:flex;align-items:center;gap:8px}

/* Notificaciones — bell button */
.bell-btn{position:relative;background:transparent;border:none;width:36px;height:36px;border-radius:10px;cursor:pointer;color:var(--ink2);display:flex;align-items:center;justify-content:center;transition:background .15s,color .15s;padding:0;font-family:inherit}
.bell-btn:hover{background:var(--bg);color:var(--ink)}
.bell-btn.has-new svg{animation:bellRing 2s ease-in-out 2}
@keyframes bellRing{0%,100%{transform:rotate(0)}10%,30%,50%{transform:rotate(-12deg)}20%,40%,60%{transform:rotate(12deg)}80%{transform:rotate(0)}}
.bell-badge{position:absolute;top:3px;right:3px;background:var(--r);color:#fff;font-size:.55rem;font-weight:800;min-width:16px;height:16px;border-radius:8px;display:flex;align-items:center;justify-content:center;padding:0 4px;border:2px solid var(--surface);line-height:1}
body.dark .bell-badge{border-color:var(--bg)}

.bell-panel{position:fixed;top:60px;right:14px;width:340px;max-width:calc(100vw - 28px);max-height:60vh;background:var(--surface);border:1px solid var(--border);border-radius:18px;box-shadow:0 24px 60px rgba(10,14,26,.18);z-index:200;overflow:hidden;display:flex;flex-direction:column;animation:bellIn .25s cubic-bezier(.22,1,.36,1) both}
@keyframes bellIn{from{opacity:0;transform:translateY(-8px) scale(.96)}to{opacity:1;transform:translateY(0) scale(1)}}
.bell-panel-h{display:flex;align-items:center;justify-content:space-between;padding:14px 16px 10px;font-weight:800;font-size:.95rem;color:var(--ink);border-bottom:1px solid var(--border)}
.bell-panel-clear{background:none;border:none;color:var(--blue2);font-size:.74rem;font-weight:700;cursor:pointer;font-family:inherit;padding:4px 8px;border-radius:6px}
.bell-panel-clear:hover{background:var(--bg)}
.bell-panel-body{flex:1;overflow-y:auto;padding:6px}
.bell-empty{padding:2.5rem 1rem;text-align:center;color:var(--ink3);font-size:.82rem}
.bell-item{display:flex;gap:10px;padding:10px 12px;border-radius:12px;cursor:pointer;transition:background .15s;align-items:flex-start}
.bell-item:hover{background:var(--bg)}
.bell-item.unread{background:linear-gradient(90deg,rgba(0,82,204,.06),transparent)}
.bell-item.unread::before{content:"";display:block;width:7px;height:7px;border-radius:50%;background:var(--blue2);margin:7px 0 0;flex-shrink:0}
.bell-item.read::before{content:"";display:block;width:7px;flex-shrink:0}
.bell-icon{width:32px;height:32px;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:1rem;flex-shrink:0}
.bell-text{flex:1;min-width:0;font-size:.82rem;line-height:1.45;color:var(--ink2)}
.bell-text strong{color:var(--ink);font-weight:800}
.bell-time{font-size:.66rem;color:var(--ink3);font-weight:600;margin-top:3px}
.nav-user b{color:var(--ink);font-weight:700}
.nav-out{background:none;border:none;color:var(--ink3);cursor:pointer;font-size:.72rem;text-decoration:underline}

/* ONBOARDING MODAL */
.onb-modal{position:fixed;inset:0;z-index:9500;display:flex;align-items:center;justify-content:center;padding:16px;animation:profIn .25s ease-out}
.onb-bg{position:absolute;inset:0;background:rgba(0,0,0,.6);backdrop-filter:blur(6px)}
.onb-card{position:relative;background:var(--surface);border-radius:24px;width:100%;max-width:420px;max-height:92vh;overflow:hidden;display:flex;flex-direction:column;box-shadow:0 32px 80px rgba(0,0,0,.4);animation:profCardIn .4s cubic-bezier(.22,1,.36,1) both}
body.dark .onb-card{background:#111525;border:1px solid var(--border)}
.onb-skip{position:absolute;top:14px;right:14px;background:none;border:none;color:var(--ink3);font-family:"Plus Jakarta Sans";font-size:.78rem;font-weight:700;cursor:pointer;padding:6px 12px;border-radius:8px;z-index:5}
.onb-skip:hover{background:var(--bg);color:var(--ink)}
.onb-body{flex:1;overflow-y:auto;padding:38px 28px 24px;min-height:380px;display:flex;flex-direction:column;justify-content:center}
.onb-slide{animation:onbSlideIn .45s cubic-bezier(.22,1,.36,1) both}
@keyframes onbSlideIn{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
.onb-illus{display:flex;align-items:center;justify-content:center;margin-bottom:24px;height:140px;position:relative}
.onb-emoji{font-size:5rem;animation:onbEmoji 3s ease-in-out infinite}
@keyframes onbEmoji{0%,100%{transform:translateY(0) rotate(0)}50%{transform:translateY(-8px) rotate(-5deg)}}
.onb-h{font-weight:800;font-size:1.5rem;text-align:center;color:var(--ink);margin:0 0 10px;letter-spacing:-.4px;line-height:1.15}
.onb-h .grad{background:var(--grad-tri);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.onb-p{text-align:center;font-size:.92rem;line-height:1.55;color:var(--ink2);margin:0 auto;max-width:320px;font-weight:500}

/* mini cards demo dentro del onboarding */
.onb-demo-card{background:var(--bg);border:1px solid var(--border);border-radius:14px;padding:14px;margin:18px auto 0;max-width:300px;display:flex;align-items:center;justify-content:space-between;gap:8px}
body.dark .onb-demo-card{background:#161a2e}
.onb-demo-team{display:flex;flex-direction:column;align-items:center;gap:4px;flex:1;text-align:center}
.onb-demo-flag{font-size:1.6rem;line-height:1}
.onb-demo-name{font-weight:800;font-size:.78rem;color:var(--ink)}
.onb-demo-score{display:flex;align-items:center;gap:6px}
.onb-demo-inp{width:30px;height:36px;background:var(--surface);border:1.5px solid var(--green2);border-radius:8px;display:flex;align-items:center;justify-content:center;color:var(--green);font-weight:800;font-size:1.1rem}
.onb-demo-dash{color:var(--ink3);font-weight:700}
.onb-demo-pulse{animation:onbPulse 2s ease-in-out infinite}
@keyframes onbPulse{0%,100%{box-shadow:0 0 0 0 rgba(0,196,106,.4)}50%{box-shadow:0 0 0 6px rgba(0,196,106,0)}}

.onb-demo-rank{background:var(--bg);border:1px solid var(--border);border-radius:14px;padding:10px;margin:18px auto 0;max-width:300px}
body.dark .onb-demo-rank{background:#161a2e}
.onb-rank-row{display:flex;align-items:center;gap:8px;padding:5px 4px;font-size:.78rem;border-bottom:1px solid var(--border)}
.onb-rank-row:last-child{border-bottom:none}
.onb-rank-row.me{background:linear-gradient(90deg,rgba(0,196,106,.12),transparent);border-radius:6px;border-bottom-color:transparent}
.onb-rank-pos{font-weight:800;color:var(--ink3);width:18px;text-align:center}
.onb-rank-row.first .onb-rank-pos{color:#d18800}
.onb-rank-name{flex:1;font-weight:700;color:var(--ink)}
.onb-rank-pts{font-weight:800;color:var(--green2)}

.onb-demo-feats{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:18px;max-width:300px;margin-left:auto;margin-right:auto}
.onb-feat{background:var(--bg);border:1px solid var(--border);border-radius:12px;padding:10px;text-align:center}
body.dark .onb-feat{background:#161a2e}
.onb-feat-i{font-size:1.5rem;margin-bottom:3px}
.onb-feat-t{font-weight:800;font-size:.7rem;color:var(--ink)}

.onb-foot{padding:18px 24px 24px;border-top:1px solid var(--border);display:flex;align-items:center;justify-content:space-between;gap:14px}
.onb-dots{display:flex;gap:7px}
.onb-dot{width:8px;height:8px;border-radius:50%;background:var(--border);transition:all .25s;cursor:pointer;border:none;padding:0}
.onb-dot.on{background:var(--grad-tri);width:26px;border-radius:4px}
.onb-next{background:var(--grad-tri);color:#fff;border:none;padding:11px 22px;border-radius:12px;font-family:"Plus Jakarta Sans";font-weight:800;font-size:.88rem;cursor:pointer;letter-spacing:.2px;box-shadow:0 6px 16px rgba(0,48,135,.25);transition:transform .15s}
.onb-next:hover{transform:translateY(-1px)}

@media (prefers-reduced-motion:reduce){
  .onb-emoji,.onb-demo-pulse{animation:none}
}

/* HOMEPAGE / DASHBOARD */
.hp-greeting{padding:24px 4px 10px;max-width:760px;margin:0 auto}
.hp-hi{font-size:.78rem;color:var(--ink3);font-weight:600;margin-bottom:4px;letter-spacing:.2px;animation:hpFade .6s cubic-bezier(.22,1,.36,1) both}
.hp-name{font-size:clamp(1.55rem,5.5vw,2rem);font-weight:800;letter-spacing:-.6px;line-height:1.1;color:var(--ink);animation:hpFadeUp .7s cubic-bezier(.22,1,.36,1) .12s both}
.hp-name .grad{background:var(--grad-tri);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
@keyframes hpFade{from{opacity:0}to{opacity:1}}
@keyframes hpFadeUp{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}

.hp-body{max-width:760px;margin:0 auto;padding:8px 4px 28px;display:flex;flex-direction:column;gap:14px}

.hp-anim{opacity:0;transform:translateY(20px);transition:opacity .65s cubic-bezier(.22,1,.36,1),transform .65s cubic-bezier(.22,1,.36,1)}
.hp-anim.show{opacity:1;transform:translateY(0)}
@media (prefers-reduced-motion:reduce){
  .hp-anim,.hp-hi,.hp-name{opacity:1;transform:none;transition:none;animation:none}
}

.hp-card{background:var(--surface);border:1px solid var(--border);border-radius:18px;padding:18px;position:relative;overflow:hidden;transition:transform .2s,box-shadow .2s,border-color .2s}
body.dark .hp-card{background:#161a2e}
.hp-card:hover{transform:translateY(-2px);box-shadow:0 12px 28px rgba(10,14,26,.08);border-color:var(--ink3)}

/* HERO FEAT CARD - posición */
.hp-feat{background:linear-gradient(135deg,#006838 0%,#003087 50%,#c0001a 100%);color:#fff;border:none;padding:24px 22px;cursor:default}
.hp-feat:hover{transform:none;box-shadow:0 16px 40px rgba(0,48,135,.25)}
.hp-feat-mesh{position:absolute;inset:0;pointer-events:none;overflow:hidden;border-radius:18px}
.hp-feat-mesh::before,.hp-feat-mesh::after{content:"";position:absolute;border-radius:50%;filter:blur(40px);will-change:transform}
.hp-feat-mesh::before{width:200px;height:200px;background:radial-gradient(circle,rgba(255,255,255,.28),transparent 65%);top:-60px;right:-60px;animation:hpMesh1 9s ease-in-out infinite alternate}
.hp-feat-mesh::after{width:160px;height:160px;background:radial-gradient(circle,rgba(255,255,255,.18),transparent 65%);bottom:-40px;left:-30px;animation:hpMesh2 11s ease-in-out infinite alternate-reverse}
@keyframes hpMesh1{from{transform:translate(0,0)}to{transform:translate(-40px,30px)}}
@keyframes hpMesh2{from{transform:translate(0,0)}to{transform:translate(40px,-20px)}}
.hp-feat-pts{position:absolute;top:22px;right:22px;text-align:right;font-size:.7rem;font-weight:700;opacity:.9;z-index:1;line-height:1.3}
.hp-feat-pts strong{display:block;font-size:1.5rem;font-weight:800;line-height:1;letter-spacing:-.5px}
.hp-feat-lbl{font-size:.62rem;font-weight:800;letter-spacing:1.5px;text-transform:uppercase;opacity:.85;margin-bottom:8px;position:relative;z-index:1}
.hp-feat-pos{font-size:clamp(2.8rem,11vw,3.6rem);font-weight:800;line-height:1;letter-spacing:-2px;position:relative;z-index:1;display:flex;align-items:baseline;gap:6px;margin-bottom:8px}
.hp-feat-pos sup{font-size:.4em;font-weight:700;opacity:.7;line-height:1}
.hp-feat-of{font-size:.82rem;font-weight:600;opacity:.92;position:relative;z-index:1}

/* Progreso */
.hp-prog-h{display:flex;align-items:center;justify-content:space-between;margin-bottom:10px}
.hp-prog-t{font-size:.82rem;font-weight:800;color:var(--ink);letter-spacing:.2px}
.hp-prog-pct{font-size:.82rem;font-weight:800;color:var(--green2);font-variant-numeric:tabular-nums}
.hp-prog-bar{height:8px;background:var(--bg);border-radius:6px;overflow:hidden;margin-bottom:6px;border:1px solid var(--border)}
body.dark .hp-prog-bar{background:#0c0f1c}
.hp-prog-fill{height:100%;background:linear-gradient(90deg,#006838,#003087,#c0001a);border-radius:6px;width:0;transition:width 1.4s cubic-bezier(.22,1,.36,1);box-shadow:0 0 12px rgba(0,196,106,.4)}
.hp-prog-sub{font-size:.74rem;color:var(--ink3);font-weight:600}

/* Section header */
.hp-h{font-size:.68rem;font-weight:800;color:var(--ink3);letter-spacing:1.5px;text-transform:uppercase;margin:6px 0 0;padding:0 4px}

/* Acciones rápidas */
.hp-actions{display:grid;grid-template-columns:1fr 1fr;gap:10px}
.hp-act{background:var(--surface);border:1px solid var(--border);border-radius:14px;padding:14px;cursor:pointer;display:flex;align-items:center;gap:10px;transition:transform .15s,box-shadow .2s,border-color .2s;font-family:"Plus Jakarta Sans";text-align:left;width:100%}
body.dark .hp-act{background:#161a2e}
.hp-act:hover{transform:translateY(-2px);box-shadow:0 8px 20px rgba(10,14,26,.07);border-color:var(--ink3)}
.hp-act:active{transform:translateY(0)}
.hp-act-icon{width:38px;height:38px;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:1.1rem;flex-shrink:0;font-weight:800}
.hp-act-text{flex:1;min-width:0}
.hp-act-t{font-weight:800;font-size:.82rem;color:var(--ink);line-height:1.2}
.hp-act-s{font-size:.68rem;color:var(--ink3);font-weight:600;margin-top:2px}

/* Actividad reciente */
.hp-act-row{display:flex;align-items:center;gap:10px;padding:10px 0;border-bottom:1px solid var(--border)}
.hp-act-row:last-child{border-bottom:none}
.hp-act-av{width:30px;height:30px;border-radius:50%;color:#fff;font-size:.66rem;font-weight:800;display:flex;align-items:center;justify-content:center;flex-shrink:0}
.hp-act-msg{font-size:.78rem;color:var(--ink2);flex:1;min-width:0;line-height:1.45}
.hp-act-msg strong{color:var(--ink);font-weight:800}
.hp-act-time{font-size:.66rem;color:var(--ink3);font-weight:600;margin-top:2px}
.hp-act-empty{padding:1.4rem 1rem;text-align:center;color:var(--ink3);font-size:.82rem}

.hp-card-foot{margin-top:10px;padding-top:12px;border-top:1px solid var(--border);text-align:center;font-size:.74rem;font-weight:800;color:var(--blue2);cursor:pointer;letter-spacing:.2px;transition:color .15s}
.hp-card-foot:hover{color:var(--green2)}

@media (max-width:480px){
  .hp-greeting{padding:18px 4px 8px}
  .hp-actions{grid-template-columns:1fr 1fr;gap:8px}
  .hp-act{padding:12px}
  .hp-act-icon{width:34px;height:34px;font-size:1rem}
}

/* PROFILE / COMPARE MODAL */
.prof-modal{position:fixed;inset:0;z-index:9000;display:flex;align-items:center;justify-content:center;padding:16px;animation:profIn .22s ease-out}
@keyframes profIn{from{opacity:0}to{opacity:1}}
.prof-bg{position:absolute;inset:0;background:rgba(0,0,0,.55);backdrop-filter:blur(5px)}
.prof-card{position:relative;background:var(--surface);border-radius:24px;width:100%;max-width:440px;max-height:90vh;overflow-y:auto;box-shadow:0 32px 80px rgba(0,0,0,.4);animation:profCardIn .35s cubic-bezier(.22,1,.36,1) both}
.prof-card-wide{max-width:720px}
@keyframes profCardIn{from{opacity:0;transform:translateY(20px) scale(.96)}to{opacity:1;transform:translateY(0) scale(1)}}
body.dark .prof-card{background:#111525;border:1px solid var(--border)}
.prof-close{position:absolute;top:14px;right:14px;background:var(--bg);border:none;border-radius:50%;width:32px;height:32px;cursor:pointer;color:var(--ink2);font-size:1rem;font-weight:600;display:flex;align-items:center;justify-content:center;z-index:5}
.prof-close:hover{background:var(--border);color:var(--ink)}

/* Profile content */
.prof-hero{position:relative;padding:32px 24px 24px;background:var(--grad-tri);color:#fff;border-radius:24px 24px 0 0;overflow:hidden;text-align:center}
.prof-hero::before{content:"";position:absolute;inset:0;background:radial-gradient(ellipse at 30% 120%,rgba(255,255,255,.18),transparent 55%),radial-gradient(ellipse at 80% -20%,rgba(255,255,255,.12),transparent 55%);pointer-events:none}
.prof-avatar{width:72px;height:72px;border-radius:50%;background:rgba(255,255,255,.95);color:#0a0e1a;font-weight:800;font-size:1.6rem;display:flex;align-items:center;justify-content:center;margin:0 auto 12px;box-shadow:0 8px 24px rgba(0,0,0,.18);position:relative;z-index:1}
.prof-uname{font-weight:800;font-size:1.5rem;margin:0 0 4px;letter-spacing:-.4px;position:relative;z-index:1}
.prof-uname-me{display:inline-block;background:rgba(255,255,255,.22);font-size:.6rem;font-weight:800;padding:3px 10px;border-radius:10px;margin-left:8px;vertical-align:middle;letter-spacing:.5px;text-transform:uppercase}
.prof-position{font-size:.85rem;font-weight:700;opacity:.95;position:relative;z-index:1}
.prof-position-trophy{font-size:1.2rem;margin-right:6px}

.prof-body{padding:22px 22px 24px}
.prof-stats-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:22px}
.prof-stat{background:var(--bg);border:1px solid var(--border);border-radius:14px;padding:14px}
body.dark .prof-stat{background:#161a2e}
.prof-stat-lbl{font-size:.66rem;font-weight:800;color:var(--ink3);letter-spacing:1.2px;text-transform:uppercase;margin-bottom:6px}
.prof-stat-val{font-weight:800;font-size:1.5rem;color:var(--ink);letter-spacing:-.5px;line-height:1.1;display:flex;align-items:baseline;gap:5px}
.prof-stat-val small{font-size:.7rem;font-weight:700;color:var(--ink3);letter-spacing:0}
.prof-stat-val .icon{font-size:1.2rem;margin-right:4px}

.prof-section-h{font-size:.7rem;font-weight:800;color:var(--ink3);letter-spacing:1.2px;text-transform:uppercase;margin:18px 0 8px}
.prof-breakdown{display:flex;gap:8px;margin-bottom:16px}
.prof-bd-item{flex:1;background:var(--bg);border:1px solid var(--border);border-radius:14px;padding:12px;text-align:center}
body.dark .prof-bd-item{background:#161a2e}
.prof-bd-icon{font-size:1.4rem;margin-bottom:4px}
.prof-bd-pts{font-weight:800;font-size:1.3rem;color:var(--ink);line-height:1}
.prof-bd-lbl{font-size:.7rem;color:var(--ink3);font-weight:700;margin-top:3px}

.prof-cta{display:flex;gap:8px;margin-top:8px}
.prof-btn{flex:1;background:var(--ink);color:var(--surface);border:none;padding:13px;border-radius:12px;font-family:"Plus Jakarta Sans";font-weight:800;font-size:.88rem;cursor:pointer;letter-spacing:.2px;transition:transform .15s,opacity .2s}
.prof-btn:hover{transform:translateY(-1px);opacity:.92}
body.dark .prof-btn{background:var(--surface);color:var(--ink)}
.prof-btn-vs{background:var(--grad-tri);color:#fff;box-shadow:0 8px 22px rgba(0,48,135,.28)}
body.dark .prof-btn-vs{background:var(--grad-tri);color:#fff}

/* Compare layout */
.cmp-head{padding:24px 22px 18px;border-bottom:1px solid var(--border);text-align:center}
.cmp-vs-row{display:grid;grid-template-columns:1fr auto 1fr;gap:14px;align-items:center;margin-top:14px}
.cmp-side{text-align:center}
.cmp-side-av{width:60px;height:60px;border-radius:50%;color:#fff;font-weight:800;font-size:1.3rem;display:flex;align-items:center;justify-content:center;margin:0 auto 8px;box-shadow:0 6px 18px rgba(0,0,0,.15)}
.cmp-side-av.a{background:linear-gradient(135deg,#006838,#003087)}
.cmp-side-av.b{background:linear-gradient(135deg,#003087,#c0001a)}
.cmp-side-name{font-weight:800;font-size:.95rem;color:var(--ink);word-break:break-word;line-height:1.2}
.cmp-side-pos{font-size:.72rem;color:var(--ink3);font-weight:700;margin-top:3px}
.cmp-vs{font-weight:800;font-size:1.4rem;color:var(--ink3);letter-spacing:1px}
.cmp-body{padding:18px 22px 22px}
.cmp-row{display:grid;grid-template-columns:1fr auto 1fr;gap:12px;align-items:center;padding:12px 0;border-bottom:1px solid var(--border)}
.cmp-row:last-child{border-bottom:none}
.cmp-val{text-align:center;font-weight:800;font-size:1.15rem;color:var(--ink);transition:color .2s}
.cmp-val.win{color:var(--green);font-size:1.25rem}
.cmp-val.lose{color:var(--ink3);opacity:.6}
.cmp-val.tie{color:var(--blue2)}
.cmp-lbl{text-align:center;font-size:.66rem;font-weight:800;color:var(--ink3);letter-spacing:1px;text-transform:uppercase;line-height:1.3}
.cmp-icon{font-size:1.05rem;margin-bottom:2px;display:block}
.cmp-summary{margin-top:18px;padding:14px 16px;background:var(--bg);border-radius:12px;text-align:center;font-size:.85rem;font-weight:600;color:var(--ink2);line-height:1.5}
body.dark .cmp-summary{background:#161a2e}
.cmp-summary strong{color:var(--green);font-weight:800}

@media (max-width:480px){
  .prof-hero{padding:24px 18px 18px}
  .prof-avatar{width:60px;height:60px;font-size:1.3rem}
  .prof-uname{font-size:1.25rem}
  .prof-body{padding:18px 16px 20px}
  .prof-stats-grid{grid-template-columns:1fr 1fr;gap:8px}
  .prof-stat{padding:12px}
  .prof-stat-val{font-size:1.3rem}
  .cmp-side-av{width:48px;height:48px;font-size:1.05rem}
  .cmp-side-name{font-size:.82rem}
  .cmp-vs{font-size:1.1rem}
  .cmp-val{font-size:1rem}
  .cmp-val.win{font-size:1.1rem}
  .cmp-body{padding:14px 16px 18px}
}

/* DARK TOGGLE */
.dark-toggle{background:var(--border);border:1px solid var(--border2);border-radius:20px;color:var(--ink2);cursor:pointer;font-size:.75rem;padding:4px 10px;transition:all .2s;display:flex;align-items:center;gap:5px;font-weight:600}
.dark-toggle:hover{background:var(--border2)}

/* CODE BADGE */
.code-badge{display:inline-flex;align-items:center;gap:5px;background:var(--grad-gb);border-radius:8px;padding:4px 10px;font-weight:800;font-size:.75rem;color:#fff;letter-spacing:1.5px;cursor:pointer;transition:opacity .15s;box-shadow:0 2px 8px rgba(0,104,56,.2)}
.code-badge:hover{opacity:.88}
.code-badge .cb-label{font-size:.58rem;font-weight:500;opacity:.8;letter-spacing:.3px}

/* AUTH (LANDING PÚBLICO) */
#auth{min-height:100vh;background:var(--bg);position:relative;overflow-x:hidden;display:block;padding:0}
#auth::before,#auth::after{content:none}

/* Header sticky */
.lp-header{position:sticky;top:0;z-index:50;background:rgba(255,255,255,.85);backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);border-bottom:1px solid var(--border)}
body.dark .lp-header{background:rgba(8,11,20,.85)}
.lp-header-inner{max-width:1080px;margin:0 auto;padding:.75rem 1.25rem;display:flex;align-items:center;justify-content:space-between;gap:1rem}
.lp-brand{display:flex;align-items:center;gap:10px}
.lp-brand-name{font-weight:800;font-size:.95rem;color:var(--ink);letter-spacing:.2px;line-height:1.1}
.lp-brand-sub{font-size:.65rem;color:var(--ink3);font-weight:600;letter-spacing:.3px}
.lp-header-cta{background:var(--ink);color:var(--surface);border:none;padding:9px 18px;border-radius:10px;font-family:"Plus Jakarta Sans";font-weight:700;font-size:.8rem;cursor:pointer;transition:transform .15s,opacity .2s}
.lp-header-cta:hover{transform:translateY(-1px);opacity:.9}
body.dark .lp-header-cta{background:var(--surface);color:var(--ink)}

/* HERO */
.lp-hero{position:relative;padding:3rem 1.25rem 3.5rem;overflow:hidden}
.lp-hero-bg{position:absolute;inset:0;z-index:0;overflow:hidden;background:linear-gradient(180deg,rgba(0,104,56,.05) 0%,rgba(0,48,135,.05) 50%,rgba(192,0,26,.05) 100%)}
.lp-hero-bg::before{content:"";position:absolute;width:520px;height:520px;background:radial-gradient(circle,rgba(0,196,106,.45),transparent 65%);top:-160px;left:-160px;filter:blur(70px);animation:lpMesh1 18s ease-in-out infinite alternate;will-change:transform}
.lp-hero-bg::after{content:"";position:absolute;width:480px;height:480px;background:radial-gradient(circle,rgba(61,135,255,.42),transparent 65%);bottom:-140px;right:-140px;filter:blur(70px);animation:lpMesh2 22s ease-in-out infinite alternate-reverse;will-change:transform}
.lp-mesh{position:absolute;inset:0;pointer-events:none;z-index:0}
.lp-mesh-orb{position:absolute;border-radius:50%;filter:blur(70px);opacity:.55;will-change:transform}
.lp-mesh-orb.m1{width:380px;height:380px;background:radial-gradient(circle,rgba(255,51,85,.55),transparent 65%);top:30%;left:35%;animation:lpMesh3 26s ease-in-out infinite alternate}
.lp-mesh-orb.m2{width:300px;height:300px;background:radial-gradient(circle,rgba(125,75,255,.4),transparent 65%);top:55%;left:10%;animation:lpMesh4 30s ease-in-out infinite alternate-reverse}
.lp-mesh-orb.m3{width:240px;height:240px;background:radial-gradient(circle,rgba(255,180,0,.35),transparent 65%);top:5%;right:25%;animation:lpMesh5 24s ease-in-out infinite alternate}
@keyframes lpMesh1{0%{transform:translate(0,0) scale(1)}100%{transform:translate(80px,60px) scale(1.15)}}
@keyframes lpMesh2{0%{transform:translate(0,0) scale(1)}100%{transform:translate(-70px,-50px) scale(1.18)}}
@keyframes lpMesh3{0%{transform:translate(0,0) scale(1) rotate(0)}100%{transform:translate(-50px,40px) scale(1.2) rotate(60deg)}}
@keyframes lpMesh4{0%{transform:translate(0,0) scale(1)}100%{transform:translate(70px,-40px) scale(1.1)}}
@keyframes lpMesh5{0%{transform:translate(0,0) scale(1)}100%{transform:translate(-40px,30px) scale(1.25)}}
.lp-grain{position:absolute;inset:0;pointer-events:none;z-index:0;opacity:.18;mix-blend-mode:overlay;background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='.7'/></svg>")}
body.dark .lp-grain{opacity:.08}
body.dark .lp-mesh-orb{opacity:.35}
.lp-hero-inner{position:relative;z-index:1;max-width:1080px;margin:0 auto}
.lp-hero-grid{display:grid;grid-template-columns:1fr;gap:32px;align-items:center}
.lp-hero-text{text-align:center}
@media (min-width:880px){
  .lp-hero{padding:4rem 1.5rem 4rem}
  .lp-hero-grid{grid-template-columns:1.05fr .95fr;gap:48px}
  .lp-hero-text{text-align:left}
  .lp-hero-text .lp-hero-stats{justify-content:flex-start}
  .lp-hero-text .lp-hero-ctas{justify-content:flex-start}
  .lp-hero-text .lp-countdown{margin-left:0}
}
.lp-pill{display:inline-flex;align-items:center;gap:7px;background:rgba(255,255,255,.85);border:1px solid rgba(0,0,0,.08);color:var(--ink);font-size:.66rem;font-weight:800;letter-spacing:1.4px;padding:6px 14px;border-radius:24px;text-transform:uppercase;margin-bottom:18px}
body.dark .lp-pill{background:rgba(17,21,37,.85);border-color:rgba(255,255,255,.1)}
.lp-pill.lp-pill-live{}
.lp-pill-dot{width:7px;height:7px;border-radius:50%;background:#c0001a;animation:lpLive 1.5s ease-in-out infinite;flex-shrink:0}
@keyframes lpLive{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.4;transform:scale(.8)}}
.lp-hero-title{font-size:clamp(2rem,7vw,3.1rem);font-weight:800;line-height:1.05;margin:0 0 14px;letter-spacing:-1.2px;color:var(--ink)}
.lp-grad-text{background:var(--grad-tri);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.lp-hero-sub{font-size:clamp(.95rem,3.5vw,1.02rem);color:var(--ink2);margin:0 0 24px;max-width:480px;line-height:1.6;font-weight:500}
.lp-hero-text .lp-hero-sub{margin-left:auto;margin-right:auto}
@media (min-width:880px){.lp-hero-text .lp-hero-sub{margin-left:0}}

/* Countdown en landing */
.lp-countdown{margin:0 auto 24px;max-width:520px}
.lp-cd-card{background:var(--grad-tri);border-radius:20px;padding:1.1rem 1rem 1rem;position:relative;overflow:hidden;box-shadow:0 12px 32px rgba(0,0,0,.18)}
.lp-cd-card::before{content:"";position:absolute;inset:0;background:radial-gradient(ellipse at 20% 120%,rgba(255,255,255,.18),transparent 55%),radial-gradient(ellipse at 80% -20%,rgba(255,255,255,.1),transparent 55%);pointer-events:none}
.lp-cd-label{font-size:.58rem;font-weight:800;letter-spacing:2.4px;color:#fff;opacity:.85;text-transform:uppercase;text-align:center;margin-bottom:12px;position:relative;z-index:1}
.lp-cd-grid{display:flex;align-items:flex-start;justify-content:center;gap:.4rem;position:relative;z-index:1}
.lp-cd-block{background:rgba(255,255,255,.14);backdrop-filter:blur(8px);border:1px solid rgba(255,255,255,.22);border-radius:11px;padding:.6rem .4rem;text-align:center;flex:1;min-width:46px}
.lp-cd-num{font-family:"Plus Jakarta Sans",sans-serif;font-weight:800;font-size:clamp(1.5rem,5.5vw,2.1rem);line-height:1;color:#fff;letter-spacing:-1px}
.lp-cd-num.tick{animation:cdTick .2s ease-out}
.lp-cd-sublbl{font-size:.48rem;font-weight:800;letter-spacing:1.2px;text-transform:uppercase;opacity:.78;color:#fff;margin-top:6px}
.lp-cd-sep{font-size:1.3rem;font-weight:800;color:rgba(255,255,255,.5);align-self:center;animation:cdPulse 1s ease-in-out infinite;padding:0 1px}

.lp-hero-ctas{display:flex;gap:10px;justify-content:center;flex-wrap:wrap;margin-bottom:24px}
.lp-btn-primary{background:var(--grad-tri);color:#fff;border:none;padding:13px 26px;border-radius:12px;font-family:"Plus Jakarta Sans";font-weight:800;font-size:.95rem;cursor:pointer;letter-spacing:.3px;box-shadow:0 8px 24px rgba(0,48,135,.28);transition:transform .15s,box-shadow .2s}
.lp-btn-primary:hover{transform:translateY(-2px);box-shadow:0 12px 32px rgba(0,48,135,.35)}
.lp-btn-primary:active{transform:translateY(0)}
.lp-btn-ghost{background:var(--surface);color:var(--ink);border:1.5px solid var(--border);padding:13px 26px;border-radius:12px;font-family:"Plus Jakarta Sans";font-weight:700;font-size:.95rem;cursor:pointer;transition:border-color .15s,transform .15s}
.lp-btn-ghost:hover{border-color:var(--ink);transform:translateY(-1px)}

.lp-hero-stats{display:flex;gap:28px;justify-content:center;flex-wrap:wrap}
.lp-stat-num{font-weight:800;color:var(--ink);font-size:1.45rem;line-height:1}
.lp-stat-lbl{font-size:.7rem;color:var(--ink3);font-weight:600;margin-top:4px;letter-spacing:.2px}

/* Hero phone preview */
.lp-hero-preview{position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center}
.lp-phone{width:220px;height:400px;background:#0a0e1a;border-radius:32px;padding:9px;box-shadow:0 24px 60px rgba(0,0,0,.28),0 8px 20px rgba(0,0,0,.12);position:relative;animation:lpPhoneFloat 5s ease-in-out infinite}
@keyframes lpPhoneFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}
.lp-phone-screen{width:100%;height:100%;background:var(--bg);border-radius:24px;overflow:hidden;display:flex;flex-direction:column;position:relative}
.lp-phone-top{background:var(--surface);padding:9px 12px;border-bottom:1px solid var(--border);font-size:.65rem;font-weight:800;color:var(--ink);display:flex;align-items:center;justify-content:space-between;flex-shrink:0}
.lp-phone-live{color:var(--r);font-weight:700;font-size:.55rem}
.lp-phone-body{flex:1;padding:9px;overflow:hidden;position:relative}
.lp-view{position:absolute;inset:9px;display:flex;flex-direction:column;gap:6px;opacity:0;transition:opacity .5s ease;pointer-events:none}
.lp-view.on{opacity:1}

/* preview - ranking rows */
.lp-pv-row{background:var(--surface);border-radius:9px;padding:6px 8px;font-size:.62rem;display:flex;align-items:center;gap:6px;border:1px solid var(--border)}
.lp-pv-row.first{background:linear-gradient(90deg,rgba(255,180,0,.15),var(--surface))}
.lp-pv-row.first .lp-pv-rank{color:#d18800}
.lp-pv-row.me{border-color:var(--green2);background:rgba(0,196,106,.08)}
.lp-pv-rank{font-weight:800;color:var(--ink3);width:14px}
.lp-pv-avatar{width:18px;height:18px;border-radius:50%;background:#003087;color:#fff;font-size:.55rem;font-weight:800;display:flex;align-items:center;justify-content:center;flex-shrink:0}
.lp-pv-name{flex:1;font-weight:700;color:var(--ink);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.lp-pv-pts{font-weight:800;color:var(--green2)}

/* preview - muro */
.lp-mw-post{background:var(--surface);border-radius:10px;padding:8px;border:1px solid var(--border)}
.lp-mw-head{display:flex;align-items:center;gap:6px;margin-bottom:5px;font-size:.6rem}
.lp-mw-avatar{width:18px;height:18px;border-radius:50%;background:#003087;color:#fff;font-size:.55rem;font-weight:800;display:flex;align-items:center;justify-content:center}
.lp-mw-name{font-weight:800;color:var(--ink)}
.lp-mw-time{color:var(--ink3);font-weight:600;margin-left:auto;font-size:.55rem}
.lp-mw-text{font-size:.6rem;line-height:1.35;color:var(--ink2);margin-bottom:5px}
.lp-mw-react{display:inline-block;background:var(--bg);padding:2px 6px;border-radius:8px;font-size:.6rem;font-weight:700;margin-right:3px;color:var(--ink)}

/* preview - predicciones */
.lp-pred-h{font-size:.58rem;font-weight:800;color:var(--ink3);letter-spacing:1px;text-transform:uppercase;margin-bottom:4px;text-align:center}
.lp-pred{background:var(--surface);border-radius:10px;padding:8px;border:1px solid var(--border);display:flex;align-items:center;justify-content:space-between;gap:6px}
.lp-pred-team{flex:1;text-align:center;font-size:.58rem;font-weight:800;color:var(--ink)}
.lp-pred-flag{font-size:1.1rem;display:block;margin-bottom:3px}
.lp-pred-score{display:flex;align-items:center;gap:4px}
.lp-pred-input{width:18px;height:22px;background:var(--bg);border-radius:5px;display:flex;align-items:center;justify-content:center;color:var(--green2);font-weight:800;border:1px solid var(--border);font-size:.7rem}
.lp-pred-dash{color:var(--ink3)}

/* preview - grupos (detallado) */
.lp-gr-tabs{display:flex;gap:3px}
.lp-gr-tab{flex:1;background:var(--surface);border:1px solid var(--border);color:var(--ink3);font-size:.6rem;font-weight:800;padding:4px 0;border-radius:6px;text-align:center}
.lp-gr-tab.on{background:var(--ink);color:var(--surface);border-color:var(--ink)}
body.dark .lp-gr-tab.on{background:var(--surface);color:var(--ink);border-color:var(--surface)}
.lp-gr-card{background:var(--surface);border-radius:10px;padding:8px;border:1px solid var(--border)}
.lp-gr-h2{display:flex;justify-content:space-between;align-items:center;margin-bottom:5px}
.lp-gr-h2-t{font-size:.7rem;font-weight:800;color:var(--ink)}
.lp-gr-h2-i{font-size:.55rem;color:var(--ink3);font-weight:600}
.lp-gr-cols{display:grid;grid-template-columns:14px 1fr 20px 20px 20px 24px;gap:4px;font-size:.5rem;font-weight:800;color:var(--ink3);letter-spacing:.5px;text-transform:uppercase;padding:0 2px;margin-bottom:3px}
.lp-gr-r{display:grid;grid-template-columns:14px 1fr 20px 20px 20px 24px;gap:4px;align-items:center;padding:3px 2px;font-size:.62rem;border-top:1px solid var(--bg)}
.lp-gr-r.qual{background:linear-gradient(90deg,rgba(0,196,106,.12),transparent);border-radius:4px;border-top-color:transparent}
.lp-gr-p{font-weight:800;color:var(--ink3);text-align:center;font-size:.58rem}
.lp-gr-r.qual .lp-gr-p{color:var(--green2)}
.lp-gr-t{display:flex;align-items:center;gap:4px;font-weight:700;color:var(--ink);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.lp-gr-f{font-size:.85rem;flex-shrink:0}
.lp-gr-n{text-align:center;color:var(--ink2);font-weight:700;font-size:.6rem}
.lp-gr-pp{text-align:center;font-weight:800;color:var(--green2);font-size:.62rem}
.lp-gr-vs{display:flex;align-items:center;justify-content:space-between;font-size:.62rem;font-weight:700;color:var(--ink);padding:2px 0}
.lp-gr-vs-t{display:flex;align-items:center;gap:4px}
.lp-gr-vs-x{color:var(--ink3);font-size:.55rem;font-weight:800}

/* preview - bracket (detallado) */
.lp-br-tabs{display:flex;gap:3px}
.lp-br-tab{flex:1;background:var(--surface);border:1px solid var(--border);color:var(--ink3);font-size:.55rem;font-weight:800;padding:4px 0;border-radius:6px;text-align:center;letter-spacing:.3px}
.lp-br-tab.on{background:var(--ink);color:var(--surface);border-color:var(--ink)}
body.dark .lp-br-tab.on{background:var(--surface);color:var(--ink);border-color:var(--surface)}
.lp-br-stage{font-size:.5rem;font-weight:800;color:var(--ink3);letter-spacing:1px;text-transform:uppercase;padding:0 2px}
.lp-br-match{background:var(--surface);border-radius:9px;padding:5px 7px;border:1px solid var(--border);display:flex;flex-direction:column;gap:1px}
.lp-br-match.live{border-color:var(--r);background:linear-gradient(90deg,rgba(192,0,26,.05),var(--surface))}
.lp-br-match.next{border-style:dashed;background:var(--bg)}
.lp-br-match.next .lp-br-tr{color:var(--ink3);font-weight:600;font-style:italic}
.lp-br-tr{display:flex;align-items:center;justify-content:space-between;font-size:.62rem;color:var(--ink2)}
.lp-br-tr.win{font-weight:800;color:var(--green2)}
.lp-br-tr.lose{color:var(--ink3);text-decoration:line-through;text-decoration-thickness:1px}
.lp-br-tn{display:flex;align-items:center;gap:4px}
.lp-br-tf{font-size:.9rem}
.lp-br-ts{font-weight:800;width:18px;text-align:center;font-size:.7rem}
.lp-br-time{font-size:.5rem;color:var(--ink3);font-weight:700;letter-spacing:.5px;margin-top:2px;display:flex;align-items:center;gap:3px}
.lp-br-livedot{width:4px;height:4px;border-radius:50%;background:var(--r);animation:lpLive 1.4s ease-in-out infinite}

/* phone tabs (debajo del teléfono) */
.lp-phone-tabs{display:flex;justify-content:center;gap:5px;flex-wrap:wrap;margin-top:18px;max-width:280px}
.lp-pt{background:var(--surface);border:1px solid var(--border);color:var(--ink3);padding:5px 11px;border-radius:14px;font-family:"Plus Jakarta Sans";font-size:.66rem;font-weight:700;cursor:pointer;transition:all .25s}
.lp-pt:hover{border-color:var(--ink2);color:var(--ink)}
.lp-pt.on{background:var(--ink);color:var(--surface);border-color:var(--ink)}
body.dark .lp-pt.on{background:var(--surface);color:var(--ink);border-color:var(--surface)}

/* Marquee de banderas */
.lp-marquee{background:var(--surface);padding:14px 0;border-top:1px solid var(--border);border-bottom:1px solid var(--border);overflow:hidden;position:relative}
.lp-marquee::before,.lp-marquee::after{content:"";position:absolute;top:0;bottom:0;width:60px;z-index:2;pointer-events:none}
.lp-marquee::before{left:0;background:linear-gradient(90deg,var(--surface),transparent)}
.lp-marquee::after{right:0;background:linear-gradient(-90deg,var(--surface),transparent)}
.lp-mq-track{display:flex;gap:24px;animation:mqScroll 40s linear infinite;width:max-content;align-items:center;padding:0 12px}
@keyframes mqScroll{from{transform:translateX(0)}to{transform:translateX(-50%)}}
.lp-mq-flag{font-size:1.7rem;line-height:1;flex-shrink:0}

/* Sections */
.lp-section{padding:3.5rem 1.25rem;max-width:680px;margin:0 auto}
.lp-features{background:var(--surface)}
body.dark .lp-features{background:var(--bg)}
.lp-section-head{text-align:center;margin-bottom:28px}
.lp-eyebrow{font-size:.68rem;font-weight:800;letter-spacing:1.5px;text-transform:uppercase;margin-bottom:8px}
.lp-eyebrow-g{color:var(--green2)}
.lp-eyebrow-b{color:var(--blue2)}
.lp-section-title{font-size:clamp(1.55rem,5vw,1.9rem);font-weight:800;margin:0;letter-spacing:-.5px;color:var(--ink)}

/* Features (carrusel) */
.crsl-wrap{position:relative;max-width:560px;margin:0 auto}
.crsl-track{position:relative;min-height:340px}
.crsl-card{padding:28px 24px 24px;background:var(--surface);border:1px solid var(--border);border-radius:24px;box-sizing:border-box;display:flex;flex-direction:column;align-items:flex-start;text-align:left;transition:opacity .5s ease,transform .5s ease;position:absolute;inset:0;overflow:hidden}
body.dark .crsl-card{background:var(--bg)}
.crsl-card::before{content:"";position:absolute;top:-40px;right:-40px;width:180px;height:180px;border-radius:50%;opacity:.10;pointer-events:none}
body.dark .crsl-card::before{opacity:.18}
.crsl-card.tone-g::before{background:#006838}
.crsl-card.tone-b::before{background:#003087}
.crsl-card.tone-y::before{background:#d18800}
.crsl-card.tone-r::before{background:#c0001a}
.crsl-card.tone-p::before{background:#5a2da3}
.crsl-card.active{position:relative;opacity:1;transform:translateX(0)}
.crsl-card.prev{opacity:0;transform:translateX(-30px);pointer-events:none}
.crsl-card.next{opacity:0;transform:translateX(30px);pointer-events:none}
.crsl-top{display:flex;align-items:center;justify-content:space-between;width:100%;margin-bottom:20px;position:relative;z-index:1;gap:10px;flex-wrap:wrap}
.crsl-num{font-size:.78rem;font-weight:800;color:var(--ink3);letter-spacing:1.5px;font-variant-numeric:tabular-nums}
.crsl-num strong{color:var(--ink);font-size:1.05rem}
.crsl-tag{display:inline-block;font-size:.62rem;font-weight:800;letter-spacing:1.5px;text-transform:uppercase;padding:5px 11px;border-radius:6px}
.crsl-icon{width:60px;height:60px;border-radius:18px;display:flex;align-items:center;justify-content:center;font-size:30px;margin-bottom:16px;position:relative;z-index:1;box-shadow:0 8px 20px rgba(0,0,0,.06)}
body.dark .crsl-icon{filter:saturate(.9) brightness(1.05);box-shadow:0 8px 20px rgba(0,0,0,.3)}
.crsl-h{font-weight:800;font-size:clamp(1.4rem,5.5vw,1.7rem);margin:0 0 12px;line-height:1.1;letter-spacing:-.6px;position:relative;z-index:1;color:var(--ink);max-width:95%}
.crsl-accent{background:var(--grad-tri);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.crsl-d{font-size:.92rem;color:var(--ink2);line-height:1.6;max-width:96%;font-weight:500;position:relative;z-index:1;letter-spacing:-.1px;margin:0}
.crsl-foot{display:flex;align-items:center;gap:8px;margin-top:16px;position:relative;z-index:1;font-size:.75rem;font-weight:700}
.crsl-foot-dot{width:6px;height:6px;border-radius:50%;background:currentColor;flex-shrink:0}
.crsl-nav{display:flex;align-items:center;justify-content:center;gap:14px;margin-top:16px}
.crsl-arrow{background:var(--surface);border:1px solid var(--border);width:40px;height:40px;border-radius:50%;cursor:pointer;font-size:1.1rem;color:var(--ink);display:flex;align-items:center;justify-content:center;transition:transform .15s,border-color .15s;font-weight:700;line-height:1;font-family:inherit;padding:0}
.crsl-arrow:hover{transform:scale(1.05);border-color:var(--ink)}
.crsl-arrow:active{transform:scale(.95)}
.crsl-dots{display:flex;gap:8px}
.crsl-dot{width:7px;height:7px;border-radius:50%;background:var(--border);border:none;cursor:pointer;padding:0;transition:all .25s}
.crsl-dot.active{background:var(--grad-tri);width:24px;border-radius:4px}

/* Cómo funciona — pasos animados */
.pasos-track{position:relative;max-width:560px;margin:0 auto}
.pasos-line{position:absolute;left:22px;top:46px;bottom:46px;width:3px;background:var(--border);border-radius:2px;overflow:hidden}
.pasos-line-fill{position:absolute;left:0;right:0;top:0;background:linear-gradient(180deg,#006838 0%,#003087 50%,#c0001a 100%);height:0%;transition:height 1.6s cubic-bezier(.22,1,.36,1);border-radius:2px}
.paso{display:flex;gap:16px;align-items:flex-start;margin-bottom:20px;position:relative;opacity:0;transform:translateX(-28px);transition:opacity .65s cubic-bezier(.22,1,.36,1),transform .65s cubic-bezier(.22,1,.36,1)}
.paso.show{opacity:1;transform:translateX(0)}
.paso:last-child{margin-bottom:0}
.paso-num{min-width:46px;height:46px;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:800;font-size:1.15rem;flex-shrink:0;box-shadow:0 6px 16px rgba(0,0,0,.18);position:relative;z-index:2;background:#0a0e1a}
.paso.show .paso-num{animation:pasoIn .65s cubic-bezier(.34,1.56,.64,1) both}
.paso-num.p1{background:linear-gradient(135deg,#006838,#00c46a)}
.paso-num.p2{background:linear-gradient(135deg,#003087,#3d87ff)}
.paso-num.p3{background:linear-gradient(135deg,#c0001a,#e8001f)}
.paso-num::after{content:"";position:absolute;inset:-6px;border-radius:50%;border:2px solid currentColor;opacity:0;color:#00c46a}
.paso-num.p2::after{color:#3d87ff}
.paso-num.p3::after{color:#e8001f}
.paso.show .paso-num::after{animation:pasoRing 1.6s ease-out .35s both}
@keyframes pasoIn{0%{transform:scale(.4) rotate(-90deg);opacity:0}60%{transform:scale(1.15) rotate(8deg);opacity:1}100%{transform:scale(1) rotate(0);opacity:1}}
@keyframes pasoRing{0%{opacity:.55;transform:scale(1)}100%{opacity:0;transform:scale(1.7)}}
.paso-body{padding-top:6px;flex:1;min-width:0}
.paso-title{font-weight:800;font-size:1rem;margin-bottom:3px;line-height:1.25;color:var(--ink);display:flex;align-items:center;gap:6px;flex-wrap:wrap}
.paso-icon{display:inline-block;font-size:.95rem}
.paso.show .paso-icon{animation:pasoEmoji 2.6s ease-in-out infinite .8s}
@keyframes pasoEmoji{0%,100%{transform:translateY(0) rotate(0)}50%{transform:translateY(-4px) rotate(10deg)}}
.paso-desc{font-size:.82rem;color:var(--ink3);line-height:1.55}

@media (prefers-reduced-motion:reduce){
  .paso{opacity:1;transform:none;transition:none}
  .paso.show .paso-num,.paso.show .paso-num::after,.paso.show .paso-icon{animation:none}
  .pasos-line-fill{transition:none;height:100% !important}
  .crsl-card{transition:none}
}

/* CTA Final */
.lp-cta-final{background:var(--grad-tri);color:#fff;text-align:center;border-radius:24px;padding:3rem 1.5rem;margin:2rem 1.25rem 0;max-width:none;position:relative;overflow:hidden}
.lp-cta-final::before{content:"";position:absolute;inset:0;background:radial-gradient(ellipse at 20% 120%,rgba(255,255,255,.15),transparent 55%),radial-gradient(ellipse at 80% -20%,rgba(255,255,255,.1),transparent 55%)}
.lp-cta-title{font-size:clamp(1.6rem,5vw,2.1rem);font-weight:800;margin:0 0 10px;letter-spacing:-.5px;line-height:1.15;position:relative;z-index:1}
.lp-cta-sub{font-size:.95rem;margin:0 0 22px;opacity:.9;position:relative;z-index:1}
.lp-btn-white{background:#fff;color:#0a0e1a;border:none;padding:14px 32px;border-radius:12px;font-family:"Plus Jakarta Sans";font-weight:800;font-size:.95rem;cursor:pointer;margin:0 6px 8px;box-shadow:0 8px 24px rgba(0,0,0,.18);transition:transform .15s;position:relative;z-index:1}
.lp-btn-white:hover{transform:translateY(-2px)}
.lp-btn-ghost-white{background:transparent;color:#fff;border:1.5px solid rgba(255,255,255,.5);padding:14px 28px;border-radius:12px;font-family:"Plus Jakarta Sans";font-weight:700;font-size:.95rem;cursor:pointer;margin:0 6px 8px;transition:border-color .15s,background .15s;position:relative;z-index:1}
.lp-btn-ghost-white:hover{border-color:#fff;background:rgba(255,255,255,.1)}

/* Footer */
.lp-footer{padding:2rem 1.25rem 2.5rem;background:var(--ink);color:var(--ink3);text-align:center;margin-top:2rem}
body.dark .lp-footer{background:#000}
.lp-footer-name{color:#fff;font-weight:800;font-size:.95rem;margin-bottom:8px}
.lp-footer-line{font-size:.78rem;opacity:.85;line-height:1.6}
.lp-footer-credits{margin-top:10px;font-size:.7rem;opacity:.55;line-height:1.6}

/* Modals */
.lp-modal{position:fixed;inset:0;z-index:9999;display:flex;align-items:center;justify-content:center;padding:1rem;animation:lpModalIn .25s ease-out}
@keyframes lpModalIn{from{opacity:0}to{opacity:1}}
.lp-modal-bg{position:absolute;inset:0;background:rgba(0,0,0,.55);backdrop-filter:blur(4px)}
.lp-modal-card{position:relative;background:var(--surface);border-radius:24px;padding:2rem 1.75rem 1.5rem;width:100%;max-width:400px;box-shadow:0 32px 80px rgba(0,0,0,.4);max-height:92vh;overflow-y:auto;animation:lpModalCardIn .35s cubic-bezier(.22,1,.36,1) both}
@keyframes lpModalCardIn{from{opacity:0;transform:translateY(20px) scale(.96)}to{opacity:1;transform:translateY(0) scale(1)}}
.lp-modal-close{position:absolute;top:14px;right:14px;background:var(--bg);border:none;border-radius:50%;width:32px;height:32px;cursor:pointer;color:var(--ink2);font-size:1rem;display:flex;align-items:center;justify-content:center;font-weight:600;z-index:2}
.lp-modal-close:hover{background:var(--border)}
.lp-modal-h{font-weight:800;font-size:1.5rem;color:var(--ink);margin-bottom:6px;letter-spacing:-.3px}
.lp-modal-sub{font-size:.82rem;color:var(--ink3);margin-bottom:1.4rem;line-height:1.5}
.lp-modal-foot{margin-top:1rem;padding-top:1rem;border-top:1px solid var(--border);text-align:center;font-size:.78rem;color:var(--ink3)}
.lp-modal-foot a{color:var(--green2);text-decoration:none;font-weight:700}
.lp-modal-foot a:hover{text-decoration:underline}

/* Pending modal */
.lp-modal-pending{text-align:center;padding-top:2.5rem}
.lp-pending-emoji{font-size:3.5rem;margin-bottom:.5rem;animation:lpPendingPulse 2s ease-in-out infinite}
@keyframes lpPendingPulse{0%,100%{transform:scale(1)}50%{transform:scale(1.08)}}
.lp-pending-info{background:var(--bg);border-radius:14px;padding:1rem 1.25rem;margin:1.25rem 0;text-align:left}
.lp-pending-row{display:flex;justify-content:space-between;align-items:center;padding:.5rem 0;font-size:.82rem;color:var(--ink3);border-bottom:1px solid var(--border)}
.lp-pending-row:last-child{border-bottom:none}
.lp-pending-row strong{color:var(--ink);font-weight:800;font-size:.85rem}

/* eyebrow purple */
.lp-eyebrow-p{color:#7f4dd6}
body.dark .lp-eyebrow-p{color:#a587f0}

/* SHOWCASE — Así se ve por dentro */
.lp-showcase{background:var(--surface)}
body.dark .lp-showcase{background:var(--bg)}
.sw-tabs{display:flex;gap:8px;justify-content:center;margin-bottom:28px;flex-wrap:wrap}
.sw-tab{background:var(--surface);border:1px solid var(--border);color:var(--ink3);padding:8px 16px;border-radius:24px;font-family:"Plus Jakarta Sans";font-size:.78rem;font-weight:700;cursor:pointer;transition:all .2s}
body.dark .sw-tab{background:var(--bg)}
.sw-tab:hover{border-color:var(--ink2);color:var(--ink)}
.sw-tab.on{background:var(--ink);color:var(--surface);border-color:var(--ink)}
body.dark .sw-tab.on{background:var(--surface);color:var(--ink);border-color:var(--surface)}
.sw-wrap{display:flex;justify-content:center;perspective:1200px}
.sw-phone{width:260px;background:#0a0e1a;border-radius:36px;padding:11px;box-shadow:0 32px 70px rgba(0,0,0,.22);transform:rotateX(2deg) rotateY(-2deg);animation:swTilt 7s ease-in-out infinite}
@keyframes swTilt{0%,100%{transform:rotateX(2deg) rotateY(-2deg)}50%{transform:rotateX(-2deg) rotateY(2deg)}}
.sw-screen{background:var(--bg);border-radius:26px;overflow:hidden;height:480px;display:flex;flex-direction:column}
.sw-top{background:var(--surface);padding:10px 14px;font-size:.7rem;font-weight:800;color:var(--ink);display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid var(--border)}
.sw-live{color:var(--r);font-weight:700;font-size:.6rem}
.sw-body{flex:1;padding:11px;overflow:hidden;position:relative}
.sw-view{position:absolute;inset:11px;display:flex;flex-direction:column;gap:8px;opacity:0;transition:opacity .5s ease;pointer-events:none;overflow:hidden}
.sw-view.on{opacity:1}

.sw-mw-post{background:var(--surface);border-radius:12px;padding:10px;border:1px solid var(--border)}
.sw-mw-head{display:flex;align-items:center;gap:7px;margin-bottom:6px;font-size:.7rem}
.sw-mw-avatar{width:22px;height:22px;border-radius:50%;background:#003087;color:#fff;font-size:.6rem;font-weight:800;display:flex;align-items:center;justify-content:center}
.sw-mw-name{font-weight:800;color:var(--ink)}
.sw-mw-time{color:var(--ink3);font-weight:600;margin-left:auto;font-size:.6rem}
.sw-mw-text{font-size:.7rem;line-height:1.4;color:var(--ink2);margin-bottom:6px}
.sw-mw-react{display:inline-block;background:var(--bg);padding:2px 7px;border-radius:10px;font-size:.7rem;font-weight:700;margin-right:4px;color:var(--ink)}

.sw-rk-row{background:var(--surface);border-radius:10px;padding:7px 9px;font-size:.72rem;display:flex;align-items:center;gap:7px;border:1px solid var(--border)}
.sw-rk-row.first{background:linear-gradient(90deg,rgba(255,180,0,.18),var(--surface))}
.sw-rk-row.first .sw-rk-pos{color:#d18800}
.sw-rk-row.me{border-color:var(--green2);background:rgba(0,196,106,.08)}
.sw-rk-pos{font-weight:800;color:var(--ink3);width:16px}
.sw-rk-av{width:22px;height:22px;border-radius:50%;background:#003087;color:#fff;font-size:.6rem;font-weight:800;display:flex;align-items:center;justify-content:center;flex-shrink:0}
.sw-rk-n{flex:1;font-weight:700;color:var(--ink)}
.sw-rk-pts{font-weight:800;color:var(--green2)}

.sw-pr-h{font-size:.65rem;font-weight:800;color:var(--ink3);letter-spacing:1.2px;text-transform:uppercase;margin-bottom:4px;text-align:center}
.sw-pr-card{background:var(--surface);border-radius:11px;padding:9px;border:1px solid var(--border);display:flex;align-items:center;justify-content:space-between;gap:6px}
.sw-pr-team{flex:1;text-align:center;font-size:.65rem;font-weight:800;color:var(--ink);display:flex;flex-direction:column;align-items:center;gap:3px}
.sw-pr-flag{font-size:1.2rem;line-height:1}
.sw-pr-score{display:flex;align-items:center;gap:5px}
.sw-pr-inp{width:22px;height:26px;background:var(--bg);border-radius:6px;display:flex;align-items:center;justify-content:center;color:var(--green2);font-weight:800;border:1px solid var(--border);font-size:.85rem}
.sw-pr-dash{color:var(--ink3);font-weight:700}

/* FAQ */
.lp-faq{background:var(--bg)}
body.dark .lp-faq{background:var(--surface)}
.faq-list{max-width:560px;margin:0 auto}
.faq-item{border-bottom:1px solid var(--border)}
.faq-item:first-child{border-top:1px solid var(--border)}
.faq-q{width:100%;background:none;border:none;padding:18px 6px;display:flex;align-items:center;justify-content:space-between;cursor:pointer;font-weight:800;font-size:.95rem;color:var(--ink);gap:12px;transition:color .15s;font-family:"Plus Jakarta Sans";text-align:left}
.faq-q:hover{color:var(--blue2)}
.faq-icon{width:26px;height:26px;border-radius:50%;background:var(--bg);display:flex;align-items:center;justify-content:center;font-size:.95rem;color:var(--ink);font-weight:700;flex-shrink:0;transition:transform .3s,background .3s,color .3s;line-height:1}
body.dark .faq-icon{background:var(--surface)}
.faq-item.open .faq-icon{transform:rotate(45deg);background:var(--grad-tri);color:#fff}
.faq-a{max-height:0;overflow:hidden;transition:max-height .35s ease}
.faq-a-inner{padding:0 6px 18px;color:var(--ink2);font-size:.85rem;line-height:1.65;font-weight:500}
.faq-item.open .faq-a{max-height:240px}

/* FAB mobile */
.lp-fab{position:fixed;left:0;right:0;bottom:0;padding:12px 16px calc(12px + env(safe-area-inset-bottom));background:linear-gradient(180deg,transparent,rgba(255,255,255,.85) 50%);backdrop-filter:blur(8px);z-index:40;transform:translateY(110%);transition:transform .35s cubic-bezier(.22,1,.36,1);display:none}
body.dark .lp-fab{background:linear-gradient(180deg,transparent,rgba(8,11,20,.92) 50%)}
.lp-fab.show{transform:translateY(0)}
.lp-fab-btn{width:100%;background:var(--grad-tri);color:#fff;border:none;padding:14px 24px;border-radius:14px;font-family:"Plus Jakarta Sans";font-weight:800;font-size:.95rem;cursor:pointer;box-shadow:0 12px 32px rgba(0,48,135,.35);letter-spacing:.3px}
.lp-fab-btn:active{transform:scale(.98)}
@media (max-width:720px){.lp-fab{display:block}}

/* Cursor trail (desktop only) */
.lp-trail{position:fixed;width:8px;height:8px;border-radius:50%;pointer-events:none;z-index:9999;mix-blend-mode:multiply;opacity:.85}
body.dark .lp-trail{mix-blend-mode:screen;opacity:.7}
@media (hover:none),(max-width:880px){.lp-trail{display:none}}

/* Animaciones on-scroll */
.lp-reveal{opacity:0;transform:translateY(28px);transition:opacity .7s cubic-bezier(.22,1,.36,1),transform .7s cubic-bezier(.22,1,.36,1)}
.lp-reveal.lp-show{opacity:1;transform:translateY(0)}
@media (prefers-reduced-motion:reduce){
  .lp-reveal{opacity:1;transform:none;transition:none}
  .lp-hero-bg::before,.lp-hero-bg::after,.lp-pending-emoji,.lp-mesh-orb{animation:none}
}

/* Responsive */
@media (max-width:480px){
  .lp-hero{padding:2.5rem 1.25rem 3rem}
  .lp-section{padding:2.75rem 1.25rem}
  .lp-cta-final{padding:2.5rem 1.25rem;margin:1.5rem .75rem 0}
  .lp-hero-stats{gap:20px}
  .lp-cd-block{padding:.55rem .3rem}
  .lp-cd-sep{font-size:1.1rem}
  .crsl-card{padding:24px 20px 22px}
  .crsl-h{font-size:1.4rem}
  .crsl-icon{width:54px;height:54px;font-size:26px}
  .lp-phone{width:200px;height:360px}
  .lp-phone-tabs{max-width:260px}
  .sw-phone{width:240px}
  .sw-screen{height:440px}
  .lp-mq-flag{font-size:1.5rem}
}
@media (max-width:720px){
  /* Add bottom padding when FAB is visible to avoid covering footer credits */
  .lp-footer{padding-bottom:6.5rem}
}

/* AUTH (legacy classes still used inside modals) */
.auth-orb{position:absolute;border-radius:50%;filter:blur(60px);opacity:.3;animation:orbFloat 8s ease-in-out infinite alternate;pointer-events:none}
.auth-orb.o1{width:300px;height:300px;background:#00c46a;top:-80px;left:-80px;animation-delay:0s}
.auth-orb.o2{width:250px;height:250px;background:#3d87ff;bottom:-60px;right:-60px;animation-delay:-3s}
.auth-orb.o3{width:180px;height:180px;background:#ff3355;top:40%;right:10%;animation-delay:-5s}
@keyframes orbFloat{from{transform:translate(0,0) scale(1)}to{transform:translate(20px,30px) scale(1.1)}}
.auth-card{background:rgba(255,255,255,.97);backdrop-filter:blur(24px);border-radius:28px;padding:2.5rem 2rem 2rem;width:100%;max-width:380px;box-shadow:0 40px 100px rgba(0,0,0,.25),0 0 0 1px rgba(255,255,255,.5),0 20px 60px rgba(0,104,56,.15),0 20px 60px rgba(192,0,26,.1);position:relative;z-index:1;animation:cardIn .6s cubic-bezier(.22,1,.36,1) both}
@keyframes cardIn{from{opacity:0;transform:translateY(32px) scale(.96)}to{opacity:1;transform:translateY(0) scale(1)}}
.auth-icon{width:76px;height:76px;background:var(--grad-tri);border-radius:20px;display:flex;align-items:center;justify-content:center;font-size:2.2rem;margin:0 auto 1.25rem;box-shadow:0 8px 24px rgba(0,0,0,.2)}
.auth-h{font-weight:800;font-size:1.6rem;text-align:center;margin-bottom:.25rem;background:var(--grad-tri);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.auth-sub{font-size:.8rem;color:var(--ink3);text-align:center;margin-bottom:1.75rem;line-height:1.5}
.flabel{display:block;font-size:.7rem;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:var(--ink3);margin-bottom:5px}
.finput{width:100%;padding:13px 14px;border:2px solid var(--border);border-radius:12px;font-family:"Plus Jakarta Sans";font-size:.9rem;color:var(--ink);background:var(--bg);outline:none;transition:border-color .2s,box-shadow .2s;margin-bottom:1rem;box-sizing:border-box}
.finput:focus{border-color:var(--green);background:var(--surface);box-shadow:0 0 0 4px rgba(0,104,56,.1)}
.auth-btn{width:100%;padding:14px;background:var(--grad-tri);color:#fff;border:none;border-radius:12px;font-family:"Plus Jakarta Sans";font-weight:700;font-size:.95rem;cursor:pointer;text-transform:uppercase;letter-spacing:1px;transition:opacity .2s,transform .15s;box-shadow:0 4px 20px rgba(0,0,0,.25)}
.auth-btn:hover{opacity:.92;transform:translateY(-1px)}
.auth-btn:active{transform:translateY(0)}
.auth-err{font-size:.78rem;color:var(--red);text-align:center;margin-top:.5rem}
.auth-hint{font-size:.75rem;color:var(--ink3);text-align:center;margin-top:1rem;line-height:1.6}
.auth-hint b{color:var(--ink2)}
.auth-divider{display:flex;align-items:center;gap:10px;margin:.75rem 0;color:var(--ink3);font-size:.72rem}
.auth-divider::before,.auth-divider::after{content:"";flex:1;height:1px;background:var(--border)}
.ref-wrap{border:2px dashed var(--border2);border-radius:10px;padding:12px 14px;margin-bottom:1rem;background:var(--bg)}
.ref-label-row{display:flex;align-items:center;gap:6px;margin-bottom:6px}
.ref-icon{font-size:.9rem}
.ref-label-txt{font-size:.72rem;font-weight:600;color:var(--ink3);text-transform:uppercase;letter-spacing:.8px}
.ref-optional{font-size:.65rem;color:var(--ink3);margin-left:auto;background:var(--border);padding:2px 6px;border-radius:10px}

/* APP */
#app{display:none}
.page{display:none;padding:1.5rem;max-width:1300px;margin:0 auto}
.page.on{display:block}
.page.on.page-fading-in{animation:pageFadeIn .3s cubic-bezier(.22,1,.36,1) both}
.page-fading-out{animation:pageFadeOut .14s cubic-bezier(.22,1,.36,1) both !important}
@keyframes pageFadeIn{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}
@keyframes pageFadeOut{from{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(-6px)}}
@media (prefers-reduced-motion:reduce){
  .page.on.page-fading-in,.page-fading-out{animation:none}
}

/* PAGE HEADER */
.ph{margin-bottom:1.25rem;display:flex;align-items:flex-end;justify-content:space-between;flex-wrap:wrap;gap:.75rem}
.ph-left .ph-h{font-weight:800;font-size:1.8rem;letter-spacing:-.5px;background:var(--grad-tri);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.ph-left .ph-s{font-size:.82rem;color:var(--ink3);margin-top:3px}

/* PAGE HERO v2 — reusable hero unificado para páginas internas */
.ph2{background:var(--surface);border:1px solid var(--border);border-radius:20px;padding:22px;margin-bottom:18px;position:relative;overflow:hidden}
body.dark .ph2{background:#161a2e}
.ph2::before{content:"";position:absolute;top:-40px;right:-40px;width:200px;height:200px;background:radial-gradient(circle,rgba(0,196,106,.18),transparent 65%);pointer-events:none;animation:ph2Orb1 9s ease-in-out infinite alternate;will-change:transform}
.ph2::after{content:"";position:absolute;bottom:-50px;left:30%;width:160px;height:160px;background:radial-gradient(circle,rgba(192,0,26,.14),transparent 65%);pointer-events:none;animation:ph2Orb2 11s ease-in-out infinite alternate-reverse;will-change:transform}
body.dark .ph2::before{opacity:.7}
body.dark .ph2::after{opacity:.7}
@keyframes ph2Orb1{0%{transform:translate(0,0)}100%{transform:translate(30px,20px) scale(1.1)}}
@keyframes ph2Orb2{0%{transform:translate(0,0)}100%{transform:translate(-25px,-15px) scale(1.12)}}
.ph2-row{display:flex;align-items:flex-end;justify-content:space-between;gap:16px;flex-wrap:wrap;position:relative;z-index:1}
.ph2-l{flex:1;min-width:200px}
.ph2-eyebrow{font-size:.66rem;font-weight:800;letter-spacing:1.5px;text-transform:uppercase;color:var(--green2);margin-bottom:6px;display:flex;align-items:center;gap:6px}
.ph2-eyebrow.b{color:var(--blue2)}
.ph2-eyebrow.r{color:var(--r)}
.ph2-eyebrow-dot{width:7px;height:7px;border-radius:50%;background:#00c46a;animation:ph2Pulse 1.4s ease-in-out infinite;flex-shrink:0}
.ph2-eyebrow.b .ph2-eyebrow-dot{background:#3d87ff}
.ph2-eyebrow.r .ph2-eyebrow-dot{background:#ff3355}
@keyframes ph2Pulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.5;transform:scale(.8)}}
.ph2-h1{font-size:clamp(1.55rem,5vw,1.85rem);font-weight:800;letter-spacing:-.5px;line-height:1.15;margin:0 0 6px;padding:.05em 0;background:var(--grad-tri);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;display:inline-block}
.ph2-sub{font-size:.85rem;color:var(--ink3);line-height:1.5;font-weight:500;max-width:480px;margin:0}
.ph2-stats{display:flex;gap:18px;margin-top:14px;flex-wrap:wrap}
.ph2-stat{font-size:.78rem;color:var(--ink3);font-weight:600;display:flex;align-items:center;gap:6px}
.ph2-stat strong{color:var(--ink);font-weight:800;font-size:.95rem}
.ph2-stat-icon{font-size:.88rem}
.ph2-actions{display:flex;gap:8px;flex-wrap:wrap}
.ph2-btn-secondary{background:var(--surface);border:1.5px solid var(--border);color:var(--ink);padding:10px 16px;border-radius:11px;font-weight:700;font-size:.78rem;cursor:pointer;font-family:'Plus Jakarta Sans',sans-serif;display:inline-flex;align-items:center;gap:7px;transition:all .15s}
.ph2-btn-secondary:hover{border-color:var(--blue2);color:var(--blue2);transform:translateY(-1px)}
body.dark .ph2-btn-secondary{background:#161a2e}

/* Progress bar v2 (integrado al hero) */
.ph2-prog{margin-top:18px;position:relative;z-index:1}
.ph2-prog-h{display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;font-size:.78rem}
.ph2-prog-t{font-weight:800;color:var(--ink);display:flex;align-items:center;gap:6px}
.ph2-prog-pct{font-weight:800;color:var(--green2);font-variant-numeric:tabular-nums}
.ph2-prog-track{height:10px;background:var(--bg);border-radius:6px;overflow:hidden;border:1px solid var(--border)}
body.dark .ph2-prog-track{background:#0c0f1c}
.ph2-prog-fill{height:100%;background:linear-gradient(90deg,#006838,#003087,#c0001a);border-radius:6px;width:0%;box-shadow:0 0 12px rgba(0,196,106,.4);transition:width 1.4s cubic-bezier(.22,1,.36,1)}
.ph2-prog-sub{font-size:.74rem;color:var(--ink3);font-weight:600;margin-top:6px}

/* Sticky compact header on scroll */
.ph2-sticky{position:sticky;top:62px;z-index:30;margin:-22px -22px 14px;background:rgba(255,255,255,.85);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border-bottom:1px solid var(--border);padding:10px 22px;display:none;align-items:center;gap:14px;font-size:.85rem;animation:ph2StickyIn .25s ease-out}
body.dark .ph2-sticky{background:rgba(8,11,20,.85)}
.ph2-sticky.show{display:flex}
@keyframes ph2StickyIn{from{opacity:0;transform:translateY(-6px)}to{opacity:1;transform:translateY(0)}}
.ph2-sticky-t{font-weight:800;color:var(--ink);flex-shrink:0}
.ph2-sticky-prog{flex:1;display:flex;align-items:center;gap:8px;min-width:0}
.ph2-sticky-track{flex:1;height:6px;background:var(--bg);border-radius:4px;overflow:hidden;min-width:50px}
.ph2-sticky-fill{height:100%;background:linear-gradient(90deg,#006838,#003087,#c0001a);border-radius:4px;transition:width .4s ease}
.ph2-sticky-pct{font-size:.74rem;font-weight:800;color:var(--green2);font-variant-numeric:tabular-nums;flex-shrink:0}
@media (prefers-reduced-motion:reduce){
  .ph2::before,.ph2::after,.ph2-eyebrow-dot{animation:none}
}

/* PILLS */
.pill{display:inline-flex;align-items:center;gap:4px;padding:3px 10px;border-radius:20px;font-size:.7rem;font-weight:600}
.pg{background:var(--g-bg);color:var(--green)}.pr{background:var(--r-bg);color:var(--red)}
.pb{background:var(--b-bg);color:var(--blue2)}.pgld{background:var(--gld-bg);color:var(--gld)}
.pnk{background:var(--border);color:var(--ink3)}

/* PROGRESS */
.prog-wrap{margin-bottom:1.25rem}
.prog-top{display:flex;justify-content:space-between;font-size:.78rem;margin-bottom:4px;color:var(--ink3)}
.prog-track{height:7px;background:var(--border);border-radius:4px;overflow:hidden}
.prog-bar{height:100%;background:var(--grad-gb);border-radius:4px;transition:width .4s}
.pts-pills{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:1.25rem}

/* GROUPS GRID */
.gg{display:grid;grid-template-columns:repeat(auto-fill,minmax(320px,1fr));gap:14px}
.gcard{background:var(--surface);border:1px solid var(--border);border-radius:18px;overflow:hidden;box-shadow:var(--sh);transition:transform .25s cubic-bezier(.22,1,.36,1),box-shadow .25s,border-color .2s;position:relative}
.gcard:hover{border-color:var(--blue2);box-shadow:0 16px 36px rgba(10,14,26,.1);transform:translateY(-3px)}

/* Reveal on-scroll con stagger */
.gcard-reveal{opacity:0;transform:translateY(24px);transition:opacity .65s cubic-bezier(.22,1,.36,1),transform .65s cubic-bezier(.22,1,.36,1);transition-delay:calc(var(--gcard-i,0) * 70ms)}
.gcard-reveal.show{opacity:1;transform:translateY(0)}
@media (prefers-reduced-motion:reduce){
  .gcard-reveal{opacity:1;transform:none;transition:none}
  .gcard:hover{transform:none}
}

.gcard-hd{background:var(--grad-tri);color:#fff;padding:14px 18px;display:flex;align-items:center;gap:14px;position:relative;overflow:hidden}
.gcard-hd::before{content:"";position:absolute;inset:0;background:radial-gradient(ellipse at 80% -20%,rgba(255,255,255,.18),transparent 55%);pointer-events:none}
.gcard-hd-letter{font-size:2.4rem;font-weight:800;line-height:1;letter-spacing:-2px;opacity:.45;position:relative;z-index:0;flex-shrink:0;font-variant-numeric:tabular-nums}
.gcard-hd-title{flex:1;display:flex;flex-direction:column;position:relative;z-index:1}
.gcard-hd-grupo{font-size:.55rem;font-weight:800;letter-spacing:1.4px;opacity:.85;text-transform:uppercase;line-height:1}
.gcard-hd-name{font-size:.92rem;font-weight:800;line-height:1;margin-top:3px}
.gcard-hd-r{position:relative;z-index:1;font-size:.66rem;background:rgba(255,255,255,.22);padding:5px 11px;border-radius:18px;font-weight:800;letter-spacing:.3px;flex-shrink:0}

.mrow{display:grid;grid-template-columns:1fr 70px 1fr;align-items:center;padding:10px 14px;cursor:pointer;transition:background .15s;position:relative;gap:8px}
.mrow:hover{background:var(--bg)}
.mrow.filled{background:linear-gradient(90deg,rgba(0,196,106,.06),transparent)}
.mrow.saved-pulse{animation:rowSavedPulse .6s ease-out}
@keyframes rowSavedPulse{
  0%{transform:scale(1);background:linear-gradient(90deg,rgba(0,196,106,.06),transparent)}
  35%{transform:scale(1.015);background:linear-gradient(90deg,rgba(0,196,106,.22),transparent)}
  100%{transform:scale(1);background:linear-gradient(90deg,rgba(0,196,106,.06),transparent)}
}

.mteam{display:flex;align-items:center;gap:7px;font-size:.82rem;font-weight:600;min-width:0}
.mteam.r{flex-direction:row-reverse;text-align:right}
.mflag{font-size:1.1rem;flex-shrink:0;display:inline-block;transform-origin:50% 100%;transition:transform .35s cubic-bezier(.22,1,.36,1)}
.mrow:hover .mflag{animation:flagWave .8s ease-in-out}
@keyframes flagWave{
  0%{transform:rotate(0)}
  20%{transform:rotate(-8deg)}
  40%{transform:rotate(6deg)}
  60%{transform:rotate(-4deg)}
  80%{transform:rotate(2deg)}
  100%{transform:rotate(0)}
}
.mtn{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-weight:700}
.msc{text-align:center;font-weight:800;font-size:.92rem;padding:6px 0;border-radius:9px;border:1.5px solid var(--border);background:var(--surface);color:var(--ink3);transition:all .25s cubic-bezier(.22,1,.36,1);font-variant-numeric:tabular-nums;min-width:54px}
.mrow:hover .msc{border-color:var(--green2);color:var(--green)}
.mrow.filled .msc{border-color:var(--green);color:var(--green);background:rgba(0,196,106,.08)}
.mid-tag{display:none}

/* Tabla de posiciones */
.gtbl-wrap{border-top:1px solid var(--border)}
.gtbl{width:100%;border-collapse:collapse;font-size:.78rem}
.gtbl th{padding:8px 10px;color:var(--ink3);font-size:.6rem;text-transform:uppercase;letter-spacing:1px;font-weight:800;text-align:center;background:var(--bg)}
body.dark .gtbl th{background:#0c0f1c}
.gtbl th:nth-child(2){text-align:left}
.gtbl td{padding:7px 10px;text-align:center;font-weight:700;color:var(--ink2)}
.gtbl td:nth-child(2){text-align:left}
.gtbl tr.r1 td{background:linear-gradient(90deg,rgba(0,196,106,.1),transparent)}
.gtbl tr.r2 td{background:linear-gradient(90deg,rgba(0,82,204,.08),transparent)}
.gtbl tr.r1 td:first-child{box-shadow:inset 3px 0 0 var(--green)}
.gtbl tr.r2 td:first-child{box-shadow:inset 3px 0 0 var(--blue2)}
.gtbl tr.r3 td{background:linear-gradient(90deg,rgba(154,101,0,.05),transparent)}
.gtbl tr.r3 td:first-child{box-shadow:inset 3px 0 0 var(--gld)}
.gtbl .classify-badge{font-size:.55rem;font-weight:800;padding:1px 5px;border-radius:4px;margin-left:4px;vertical-align:middle}
.gtbl .cb-q{background:var(--g-bg);color:var(--green)}
.gtbl .cb-3{background:var(--gld-bg);color:var(--gld)}
.pnum{font-weight:800;font-size:.85rem;color:var(--ink3)}
.gtbl tr.r1 .pnum{color:var(--green)}
.gtbl tr.r2 .pnum{color:var(--blue2)}
.tcell{display:flex;align-items:center;gap:7px;font-weight:700}
.tcell .mflag{font-size:.95rem}
.ptsnum{font-weight:800;font-size:.92rem;text-align:center;color:var(--ink)}
.c1{color:var(--green)}.c2{color:var(--blue2)}.stat{text-align:center;color:var(--ink3)}

/* MODAL */
#modal{display:none;position:fixed;inset:0;z-index:500;background:rgba(10,14,26,.65);backdrop-filter:blur(8px);align-items:center;justify-content:center;padding:1rem}
#modal.open{display:flex}
.modal-box{background:var(--surface);border-radius:20px;padding:2rem;width:100%;max-width:340px;box-shadow:var(--sh2);text-align:center;border:1px solid var(--border)}
.modal-h{font-weight:800;font-size:1.1rem;margin-bottom:.2rem;background:var(--grad-tri);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.modal-s{font-size:.76rem;color:var(--ink3);margin-bottom:1.5rem}
.modal-teams{display:flex;align-items:center;justify-content:center;gap:12px;margin-bottom:1.5rem}
.mt{display:flex;flex-direction:column;align-items:center;gap:5px;flex:1}
.mt-flag{font-size:2.2rem}
.mt-name{font-size:.72rem;font-weight:600;color:var(--ink2)}
.mt-inp{width:60px;height:60px;text-align:center;font-weight:800;font-size:1.8rem;border:2px solid var(--border);border-radius:12px;outline:none;transition:border-color .2s;color:var(--ink);background:var(--bg);font-family:"Plus Jakarta Sans"}
.mt-inp:focus{border-color:var(--green)}
.modal-vs{font-size:1.2rem;color:var(--ink3);padding-top:18px;font-weight:700}
.modal-btns{display:flex;gap:8px;margin-top:.5rem}
.mbtn{flex:1;padding:10px;border-radius:10px;font-family:"Plus Jakarta Sans";font-weight:600;font-size:.85rem;cursor:pointer;transition:all .2s;border:1.5px solid var(--border)}
.mbtn-cancel{background:var(--surface);color:var(--ink2)}.mbtn-cancel:hover{background:var(--bg)}
.mbtn-save{background:var(--grad-gb);color:#fff;border:none;box-shadow:0 2px 8px rgba(0,104,56,.2)}.mbtn-save:hover{opacity:.9}
.mbtn-del{background:var(--surface);color:var(--red);border-color:var(--r-bg);flex:none;padding:10px 12px;font-size:.78rem}.mbtn-del:hover{background:var(--r-bg)}

/* BRACKET */
.br-outer{overflow-x:auto;padding-bottom:1.5rem;background:var(--surface);border:1px solid var(--border);border-radius:18px;box-shadow:0 4px 12px rgba(10,14,26,.04)}
body.dark .br-outer{background:#161a2e}
.br-flex{
  display:flex;min-width:1300px;gap:0;
  overflow:hidden;
  position:relative;
  border-radius:18px;
}
.br-col{flex:1;min-width:0;display:flex;flex-direction:column;border-right:1px solid var(--border)}
.br-col:last-child{border-right:none}
.br-col-hd{
  padding:14px 8px;text-align:center;font-weight:800;
  font-size:.65rem;letter-spacing:1.8px;text-transform:uppercase;
  color:#fff;
  background:transparent;
  position:relative;z-index:1;
  text-shadow:0 1px 4px rgba(0,0,0,.35);
  display:flex;flex-direction:column;align-items:center;gap:3px;
}
.br-col-hd-count{font-size:.55rem;font-weight:700;opacity:.78;letter-spacing:1.2px;text-transform:uppercase}
.br-flex::before{
  content:'';
  position:absolute;top:0;left:0;right:0;
  height:54px;
  background:linear-gradient(90deg,#006838 0%,#003087 50%,#c0001a 100%);
  z-index:0;
}
.br-slots{
  flex:1;display:flex;flex-direction:column;
  padding:10px 8px;gap:8px;
  justify-content:space-around;
  background:var(--bg);
}
body.dark .br-slots{background:#0c0f1c}

/* BRACKET MATCH CARD */
.br-m{
  background:var(--surface);
  border:1.5px solid var(--border);
  border-radius:12px;
  overflow:hidden;
  display:flex;flex-direction:row;align-items:stretch;
  box-shadow:0 2px 6px rgba(10,14,26,.05);
  position:relative;
  cursor:pointer;
  transition:transform .25s cubic-bezier(.22,1,.36,1),box-shadow .25s,border-color .2s;
}
body.dark .br-m{background:#1a1f33}
.br-m::before{
  content:"";position:absolute;left:0;top:0;bottom:0;width:3px;
  background:var(--grad-tri);
}
.br-m:hover{
  border-color:var(--blue2);
  box-shadow:0 8px 22px rgba(0,82,204,.16);
  transform:translateY(-2px);
}

/* Reveal on-scroll para bracket cards */
.br-m.br-reveal{opacity:0;transform:translateY(16px);transition:opacity .55s cubic-bezier(.22,1,.36,1),transform .55s cubic-bezier(.22,1,.36,1);transition-delay:calc(var(--brm-i,0) * 35ms)}
.br-m.br-reveal.show{opacity:1;transform:translateY(0)}
@media (prefers-reduced-motion:reduce){
  .br-m.br-reveal{opacity:1;transform:none;transition:none}
  .br-m:hover{transform:none}
}

/* Pulse al guardar */
.br-m.saved-pulse{animation:brSavedPulse .65s ease-out}
@keyframes brSavedPulse{
  0%{transform:scale(1)}
  35%{transform:scale(1.02);box-shadow:0 12px 28px rgba(0,196,106,.3)}
  100%{transform:scale(1)}
}

/* Bracket bloqueado — espera a que se conozcan los equipos */
.br-m.br-locked{
  opacity:.55;
  cursor:not-allowed;
  background:repeating-linear-gradient(45deg,var(--surface) 0px,var(--surface) 8px,var(--bg) 8px,var(--bg) 16px);
}
body.dark .br-m.br-locked{background:repeating-linear-gradient(45deg,#1a1f33 0px,#1a1f33 8px,#0c0f1c 8px,#0c0f1c 16px)}
.br-m.br-locked::before{filter:saturate(0)}
.br-m.br-locked:hover{
  border-color:var(--border);
  box-shadow:0 2px 6px rgba(10,14,26,.05);
  transform:none;
}
.br-m.br-locked .br-t{filter:grayscale(.6)}
.br-lock-icon{display:block;font-size:.62rem;margin-top:4px;line-height:1}

.br-mid{
  font-size:.55rem;font-weight:800;
  color:var(--ink3);letter-spacing:.5px;
  padding:6px 4px;
  background:var(--bg);
  border-right:1px solid var(--border);
  display:flex;flex-direction:column;align-items:center;justify-content:center;
  flex-shrink:0;min-width:24px;
  writing-mode:vertical-lr;
}
body.dark .br-mid{background:#13182a}

.br-teams{display:flex;flex-direction:column;flex:1;min-width:0}

.br-t{
  display:flex;align-items:center;gap:9px;
  padding:11px 12px;
  cursor:pointer;transition:background .15s;
  flex:1;min-height:42px;position:relative;
}
.br-t:first-child{border-bottom:1px solid var(--border)}
.br-t:hover{background:var(--b-bg)}
body.dark .br-t:hover{background:rgba(0,82,204,.18)}
.br-t.W{
  background:linear-gradient(90deg,rgba(0,196,106,.12) 0%,rgba(0,196,106,.02) 100%);
}
.br-t.W::after{
  content:"";position:absolute;left:0;top:0;bottom:0;width:3px;
  background:var(--green);
  box-shadow:0 0 8px rgba(0,196,106,.5);
}
.br-t.W .btn{color:var(--green);font-weight:800}
.br-t.W .btf{filter:drop-shadow(0 0 5px rgba(0,150,80,.4));transform:scale(1.05)}

.btf{font-size:1.1rem;flex-shrink:0;line-height:1;transform-origin:center;transition:transform .25s}
.br-t:hover .btf{animation:flagWave .8s ease-in-out}

.btn{
  flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;
  font-size:.82rem;font-weight:600;color:var(--ink);
}

.bsc{font-size:.7rem;font-weight:800;color:var(--ink3);font-variant-numeric:tabular-nums;background:var(--bg);padding:3px 8px;border-radius:6px;flex-shrink:0}
.br-t.W .bsc{background:rgba(0,196,106,.14);color:var(--green)}
body.dark .bsc{background:#13182a}

/* CHAMPION CARD — reemplaza el partido vacío de la final cuando hay campeón */
.br-champ{
  background:linear-gradient(135deg,#006838 0%,#003087 50%,#c0001a 100%);
  color:#fff;
  border-radius:12px;
  padding:18px 14px;
  text-align:center;
  position:relative;
  overflow:hidden;
  box-shadow:0 12px 32px rgba(0,48,135,.25);
}
.br-champ::before{
  content:"";position:absolute;inset:0;
  background:radial-gradient(ellipse at 50% 0%,rgba(255,255,255,.22),transparent 55%);
  pointer-events:none;
}
.br-champ-lbl{font-size:.55rem;font-weight:800;letter-spacing:1.8px;opacity:.85;text-transform:uppercase;margin-bottom:6px;position:relative;z-index:1}
.br-champ-trophy{font-size:2.1rem;line-height:1;margin-bottom:4px;position:relative;z-index:1;animation:champFloat 3s ease-in-out infinite}
@keyframes champFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}
.br-champ-flag{font-size:2.4rem;line-height:1;margin:6px 0;position:relative;z-index:1;display:inline-block;filter:drop-shadow(0 4px 10px rgba(0,0,0,.25))}
.br-champ-name{font-weight:800;font-size:.92rem;letter-spacing:-.2px;position:relative;z-index:1}
.br-champ-sub{font-size:.7rem;font-weight:600;opacity:.88;margin-top:3px;position:relative;z-index:1}
.br-m-reveal{opacity:0;transform:translateY(16px);transition:opacity .55s cubic-bezier(.22,1,.36,1),transform .55s cubic-bezier(.22,1,.36,1);transition-delay:calc(var(--brm-i,0) * 35ms)}
.br-m-reveal.show{opacity:1;transform:translateY(0)}
@media (prefers-reduced-motion:reduce){
  .br-m-reveal{opacity:1;transform:none;transition:none}
  .br-champ-trophy{animation:none}
}
.btn.tbd{color:var(--ink3);font-style:italic;font-weight:400;font-size:.72rem}
.br-sm-winner-btn.active{background:var(--green)!important;color:#fff!important;border-color:var(--green)!important}

/* RANKING */
/* ── RANKING v2 ── */

/* Online pill (junto al export) */
.rk-online-pill{display:inline-flex;align-items:center;gap:6px;background:var(--surface);border:1.5px solid var(--border);border-radius:20px;padding:6px 12px;font-size:.74rem;font-weight:700;color:var(--ink2)}
.rk-online-pill strong{color:var(--ink);font-weight:800}
.rk-online-dot{width:7px;height:7px;border-radius:50%;background:#00c46a;display:inline-block;box-shadow:0 0 8px rgba(0,196,106,.5);animation:pulse 2s ease-in-out infinite}
@keyframes pulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.55;transform:scale(.85)}}

/* Card "Tu posición" — dentro del hero v2 */
.rk-mypos{margin-top:18px;background:linear-gradient(135deg,#006838 0%,#003087 50%,#c0001a 100%);color:#fff;border-radius:14px;padding:16px 20px;display:flex;align-items:center;justify-content:space-between;gap:14px;position:relative;z-index:1;overflow:hidden;box-shadow:0 8px 22px rgba(0,48,135,.18)}
.rk-mypos::before{content:"";position:absolute;inset:0;background:radial-gradient(ellipse at 80% -20%,rgba(255,255,255,.18),transparent 55%);pointer-events:none}
.rk-mypos-l{display:flex;align-items:center;gap:14px;position:relative;z-index:1}
.rk-mypos-pos{font-size:2.4rem;font-weight:800;line-height:1;letter-spacing:-1.5px;display:flex;align-items:baseline;gap:2px;font-variant-numeric:tabular-nums}
.rk-mypos-pos sup{font-size:.45em;font-weight:700;opacity:.78}
.rk-mypos-info{display:flex;flex-direction:column}
.rk-mypos-lbl{font-size:.66rem;font-weight:800;letter-spacing:1.3px;text-transform:uppercase;opacity:.85;margin-bottom:2px}
.rk-mypos-name{font-size:.88rem;font-weight:800;letter-spacing:-.2px}
.rk-mypos-r{position:relative;z-index:1;text-align:right}
.rk-mypos-pts{font-size:1.5rem;font-weight:800;line-height:1;letter-spacing:-.5px;font-variant-numeric:tabular-nums}
.rk-mypos-pts-lbl{font-size:.66rem;font-weight:700;opacity:.85;margin-top:2px}

/* Section headers tipo divider */
.rk-section-h{font-size:.66rem;font-weight:800;color:var(--ink3);letter-spacing:1.5px;text-transform:uppercase;margin:14px 0 12px;padding:0 4px;display:flex;align-items:center;gap:7px}
.rk-section-h::before,.rk-section-h::after{content:"";flex:1;height:1px;background:linear-gradient(90deg,transparent,var(--border),transparent)}

.rk-wrap{display:flex;flex-direction:column;gap:.4rem}

/* Podium v2 — apilado vertical (1°, 2°, 3°) */
.rk-podium{display:flex;flex-direction:column;gap:10px;margin-bottom:8px}
.podium-card{
  border-radius:18px;border:1px solid var(--border);
  padding:14px 18px;
  display:grid;grid-template-columns:auto auto 1fr auto;align-items:center;column-gap:14px;
  background:var(--surface);box-shadow:var(--sh);
  position:relative;overflow:hidden;
  cursor:pointer;
  transition:transform .25s cubic-bezier(.22,1,.36,1),box-shadow .25s;
}
.podium-card:hover{transform:translateY(-2px);box-shadow:0 14px 28px rgba(10,14,26,.1)}
.podium-card::before{content:'';position:absolute;top:0;left:0;bottom:0;width:4px}
.podium-card.p1{padding:18px;background:linear-gradient(120deg,rgba(232,170,30,.18),var(--surface) 55%);border-color:rgba(232,170,30,.4);box-shadow:0 12px 28px rgba(232,170,30,.12)}
.podium-card.p2{background:linear-gradient(120deg,rgba(140,140,140,.12),var(--surface) 55%);border-color:rgba(140,140,140,.3)}
.podium-card.p3{background:linear-gradient(120deg,rgba(160,103,58,.14),var(--surface) 55%);border-color:rgba(160,103,58,.3)}
.podium-card.p1::before{background:linear-gradient(180deg,#c8900a,#f0b830,#c8900a)}
.podium-card.p2::before{background:linear-gradient(180deg,#666,#aaa,#666)}
.podium-card.p3::before{background:linear-gradient(180deg,#7a4020,#c87840,#7a4020)}
.podium-card.p1::after{content:"";position:absolute;top:-30px;right:-30px;width:120px;height:120px;background:radial-gradient(circle,rgba(232,170,30,.25),transparent 65%);pointer-events:none}
body.dark .podium-card.p1{background:linear-gradient(120deg,rgba(232,170,30,.16),#1a1f33 55%)}
body.dark .podium-card.p2{background:linear-gradient(120deg,rgba(140,140,140,.1),#1a1f33 55%)}
body.dark .podium-card.p3{background:linear-gradient(120deg,rgba(160,103,58,.1),#1a1f33 55%)}

.pod-medal{font-size:2rem;line-height:1;animation:rkFloat 3s ease-in-out infinite;flex-shrink:0}
.podium-card.p1 .pod-medal{font-size:2.4rem;animation-delay:0s}
.podium-card.p2 .pod-medal{animation-delay:.15s}
.podium-card.p3 .pod-medal{animation-delay:.3s}
@keyframes rkFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}
@media (prefers-reduced-motion:reduce){
  .pod-medal{animation:none}
}
.pod-rank{font-size:.6rem;font-weight:800;text-transform:uppercase;letter-spacing:1.3px;opacity:.55;color:var(--ink);font-variant-numeric:tabular-nums;align-self:center;line-height:1.2}
.pod-name{font-weight:800;font-size:.95rem;color:var(--ink);word-break:break-word;line-height:1.2;display:flex;align-items:center;gap:6px;flex-wrap:wrap;align-self:center}
.podium-card.p1 .pod-name{font-size:1.05rem}
.pod-pts{font-weight:800;line-height:1;font-size:1.4rem;letter-spacing:-.4px;font-variant-numeric:tabular-nums;text-align:right;align-self:center}
.podium-card.p1 .pod-pts{font-size:1.7rem}
.pod-pts.gld{color:#c8900a}.pod-pts.slv{color:#888}.pod-pts.brz{color:#a0673a}
.pod-pts span{font-size:.42em;font-weight:700;margin-left:2px;opacity:.8}
.pod-sub{display:none}

/* Reveal podium con stagger */
.podium-card.rk-reveal{opacity:0;transform:translateY(16px);transition:opacity .5s cubic-bezier(.22,1,.36,1),transform .5s cubic-bezier(.22,1,.36,1)}
.podium-card.rk-reveal.show{opacity:1;transform:translateY(0)}
.rk-podium .podium-card.rk-reveal:nth-child(1){transition-delay:0s}
.rk-podium .podium-card.rk-reveal:nth-child(2){transition-delay:.08s}
.rk-podium .podium-card.rk-reveal:nth-child(3){transition-delay:.16s}

/* Lista (filas debajo del podium) */
.rk-list{background:var(--surface);border:1px solid var(--border);border-radius:18px;overflow:hidden;box-shadow:0 4px 12px rgba(10,14,26,.04)}
.rk-row{display:grid;grid-template-columns:50px 1fr auto;align-items:center;padding:13px 16px;border-bottom:1px solid var(--border);gap:12px;cursor:pointer;transition:background .15s;position:relative}
.rk-row:last-child{border-bottom:none}
.rk-row:hover{background:var(--bg)}
.rk-row.me{background:linear-gradient(90deg,rgba(0,196,106,.08),transparent 60%)}
.rk-row.me::before{content:"";position:absolute;left:0;top:0;bottom:0;width:3px;background:var(--green);box-shadow:0 0 8px rgba(0,196,106,.5)}
.rk-row.me .rk-row-name{color:var(--green)}

/* Reveal on-scroll para filas */
.rk-row.rk-reveal{opacity:0;transform:translateY(14px);transition:opacity .5s cubic-bezier(.22,1,.36,1),transform .5s cubic-bezier(.22,1,.36,1);transition-delay:calc(var(--rkrow-i,0) * 50ms)}
.rk-row.rk-reveal.show{opacity:1;transform:translateY(0)}

.rk-row-pos{font-weight:800;font-size:.85rem;color:var(--ink3);text-align:center;width:36px;height:36px;display:flex;align-items:center;justify-content:center;border-radius:50%;background:var(--bg);font-variant-numeric:tabular-nums}
.rk-row.me .rk-row-pos{background:rgba(0,196,106,.16);color:var(--green)}
.rk-row-info{flex:1;min-width:0}
.rk-row-name{font-weight:800;font-size:.85rem;color:var(--ink);display:flex;align-items:center;gap:6px;flex-wrap:wrap}
.rk-row-sub{font-size:.7rem;color:var(--ink3);font-weight:600;margin-top:2px}
.rk-row-bar-w{height:4px;background:var(--bg);border-radius:3px;overflow:hidden;margin-top:6px;width:140px;max-width:100%}
.rk-row-bar{height:100%;border-radius:3px;transition:width 1s cubic-bezier(.22,1,.36,1)}
.rk-row-pts{font-weight:800;font-size:1rem;color:var(--ink);letter-spacing:-.3px;font-variant-numeric:tabular-nums}
.rk-row-pts span{font-size:.55em;font-weight:700;color:var(--ink3);margin-left:2px}

@media (max-width:520px){
  .podium-card{padding:12px 14px;column-gap:10px}
  .podium-card.p1{padding:14px 16px}
  .pod-medal{font-size:1.6rem}
  .podium-card.p1 .pod-medal{font-size:2rem}
  .pod-name{font-size:.85rem}
  .podium-card.p1 .pod-name{font-size:.95rem}
  .pod-pts{font-size:1.2rem}
  .podium-card.p1 .pod-pts{font-size:1.45rem}
  .pod-rank{font-size:.55rem}
  .rk-row-bar-w{width:100px}
}

/* Header strip viejo (legado, mantener por compatibilidad si alguien lo usa) */
.rk-header{background:var(--grad-tri);border-radius:var(--rad);padding:1rem 1.25rem;color:#fff;display:flex;align-items:center;justify-content:space-between;box-shadow:var(--sh2)}
.rk-header-title{font-weight:800;font-size:1rem;letter-spacing:.3px}
.rk-header-sub{font-size:.75rem;opacity:.8}

/* Tabla legacy (sin uso pero mantengo) */
.rk-table{width:100%;border-collapse:collapse}
.rk-table th{padding:9px 14px;font-size:.68rem;text-transform:uppercase;letter-spacing:.7px;color:var(--ink3);font-weight:600;border-bottom:1.5px solid var(--border);text-align:left}
.rk-table th:last-child{text-align:right}
.rk-table td{padding:11px 14px;border-bottom:1px solid var(--border)}
.rk-table tr:last-child td{border-bottom:none}
.rk-table tr:hover td{background:var(--bg)}
.rk-table tr.me td{background:var(--g-bg)!important}
.rk-pos{font-weight:800;font-size:1.2rem;color:var(--ink3);width:32px}
.rk-name{font-weight:700;font-size:.88rem}
.rk-bar-w{height:4px;background:var(--bg);border-radius:2px;margin-top:4px;width:80px}
.rk-bar{height:100%;border-radius:2px;transition:width .5s;background:var(--grad-gb)}
.rk-pts{font-weight:800;font-size:1.3rem;text-align:right;display:flex;align-items:baseline;justify-content:flex-end;gap:3px}
.pts-top{background:var(--grad-tri);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.rsub{font-size:.68rem;color:var(--ink3)}

/* PRIZES */
/* ── PREMIOS v2 ── */

/* Hero gigante con gradient tricolor */
.pp-hero{background:linear-gradient(135deg,#006838 0%,#003087 50%,#c0001a 100%);border-radius:24px;padding:28px 24px;margin-bottom:18px;position:relative;overflow:hidden;color:#fff;box-shadow:0 16px 40px rgba(0,48,135,.18)}
.pp-hero::before{content:"";position:absolute;top:-60px;right:-60px;width:280px;height:280px;background:radial-gradient(circle,rgba(255,255,255,.18),transparent 65%);pointer-events:none}
.pp-hero::after{content:"🏆";position:absolute;bottom:-40px;right:-10px;font-size:9rem;opacity:.08;line-height:1;pointer-events:none}
.pp-hero-row{position:relative;z-index:1}
.pp-eyebrow{font-size:.66rem;font-weight:800;letter-spacing:1.5px;text-transform:uppercase;color:#fff;opacity:.92;margin-bottom:8px;display:flex;align-items:center;gap:6px}
.pp-eyebrow-dot{width:7px;height:7px;border-radius:50%;background:#ffd84d;animation:ppPulse 1.6s ease-in-out infinite;box-shadow:0 0 10px rgba(255,216,77,.6)}
@keyframes ppPulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.5;transform:scale(.8)}}
.pp-bolsa-label{font-size:.74rem;text-transform:uppercase;letter-spacing:1.5px;opacity:.85;font-weight:700;margin-bottom:6px}
.pp-bolsa-amt{font-size:3.6rem;font-weight:800;line-height:1;letter-spacing:-2px;font-variant-numeric:tabular-nums;text-shadow:0 4px 24px rgba(0,0,0,.2);margin-bottom:6px;color:#fff}
.pp-bolsa-amt .currency{font-size:.5em;font-weight:700;opacity:.7;margin-right:6px;vertical-align:top}
.pp-bolsa-sub{font-size:.82rem;opacity:.85;font-weight:500;margin-bottom:14px}
.pp-pills{display:flex;gap:8px;flex-wrap:wrap}
.pp-pill{background:rgba(255,255,255,.18);backdrop-filter:blur(8px);border-radius:20px;padding:6px 14px;font-size:.74rem;font-weight:700;color:#fff;display:inline-flex;align-items:center;gap:6px;border:1px solid rgba(255,255,255,.2)}

/* Section dividers */
.pp-section-h{font-size:.66rem;font-weight:800;color:var(--ink3);letter-spacing:1.5px;text-transform:uppercase;margin:18px 0 12px;padding:0 4px;display:flex;align-items:center;gap:7px}
.pp-section-h::before,.pp-section-h::after{content:"";flex:1;height:1px;background:linear-gradient(90deg,transparent,var(--border),transparent)}

/* Prize cards apiladas verticales */
.pp-prizes{display:flex;flex-direction:column;gap:10px;margin-bottom:18px}
.pp-card{background:var(--surface);border:1px solid var(--border);border-radius:18px;padding:16px 18px;display:grid;grid-template-columns:auto auto 1fr auto;align-items:center;column-gap:14px;cursor:default;position:relative;overflow:hidden;transition:transform .25s cubic-bezier(.22,1,.36,1),box-shadow .25s}
body.dark .pp-card{background:#161a2e}
.pp-card:hover{transform:translateY(-2px);box-shadow:0 16px 32px rgba(10,14,26,.08)}
.pp-card::before{content:'';position:absolute;top:0;left:0;bottom:0;width:4px}

.pp-card.p1{padding:18px;background:linear-gradient(120deg,rgba(232,170,30,.18),var(--surface) 55%);border-color:rgba(232,170,30,.4);box-shadow:0 12px 28px rgba(232,170,30,.14)}
.pp-card.p1::before{background:linear-gradient(180deg,#c8900a,#f0b830,#c8900a)}
.pp-card.p1::after{content:"";position:absolute;top:-30px;right:-30px;width:120px;height:120px;background:radial-gradient(circle,rgba(232,170,30,.25),transparent 65%);pointer-events:none}
.pp-card.p2{background:linear-gradient(120deg,rgba(140,140,140,.12),var(--surface) 55%);border-color:rgba(140,140,140,.3)}
.pp-card.p2::before{background:linear-gradient(180deg,#666,#aaa,#666)}
.pp-card.p3{background:linear-gradient(120deg,rgba(160,103,58,.14),var(--surface) 55%);border-color:rgba(160,103,58,.3)}
.pp-card.p3::before{background:linear-gradient(180deg,#7a4020,#c87840,#7a4020)}
.pp-card.p4{background:linear-gradient(120deg,rgba(0,196,106,.10),var(--surface) 55%);border-color:rgba(0,196,106,.25)}
.pp-card.p4::before{background:linear-gradient(180deg,#006838,#00c46a)}
.pp-card.p5{background:linear-gradient(120deg,rgba(0,82,204,.10),var(--surface) 55%);border-color:rgba(0,82,204,.25)}
.pp-card.p5::before{background:linear-gradient(180deg,#003087,#3d87ff)}
.pp-card.p6{background:linear-gradient(120deg,rgba(192,0,26,.08),var(--surface) 55%);border-color:rgba(192,0,26,.2)}
.pp-card.p6::before{background:linear-gradient(180deg,#c0001a,#ff3355)}
body.dark .pp-card.p1{background:linear-gradient(120deg,rgba(232,170,30,.16),#1a1f33 55%)}
body.dark .pp-card.p2{background:linear-gradient(120deg,rgba(140,140,140,.1),#1a1f33 55%)}
body.dark .pp-card.p3{background:linear-gradient(120deg,rgba(160,103,58,.1),#1a1f33 55%)}
body.dark .pp-card.p4{background:linear-gradient(120deg,rgba(0,196,106,.08),#1a1f33 55%)}
body.dark .pp-card.p5{background:linear-gradient(120deg,rgba(0,82,204,.08),#1a1f33 55%)}
body.dark .pp-card.p6{background:linear-gradient(120deg,rgba(192,0,26,.06),#1a1f33 55%)}

.pp-medal{font-size:2rem;line-height:1;flex-shrink:0;animation:ppFloat 3s ease-in-out infinite;align-self:center}
.pp-card.p1 .pp-medal{font-size:2.4rem}
.pp-card.p2 .pp-medal{animation-delay:.1s}
.pp-card.p3 .pp-medal{animation-delay:.2s}
.pp-card.p4 .pp-medal{animation-delay:.3s}
.pp-card.p5 .pp-medal{animation-delay:.4s}
.pp-card.p6 .pp-medal{animation-delay:.5s}
@keyframes ppFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}
@media (prefers-reduced-motion:reduce){
  .pp-medal{animation:none}
}

.pp-rank{font-size:.6rem;font-weight:800;text-transform:uppercase;letter-spacing:1.3px;color:var(--ink3);align-self:center;line-height:1.2;text-align:center;min-width:42px}
.pp-card.p1 .pp-rank{color:#c8900a}
.pp-card.p2 .pp-rank{color:#888}
.pp-card.p3 .pp-rank{color:#a0673a}
.pp-card.p6 .pp-rank{color:#c0001a}
.pp-info{display:flex;flex-direction:column;gap:2px;align-self:center;min-width:0}
.pp-info-title{font-weight:800;font-size:.92rem;color:var(--ink);letter-spacing:-.2px;line-height:1.2}
.pp-card.p1 .pp-info-title{font-size:1rem}
.pp-info-sub{font-size:.74rem;color:var(--ink3);font-weight:600}
.pp-amt-wrap{align-self:center;text-align:right;flex-shrink:0;position:relative;z-index:1}
.pp-amt{font-weight:800;line-height:1;font-size:1.4rem;letter-spacing:-.4px;font-variant-numeric:tabular-nums;color:var(--ink)}
.pp-card.p1 .pp-amt{font-size:1.7rem;color:#c8900a}
.pp-amt .cur{font-size:.5em;font-weight:700;opacity:.6;margin-right:2px}
.pp-amt-mxn{font-size:.6rem;font-weight:700;color:var(--ink3);text-transform:uppercase;letter-spacing:1px;margin-top:2px}

/* Reveal stagger */
.pp-card.pp-reveal{opacity:0;transform:translateY(16px);transition:opacity .55s cubic-bezier(.22,1,.36,1),transform .55s cubic-bezier(.22,1,.36,1);transition-delay:calc(var(--pp-i,0) * 70ms)}
.pp-card.pp-reveal.show{opacity:1;transform:translateY(0)}
@media (prefers-reduced-motion:reduce){
  .pp-card.pp-reveal{opacity:1;transform:none;transition:none}
}

/* Bonus referido */
.pp-ref-bonus{background:linear-gradient(135deg,#fff9e6,#fffef8);border:2px solid rgba(232,170,30,.5);border-radius:20px;padding:18px 22px;margin-bottom:18px;position:relative;overflow:hidden}
body.dark .pp-ref-bonus{background:linear-gradient(135deg,#2a1e00,#1a1300);border-color:rgba(232,170,30,.5)}
.pp-ref-bonus::before{content:"🎁";position:absolute;top:-15px;right:-10px;font-size:5rem;opacity:.06}
.pp-ref-row{display:flex;gap:14px;align-items:flex-start;position:relative;z-index:1}
.pp-ref-icon{font-size:2.2rem;flex-shrink:0;line-height:1}
.pp-ref-meta{flex:1;min-width:0}
.pp-ref-eyebrow{font-size:.6rem;font-weight:800;letter-spacing:1.4px;text-transform:uppercase;color:#c8900a;margin-bottom:4px}
body.dark .pp-ref-eyebrow{color:#f0b030}
.pp-ref-h{font-size:1rem;font-weight:800;color:var(--ink);letter-spacing:-.3px;margin-bottom:6px}
.pp-ref-sub{font-size:.82rem;color:var(--ink2);line-height:1.55;margin-bottom:10px}
.pp-ref-sub b{color:#c8900a;font-weight:800}
body.dark .pp-ref-sub b{color:#f0b030}
.pp-ref-amt{display:inline-flex;align-items:baseline;gap:6px;background:var(--surface);border:1.5px solid rgba(232,170,30,.4);padding:8px 14px;border-radius:12px;box-shadow:0 4px 12px rgba(232,170,30,.12)}
body.dark .pp-ref-amt{background:#161a2e}
.pp-ref-amt-num{font-size:1.5rem;font-weight:800;color:#c8900a;line-height:1;letter-spacing:-.5px;font-variant-numeric:tabular-nums}
body.dark .pp-ref-amt-num{color:#f0b030}
.pp-ref-amt-lbl{font-size:.68rem;font-weight:700;color:var(--ink3);text-transform:uppercase;letter-spacing:.8px}
.pp-ref-alert{margin-top:10px;border-radius:10px;padding:10px 14px;font-size:.8rem;font-weight:600;line-height:1.4}
.pp-ref-alert.live{background:var(--g-bg);border:1.5px solid var(--green2);color:var(--green)}
.pp-ref-alert.info{background:var(--b-bg);border:1px solid var(--b2);color:var(--blue2)}
.pp-ref-alert.muted{font-style:italic;color:var(--ink3);background:transparent;border:none;padding:6px 0}

/* Código referido */
.pp-code{background:var(--surface);border:1px solid var(--border);border-radius:18px;padding:18px 22px;display:grid;grid-template-columns:1fr auto;gap:14px;align-items:center;box-shadow:0 4px 14px rgba(10,14,26,.04);margin-bottom:14px}
body.dark .pp-code{background:#161a2e}
.pp-code-l .label{font-size:.6rem;font-weight:800;color:var(--ink3);text-transform:uppercase;letter-spacing:1.3px;margin-bottom:4px}
.pp-code-l .code{font-size:1.7rem;font-weight:800;letter-spacing:2px;font-variant-numeric:tabular-nums;background:linear-gradient(135deg,#003087,#0052cc);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;line-height:1}
.pp-code-r{text-align:right}
.pp-refs-count{font-size:.68rem;color:var(--ink3);font-weight:700;margin-bottom:6px;text-transform:uppercase;letter-spacing:.8px}
.pp-copy-btn{padding:9px 18px;background:linear-gradient(135deg,#006838,#003087);color:#fff;border:none;border-radius:11px;font-family:'Plus Jakarta Sans',sans-serif;font-weight:800;font-size:.78rem;cursor:pointer;display:inline-flex;align-items:center;gap:5px;transition:transform .15s,box-shadow .15s;box-shadow:0 4px 12px rgba(0,82,204,.18)}
.pp-copy-btn:hover{transform:translateY(-1px);box-shadow:0 8px 18px rgba(0,82,204,.24)}

/* Mis referidos */
.pp-myrefs{margin-top:10px;padding:0 22px 18px}
.pp-myrefs-title{font-size:.74rem;color:var(--ink2);font-weight:700;margin-bottom:6px}
.pp-myrefs-list{display:flex;flex-wrap:wrap;gap:6px}

/* Tabla admin */
.ref-table{width:100%;border-collapse:collapse}
.ref-table th{font-size:.65rem;text-transform:uppercase;letter-spacing:.7px;color:var(--ink3);padding:6px 10px;border-bottom:1.5px solid var(--border);text-align:left}
.ref-table td{padding:9px 10px;border-bottom:1px solid var(--border);font-size:.82rem}
.ref-table tr:last-child td{border-bottom:none}
.ref-code{font-weight:800;letter-spacing:1.5px;color:var(--green);font-size:.9rem}
.ref-count{font-weight:800;color:var(--blue2)}

@media (max-width:520px){
  .pp-hero{padding:22px 18px}
  .pp-bolsa-amt{font-size:2.8rem}
  .pp-card{padding:14px 16px;column-gap:10px}
  .pp-card.p1{padding:16px}
  .pp-medal{font-size:1.7rem}
  .pp-card.p1 .pp-medal{font-size:2rem}
  .pp-amt{font-size:1.2rem}
  .pp-card.p1 .pp-amt{font-size:1.45rem}
  .pp-info-title{font-size:.85rem}
  .pp-rank{min-width:36px;font-size:.55rem}
  .pp-code{padding:16px 18px}
  .pp-code-l .code{font-size:1.4rem}
}

/* Legacy styles para evitar romper si quedan referencias */
.prizes-hero,.prizes-grid,.prize-card,.prize-medal,.prize-pos,.prize-pct,.prize-amt,.prize-bar-w,.prize-bar,.prizes-ref-section,.bono-card,.bono-label,.bono-amount,.bono-sub,.my-ref-box,.my-ref-left,.my-ref-right,.copy-code-btn{ /* deprecated */ }

/* ── STATS v2 ── */

/* Overview integrado al hero */
.st-overview{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-top:18px;position:relative;z-index:1}
.st-stat{background:var(--surface);border:1px solid var(--border);border-radius:14px;padding:14px 10px;text-align:center;transition:transform .2s,box-shadow .2s,border-color .2s}
body.dark .st-stat{background:#161a2e}
.st-stat:hover{transform:translateY(-2px);box-shadow:0 8px 20px rgba(10,14,26,.06);border-color:var(--ink3)}
.st-stat-icon{font-size:1.15rem;line-height:1;margin-bottom:6px}
.st-stat-num{font-weight:800;font-size:1.4rem;line-height:1;letter-spacing:-.5px;font-variant-numeric:tabular-nums;margin-bottom:4px;color:var(--ink)}
.st-stat-label{font-size:.6rem;font-weight:800;color:var(--ink3);letter-spacing:1.2px;text-transform:uppercase;line-height:1.2}
@media (max-width:600px){
  .st-overview{grid-template-columns:repeat(4,1fr);gap:6px}
  .st-stat{padding:12px 6px}
  .st-stat-num{font-size:1.2rem}
  .st-stat-label{font-size:.55rem;letter-spacing:.8px}
}

/* Disclaimer (sin bracket completo) */
.st-disclaimer{margin-top:14px;background:rgba(232,170,30,.12);border:1.5px solid rgba(232,170,30,.4);border-radius:12px;padding:10px 14px;display:flex;align-items:flex-start;gap:10px;position:relative;z-index:1}
.st-disclaimer-icon{font-size:1.1rem;flex-shrink:0;line-height:1.3}
.st-disclaimer-txt{flex:1;font-size:.78rem;color:#8a5a00;font-weight:600;line-height:1.5}
body.dark .st-disclaimer-txt{color:#f0b030}
.st-disclaimer-txt strong{font-weight:800}

/* Section dividers */
.st-section-h{font-size:.66rem;font-weight:800;color:var(--ink3);letter-spacing:1.5px;text-transform:uppercase;margin:14px 0 10px;padding:0 4px;display:flex;align-items:center;gap:7px}
.st-section-h::before,.st-section-h::after{content:"";flex:1;height:1px;background:linear-gradient(90deg,transparent,var(--border),transparent)}

/* Card generic */
.st-card{background:var(--surface);border:1px solid var(--border);border-radius:18px;padding:16px 18px;box-shadow:0 4px 12px rgba(10,14,26,.04);margin-bottom:12px}
body.dark .st-card{background:#161a2e}

/* Reveal */
.st-card.st-reveal,.st-list.st-reveal{opacity:0;transform:translateY(14px);transition:opacity .55s cubic-bezier(.22,1,.36,1),transform .55s cubic-bezier(.22,1,.36,1);transition-delay:calc(var(--st-i,0) * 80ms)}
.st-card.st-reveal.show,.st-list.st-reveal.show{opacity:1;transform:translateY(0)}
@media (prefers-reduced-motion:reduce){
  .st-card.st-reveal,.st-list.st-reveal{opacity:1;transform:none;transition:none}
}

/* Match highlights */
.st-match-list{display:flex;flex-direction:column;gap:0}
.st-match-row{display:flex;align-items:center;gap:14px;padding:12px 0;border-bottom:1px solid var(--border)}
.st-match-row:last-child{border-bottom:none}
.st-match-icon{width:42px;height:42px;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:1.25rem;flex-shrink:0;color:#fff;box-shadow:0 4px 12px rgba(0,0,0,.1)}
.st-match-icon.green{background:linear-gradient(135deg,#006838,#00c46a)}
.st-match-icon.blue{background:linear-gradient(135deg,#003087,#3d87ff)}
.st-match-icon.red{background:linear-gradient(135deg,#c0001a,#ff3355)}
.st-match-meta{flex:1;min-width:0}
.st-match-tag{font-size:.6rem;font-weight:800;text-transform:uppercase;letter-spacing:1.2px;color:var(--ink3);margin-bottom:2px}
.st-match-name{font-weight:800;color:var(--ink);font-size:.92rem;letter-spacing:-.2px}
.st-match-desc{font-size:.74rem;font-weight:700;margin-top:2px}
.st-match-desc.green{color:var(--green)}
.st-match-desc.blue{color:var(--blue2)}
.st-match-desc.red{color:var(--r)}

/* Bars (campeón más seleccionado) */
.st-bars{display:flex;flex-direction:column;gap:12px}
.st-bar-row{display:grid;grid-template-columns:32px 1fr auto;align-items:center;gap:10px}
.st-bar-row[data-clickable="1"]{cursor:pointer;border-radius:10px;padding:4px;margin:-4px;transition:background .15s}
.st-bar-row[data-clickable="1"]:hover{background:var(--bg)}
body.dark .st-bar-row[data-clickable="1"]:hover{background:#0c0f1c}
.st-bar-medal{font-size:1.15rem;line-height:1;text-align:center}
.st-bar-info{display:flex;flex-direction:column;gap:4px;min-width:0}
.st-bar-name-row{display:flex;justify-content:space-between;align-items:baseline;gap:8px}
.st-bar-name{font-weight:800;color:var(--ink);font-size:.86rem}
.st-bar-pct{font-size:.7rem;font-weight:700;color:var(--ink3);font-variant-numeric:tabular-nums}
.st-bar-track{height:8px;background:var(--bg);border-radius:6px;overflow:hidden;position:relative}
body.dark .st-bar-track{background:#0c0f1c}
.st-bar-fill{height:100%;background:var(--grad-tri);border-radius:6px;width:0;transition:width 1.1s cubic-bezier(.22,1,.36,1)}
.st-bar-votes{font-size:.7rem;font-weight:700;color:var(--ink3);font-variant-numeric:tabular-nums;flex-shrink:0;text-align:right;width:60px}

/* Top exactos list */
.st-list{background:var(--surface);border:1px solid var(--border);border-radius:18px;overflow:hidden;box-shadow:0 4px 12px rgba(10,14,26,.04);margin-bottom:12px}
body.dark .st-list{background:#161a2e}
.st-list-row{display:grid;grid-template-columns:36px 1fr auto;align-items:center;padding:11px 18px;border-bottom:1px solid var(--border);gap:10px;cursor:pointer;transition:background .15s;position:relative}
.st-list-row:last-child{border-bottom:none}
.st-list-row:hover{background:var(--bg)}
body.dark .st-list-row:hover{background:#0c0f1c}
.st-list-row.me{background:linear-gradient(90deg,rgba(0,196,106,.08),transparent 60%)}
.st-list-row.me::before{content:"";position:absolute;left:0;top:0;bottom:0;width:3px;background:var(--green);box-shadow:0 0 8px rgba(0,196,106,.5)}
.st-list-pos{width:28px;height:28px;border-radius:50%;background:var(--bg);color:var(--ink3);font-size:.74rem;font-weight:800;display:flex;align-items:center;justify-content:center;font-variant-numeric:tabular-nums}
body.dark .st-list-pos{background:#0c0f1c}
.st-list-row.me .st-list-pos{background:rgba(0,196,106,.16);color:var(--green)}
.st-list-name{font-weight:800;color:var(--ink);font-size:.86rem}
.st-list-row.me .st-list-name{color:var(--green)}
.st-list-val{font-size:.76rem;font-weight:700;color:var(--ink3);font-variant-numeric:tabular-nums}
.st-list-val strong{color:var(--ink);font-size:.92rem}

/* Curiosidades */
.st-curios{display:grid;grid-template-columns:repeat(2,1fr);gap:10px;margin-bottom:12px}
@media (max-width:520px){
  .st-curios{grid-template-columns:1fr}
}
.st-curio{background:var(--surface);border:1px solid var(--border);border-radius:16px;padding:16px;position:relative;overflow:hidden;transition:transform .2s,box-shadow .2s,border-color .2s;cursor:pointer}
body.dark .st-curio{background:#161a2e}
.st-curio:hover{transform:translateY(-2px);box-shadow:0 12px 24px rgba(10,14,26,.07);border-color:var(--ink3)}
.st-curio.me{background:linear-gradient(135deg,rgba(0,196,106,.08),var(--surface) 55%);border-color:rgba(0,196,106,.3)}
body.dark .st-curio.me{background:linear-gradient(135deg,rgba(0,196,106,.1),#161a2e 55%)}
.st-curio-icon{font-size:1.7rem;margin-bottom:6px;line-height:1}
.st-curio-tag{font-size:.55rem;font-weight:800;text-transform:uppercase;letter-spacing:1.2px;color:var(--ink3);margin-bottom:2px}
.st-curio-name{font-weight:800;color:var(--ink);font-size:.92rem;letter-spacing:-.2px;margin-bottom:3px}
.st-curio.me .st-curio-name{color:var(--green)}
.st-curio-desc{font-size:.74rem;color:var(--ink3);line-height:1.4;font-weight:600}
.st-curio-me-pill{position:absolute;top:12px;right:12px;background:var(--green);color:#fff;font-size:.5rem;font-weight:800;padding:2px 7px;border-radius:6px;letter-spacing:.5px;text-transform:uppercase}

/* Empty state */
.st-empty{padding:3rem 1.5rem;text-align:center;background:var(--surface);border:1px dashed var(--border);border-radius:18px;display:flex;flex-direction:column;align-items:center;gap:.6rem}
body.dark .st-empty{background:#161a2e}
.st-empty-icon{font-size:3rem;line-height:1}
.st-empty-t{font-weight:800;font-size:1rem;color:var(--ink)}
.st-empty-s{font-size:.82rem;color:var(--ink3);max-width:340px;line-height:1.5}

/* ADMIN */
.adm-section{margin-bottom:2rem}
.adm-title{font-weight:800;font-size:1rem;margin-bottom:.75rem;padding-bottom:6px;display:inline-block;letter-spacing:.3px;background:var(--grad-tri);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;border-bottom:2px solid transparent;border-image:var(--grad-tri) 1}
.adm-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:.75rem}
.adm-card{background:var(--surface);border:1.5px solid var(--border);border-radius:var(--rad);padding:14px;box-shadow:var(--sh)}
.adm-card-hd{font-size:.68rem;font-weight:700;text-transform:uppercase;letter-spacing:.7px;color:var(--ink3);margin-bottom:10px}
.res-row{display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:8px}
.rteam{display:flex;align-items:center;gap:6px;font-size:.78rem;font-weight:600;flex:1;overflow:hidden}
.rteam.r{flex-direction:row-reverse;text-align:right}
.sinp{width:34px;height:34px;text-align:center;border:2px solid var(--border);border-radius:8px;font-weight:800;font-size:1rem;outline:none;transition:border-color .2s;color:var(--ink);background:var(--bg);font-family:"Plus Jakarta Sans"}
.sinp:focus{border-color:var(--green)}
.dash{color:var(--ink3);font-weight:700}
.sv-btn{width:100%;padding:7px;border:1.5px solid var(--border);border-radius:8px;background:var(--surface);color:var(--ink2);font-size:.75rem;font-weight:600;cursor:pointer;transition:all .2s}
.sv-btn:hover{background:var(--grad-gb);color:#fff;border-color:transparent}
.sv-btn.ok{background:var(--g-bg);border-color:var(--green2);color:var(--green)}
.cu-form{background:var(--surface);border:1.5px solid var(--border);border-radius:var(--rad);padding:1.25rem;box-shadow:var(--sh);margin-bottom:1rem}
.cu-grid{display:grid;grid-template-columns:1fr 1fr 1fr auto;gap:.75rem;align-items:end}
.cu-field label{display:block;font-size:.68rem;font-weight:700;text-transform:uppercase;letter-spacing:.8px;color:var(--ink3);margin-bottom:5px}
.cu-field input{width:100%;padding:9px 12px;border:1.5px solid var(--border);border-radius:8px;font-family:"Plus Jakarta Sans";font-size:.88rem;color:var(--ink);outline:none;transition:border-color .2s;background:var(--bg)}
.cu-field input:focus{border-color:var(--green);background:var(--surface)}
.cu-field input.code-inp{font-weight:800;letter-spacing:3px;text-transform:uppercase;font-size:1rem}
.cu-add-btn{padding:10px 18px;background:var(--grad-gb);color:#fff;border:none;border-radius:8px;font-family:"Plus Jakarta Sans";font-weight:700;font-size:.85rem;cursor:pointer;white-space:nowrap;transition:opacity .2s;height:38px;box-shadow:0 2px 8px rgba(0,104,56,.2)}
.cu-add-btn:hover{opacity:.88}
.cu-err{font-size:.75rem;color:var(--red);margin-top:6px}
.cu-hint{font-size:.72rem;color:var(--ink3);margin-top:8px;line-height:1.5}
.users-tbl-wrap{background:var(--surface);border:1.5px solid var(--border);border-radius:var(--rad);overflow:hidden;box-shadow:var(--sh)}
.del-btn{background:none;border:none;color:var(--red);cursor:pointer;font-size:.78rem;padding:3px 6px;border-radius:4px;transition:background .15s}
.del-btn:hover{background:var(--r-bg)}

/* LIVE SCORES */
.live-bar{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:.75rem;background:var(--surface);border:1.5px solid var(--border);border-radius:var(--rad);padding:.875rem 1.25rem;margin-bottom:1rem;box-shadow:var(--sh)}
.live-status{display:flex;align-items:center;gap:8px;font-size:.82rem;font-weight:600}
.live-dot{width:8px;height:8px;border-radius:50%;background:var(--ink3)}
.live-dot.on{background:var(--green);animation:pulse 2s infinite}
@keyframes pulse{0%,100%{opacity:1}50%{opacity:.35}}
.live-last{font-size:.72rem;color:var(--ink3)}
.live-btns{display:flex;gap:.5rem;flex-wrap:wrap}
.live-btn{padding:7px 14px;border-radius:8px;border:1.5px solid var(--border);background:var(--surface);font-family:"Plus Jakarta Sans";font-weight:600;font-size:.78rem;cursor:pointer;transition:all .2s;color:var(--ink2)}
.live-btn:hover{border-color:var(--green);color:var(--green)}
.live-btn.primary{background:var(--grad-gb);color:#fff;border:none;box-shadow:0 2px 8px rgba(0,104,56,.2)}.live-btn.primary:hover{opacity:.88}
.live-btn.danger{color:var(--red);border-color:var(--r-bg)}.live-btn.danger:hover{background:var(--r-bg)}

/* TOAST */
#toast{position:fixed;bottom:1.5rem;left:50%;transform:translateX(-50%) translateY(80px);background:var(--grad-tri);color:#fff;border-radius:8px;padding:10px 20px;font-size:.82rem;transition:transform .3s;z-index:600;white-space:nowrap;pointer-events:none;box-shadow:0 4px 16px rgba(0,0,0,.2);font-weight:600}
#toast.show{transform:translateX(-50%) translateY(0)}

/* FAB */
.fab{position:fixed;bottom:1.5rem;right:1.5rem;z-index:300;background:var(--grad-tri);color:#fff;border:none;border-radius:50px;padding:12px 22px;font-family:"Plus Jakarta Sans";font-weight:700;font-size:.85rem;cursor:pointer;box-shadow:0 4px 20px rgba(0,0,0,.25);transition:all .2s;text-transform:uppercase;letter-spacing:.5px;display:none}
.fab:hover{opacity:.9;transform:translateY(-2px)}
.fab.vis{display:block}

/* REGLAS */
.rules-wrap{max-width:780px}
/* ── REGLAS v2 ── */

/* Filter tabs */
.rules-filter-bar{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:14px}
.rules-ftab{background:var(--surface);border:1px solid var(--border);border-radius:10px;padding:7px 12px;font-size:.74rem;font-weight:700;color:var(--ink2);cursor:pointer;font-family:'Plus Jakarta Sans',sans-serif;transition:all .15s;display:inline-flex;align-items:center;gap:5px;white-space:nowrap}
body.dark .rules-ftab{background:#161a2e}
.rules-ftab:hover{border-color:var(--blue2);color:var(--blue2)}
.rules-ftab.on{background:var(--ink);border-color:var(--ink);color:var(--surface)}
body.dark .rules-ftab.on{background:var(--surface);color:var(--ink);border-color:var(--surface)}

/* Section card */
.rules-section{background:var(--surface);border:1px solid var(--border);border-radius:18px;overflow:hidden;margin-bottom:10px;box-shadow:0 4px 12px rgba(10,14,26,.04);transition:box-shadow .2s}
body.dark .rules-section{background:#161a2e}
.rules-section:hover{box-shadow:0 8px 22px rgba(10,14,26,.07)}

/* Reveal stagger */
.rules-section.rg-reveal{opacity:0;transform:translateY(14px);transition:opacity .5s cubic-bezier(.22,1,.36,1),transform .5s cubic-bezier(.22,1,.36,1);transition-delay:calc(var(--rg-i,0) * 60ms)}
.rules-section.rg-reveal.show{opacity:1;transform:translateY(0)}
@media (prefers-reduced-motion:reduce){
  .rules-section.rg-reveal{opacity:1;transform:none;transition:none}
}

.rules-section-hd{display:flex;align-items:center;gap:14px;padding:14px 18px;cursor:pointer;user-select:none;transition:background .15s}
.rules-section-hd:hover{background:var(--bg)}
body.dark .rules-section-hd:hover{background:#0c0f1c}
.rules-icon-wrap{width:42px;height:42px;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:1.3rem;flex-shrink:0;color:#fff;box-shadow:0 4px 12px rgba(0,0,0,.1)}
.rules-section-meta{flex:1;min-width:0}
.rules-section-title{font-weight:800;font-size:.92rem;color:var(--ink);letter-spacing:-.2px;line-height:1.2}
.rules-section-sub{font-size:.74rem;color:var(--ink3);font-weight:600;margin-top:2px}
.rules-section-chevron{font-size:.68rem;color:var(--ink3);transition:transform .25s,background .25s,color .25s;flex-shrink:0;width:24px;height:24px;display:flex;align-items:center;justify-content:center;border-radius:50%;background:var(--bg)}
body.dark .rules-section-chevron{background:#0c0f1c}
.rules-section.open .rules-section-chevron{transform:rotate(180deg);background:var(--b-bg);color:var(--blue2)}

.rules-body{font-size:.83rem;color:var(--ink2);line-height:1.65;padding:0 18px;max-height:0;overflow:hidden;transition:max-height .35s cubic-bezier(.22,1,.36,1),padding .35s,border-color .35s;border-top:1px solid transparent}
.rules-section.open .rules-body{max-height:2400px;padding:14px 18px;border-top-color:var(--border)}
.rules-body p{margin-bottom:10px}
.rules-body p:last-child{margin-bottom:0}
.rules-body b{color:var(--ink);font-weight:800}
.rules-body ul{padding-left:1.25rem;margin:.5rem 0}
.rules-body li{margin-bottom:.5rem}

/* Phase headers dentro del body */
.rules-phase-h{font-weight:800;color:var(--ink);font-size:.85rem;margin:10px 0 4px;display:flex;align-items:center;gap:6px}
.rules-phase-h .ico{font-size:.95rem}

/* Tabla puntos modernizada */
.rules-pts-table{width:100%;border-collapse:collapse;margin:8px 0 10px;border-radius:12px;overflow:hidden;border:1px solid var(--border);background:var(--surface)}
body.dark .rules-pts-table{background:#161a2e}
.rules-pts-table th{background:var(--bg);padding:8px 12px;font-size:.6rem;font-weight:800;text-transform:uppercase;letter-spacing:1.2px;color:var(--ink3);text-align:left;border-bottom:1px solid var(--border)}
body.dark .rules-pts-table th{background:#0c0f1c}
.rules-pts-table th:last-child,.rules-pts-table td:last-child{text-align:right}
.rules-pts-table td{padding:10px 12px;border-bottom:1px solid var(--border);font-size:.82rem;color:var(--ink2)}
.rules-pts-table tr:last-child td{border-bottom:none}
.rules-pts-table tr:hover td{background:var(--bg)}
body.dark .rules-pts-table tr:hover td{background:#0c0f1c}
.rules-pts-table .pt-round{font-weight:800;color:var(--ink)}
.rules-pts-table .pt-win{font-weight:800;font-size:.78rem;padding:3px 9px;border-radius:7px;display:inline-block;font-variant-numeric:tabular-nums;color:var(--green);background:var(--g-bg)}
.rules-pts-table .pt-exact{font-weight:800;font-size:.78rem;padding:3px 9px;border-radius:7px;display:inline-block;font-variant-numeric:tabular-nums;color:#c8900a;background:var(--gld-bg)}
.rules-pts-table .pt-max{font-weight:800;font-size:.78rem;padding:3px 9px;border-radius:7px;display:inline-block;font-variant-numeric:tabular-nums;color:var(--blue2);background:var(--b-bg)}

/* Timeline */
.rules-timeline{display:flex;flex-direction:column;gap:0;margin:6px 0}
.rules-tl-item{display:flex;gap:12px;align-items:flex-start;padding:10px 0;border-bottom:1px solid var(--border)}
.rules-tl-item:last-child{border-bottom:none}
.rules-tl-dot{width:10px;height:10px;border-radius:50%;flex-shrink:0;margin-top:7px}
.rules-tl-num{width:24px;height:24px;border-radius:50%;background:var(--grad-tri);color:#fff;font-size:.7rem;font-weight:800;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:1px}
.rules-tl-content{flex:1}
.rules-tl-label{font-size:.6rem;font-weight:800;text-transform:uppercase;letter-spacing:1px;color:var(--ink3)}
.rules-tl-val{font-size:.85rem;font-weight:700;color:var(--ink);margin-top:2px;line-height:1.4}

/* Chips */
.rules-chips{display:flex;flex-wrap:wrap;gap:6px;margin:4px 0 10px}
.rules-chip{display:inline-flex;align-items:center;gap:5px;background:var(--bg);border:1px solid var(--border);border-radius:10px;padding:6px 11px;font-size:.78rem;font-weight:700;color:var(--ink2)}
body.dark .rules-chip{background:#0c0f1c}
.rules-chip-icon{font-size:.95rem}

/* Notas / alertas */
.rules-note{font-size:.74rem;color:var(--ink3);font-style:italic;margin-top:8px;padding:8px 12px;border-left:3px solid var(--border);background:var(--bg);border-radius:0 8px 8px 0;line-height:1.5}
body.dark .rules-note{background:#0c0f1c}
.rules-note.warn{color:#8a5a00;border-left-color:#c8900a;background:rgba(255,200,80,.1);font-style:normal;font-weight:600}
body.dark .rules-note.warn{color:#f0b030;background:rgba(232,170,30,.08)}
.rules-note.warn b{color:inherit}

/* Bonus box (referidos) */
.rules-bonus{background:linear-gradient(135deg,#fff9e6,#fffef8);border:2px solid rgba(232,170,30,.4);border-radius:14px;padding:12px 16px;margin-bottom:10px;display:flex;gap:12px;align-items:flex-start}
body.dark .rules-bonus{background:linear-gradient(135deg,#2a1e00,#1a1300)}
.rules-bonus-icon{font-size:1.8rem;flex-shrink:0;line-height:1}
.rules-bonus-meta{flex:1;min-width:0}
.rules-bonus-h{font-weight:800;color:#c8900a;font-size:.86rem;margin-bottom:3px}
body.dark .rules-bonus-h{color:#f0b030}
.rules-bonus-s{font-size:.78rem;color:var(--ink2);line-height:1.5}

/* Prize box dentro del body */
.rules-prizebox{background:linear-gradient(135deg,#006838,#003087,#c0001a);border-radius:14px;padding:14px 18px;color:#fff;margin-bottom:10px;display:flex;align-items:center;justify-content:space-between;gap:14px;position:relative;overflow:hidden;box-shadow:0 8px 22px rgba(0,48,135,.18)}
.rules-prizebox::before{content:"";position:absolute;top:-30px;right:-30px;width:120px;height:120px;background:radial-gradient(circle,rgba(255,255,255,.18),transparent 65%);pointer-events:none}
.rules-prizebox-l{position:relative;z-index:1}
.rules-prizebox-lbl{font-size:.62rem;font-weight:800;text-transform:uppercase;letter-spacing:1.3px;opacity:.85;margin-bottom:2px}
.rules-prizebox-amt{font-size:1.6rem;font-weight:800;line-height:1;letter-spacing:-.5px;font-variant-numeric:tabular-nums}
.rules-prizebox-sub{font-size:.7rem;opacity:.85;margin-top:3px;font-weight:500}
.rules-prizebox-icon{font-size:2.4rem;position:relative;z-index:1;opacity:.85;line-height:1}

@media (max-width:520px){
  .rules-section-hd{padding:12px 14px;gap:10px}
  .rules-icon-wrap{width:38px;height:38px;font-size:1.15rem}
  .rules-section-title{font-size:.86rem}
  .rules-section-sub{font-size:.68rem}
  .rules-body{padding:0 14px;font-size:.8rem}
  .rules-section.open .rules-body{padding:12px 14px}
  .rules-pts-table td,.rules-pts-table th{padding:8px 10px;font-size:.74rem}
}

.rpt{background:var(--bg);border:1.5px solid var(--border);border-radius:8px;padding:.75rem 1rem;display:flex;align-items:center;gap:10px}
.rpt-num{font-weight:800;font-size:1.3rem;color:var(--green);min-width:28px;text-align:center}
.rpt-label{font-size:.78rem;color:var(--ink2);line-height:1.4}

/* WALL — Design A */
/* ── MURO v2 ── */

/* Disclaimer (más sutil) */
.wall-disclaimer{font-size:.72rem;color:var(--ink3);text-align:center;padding:8px 14px;margin-bottom:12px;line-height:1.5;background:var(--bg);border-radius:12px;border:1px solid var(--border)}
body.dark .wall-disclaimer{background:#0c0f1c}
.wall-disclaimer strong{color:var(--ink);font-weight:700}

/* Compose */
.wall-compose{background:var(--surface);border-radius:20px;padding:14px 16px;margin-bottom:14px;border:1.5px solid var(--border);box-shadow:0 4px 14px rgba(10,14,26,.04);transition:border-color .2s,box-shadow .2s}
body.dark .wall-compose{background:#161a2e}
.wall-compose:focus-within{border-color:var(--blue2);box-shadow:0 8px 24px rgba(0,82,204,.1)}
.wall-compose-top{display:flex;gap:10px;align-items:flex-start;position:relative}
.wall-compose textarea{flex:1;border:none;outline:none;font-family:'Plus Jakarta Sans',sans-serif;font-size:.88rem;color:var(--ink);background:transparent;resize:none;line-height:1.5;min-height:48px;box-sizing:border-box;padding-top:6px}
.wall-compose textarea::placeholder{color:var(--ink3);opacity:.7}
.wall-compose-footer{display:flex;align-items:center;justify-content:space-between;margin-top:10px;padding-top:10px;border-top:1px solid var(--border)}
.wall-char-count{font-size:.7rem;color:var(--ink3);font-weight:600}
.wall-post-btn{padding:8px 22px;background:var(--grad-tri);color:#fff;border:none;border-radius:14px;font-family:'Plus Jakarta Sans',sans-serif;font-weight:800;font-size:.82rem;cursor:pointer;letter-spacing:.3px;display:inline-flex;align-items:center;gap:6px;box-shadow:0 4px 14px rgba(0,82,204,.18);transition:transform .15s}
.wall-post-btn:hover{transform:translateY(-1px)}
.wall-post-btn:disabled{opacity:.4;cursor:not-allowed;transform:none}

/* Section title (Recientes) */
.wall-section-h{font-size:.66rem;font-weight:800;color:var(--ink3);letter-spacing:1.5px;text-transform:uppercase;padding:8px 4px 10px;display:flex;align-items:center;gap:7px}
.wall-section-h::before,.wall-section-h::after{content:"";flex:1;height:1px;background:linear-gradient(90deg,transparent,var(--border),transparent)}

/* Post */
.wall-post{background:var(--surface);border-radius:20px;padding:16px 18px;box-shadow:0 4px 14px rgba(10,14,26,.04);margin-bottom:10px;border:1px solid var(--border);transition:transform .2s cubic-bezier(.22,1,.36,1),box-shadow .2s,border-color .2s}
body.dark .wall-post{background:#161a2e}
.wall-post:hover{box-shadow:0 8px 22px rgba(10,14,26,.07)}

/* Reveal on-scroll */
.wall-post.wp-reveal{opacity:0;transform:translateY(14px);transition:opacity .55s cubic-bezier(.22,1,.36,1),transform .55s cubic-bezier(.22,1,.36,1);transition-delay:calc(var(--wp-i,0) * 50ms)}
.wall-post.wp-reveal.show{opacity:1;transform:translateY(0)}
@media (prefers-reduced-motion:reduce){
  .wall-post.wp-reveal{opacity:1;transform:none;transition:none}
}

/* Mention links */
.wall-mention{display:inline-block;color:var(--blue2);font-weight:700;cursor:pointer;text-decoration:none;transition:color .15s}
.wall-mention:hover{color:var(--green);text-decoration:underline}
body.dark .wall-mention{color:#3d87ff}
body.dark .wall-mention:hover{color:#00c46a}

/* Mention picker (autocompletado al escribir @) */
.wall-mention-picker{position:absolute;background:var(--surface);border:1px solid var(--border);border-radius:14px;box-shadow:0 12px 28px rgba(10,14,26,.16);z-index:100;min-width:200px;max-width:280px;max-height:240px;overflow-y:auto;padding:6px;animation:wmpIn .18s ease-out}
body.dark .wall-mention-picker{background:#1a1f33}
@keyframes wmpIn{from{opacity:0;transform:translateY(-6px)}to{opacity:1;transform:translateY(0)}}
.wall-mention-item{display:flex;align-items:center;gap:9px;padding:8px 10px;border-radius:10px;cursor:pointer;transition:background .12s}
.wall-mention-item:hover,.wall-mention-item.active{background:var(--bg)}
body.dark .wall-mention-item:hover,body.dark .wall-mention-item.active{background:#0c0f1c}
.wall-mention-av{width:26px;height:26px;border-radius:50%;background:var(--grad-tri);color:#fff;font-weight:800;font-size:.6rem;display:flex;align-items:center;justify-content:center;flex-shrink:0}
.wall-mention-name{font-weight:800;font-size:.82rem;color:var(--ink);flex:1;min-width:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.wall-mention-empty{padding:14px 12px;text-align:center;color:var(--ink3);font-size:.78rem;font-weight:600}

/* Comments */
.wall-comment-body{flex:1;background:var(--bg);border-radius:4px 14px 14px 14px;padding:7px 11px;box-shadow:0 1px 4px rgba(0,0,0,.06)}
body.dark .wall-comment-body{background:#0c0f1c}
.wall-comment-user{font-weight:800;font-size:.74rem;color:var(--blue2);margin-bottom:2px}
.wall-comment-text{font-size:.82rem;color:var(--ink2);line-height:1.5;word-break:break-word}
.wall-comment-footer{display:flex;gap:.75rem;align-items:center;margin-top:4px}
.wall-comment-time{font-size:.63rem;color:var(--ink3);font-weight:600}
.wall-comment-input{display:none;margin-top:.5rem;gap:.5rem;position:relative}
.wall-comment-input.open{display:flex}
.wall-comment-input input{flex:1;padding:8px 14px;border:1.5px solid var(--border);border-radius:20px;background:var(--bg);color:var(--ink);font-family:'Plus Jakarta Sans',sans-serif;font-size:.82rem;outline:none;transition:border-color .15s}
body.dark .wall-comment-input input{background:#0c0f1c}
.wall-comment-input input:focus{border-color:var(--blue2)}
.wall-comment-input button{padding:8px 18px;background:var(--grad-tri);color:#fff;border:none;border-radius:20px;font-family:'Plus Jakarta Sans',sans-serif;font-weight:800;font-size:.78rem;cursor:pointer;flex-shrink:0}

.wall-muted-banner{background:var(--r-bg);border:1.5px solid var(--red);border-radius:16px;padding:1rem 1.25rem;margin-bottom:1rem;font-size:.85rem;color:var(--red);font-weight:600;line-height:1.5}
.wall-comment{display:flex;gap:8px;align-items:flex-start}
.wall-comment.reply{margin-left:1.5rem;padding-left:.75rem;border-left:2px solid var(--border)}
.wall-comments{margin-top:.75rem;padding-top:.75rem;border-top:1px solid var(--border);display:flex;flex-direction:column;gap:.5rem}
.wall-action-btn{background:none;border:none;cursor:pointer;font-size:.78rem;font-weight:700;color:var(--ink3);padding:0;font-family:'Plus Jakarta Sans',sans-serif;transition:color .15s}
.wall-action-btn:hover{color:var(--blue2)}

/* CHANGELOG */
.changelog-list{display:flex;flex-direction:column;gap:.5rem;max-height:400px;overflow-y:auto}
.cl-item{display:flex;gap:12px;align-items:flex-start;padding:.75rem;background:var(--surface);border:1px solid var(--border);border-radius:8px;font-size:.8rem}
.cl-dot{width:8px;height:8px;border-radius:50%;background:var(--green);margin-top:5px;flex-shrink:0}
.cl-dot.manual{background:var(--gld)}.cl-dot.auto{background:var(--blue2)}
.cl-time{font-size:.68rem;color:var(--ink3);white-space:nowrap}
.cl-text{color:var(--ink2);flex:1;line-height:1.5}
.cl-badge{font-size:.62rem;padding:1px 6px;border-radius:10px;font-weight:700;margin-left:4px}
.cl-auto{background:var(--b-bg);color:var(--blue2)}.cl-manual{background:var(--gld-bg);color:var(--gld)}

/* EXPORT */
.export-btn{display:inline-flex;align-items:center;gap:6px;padding:8px 16px;background:var(--surface);border:1.5px solid var(--border);border-radius:8px;font-family:"Plus Jakarta Sans";font-weight:600;font-size:.8rem;cursor:pointer;transition:all .2s;color:var(--ink2)}
.export-btn:hover{background:var(--grad-tri);color:#fff;border-color:transparent}

/* MI QUINIELA */
/* ── MI QUINIELA v2 ── */
.mq-stats{display:grid;grid-template-columns:repeat(5,1fr);gap:10px;margin-top:18px;position:relative;z-index:1}
.mq-stat{background:var(--surface);border:1px solid var(--border);border-radius:14px;padding:14px 10px;text-align:center;transition:transform .2s cubic-bezier(.22,1,.36,1),box-shadow .2s,border-color .2s;position:relative;overflow:hidden}
body.dark .mq-stat{background:#161a2e}
.mq-stat:hover{transform:translateY(-2px);box-shadow:0 8px 20px rgba(10,14,26,.06);border-color:var(--ink3)}
.mq-stat-icon{font-size:1.15rem;line-height:1;margin-bottom:6px}
.mq-stat-num{font-weight:800;font-size:1.4rem;line-height:1;letter-spacing:-.5px;font-variant-numeric:tabular-nums;margin-bottom:4px;color:var(--ink)}
.mq-stat-label{font-size:.6rem;font-weight:800;color:var(--ink3);letter-spacing:1.2px;text-transform:uppercase;line-height:1.2}
.mq-stat.pts .mq-stat-num{color:var(--ink)}
.mq-stat.exact .mq-stat-num{color:#c8900a}
.mq-stat.correct .mq-stat-num{color:var(--green2)}
.mq-stat.wrong .mq-stat-num{color:var(--r)}
.mq-stat.pending .mq-stat-num{color:var(--ink3)}
@media (max-width:600px){
  .mq-stats{grid-template-columns:repeat(5,1fr);gap:6px}
  .mq-stat{padding:12px 6px}
  .mq-stat-num{font-size:1.2rem}
  .mq-stat-label{font-size:.55rem;letter-spacing:.8px}
}
@media (max-width:400px){
  .mq-stats{grid-template-columns:repeat(3,1fr)}
}

/* FILTERS */
.mq-filters{margin-bottom:14px;display:flex;flex-direction:column;gap:8px}
.mq-filter{display:flex;flex-wrap:wrap;gap:6px}
.mq-f-btn{background:var(--surface);border:1px solid var(--border);border-radius:10px;padding:7px 12px;font-size:.74rem;font-weight:700;color:var(--ink2);cursor:pointer;font-family:'Plus Jakarta Sans',sans-serif;transition:all .15s;display:inline-flex;align-items:center;gap:5px}
body.dark .mq-f-btn{background:#161a2e}
.mq-f-btn:hover:not(.active){border-color:var(--blue2);color:var(--blue2)}
.mq-f-btn.active{background:var(--ink);border-color:var(--ink);color:var(--surface)}
body.dark .mq-f-btn.active{background:var(--surface);color:var(--ink);border-color:var(--surface)}
.mq-f-count{font-size:.6rem;font-weight:800;background:rgba(0,0,0,.08);padding:1px 6px;border-radius:6px;margin-left:2px;line-height:1.4}
body.dark .mq-f-count{background:rgba(255,255,255,.08)}
.mq-f-btn.active .mq-f-count{background:rgba(255,255,255,.2)}
body.dark .mq-f-btn.active .mq-f-count{background:rgba(0,0,0,.2)}

/* SECTIONS */
.mq-section{background:var(--surface);border:1px solid var(--border);border-radius:18px;overflow:hidden;margin-bottom:14px;box-shadow:0 4px 12px rgba(10,14,26,.04)}
body.dark .mq-section{background:#161a2e}
.mq-section.mq-reveal{opacity:0;transform:translateY(16px);transition:opacity .55s cubic-bezier(.22,1,.36,1),transform .55s cubic-bezier(.22,1,.36,1);transition-delay:calc(var(--mqs-i,0) * 80ms)}
.mq-section.mq-reveal.show{opacity:1;transform:translateY(0)}
@media (prefers-reduced-motion:reduce){
  .mq-section.mq-reveal{opacity:1;transform:none;transition:none}
}
.mq-section-hd{padding:14px 18px;display:flex;align-items:center;justify-content:space-between;background:linear-gradient(120deg,var(--bg),var(--surface));border-bottom:1px solid var(--border)}
body.dark .mq-section-hd{background:linear-gradient(120deg,#0c0f1c,#161a2e)}
.mq-section-name{font-weight:800;font-size:.92rem;color:var(--ink);letter-spacing:-.2px}
.mq-section-pts{background:var(--b-bg);color:var(--blue2);font-size:.74rem;font-weight:800;padding:4px 11px;border-radius:8px;letter-spacing:.2px;font-variant-numeric:tabular-nums}
.mq-section-pts.zero{background:var(--bg);color:var(--ink3)}
body.dark .mq-section-pts.zero{background:#0c0f1c}

/* HEADER ROW */
.mq-row-h{display:grid;grid-template-columns:1fr 80px 80px 48px;gap:10px;padding:8px 18px;font-size:.6rem;font-weight:800;color:var(--ink3);letter-spacing:1.2px;text-transform:uppercase;background:var(--bg);border-bottom:1px solid var(--border)}
body.dark .mq-row-h{background:#0c0f1c}
.mq-row-h .h-c{text-align:center}

/* MATCH ROWS */
.mq-row{display:grid;grid-template-columns:1fr 80px 80px 48px;gap:10px;align-items:center;padding:12px 18px;border-bottom:1px solid var(--border);transition:background .15s}
.mq-row:last-child{border-bottom:none}
.mq-row:hover{background:var(--bg)}
body.dark .mq-row:hover{background:#0c0f1c}
.mq-row.exact{background:linear-gradient(90deg,rgba(232,170,30,.1),transparent)}
.mq-row.correct{background:linear-gradient(90deg,rgba(0,196,106,.06),transparent)}
.mq-row.wrong{opacity:.65}
.mq-row.pending .mq-score-real{color:var(--ink3)}

.mq-match-name{display:flex;align-items:center;gap:8px;font-size:.85rem;font-weight:700;color:var(--ink);min-width:0}
.mq-match-flags{font-size:1.1rem;flex-shrink:0;display:inline-flex;gap:3px;line-height:1}
.mq-match-text{flex:1;min-width:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}

.mq-score{font-weight:800;font-size:.88rem;font-variant-numeric:tabular-nums;text-align:center;padding:5px 8px;border-radius:8px;min-width:44px}
.mq-score-mine{background:var(--b-bg);color:var(--blue2)}
.mq-score-real{background:var(--bg);color:var(--ink);border:1px solid var(--border)}
body.dark .mq-score-real{background:#0c0f1c}
.mq-row.exact .mq-score-real{background:rgba(232,170,30,.18);color:#8a5a00;border-color:transparent}
body.dark .mq-row.exact .mq-score-real{color:#f0b830}
.mq-row.correct .mq-score-real{background:var(--g-bg);color:var(--green);border-color:transparent}
.mq-row.wrong .mq-score-real{background:var(--r-bg);color:var(--r);border-color:transparent}
.mq-score-pending{color:var(--ink3);font-weight:600;font-style:italic;background:transparent;border:none}

.mq-result-icon{font-size:1.05rem;line-height:1;width:36px;height:36px;display:flex;align-items:center;justify-content:center;border-radius:50%;flex-shrink:0;background:var(--bg);position:relative;justify-self:center}
body.dark .mq-result-icon{background:#0c0f1c}
.mq-row.exact .mq-result-icon{background:linear-gradient(135deg,rgba(255,200,80,.4),rgba(232,170,30,.25));box-shadow:0 0 0 3px rgba(232,170,30,.18)}
.mq-row.correct .mq-result-icon{background:var(--g-bg);box-shadow:0 0 0 3px rgba(0,196,106,.15)}
.mq-row.wrong .mq-result-icon{background:var(--r-bg)}
.mq-pts-badge{position:absolute;bottom:-5px;right:-8px;font-size:.55rem;font-weight:800;padding:1px 5px;border-radius:5px;color:#fff;letter-spacing:.3px;line-height:1.4;font-variant-numeric:tabular-nums}
.mq-row.exact .mq-pts-badge{background:#c8900a}
.mq-row.correct .mq-pts-badge{background:var(--green2)}

.mq-elim-rnd{font-size:.6rem;font-weight:800;text-transform:uppercase;letter-spacing:.8px;padding:2px 7px;border-radius:6px;margin-left:6px;vertical-align:middle}
.rnd-r32{background:var(--border);color:var(--ink3)}
.rnd-r16{background:var(--b-bg);color:var(--blue2)}
.rnd-qf{background:var(--g-bg);color:var(--green)}
.rnd-sf{background:var(--r-bg);color:var(--r)}
.rnd-f{background:var(--gld-bg);color:var(--gld)}

@media (max-width:520px){
  .mq-row,.mq-row-h{grid-template-columns:1fr 56px 56px 40px;padding:10px 12px;gap:6px}
  .mq-section-hd{padding:12px 14px}
  .mq-match-name{font-size:.78rem;gap:6px}
  .mq-match-flags{font-size:.95rem}
  .mq-score{font-size:.78rem;padding:4px 6px;min-width:auto}
  .mq-result-icon{width:32px;height:32px;font-size:.95rem}
  .mq-pts-badge{font-size:.5rem;padding:1px 4px}
}

/* ── HAMBURGER + DRAWER ── */
.ham-btn{
  width:36px;height:36px;border-radius:9px;border:none;background:rgba(255,255,255,.1);
  cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;
  gap:5px;transition:background .15s;flex-shrink:0;
}
.ham-btn:hover{background:rgba(255,255,255,.18)}
.ham-line{width:18px;height:2px;border-radius:2px}
.ham-line:nth-child(1){background:#006838}
.ham-line:nth-child(2){background:#003087}
.ham-line:nth-child(3){background:#c0001a}

/* drawer overlay */
#drawer-overlay{
  display:none;position:fixed;inset:0;z-index:500;background:rgba(10,14,26,.45);
  backdrop-filter:blur(3px);
}
#drawer-overlay.open{display:block}

/* drawer panel */
#drawer{
  position:fixed;top:0;left:0;bottom:0;z-index:501;width:280px;
  background:var(--surface);box-shadow:4px 0 32px rgba(10,14,26,.18);
  display:flex;flex-direction:column;
  transform:translateX(-100%);transition:transform .3s cubic-bezier(0.4,0,0.2,1);
  overflow-y:auto;
  overflow-x:hidden;
}
#drawer.open{transform:translateX(0)}
body.dark #drawer{background:#111525;box-shadow:4px 0 32px rgba(0,0,0,.5)}

.drawer-header{
  padding:1.25rem 1.25rem 1rem;
  border-bottom:1px solid var(--border);
  display:flex;align-items:center;justify-content:space-between;
}
.drawer-logo{display:flex;align-items:center;gap:10px;font-weight:800;font-size:1rem;letter-spacing:-.2px;
  background:var(--grad-tri);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.drawer-close{
  width:32px;height:32px;border-radius:8px;border:none;background:var(--border);
  cursor:pointer;font-size:1rem;display:flex;align-items:center;justify-content:center;
  color:var(--ink2);transition:background .15s;
}
.drawer-close:hover{background:var(--border2)}

.drawer-section{padding:.75rem 1rem .25rem;font-size:.65rem;font-weight:700;text-transform:uppercase;
  letter-spacing:1.5px;color:var(--ink3)}

.drawer-item{
  display:flex;align-items:center;padding:15px 1.5rem;
  font-size:1rem;font-weight:700;color:var(--ink2);cursor:pointer;
  border:none;background:none;width:100%;text-align:left;transition:all .15s;
}
.drawer-item:hover{background:var(--bg);color:var(--ink)}
.drawer-item.active-item{color:var(--green);background:var(--g-bg)}
.drawer-item-sep{
  height:2px;
  margin:0 1.5rem;
  background:var(--grad-tri);
  border-radius:2px;
  opacity:.4;
}
.drawer-divider{height:2px;background:var(--grad-tri);margin:.5rem 1.25rem;border-radius:2px;opacity:.6}

.drawer-footer{padding:1rem 1.25rem;border-top:1px solid var(--border);display:flex;flex-direction:column;gap:.5rem;margin-top:auto}
.drawer-code-box{
  background:var(--g-bg);border:1.5px solid var(--green2);border-radius:10px;
  padding:10px 14px;display:flex;align-items:center;justify-content:space-between;cursor:pointer;
  transition:opacity .15s;
}
.drawer-code-box:hover{opacity:.85}
.drawer-code-label{font-size:.65rem;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:var(--green);margin-bottom:2px}
.drawer-code-val{font-weight:800;font-size:1.3rem;color:var(--green);letter-spacing:3px}
.drawer-mode-btn{
  display:flex;align-items:center;gap:10px;padding:9px 12px;border-radius:9px;
  border:1.5px solid var(--border);background:var(--surface);cursor:pointer;
  font-family:'Plus Jakarta Sans';font-weight:600;font-size:.85rem;color:var(--ink2);
  transition:all .15s;
}
.drawer-mode-btn:hover{border-color:var(--green);color:var(--green)}
.drawer-logout{
  display:flex;align-items:center;gap:10px;padding:9px 12px;border-radius:9px;
  border:1.5px solid var(--r-bg);background:var(--surface);cursor:pointer;
  font-family:'Plus Jakarta Sans';font-weight:600;font-size:.85rem;color:var(--red);
  transition:all .15s;width:100%;text-align:left;
}
.drawer-logout:hover{background:var(--r-bg)}
#adm-modal{
  display:none;position:fixed;inset:0;z-index:800;
  background:rgba(10,14,26,.6);backdrop-filter:blur(6px);
  align-items:center;justify-content:center;padding:1rem;
}
#adm-modal.open{display:flex}
#welcome-modal.open{display:flex}
#ref-modal.open{display:flex}
#ref-screen.open{display:flex}
#br-score-modal.open{display:flex}
.adm-modal-box{
  background:var(--surface);border-radius:16px;padding:1.75rem;
  width:100%;max-width:320px;box-shadow:0 24px 60px rgba(0,0,0,.25);
  border:1px solid var(--border);
}
.adm-modal-title{font-weight:800;font-size:1rem;margin-bottom:.25rem;color:var(--ink)}
.adm-modal-sub{font-size:.8rem;color:var(--ink3);margin-bottom:1.25rem;line-height:1.5}
.adm-modal-input{
  width:100%;padding:10px 12px;border:2px solid var(--border);border-radius:8px;
  font-family:'Plus Jakarta Sans';font-size:1rem;font-weight:700;
  letter-spacing:3px;color:var(--ink);background:var(--bg);
  outline:none;transition:border-color .2s;margin-bottom:1rem;
}
.adm-modal-input:focus{border-color:var(--green)}
.adm-modal-btns{display:flex;gap:8px}
.adm-modal-btn{
  flex:1;padding:10px;border-radius:8px;font-family:'Plus Jakarta Sans';
  font-weight:700;font-size:.85rem;cursor:pointer;transition:all .2s;border:1.5px solid var(--border);
}
.adm-modal-btn.cancel{background:var(--surface);color:var(--ink2)}.adm-modal-btn.cancel:hover{background:var(--bg)}
.adm-modal-btn.confirm{background:var(--grad-gb);color:#fff;border:none}.adm-modal-btn.confirm:hover{opacity:.9}
.adm-modal-btn.danger{background:var(--red);color:#fff;border:none}.adm-modal-btn.danger:hover{background:var(--red2)}
/* ── RESPONSIVE MÓVIL ── */
@media(max-width:768px){
  /* NAV: ocultar tabs, solo hamburger + logo + usuario */
  .nav-tabs{display:none !important}
  .nav{padding:0 .75rem}
  .nav-logo{font-size:1rem}
  .nav-user{font-size:.75rem}

  /* Páginas */
  .page{padding:.75rem}
  .ph-left .ph-h{font-size:1.3rem}
  .ph{flex-direction:column;align-items:flex-start;gap:.5rem}

  /* Grupos */
  .gg{grid-template-columns:1fr}
  .mtn{max-width:58px}

  /* Ranking */
  .rk-podium{grid-template-columns:1fr}
  .rk-table th:nth-child(3),.rk-table td:nth-child(3),
  .rk-table th:nth-child(4),.rk-table td:nth-child(4){display:none}

  /* Admin */
  .cu-grid{grid-template-columns:1fr 1fr}
  .cu-add-btn{grid-column:1/-1}
  .adm-grid{grid-template-columns:1fr}

  /* Mi Quiniela */
  .mq-stats{grid-template-columns:repeat(3,1fr)}
  .mq-row{grid-template-columns:1fr 68px 68px 30px;font-size:.76rem}

  /* Premios */
  .prizes-grid{grid-template-columns:1fr 1fr}
  .prizes-bolsa-amt{font-size:2.2rem}

  /* Drawer */
  #drawer{width:88vw;max-width:300px}

  /* FAB */
  .fab{padding:10px 16px;font-size:.78rem;bottom:1rem;right:1rem}

  /* Modal */
  .modal-box{padding:1.5rem 1.25rem}
}

@media(max-width:480px){
  .mq-stats{grid-template-columns:repeat(2,1fr)}
  .prizes-grid{grid-template-columns:1fr}
  .mt-inp{width:52px;height:52px;font-size:1.5rem}
  .prizes-hero{padding:1.25rem}
  .prizes-bolsa-amt{font-size:1.8rem}
}

#splash-screen{
  position:fixed;inset:0;z-index:9999;
  background:#f2f4f8;
  display:flex;flex-direction:column;align-items:center;justify-content:center;
  transition:opacity .5s ease;
  overflow:hidden;
}
html.dark-pre #splash-screen,body.dark #splash-screen{background:#080b14}
#splash-screen.hide{opacity:0;pointer-events:none}

/* Mesh gradient orbs (mismo estilo que hero del landing) */
.splash-mesh{position:absolute;inset:0;pointer-events:none;overflow:hidden}
.splash-orb{position:absolute;border-radius:50%;filter:blur(70px);will-change:transform}
.splash-orb.so1{width:520px;height:520px;background:radial-gradient(circle,rgba(0,196,106,.55),transparent 65%);top:-160px;left:-120px;animation:splOrb1 14s ease-in-out infinite alternate}
.splash-orb.so2{width:480px;height:480px;background:radial-gradient(circle,rgba(61,135,255,.5),transparent 65%);bottom:-140px;right:-120px;animation:splOrb2 16s ease-in-out infinite alternate-reverse}
.splash-orb.so3{width:380px;height:380px;background:radial-gradient(circle,rgba(255,51,85,.5),transparent 65%);top:30%;left:40%;animation:splOrb3 18s ease-in-out infinite alternate}
.splash-orb.so4{width:280px;height:280px;background:radial-gradient(circle,rgba(125,75,255,.4),transparent 65%);top:55%;left:8%;animation:splOrb4 20s ease-in-out infinite alternate-reverse}
@keyframes splOrb1{0%{transform:translate(0,0) scale(1)}100%{transform:translate(80px,60px) scale(1.15)}}
@keyframes splOrb2{0%{transform:translate(0,0) scale(1)}100%{transform:translate(-70px,-50px) scale(1.18)}}
@keyframes splOrb3{0%{transform:translate(0,0) scale(1)}100%{transform:translate(-50px,40px) scale(1.2)}}
@keyframes splOrb4{0%{transform:translate(0,0) scale(1)}100%{transform:translate(70px,-40px) scale(1.1)}}

/* En light mode los orbs son más sutiles para no saturar */
#splash-screen .splash-orb{opacity:.55}
html.dark-pre #splash-screen .splash-orb,body.dark #splash-screen .splash-orb{opacity:.7}

/* Grain texture sutil */
.splash-grain{position:absolute;inset:0;pointer-events:none;opacity:.18;mix-blend-mode:overlay;background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='.7'/></svg>")}
html.dark-pre .splash-grain,body.dark .splash-grain{opacity:.08}

#splash-canvas{position:relative;z-index:2;filter:drop-shadow(0 24px 60px rgba(0,0,0,.18))}
html.dark-pre #splash-canvas,body.dark #splash-canvas{filter:drop-shadow(0 24px 60px rgba(0,0,0,.55)) drop-shadow(0 0 40px rgba(0,82,204,.25))}

.splash-wordmark{
  position:relative;z-index:2;text-align:center;margin-top:20px;
  opacity:0;transition:opacity .55s ease,transform .55s ease;transform:translateY(14px);
}
.splash-wordmark.show{opacity:1;transform:translateY(0)}
.splash-wname{
  font-family:'Plus Jakarta Sans',system-ui,sans-serif;
  font-weight:800;font-size:30px;letter-spacing:-.5px;color:#0a0e1a;
}
html.dark-pre .splash-wname,body.dark .splash-wname{color:#fff}
.splash-wsub{
  font-family:'Plus Jakarta Sans',system-ui,sans-serif;
  font-weight:600;font-size:10px;letter-spacing:4.5px;text-transform:uppercase;
  color:rgba(10,14,26,.5);margin-top:6px;
}
html.dark-pre .splash-wsub,body.dark .splash-wsub{color:rgba(255,255,255,.45)}

/* Bouncing dots */
.splash-dots{
  display:flex;gap:10px;margin-top:20px;position:relative;z-index:2;
  opacity:0;transition:opacity .4s ease;
}
.splash-dots.show{opacity:1}
.sdot{
  width:10px;height:10px;border-radius:50%;
  animation:sdotBounce .9s ease-in-out infinite;
}
.sdot.sg{background:#006838;animation-delay:0s;box-shadow:0 0 12px rgba(0,196,106,.5)}
.sdot.sb{background:#003087;animation-delay:.18s;box-shadow:0 0 12px rgba(61,135,255,.5)}
.sdot.sr{background:#c0001a;animation-delay:.36s;box-shadow:0 0 12px rgba(255,51,85,.5)}
@keyframes sdotBounce{
  0%,100%{transform:translateY(0)}
  40%{transform:translateY(-10px)}
  60%{transform:translateY(-4px)}
}

/* splash progress */
.splash-pbar{
  position:absolute;bottom:0;left:0;right:0;height:3px;
  background:rgba(10,14,26,.06);z-index:3;
}
html.dark-pre .splash-pbar,body.dark .splash-pbar{background:rgba(255,255,255,.06)}
.splash-pfill{
  height:100%;width:0%;
  background:linear-gradient(90deg,#006838,#003087,#c0001a);
  transition:none;
}

@media (prefers-reduced-motion:reduce){
  .splash-orb{animation:none}
}
  .cu-grid{grid-template-columns:1fr 1fr}.cu-add-btn{grid-column:1/-1}
  .ntab{padding:5px 8px;font-size:.68rem}
  .page{padding:.75rem}
  .gg{grid-template-columns:1fr}
  .rk-podium{grid-template-columns:1fr}
  .ph-left .ph-h{font-size:1.4rem}
}
</style>
<script>
// Aplicar dark mode antes del primer paint para evitar flash en splash
(function(){
  try {
    var saved = localStorage.getItem('q26dark');
    var isDark;
    if(saved === '1') isDark = true;
    else if(saved === '0') isDark = false;
    else isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if(isDark){
      document.documentElement.classList.add('dark-pre');
      // Aplicar a body en cuanto esté disponible
      var apply = function(){ if(document.body) document.body.classList.add('dark'); };
      if(document.body) apply();
      else document.addEventListener('DOMContentLoaded', apply);
    }
  } catch(_){}
})();
</script>
</head>
<body>

<!-- REFERRAL ONBOARDING SCREEN -->
<div id="ref-screen" style="display:none;position:fixed;inset:0;z-index:950;background:var(--bg);flex-direction:column;align-items:center;justify-content:center;padding:1.5rem">
  <!-- Background gradient like auth screen -->
  <div style="position:absolute;inset:0;background:linear-gradient(135deg,rgba(0,104,56,.12) 0%,rgba(0,48,135,.10) 50%,rgba(192,0,26,.08) 100%);pointer-events:none"></div>

  <div style="position:relative;z-index:1;width:100%;max-width:400px;display:flex;flex-direction:column;align-items:center;gap:0">

    <!-- Logo -->
    <canvas id="ref-screen-logo" width="64" height="64" style="border-radius:16px;margin-bottom:1.5rem"></canvas>

    <!-- Header -->
    <div style="text-align:center;margin-bottom:2rem">
      <div style="font-weight:800;font-size:1.5rem;color:var(--ink);margin-bottom:.4rem">¿Alguien te invitó?</div>
      <div style="font-size:.85rem;color:var(--ink3);line-height:1.6;max-width:280px;margin:0 auto">Si alguien compartió su código contigo, ingrésalo para quedar vinculados. Si tu referido gana, ¡le caen $500 MXN!</div>
    </div>

    <!-- Card -->
    <div style="background:var(--surface);border:1.5px solid var(--border);border-radius:var(--rad-lg);padding:1.75rem;width:100%;box-shadow:var(--sh2);margin-bottom:1rem">

      <div style="font-size:.68rem;font-weight:700;text-transform:uppercase;letter-spacing:1.2px;color:var(--ink3);margin-bottom:.75rem">Código de quien te invitó</div>

      <input id="ref-screen-input" type="text" maxlength="3" placeholder="ABC"
        style="width:100%;padding:16px;border:2px solid var(--border);border-radius:12px;background:var(--bg);color:var(--ink);font-family:'Plus Jakarta Sans',sans-serif;font-weight:800;font-size:1.8rem;text-transform:uppercase;letter-spacing:8px;text-align:center;box-sizing:border-box;margin-bottom:1.25rem;outline:none;transition:border-color .2s"
        oninput="this.value=this.value.toUpperCase();this.style.borderColor=this.value.length===3?'var(--green)':'var(--border)'"
        onkeydown="if(event.key==='Enter')submitRefScreen()">

      <button onclick="submitRefScreen()"
        style="width:100%;padding:13px;background:var(--grad-tri);color:#fff;border:none;border-radius:10px;font-family:'Plus Jakarta Sans',sans-serif;font-weight:700;font-size:.95rem;cursor:pointer;letter-spacing:.3px">
        Confirmar código ✓
      </button>
    </div>

    <!-- Skip -->
    <button onclick="skipRefScreen(false)"
      style="width:100%;padding:11px;background:transparent;color:var(--ink3);border:1.5px solid var(--border);border-radius:10px;font-family:'Plus Jakarta Sans',sans-serif;font-weight:600;font-size:.85rem;cursor:pointer;margin-bottom:.75rem;background:var(--surface)">
      No, nadie me invitó
    </button>

    <label id="ref-noshow-label" style="display:flex;align-items:center;gap:8px;font-size:.78rem;color:var(--ink3);cursor:pointer;padding:.5rem">
      <input type="checkbox" id="ref-noshow-cb" style="cursor:pointer;width:16px;height:16px;accent-color:var(--green)">
      No volver a mostrar esta pantalla
    </label>

  </div>
</div>

<!-- BRACKET SCORE MODAL -->
<div id="br-score-modal" style="display:none;position:fixed;inset:0;z-index:800;background:rgba(10,14,26,.55);backdrop-filter:blur(3px);align-items:center;justify-content:center;padding:1rem">
  <div style="background:var(--surface);border:1.5px solid var(--border);border-radius:var(--rad-lg);padding:1.5rem 1.25rem;max-width:340px;width:100%;box-shadow:var(--sh2)">
    <div style="font-weight:800;font-size:.95rem;color:var(--ink);margin-bottom:.25rem" id="br-sm-title">Predecir resultado</div>
    <div style="font-size:.75rem;color:var(--ink3);margin-bottom:1.25rem">El marcador a 90 minutos es obligatorio. Si hay empate, elige quién avanza — si no aciertas al que pasa, no ganas puntos.</div>

    <!-- Score inputs -->
    <div style="display:grid;grid-template-columns:1fr 24px 1fr;align-items:center;gap:.4rem;margin-bottom:1rem">
      <div style="text-align:center">
        <div style="font-size:.7rem;margin-bottom:3px" id="br-sm-hflag">🏳</div>
        <div style="font-size:.65rem;font-weight:700;color:var(--ink3);text-transform:uppercase;letter-spacing:.5px;margin-bottom:5px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis" id="br-sm-hname">Local</div>
        <input id="br-sm-h" type="number" min="0" max="20" placeholder="0"
          style="width:100%;padding:12px 4px;border:2px solid var(--border);border-radius:10px;background:var(--bg);color:var(--ink);font-family:'Plus Jakarta Sans',sans-serif;font-weight:800;font-size:1.6rem;text-align:center;box-sizing:border-box;outline:none;transition:border-color .2s"
          oninput="updateBrTiebreaker()"
          onfocus="this.style.borderColor='var(--green)'" onblur="this.style.borderColor='var(--border)'">
      </div>
      <div style="font-weight:800;font-size:1rem;color:var(--ink3);text-align:center;margin-top:28px">-</div>
      <div style="text-align:center">
        <div style="font-size:.7rem;margin-bottom:3px" id="br-sm-aflag">🏳</div>
        <div style="font-size:.65rem;font-weight:700;color:var(--ink3);text-transform:uppercase;letter-spacing:.5px;margin-bottom:5px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis" id="br-sm-aname">Visitante</div>
        <input id="br-sm-a" type="number" min="0" max="20" placeholder="0"
          style="width:100%;padding:12px 4px;border:2px solid var(--border);border-radius:10px;background:var(--bg);color:var(--ink);font-family:'Plus Jakarta Sans',sans-serif;font-weight:800;font-size:1.6rem;text-align:center;box-sizing:border-box;outline:none;transition:border-color .2s"
          oninput="updateBrTiebreaker()"
          onfocus="this.style.borderColor='var(--green)'" onblur="this.style.borderColor='var(--border)'">
      </div>
    </div>

    <!-- Tiebreaker (shown only on draw) -->
    <div id="br-sm-tiebreaker" style="display:none;background:var(--b-bg);border:1.5px solid var(--b2);border-radius:10px;padding:10px 12px;margin-bottom:1rem">
      <div style="font-size:.72rem;font-weight:700;color:var(--b2);margin-bottom:8px;text-align:center">⚽ Empate — ¿quién avanza?</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:.5rem">
        <button class="br-sm-winner-btn" data-team="" id="br-sm-wb-h" onclick="selectBrWinner(_brH)"
          style="padding:8px 6px;border:2px solid var(--border);border-radius:8px;background:var(--surface);color:var(--ink);font-family:'Plus Jakarta Sans',sans-serif;font-weight:700;font-size:.75rem;cursor:pointer;transition:all .15s;text-overflow:ellipsis;overflow:hidden;white-space:nowrap">—</button>
        <button class="br-sm-winner-btn" data-team="" id="br-sm-wb-a" onclick="selectBrWinner(_brA)"
          style="padding:8px 6px;border:2px solid var(--border);border-radius:8px;background:var(--surface);color:var(--ink);font-family:'Plus Jakarta Sans',sans-serif;font-weight:700;font-size:.75rem;cursor:pointer;transition:all .15s;text-overflow:ellipsis;overflow:hidden;white-space:nowrap">—</button>
      </div>
    </div>

    <!-- Winner auto-indicator (shown when no draw) -->
    <div id="br-sm-auto-winner" style="display:none;background:var(--g-bg);border:1px solid var(--green2);border-radius:8px;padding:7px 12px;margin-bottom:1rem;font-size:.78rem;font-weight:600;color:var(--green);text-align:center"></div>

    <div style="display:flex;gap:.5rem">
      <button onclick="saveBrScore()" style="flex:1;padding:11px;background:var(--grad-tri);color:#fff;border:none;border-radius:8px;font-family:'Plus Jakarta Sans',sans-serif;font-weight:700;font-size:.88rem;cursor:pointer">Guardar ✓</button>
      <button onclick="closeBrScoreModal()" style="padding:11px 14px;background:var(--surface);color:var(--ink3);border:1.5px solid var(--border);border-radius:8px;font-family:'Plus Jakarta Sans',sans-serif;font-weight:600;font-size:.85rem;cursor:pointer">✕</button>
    </div>
    <button id="br-share-btn" onclick="openSharePrediction(_brId)" style="display:none;width:100%;margin-top:.6rem;padding:9px;background:transparent;border:1.5px solid var(--border);border-radius:8px;color:var(--ink2);font-family:'Plus Jakarta Sans',sans-serif;font-size:.78rem;font-weight:700;cursor:pointer;transition:all .2s" onmouseover="this.style.borderColor='var(--blue2)';this.style.color='var(--blue2)'" onmouseout="this.style.borderColor='var(--border)';this.style.color='var(--ink2)'">📤 Compartir esta predicción</button>
    <button onclick="clearBrScore()" style="width:100%;margin-top:.5rem;padding:7px;background:transparent;color:var(--ink3);border:none;font-family:'Plus Jakarta Sans',sans-serif;font-size:.72rem;cursor:pointer;opacity:.7">Borrar predicción</button>
  </div>
</div>

<!-- PWA INSTALL BANNER -->
<div id="install-banner" style="display:none;position:fixed;bottom:0;left:0;right:0;z-index:900;padding:.75rem 1rem;background:var(--surface);border-top:1.5px solid var(--border);box-shadow:0 -4px 24px rgba(0,0,0,.15);display:none;align-items:center;gap:12px">
  <div style="font-size:2rem;flex-shrink:0">📲</div>
  <div style="flex:1;min-width:0">
    <div style="font-weight:800;font-size:.9rem;color:var(--ink)">Instala Al Ángulo</div>
    <div style="font-size:.75rem;color:var(--ink3);margin-top:1px" id="install-banner-sub">Agrégala a tu pantalla de inicio</div>
  </div>
  <button onclick="triggerInstall()" id="install-banner-btn" style="padding:8px 16px;background:var(--grad-tri);color:#fff;border:none;border-radius:8px;font-family:'Plus Jakarta Sans',sans-serif;font-weight:700;font-size:.82rem;cursor:pointer;white-space:nowrap">Instalar</button>
  <button onclick="dismissInstallBanner()" style="padding:6px 10px;background:none;border:none;color:var(--ink3);font-size:1.1rem;cursor:pointer;flex-shrink:0">✕</button>
</div>

<!-- iOS INSTRUCTIONS MODAL -->
<div id="ios-modal" style="display:none;position:fixed;inset:0;z-index:950;background:rgba(10,14,26,.6);backdrop-filter:blur(6px);align-items:flex-end;justify-content:center;padding:1rem">
  <div style="background:var(--surface);border:1.5px solid var(--border);border-radius:20px 20px 16px 16px;padding:1.5rem 1.25rem;width:100%;max-width:420px;box-shadow:var(--sh2);animation:cardIn .25s cubic-bezier(.22,1,.36,1) both">
    <div style="font-weight:800;font-size:1rem;color:var(--ink);margin-bottom:1rem">📲 Instalar en iPhone</div>
    <div style="display:flex;flex-direction:column;gap:.75rem;margin-bottom:1.25rem">
      <div style="display:flex;align-items:center;gap:12px">
        <div style="width:32px;height:32px;border-radius:50%;background:var(--grad-tri);color:#fff;font-weight:800;font-size:.85rem;display:flex;align-items:center;justify-content:center;flex-shrink:0">1</div>
        <div style="font-size:.85rem;color:var(--ink2)">Toca el botón de <b>compartir</b> <span style="font-size:1rem">⬆️</span> en Safari (abajo al centro)</div>
      </div>
      <div style="display:flex;align-items:center;gap:12px">
        <div style="width:32px;height:32px;border-radius:50%;background:var(--grad-tri);color:#fff;font-weight:800;font-size:.85rem;display:flex;align-items:center;justify-content:center;flex-shrink:0">2</div>
        <div style="font-size:.85rem;color:var(--ink2)">Baja y toca <b>"Añadir a pantalla de inicio"</b></div>
      </div>
      <div style="display:flex;align-items:center;gap:12px">
        <div style="width:32px;height:32px;border-radius:50%;background:var(--grad-tri);color:#fff;font-weight:800;font-size:.85rem;display:flex;align-items:center;justify-content:center;flex-shrink:0">3</div>
        <div style="font-size:.85rem;color:var(--ink2)">Toca <b>"Añadir"</b> — listo, ya está en tu pantalla</div>
      </div>
    </div>
    <button onclick="document.getElementById('ios-modal').style.display='none'" style="width:100%;padding:12px;background:var(--grad-tri);color:#fff;border:none;border-radius:10px;font-family:'Plus Jakarta Sans',sans-serif;font-weight:700;font-size:.9rem;cursor:pointer">Entendido</button>
  </div>
</div>

<!-- CHANGE PIN MODAL -->
<div id="change-pin-modal" style="display:none;position:fixed;inset:0;z-index:800;background:rgba(10,14,26,.55);backdrop-filter:blur(4px);align-items:center;justify-content:center;padding:1rem">
  <div style="background:var(--surface);border:1.5px solid var(--border);border-radius:var(--rad-lg);padding:1.5rem 1.25rem;max-width:340px;width:100%;box-shadow:var(--sh2);animation:cardIn .25s cubic-bezier(.22,1,.36,1) both">
    <div style="font-weight:800;font-size:.95rem;color:var(--ink);margin-bottom:.25rem">🔑 Cambiar mi PIN</div>
    <div style="font-size:.75rem;color:var(--ink3);margin-bottom:1.25rem">El nuevo PIN debe tener exactamente 5 caracteres alfanuméricos (ej. aB3x9)</div>
    <label style="display:block;font-size:.7rem;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:var(--ink3);margin-bottom:5px">PIN actual</label>
    <input id="current-pin-input" type="password" maxlength="10" placeholder="Tu PIN actual"
      style="width:100%;padding:11px 14px;border:2px solid var(--border);border-radius:10px;background:var(--bg);color:var(--ink);font-family:'Plus Jakarta Sans',sans-serif;font-size:.9rem;box-sizing:border-box;outline:none;margin-bottom:.75rem;transition:border-color .2s"
      onfocus="this.style.borderColor='var(--green)'" onblur="this.style.borderColor='var(--border)'">
    <label style="display:block;font-size:.7rem;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:var(--ink3);margin-bottom:5px">Nuevo PIN</label>
    <input id="new-pin-input" type="text" maxlength="5" placeholder="Nuevo PIN"
      style="width:100%;padding:11px 14px;border:2px solid var(--border);border-radius:10px;background:var(--bg);color:var(--ink);font-family:'Plus Jakarta Sans',sans-serif;font-size:.9rem;text-align:left;letter-spacing:3px;box-sizing:border-box;outline:none;margin-bottom:1rem;transition:border-color .2s"
      oninput="this.value=this.value.toUpperCase()"
      onfocus="this.style.borderColor='var(--green)'" onblur="this.style.borderColor='var(--border)'">
    <div id="change-pin-err" style="font-size:.75rem;color:var(--red);margin-bottom:.75rem;display:none"></div>
    <div style="display:flex;gap:.5rem">
      <button onclick="saveNewPin()" style="flex:1;padding:12px;background:var(--grad-tri);color:#fff;border:none;border-radius:10px;font-family:'Plus Jakarta Sans',sans-serif;font-weight:700;font-size:.9rem;cursor:pointer">Guardar</button>
      <button onclick="document.getElementById('change-pin-modal').style.display='none'" style="padding:12px 16px;background:var(--surface);color:var(--ink3);border:1.5px solid var(--border);border-radius:10px;font-family:'Plus Jakarta Sans',sans-serif;font-weight:600;cursor:pointer">✕</button>
    </div>
  </div>
</div>

<div id="adm-modal">
  <div class="adm-modal-box">
    <div class="adm-modal-title" id="adm-modal-title"></div>
    <div class="adm-modal-sub"  id="adm-modal-sub"></div>
    <input class="adm-modal-input" id="adm-modal-input" type="text" style="display:none">
    <div class="adm-modal-btns">
      <button class="adm-modal-btn cancel"  onclick="closeAdmModal()">Cancelar</button>
      <button class="adm-modal-btn confirm" id="adm-modal-ok">Confirmar</button>
    </div>
  </div>
</div>

<!-- SPLASH SCREEN -->
<div id="splash-screen">
  <div class="splash-mesh">
    <div class="splash-orb so1"></div>
    <div class="splash-orb so2"></div>
    <div class="splash-orb so3"></div>
    <div class="splash-orb so4"></div>
  </div>
  <div class="splash-grain"></div>
  <canvas id="splash-canvas" width="140" height="140"></canvas>
  <div class="splash-wordmark" id="splash-wm">
    <div class="splash-wname">Al Ángulo</div>
    <div class="splash-wsub">Quiniela · Mundial 2026</div>
  </div>
  <div class="splash-dots" id="splash-dots">
    <div class="sdot sg"></div>
    <div class="sdot sb"></div>
    <div class="sdot sr"></div>
  </div>
  <div class="splash-pbar"><div class="splash-pfill" id="splash-pfill"></div></div>
</div>

<!-- PUBLIC RULES MODAL -->
<div id="public-rules-modal" style="display:none;position:fixed;inset:0;z-index:9999;background:rgba(0,0,0,.6);overflow-y:auto;padding:1rem">
  <div style="max-width:520px;margin:0 auto;background:var(--surface);border-radius:20px;overflow:hidden;box-shadow:0 8px 40px rgba(0,0,0,.3)">
    <div style="background:var(--grad-tri);padding:1.25rem 1.5rem;display:flex;align-items:center;justify-content:space-between">
      <div>
        <div style="font-weight:800;font-size:1.1rem;color:#fff">Reglas del juego 📋</div>
        <div style="font-size:.75rem;color:rgba(255,255,255,.8);margin-top:2px">Al Ángulo · Mundial 2026</div>
      </div>
      <button onclick="closePublicRules()" style="background:rgba(255,255,255,.2);border:none;border-radius:50%;width:32px;height:32px;cursor:pointer;color:#fff;font-size:1.1rem;display:flex;align-items:center;justify-content:center">✕</button>
    </div>
    <div style="padding:1.25rem 1.5rem;display:flex;flex-direction:column;gap:1.25rem" id="public-rules-content"></div>
  </div>
</div>

<!-- AUTH (LANDING PÚBLICO) -->
<div id="auth" style="display:none">

  <!-- Header sticky -->
  <header class="lp-header">
    <div class="lp-header-inner">
      <div class="lp-brand">
        <canvas id="auth-logo" width="36" height="36" style="border-radius:9px;display:block"></canvas>
        <div>
          <div class="lp-brand-name">Al Ángulo</div>
          <div class="lp-brand-sub">Quiniela · Mundial 2026</div>
        </div>
      </div>
      <button class="lp-header-cta" onclick="openLoginModal()">Ingresar</button>
    </div>
  </header>

  <!-- HERO -->
  <section class="lp-hero lp-reveal">
    <div class="lp-hero-bg"></div>
    <div class="lp-mesh">
      <div class="lp-mesh-orb m1"></div>
      <div class="lp-mesh-orb m2"></div>
      <div class="lp-mesh-orb m3"></div>
    </div>
    <div class="lp-grain"></div>
    <div class="lp-hero-inner">
      <div class="lp-hero-grid">

        <div class="lp-hero-text">
          <div class="lp-pill lp-pill-live lp-reveal"><span class="lp-pill-dot"></span>Mundial 2026 · USA · México · Canadá</div>
          <h1 class="lp-hero-title lp-reveal">
            La quiniela del Mundial con tu <span class="lp-grad-text">gente</span>
          </h1>
          <p class="lp-hero-sub lp-reveal">Pronostica los 104 partidos, compite en el ranking en vivo y vive el Mundial con tus amigos.</p>

          <!-- Countdown -->
          <div id="lp-countdown" class="lp-countdown lp-reveal"></div>

          <div class="lp-hero-ctas lp-reveal">
            <button class="lp-btn-primary" onclick="openSignupModal()">Inscribirse ⚽</button>
            <button class="lp-btn-ghost" onclick="openPublicRules()">Ver reglas</button>
          </div>

          <div class="lp-hero-stats lp-reveal">
            <div><div class="lp-stat-num">104</div><div class="lp-stat-lbl">partidos</div></div>
            <div><div class="lp-stat-num">48</div><div class="lp-stat-lbl">selecciones</div></div>
            <div><div class="lp-stat-num">$350</div><div class="lp-stat-lbl">entrada (MXN)</div></div>
          </div>
        </div>

        <div class="lp-hero-preview lp-reveal">
          <div class="lp-phone">
            <div class="lp-phone-screen">
              <div class="lp-phone-top"><span id="lp-phone-label">🏆 Ranking</span><span class="lp-phone-live">Live</span></div>
              <div class="lp-phone-body">

                <div class="lp-view on" data-v="ranking">
                  <div class="lp-pv-row first"><span class="lp-pv-rank">1</span><div class="lp-pv-avatar" style="background:#d18800">U1</div><span class="lp-pv-name">usuario_01</span><span class="lp-pv-pts">42</span></div>
                  <div class="lp-pv-row"><span class="lp-pv-rank">2</span><div class="lp-pv-avatar" style="background:#0f6e56">U2</div><span class="lp-pv-name">usuario_02</span><span class="lp-pv-pts">38</span></div>
                  <div class="lp-pv-row me"><span class="lp-pv-rank">3</span><div class="lp-pv-avatar">TÚ</div><span class="lp-pv-name">tú</span><span class="lp-pv-pts">36</span></div>
                  <div class="lp-pv-row"><span class="lp-pv-rank">4</span><div class="lp-pv-avatar" style="background:#5a2da3">U4</div><span class="lp-pv-name">usuario_04</span><span class="lp-pv-pts">29</span></div>
                  <div class="lp-pv-row"><span class="lp-pv-rank">5</span><div class="lp-pv-avatar" style="background:#c0001a">U5</div><span class="lp-pv-name">usuario_05</span><span class="lp-pv-pts">24</span></div>
                </div>

                <div class="lp-view" data-v="muro">
                  <div class="lp-mw-post">
                    <div class="lp-mw-head">
                      <div class="lp-mw-avatar" style="background:#0f6e56">U1</div>
                      <span class="lp-mw-name">usuario_01</span>
                      <span class="lp-mw-time">2m</span>
                    </div>
                    <div class="lp-mw-text">¡Le metí 3 a 1 a Brasil vs Marruecos! 🚀</div>
                    <div><span class="lp-mw-react">🔥 4</span><span class="lp-mw-react">😂 2</span></div>
                  </div>
                  <div class="lp-mw-post">
                    <div class="lp-mw-head">
                      <div class="lp-mw-avatar" style="background:#c0001a">U2</div>
                      <span class="lp-mw-name">usuario_02</span>
                      <span class="lp-mw-time">14m</span>
                    </div>
                    <div class="lp-mw-text">Esta vez sí me la quedo 🐐</div>
                    <div><span class="lp-mw-react">😂 6</span><span class="lp-mw-react">💀 3</span></div>
                  </div>
                </div>

                <div class="lp-view" data-v="predicciones">
                  <div class="lp-pred-h">Jornada 1 · Hoy</div>
                  <div class="lp-pred">
                    <div class="lp-pred-team"><span class="lp-pred-flag">🇲🇽</span>México</div>
                    <div class="lp-pred-score"><div class="lp-pred-input">2</div><span class="lp-pred-dash">−</span><div class="lp-pred-input">1</div></div>
                    <div class="lp-pred-team"><span class="lp-pred-flag">🇿🇦</span>Sudáfrica</div>
                  </div>
                  <div class="lp-pred">
                    <div class="lp-pred-team"><span class="lp-pred-flag">🇧🇷</span>Brasil</div>
                    <div class="lp-pred-score"><div class="lp-pred-input">3</div><span class="lp-pred-dash">−</span><div class="lp-pred-input">1</div></div>
                    <div class="lp-pred-team"><span class="lp-pred-flag">🇲🇦</span>Marruecos</div>
                  </div>
                  <div class="lp-pred">
                    <div class="lp-pred-team"><span class="lp-pred-flag">🇫🇷</span>Francia</div>
                    <div class="lp-pred-score"><div class="lp-pred-input">2</div><span class="lp-pred-dash">−</span><div class="lp-pred-input">0</div></div>
                    <div class="lp-pred-team"><span class="lp-pred-flag">🇸🇳</span>Senegal</div>
                  </div>
                </div>

                <div class="lp-view" data-v="grupos">
                  <div class="lp-gr-tabs">
                    <div class="lp-gr-tab on">A</div>
                    <div class="lp-gr-tab">B</div>
                    <div class="lp-gr-tab">C</div>
                    <div class="lp-gr-tab">D</div>
                  </div>
                  <div class="lp-gr-card">
                    <div class="lp-gr-h2">
                      <span class="lp-gr-h2-t">Grupo A</span>
                      <span class="lp-gr-h2-i">2/3 jugadas</span>
                    </div>
                    <div class="lp-gr-cols">
                      <span></span><span>Equipo</span><span>PJ</span><span>GF</span><span>GC</span><span>PTS</span>
                    </div>
                    <div class="lp-gr-r qual"><span class="lp-gr-p">1</span><span class="lp-gr-t"><span class="lp-gr-f">🇲🇽</span>México</span><span class="lp-gr-n">2</span><span class="lp-gr-n">5</span><span class="lp-gr-n">1</span><span class="lp-gr-pp">6</span></div>
                    <div class="lp-gr-r qual"><span class="lp-gr-p">2</span><span class="lp-gr-t"><span class="lp-gr-f">🇰🇷</span>Corea</span><span class="lp-gr-n">2</span><span class="lp-gr-n">3</span><span class="lp-gr-n">2</span><span class="lp-gr-pp">4</span></div>
                    <div class="lp-gr-r"><span class="lp-gr-p">3</span><span class="lp-gr-t"><span class="lp-gr-f">🇿🇦</span>Sudáfrica</span><span class="lp-gr-n">2</span><span class="lp-gr-n">2</span><span class="lp-gr-n">3</span><span class="lp-gr-pp">1</span></div>
                    <div class="lp-gr-r"><span class="lp-gr-p">4</span><span class="lp-gr-t"><span class="lp-gr-f">🇨🇿</span>Chequia</span><span class="lp-gr-n">2</span><span class="lp-gr-n">1</span><span class="lp-gr-n">5</span><span class="lp-gr-pp">0</span></div>
                  </div>
                  <div class="lp-gr-card">
                    <div class="lp-gr-h2">
                      <span class="lp-gr-h2-t">Próximo</span>
                      <span class="lp-gr-h2-i">11 jun · 13:00</span>
                    </div>
                    <div class="lp-gr-vs">
                      <span class="lp-gr-vs-t"><span class="lp-gr-f">🇲🇽</span>México</span>
                      <span class="lp-gr-vs-x">VS</span>
                      <span class="lp-gr-vs-t">Sudáfrica<span class="lp-gr-f">🇿🇦</span></span>
                    </div>
                  </div>
                </div>

                <div class="lp-view" data-v="bracket">
                  <div class="lp-br-tabs">
                    <div class="lp-br-tab on">8°</div>
                    <div class="lp-br-tab">4°</div>
                    <div class="lp-br-tab">SF</div>
                    <div class="lp-br-tab">Final</div>
                  </div>
                  <div class="lp-br-stage">Sábado 4 jul · 13:00</div>
                  <div class="lp-br-match played">
                    <div class="lp-br-tr win"><span class="lp-br-tn"><span class="lp-br-tf">🇲🇽</span>México</span><span class="lp-br-ts">2</span></div>
                    <div class="lp-br-tr lose"><span class="lp-br-tn"><span class="lp-br-tf">🇪🇸</span>España</span><span class="lp-br-ts">1</span></div>
                  </div>
                  <div class="lp-br-match live">
                    <div class="lp-br-tr win"><span class="lp-br-tn"><span class="lp-br-tf">🇫🇷</span>Francia</span><span class="lp-br-ts">2</span></div>
                    <div class="lp-br-tr"><span class="lp-br-tn"><span class="lp-br-tf">🇧🇪</span>Bélgica</span><span class="lp-br-ts">1</span></div>
                    <div class="lp-br-time"><span class="lp-br-livedot"></span>EN VIVO · 78'</div>
                  </div>
                  <div class="lp-br-match played">
                    <div class="lp-br-tr win"><span class="lp-br-tn"><span class="lp-br-tf">🇧🇷</span>Brasil</span><span class="lp-br-ts">3</span></div>
                    <div class="lp-br-tr lose"><span class="lp-br-tn"><span class="lp-br-tf">🇩🇪</span>Alemania</span><span class="lp-br-ts">1</span></div>
                  </div>
                  <div class="lp-br-match next">
                    <div class="lp-br-stage" style="margin:0 0 3px">Mañana · 13:00</div>
                    <div class="lp-br-tr"><span class="lp-br-tn"><span class="lp-br-tf">🇦🇷</span>Argentina</span><span class="lp-br-ts">−</span></div>
                    <div class="lp-br-tr"><span class="lp-br-tn"><span class="lp-br-tf">🇵🇹</span>Portugal</span><span class="lp-br-ts">−</span></div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div class="lp-phone-tabs" id="lp-phone-tabs">
            <button class="lp-pt on" data-go="ranking">Ranking</button>
            <button class="lp-pt" data-go="muro">Muro</button>
            <button class="lp-pt" data-go="predicciones">Predicciones</button>
            <button class="lp-pt" data-go="grupos">Grupos</button>
            <button class="lp-pt" data-go="bracket">Bracket</button>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- MARQUEE banderas -->
  <div class="lp-marquee">
    <div class="lp-mq-track">
      <span class="lp-mq-flag">🇲🇽</span><span class="lp-mq-flag">🇺🇸</span><span class="lp-mq-flag">🇨🇦</span><span class="lp-mq-flag">🇧🇷</span><span class="lp-mq-flag">🇦🇷</span><span class="lp-mq-flag">🇫🇷</span><span class="lp-mq-flag">🇪🇸</span><span class="lp-mq-flag">🇩🇪</span><span class="lp-mq-flag">🇵🇹</span><span class="lp-mq-flag">🇳🇱</span><span class="lp-mq-flag">🇮🇹</span><span class="lp-mq-flag">🏴󠁧󠁢󠁥󠁮󠁧󠁿</span><span class="lp-mq-flag">🇧🇪</span><span class="lp-mq-flag">🇨🇭</span><span class="lp-mq-flag">🇲🇦</span><span class="lp-mq-flag">🇸🇳</span><span class="lp-mq-flag">🇯🇵</span><span class="lp-mq-flag">🇰🇷</span><span class="lp-mq-flag">🇺🇾</span><span class="lp-mq-flag">🇨🇴</span><span class="lp-mq-flag">🇪🇨</span><span class="lp-mq-flag">🇨🇮</span><span class="lp-mq-flag">🇦🇺</span><span class="lp-mq-flag">🇸🇦</span>
      <span class="lp-mq-flag">🇲🇽</span><span class="lp-mq-flag">🇺🇸</span><span class="lp-mq-flag">🇨🇦</span><span class="lp-mq-flag">🇧🇷</span><span class="lp-mq-flag">🇦🇷</span><span class="lp-mq-flag">🇫🇷</span><span class="lp-mq-flag">🇪🇸</span><span class="lp-mq-flag">🇩🇪</span><span class="lp-mq-flag">🇵🇹</span><span class="lp-mq-flag">🇳🇱</span><span class="lp-mq-flag">🇮🇹</span><span class="lp-mq-flag">🏴󠁧󠁢󠁥󠁮󠁧󠁿</span><span class="lp-mq-flag">🇧🇪</span><span class="lp-mq-flag">🇨🇭</span><span class="lp-mq-flag">🇲🇦</span><span class="lp-mq-flag">🇸🇳</span><span class="lp-mq-flag">🇯🇵</span><span class="lp-mq-flag">🇰🇷</span><span class="lp-mq-flag">🇺🇾</span><span class="lp-mq-flag">🇨🇴</span><span class="lp-mq-flag">🇪🇨</span><span class="lp-mq-flag">🇨🇮</span><span class="lp-mq-flag">🇦🇺</span><span class="lp-mq-flag">🇸🇦</span>
    </div>
  </div>

  <!-- FEATURES (carrusel) -->
  <section class="lp-section lp-features">
    <div class="lp-section-head lp-reveal">
      <div class="lp-eyebrow lp-eyebrow-g">Lo que hace especial a Al Ángulo</div>
      <h2 class="lp-section-title">Más que una quiniela</h2>
    </div>
    <div class="crsl-wrap lp-reveal">
      <div class="crsl-track" id="crsl-track">

        <div class="crsl-card active tone-g">
          <div class="crsl-top">
            <div class="crsl-num"><strong>01</strong> / 05</div>
            <div class="crsl-tag" style="background:#e8f5ed;color:#006838">Predicciones</div>
          </div>
          <div class="crsl-icon" style="background:#e8f5ed">⚽</div>
          <h3 class="crsl-h">Pronostica los <span class="crsl-accent">104 partidos</span></h3>
          <p class="crsl-d">Fase de grupos completa más eliminatoria directa hasta la final. Bonus extra cuando aciertas el marcador exacto.</p>
          <div class="crsl-foot" style="color:#006838"><span class="crsl-foot-dot"></span>Desde el 11 de junio</div>
        </div>

        <div class="crsl-card next tone-b">
          <div class="crsl-top">
            <div class="crsl-num"><strong>02</strong> / 05</div>
            <div class="crsl-tag" style="background:#e0eaff;color:#003087">Competencia</div>
          </div>
          <div class="crsl-icon" style="background:#e0eaff">🏆</div>
          <h3 class="crsl-h">Ranking <span class="crsl-accent">en vivo</span></h3>
          <p class="crsl-d">Sube en el podio en tiempo real cuando aciertas. Racha de 🔥 cuando vienes encendido. Snapshot por jornada.</p>
          <div class="crsl-foot" style="color:#003087"><span class="crsl-foot-dot"></span>Actualización al instante</div>
        </div>

        <div class="crsl-card next tone-y">
          <div class="crsl-top">
            <div class="crsl-num"><strong>03</strong> / 05</div>
            <div class="crsl-tag" style="background:#fff4d6;color:#8a5a00">Grupos privados</div>
          </div>
          <div class="crsl-icon" style="background:#fff4d6">👥</div>
          <h3 class="crsl-h">Crea grupos con <span class="crsl-accent">tu gente</span></h3>
          <p class="crsl-d">Arma una liga privada con tus amigos, familia o compañeros del trabajo. Compite internamente además del ranking general.</p>
          <div class="crsl-foot" style="color:#8a5a00"><span class="crsl-foot-dot"></span>Ranking interno por grupo</div>
        </div>

        <div class="crsl-card next tone-r">
          <div class="crsl-top">
            <div class="crsl-num"><strong>04</strong> / 05</div>
            <div class="crsl-tag" style="background:#fce8ea;color:#c0001a">Social</div>
          </div>
          <div class="crsl-icon" style="background:#fce8ea">💬</div>
          <h3 class="crsl-h">Muro <span class="crsl-accent">social</span></h3>
          <p class="crsl-d">Comenta, reacciona con emojis y vive cada partido junto a tus amigos. Conversación en vivo durante el Mundial.</p>
          <div class="crsl-foot" style="color:#c0001a"><span class="crsl-foot-dot"></span>10 emojis para reaccionar</div>
        </div>

        <div class="crsl-card next tone-p">
          <div class="crsl-top">
            <div class="crsl-num"><strong>05</strong> / 05</div>
            <div class="crsl-tag" style="background:#ede4ff;color:#5a2da3">Premios</div>
          </div>
          <div class="crsl-icon" style="background:#ede4ff">🎁</div>
          <h3 class="crsl-h">Premios <span class="crsl-accent">reales</span></h3>
          <p class="crsl-d">Bote real para los primeros lugares del ranking general. Mientras más jugadores se inscriban, más grande el bote.</p>
          <div class="crsl-foot" style="color:#5a2da3"><span class="crsl-foot-dot"></span>Top 5 + último lugar se llevan premio</div>
        </div>

      </div>
      <div class="crsl-nav">
        <button class="crsl-arrow" id="crsl-prev" aria-label="Anterior">‹</button>
        <div class="crsl-dots" id="crsl-dots"></div>
        <button class="crsl-arrow" id="crsl-next" aria-label="Siguiente">›</button>
      </div>
    </div>
  </section>

  <!-- CÓMO FUNCIONA -->
  <section class="lp-section lp-how">
    <div class="lp-section-head lp-reveal">
      <div class="lp-eyebrow lp-eyebrow-b">Cómo funciona</div>
      <h2 class="lp-section-title">En 3 pasos</h2>
    </div>
    <div class="pasos-track" id="pasos-track">
      <div class="pasos-line"><div class="pasos-line-fill" id="pasos-fill"></div></div>
      <div class="paso" data-i="0">
        <div class="paso-num p1">1</div>
        <div class="paso-body">
          <div class="paso-title">Inscríbete<span class="paso-icon">📝</span></div>
          <div class="paso-desc">Llena tus datos y elige tu PIN. El organizador aprueba tu cuenta una vez confirmado el pago.</div>
        </div>
      </div>
      <div class="paso" data-i="1">
        <div class="paso-num p2">2</div>
        <div class="paso-body">
          <div class="paso-title">Llena tus pronósticos<span class="paso-icon">⚽</span></div>
          <div class="paso-desc">Predice cada partido del Mundial antes del kickoff del 11 de junio.</div>
        </div>
      </div>
      <div class="paso" data-i="2">
        <div class="paso-num p3">3</div>
        <div class="paso-body">
          <div class="paso-title">Compite y celebra<span class="paso-icon">🔥</span></div>
          <div class="paso-desc">Sube en el ranking y comenta cada partido con tus amigos en el muro social.</div>
        </div>
      </div>
    </div>
  </section>

  <!-- SHOWCASE -->
  <section class="lp-section lp-showcase">
    <div class="lp-section-head lp-reveal">
      <div class="lp-eyebrow lp-eyebrow-p">Así se ve por dentro</div>
      <h2 class="lp-section-title">Diseñado para apasionados</h2>
    </div>
    <div class="sw-tabs lp-reveal">
      <button class="sw-tab on" data-sw="muro">💬 Muro</button>
      <button class="sw-tab" data-sw="ranking">🏆 Ranking</button>
      <button class="sw-tab" data-sw="predicciones">⚽ Predicciones</button>
    </div>
    <div class="sw-wrap lp-reveal">
      <div class="sw-phone">
        <div class="sw-screen">
          <div class="sw-top"><span id="sw-label">💬 Muro</span><span class="sw-live">Live</span></div>
          <div class="sw-body">

            <div class="sw-view on" data-sw-v="muro">
              <div class="sw-mw-post">
                <div class="sw-mw-head">
                  <div class="sw-mw-avatar" style="background:#0f6e56">U1</div>
                  <span class="sw-mw-name">usuario_01</span>
                  <span class="sw-mw-time">2m</span>
                </div>
                <div class="sw-mw-text">¡Le metí 3 a 1 a Brasil vs Marruecos! Ya verás cuando suba en el ranking 🚀</div>
                <div><span class="sw-mw-react">🔥 4</span><span class="sw-mw-react">😂 2</span><span class="sw-mw-react">⚽ 1</span></div>
              </div>
              <div class="sw-mw-post">
                <div class="sw-mw-head">
                  <div class="sw-mw-avatar" style="background:#c0001a">U2</div>
                  <span class="sw-mw-name">usuario_02</span>
                  <span class="sw-mw-time">14m</span>
                </div>
                <div class="sw-mw-text">Quiniela del año, esta vez sí gano 🐐</div>
                <div><span class="sw-mw-react">😂 6</span><span class="sw-mw-react">💀 3</span></div>
              </div>
              <div class="sw-mw-post">
                <div class="sw-mw-head">
                  <div class="sw-mw-avatar" style="background:#5a2da3">U3</div>
                  <span class="sw-mw-name">usuario_03</span>
                  <span class="sw-mw-time">1h</span>
                </div>
                <div class="sw-mw-text">Pronósticos cerrados antes del kickoff ⚽</div>
              </div>
            </div>

            <div class="sw-view" data-sw-v="ranking">
              <div class="sw-rk-row first"><span class="sw-rk-pos">1</span><div class="sw-rk-av" style="background:#d18800">U1</div><span class="sw-rk-n">usuario_01</span><span class="sw-rk-pts">42</span></div>
              <div class="sw-rk-row"><span class="sw-rk-pos">2</span><div class="sw-rk-av" style="background:#0f6e56">U2</div><span class="sw-rk-n">usuario_02</span><span class="sw-rk-pts">38</span></div>
              <div class="sw-rk-row me"><span class="sw-rk-pos">3</span><div class="sw-rk-av">TÚ</div><span class="sw-rk-n">tú</span><span class="sw-rk-pts">36</span></div>
              <div class="sw-rk-row"><span class="sw-rk-pos">4</span><div class="sw-rk-av" style="background:#5a2da3">U4</div><span class="sw-rk-n">usuario_04</span><span class="sw-rk-pts">29</span></div>
              <div class="sw-rk-row"><span class="sw-rk-pos">5</span><div class="sw-rk-av" style="background:#c0001a">U5</div><span class="sw-rk-n">usuario_05</span><span class="sw-rk-pts">24</span></div>
              <div class="sw-rk-row"><span class="sw-rk-pos">6</span><div class="sw-rk-av" style="background:#003087">U6</div><span class="sw-rk-n">usuario_06</span><span class="sw-rk-pts">22</span></div>
            </div>

            <div class="sw-view" data-sw-v="predicciones">
              <div class="sw-pr-h">Jornada 1 · Hoy</div>
              <div class="sw-pr-card">
                <div class="sw-pr-team"><span class="sw-pr-flag">🇲🇽</span><span>México</span></div>
                <div class="sw-pr-score"><div class="sw-pr-inp">2</div><span class="sw-pr-dash">−</span><div class="sw-pr-inp">1</div></div>
                <div class="sw-pr-team"><span class="sw-pr-flag">🇿🇦</span><span>Sudáfrica</span></div>
              </div>
              <div class="sw-pr-card">
                <div class="sw-pr-team"><span class="sw-pr-flag">🇧🇷</span><span>Brasil</span></div>
                <div class="sw-pr-score"><div class="sw-pr-inp">3</div><span class="sw-pr-dash">−</span><div class="sw-pr-inp">1</div></div>
                <div class="sw-pr-team"><span class="sw-pr-flag">🇲🇦</span><span>Marruecos</span></div>
              </div>
              <div class="sw-pr-card">
                <div class="sw-pr-team"><span class="sw-pr-flag">🇫🇷</span><span>Francia</span></div>
                <div class="sw-pr-score"><div class="sw-pr-inp">2</div><span class="sw-pr-dash">−</span><div class="sw-pr-inp">0</div></div>
                <div class="sw-pr-team"><span class="sw-pr-flag">🇸🇳</span><span>Senegal</span></div>
              </div>
              <div class="sw-pr-card">
                <div class="sw-pr-team"><span class="sw-pr-flag">🇪🇸</span><span>España</span></div>
                <div class="sw-pr-score"><div class="sw-pr-inp">1</div><span class="sw-pr-dash">−</span><div class="sw-pr-inp">1</div></div>
                <div class="sw-pr-team"><span class="sw-pr-flag">🇺🇾</span><span>Uruguay</span></div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- FAQ -->
  <section class="lp-section lp-faq">
    <div class="lp-section-head lp-reveal">
      <div class="lp-eyebrow lp-eyebrow-b">Preguntas frecuentes</div>
      <h2 class="lp-section-title">Las dudas de siempre</h2>
    </div>
    <div class="faq-list lp-reveal">
      <div class="faq-item">
        <button class="faq-q" type="button">¿Cuánto cuesta inscribirse?<span class="faq-icon">+</span></button>
        <div class="faq-a"><div class="faq-a-inner">$350 MXN por persona. Pago único, te da acceso a toda la quiniela del Mundial. El bote total se reparte entre los primeros lugares.</div></div>
      </div>
      <div class="faq-item">
        <button class="faq-q" type="button">¿Cuándo cierran las predicciones?<span class="faq-icon">+</span></button>
        <div class="faq-a"><div class="faq-a-inner">Cada predicción se cierra al inicio del partido correspondiente. El último día para inscribirte es el 10 de junio de 2026.</div></div>
      </div>
      <div class="faq-item">
        <button class="faq-q" type="button">¿Cómo se reparten los premios?<span class="faq-icon">+</span></button>
        <div class="faq-a"><div class="faq-a-inner">El bote se forma con todas las inscripciones. Se reparte entre los primeros 5 lugares del ranking general y el último lugar al finalizar el Mundial.</div></div>
      </div>
      <div class="faq-item">
        <button class="faq-q" type="button">¿Puedo crear un grupo privado?<span class="faq-icon">+</span></button>
        <div class="faq-a"><div class="faq-a-inner">Sí. Una vez inscrito puedes crear ligas privadas con tus amigos para competir internamente además del ranking general.</div></div>
      </div>
      <div class="faq-item">
        <button class="faq-q" type="button">¿Cómo se calculan los puntos?<span class="faq-icon">+</span></button>
        <div class="faq-a"><div class="faq-a-inner">Aciertas el ganador: puntos base. Aciertas el marcador exacto: bonus extra. Las eliminatorias dan más puntos que la fase de grupos.</div></div>
      </div>
    </div>
  </section>

  <!-- CTA FINAL -->
  <section class="lp-section lp-cta-final lp-reveal">
    <h2 class="lp-cta-title">¿Listo para meterle<br>al ángulo?</h2>
    <p class="lp-cta-sub">El Mundial empieza el 11 de junio. No te quedes fuera.</p>
    <button class="lp-btn-white" onclick="openSignupModal()">Inscribirse gratis ⚽</button>
    <button class="lp-btn-ghost-white" onclick="openLoginModal()">Ya tengo cuenta</button>
  </section>

  <!-- FOOTER -->
  <footer class="lp-footer">
    <div class="lp-footer-name">Al Ángulo</div>
    <div class="lp-footer-line">Quiniela del Mundial 2026 · Hecho con ⚽ en México</div>
    <div class="lp-footer-credits">Juanpa Gomez · JP Juraidini · Eugenio Mtz Gama</div>
  </footer>

  <!-- CTA FLOTANTE MOBILE -->
  <div id="lp-fab" class="lp-fab">
    <button class="lp-fab-btn" onclick="openSignupModal()">Inscribirme ⚽</button>
  </div>

  <!-- MODAL: LOGIN -->
  <div id="login-modal" class="lp-modal" style="display:none">
    <div class="lp-modal-bg" onclick="closeLoginModal()"></div>
    <div class="lp-modal-card">
      <button class="lp-modal-close" onclick="closeLoginModal()">✕</button>
      <div class="lp-modal-h">Ingresar</div>
      <div class="lp-modal-sub">Bienvenido de vuelta a Al Ángulo</div>
      <label class="flabel">Usuario</label>
      <input class="finput" id="lu" type="text" placeholder="tu_usuario" autocomplete="off">
      <label class="flabel">PIN</label>
      <input class="finput" id="lp" type="text" placeholder="•••••" maxlength="6" autocomplete="off" inputmode="numeric" style="letter-spacing:3px">
      <button class="auth-btn" onclick="doLogin()">Ingresar ⚽</button>
      <div class="auth-err" id="lerr"></div>
      <input type="hidden" id="lref" value="">
      <div class="lp-modal-foot">
        ¿No tienes cuenta? <a href="#" onclick="event.preventDefault();closeLoginModal();openSignupModal()">Inscríbete</a>
      </div>
    </div>
  </div>

  <!-- MODAL: SIGNUP -->
  <div id="signup-modal" class="lp-modal" style="display:none">
    <div class="lp-modal-bg" onclick="closeSignupModal()"></div>
    <div class="lp-modal-card">
      <button class="lp-modal-close" onclick="closeSignupModal()">✕</button>
      <div class="lp-modal-h">Inscribirse</div>
      <div class="lp-modal-sub">Llena tus datos. Te activamos cuando confirmemos tu pago.</div>
      <label class="flabel">Nombre completo</label>
      <input class="finput" id="su-name" type="text" placeholder="Juan Pérez" autocomplete="off" maxlength="80">
      <label class="flabel">Teléfono (WhatsApp)</label>
      <input class="finput" id="su-phone" type="tel" placeholder="55 1234 5678" autocomplete="off" maxlength="20" inputmode="tel">
      <label class="flabel">Usuario</label>
      <input class="finput" id="su-user" type="text" placeholder="tu_usuario" autocomplete="off" maxlength="30" style="text-transform:lowercase">
      <label class="flabel">Crea tu PIN (4 a 6 dígitos)</label>
      <input class="finput" id="su-pin" type="text" placeholder="•••••" maxlength="6" autocomplete="off" inputmode="numeric" style="letter-spacing:3px">
      <button class="auth-btn" id="su-btn" onclick="doSignup()">Inscribirme ⚽</button>
      <div class="auth-err" id="su-err"></div>
      <div class="lp-modal-foot">
        ¿Ya tienes cuenta? <a href="#" onclick="event.preventDefault();closeSignupModal();openLoginModal()">Ingresar</a>
      </div>
    </div>
  </div>

  <!-- MODAL: PENDING APPROVAL -->
  <div id="pending-modal" class="lp-modal" style="display:none">
    <div class="lp-modal-bg"></div>
    <div class="lp-modal-card lp-modal-pending">
      <div class="lp-pending-emoji">⏳</div>
      <div class="lp-modal-h" style="text-align:center">Esperando aprobación</div>
      <div class="lp-modal-sub" style="text-align:center" id="pending-msg">
        Tu inscripción fue registrada. El organizador te dará acceso una vez confirmado el pago.
      </div>
      <div class="lp-pending-info">
        <div class="lp-pending-row"><span>👤 Usuario</span><strong id="pending-user">—</strong></div>
        <div class="lp-pending-row"><span>💵 Costo de entrada</span><strong>$350 MXN</strong></div>
        <div class="lp-pending-row"><span>📩 Te avisamos por</span><strong>WhatsApp</strong></div>
      </div>
      <button class="auth-btn" onclick="closePendingModal()">Entendido</button>
    </div>
  </div>

</div>

<!-- APP -->
<div id="app">

  <!-- DRAWER OVERLAY -->
  <div id="drawer-overlay" onclick="closeDrawer()"></div>

  <!-- LEFT DRAWER -->
  <div id="drawer">
    <div class="drawer-header">
      <div class="drawer-logo">
        <canvas id="drawer-logo" width="28" height="28" style="border-radius:8px;display:block"></canvas>
        Al Ángulo
      </div>
      <button class="drawer-close" onclick="closeDrawer()">✕</button>
    </div>

    <div class="drawer-section">Navegación</div>
    <button class="drawer-item drawer-mobile-nav" onclick="goDrawer('inicio')" style="display:none">Inicio</button>
    <div class="drawer-item-sep drawer-mobile-nav" style="display:none"></div>
    <button class="drawer-item drawer-mobile-nav" onclick="goDrawer('grupos')" style="display:none">Fase de Grupos</button>
    <div class="drawer-item-sep drawer-mobile-nav" style="display:none"></div>
    <button class="drawer-item drawer-mobile-nav" onclick="goDrawer('bracket')" style="display:none">Bracket</button>
    <div class="drawer-item-sep drawer-mobile-nav" style="display:none"></div>
    <button class="drawer-item drawer-mobile-nav" onclick="goDrawer('miquiniela')" style="display:none">Mi Quiniela</button>
    <div class="drawer-item-sep drawer-mobile-nav" style="display:none"></div>
    <button class="drawer-item drawer-mobile-nav" onclick="goDrawer('ranking')" style="display:none">Ranking</button>
    <div class="drawer-item-sep"></div>
    <button class="drawer-item" onclick="goDrawer('misgrupos')">Mis Grupos</button>
    <div class="drawer-item-sep"></div>
    <button class="drawer-item" onclick="goDrawer('premios')">Premios</button>
    <div class="drawer-item-sep"></div>
    <button class="drawer-item" onclick="goDrawer('stats')">Estadísticas</button>
    <div class="drawer-item-sep"></div>
    <button class="drawer-item" onclick="goDrawer('reglas')">Reglas</button>
    <div class="drawer-item-sep"></div>
    <button class="drawer-item" onclick="goDrawer('chat')">Muro</button>
    <div class="drawer-item-sep"></div>
    <button class="drawer-item" onclick="goDrawer('referidos')">Mis Referidos</button>
    <div class="drawer-item-sep"></div>
    <button class="drawer-item" onclick="goDrawer('countdown')">Cuenta Regresiva</button>
    <div class="drawer-item-sep"></div>
    <button class="drawer-item" onclick="closeDrawer();openOnboard()">Ver tutorial 🎓</button>
    <div class="drawer-item-sep admin-only drawer-admin-item" style="display:none"></div>
    <button class="drawer-item admin-only drawer-admin-item" onclick="goDrawer('admin')" style="display:none">Admin</button>
    <div class="drawer-item-sep"></div>

    <div class="drawer-divider"></div>

    <div class="drawer-footer">
      <div class="drawer-code-box" onclick="copyMyCode();closeDrawer()" title="Copiar código de referido">
        <div>
          <div class="drawer-code-label">Tu código de referido</div>
          <div class="drawer-code-val" id="drawer-code-val">···</div>
        </div>
        <span style="font-size:.8rem;color:var(--green);font-weight:600">Copiar</span>
      </div>
      <button id="drawer-install-btn" onclick="triggerInstall()" style="display:none;padding:10px 14px;background:var(--g-bg);color:var(--green);border:1.5px solid var(--green2);border-radius:10px;font-family:'Plus Jakarta Sans',sans-serif;font-weight:700;font-size:.85rem;cursor:pointer;text-align:left">
        📲 Instalar app en tu teléfono
      </button>
      <button id="drawer-ios-btn" onclick="showIOSInstructions()" style="display:none;padding:10px 14px;background:var(--g-bg);color:var(--green);border:1.5px solid var(--green2);border-radius:10px;font-family:'Plus Jakarta Sans',sans-serif;font-weight:700;font-size:.85rem;cursor:pointer;text-align:left">
        📲 Instalar app en tu teléfono
      </button>
      <button class="drawer-mode-btn" id="drawer-dark-btn" onclick="toggleDark()">
        <span id="drawer-dark-icon"></span> <span id="drawer-dark-label">Modo oscuro</span>
      </button>
      <button class="drawer-mode-btn" onclick="showChangePinModal()">
        🔑 Cambiar mi PIN
      </button>
      <button class="drawer-logout" onclick="logout()">
        Cerrar sesión
      </button>
    </div>
  </div>

  <nav class="nav">
    <div style="display:flex;align-items:center;gap:10px">
      <button class="ham-btn" onclick="openDrawer()" aria-label="Menú">
        <div class="ham-line"></div>
        <div class="ham-line"></div>
        <div class="ham-line"></div>
      </button>
      <div class="nav-logo"><canvas id="nav-logo" width="34" height="34" style="border-radius:10px;display:block"></canvas>Al Ángulo</div>
    </div>
    <div class="nav-tabs">
      <button class="ntab on" onclick="go('inicio')"     data-p="inicio">Inicio</button>
      <button class="ntab"     onclick="go('grupos')"     data-p="grupos">Fase de Grupos</button>
      <button class="ntab"     onclick="go('bracket')"    data-p="bracket">Bracket</button>
      <button class="ntab"     onclick="go('miquiniela')" data-p="miquiniela">Mi Quiniela</button>
      <button class="ntab"     onclick="go('ranking')"    data-p="ranking">Ranking</button>
    </div>
    <div class="nav-user">
      <button class="bell-btn" onclick="toggleBell(event)" aria-label="Notificaciones">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/>
          <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>
        </svg>
        <span class="bell-badge" id="bell-badge" style="display:none">0</span>
      </button>
      Hola, <b id="nav-u"></b>
    </div>
  </nav>

  <!-- Dropdown notificaciones -->
  <div id="bell-panel" class="bell-panel" style="display:none">
    <div class="bell-panel-h">
      <span>Notificaciones</span>
      <button class="bell-panel-clear" onclick="markAllNotifsRead()">Marcar leídas</button>
    </div>
    <div class="bell-panel-body" id="bell-list">
      <div class="bell-empty">Sin notificaciones nuevas</div>
    </div>
  </div>

  <!-- INICIO (HOMEPAGE / DASHBOARD) -->
  <div class="page on" id="page-inicio">
    <div class="hp-greeting">
      <div class="hp-hi" id="hp-hi">Bienvenido de vuelta 👋</div>
      <div class="hp-name" id="hp-name">Cargando…</div>
    </div>

    <div class="hp-body" id="hp-body">
      <!-- HERO CARD: tu posición -->
      <div class="hp-card hp-feat hp-anim" data-anim-i="0">
        <div class="hp-feat-mesh"></div>
        <div class="hp-feat-pts"><span>tus puntos</span><strong id="hp-pts" data-target="0">0</strong></div>
        <div class="hp-feat-lbl">Tu posición ahora</div>
        <div class="hp-feat-pos"><span id="hp-pos">—</span><sup id="hp-pos-suffix"></sup></div>
        <div class="hp-feat-of" id="hp-pos-sub">Aún sin clasificar</div>
      </div>

      <!-- PROGRESO -->
      <div class="hp-card hp-anim" data-anim-i="1">
        <div class="hp-prog-h">
          <div class="hp-prog-t">⚡ Tus predicciones</div>
          <div class="hp-prog-pct" id="hp-prog-pct">0%</div>
        </div>
        <div class="hp-prog-bar"><div class="hp-prog-fill" id="hp-prog-fill" style="width:0%"></div></div>
        <div class="hp-prog-sub" id="hp-prog-sub">0 de 104 partidos</div>
      </div>

      <!-- ACCIONES RÁPIDAS -->
      <div class="hp-h hp-anim" data-anim-i="2">Acciones rápidas</div>
      <div class="hp-actions hp-anim" data-anim-i="3">
        <button class="hp-act" onclick="go('grupos')" type="button">
          <div class="hp-act-icon" style="background:rgba(0,196,106,.14);color:#006838">⚽</div>
          <div class="hp-act-text"><div class="hp-act-t">Predecir grupos</div><div class="hp-act-s" id="hp-act-grupos">—</div></div>
        </button>
        <button class="hp-act" onclick="go('bracket')" type="button">
          <div class="hp-act-icon" style="background:rgba(0,82,204,.14);color:#003087">📈</div>
          <div class="hp-act-text"><div class="hp-act-t">Llenar bracket</div><div class="hp-act-s" id="hp-act-bracket">—</div></div>
        </button>
        <button class="hp-act" onclick="goDrawer('misgrupos')" type="button">
          <div class="hp-act-icon" style="background:rgba(255,180,0,.18);color:#8a5a00">👥</div>
          <div class="hp-act-text"><div class="hp-act-t">Mis grupos</div><div class="hp-act-s" id="hp-act-misgrupos">—</div></div>
        </button>
        <button class="hp-act" onclick="go('chat')" type="button">
          <div class="hp-act-icon" style="background:rgba(192,0,26,.14);color:#c0001a">💬</div>
          <div class="hp-act-text"><div class="hp-act-t">Muro</div><div class="hp-act-s" id="hp-act-muro">—</div></div>
        </button>
      </div>

      <!-- ACTIVIDAD RECIENTE -->
      <div class="hp-h hp-anim" data-anim-i="4">Actividad reciente</div>
      <div class="hp-card hp-anim" data-anim-i="5" id="hp-activity-card">
        <div id="hp-activity-list">
          <div style="padding:1rem;text-align:center;color:var(--ink3);font-size:.82rem">Cargando…</div>
        </div>
        <div class="hp-card-foot" onclick="go('chat')">Ir al muro →</div>
      </div>
    </div>
  </div>

  <!-- GRUPOS -->
  <div class="page" id="page-grupos">
    <div class="ph2 grp-hero">
      <div class="ph2-sticky" id="grp-sticky">
        <div class="ph2-sticky-t">Fase de Grupos</div>
        <div class="ph2-sticky-prog">
          <div class="ph2-sticky-track"><div class="ph2-sticky-fill" id="grp-sticky-fill" style="width:0%"></div></div>
          <span class="ph2-sticky-pct" id="grp-sticky-pct">0%</span>
        </div>
      </div>
      <div class="ph2-row">
        <div class="ph2-l">
          <div class="ph2-eyebrow"><span class="ph2-eyebrow-dot"></span>Predicciones abiertas hasta 11 jun</div>
          <h1 class="ph2-h1">Fase de Grupos</h1>
          <p class="ph2-sub">Predice el marcador de cada partido. Las tablas se actualizan automáticamente conforme llenas tus pronósticos.</p>
          <div class="ph2-stats">
            <div class="ph2-stat"><span class="ph2-stat-icon">⚽</span><strong>48</strong>partidos</div>
            <div class="ph2-stat"><span class="ph2-stat-icon">📊</span><strong>12</strong>grupos</div>
            <div class="ph2-stat"><span class="ph2-stat-icon">🌎</span><strong>48</strong>selecciones</div>
          </div>
        </div>
      </div>
      <div class="ph2-prog">
        <div class="ph2-prog-h"><span class="ph2-prog-t">⚡ Tu progreso</span><span class="ph2-prog-pct" id="ptxt">0 / 48</span></div>
        <div class="ph2-prog-track"><div class="ph2-prog-fill" id="pbar" style="width:0%"></div></div>
        <div class="ph2-prog-sub" id="psub">Empieza llenando tus predicciones</div>
      </div>
    </div>
    <div class="gg" id="gg"></div>
  </div>

  <!-- BRACKET -->
  <div class="page" id="page-bracket">
    <div class="ph2 br-page-hero">
      <div class="ph2-sticky" id="br-sticky">
        <div class="ph2-sticky-t">Bracket</div>
        <div class="ph2-sticky-prog">
          <div class="ph2-sticky-track"><div class="ph2-sticky-fill" id="br-sticky-fill" style="width:0%"></div></div>
          <span class="ph2-sticky-pct" id="br-sticky-pct">0%</span>
        </div>
      </div>
      <div class="ph2-row">
        <div class="ph2-l">
          <div class="ph2-eyebrow b"><span class="ph2-eyebrow-dot"></span>Eliminación directa · empieza 27 jun</div>
          <h1 class="ph2-h1">Bracket Eliminatorio</h1>
          <p class="ph2-sub">Selecciona al ganador de cada partido. Cada acierto en el bracket vale más que en grupos.</p>
          <div class="ph2-stats">
            <div class="ph2-stat"><span class="ph2-stat-icon">🎯</span><strong>31</strong>partidos</div>
            <div class="ph2-stat"><span class="ph2-stat-icon">🏆</span><strong>5</strong>rondas</div>
          </div>
        </div>
        <div class="ph2-actions">
          <button class="ph2-btn-secondary" onclick="exportBracketPDF()">📄 Exportar PDF</button>
        </div>
      </div>
      <div class="ph2-prog">
        <div class="ph2-prog-h"><span class="ph2-prog-t">⚡ Tu bracket</span><span class="ph2-prog-pct" id="br-prog-pct">0 / 31</span></div>
        <div class="ph2-prog-track"><div class="ph2-prog-fill" id="br-prog-fill" style="width:0%"></div></div>
        <div class="ph2-prog-sub" id="br-prog-sub">Empieza eligiendo a los ganadores</div>
      </div>
    </div>
    <div class="br-outer"><div class="br-flex" id="bk"></div></div>
  </div>

  <!-- RANKING -->
  <div class="page" id="page-ranking">
    <div class="ph2 rk-page-hero">
      <div class="ph2-sticky" id="rk-sticky">
        <div class="ph2-sticky-t">Ranking</div>
        <div class="ph2-sticky-prog" id="rk-sticky-info">
          <span style="font-size:.74rem;font-weight:700;color:var(--ink3)">Tu posición</span>
          <span class="ph2-sticky-pct" id="rk-sticky-pos">—</span>
        </div>
      </div>
      <div class="ph2-row">
        <div class="ph2-l">
          <div class="ph2-eyebrow r"><span class="ph2-eyebrow-dot"></span><span id="rk-eyebrow-txt">Ranking en vivo</span></div>
          <h1 class="ph2-h1">Tabla de Posiciones</h1>
          <p class="ph2-sub">Actualizada con los resultados oficiales ingresados por el admin. Click en cualquier jugador para ver su perfil.</p>
          <div class="ph2-stats" id="rk-stats">
            <div class="ph2-stat"><span class="ph2-stat-icon">👥</span><strong id="rk-stat-players">—</strong>jugadores</div>
            <div class="ph2-stat"><span class="ph2-stat-icon">⚡</span><strong id="rk-stat-max">—</strong>pts máximo</div>
          </div>
        </div>
        <div class="ph2-actions">
          <span id="online-badge" class="rk-online-pill" style="display:none">
            <span class="rk-online-dot"></span>
            <strong id="online-count">0</strong> en línea
          </span>
          <button class="ph2-btn-secondary" onclick="exportRanking()">📸 Exportar imagen</button>
        </div>
      </div>
      <div class="rk-mypos" id="rk-mypos" style="display:none">
        <div class="rk-mypos-l">
          <div class="rk-mypos-pos" id="rk-mypos-pos">—</div>
          <div class="rk-mypos-info">
            <div class="rk-mypos-lbl">Tu posición</div>
            <div class="rk-mypos-name" id="rk-mypos-name">de — jugadores</div>
          </div>
        </div>
        <div class="rk-mypos-r">
          <div class="rk-mypos-pts" id="rk-mypos-pts">0</div>
          <div class="rk-mypos-pts-lbl">puntos</div>
        </div>
      </div>
    </div>
    <div id="rk-wrap"></div>
    <div id="rk-history-wrap" style="margin-top:1.5rem"></div>
  </div>

  <!-- MI QUINIELA -->
  <div class="page" id="page-miquiniela">
    <div class="ph2 mq-page-hero">
      <div class="ph2-sticky" id="mq-sticky">
        <div class="ph2-sticky-t">Mi Quiniela</div>
        <div class="ph2-sticky-prog">
          <span style="font-size:.74rem;font-weight:700;color:var(--ink3)">Total</span>
          <span class="ph2-sticky-pct" id="mq-sticky-pts">0 pts</span>
        </div>
      </div>
      <div class="ph2-row">
        <div class="ph2-l">
          <div class="ph2-eyebrow b"><span class="ph2-eyebrow-dot"></span>Tu pronóstico vs los resultados reales</div>
          <h1 class="ph2-h1">Mi Quiniela</h1>
          <p class="ph2-sub">Tu predicción vs lo que está pasando — partido por partido. Cada acierto suma a tu total.</p>
        </div>
      </div>
      <div id="mq-summary" style="display:none"></div>
      <div class="mq-stats" id="mq-stats-wrap" style="display:none"></div>
    </div>
    <div id="mq-wrap"></div>
  </div>

  <!-- CHAT -->
  <!-- MURO -->
  <!-- MURO -->
  <div class="page" id="page-chat">
    <div class="ph2 wp-page-hero">
      <div class="ph2-sticky" id="wp-sticky">
        <div class="ph2-sticky-t">Muro</div>
        <div class="ph2-sticky-prog">
          <span style="font-size:.74rem;font-weight:700;color:var(--ink3)" id="wp-sticky-stat">— publicaciones</span>
        </div>
      </div>
      <div class="ph2-row">
        <div class="ph2-l">
          <div class="ph2-eyebrow r"><span class="ph2-eyebrow-dot"></span><span id="wp-eyebrow-txt">En vivo</span></div>
          <h1 class="ph2-h1">Muro</h1>
          <p class="ph2-sub">Comparte cómo va tu quiniela, reacciona a las jugadas, comenta los partidos del Mundial.</p>
          <div class="ph2-stats" id="wp-stats">
            <div class="ph2-stat"><strong id="wp-stat-posts">—</strong>publicaciones</div>
            <div class="ph2-stat"><strong id="wp-stat-reactions">—</strong>reacciones</div>
          </div>
        </div>
      </div>
    </div>
    <div id="wall-wrap"></div>
  </div>

  <!-- ESTADÍSTICAS -->
  <div class="page" id="page-stats">
    <div class="ph2 st-page-hero">
      <div class="ph2-sticky" id="st-sticky">
        <div class="ph2-sticky-t">Estadísticas</div>
        <div class="ph2-sticky-prog">
          <span style="font-size:.74rem;font-weight:700;color:var(--ink3)" id="st-sticky-stat">— elegibles</span>
        </div>
      </div>
      <div class="ph2-row">
        <div class="ph2-l">
          <div class="ph2-eyebrow b"><span class="ph2-eyebrow-dot"></span><span id="st-eyebrow-txt">Estadísticas en vivo</span></div>
          <h1 class="ph2-h1">Estadísticas</h1>
          <p class="ph2-sub">Datos curiosos, campeones más seleccionados, partidos sorpresa y los reyes del marcador exacto.</p>
        </div>
      </div>
      <div class="st-overview" id="st-overview" style="display:none"></div>
      <div class="st-disclaimer" id="st-disclaimer" style="display:none"></div>
    </div>
    <div id="stats-wrap"></div>
  </div>

  <!-- PREMIOS -->
  <div class="page" id="page-premios">
    <div id="premios-wrap"></div>
  </div>

  <!-- REGLAS -->
  <div class="page" id="page-reglas">
    <div class="ph2 rg-page-hero">
      <div class="ph2-sticky" id="rg-sticky">
        <div class="ph2-sticky-t">Reglas</div>
        <div class="ph2-sticky-prog">
          <span style="font-size:.74rem;font-weight:700;color:var(--ink3)">7 secciones</span>
        </div>
      </div>
      <div class="ph2-row">
        <div class="ph2-l">
          <div class="ph2-eyebrow b"><span class="ph2-eyebrow-dot"></span>Reglamento oficial · 7 secciones</div>
          <h1 class="ph2-h1">Reglas del torneo</h1>
          <p class="ph2-sub">Todo lo que necesitas saber para jugar Al Ángulo. Sistema de puntos, bracket, premios, fechas y casos especiales.</p>
        </div>
      </div>
    </div>
    <div id="reglas-wrap"></div>
  </div>

  <!-- MIS REFERIDOS -->
  <div class="page" id="page-misgrupos">
    <div class="ph">
      <div class="ph-left"><div class="ph-h">Mis Grupos</div><div class="ph-s">Crea o únete a un grupo privado con amigos</div></div>
    </div>
    <div id="misgrupos-wrap"></div>
  </div>

  <div class="page" id="page-referidos">
    <div class="ph"><div class="ph-left"><div class="ph-h">Mis Referidos</div><div class="ph-s">Personas que entraron a la quiniela con tu código</div></div></div>
    <div id="referidos-wrap"></div>
  </div>

  <!-- NOTIFICACIONES -->
  <!-- COUNTDOWN -->
  <div class="page" id="page-countdown">
    <div class="ph">
      <div class="ph-left"><div class="ph-h">Cuenta Regresiva</div><div class="ph-s">Tiempo restante para el inicio del Mundial</div></div>
    </div>
    <div id="countdown-wrap"></div>
  </div>

  <!-- ADMIN -->
  <div class="page" id="page-admin">
    <div class="ph"><div class="ph-left"><div class="ph-h">Panel Admin</div><div class="ph-s">Registra resultados reales · Los puntos se recalculan automáticamente</div></div></div>
    <div id="adm-wrap"></div>
  </div>
</div>

<!-- MODAL MARCADOR -->
<div id="modal">
  <div class="modal-box">
    <div class="modal-h" id="mh"></div>
    <div class="modal-s" id="ms"></div>
    <div class="modal-teams">
      <div class="mt">
        <div class="mt-flag" id="mhf"></div>
        <div class="mt-name" id="mhn"></div>
        <input class="mt-inp" id="mhi" type="number" min="0" max="20" placeholder="0">
      </div>
      <div class="modal-vs">–</div>
      <div class="mt">
        <div class="mt-flag" id="maf"></div>
        <div class="mt-name" id="man"></div>
        <input class="mt-inp" id="mai" type="number" min="0" max="20" placeholder="0">
      </div>
    </div>
    <div class="modal-btns">
      <button class="mbtn mbtn-del" onclick="clearSc()">Borrar</button>
      <button class="mbtn mbtn-cancel" onclick="closeM()">Cancelar</button>
      <button class="mbtn mbtn-save" onclick="saveSc()">Guardar ✓</button>
    </div>
    <button id="m-share-btn" onclick="openSharePrediction(_m.id)" style="display:none;width:100%;margin-top:10px;padding:10px;background:transparent;border:1.5px solid var(--border);border-radius:10px;color:var(--ink2);font-family:'Plus Jakarta Sans',sans-serif;font-size:.82rem;font-weight:700;cursor:pointer;transition:all .2s" onmouseover="this.style.borderColor='var(--blue2)';this.style.color='var(--blue2)'" onmouseout="this.style.borderColor='var(--border)';this.style.color='var(--ink2)'">📤 Compartir esta predicción</button>
  </div>
</div>


<!-- MODAL: ONBOARDING (primera vez) -->
<div id="onboard-modal" class="onb-modal" style="display:none">
  <div class="onb-bg"></div>
  <div class="onb-card">
    <button class="onb-skip" onclick="closeOnboard(true)">Saltar</button>
    <div class="onb-body" id="onb-body"></div>
    <div class="onb-foot">
      <div class="onb-dots" id="onb-dots"></div>
      <button class="onb-next" id="onb-next-btn" onclick="onbNext()">Siguiente →</button>
    </div>
  </div>
</div>

<!-- MODAL: COMPARTIR PREDICCIÓN -->
<div id="share-modal" class="prof-modal" style="display:none">
  <div class="prof-bg" onclick="closeShare()"></div>
  <div class="prof-card" id="share-card" style="max-width:380px">
    <button class="prof-close" onclick="closeShare()" aria-label="Cerrar">✕</button>
    <div style="padding:24px 22px 22px">
      <div style="font-weight:800;font-size:1.1rem;color:var(--ink);margin-bottom:4px;letter-spacing:-.3px">Compartir predicción</div>
      <div style="font-size:.78rem;color:var(--ink3);margin-bottom:18px">Vista previa de la imagen que se va a compartir</div>
      <div id="share-preview-wrap" style="background:var(--bg);border-radius:14px;padding:12px;display:flex;align-items:center;justify-content:center;min-height:200px">
        <canvas id="share-canvas" width="900" height="600" style="max-width:100%;height:auto;border-radius:10px;box-shadow:0 8px 24px rgba(0,0,0,.18);display:block"></canvas>
      </div>
      <div style="display:flex;gap:8px;margin-top:18px">
        <button class="prof-btn" onclick="closeShare()" style="flex:1">Cancelar</button>
        <button class="prof-btn prof-btn-vs" id="share-do-btn" onclick="doShare()" style="flex:2">📤 Compartir</button>
      </div>
    </div>
  </div>
</div>

<!-- MODAL: PERFIL DE USUARIO -->
<div id="profile-modal" class="prof-modal" style="display:none">
  <div class="prof-bg" onclick="closeProfile()"></div>
  <div class="prof-card" id="prof-card">
    <button class="prof-close" onclick="closeProfile()" aria-label="Cerrar">✕</button>
    <div id="prof-content"></div>
  </div>
</div>

<!-- MODAL: COMPARADOR 1V1 -->
<div id="compare-modal" class="prof-modal" style="display:none">
  <div class="prof-bg" onclick="closeCompare()"></div>
  <div class="prof-card prof-card-wide" id="cmp-card">
    <button class="prof-close" onclick="closeCompare()" aria-label="Cerrar">✕</button>
    <div id="cmp-content"></div>
  </div>
</div>

<div id="toast"></div>

<script>
// ══════════════════════════════════════════════════════
//  STATIC DATA
// ══════════════════════════════════════════════════════
const FL={
  MEX:'🇲🇽',RSA:'🇿🇦',KOR:'🇰🇷',CZE:'🇨🇿',
  CAN:'🇨🇦',BIH:'🇧🇦',QAT:'🇶🇦',SUI:'🇨🇭',
  BRA:'🇧🇷',MAR:'🇲🇦',HAI:'🇭🇹',SCO:'🏴󠁧󠁢󠁳󠁣󠁴󠁿',
  USA:'🇺🇸',PAR:'🇵🇾',AUS:'🇦🇺',TUR:'🇹🇷',
  GER:'🇩🇪',CUW:'🇨🇼',CIV:'🇨🇮',ECU:'🇪🇨',
  NED:'🇳🇱',JPN:'🇯🇵',SWE:'🇸🇪',TUN:'🇹🇳',
  BEL:'🇧🇪',EGY:'🇪🇬',IRN:'🇮🇷',NZL:'🇳🇿',
  ESP:'🇪🇸',CPV:'🇨🇻',KSA:'🇸🇦',URU:'🇺🇾',
  FRA:'🇫🇷',SEN:'🇸🇳',IRQ:'🇮🇶',NOR:'🇳🇴',
  ARG:'🇦🇷',ALG:'🇩🇿',AUT:'🇦🇹',JOR:'🇯🇴',
  POR:'🇵🇹',COD:'🇨🇩',UZB:'🇺🇿',COL:'🇨🇴',
  ENG:'🏴󠁧󠁢󠁥󠁮󠁧󠁿',CRO:'🇭🇷',GHA:'🇬🇭',PAN:'🇵🇦',
  IRQ:'🇮🇶'
};
const NM={
  MEX:'México',RSA:'Sudáfrica',KOR:'Corea',CZE:'Rep. Checa',
  CAN:'Canadá',BIH:'Bosnia',QAT:'Qatar',SUI:'Suiza',
  BRA:'Brasil',MAR:'Marruecos',HAI:'Haití',SCO:'Escocia',
  USA:'EE.UU.',PAR:'Paraguay',AUS:'Australia',TUR:'Turquía',
  GER:'Alemania',CUW:'Curazao',CIV:'C. de Marfil',ECU:'Ecuador',
  NED:'Países Bajos',JPN:'Japón',SWE:'Suecia',TUN:'Túnez',
  BEL:'Bélgica',EGY:'Egipto',IRN:'Irán',NZL:'N. Zelanda',
  ESP:'España',CPV:'Cabo Verde',KSA:'Arabia Saudí',URU:'Uruguay',
  FRA:'Francia',SEN:'Senegal',IRQ:'Iraq',NOR:'Noruega',
  ARG:'Argentina',ALG:'Argelia',AUT:'Austria',JOR:'Jordania',
  POR:'Portugal',COD:'Congo',UZB:'Uzbekistán',COL:'Colombia',
  ENG:'Inglaterra',CRO:'Croacia',GHA:'Ghana',PAN:'Panamá',
  IRQ:'Iraq'
};
const GROUPS={
  A:{teams:['MEX','RSA','KOR','CZE']},      // Rep. Checa ganó vs Dinamarca
  B:{teams:['CAN','BIH','QAT','SUI']},       // Bosnia ganó vs Italia
  C:{teams:['BRA','MAR','HAI','SCO']},
  D:{teams:['USA','PAR','AUS','TUR']},
  E:{teams:['GER','CUW','CIV','ECU']},
  F:{teams:['NED','JPN','SWE','TUN']},        // Suecia ganó vs Polonia
  G:{teams:['BEL','EGY','IRN','NZL']},
  H:{teams:['ESP','CPV','KSA','URU']},
  I:{teams:['FRA','SEN','IRQ','NOR']},
  J:{teams:['ARG','ALG','AUT','JOR']},
  K:{teams:['POR','COD','UZB','COL']},        // Congo ganó vs Jamaica
  L:{teams:['ENG','CRO','GHA','PAN']}
};

// All 6 round-robin matches per group in FIFA matchday order
// J1: 1v2, 3v4 | J2: 1v3, 2v4 | J3: 1v4, 2v3
function mkMatches(){
  const all={};
  Object.entries(GROUPS).forEach(([g,{teams}])=>{
    const [t1,t2,t3,t4]=teams;
    all[g]=[
      {id:`${g}1`,h:t1,a:t2}, // J1: seed1 vs seed2
      {id:`${g}2`,h:t3,a:t4}, // J1: seed3 vs seed4
      {id:`${g}3`,h:t1,a:t3}, // J2: seed1 vs seed3
      {id:`${g}4`,h:t2,a:t4}, // J2: seed2 vs seed4
      {id:`${g}5`,h:t1,a:t4}, // J3: seed1 vs seed4
      {id:`${g}6`,h:t2,a:t3}, // J3: seed2 vs seed3
    ];
  });
  return all;
}
const GM=mkMatches(); // group matches

// ── OFFICIAL R32 BRACKET (FIFA schedule M73-M88) ──
// '3' = slot filled by best 3rd from its group (see THIRD_SLOT map)
const R32=[
  ['r32_0',  '2A',  '2B'],   // M73: 2A vs 2B
  ['r32_1',  '1E',  '3'],    // M74: 1E vs 3C
  ['r32_2',  '1F',  '2C'],   // M75: 1F vs 2C
  ['r32_3',  '1C',  '2F'],   // M76: 1C vs 2F
  ['r32_4',  '1I',  '3'],    // M77: 1I vs 3F
  ['r32_5',  '2E',  '2I'],   // M78: 2E vs 2I
  ['r32_6',  '1A',  '3'],    // M79: 1A vs 3H
  ['r32_7',  '1L',  '3'],    // M80: 1L vs 3I
  ['r32_8',  '1D',  '3'],    // M81: 1D vs 3B
  ['r32_9',  '1G',  '3'],    // M82: 1G vs 3A
  ['r32_10', '2K',  '2L'],   // M83: 2K vs 2L
  ['r32_11', '1H',  '2J'],   // M84: 1H vs 2J
  ['r32_12', '1B',  '3'],    // M85: 1B vs 3E
  ['r32_13', '1J',  '2H'],   // M86: 1J vs 2H
  ['r32_14', '1K',  '3'],    // M87: 1K vs 3D
  ['r32_15', '2D',  '2G'],   // M88: 2D vs 2G
];

const USERS=[
  {u:'admin', p:'0000', admin:true,  code:'ADM'},
  {u:'demo',  p:'1234', admin:false, code:'DEM'},
  // All other users come from the DB
];
// ── SCORING SYSTEM: Opción D + Enfoque 2 ──
// Grupos: +1 acertar W/E/L, +2 bonus marcador exacto
// Eliminatoria (sin multiplicadores, cada ronda tiene valor fijo):
//   D16: ganador +1, exacto +2 adicional
//   Octavos: ganador +2, exacto +3 adicional
//   Cuartos: ganador +3, exacto +5 adicional
//   Semis:   ganador +5, exacto +8 adicional
//   Final:   ganador +10, exacto +15 adicional
const PTS={
  // Grupos
  grpResult: 1,   // acertar resultado (W/E/L)
  grpExact:  2,   // bonus marcador exacto en grupos
  // Eliminatoria: [ganador, bonus_exacto]
  r32: [2,  4],   // Dieciseisavos
  r16: [3,  6],   // Octavos
  qf:  [5,  10],  // Cuartos
  sf:  [7,  14],  // Semis
  f:   [10, 20],  // Final
};

// ── SIMULATED USERS for ranking demo ──
const SIM_NAMES=['Sofía','Rodrigo','Valentina','Emilio','Camila','Diego','Paola','Andrés','Natalia','JP (tú)'];
// Pre-baked scores for the demo ranking
const SIM_PTS=[
  {grupos:18,bracket:24,total:42},
  {grupos:16,bracket:20,total:36},
  {grupos:14,bracket:18,total:32},
  {grupos:12,bracket:16,total:28},
  {grupos:10,bracket:14,total:24},
  {grupos:8, bracket:14,total:22},
  {grupos:10,bracket:10,total:20},
  {grupos:6, bracket:12,total:18},
  {grupos:8, bracket:8, total:16},
  {grupos:4, bracket:10,total:14},
];

// ══════════════════════════════════════════════════════
//  API
// ══════════════════════════════════════════════════════
const API='https://alangulo-backend-production.up.railway.app';

// ── Early declarations (used before function definitions) ──

async function api(method, path, body){
  const opts={ method, headers:{'Content-Type':'application/json'} };
  if(body) opts.body=JSON.stringify(body);
  const r=await fetch(API+path, opts);
  if(r.status===304) return {};
  if(!r.ok){ const e=await r.json().catch(()=>({error:'Error'})); throw new Error(e.error||'Error'); }
  return r.json();
}

// ══════════════════════════════════════════════════════
//  STATE
// ══════════════════════════════════════════════════════
let CU=null;
let picks={};
let results={};
let refs={};
let dynUsers=[];

function load(){
  // Solo cargamos CU de localStorage (sesión local)
  CU=JSON.parse(localStorage.getItem('q26u')||'null');
}

async function loadAllData(){
  try {
    picks = await api('GET','/api/picks');
    // Remove admin picks from memory so admins never appear in ranking
    Object.keys(picks).forEach(u=>{
      if(USERS.find(x=>x.u===u&&x.admin===true)||u==='admin') delete picks[u];
    });
    if(CU && !picks[CU.u] && !CU.admin) picks[CU.u]={sc:{},br:{}};
    results = await api('GET','/api/results');
  } catch(e){ console.error('Error cargando datos:',e); }
}

async function loadMyPicks(){
  if(!CU) return;
  try {
    const data = await api('GET',`/api/picks/${CU.u}`);
    picks[CU.u] = data;
  } catch(e){ picks[CU.u]={sc:{},br:{}}; }
}

async function persist(){
  localStorage.setItem('q26u',JSON.stringify(CU));
  if(CU && picks[CU.u]){
    try {
      await api('POST',`/api/picks/${CU.u}`,{data:picks[CU.u]});
    } catch(e){ console.error('Error guardando picks:',e); toast('⚠️ Error guardando, intenta de nuevo'); }
  }
}

function persistLocal(){
  // Solo guarda sesión — sin llamada al backend
  localStorage.setItem('q26u',JSON.stringify(CU));
}

// All users — ahora viene del backend, dynUsers es cache local
function allUsers(){ return [...USERS,...dynUsers]; }

function ensure(u){
  if(!picks[u]) picks[u]={sc:{},br:{}};
  if(!picks[u].sc) picks[u].sc={};
  if(!picks[u].br) picks[u].br={};
}

// ══════════════════════════════════════════════════════
//  AUTH
// ══════════════════════════════════════════════════════
// Generate deterministic 3-letter code for a username (fallback if not in USERS list)
function genCode(u){
  const found=allUsers().find(x=>x.u===u);
  if(found?.code) return found.code;
  const base=(u.replace(/[^a-z]/gi,'').toUpperCase()+'XXX').slice(0,3);
  return base;
}

function doLogin(){
  const u=document.getElementById('lu').value.trim().toLowerCase();
  const p=document.getElementById('lp').value.trim();
  const refCode=document.getElementById('lref').value.trim().toUpperCase();
  const errEl=document.getElementById('lerr');
  errEl.textContent='';

  api('POST','/api/login',{username:u, pin:p, refCode})
    .then(user=>{
      // Preserve refSeen from previous session so modal doesn't re-appear
      const prev = JSON.parse(localStorage.getItem('q26u')||'null');
      const refSeen = prev?.u === user.username ? (prev.refSeen || false) : false;
      CU={u:user.username, admin:user.is_admin, code:user.code, refSeen};
      localStorage.setItem('q26u',JSON.stringify(CU));
      boot();
    })
    .catch(e=>{
      // Si la cuenta está pendiente de aprobación, mostrar el modal correspondiente
      const msg = e.message || '';
      if (msg.includes('pending_approval') || msg.includes('esperando aprobación')) {
        // Limpiar el prefijo técnico del mensaje
        const cleanMsg = msg.replace(/^pending_approval:?\s*/i, '').trim()
          || 'Tu cuenta está esperando aprobación del organizador.';
        closeLoginModal();
        showPendingModal(u, cleanMsg);
        return;
      }
      errEl.textContent = msg || 'Usuario o PIN incorrecto.';
    });
}
// ══════════════════════════════════════════════════════
//  LANDING PÚBLICO — modales, signup, countdown, animaciones
// ══════════════════════════════════════════════════════

let _lpCdTimer = null;
let _lpObserver = null;
let _crslTimer = null;
let _crslIdx = 0;
let _phoneTimer = null;
let _phoneIdx = 0;

function initLanding(){
  // Iniciar countdown del hero
  startLandingCountdown();
  // Iniciar animaciones on-scroll
  startLandingReveal();
  // Animar el header al hacer scroll
  startHeaderShadow();
  // Carrusel de features
  startCarousel();
  // Pasos animados (se disparan cuando entran al viewport)
  startPasosAnimation();
  // Phone rotator del hero
  startPhoneRotator();
  // Showcase tabs
  startShowcase();
  // FAQ accordion
  startFaq();
  // FAB sticky mobile
  startFab();
  // Cursor trail (solo desktop)
  startCursorTrail();
}

function startLandingCountdown(){
  const wrap = document.getElementById('lp-countdown');
  if(!wrap) return;
  if(_lpCdTimer) clearInterval(_lpCdTimer);

  const TARGET = new Date('2026-06-11T13:00:00-06:00');
  let prev = {d:-1, h:-1, m:-1, s:-1};

  function tick(){
    const now = new Date();
    const diff = TARGET - now;
    if(diff <= 0){
      wrap.innerHTML = `<div style="text-align:center;font-weight:800;font-size:1.4rem;background:var(--grad-tri);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;padding:1rem">¡El Mundial ya comenzó! ⚽🌍</div>`;
      clearInterval(_lpCdTimer);
      return;
    }
    const days = Math.floor(diff/86400000);
    const hrs  = Math.floor((diff%86400000)/3600000);
    const mins = Math.floor((diff%3600000)/60000);
    const secs = Math.floor((diff%60000)/1000);

    if(prev.s === -1){
      // Render inicial
      wrap.innerHTML = `
        <div class="lp-cd-card">
          <div class="lp-cd-label">⚽ El Mundial comienza en</div>
          <div class="lp-cd-grid">
            <div class="lp-cd-block"><div class="lp-cd-num" id="lp-cd-d">${String(days).padStart(2,'0')}</div><div class="lp-cd-sublbl">Días</div></div>
            <div class="lp-cd-sep">:</div>
            <div class="lp-cd-block"><div class="lp-cd-num" id="lp-cd-h">${String(hrs).padStart(2,'0')}</div><div class="lp-cd-sublbl">Horas</div></div>
            <div class="lp-cd-sep">:</div>
            <div class="lp-cd-block"><div class="lp-cd-num" id="lp-cd-m">${String(mins).padStart(2,'0')}</div><div class="lp-cd-sublbl">Min</div></div>
            <div class="lp-cd-sep">:</div>
            <div class="lp-cd-block"><div class="lp-cd-num" id="lp-cd-s">${String(secs).padStart(2,'0')}</div><div class="lp-cd-sublbl">Seg</div></div>
          </div>
        </div>`;
    } else {
      // Solo actualizar lo que cambió
      const map = {d:['lp-cd-d',days], h:['lp-cd-h',hrs], m:['lp-cd-m',mins], s:['lp-cd-s',secs]};
      Object.entries(map).forEach(([k,[id,v]])=>{
        if(v !== prev[k]){
          const el = document.getElementById(id);
          if(el){
            el.classList.remove('tick');
            void el.offsetWidth;
            el.textContent = String(v).padStart(2,'0');
            el.classList.add('tick');
          }
        }
      });
    }
    prev = {d:days, h:hrs, m:mins, s:secs};
  }
  tick();
  _lpCdTimer = setInterval(tick, 1000);
}

function startLandingReveal(){
  // IntersectionObserver para animar elementos al hacer scroll
  if(_lpObserver) _lpObserver.disconnect();
  const els = document.querySelectorAll('#auth .lp-reveal');
  if(!els.length) return;

  // Si el navegador no soporta IntersectionObserver, mostrar todo
  if(!('IntersectionObserver' in window)){
    els.forEach(el=>el.classList.add('lp-show'));
    return;
  }

  _lpObserver = new IntersectionObserver((entries)=>{
    entries.forEach((entry, i)=>{
      if(entry.isIntersecting){
        // Stagger ligero entre elementos visibles a la vez
        setTimeout(()=>entry.target.classList.add('lp-show'), i*60);
        _lpObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

  els.forEach(el=>{
    // Si ya está visible al cargar (por encima del fold), animarlo de inmediato
    const rect = el.getBoundingClientRect();
    if(rect.top < window.innerHeight * 0.92){
      setTimeout(()=>el.classList.add('lp-show'), 80);
    } else {
      _lpObserver.observe(el);
    }
  });
}

function startHeaderShadow(){
  const header = document.querySelector('#auth .lp-header');
  if(!header) return;
  const onScroll = ()=>{
    if(window.scrollY > 8){
      header.style.boxShadow = '0 4px 16px rgba(0,0,0,.06)';
    } else {
      header.style.boxShadow = '';
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// Carrusel de features
function startCarousel(){
  const track = document.getElementById('crsl-track');
  if(!track) return;
  const cards = track.querySelectorAll('.crsl-card');
  if(!cards.length) return;
  const dotsWrap = document.getElementById('crsl-dots');
  if(!dotsWrap) return;

  // Limpiar timer previo si existe
  if(_crslTimer){ clearInterval(_crslTimer); _crslTimer = null; }

  _crslIdx = 0;

  // Construir dots (limpiar primero por si re-init)
  dotsWrap.innerHTML = '';
  cards.forEach((_, i)=>{
    const b = document.createElement('button');
    b.className = 'crsl-dot' + (i === 0 ? ' active' : '');
    b.setAttribute('aria-label', `Ir al feature ${i+1}`);
    b.onclick = ()=>crslGo(i, true);
    dotsWrap.appendChild(b);
  });

  function crslGo(n, manual){
    _crslIdx = (n + cards.length) % cards.length;
    cards.forEach((c, i)=>{
      c.classList.remove('active','prev','next');
      if(i === _crslIdx) c.classList.add('active');
      else if(i < _crslIdx) c.classList.add('prev');
      else c.classList.add('next');
    });
    dotsWrap.querySelectorAll('.crsl-dot').forEach((d, i)=>{
      d.classList.toggle('active', i === _crslIdx);
    });
    if(manual) crslResetAuto();
  }
  function crslResetAuto(){
    if(_crslTimer) clearInterval(_crslTimer);
    _crslTimer = setInterval(()=>crslGo(_crslIdx + 1, false), 5000);
  }
  // Exponer para flechas
  window._crslGo = crslGo;

  const prevBtn = document.getElementById('crsl-prev');
  const nextBtn = document.getElementById('crsl-next');
  if(prevBtn) prevBtn.onclick = ()=>crslGo(_crslIdx - 1, true);
  if(nextBtn) nextBtn.onclick = ()=>crslGo(_crslIdx + 1, true);

  // Swipe táctil
  let sx = null;
  track.addEventListener('touchstart', e=>{ sx = e.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend', e=>{
    if(sx === null) return;
    const dx = e.changedTouches[0].clientX - sx;
    if(Math.abs(dx) > 40) crslGo(_crslIdx + (dx < 0 ? 1 : -1), true);
    sx = null;
  });

  // Pausar auto-avance cuando el carrusel sale del viewport
  if('IntersectionObserver' in window){
    const visObs = new IntersectionObserver((entries)=>{
      entries.forEach(en=>{
        if(en.isIntersecting){
          if(!_crslTimer) crslResetAuto();
        } else {
          if(_crslTimer){ clearInterval(_crslTimer); _crslTimer = null; }
        }
      });
    }, { threshold: 0.3 });
    visObs.observe(track);
  } else {
    crslResetAuto();
  }
}

// Animación de los pasos "Cómo funciona" — disparada cuando entra al viewport
function startPasosAnimation(){
  const tracker = document.getElementById('pasos-track');
  if(!tracker) return;
  const pasos = tracker.querySelectorAll('.paso');
  const fill = document.getElementById('pasos-fill');
  if(!pasos.length) return;

  // Reset estado
  pasos.forEach(p=>p.classList.remove('show'));
  if(fill) fill.style.height = '0%';

  function play(){
    pasos.forEach((p, i)=>{
      setTimeout(()=>{
        p.classList.add('show');
        if(fill){
          const pct = ((i + 1) / pasos.length) * 100;
          fill.style.height = pct + '%';
        }
      }, 180 + i * 480);
    });
  }

  if('IntersectionObserver' in window){
    const obs = new IntersectionObserver((entries, observer)=>{
      entries.forEach(en=>{
        if(en.isIntersecting){
          play();
          observer.unobserve(en.target);
        }
      });
    }, { threshold: 0.25 });
    obs.observe(tracker);
  } else {
    play();
  }
}

// Phone rotator del hero
function startPhoneRotator(){
  const order = ['ranking','muro','predicciones','grupos','bracket'];
  const labels = {
    ranking: '🏆 Ranking',
    muro: '💬 Muro',
    predicciones: '⚽ Predicciones',
    grupos: '📊 Grupos',
    bracket: '📈 Bracket'
  };
  const phone = document.querySelector('.lp-phone');
  const tabsWrap = document.getElementById('lp-phone-tabs');
  const labelEl = document.getElementById('lp-phone-label');
  if(!phone || !tabsWrap) return;

  if(_phoneTimer){ clearInterval(_phoneTimer); _phoneTimer = null; }
  _phoneIdx = 0;

  function show(name, manual){
    _phoneIdx = order.indexOf(name);
    if(_phoneIdx < 0) _phoneIdx = 0;
    document.querySelectorAll('.lp-view').forEach(v=>{
      v.classList.toggle('on', v.dataset.v === order[_phoneIdx]);
    });
    document.querySelectorAll('.lp-pt').forEach(t=>{
      t.classList.toggle('on', t.dataset.go === order[_phoneIdx]);
    });
    if(labelEl) labelEl.textContent = labels[order[_phoneIdx]];
    if(manual) reset();
  }
  function reset(){
    if(_phoneTimer) clearInterval(_phoneTimer);
    _phoneTimer = setInterval(()=>{
      _phoneIdx = (_phoneIdx + 1) % order.length;
      show(order[_phoneIdx], false);
    }, 3500);
  }
  tabsWrap.querySelectorAll('.lp-pt').forEach(t=>{
    t.onclick = ()=>show(t.dataset.go, true);
  });

  // Pausar cuando sale del viewport
  if('IntersectionObserver' in window){
    const obs = new IntersectionObserver((entries)=>{
      entries.forEach(en=>{
        if(en.isIntersecting){
          if(!_phoneTimer) reset();
        } else {
          if(_phoneTimer){ clearInterval(_phoneTimer); _phoneTimer = null; }
        }
      });
    }, { threshold: 0.2 });
    obs.observe(phone);
  } else {
    reset();
  }
}

// Showcase tabs (Así se ve por dentro)
function startShowcase(){
  const tabs = document.querySelectorAll('.sw-tab');
  if(!tabs.length) return;
  const labels = { muro:'💬 Muro', ranking:'🏆 Ranking', predicciones:'⚽ Predicciones' };
  const labelEl = document.getElementById('sw-label');

  function show(name){
    document.querySelectorAll('.sw-view').forEach(v=>{
      v.classList.toggle('on', v.dataset.swV === name);
    });
    tabs.forEach(t=>{
      t.classList.toggle('on', t.dataset.sw === name);
    });
    if(labelEl) labelEl.textContent = labels[name] || '';
  }
  tabs.forEach(t=>{
    t.onclick = ()=>show(t.dataset.sw);
  });
}

// FAQ accordion
function startFaq(){
  const items = document.querySelectorAll('.faq-item');
  if(!items.length) return;
  items.forEach(item=>{
    const q = item.querySelector('.faq-q');
    if(!q) return;
    q.onclick = ()=>{
      // Toggle (permite múltiples abiertos a la vez)
      item.classList.toggle('open');
    };
  });
}

// FAB sticky mobile — aparece tras scroll
function startFab(){
  const fab = document.getElementById('lp-fab');
  if(!fab) return;
  const onScroll = ()=>{
    // Mostrar después de pasar el hero (~600px)
    if(window.scrollY > 500){
      fab.classList.add('show');
    } else {
      fab.classList.remove('show');
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// Cursor trail tricolor (solo desktop)
function startCursorTrail(){
  // No en mobile ni si el usuario prefiere reducir movimiento
  if(window.matchMedia('(hover: none)').matches) return;
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if(window.innerWidth < 880) return;

  const colors = ['#006838','#003087','#c0001a'];
  let colorIdx = 0;
  let lastSpawn = 0;
  const SPAWN_MS = 35;

  document.addEventListener('mousemove', (e)=>{
    const now = Date.now();
    if(now - lastSpawn < SPAWN_MS) return;
    lastSpawn = now;

    // Solo dejar trail si el cursor está sobre el landing
    const auth = document.getElementById('auth');
    if(!auth || auth.style.display === 'none') return;

    const dot = document.createElement('div');
    dot.className = 'lp-trail';
    dot.style.left = (e.clientX - 4) + 'px';
    dot.style.top = (e.clientY - 4) + 'px';
    dot.style.background = colors[colorIdx];
    colorIdx = (colorIdx + 1) % colors.length;
    document.body.appendChild(dot);

    // Animar y eliminar
    requestAnimationFrame(()=>{
      dot.style.transition = 'transform .7s ease-out, opacity .7s ease-out';
      dot.style.transform = 'scale(0)';
      dot.style.opacity = '0';
    });
    setTimeout(()=>dot.remove(), 750);
  }, { passive: true });
}

// Modales
function openLoginModal(){
  const m = document.getElementById('login-modal');
  if(!m) return;
  m.style.display = 'flex';
  document.getElementById('lerr').textContent = '';
  setTimeout(()=>{ const u=document.getElementById('lu'); if(u && !u.value) u.focus(); }, 100);
}
function closeLoginModal(){
  const m = document.getElementById('login-modal');
  if(m) m.style.display = 'none';
}
function openSignupModal(){
  const m = document.getElementById('signup-modal');
  if(!m) return;
  m.style.display = 'flex';
  document.getElementById('su-err').textContent = '';
  setTimeout(()=>{ const n=document.getElementById('su-name'); if(n && !n.value) n.focus(); }, 100);
}
function closeSignupModal(){
  const m = document.getElementById('signup-modal');
  if(m) m.style.display = 'none';
}
function showPendingModal(username, customMsg){
  const m = document.getElementById('pending-modal');
  if(!m) return;
  document.getElementById('pending-user').textContent = username || '—';
  if(customMsg && document.getElementById('pending-msg')){
    document.getElementById('pending-msg').textContent = customMsg;
  }
  m.style.display = 'flex';
}
function closePendingModal(){
  const m = document.getElementById('pending-modal');
  if(m) m.style.display = 'none';
}

// Signup
function doSignup(){
  const errEl  = document.getElementById('su-err');
  const btn    = document.getElementById('su-btn');
  errEl.textContent = '';

  const full_name = document.getElementById('su-name').value.trim();
  const phone     = document.getElementById('su-phone').value.trim();
  const username  = document.getElementById('su-user').value.trim().toLowerCase();
  const pin       = document.getElementById('su-pin').value.trim();

  // Validaciones cliente
  if(full_name.length < 2){ errEl.textContent = 'Escribe tu nombre completo.'; return; }
  if(phone.replace(/\D/g,'').length < 8){ errEl.textContent = 'Teléfono inválido.'; return; }
  if(!/^[a-z0-9_]{3,30}$/.test(username)){ errEl.textContent = 'Usuario: 3-30 caracteres, solo letras, números y _.'; return; }
  if(!/^\d{4,6}$/.test(pin)){ errEl.textContent = 'PIN debe tener entre 4 y 6 dígitos.'; return; }

  btn.disabled = true;
  btn.textContent = 'Inscribiendo…';

  api('POST','/api/signup', { full_name, phone, username, pin })
    .then(resp=>{
      // Limpiar form y mostrar pantalla de pendiente
      ['su-name','su-phone','su-user','su-pin'].forEach(id=>{ const el=document.getElementById(id); if(el) el.value=''; });
      closeSignupModal();
      showPendingModal(resp.username || username);
    })
    .catch(e=>{
      errEl.textContent = e.message || 'Error al inscribirte. Intenta de nuevo.';
    })
    .finally(()=>{
      btn.disabled = false;
      btn.textContent = 'Inscribirme ⚽';
    });
}

// Cerrar modales con Escape
document.addEventListener('keydown', (e)=>{
  if(e.key === 'Escape'){
    closeLoginModal();
    closeSignupModal();
    // pending no se cierra con Escape (el usuario debe leerlo)
  }
});

// Listeners de Enter para signup
['su-name','su-phone','su-user'].forEach((id, i, arr)=>{
  document.addEventListener('DOMContentLoaded', ()=>{}); // no-op, just to satisfy linters
});
// Adjuntar al DOMContentLoaded ya cargado
(function attachSignupEnter(){
  const ids = ['su-name','su-phone','su-user','su-pin'];
  ids.forEach((id, i)=>{
    const el = document.getElementById(id);
    if(!el) return;
    el.addEventListener('keydown', e=>{
      if(e.key !== 'Enter') return;
      if(i < ids.length - 1){
        const nxt = document.getElementById(ids[i+1]);
        if(nxt) nxt.focus();
      } else {
        doSignup();
      }
    });
  });
})();

function logout(){
  CU=null;
  localStorage.removeItem('q26u');
  picks={};results={};refs={};dynUsers=[];
  closeDrawer();
  // Cerrar panel de notifs y detener loop
  const bp = document.getElementById('bell-panel');
  if(bp) bp.style.display = 'none';
  stopNotifLoop();
  _notifs = [];
  document.querySelectorAll('.admin-only').forEach(e=>e.style.display='none');
  document.getElementById('app').style.display='none';
  const authEl=document.getElementById('auth');
  authEl.style.display='block';
  // Cerrar cualquier modal que haya quedado abierto
  closeLoginModal();
  closeSignupModal();
  closePendingModal();
  // Volver al inicio de la página
  try{ window.scrollTo({top:0,behavior:'instant'}); }catch(_){ window.scrollTo(0,0); }
  // Re-iniciar countdown del landing y observers
  initLanding();
}

// ══════════════════════════════════════════════════════
//  NOTIFICACIONES IN-APP — derivadas del muro y partidos
// ══════════════════════════════════════════════════════
let _notifs = [];        // [{id, icon, text, time, read, target}]
let _notifTimer = null;
let _notifSeenKey = ()=> CU ? `q26_notifs_seen_${CU.u}` : null;

function getSeenIds(){
  const k = _notifSeenKey();
  if(!k) return new Set();
  try { return new Set(JSON.parse(localStorage.getItem(k) || '[]')); } catch(_){ return new Set(); }
}
function saveSeenIds(set){
  const k = _notifSeenKey();
  if(!k) return;
  try { localStorage.setItem(k, JSON.stringify([...set])); } catch(_){}
}

function buildNotifications(){
  if(!CU) return [];
  const out = [];
  const me = CU.u;

  // 1) Reacciones a mis posts del muro
  if(Array.isArray(_wallPosts)){
    _wallPosts.forEach(p=>{
      if(p.username !== me) return;
      const reacts = p.reactions || {};
      Object.entries(reacts).forEach(([emoji, data])=>{
        const users = data?.users || [];
        users.forEach(u=>{
          if(u === me) return;
          out.push({
            id: `react:${p.id}:${emoji}:${u}`,
            icon: emoji,
            iconBg: '#fce8ea',
            text: `<strong>${escHtml(u)}</strong> reaccionó con ${emoji} a tu publicación`,
            time: p.created_at || new Date().toISOString(),
            target: 'chat'
          });
        });
      });
    });
  }

  // 1.5) Menciones a mí en posts del muro
  if(Array.isArray(_wallPosts) && typeof extractMentions === 'function'){
    const meLower = me.toLowerCase();
    _wallPosts.forEach(p=>{
      if(p.username === me) return; // mis propias menciones no
      const mentions = extractMentions(p.content || '');
      if(mentions.has(meLower)){
        out.push({
          id: `mention:post:${p.id}`,
          icon: '@',
          iconBg: '#e0eaff',
          text: `<strong>${escHtml(p.username)}</strong> te etiquetó en una publicación`,
          time: p.created_at || new Date().toISOString(),
          target: 'chat'
        });
      }
    });
  }

  // 1.6) Menciones a mí en comentarios cacheados (cargados al menos una vez)
  if(window._wallCommentCache && typeof extractMentions === 'function'){
    const meLower = me.toLowerCase();
    Object.entries(window._wallCommentCache).forEach(([postId, comments])=>{
      (comments || []).forEach(c=>{
        if(c.username === me) return;
        const mentions = extractMentions(c.content || '');
        if(mentions.has(meLower)){
          out.push({
            id: `mention:comment:${c.id}`,
            icon: '@',
            iconBg: '#e0eaff',
            text: `<strong>${escHtml(c.username)}</strong> te etiquetó en un comentario`,
            time: c.created_at || new Date().toISOString(),
            target: 'chat'
          });
        }
      });
    });
  }

  // 2) Posts recientes del muro (últimos 4) — solo si no son míos
  if(Array.isArray(_wallPosts)){
    const recent = _wallPosts
      .filter(p=>p.username !== me)
      .slice(0, 4);
    recent.forEach(p=>{
      out.push({
        id: `newpost:${p.id}`,
        icon: '💬',
        iconBg: '#e0eaff',
        text: `<strong>${escHtml(p.username)}</strong> publicó algo en el muro`,
        time: p.created_at || new Date().toISOString(),
        target: 'chat'
      });
    });
  }

  // Ordenar por fecha desc, marcar leídos vs no leídos
  out.sort((a,b)=>{
    const ta = new Date(a.time).getTime() || 0;
    const tb = new Date(b.time).getTime() || 0;
    return tb - ta;
  });
  const seen = getSeenIds();
  out.forEach(n => n.read = seen.has(n.id));

  return out.slice(0, 20); // máximo 20
}

function refreshNotifications(){
  if(!CU) return;
  _notifs = buildNotifications();
  renderNotifBadge();
  // Si el panel está abierto, refresca su contenido
  const panel = document.getElementById('bell-panel');
  if(panel && panel.style.display !== 'none') renderNotifPanel();
}

function renderNotifBadge(){
  const badge = document.getElementById('bell-badge');
  const btn = document.querySelector('.bell-btn');
  if(!badge || !btn) return;
  const unread = _notifs.filter(n=>!n.read).length;
  if(unread > 0){
    badge.textContent = unread > 9 ? '9+' : String(unread);
    badge.style.display = 'flex';
    btn.classList.add('has-new');
  } else {
    badge.style.display = 'none';
    btn.classList.remove('has-new');
  }
}

function renderNotifPanel(){
  const list = document.getElementById('bell-list');
  if(!list) return;
  if(!_notifs.length){
    list.innerHTML = '<div class="bell-empty">Sin notificaciones nuevas</div>';
    return;
  }
  list.innerHTML = _notifs.map(n=>{
    const ago = n.time ? notifTimeAgo(new Date(n.time)) : '';
    return `<div class="bell-item ${n.read?'read':'unread'}" onclick="openNotif('${n.id}','${n.target||''}')">
      <div class="bell-icon" style="background:${n.iconBg||'var(--bg)'}">${n.icon||'🔔'}</div>
      <div class="bell-text">${n.text}<div class="bell-time">${ago}</div></div>
    </div>`;
  }).join('');
}

function notifTimeAgo(date){
  const d = (Date.now() - date.getTime()) / 1000;
  if(d < 60) return 'hace un momento';
  if(d < 3600) return `hace ${Math.floor(d/60)} min`;
  if(d < 86400) return `hace ${Math.floor(d/3600)} h`;
  if(d < 604800) return `hace ${Math.floor(d/86400)} días`;
  return date.toLocaleDateString('es-MX',{day:'numeric',month:'short'});
}

function toggleBell(ev){
  if(ev) ev.stopPropagation();
  const panel = document.getElementById('bell-panel');
  if(!panel) return;
  const open = panel.style.display !== 'none';
  if(open){
    panel.style.display = 'none';
  } else {
    refreshNotifications();
    renderNotifPanel();
    panel.style.display = 'flex';
  }
}

function openNotif(id, target){
  // Marcar individual como leída
  const seen = getSeenIds();
  seen.add(id);
  saveSeenIds(seen);
  // Cerrar panel y navegar
  document.getElementById('bell-panel').style.display = 'none';
  refreshNotifications();
  if(target && typeof go === 'function'){
    try { go(target); } catch(_){}
  }
}

function markAllNotifsRead(){
  const seen = getSeenIds();
  _notifs.forEach(n=>seen.add(n.id));
  saveSeenIds(seen);
  refreshNotifications();
}

function startNotifLoop(){
  if(_notifTimer) clearInterval(_notifTimer);
  refreshNotifications();
  _notifTimer = setInterval(refreshNotifications, 60000);
}
function stopNotifLoop(){
  if(_notifTimer){ clearInterval(_notifTimer); _notifTimer = null; }
}

// Cerrar panel al click fuera
document.addEventListener('click', (e)=>{
  const panel = document.getElementById('bell-panel');
  const btn = document.querySelector('.bell-btn');
  if(!panel || panel.style.display === 'none') return;
  if(panel.contains(e.target) || (btn && btn.contains(e.target))) return;
  panel.style.display = 'none';
});

// ══════════════════════════════════════════════════════
//  HOMEPAGE / DASHBOARD — punto de aterrizaje al entrar
// ══════════════════════════════════════════════════════
const HP_GREETINGS = [
  '¿Listos para subir?',
  '¿Subamos en el ranking?',
  '¿Cómo vamos, $name?',
  '¿Listos para meterle al ángulo?',
  'Bienvenido de vuelta, $name',
  'El podio te espera, $name',
  '¿Quién va a sorprender hoy?',
  'Nada como una buena predicción',
  '¿Listo para acertar, $name?',
  'Que ruede el balón ⚽',
  '¿A romperla en la jornada?',
  '$name, vamos al ángulo'
];

function pickGreeting(){
  const u = CU?.u || 'tú';
  // Random sin repetir el último
  const lastIdx = parseInt(sessionStorage.getItem('hp_last_greet') || '-1', 10);
  let idx;
  do {
    idx = Math.floor(Math.random() * HP_GREETINGS.length);
  } while(idx === lastIdx && HP_GREETINGS.length > 1);
  sessionStorage.setItem('hp_last_greet', String(idx));
  // $name → wrap en gradiente para que destaque
  const greet = HP_GREETINGS[idx].replace(/\$name/g,
    `<span class="grad">${escHtml(u)}</span>`);
  return greet;
}

function renderInicio(){
  if(!CU) return;
  const u = CU.u;

  // Saludo random
  const nameEl = document.getElementById('hp-name');
  if(nameEl) nameEl.innerHTML = pickGreeting();

  // Stats básicas
  const stats = getProfileStats(u);

  // Posición
  const posEl = document.getElementById('hp-pos');
  const posSufEl = document.getElementById('hp-pos-suffix');
  const posSubEl = document.getElementById('hp-pos-sub');
  if(stats.position){
    posEl.textContent = String(stats.position);
    posSufEl.textContent = '°';
    const streakTxt = stats.streak >= 3 ? ` · 🔥 racha de ${stats.streak}` : '';
    posSubEl.textContent = `de ${stats.rankSize} jugador${stats.rankSize!==1?'es':''}${streakTxt}`;
  } else {
    posEl.textContent = '—';
    posSufEl.textContent = '';
    posSubEl.textContent = 'Aún sin clasificar';
  }

  // Puntos con count-up
  const ptsEl = document.getElementById('hp-pts');
  if(ptsEl){
    ptsEl.dataset.target = String(stats.total);
    countUp(ptsEl, 0, stats.total, 900);
  }

  // Progreso de predicciones (grupos + bracket)
  const totalMatches = 104;
  const predicted = (stats.grpPredCount || 0) + (stats.brPredCount || 0);
  const pct = Math.min(100, Math.round((predicted / totalMatches) * 100));

  const pctEl = document.getElementById('hp-prog-pct');
  const fillEl = document.getElementById('hp-prog-fill');
  const subEl = document.getElementById('hp-prog-sub');
  if(pctEl) pctEl.textContent = `${pct}%`;
  if(subEl){
    const missing = totalMatches - predicted;
    if(missing > 0) subEl.textContent = `${predicted} de ${totalMatches} partidos · te faltan ${missing}`;
    else subEl.textContent = `¡Predicciones completas! ${predicted} de ${totalMatches}`;
  }
  // El fill se anima cuando el card entra al viewport (ver hpReveal)
  if(fillEl) fillEl.dataset.target = String(pct);

  // Acciones rápidas — contadores
  const grupCount = totalGruposPending(u);
  const brCount = totalBracketPending(u);
  const grpEl = document.getElementById('hp-act-grupos');
  const brEl = document.getElementById('hp-act-bracket');
  if(grpEl) grpEl.textContent = grupCount > 0 ? `${grupCount} pendientes` : '✓ Completos';
  if(brEl) brEl.textContent = brCount > 0 ? `${brCount} pendientes` : '✓ Completo';

  const myG = (typeof _myGroups !== 'undefined' ? _myGroups.length : 0);
  const mgEl = document.getElementById('hp-act-misgrupos');
  if(mgEl) mgEl.textContent = myG > 0 ? `${myG} activo${myG!==1?'s':''}` : 'Crea tu primer grupo';

  // Actividad muro: # de notifs no leídas
  const muroEl = document.getElementById('hp-act-muro');
  if(muroEl){
    const unread = (_notifs || []).filter(n=>!n.read).length;
    muroEl.textContent = unread > 0 ? `${unread} nuevo${unread!==1?'s':''}` : 'Sin novedades';
  }

  // Lista de actividad reciente: usa _wallPosts (últimos 4)
  const actList = document.getElementById('hp-activity-list');
  if(actList){
    const posts = (typeof _wallPosts !== 'undefined' && Array.isArray(_wallPosts)) ? _wallPosts : [];
    if(!posts.length){
      actList.innerHTML = `<div class="hp-act-empty">Aún no hay actividad. Sé el primero en publicar en el muro.</div>`;
    } else {
      const palette = ['#0f6e56','#003087','#c0001a','#5a2da3','#d18800'];
      const recent = posts.slice(0, 4);
      actList.innerHTML = recent.map((p, i)=>{
        const initials = (p.username || '?').slice(0,2).toUpperCase();
        const color = palette[i % palette.length];
        const ago = p.created_at ? notifTimeAgo(new Date(p.created_at)) : '';
        const text = (p.content || '').slice(0, 80) + ((p.content||'').length > 80 ? '…' : '');
        const isMe = p.username === u;
        const verb = isMe ? 'publicaste' : 'publicó';
        return `<div class="hp-act-row">
          <div class="hp-act-av" style="background:${color}">${escHtml(initials)}</div>
          <div class="hp-act-msg">
            <strong onclick="openProfile('${p.username.replace(/'/g,"\\'")}')" style="cursor:pointer">${escHtml(p.username)}</strong> ${verb}: <span style="color:var(--ink3)">${escHtml(text)}</span>
            <div class="hp-act-time">${ago}</div>
          </div>
        </div>`;
      }).join('');
    }
  }

  // Animar las cards al entrar al viewport
  hpReveal();
}

function totalGruposPending(u){
  if(!u || typeof GM === 'undefined') return 0;
  const sc = picks[u]?.sc || {};
  let total = 0, done = 0;
  Object.values(GM).forEach(ms=>{
    ms.forEach(m=>{
      total++;
      if(sc[m.id] != null && sc[m.id].h != null) done++;
    });
  });
  return total - done;
}

function totalBracketPending(u){
  if(!u) return 0;
  // Bracket completo = 16 + 8 + 4 + 2 + 1 = 31 partidos
  // Pero solo cuentan los que tienen ambos equipos definidos (algunos dependen de previos)
  const TOTAL_BR = 31;
  const br = picks[u]?.br || {};
  const sc = picks[u]?.sc || {};
  let predicted = 0;
  // Cuenta cuántos partidos del bracket tienen score asignado
  ['r32','r16','qf','sf','f'].forEach(rk=>{
    const n = rk==='r32'?16:rk==='r16'?8:rk==='qf'?4:rk==='sf'?2:1;
    for(let i=0;i<n;i++){
      const id = `${rk}_${i}`;
      const s = sc[id];
      if(s != null && s.h != null && s.a != null) predicted++;
    }
  });
  return Math.max(0, TOTAL_BR - predicted);
}

// Anima las cards del homepage cuando entran al viewport (stagger)
function hpReveal(){
  const els = document.querySelectorAll('#page-inicio .hp-anim');
  if(!els.length) return;
  // Reset (por si se vuelve a entrar a inicio)
  els.forEach(el => el.classList.remove('show'));

  if(!('IntersectionObserver' in window)){
    els.forEach(el=>el.classList.add('show'));
    animateProgressFill();
    return;
  }

  // Primera vez: animar todo con stagger
  const sorted = Array.from(els).sort((a,b)=>{
    const ai = parseInt(a.dataset.animI || '0', 10);
    const bi = parseInt(b.dataset.animI || '0', 10);
    return ai - bi;
  });

  sorted.forEach((el, idx)=>{
    setTimeout(()=>el.classList.add('show'), 80 + idx * 110);
  });

  // Animar la barra de progreso 200ms después de que aparece su card
  setTimeout(animateProgressFill, 600);
}

function animateProgressFill(){
  const fillEl = document.getElementById('hp-prog-fill');
  if(!fillEl) return;
  const target = parseInt(fillEl.dataset.target || '0', 10);
  fillEl.style.width = target + '%';
}

// Animación de conteo de números (para puntos)
function countUp(el, from, to, duration){
  if(!el) return;
  const startT = performance.now();
  const range = to - from;
  function tick(now){
    const t = Math.min(1, (now - startT) / duration);
    // ease-out
    const e = 1 - Math.pow(1 - t, 3);
    const v = Math.round(from + range * e);
    el.textContent = String(v);
    if(t < 1) requestAnimationFrame(tick);
    else el.textContent = String(to);
  }
  if(range === 0){ el.textContent = String(to); return; }
  requestAnimationFrame(tick);
}

function boot(){
  // Cerrar el modal de login si está abierto
  closeLoginModal();

  const auth = document.getElementById('auth');

  // Crear overlay de transición sobre el landing
  const overlay = document.createElement('div');
  overlay.id = 'boot-overlay';
  overlay.style.cssText = `position:fixed;inset:0;z-index:10000;display:flex;align-items:center;justify-content:center;background:var(--grad-tri);transition:opacity .35s ease`;
  overlay.innerHTML = `
    <div style="text-align:center;color:#fff">
      <canvas id="login-trans-canvas" width="80" height="80" style="display:block;margin:0 auto 20px;border-radius:16px;background:rgba(255,255,255,.12)"></canvas>
      <div style="font-family:'Plus Jakarta Sans',system-ui,sans-serif;font-weight:800;font-size:24px;letter-spacing:-.3px;margin-bottom:14px">Al Ángulo</div>
      <div style="display:flex;gap:10px;justify-content:center;margin-top:6px" id="login-dots">
        <div style="width:10px;height:10px;border-radius:50%;background:#fff;animation:sdotBounce .9s ease-in-out infinite"></div>
        <div style="width:10px;height:10px;border-radius:50%;background:#fff;animation:sdotBounce .9s ease-in-out .18s infinite"></div>
        <div style="width:10px;height:10px;border-radius:50%;background:#fff;animation:sdotBounce .9s ease-in-out .36s infinite"></div>
      </div>
    </div>`;
  document.body.appendChild(overlay);

  // Draw static logo on the small canvas
  drawStaticLogo(document.getElementById('login-trans-canvas'), 80);

  // After 1.2s — load data then show app
  setTimeout(()=>{
    setTimeout(async ()=>{
      // Load all data from backend
      await loadAllData();
      ensure(CU.u);

      // Load refs for current user
      try {
        const myRefs = await api('GET',`/api/refs/${CU.code}`);
        refs[CU.code] = myRefs;
      } catch(e){}

      // Load users list
      try {
        const users = await api('GET','/api/users');
        dynUsers = users
          .filter(u=>!USERS.find(x=>x.u===u.username))
          .map(u=>({u:u.username, p:'', admin:u.is_admin, code:u.code}));
      } catch(e){}

      _dataDone=true;

      // Esconder landing y overlay, mostrar app
      auth.style.display = 'none';
      overlay.style.opacity = '0';
      setTimeout(()=>{ overlay.remove(); }, 350);

      document.getElementById('app').style.display = 'block';
      document.getElementById('nav-u').textContent = CU.u;
      if(CU.admin) document.querySelectorAll('.admin-only').forEach(e=>e.style.display='');
      renderGroups();renderBracket();renderRanking();renderPremios();
      if(CU.admin) renderAdmin();
      // Restore last page
      const lastPage = localStorage.getItem('q26page') || 'inicio';
      go(lastPage);
      setTimeout(()=>{
        const al=document.getElementById('auth-logo');
        if(al) drawStaticLogo(al,36);
        const dl=document.getElementById('drawer-logo');
        if(dl) drawStaticLogo(dl,28);
        syncDrawer();
      // Check referrer status then conditionally show modal
      checkRefStatus().then(()=>{
        if(shouldShowRefModal()){
          const scr=document.getElementById('ref-screen');
          scr.style.display='flex';
          scr.classList.add('open');
          document.getElementById('ref-screen-input').value='';
          document.getElementById('ref-screen-input').style.borderColor='var(--border)';
          document.getElementById('ref-noshow-cb').checked=false;
          const c=document.getElementById('ref-screen-logo');
          if(c) drawStaticLogo(c,64);
          setTimeout(()=>document.getElementById('ref-screen-input').focus(),100);
        }
      }).catch(()=>{});
      },300);
    }, 380);
  }, 1200);
  // Show install banner after user is in the app
  setTimeout(showInstallBannerIfNeeded, 3000);
  // Connect online counter
  setTimeout(connectOnlineCounter, 1500);
  // Notificaciones in-app
  setTimeout(startNotifLoop, 2000);
  // Onboarding: primera vez del usuario
  setTimeout(()=>{
    if(shouldShowOnboarding()) openOnboard();
  }, 1800);
}

// ══════════════════════════════════════════════════════
//  STANDINGS CALCULATOR (real football rules)
// ══════════════════════════════════════════════════════
function standings(g,sm){
  const teams=GROUPS[g].teams;
  const s={};
  teams.forEach(t=>{s[t]={pts:0,gf:0,ga:0,gd:0,mp:0,played:false};});
  GM[g].forEach(m=>{
    const r=sm[m.id];
    if(r==null||r.h==null||r.a==null) return;
    const hg=+r.h||0,ag=+r.a||0;
    s[m.h].mp++;s[m.a].mp++;s[m.h].played=true;s[m.a].played=true;
    s[m.h].gf+=hg;s[m.h].ga+=ag;s[m.h].gd+=hg-ag;
    s[m.a].gf+=ag;s[m.a].ga+=hg;s[m.a].gd+=ag-hg;
    if(hg>ag){s[m.h].pts+=3;}
    else if(hg<ag){s[m.a].pts+=3;}
    else{s[m.h].pts+=1;s[m.a].pts+=1;}
  });
  return teams.slice().sort((a,b)=>{
    if(s[b].pts!==s[a].pts) return s[b].pts-s[a].pts;
    if(s[b].gd !==s[a].gd)  return s[b].gd -s[a].gd;
    return s[b].gf-s[a].gf;
  }).map(t=>({team:t,...s[t]}));
}
function getS(g){return standings(g,picks[CU.u].sc);}

// ══════════════════════════════════════════════════════
//  GROUPS RENDER
// ══════════════════════════════════════════════════════
function renderGroups(){
  const grid=document.getElementById('gg');
  grid.innerHTML='';
  const sm=picks[CU.u].sc;
  const groupKeys=Object.keys(GROUPS);
  groupKeys.forEach(([])=>{}); // no-op
  Object.entries(GROUPS).forEach(([g,{teams}], idx)=>{
    const ms=GM[g];
    const st=standings(g,sm);
    const done=ms.filter(m=>sm[m.id]!=null).length;
    const card=document.createElement('div');
    card.className='gcard gcard-reveal';
    card.style.setProperty('--gcard-i', String(idx));
    card.innerHTML=`
      <div class="gcard-hd">
        <span class="gcard-hd-letter">${g}</span>
        <div class="gcard-hd-title">
          <span class="gcard-hd-grupo">Grupo</span>
          <span class="gcard-hd-name">${g}</span>
        </div>
        <div class="gcard-hd-r">${done}/${ms.length}</div>
      </div>
      <div id="gm-${g}"></div>
      <div class="gtbl-wrap"><table class="gtbl">
        <thead><tr><th>#</th><th>Equipo</th><th>PJ</th><th>Pts</th><th>GF</th><th>GC</th><th>DG</th></tr></thead>
        <tbody id="gt-${g}"></tbody>
      </table></div>`;
    grid.appendChild(card);
    renderGMatches(g,ms,sm);
    renderGTable(g,st);
  });
  updateProg();
  // Animar entrada con stagger + observer para reveal on-scroll
  observeGroupCards();
}

// Observer para animar las cards al entrar al viewport
let _gcardObserver = null;
function observeGroupCards(){
  if(_gcardObserver) _gcardObserver.disconnect();
  const cards = document.querySelectorAll('#gg .gcard-reveal');
  if(!cards.length) return;
  if(!('IntersectionObserver' in window)){
    cards.forEach(c=>c.classList.add('show'));
    return;
  }
  _gcardObserver = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
      if(entry.isIntersecting){
        entry.target.classList.add('show');
        _gcardObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -8% 0px' });
  cards.forEach(c=>{
    // Si ya está visible al cargar (above the fold), animar de inmediato
    const rect = c.getBoundingClientRect();
    if(rect.top < window.innerHeight * 0.95) c.classList.add('show');
    else _gcardObserver.observe(c);
  });
}
function renderGMatches(g,ms,sm){
  const w=document.getElementById(`gm-${g}`);if(!w)return;
  w.innerHTML='';
  ms.forEach(m=>{
    const r=sm[m.id];
    const d=document.createElement('div');
    d.className='mrow'+(r!=null?' filled':'');
    d.innerHTML=`
      <span class="mid-tag">${m.id}</span>
      <div class="mteam"><span class="mflag">${FL[m.h]||'🏳'}</span><span class="mtn">${NM[m.h]||m.h}</span></div>
      <div class="msc">${r!=null?r.h+' - '+r.a:'vs'}</div>
      <div class="mteam r"><span class="mflag">${FL[m.a]||'🏳'}</span><span class="mtn">${NM[m.a]||m.a}</span></div>`;
    d.onclick=()=>openM(m.id,m.h,m.a,g,r);
    w.appendChild(d);
  });
}
function renderGTable(g,st){
  const tb=document.getElementById(`gt-${g}`);if(!tb)return;
  tb.innerHTML='';
  st.forEach((r,i)=>{
    const rc=i===0?'r1':i===1?'r2':i===2?'r3':'';
    const pc=i===0?'c1':i===1?'c2':'';
    const badge=i<=1?'<span class="classify-badge cb-q">✓ Clasifica</span>':i===2?'<span class="classify-badge cb-3">3°</span>':'';
    const tr=document.createElement('tr');tr.className=rc;
    tr.innerHTML=`
      <td><span class="pnum">${i+1}</span></td>
      <td><div class="tcell"><span>${FL[r.team]||'🏳'}</span><span>${NM[r.team]||r.team}</span>${badge}</div></td>
      <td class="stat" style="color:var(--ink3)">${r.mp}</td>
      <td class="stat ptsnum ${pc}">${r.pts}</td>
      <td class="stat">${r.gf}</td><td class="stat">${r.ga}</td>
      <td class="stat">${r.gd>=0?'+'+r.gd:r.gd}</td>`;
    tb.appendChild(tr);
  });
}
function updateProg(){
  const sm=picks[CU.u].sc;
  let done=0,tot=0;
  Object.values(GM).forEach(ms=>{tot+=ms.length;ms.forEach(m=>{if(sm[m.id]!=null)done++;});});
  const pct = tot>0 ? Math.round(done/tot*100) : 0;
  const ptxtEl = document.getElementById('ptxt');
  const pbarEl = document.getElementById('pbar');
  const psubEl = document.getElementById('psub');
  if(ptxtEl) ptxtEl.textContent = `${done} / ${tot} · ${pct}%`;
  if(pbarEl) pbarEl.style.width = pct + '%';
  if(psubEl){
    const missing = tot - done;
    if(missing > 0) psubEl.textContent = `Te faltan ${missing} predicción${missing!==1?'es':''} por hacer`;
    else psubEl.textContent = `¡Predicciones completas! Ya está todo en orden 🎯`;
  }
  // Sticky compact también
  const stkFill = document.getElementById('grp-sticky-fill');
  const stkPct  = document.getElementById('grp-sticky-pct');
  if(stkFill) stkFill.style.width = pct + '%';
  if(stkPct)  stkPct.textContent = pct + '%';
}

// ══════════════════════════════════════════════════════
//  SCORE MODAL
// ══════════════════════════════════════════════════════
let _m={};
function openM(id,h,a,g,ex){
  _m={id,h,a,g};
  document.getElementById('mh').textContent=`${NM[h]||h} vs ${NM[a]||a}`;
  document.getElementById('ms').textContent=`Grupo ${g}`;
  document.getElementById('mhf').textContent=FL[h]||'🏳';
  document.getElementById('maf').textContent=FL[a]||'🏳';
  document.getElementById('mhn').textContent=NM[h]||h;
  document.getElementById('man').textContent=NM[a]||a;
  document.getElementById('mhi').value=ex!=null?ex.h:'';
  document.getElementById('mai').value=ex!=null?ex.a:'';
  // Mostrar botón compartir solo si ya hay predicción guardada
  const sh = document.getElementById('m-share-btn');
  if(sh) sh.style.display = (ex!=null && ex.h!=null && ex.a!=null) ? 'block' : 'none';
  document.getElementById('modal').classList.add('open');
  setTimeout(()=>document.getElementById('mhi').focus(),60);
}
function closeM(){document.getElementById('modal').classList.remove('open');}
function clearSc(){
  delete picks[CU.u].sc[_m.id];
  persist(); // async
  closeM();
  renderGMatches(_m.g,GM[_m.g],picks[CU.u].sc);
  renderGTable(_m.g,getS(_m.g));
  updateProg();renderBracket();toast('Marcador borrado');
}
function saveSc(){
  const hv=document.getElementById('mhi').value;
  const av=document.getElementById('mai').value;
  if(hv===''||av===''){toast('Ingresa ambos marcadores');return;}
  const savedId = _m.id;
  const savedG = _m.g;
  picks[CU.u].sc[savedId]={h:+hv,a:+av};
  persist(); // async — saves to backend
  closeM();
  renderGMatches(savedG,GM[savedG],picks[CU.u].sc);
  renderGTable(savedG,getS(savedG));
  updateProg();renderBracket();
  toast(`✓ ${NM[_m.h]} ${hv}–${av} ${NM[_m.a]}`);
  // Pulse animation en la fila recién guardada
  setTimeout(()=>{
    const rows = document.querySelectorAll(`#gm-${savedG} .mrow`);
    // Buscar la fila correspondiente al match
    GM[savedG].forEach((m, idx)=>{
      if(m.id === savedId && rows[idx]){
        rows[idx].classList.remove('saved-pulse');
        void rows[idx].offsetWidth;
        rows[idx].classList.add('saved-pulse');
        setTimeout(()=>rows[idx].classList.remove('saved-pulse'), 700);
      }
    });
  }, 50);
}
document.getElementById('modal').addEventListener('click',e=>{if(e.target===document.getElementById('modal'))closeM();});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeM();});
document.getElementById('mhi').addEventListener('keydown',e=>{if(e.key==='Enter')document.getElementById('mai').focus();});
document.getElementById('mai').addEventListener('keydown',e=>{if(e.key==='Enter')saveSc();});

// ══════════════════════════════════════════════════════
//  BRACKET — CORE FIX: best-3rds only from groups with ≥1 played match
// ══════════════════════════════════════════════════════
function resolveSeed12(seed){ // '1A','2B', etc.
  const m=seed.match(/^([12])([A-L])$/);
  if(!m) return null;
  const pos=+m[1]-1, g=m[2];
  // Show team based on current standings even if not all matches predicted
  // Only return null if the group has zero matches predicted at all
  const sm=picks[CU.u].sc;
  const played=GM[g].filter(mx=>sm[mx.id]!=null).length;
  if(played===0) return null;
  const st=getS(g);
  return st[pos]?.team||null;
}

// ── BEST 3RDS: returns { team, grp } sorted by pts→gd→gf ──
function getBest3rds(){
  const thirds=[];
  Object.keys(GROUPS).forEach(g=>{
    const sm=picks[CU.u].sc;
    const played=GM[g].filter(m=>sm[m.id]!=null).length;
    if(played===0) return;
    const st=standings(g,sm);
    const t=st[2];
    if(t) thirds.push({team:t.team,pts:t.pts,gd:t.gd,gf:t.gf,grp:g});
  });
  thirds.sort((a,b)=>b.pts!==a.pts?b.pts-a.pts:b.gd!==a.gd?b.gd-a.gd:b.gf-a.gf);
  // Return top 8 with their group of origin
  return thirds.slice(0,8);
}

// ── THIRD PLACE SLOT ASSIGNMENT — OFFICIAL FIFA 2026 RULES (art. 12.6) ──
// Each slot accepts 3rd-place teams from specific eligible groups only.
// Uses backtracking to guarantee all 8 slots are filled (greedy fails in edge cases).
const THIRD_RULES=[
  ['r32_1',  ['A','B','C','D','F']],      // M74: 1E vs best 3rd of ABCDF
  ['r32_4',  ['C','D','F','G','H']],      // M77: 1I vs best 3rd of CDFGH
  ['r32_6',  ['C','E','F','H','I']],      // M79: 1A vs best 3rd of CEFHI
  ['r32_7',  ['E','H','I','J','K']],      // M80: 1L vs best 3rd of EHIJK
  ['r32_8',  ['B','E','F','I','J']],      // M81: 1D vs best 3rd of BEFIJ
  ['r32_9',  ['A','E','H','I','J']],      // M82: 1G vs best 3rd of AEHIJ
  ['r32_12', ['E','F','G','I','J']],      // M85: 1B vs best 3rd of EFGIJ
  ['r32_14', ['D','E','I','J','L']],      // M87: 1K vs best 3rd of DEIJL
];

// Backtracking assignment: guarantees all slots filled, tries most-constrained slot first
function assignThirds(rules, best3Sorted, usedGroups, result){
  if(rules.length===0) return true;
  // Sort remaining rules by fewest available candidates (most constrained first)
  const sorted=[...rules].sort((a,b)=>{
    const ca=a[1].filter(g=>!usedGroups.has(g)&&best3Sorted.some(x=>x.grp===g)).length;
    const cb=b[1].filter(g=>!usedGroups.has(g)&&best3Sorted.some(x=>x.grp===g)).length;
    return ca-cb;
  });
  const [slot, eligible]=sorted[0];
  const rest=sorted.slice(1);
  // Try each eligible candidate in ranking order (best first)
  const candidates=best3Sorted.filter(x=>eligible.includes(x.grp)&&!usedGroups.has(x.grp));
  for(const cand of candidates){
    usedGroups.add(cand.grp);
    result[slot]=cand.team;
    if(assignThirds(rest,best3Sorted,usedGroups,result)) return true;
    usedGroups.delete(cand.grp);
    delete result[slot];
  }
  return false;
}

// Like buildR32Matchups but uses results.sc (real results) instead of user picks
// Resolve team name → code for bracket scoring comparison
function nameToCode(name){
  if(!name) return null;
  // Direct match in NM values
  const entry=Object.entries(NM).find(([k,v])=>v.toLowerCase()===name.toLowerCase()||k.toLowerCase()===name.toLowerCase());
  return entry?entry[0]:name; // fallback to name itself
}

function buildR32MatchupsFromResults(){
  const sc = results.sc || {};
  const mu = {};

  function resolveSeedFromResults(seed){
    const m = seed.match(/^([12])([A-L])$/);
    if(!m) return null;
    const pos=+m[1]-1, g=m[2];
    const st = standings(g, sc);
    return st[pos]?.team || null;
  }

  // First pass: non-third slots
  R32.forEach(([id,hs,as])=>{
    const h = hs==='3' ? null : resolveSeedFromResults(hs);
    const a = as==='3' ? null : resolveSeedFromResults(as);
    mu[id]={home:h, away:a};
  });

  // Second pass: thirds using backtracking
  const best3 = getBest3rdsFromResults();
  const result = {};
  assignThirds(THIRD_RULES, best3, new Set(), result);
  Object.entries(result).forEach(([slotId,team])=>{
    const r32entry=R32.find(r=>r[0]===slotId);
    if(!r32entry) return;
    if(r32entry[1]==='3') mu[slotId].home=team;
    else                  mu[slotId].away=team;
  });

  return mu;
}

function getBest3rdsFromResults(){
  const sc = results.sc || {};
  const thirds = [];
  Object.keys(GROUPS).forEach(g=>{
    const played = GM[g].filter(m=>sc[m.id]!=null).length;
    if(played===0) return;
    const st = standings(g, sc);
    const t = st[2];
    if(t) thirds.push({team:t.team, pts:t.pts, gd:t.gd, gf:t.gf, grp:g});
  });
  thirds.sort((a,b)=>b.pts!==a.pts?b.pts-a.pts:b.gd!==a.gd?b.gd-a.gd:b.gf-a.gf);
  return thirds.slice(0,8);
}

function buildR32Matchups(){
  const best3=getBest3rds(); // [{team,grp,pts,gd,gf}] top 8 sorted best→worst
  const mu={};

  // First pass: resolve all non-third slots
  R32.forEach(([id,hs,as])=>{
    const h=hs==='3'?null:resolveSeed12(hs);
    const a=as==='3'?null:resolveSeed12(as);
    mu[id]={home:h,away:a};
  });

  // Second pass: assign thirds using backtracking
  const result={};
  assignThirds(THIRD_RULES, best3, new Set(), result);

  // Apply result to matchups
  Object.entries(result).forEach(([slotId,team])=>{
    const r32entry=R32.find(r=>r[0]===slotId);
    if(!r32entry) return;
    if(r32entry[1]==='3') mu[slotId].home=team;
    else                  mu[slotId].away=team;
  });

  return mu;
}

// ── MATCH NUMBER MAP: internal ID → official FIFA match number ──
const MATCH_NUM={
  // Dieciseisavos
  r32_0:'M73', r32_1:'M74', r32_2:'M75', r32_3:'M76',
  r32_4:'M77', r32_5:'M78', r32_6:'M79', r32_7:'M80',
  r32_8:'M81', r32_9:'M82', r32_10:'M83', r32_11:'M84',
  r32_12:'M85', r32_13:'M86', r32_14:'M87', r32_15:'M88',
  // Octavos (feeds: M89=W74vsW77, M90=W73vsW75, M91=W76vsW78, M92=W79vsW80)
  //               (M93=W83vsW84, M94=W81vsW82, M95=W86vsW88, M96=W85vsW87)
  r16_0:'M89', r16_1:'M90', r16_2:'M91', r16_3:'M92',
  r16_4:'M93', r16_5:'M94', r16_6:'M95', r16_7:'M96',
  // Cuartos (M97=W89vsW90, M98=W93vsW94, M99=W91vsW92, M100=W95vsW96)
  qf_0:'M97', qf_1:'M98', qf_2:'M99', qf_3:'M100',
  // Semis (M101=W97vsW98, M102=W99vsW100)
  sf_0:'M101', sf_1:'M102',
  // Final de bronce M103, Final M104
  f_0:'M104',
};

// ── OFFICIAL BRACKET FEED MAP ──
// Defines which two matches feed each subsequent match
// Format: matchId → [home_feeder, away_feeder]
// Source: FIFA 2026 official match schedule
const BRACKET_FEEDS={
  // Octavos — who feeds who
  r16_0: ['r32_1', 'r32_4'],   // M89 = W74 vs W77
  r16_1: ['r32_0', 'r32_2'],   // M90 = W73 vs W75
  r16_2: ['r32_3', 'r32_5'],   // M91 = W76 vs W78
  r16_3: ['r32_6', 'r32_7'],   // M92 = W79 vs W80
  r16_4: ['r32_10','r32_11'],  // M93 = W83 vs W84
  r16_5: ['r32_8', 'r32_9'],   // M94 = W81 vs W82
  r16_6: ['r32_13','r32_15'],  // M95 = W86 vs W88
  r16_7: ['r32_12','r32_14'],  // M96 = W85 vs W87
  // Cuartos
  qf_0:  ['r16_0', 'r16_1'],   // M97 = W89 vs W90
  qf_1:  ['r16_4', 'r16_5'],   // M98 = W93 vs W94
  qf_2:  ['r16_2', 'r16_3'],   // M99 = W91 vs W92  (W76vsW78 winner vs W79vsW80 winner... check)
  qf_3:  ['r16_6', 'r16_7'],   // M100= W95 vs W96
  // Semis
  sf_0:  ['qf_0',  'qf_1'],    // M101= W97 vs W98
  sf_1:  ['qf_2',  'qf_3'],    // M102= W99 vs W100
  // Final
  f_0:   ['sf_0',  'sf_1'],    // M104= W101 vs W102
};

function renderBracket(){
  const bk=document.getElementById('bk');bk.innerHTML='';
  const ub=picks[CU.u].br;
  const mu=buildR32Matchups();
  const rounds=[
    {key:'r32',name:'Dieciseisavos',cls:'d16',n:16},
    {key:'r16',name:'Octavos',      cls:'d8', n:8},
    {key:'qf', name:'Cuartos',      cls:'qf', n:4},
    {key:'sf', name:'Semis',        cls:'sf', n:2},
    {key:'f',  name:'Final',        cls:'fi', n:1},
  ];
  let mIdx = 0;
  rounds.forEach((rd)=>{
    const col=document.createElement('div');col.className='br-col';
    col.innerHTML=`<div class="br-col-hd ${rd.cls}">${rd.name}<span class="br-col-hd-count">${rd.n} partido${rd.n!==1?'s':''}</span></div>`;
    const slots=document.createElement('div');slots.className='br-slots';
    for(let i=0;i<rd.n;i++){
      const mid=`${rd.key}_${i}`;
      let h=null,a=null;
      if(rd.key==='r32'){
        const m=mu[mid];if(m){h=m.home;a=m.away;}
      } else {
        const feed=BRACKET_FEEDS[mid];
        if(feed){
          h=ub[feed[0]]||null;
          a=ub[feed[1]]||null;
        }
      }
      // Si es la final y ya hay ganador, mostrar card de campeón
      if(rd.key === 'f' && ub[mid] && (h || a)){
        const champCode = ub[mid];
        const sc = picks[CU.u]?.sc?.[mid];
        const otherCode = (champCode === h) ? a : h;
        const card = document.createElement('div');
        card.className = 'br-champ br-m-reveal';
        card.style.setProperty('--brm-i', String(mIdx));
        card.onclick = () => openBrModal(mid, h, a);
        card.style.cursor = 'pointer';
        card.title = 'Clic para editar tu campeón';
        const champFlag = (typeof FL !== 'undefined' && FL[champCode]) || '🏳';
        const champName = (typeof NM !== 'undefined' && NM[champCode]) || champCode;
        const otherName = otherCode ? ((typeof NM !== 'undefined' && NM[otherCode]) || otherCode) : '';
        const sub = (sc && sc.h != null && sc.a != null && otherName)
          ? `${sc.h} - ${sc.a} vs ${otherName}`
          : (otherName ? `vs ${otherName}` : 'Tu pronóstico');
        card.innerHTML = `
          <div class="br-champ-lbl">Tu campeón</div>
          <div class="br-champ-trophy">🏆</div>
          <div class="br-champ-flag">${champFlag}</div>
          <div class="br-champ-name">${escHtml(champName)}</div>
          <div class="br-champ-sub">${escHtml(sub)}</div>`;
        slots.appendChild(card);
      } else {
        const m = mkBrMatch(mid,h,a,ub[mid]||null);
        m.classList.add('br-reveal');
        m.style.setProperty('--brm-i', String(mIdx));
        slots.appendChild(m);
      }
      mIdx++;
    }
    col.appendChild(slots);bk.appendChild(col);
  });
  // Animar entrada
  observeBracketCards();
  // Actualizar progreso del bracket
  updateBracketProg();
}

let _brmObserver = null;
function observeBracketCards(){
  if(_brmObserver) _brmObserver.disconnect();
  const cards = document.querySelectorAll('#bk .br-reveal, #bk .br-m-reveal');
  if(!cards.length) return;
  if(!('IntersectionObserver' in window)){
    cards.forEach(c=>c.classList.add('show'));
    return;
  }
  _brmObserver = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
      if(entry.isIntersecting){
        entry.target.classList.add('show');
        _brmObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.05, rootMargin: '0px 0px -5% 0px' });
  cards.forEach(c=>{
    const rect = c.getBoundingClientRect();
    if(rect.top < window.innerHeight * 0.95) c.classList.add('show');
    else _brmObserver.observe(c);
  });
}

function updateBracketProg(){
  if(!CU) return;
  const sc = picks[CU.u]?.sc || {};
  const TOTAL_BR = 31;
  let predicted = 0;
  ['r32','r16','qf','sf','f'].forEach(rk=>{
    const n = rk==='r32'?16:rk==='r16'?8:rk==='qf'?4:rk==='sf'?2:1;
    for(let i=0;i<n;i++){
      const id = `${rk}_${i}`;
      const s = sc[id];
      if(s != null && s.h != null && s.a != null) predicted++;
    }
  });
  const pct = TOTAL_BR > 0 ? Math.round(predicted/TOTAL_BR * 100) : 0;
  const pctEl = document.getElementById('br-prog-pct');
  const fillEl = document.getElementById('br-prog-fill');
  const subEl = document.getElementById('br-prog-sub');
  if(pctEl) pctEl.textContent = `${predicted} / ${TOTAL_BR} · ${pct}%`;
  if(fillEl) fillEl.style.width = pct + '%';
  if(subEl){
    const missing = TOTAL_BR - predicted;
    if(missing > 0) subEl.textContent = `Te faltan ${missing} predicción${missing!==1?'es':''} por hacer`;
    else subEl.textContent = `¡Bracket completo! 🎯`;
  }
  // Sticky
  const stkFill = document.getElementById('br-sticky-fill');
  const stkPct  = document.getElementById('br-sticky-pct');
  if(stkFill) stkFill.style.width = pct + '%';
  if(stkPct)  stkPct.textContent = pct + '%';
}
function mkBrMatch(id,h,a,w){
  const el=document.createElement('div');
  el.className='br-m';
  const label=MATCH_NUM[id]||id;
  const sc=picks[CU.u]?.sc?.[id];
  const hasScore=sc!=null&&sc.h!=null;

  // Bloqueado si NO se conocen ambos equipos (depende de partidos previos sin completar)
  const bothKnown = !!(h && a);
  if(bothKnown){
    el.style.cursor='pointer';
    el.title='Clic para predecir resultado';
  } else {
    el.classList.add('br-locked');
    el.title='Disponible cuando se definan los equipos de la fase anterior';
  }

  el.innerHTML=`
    <div class="br-mid">${label}${!bothKnown?'<span class="br-lock-icon" aria-hidden="true">🔒</span>':''}</div>
    <div class="br-teams">
      ${brT(id,'h',h,w,sc)}
      ${brT(id,'a',a,w,sc)}
    </div>`;

  if(bothKnown){
    el.addEventListener('click', ()=>openBrModal(id,h,a));
  } else {
    el.addEventListener('click', ()=>{
      toast('Define el ganador de los partidos anteriores para desbloquear este');
    });
  }
  return el;
}

function brT(id,side,team,winner,sc){
  const isW=winner&&winner===team;
  const hasScore=sc!=null&&sc.h!=null&&sc.a!=null;
  return `<div class="br-t ${isW?'W':''}">
    <span class="btf">${team?FL[team]||'🏳':'❓'}</span>
    <span class="btn ${!team?'tbd':''}">${team?NM[team]||team:'Por definir'}</span>
    ${isW&&hasScore?`<span style="font-size:.62rem;color:var(--green);font-weight:700;flex-shrink:0;background:var(--g-bg);padding:1px 5px;border-radius:4px">${sc.h}-${sc.a}</span>`:''}
    ${isW&&!hasScore?'<span class="br-check">✓</span>':''}
  </div>`;
}

let _brId=null, _brH=null, _brA=null;

function openBrModal(id,h,a){
  if(!h&&!a){toast('Completa la fase de grupos primero');return;}
  _brId=id; _brH=h; _brA=a;
  const sc=picks[CU.u]?.sc?.[id];
  const w=picks[CU.u]?.br?.[id];
  // Reset modal state
  document.getElementById('br-sm-title').textContent=`${MATCH_NUM[id]||id} · Predecir resultado`;
  document.getElementById('br-sm-hname').textContent=NM[h]||h||'Local';
  document.getElementById('br-sm-aname').textContent=NM[a]||a||'Visitante';
  document.getElementById('br-sm-hflag').textContent=FL[h]||'🏳';
  document.getElementById('br-sm-aflag').textContent=FL[a]||'🏳';
  document.getElementById('br-sm-h').value=sc?.h??'';
  document.getElementById('br-sm-a').value=sc?.a??'';
  // Botón compartir solo si ya hay marcador o ganador guardado
  const brSh = document.getElementById('br-share-btn');
  if(brSh){
    const hasPrediction = (sc!=null && sc.h!=null && sc.a!=null);
    brSh.style.display = hasPrediction ? 'block' : 'none';
  }
  // Show/hide tie-breaker based on current score
  updateBrTiebreaker();
  // Pre-select winner if already set
  document.querySelectorAll('.br-sm-winner-btn').forEach(b=>{
    b.classList.toggle('active', b.dataset.team===w);
  });
  document.getElementById('br-score-modal').style.display='flex';
  setTimeout(()=>document.getElementById('br-sm-h').focus(),60);
}

function updateBrTiebreaker(){
  const hv=document.getElementById('br-sm-h').value;
  const av=document.getElementById('br-sm-a').value;
  const tie=document.getElementById('br-sm-tiebreaker');
  const autoEl=document.getElementById('br-sm-auto-winner');
  const wbH=document.getElementById('br-sm-wb-h');
  const wbA=document.getElementById('br-sm-wb-a');

  if(hv!==''&&av!==''){
    if(+hv===+av){
      // Empate — mostrar selector de ganador
      tie.style.display='block';
      autoEl.style.display='none';
      wbH.textContent=`${FL[_brH]||'🏳'} ${NM[_brH]||_brH}`;
      wbA.textContent=`${FL[_brA]||'🏳'} ${NM[_brA]||_brA}`;
      wbH.dataset.team=_brH||'';
      wbA.dataset.team=_brA||'';
      // Mantener selección previa si existe
      const w=picks[CU.u]?.br?.[_brId];
      document.querySelectorAll('.br-sm-winner-btn').forEach(b=>b.classList.toggle('active',b.dataset.team===w));
    } else {
      // Ganador automático por marcador
      tie.style.display='none';
      const auto=+hv>+av?_brH:_brA;
      if(auto){
        picks[CU.u].br[_brId]=auto;
        autoEl.style.display='block';
        autoEl.textContent=`✓ ${FL[auto]||'🏳'} ${NM[auto]||auto} avanza`;
      }
    }
  } else {
    tie.style.display='none';
    autoEl.style.display='none';
  }
}

function selectBrWinner(team){
  picks[CU.u].br[_brId]=team;
  document.querySelectorAll('.br-sm-winner-btn').forEach(b=>{
    b.classList.toggle('active',b.dataset.team===team);
  });
}

function saveBrScore(){
  const hv=document.getElementById('br-sm-h').value;
  const av=document.getElementById('br-sm-a').value;
  const w=picks[CU.u]?.br?.[_brId];
  // Marcador obligatorio
  if(hv===''||av===''){toast('El marcador es obligatorio');return;}
  // En empate, el ganador es obligatorio
  if(+hv===+av && !w){toast('Selecciona quién avanza');return;}
  if(!picks[CU.u].sc) picks[CU.u].sc={};
  picks[CU.u].sc[_brId]={h:+hv,a:+av};
  const savedId = _brId;
  closeBrScoreModal();
  persist();
  renderBracket();
  const winner=picks[CU.u]?.br?.[savedId];
  toast(`✓ ${winner?NM[winner]||winner:'Pick'} · ${hv}-${av}`);
  // Pulse en la card recién guardada
  setTimeout(()=>{
    // Buscar la card del bracket que corresponde al matchId guardado
    const cards = document.querySelectorAll('#bk .br-m, #bk .br-champ');
    cards.forEach(card=>{
      // Buscar por el data-mid si existe; si no, lo dejamos pasar
      // En lugar de eso, buscamos por onclick que contenga el ID
      if(card.onclick && card.onclick.toString().includes(`'${savedId}'`)){
        card.classList.remove('saved-pulse');
        void card.offsetWidth;
        card.classList.add('saved-pulse');
        setTimeout(()=>card.classList.remove('saved-pulse'), 700);
      }
    });
  }, 50);
}

function clearBrScore(){
  if(picks[CU.u].sc) delete picks[CU.u].sc[_brId];
  if(picks[CU.u].br) delete picks[CU.u].br[_brId];
  closeBrScoreModal();
  persist();
  renderBracket();
  toast('Predicción borrada');
}

function closeBrScoreModal(){
  document.getElementById('br-score-modal').style.display='none';
}

document.getElementById('br-score-modal').addEventListener('click',e=>{
  if(e.target===document.getElementById('br-score-modal')) closeBrScoreModal();
});

// ══════════════════════════════════════════════════════
//  RANKING — real users + simulated demo table
// ══════════════════════════════════════════════════════
function calcScore(u){
  let gr=0, br=0;
  const up=picks[u]; if(!up) return{grupos:0,bracket:0,total:0};

  // ── GRUPOS: +1 resultado correcto, +2 bonus exacto ──
  if(results.sc){
    Object.values(GM).forEach(ms=>{
      ms.forEach(m=>{
        const real=results.sc[m.id];
        const mine=up.sc?.[m.id];
        if(!real||mine==null) return;
        const rh=+real.h, ra=+real.a, mh=+mine.h, ma=+mine.a;
        // Acertar W/E/L
        const realRes = rh>ra?'H':rh<ra?'A':'D';
        const mineRes = mh>ma?'H':mh<ma?'A':'D';
        if(realRes===mineRes) gr+=PTS.grpResult;
        // Bonus exacto
        if(rh===mh && ra===ma) gr+=PTS.grpExact;
      });
    });
  }

  // ── ELIMINATORIA: puntos por ronda ──
  if(results.bracket){
    Object.entries(results.bracket).forEach(([id,rr])=>{
      if(!rr?.winner) return;
      const rk=id.split('_')[0];
      const [winPts, exactBonus]=PTS[rk]||[0,0];
      const mw=up.br?.[id];
      if(!mw) return;
      if(mw===rr.winner){
        br+=winPts;
        const ms=up.sc?.[id];
        if(ms && rr.h!=null && +ms.h===rr.h && +ms.a===rr.a) br+=exactBonus;
      }
    });
  }
  return{grupos:gr, bracket:br, total:gr+br};
}

function renderRanking(){
  const wrap=document.getElementById('rk-wrap');
  wrap.innerHTML=`<div class="sk-stack" style="padding:6px 0">
    ${Array.from({length:6},(_,i)=>`
    <div class="sk row">
      <span class="sk" style="width:18px;height:18px;flex-shrink:0"></span>
      <span class="sk circle" style="width:30px;height:30px;flex-shrink:0"></span>
      <span class="sk" style="height:14px;flex:1;max-width:${120 + (i%3)*20}px"></span>
      <span class="sk" style="width:32px;height:14px;flex-shrink:0"></span>
    </div>`).join('')}
  </div>`;

  api('GET','/api/ranking').then(board=>{
    const enriched=(board||[])
      .map(p=>({...p, isMe:p.name===CU.u}))
      .sort((a,b)=>{
        if(b.total!==a.total) return b.total-a.total;
        return a.name.localeCompare(b.name,'es');
      });
    wrap.innerHTML=buildRankingHTML(enriched,false);
    updateRankingHero(enriched);
    observeRankingCards();
  }).catch(()=>{
    // Fallback to client-side calc if API fails
    const board=[];
    Object.keys(picks).forEach(u=>{
      const sc=calcScore(u);
      board.push({name:u,...sc,isMe:u===CU.u});
    });
    board.sort((a,b)=>{
      if(b.total!==a.total) return b.total-a.total;
      return a.name.localeCompare(b.name,'es');
    });
    wrap.innerHTML=buildRankingHTML(board,false);
    updateRankingHero(board);
    observeRankingCards();
  });
}

// Llenar el hero del ranking con stats y card "Tu posición"
function updateRankingHero(board){
  if(!Array.isArray(board) || !board.length) return;
  const max = board[0]?.total || 0;
  const players = board.length;
  const playersEl = document.getElementById('rk-stat-players');
  const maxEl = document.getElementById('rk-stat-max');
  const eyeEl = document.getElementById('rk-eyebrow-txt');
  if(playersEl) playersEl.textContent = String(players);
  if(maxEl) maxEl.textContent = String(max);
  if(eyeEl) eyeEl.textContent = `Ranking en vivo · ${players} jugador${players!==1?'es':''}`;

  // Tu posición
  const meIdx = board.findIndex(p => p.isMe);
  const myposEl = document.getElementById('rk-mypos');
  if(meIdx >= 0 && myposEl){
    const me = board[meIdx];
    const pos = meIdx + 1;
    const posEl = document.getElementById('rk-mypos-pos');
    const nameEl = document.getElementById('rk-mypos-name');
    const ptsEl = document.getElementById('rk-mypos-pts');
    if(posEl) posEl.innerHTML = `${pos}<sup>°</sup>`;
    const streak = currentStreak(me.name);
    const streakTxt = streak >= 3 ? ` · 🔥 racha de ${streak}` : '';
    if(nameEl) nameEl.textContent = `de ${players} jugador${players!==1?'es':''}${streakTxt}`;
    if(ptsEl){
      ptsEl.dataset.target = String(me.total);
      countUp(ptsEl, 0, me.total, 900);
    }
    myposEl.style.display = 'flex';

    // Sticky position
    const stkPos = document.getElementById('rk-sticky-pos');
    if(stkPos) stkPos.textContent = `${pos}° · ${me.total} pts`;
  } else if(myposEl){
    myposEl.style.display = 'none';
  }
}

// Animar entrada de podium y filas
function observeRankingCards(){
  const cards = document.querySelectorAll('#rk-wrap .rk-reveal');
  if(!cards.length) return;
  if(!('IntersectionObserver' in window)){
    cards.forEach(c=>c.classList.add('show'));
    return;
  }
  const obs = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('show');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -5% 0px' });
  cards.forEach(c=>{
    const rect = c.getBoundingClientRect();
    if(rect.top < window.innerHeight * 0.95) c.classList.add('show');
    else obs.observe(c);
  });
}

function buildRankingHTML(board,isDemo){
  if(!board.length) return `<div style="text-align:center;padding:3rem 2rem;display:flex;flex-direction:column;align-items:center;gap:.75rem">
    <div style="font-size:3rem">🏆</div>
    <div style="font-weight:800;font-size:1rem;color:var(--ink)">Sin datos aún</div>
    <div style="font-size:.82rem;color:var(--ink3);max-width:280px;line-height:1.6">El ranking aparecerá cuando el admin ingrese los primeros resultados.</div>
  </div>`;
  const maxPts=board[0].total||1;
  const top3=board.slice(0,3);
  const rest=board.slice(3);

  const podMedal=['🥇','🥈','🥉'];
  const podPts=['gld','slv','brz'];
  const podLabel=['1er lugar','2do lugar','3er lugar'];

  let html=`<div class="rk-wrap">`;

  if(isDemo) html+=`<div style="background:var(--b-bg);border:1px solid var(--b2);border-radius:var(--rad);padding:10px 14px;font-size:.76rem;color:var(--b);font-weight:500">
    👁 Vista previa — los puntos reales aparecen cuando el admin ingrese resultados
  </div>`;

  // Section header: Top 3
  html+=`<div class="rk-section-h">Top 3</div>`;

  // Podium — orden natural: 1°, 2°, 3°
  html+=`<div class="rk-podium">`;
  top3.forEach((p, i)=>{
    const cls = `p${i+1}`;
    if(!p){html+=`<div class="podium-card ${cls} rk-reveal show"></div>`;return;}
    const meTag = p.isMe ? ' <span class="pill pb" style="font-size:.55rem">tú</span>' : '';
    html+=`<div class="podium-card ${cls} rk-reveal" onclick="openProfile('${p.name.replace(/'/g,"\\'")}')">
      <div class="pod-rank">${podLabel[i]}</div>
      <div class="pod-medal">${podMedal[i]}</div>
      <div class="pod-name">${escHtml(p.name)}${meTag}</div>
      <div class="pod-pts ${podPts[i]}">${p.total}<span>pts</span></div>
      <div class="pod-sub">${p.grupos}g · ${p.bracket}e</div>
    </div>`;
  });
  html+=`</div>`;

  // Resto
  if(rest.length){
    html+=`<div class="rk-section-h">Resto</div>`;
    html+=`<div class="rk-list">`;
    rest.forEach((p,i)=>{
      const pos=i+4;
      const barW=maxPts>0?Math.round(p.total/maxPts*100):0;
      const barColor=p.isMe?'var(--green)':'var(--grad-tri)';
      const meTag = p.isMe ? ' <span class="pill pb" style="font-size:.55rem">tú</span>' : '';
      const streakIcon = currentStreak(p.name)>=3 ? ` 🔥` : '';
      html+=`<div class="rk-row rk-reveal${p.isMe?' me':''}" style="--rkrow-i:${i}" onclick="openProfile('${p.name.replace(/'/g,"\\'")}')">
        <div class="rk-row-pos">${pos}</div>
        <div class="rk-row-info">
          <div class="rk-row-name">${escHtml(p.name)}${meTag}${streakIcon}</div>
          <div class="rk-row-sub">${p.grupos} grupos · ${p.bracket} elim.</div>
          <div class="rk-row-bar-w"><div class="rk-row-bar" style="width:${barW}%;background:${barColor}"></div></div>
        </div>
        <div class="rk-row-pts">${p.total} <span>pts</span></div>
      </div>`;
    });
    html+=`</div>`;
  }

  html+=`</div>`;
  return html;
}

// ══════════════════════════════════════════════════════
//  ADMIN
// ══════════════════════════════════════════════════════
function renderAdmin(){
  // Load all refs first so the users table shows correct counts
  api('GET','/api/refs').then(allRefs=>{ refs=allRefs; renderUsersTable(); }).catch(()=>{});
  // Cargar lista de pendientes para el panel de aprobación
  renderPendingApprovals();
  const w=document.getElementById('adm-wrap');
  let html='';

  // ── PENDIENTES DE APROBACIÓN ──
  html+=`<div id="pending-approvals-card" style="background:var(--surface);border:1.5px solid var(--border);border-radius:var(--rad);padding:1rem 1.25rem;margin-bottom:1rem;box-shadow:var(--sh)">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:.75rem">
      <div style="font-weight:800;font-size:.95rem;color:var(--ink)">⏳ Inscripciones pendientes <span id="pending-count" style="background:var(--r-bg);color:var(--r);padding:2px 8px;border-radius:10px;font-size:.7rem;margin-left:6px;display:none">0</span></div>
      <button onclick="renderPendingApprovals()" style="background:none;border:none;color:var(--ink3);cursor:pointer;font-size:.85rem" title="Recargar">↻</button>
    </div>
    <div style="font-size:.78rem;color:var(--ink3);margin-bottom:.85rem;line-height:1.5">Aprueba a los usuarios después de confirmar el pago. Mientras estén pendientes no podrán entrar a la app.</div>
    <div id="pending-list"><div style="color:var(--ink3);font-size:.82rem;padding:.5rem 0">Cargando…</div></div>
  </div>`;

  // ── SNAPSHOT DEL RANKING ──
  html+=`<div style="background:var(--surface);border:1.5px solid var(--border);border-radius:var(--rad);padding:1rem 1.25rem;margin-bottom:1rem;box-shadow:var(--sh)">
    <div style="font-weight:800;font-size:.9rem;color:var(--ink);margin-bottom:.5rem">📸 Guardar snapshot del ranking</div>
    <div style="font-size:.78rem;color:var(--ink3);margin-bottom:.75rem">Guarda una foto del ranking actual para el historial. Úsalo al final de cada jornada.</div>
    <div style="display:flex;gap:.5rem">
      <input id="snapshot-label" type="text" placeholder="ej. Jornada 1, Octavos, etc." maxlength="40"
        style="flex:1;padding:9px 12px;border:1.5px solid var(--border);border-radius:8px;background:var(--bg);color:var(--ink);font-family:'Plus Jakarta Sans',sans-serif;font-size:.85rem;outline:none">
      <button onclick="saveRankingSnapshot()" style="padding:9px 16px;background:var(--grad-tri);color:#fff;border:none;border-radius:8px;font-family:'Plus Jakarta Sans',sans-serif;font-weight:700;font-size:.82rem;cursor:pointer;white-space:nowrap">Guardar</button>
    </div>
  </div>`;

  // ── LIVE SCORES BAR ──
  html+=`<div class="live-bar">
    <div>
      <div class="live-status">
        <div class="live-dot${liveEnabled?' on':''}" id="live-dot"></div>
        <span id="live-status-txt">${liveEnabled?'Sincronización activa':'Sincronización pausada'}</span>
      </div>
      <div class="live-last" id="live-last-txt">${liveLastUpdate
        ?`Última actualización: ${liveLastUpdate.toLocaleTimeString('es-MX',{hour:'2-digit',minute:'2-digit'})}`
        :'Activa la sincronización para importar resultados automáticamente'}</div>
    </div>
    <div class="live-btns">
      <button class="live-btn" onclick="manualRefresh()">↻ Actualizar ahora</button>
      <button class="live-btn ${liveEnabled?'danger':'primary'}" onclick="toggleLive()">
        ${liveEnabled?'⏸ Pausar':'▶ Activar sincronización'}
      </button>
    </div>
  </div>
  <div style="background:var(--b-bg);border:1px solid var(--b2);border-radius:8px;padding:10px 14px;font-size:.76rem;color:var(--b);margin-bottom:1rem;line-height:1.5">
    <b>ℹ️ Resultados automáticos:</b> Al activar la sincronización, la app consulta football-data.org cada 60 segundos y actualiza los marcadores terminados. Los resultados marcados con <b>auto</b> se importaron solos — puedes editarlos manualmente si hay algún error.${!FDORG_KEY?' <b>Modo demo activo:</b> sin API key configurada, se simula una actualización aleatoria para mostrar el funcionamiento.':''}
  </div>`;

  // ── CREATE USER ──
  html+=`<div class="adm-section">
    <div class="adm-title">Agregar participante</div>
    <div class="cu-form">
      <div class="cu-grid">
        <div class="cu-field">
          <label>Usuario</label>
          <input id="cu-u" type="text" placeholder="nombre_usuario" autocomplete="off"
            oninput="this.value=this.value.toLowerCase().replace(/[^a-z0-9_]/g,'');autoCode()">
        </div>
        <div class="cu-field">
          <label>PIN</label>
          <input id="cu-p" type="text" placeholder="ej. aB3x9" maxlength="5" oninput="this.value=this.value.toUpperCase()">
        </div>
        <div class="cu-field">
          <label>Código único (3 letras)</label>
          <input id="cu-c" type="text" class="code-inp" placeholder="ABC" maxlength="3"
            oninput="this.value=this.value.toUpperCase().replace(/[^A-Z]/g,'')">
        </div>
        <button class="cu-add-btn" onclick="createUser()">+ Agregar</button>
      </div>
      <div class="cu-err" id="cu-err"></div>
      <div class="cu-hint">El código se genera automáticamente desde el usuario, pero puedes editarlo. El PIN se lo das tú al participante para que entre a la app.</div>
    </div>

    <div class="users-tbl-wrap">
      <table class="rk-table">
        <thead><tr><th>Usuario</th><th>PIN</th><th>Código</th><th>Referidos</th><th>Partidos</th><th>Puntos</th><th></th></tr></thead>
        <tbody id="users-tbody"></tbody>
      </table>
    </div>
  </div>`;

  // ── RESULTS BY GROUP ──
  html+=`<div class="adm-section">
    <div class="adm-title">Resultados de Grupos</div>
    <p style="font-size:.78rem;color:var(--ink3);margin-bottom:1rem">El sistema calcula las tablas con estos marcadores y actualiza el ranking automáticamente.</p>
    <div class="adm-grid">`;
  Object.entries(GROUPS).forEach(([g,{teams}])=>{
    const ms=GM[g];
    html+=`<div class="adm-card"><div class="adm-card-hd">Grupo ${g}</div>`;
    ms.forEach(m=>{
      const r=results.sc?.[m.id];
      const isAuto=r?.auto;
      html+=`<div class="res-row">
        <div class="rteam"><span>${FL[m.h]||'🏳'}</span><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:54px">${NM[m.h]||m.h}</span></div>
        <div style="display:flex;align-items:center;gap:4px;flex-direction:column">
          <div style="display:flex;align-items:center;gap:4px">
            <input class="sinp" type="number" min="0" max="20" value="${r!=null?r.h:''}" placeholder="0" id="rr_${m.id}_h" oninput="markManual('${m.id}')">
            <span class="dash">-</span>
            <input class="sinp" type="number" min="0" max="20" value="${r!=null?r.a:''}" placeholder="0" id="rr_${m.id}_a" oninput="markManual('${m.id}')">
          </div>
          ${isAuto?`<span style="font-size:.58rem;color:var(--g);font-weight:700;letter-spacing:.5px">AUTO</span>`:''}
        </div>
        <div class="rteam r"><span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:54px">${NM[m.a]||m.a}</span><span>${FL[m.a]||'🏳'}</span></div>
      </div>`;
    });
    html+=`<button class="sv-btn" onclick="saveGRes('${g}')">Guardar Grupo ${g}</button></div>`;
  });
  html+=`</div></div>`;

  // ── BRACKET RESULTS ──
  html+=`<div class="adm-section">
    <div class="adm-title">Resultados Eliminatorios</div>
    <div style="background:var(--b-bg);border:1px solid var(--b2);border-radius:8px;padding:10px 14px;font-size:.76rem;color:var(--b);margin-bottom:1rem;line-height:1.5">
      ℹ️ Ingresa el nombre de los equipos, el marcador a 90 minutos y selecciona al ganador. Los usuarios verán sus puntos actualizados automáticamente.
    </div>`;

  const elimRoundsAdmin=[
    {key:'r32', name:'Dieciseisavos', n:16},
    {key:'r16', name:'Octavos',       n:8},
    {key:'qf',  name:'Cuartos',       n:4},
    {key:'sf',  name:'Semis',         n:2},
    {key:'f',   name:'Final',         n:1},
  ];

  elimRoundsAdmin.forEach(({key,name,n})=>{
    html+=`<div class="adm-card"><div class="adm-card-hd">${name}</div>`;
    for(let i=0;i<n;i++){
      const mid=`${key}_${i}`;
      const label=MATCH_NUM[mid]||mid;
      const rr=results.bracket?.[mid]||{};
      const savedH=rr.teamH||'';
      const savedA=rr.teamA||'';
      const savedW=rr.winner||'';
      const savedHg=rr.h!=null?rr.h:'';
      const savedAg=rr.a!=null?rr.a:'';
      const teamOpts=Object.entries(NM).map(([code,name])=>`<option value="${code}" ${savedH===code||savedA===code?'':''}>` + (FL[code]||'') + ' ' + name + '</option>').join('');
      const teamOptsH=Object.entries(NM).map(([code,name])=>`<option value="${code}"${savedH===code?' selected':''}>${FL[code]||''} ${name}</option>`).join('');
      const teamOptsA=Object.entries(NM).map(([code,name])=>`<option value="${code}"${savedA===code?' selected':''}>${FL[code]||''} ${name}</option>`).join('');
      html+=`<div style="border:1px solid var(--border);border-radius:8px;padding:10px;margin-bottom:8px">
        <div style="font-size:.6rem;font-weight:700;color:var(--ink3);margin-bottom:8px;letter-spacing:.5px">${label}</div>
        <div style="display:grid;grid-template-columns:1fr 90px 1fr;gap:6px;align-items:center;margin-bottom:8px">
          <select id="br_${mid}_th" style="padding:6px;border:1.5px solid var(--border);border-radius:7px;background:var(--bg);color:var(--ink);font-family:'Plus Jakarta Sans',sans-serif;font-size:.76rem;width:100%">
            <option value="">— Local —</option>
            ${teamOptsH}
          </select>
          <div style="display:flex;align-items:center;justify-content:center;gap:3px">
            <input class="sinp" type="number" min="0" max="20" value="${savedHg}" placeholder="0" id="br_${mid}_h" style="width:30px;text-align:center">
            <span class="dash">-</span>
            <input class="sinp" type="number" min="0" max="20" value="${savedAg}" placeholder="0" id="br_${mid}_a" style="width:30px;text-align:center">
          </div>
          <select id="br_${mid}_ta" style="padding:6px;border:1.5px solid var(--border);border-radius:7px;background:var(--bg);color:var(--ink);font-family:'Plus Jakarta Sans',sans-serif;font-size:.76rem;width:100%">
            <option value="">— Visitante —</option>
            ${teamOptsA}
          </select>
        </div>
        <div style="font-size:.72rem;color:var(--ink3)">Ganador:
          <select id="br_${mid}_w" style="margin-left:4px;padding:4px 8px;border:1px solid var(--border);border-radius:6px;background:var(--surface);color:var(--ink);font-family:'Plus Jakarta Sans',sans-serif;font-size:.78rem">
            <option value="">— Sin resultado —</option>
            <option value="__h" ${savedW==='__h'?'selected':''}>🏠 Local${savedH?' ('+NM[savedH]||savedH+')':''}</option>
            <option value="__a" ${savedW==='__a'?'selected':''}>✈️ Visitante${savedA?' ('+NM[savedA]||savedA+')':''}</option>
          </select>
        </div>
      </div>`;
    }
    html+=`<button class="sv-btn" style="margin-top:.5rem" onclick="saveBrRes('${key}')">Guardar ${name}</button></div>`;
  });
  html+=`</div>`;

  html+=`<div class="adm-section">
    <div class="adm-title">Historial de cambios</div>
    <p style="font-size:.78rem;color:var(--ink3);margin-bottom:.75rem">Registro de todos los resultados modificados — <span style="color:var(--b2);font-weight:600">AUTO</span> = importado en vivo, <span style="color:var(--gld);font-weight:600">MANUAL</span> = editado por admin.</p>
    <div id="changelog-wrap"></div>
  </div>`;

  w.innerHTML=html;
  renderUsersTable();
  renderChangelog();
}

function renderPendingApprovals(){
  const list = document.getElementById('pending-list');
  const countBadge = document.getElementById('pending-count');
  if(!list) return;
  list.innerHTML = `<div class="sk-stack">
    ${Array.from({length:2},()=>`
    <div class="sk row" style="display:block">
      <div style="display:flex;justify-content:space-between;align-items:start;gap:10px">
        <div style="flex:1">
          <div class="sk" style="width:60%;height:14px;margin-bottom:6px"></div>
          <div class="sk" style="width:40%;height:11px;margin-bottom:8px"></div>
          <div class="sk" style="width:50%;height:11px"></div>
        </div>
        <div style="display:flex;gap:6px">
          <div class="sk" style="width:64px;height:30px"></div>
          <div class="sk" style="width:74px;height:30px"></div>
        </div>
      </div>
    </div>`).join('')}
  </div>`;

  api('GET','/api/users').then(users=>{
    const pending = (users||[]).filter(u => u.approved === false && !u.is_admin);
    if(countBadge){
      countBadge.textContent = String(pending.length);
      countBadge.style.display = pending.length ? 'inline-block' : 'none';
    }
    if(!pending.length){
      list.innerHTML = `<div style="color:var(--ink3);font-size:.82rem;padding:.75rem 0;text-align:center">✅ No hay inscripciones pendientes</div>`;
      return;
    }
    list.innerHTML = pending.map(u=>{
      const fullName = (u.full_name || '').replace(/</g,'&lt;');
      const phone = (u.phone || '').replace(/</g,'&lt;');
      const phoneClean = (u.phone || '').replace(/\D/g,'');
      const waLink = phoneClean.length >= 8
        ? `https://wa.me/${phoneClean.startsWith('52')?phoneClean:'52'+phoneClean}`
        : null;
      const created = u.created_at ? new Date(u.created_at) : null;
      const ago = created ? timeAgo(created) : '';
      return `<div style="background:var(--bg);border:1px solid var(--border);border-radius:12px;padding:12px 14px;margin-bottom:8px">
        <div style="display:flex;align-items:start;justify-content:space-between;gap:10px;flex-wrap:wrap">
          <div style="flex:1;min-width:160px">
            <div style="font-weight:800;color:var(--ink);font-size:.92rem;margin-bottom:2px">${fullName || '<i style="color:var(--ink3)">sin nombre</i>'}</div>
            <div style="font-size:.78rem;color:var(--ink3);margin-bottom:6px">@${u.username} · ${ago}</div>
            <div style="display:flex;gap:10px;flex-wrap:wrap;font-size:.78rem">
              ${phone ? `<span style="color:var(--ink2)">📱 ${phone}</span>` : ''}
              ${waLink ? `<a href="${waLink}" target="_blank" rel="noopener" style="color:var(--green2);font-weight:700;text-decoration:none">↗ WhatsApp</a>` : ''}
            </div>
          </div>
          <div style="display:flex;gap:6px;flex-shrink:0">
            <button onclick="rejectUser('${u.username.replace(/'/g,"\\'")}','${(fullName||u.username).replace(/'/g,"\\'")}')"
              style="background:var(--r-bg);color:var(--r);border:none;padding:8px 12px;border-radius:8px;font-family:'Plus Jakarta Sans',sans-serif;font-weight:700;font-size:.78rem;cursor:pointer">
              ✕ Rechazar
            </button>
            <button onclick="approveUser('${u.username.replace(/'/g,"\\'")}','${(fullName||u.username).replace(/'/g,"\\'")}')"
              style="background:var(--grad-tri);color:#fff;border:none;padding:8px 14px;border-radius:8px;font-family:'Plus Jakarta Sans',sans-serif;font-weight:800;font-size:.78rem;cursor:pointer">
              ✓ Aprobar
            </button>
          </div>
        </div>
      </div>`;
    }).join('');
  }).catch(e=>{
    list.innerHTML = `<div style="color:var(--r);font-size:.82rem;padding:.5rem 0">Error al cargar pendientes: ${e.message||''}</div>`;
  });
}

function approveUser(username, displayName){
  if(!username) return;
  api('POST', `/api/users/${encodeURIComponent(username)}/approve`)
    .then(()=>{
      toast(`✓ ${displayName||username} aprobado`);
      renderPendingApprovals();
      // Refrescar la tabla principal de usuarios
      api('GET','/api/users').then(users=>{
        dynUsers = users.filter(x=>!USERS.find(y=>y.u===x.username))
          .map(x=>({u:x.username, p:'', admin:x.is_admin, code:x.code}));
        renderUsersTable();
      }).catch(()=>{});
    })
    .catch(e=>toast(`Error: ${e.message||'no se pudo aprobar'}`));
}

function rejectUser(username, displayName){
  if(!username) return;
  if(!confirm(`¿Rechazar la inscripción de ${displayName||username}?\n\nEsto borrará la solicitud. El usuario tendría que inscribirse de nuevo.`)) return;
  api('POST', `/api/users/${encodeURIComponent(username)}/reject`)
    .then(()=>{
      toast(`Inscripción de ${displayName||username} rechazada`);
      renderPendingApprovals();
    })
    .catch(e=>toast(`Error: ${e.message||'no se pudo rechazar'}`));
}

// Helper: tiempo relativo en español
function timeAgo(date){
  const diff = (Date.now() - date.getTime()) / 1000;
  if(diff < 60) return 'hace un momento';
  if(diff < 3600) return `hace ${Math.floor(diff/60)} min`;
  if(diff < 86400) return `hace ${Math.floor(diff/3600)} h`;
  if(diff < 604800) return `hace ${Math.floor(diff/86400)} días`;
  return date.toLocaleDateString('es-MX',{day:'numeric',month:'short'});
}

function renderUsersTable(){
  const tbody=document.getElementById('users-tbody');
  if(!tbody) return;
  const all=allUsers();
  tbody.innerHTML='';
  all.forEach(u=>{
    const code=u.code||genCode(u.u);
    const refCount=(refs[code]||[]).length;
    const sc=picks[u.u]?.sc||{};
    const pts=calcScore(u.u).total;
    const isMe=u.u===CU.u;
    const isAdmin=u.admin;
    // Can delete: any user except yourself and other admins
    const canDelete=!isMe&&!isAdmin;
    const tr=document.createElement('tr');
    if(isMe) tr.className='me';
    tr.innerHTML=`
      <td style="font-weight:600">${u.u}${isAdmin?' <span class="pill pg" style="font-size:.6rem">admin</span>':''}${isMe?' <span class="pill pb" style="font-size:.6rem">tú</span>':''}</td>
      <td>
        <div style="display:flex;align-items:center;gap:6px">
          <span id="pin-display-${u.u}" style="font-family:'Plus Jakarta Sans';font-weight:700;letter-spacing:1px;color:var(--ink3)">${u.p}</span>
          ${!isAdmin?`<button onclick="editPin('${u.u}')" style="background:none;border:none;color:var(--ink3);cursor:pointer;font-size:.7rem;padding:2px 5px;border-radius:4px;transition:color .15s" title="Editar PIN">✏️</button>`:''}
        </div>
      </td>
      <td><span style="font-family:'Plus Jakarta Sans';font-weight:800;color:var(--g);letter-spacing:1.5px">${code}</span></td>
      <td style="color:var(--b2);font-weight:600">${refCount}</td>
      <td style="color:var(--ink3);font-size:.82rem">${Object.keys(sc).length}/48</td>
      <td style="font-family:'Plus Jakarta Sans';font-weight:800;color:var(--g)">${pts}</td>
      <td>${canDelete?`<button class="del-btn" onclick="deleteUser('${u.u}')" title="Eliminar usuario">✕</button>`:'<span style="color:var(--border2);font-size:.7rem">—</span>'}</td>`;
    tbody.appendChild(tr);
  });
}

function autoCode(){
  const u=document.getElementById('cu-u').value;
  const c=document.getElementById('cu-c');
  // Only auto-fill if user hasn't manually changed it
  if(!c.dataset.manual){
    c.value=(u.replace(/[^a-z]/gi,'').toUpperCase()+'XXX').slice(0,3);
  }
}
document.addEventListener('input',e=>{ if(e.target.id==='cu-c') e.target.dataset.manual='1'; });

function createUser(){
  const u=document.getElementById('cu-u').value.trim().toLowerCase();
  const p=document.getElementById('cu-p').value.trim();
  const c=document.getElementById('cu-c').value.trim().toUpperCase();
  const err=document.getElementById('cu-err');
  if(!u){err.textContent='El usuario no puede estar vacío.';return;}
  if(!p||p.length!==5||!/^[a-zA-Z0-9]{5}$/.test(p)){err.textContent='El PIN debe tener exactamente 5 caracteres alfanuméricos.';return;}
  if(c.length!==3){err.textContent='El código debe tener exactamente 3 letras.';return;}
  err.textContent='';
  api('POST','/api/users',{username:u,pin:p,code:c})
    .then(()=>api('GET','/api/users'))
    .then(users=>{
      dynUsers=users.filter(x=>!USERS.find(y=>y.u===x.username))
        .map(x=>({u:x.username,p:'',admin:x.is_admin,code:x.code}));
      document.getElementById('cu-u').value='';
      document.getElementById('cu-p').value='';
      document.getElementById('cu-c').value='';
      delete document.getElementById('cu-c').dataset.manual;
      renderUsersTable();renderPremios();
      toast(`Usuario "${u}" creado ✓ · Código: ${c}`);
    })
    .catch(e=>{err.textContent=e.message;});
}

// ── ADMIN ACTION MODAL HELPERS ──
function openAdmModal(title, sub, okLabel, okClass, inputVisible, inputVal, onOk){
  document.getElementById('adm-modal-title').textContent = title;
  document.getElementById('adm-modal-sub').textContent   = sub;
  const inp = document.getElementById('adm-modal-input');
  const okBtn = document.getElementById('adm-modal-ok');
  inp.style.display = inputVisible ? 'block' : 'none';
  inp.value = inputVal || '';
  okBtn.textContent = okLabel;
  okBtn.className = `adm-modal-btn ${okClass}`;
  okBtn.onclick = function(){ onOk(inp.value.trim()); closeAdmModal(); };
  document.getElementById('adm-modal').classList.add('open');
  if(inputVisible) setTimeout(()=>inp.focus(), 60);
}
function closeAdmModal(){
  document.getElementById('adm-modal').classList.remove('open');
}
document.getElementById('adm-modal').addEventListener('click', e=>{
  if(e.target===document.getElementById('adm-modal')) closeAdmModal();
});

function deleteUser(u){
  if(u===CU.u) return;
  openAdmModal(
    `Eliminar a "${u}"`,
    `Se borrarán todas sus predicciones y no podrá volver a entrar. Esta acción no se puede deshacer.`,
    'Eliminar','danger',false,'',
    function(){
      api('DELETE',`/api/users/${u}`)
        .then(()=>api('GET','/api/users'))
        .then(users=>{
          dynUsers=users.filter(x=>!USERS.find(y=>y.u===x.username))
            .map(x=>({u:x.username,p:'',admin:x.is_admin,code:x.code}));
          delete picks[u];
          renderUsersTable();renderPremios();renderRanking();
          toast(`Usuario "${u}" eliminado ✓`);
        })
        .catch(e=>toast('Error: '+e.message));
    }
  );
}

function editPin(u){
  openAdmModal(
    `Cambiar PIN de "${u}"`,
    'Nuevo PIN: exactamente 5 caracteres alfanuméricos (letras y números).',
    'Guardar PIN','confirm',true,'',
    function(newPin){
      if(!newPin||newPin.length!==5||!/^[a-zA-Z0-9]{5}$/.test(newPin)){toast('PIN inválido — debe ser exactamente 5 caracteres alfanuméricos');return;}
      api('PATCH',`/api/users/${u}/pin`,{pin:newPin})
        .then(()=>{renderUsersTable();toast(`PIN de "${u}" actualizado ✓`);})
        .catch(e=>toast('Error: '+e.message));
    }
  );
}
function showChangePinModal(){
  closeDrawer();
  document.getElementById('current-pin-input').value='';
  document.getElementById('new-pin-input').value='';
  document.getElementById('change-pin-err').style.display='none';
  document.getElementById('change-pin-modal').style.display='flex';
  setTimeout(()=>document.getElementById('current-pin-input').focus(),100);
}

function saveNewPin(){
  const currentPin=document.getElementById('current-pin-input').value.trim();
  const newPin=document.getElementById('new-pin-input').value.trim();
  const errEl=document.getElementById('change-pin-err');

  if(!currentPin){
    errEl.textContent='Ingresa tu PIN actual.';errEl.style.display='block';return;
  }
  if(!newPin||newPin.length!==5||!/^[a-zA-Z0-9]{5}$/.test(newPin)){
    errEl.textContent='El nuevo PIN debe tener exactamente 5 caracteres alfanuméricos.';errEl.style.display='block';return;
  }
  if(currentPin===newPin){
    errEl.textContent='El nuevo PIN debe ser diferente al actual.';errEl.style.display='block';return;
  }

  // Validate current PIN via login endpoint
  api('POST','/api/login',{username:CU.u, pin:currentPin})
    .then(()=>{
      // Current PIN correct — update to new PIN
      return api('PATCH',`/api/users/${CU.u}/pin`,{pin:newPin});
    })
    .then(()=>{
      document.getElementById('change-pin-modal').style.display='none';
      toast('PIN actualizado ✓');
    })
    .catch(e=>{
      const msg = e.message||'';
      if(msg.includes('401')||msg.includes('incorrecto')||msg.includes('PIN')){
        errEl.textContent='PIN actual incorrecto.';
      } else {
        errEl.textContent='Error al actualizar el PIN.';
      }
      errEl.style.display='block';
    });
}

function markManual(matchId){
  // When admin edits an auto-imported score, remove the auto flag
  if(results.sc?.[matchId]) results.sc[matchId].auto=false;
}

let _savingRes=false;
let _savingBrRes=false;
function saveBrRes(roundKey){
  if(_savingBrRes){toast('Espera, guardando...');return;}
  if(!results.bracket) results.bracket={};
  const n={r32:16,r16:8,qf:4,sf:2,f:1}[roundKey]||0;
  for(let i=0;i<n;i++){
    const mid=`${roundKey}_${i}`;
    const hv=document.getElementById(`br_${mid}_h`)?.value;
    const av=document.getElementById(`br_${mid}_a`)?.value;
    const wv=document.getElementById(`br_${mid}_w`)?.value;
    const th=document.getElementById(`br_${mid}_th`)?.value; // team code
    const ta=document.getElementById(`br_${mid}_ta`)?.value; // team code
    if(wv && th && ta){
      const winner = wv==='__h' ? th : wv==='__a' ? ta : wv;
      results.bracket[mid]={
        teamH: th,
        teamA: ta,
        h: hv!==''?+hv:null,
        a: av!==''?+av:null,
        winner
      };
    }
  }
  _savingBrRes=true;
  const btn=document.querySelector(`[onclick="saveBrRes('${roundKey}')"]`);
  if(btn){btn.disabled=true;btn.textContent='Guardando...';}
  api('POST','/api/results',{data:results})
    .then(()=>{
      renderRanking();
      const rName={r32:'Dieciseisavos',r16:'Octavos',qf:'Cuartos',sf:'Semis',f:'Final'}[roundKey];
      toast(`${rName} guardado ✓`);
      if(btn){btn.classList.add('ok');btn.textContent=`Guardar ${rName}`;btn.disabled=false;setTimeout(()=>btn.classList.remove('ok'),2000);}
    })
    .catch(e=>{
      toast('Error: '+e.message);
      if(btn){btn.textContent=`Guardar`;btn.disabled=false;}
    })
    .finally(()=>{ _savingBrRes=false; });
}

function saveGRes(g){
  if(_savingRes){toast('Espera, guardando...');return;}
  if(!results.sc) results.sc={};
  if(!results.groups) results.groups={};
  GM[g].forEach(m=>{
    const hv=document.getElementById(`rr_${m.id}_h`)?.value;
    const av=document.getElementById(`rr_${m.id}_a`)?.value;
    if(hv!==''&&av!==''){
      const oldR=results.sc[m.id];
      const newH=+hv, newA=+av;
      if(!oldR||oldR.h!==newH||oldR.a!==newA) logChange(m.id,oldR?.h,oldR?.a,newH,newA,false);
      results.sc[m.id]={h:newH,a:newA};
    }
  });
  results.groups[g]=standings(g,results.sc).map(r=>r.team);
  _savingRes=true;
  const btn=document.querySelector(`[onclick="saveGRes('${g}')"]`);
  if(btn){btn.disabled=true;btn.textContent='Guardando...';}
  api('POST','/api/results',{data:results})
    .then(()=>{
      renderRanking();
      toast(`Grupo ${g} guardado ✓`);
      if(btn){btn.classList.add('ok');btn.textContent=`Guardar Grupo ${g}`;btn.disabled=false;setTimeout(()=>btn.classList.remove('ok'),2000);}
      renderChangelog();
    })
    .catch(e=>{
      toast('Error guardando: '+e.message);
      if(btn){btn.textContent=`Guardar Grupo ${g}`;btn.disabled=false;}
    })
    .finally(()=>{ _savingRes=false; });
}

// ══════════════════════════════════════════════════════
//  PRIZES
// ══════════════════════════════════════════════════════
const PRIZE_PCT=[
  {pos:1, label:'1er lugar',  medal:'🥇', pct:40, cls:'p1', pctCls:'c1',  barColor:'var(--gld)'},
  {pos:2, label:'2do lugar',  medal:'🥈', pct:25, cls:'p2', pctCls:'c2',  barColor:'#aaa'},
  {pos:3, label:'3er lugar',  medal:'🥉', pct:15, cls:'p3', pctCls:'c3',  barColor:'#c8875a'},
  {pos:4, label:'4to lugar',  medal:'🏅', pct:10, cls:'p4', pctCls:'c45', barColor:'var(--b2)'},
  {pos:5, label:'5to lugar',  medal:'🏅', pct:5,  cls:'p5', pctCls:'c45', barColor:'var(--b2)'},
  {pos:-1,label:'Último lugar',medal:'🪦', pct:5,  cls:'p6', pctCls:'c45', barColor:'var(--red)'},
];
const PRICE_PER_USER=275; // MXN (de $350 totales, $75 son comisión)
// Sin límite de participantes — la bolsa crece ilimitadamente
const REF_BONUS=500;      // MXN que caen a la cuenta del referidor si su invitado gana el 1er lugar
// Bono referido campeón: $500 MXN financiados por los organizadores
// Esto se financia fuera de la bolsa de premios.

// Finds who referred a given username (returns referrer code or null)
function findReferrerOf(username){
  for(const [code,list] of Object.entries(refs)){
    if(list.includes(username)) return code;
  }
  return null;
}
// Finds username from a referral code
function usernameFromCode(code){
  const u=allUsers().find(x=>(x.code||genCode(x.u))===code);
  return u?u.u:null;
}

function renderPremios(){
  const wrap=document.getElementById('premios-wrap');
  const totalUsers=Math.max(Object.keys(picks).filter(u=>!isAdminUser(u)).length,1);
  const bolsa=totalUsers*PRICE_PER_USER;
  const myCode=CU.code||genCode(CU.u);
  const myRefs=refs[myCode]||[];

  // Detect current ranking leader (for referral bonus preview)
  const hasRealResults=Object.keys(results.groups||{}).length>0;
  let currentWinner=null, currentWinnerReferrer=null, iMayGetBonus=false;
  if(hasRealResults){
    const board=Object.keys(picks).map(u=>({u,total:calcScore(u).total})).sort((a,b)=>b.total-a.total);
    if(board.length){
      currentWinner=board[0].u;
      const refCode=findReferrerOf(currentWinner);
      if(refCode){
        currentWinnerReferrer=usernameFromCode(refCode)||refCode;
        if(refCode===myCode) iMayGetBonus=true;
      }
    }
  }

  const safeMoney = (n)=>`<span class="cur">$</span>${n.toLocaleString('es-MX')}`;

  // ── HERO ──
  let html=`<div class="pp-hero">
    <div class="pp-hero-row">
      <div class="pp-eyebrow"><span class="pp-eyebrow-dot"></span>Premios · Bolsa creciendo</div>
      <div class="pp-bolsa-label">💰 Bolsa total estimada</div>
      <div class="pp-bolsa-amt" id="pp-bolsa-amt"><span class="currency">$</span><span id="pp-bolsa-num">0</span></div>
      <div class="pp-bolsa-sub">MXN en efectivo · ${totalUsers} participante${totalUsers!==1?'s':''} × $${PRICE_PER_USER}</div>
      <div class="pp-pills">
        <div class="pp-pill">⚽ ${totalUsers} jugador${totalUsers!==1?'es':''}</div>
        <div class="pp-pill">📅 Finaliza 19 jul 2026</div>
        <div class="pp-pill">🏆 6 premiados</div>
      </div>
    </div>
  </div>`;

  // ── PRIZE CARDS ──
  const prizeMeta = [
    { rank:'1er<br/>lugar', title:'Campeón',     sub:'Primer lugar' },
    { rank:'2do<br/>lugar', title:'Subcampeón',  sub:'Segundo lugar' },
    { rank:'3er<br/>lugar', title:'Tercero',     sub:'Tercer lugar' },
    { rank:'4to<br/>lugar', title:'Cuarto',      sub:'Cuarto lugar' },
    { rank:'5to<br/>lugar', title:'Quinto',      sub:'Quinto lugar' },
    { rank:'Último<br/>lugar', title:'Cucharón', sub:'Premio consolación' },
  ];

  html += `<div class="pp-section-h">Distribución de premios</div>`;
  html += `<div class="pp-prizes">`;
  PRIZE_PCT.forEach((p, idx)=>{
    const amt=Math.floor(bolsa*p.pct/100);
    const meta = prizeMeta[idx] || { rank:p.label, title:p.label, sub:'' };
    html+=`<div class="pp-card ${p.cls} pp-reveal" style="--pp-i:${idx}">
      <div class="pp-medal">${p.medal}</div>
      <div class="pp-rank">${meta.rank}</div>
      <div class="pp-info">
        <div class="pp-info-title">${meta.title}</div>
        <div class="pp-info-sub">${p.pct}% de la bolsa · ${meta.sub}</div>
      </div>
      <div class="pp-amt-wrap">
        <div class="pp-amt">${safeMoney(amt)}</div>
        <div class="pp-amt-mxn">MXN</div>
      </div>
    </div>`;
  });
  html+=`</div>`;

  // ── REFERRAL BONUS ──
  html += `<div class="pp-section-h">Bono extra por referido</div>`;
  let refAlertHtml = '';
  if(iMayGetBonus && currentWinner){
    refAlertHtml = `<div class="pp-ref-alert live">🏆 ¡<b>${escHtml(currentWinner)}</b> va en 1er lugar y tú lo referiste! Si gana, cobras $${REF_BONUS} MXN.</div>`;
  } else if(hasRealResults && currentWinner && currentWinnerReferrer && !iMayGetBonus){
    refAlertHtml = `<div class="pp-ref-alert info">Líder actual: <b>${escHtml(currentWinner)}</b>${currentWinnerReferrer?` · referido por <b>${escHtml(currentWinnerReferrer)}</b>`:''}</div>`;
  } else if(!hasRealResults){
    refAlertHtml = `<div class="pp-ref-alert muted">El bono se activa cuando el admin registre los primeros resultados.</div>`;
  }

  html += `<div class="pp-ref-bonus">
    <div class="pp-ref-row">
      <div class="pp-ref-icon">🎁</div>
      <div class="pp-ref-meta">
        <div class="pp-ref-eyebrow">Fuera de la bolsa de premios</div>
        <div class="pp-ref-h">Referido campeón</div>
        <div class="pp-ref-sub">Si alguien que tú invitaste gana el <b>1er lugar</b>, caen <b>$${REF_BONUS} MXN a tu cuenta</b> — financiados por los organizadores.</div>
        <div class="pp-ref-amt">
          <span class="pp-ref-amt-lbl">Bono</span>
          <span class="pp-ref-amt-num">$${REF_BONUS}</span>
          <span class="pp-ref-amt-lbl">MXN</span>
        </div>
        ${refAlertHtml}
      </div>
    </div>
  </div>`;

  // ── MY REFERRAL CODE ──
  html += `<div class="pp-section-h">Tu código de referido</div>`;
  html += `<div class="pp-code">
    <div class="pp-code-l">
      <div class="label">Código único</div>
      <div class="code">${escHtml(myCode)}</div>
    </div>
    <div class="pp-code-r">
      <div class="pp-refs-count">${myRefs.length} referido${myRefs.length!==1?'s':''}</div>
      <button class="pp-copy-btn" onclick="copyMyCode()">📋 Copiar</button>
    </div>
  </div>`;

  if(CU.admin){
    // Admin: full referral table with bonus status
    const refRows=allUsers().map(u=>({
      u:u.u, code:u.code||genCode(u.u),
      count:(refs[u.code||genCode(u.u)]||[]).length,
      referred:refs[u.code||genCode(u.u)]||[]
    })).sort((a,b)=>b.count-a.count);

    html+=`<div style="background:var(--surface);border:1px solid var(--border);border-radius:14px;padding:14px 16px;margin-top:10px;overflow-x:auto">
      <table class="ref-table">
        <thead><tr><th>Usuario</th><th>Código</th><th>Referidos</th><th>Bono activo</th><th>Quiénes</th></tr></thead>
        <tbody>`;
    refRows.forEach(r=>{
      const bonusActive=currentWinner&&r.referred.includes(currentWinner)&&hasRealResults;
      html+=`<tr>
        <td style="font-weight:600">${escHtml(r.u)}</td>
        <td><span class="ref-code">${escHtml(r.code)}</span></td>
        <td><span class="ref-count">${r.count}</span></td>
        <td>${bonusActive
          ?`<span class="pill pg">🏆 $${REF_BONUS} activo</span>`
          :`<span style="color:var(--ink3);font-size:.75rem">—</span>`}</td>
        <td style="font-size:.75rem;color:var(--ink3)">${r.referred.map(escHtml).join(', ')||'—'}</td>
      </tr>`;
    });
    html+=`</tbody></table></div>`;
  } else {
    if(myRefs.length>0){
      const winningRef=currentWinner&&myRefs.includes(currentWinner)&&hasRealResults;
      html+=`<div class="pp-myrefs">
        <div class="pp-myrefs-title">Tus referidos (${myRefs.length}):</div>
        <div class="pp-myrefs-list">`;
      myRefs.forEach(r=>{
        const isLeading=currentWinner===r&&hasRealResults;
        html+=`<span class="pill ${isLeading?'pg':'pnk'}">${isLeading?'🏆 ':''}<b>${escHtml(r)}</b>${isLeading?' · ¡va ganando!':''}</span>`;
      });
      html+=`</div>`;
      if(winningRef) html+=`<div style="margin-top:10px;background:var(--g-bg);border:1.5px solid var(--g2);border-radius:10px;padding:10px 14px;font-size:.8rem;color:var(--g);font-weight:600">
        🎁 <b>${escHtml(currentWinner)}</b> va en primer lugar — si gana el torneo, cobras $${REF_BONUS} MXN de bono.
      </div>`;
      html+=`</div>`;
    } else {
      html+=`<div style="font-size:.78rem;color:var(--ink3);margin-top:.5rem;font-style:italic;padding:0 4px">
        Aún no has referido a nadie — ¡comparte tu código y gana el bono si tu invitado resulta campeón!
      </div>`;
    }
  }

  wrap.innerHTML=html;

  // Animar bolsa con count-up formateado
  const numEl = document.getElementById('pp-bolsa-num');
  if(numEl){
    const target = bolsa;
    const dur = 1100;
    const start = performance.now();
    function tick(now){
      const t = Math.min(1, (now - start) / dur);
      const e = 1 - Math.pow(1 - t, 3);
      const v = Math.round(target * e);
      numEl.textContent = v.toLocaleString('es-MX');
      if(t < 1) requestAnimationFrame(tick);
      else numEl.textContent = target.toLocaleString('es-MX');
    }
    if(target === 0){ numEl.textContent = '0'; }
    else requestAnimationFrame(tick);
  }

  // Reveal on-scroll
  observePrizeCards();
}

let _ppCardObserver = null;
function observePrizeCards(){
  if(_ppCardObserver) _ppCardObserver.disconnect();
  const cards = document.querySelectorAll('#premios-wrap .pp-card.pp-reveal');
  if(!cards.length) return;
  if(!('IntersectionObserver' in window)){
    cards.forEach(c=>c.classList.add('show'));
    return;
  }
  _ppCardObserver = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('show');
        _ppCardObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.06, rootMargin: '0px 0px -5% 0px' });
  cards.forEach(c=>{
    const rect = c.getBoundingClientRect();
    if(rect.top < window.innerHeight * 0.95) c.classList.add('show');
    else _ppCardObserver.observe(c);
  });
}

function copyMyCode(){
  const code=CU.code||genCode(CU.u);
  const txt=`¡Únete a la quiniela del Mundial 2026! Usa mi código ${code} al registrarte 🌍⚽`;
  navigator.clipboard?.writeText(txt).then(()=>toast(`Código ${code} copiado ✓`)).catch(()=>toast(`Tu código: ${code}`));
}

// ══════════════════════════════════════════════════════
//  REGLAS
// ══════════════════════════════════════════════════════
function renderReglas(){
  const w=document.getElementById('reglas-wrap');
  const totalUsers=Math.max(Object.keys(picks).filter(u=>!isAdminUser(u)).length,1);
  const bolsa=totalUsers*PRICE_PER_USER;

  const sections=[
    {
      id:'como',tag:'general',icon:'⚽',iconBg:'linear-gradient(135deg,#006838,#009650)',
      title:'¿Cómo se juega?',
      sub:'Reglas básicas y formato del torneo',
      content:`
        <div class="rules-chips">
          <div class="rules-chip"><span class="rules-chip-icon">👥</span> 2 fases: Grupos + Eliminatoria</div>
          <div class="rules-chip"><span class="rules-chip-icon">📅</span> Cierre: 11 jun 2026</div>
          <div class="rules-chip"><span class="rules-chip-icon">⚽</span> 48 equipos · 12 grupos</div>
        </div>
        <p><b>Fase de Grupos:</b> Predice el marcador exacto de cada partido. La app calcula automáticamente la tabla de posiciones usando reglas FIFA (victoria = 3 pts, empate = 1 pt, derrota = 0). Los dos primeros de cada grupo y los 8 mejores terceros avanzan al bracket.</p>
        <p><b>Fase Eliminatoria:</b> Completa el bracket desde Dieciseisavos hasta la Final. El marcador a 90 minutos es obligatorio. Si predices empate, elige quién avanza. Si no aciertas al que pasa, no ganas ningún punto.</p>
        <p><b>Fecha límite:</b> Todas las predicciones deben estar guardadas antes del pitazo inicial — <b>11 de junio de 2026</b>. No se aceptan cambios después.</p>
      `
    },
    {
      id:'puntos',tag:'puntos',icon:'🏆',iconBg:'linear-gradient(135deg,#9a6500,#e8a020)',
      title:'Sistema de puntos',
      sub:'Cómo se calculan los puntos en cada fase',
      content:`
        <p>Los puntos se acumulan en ambas fases del torneo.</p>
        <div class="rules-phase-h"><span class="ico">⚽</span>Fase de Grupos</div>
        <table class="rules-pts-table">
          <thead><tr><th>Condición</th><th>Puntos</th></tr></thead>
          <tbody>
            <tr><td class="pt-round">Aciertas el resultado (G/E/P)</td><td><span class="pt-win">+1</span></td></tr>
            <tr><td class="pt-round">Bonus marcador exacto</td><td><span class="pt-exact">+2</span></td></tr>
            <tr><td style="color:var(--ink3)">Máximo por partido</td><td><span class="pt-max">+3</span></td></tr>
          </tbody>
        </table>
        <div class="rules-phase-h"><span class="ico">🔀</span>Fase Eliminatoria</div>
        <table class="rules-pts-table">
          <thead><tr><th>Ronda</th><th>Ganador</th><th>+ Exacto</th><th>Máx</th></tr></thead>
          <tbody>
            <tr><td class="pt-round">Dieciseisavos</td><td><span class="pt-win">+2</span></td><td><span class="pt-exact">+4</span></td><td><span class="pt-max">+6</span></td></tr>
            <tr><td class="pt-round">Octavos</td><td><span class="pt-win">+3</span></td><td><span class="pt-exact">+6</span></td><td><span class="pt-max">+9</span></td></tr>
            <tr><td class="pt-round">Cuartos</td><td><span class="pt-win">+5</span></td><td><span class="pt-exact">+10</span></td><td><span class="pt-max">+15</span></td></tr>
            <tr><td class="pt-round">Semis</td><td><span class="pt-win">+7</span></td><td><span class="pt-exact">+14</span></td><td><span class="pt-max">+21</span></td></tr>
            <tr><td class="pt-round">Final</td><td><span class="pt-win">+10</span></td><td><span class="pt-exact">+20</span></td><td><span class="pt-max">+30</span></td></tr>
          </tbody>
        </table>
        <div class="rules-note warn">⚠️ En eliminatoria, si no aciertas al que avanza no ganas ningún punto — ni por marcador ni por ganador.</div>
      `
    },
    {
      id:'bracket',tag:'bracket',icon:'🔀',iconBg:'linear-gradient(135deg,#003087,#3d87ff)',
      title:'¿Cómo funciona el bracket?',
      sub:'Clasificación a octavos y cruces',
      content:`
        <div class="rules-chips">
          <div class="rules-chip"><span class="rules-chip-icon">🏟</span> 48 equipos · 12 grupos</div>
          <div class="rules-chip"><span class="rules-chip-icon">✅</span> Clasifican: 1° y 2° de cada grupo</div>
          <div class="rules-chip"><span class="rules-chip-icon">⭐</span> + 8 mejores terceros lugares</div>
        </div>
        <p><b>¿Cómo se eligen los 8 mejores terceros?</b> Se ordenan según: puntos → diferencia de goles → goles a favor → Fair Play. Los 8 mejores pasan.</p>
        <p><b>Dieciseisavos:</b> Los cruces siguen el calendario oficial FIFA del 27 de marzo de 2026, preasignados según qué grupos clasificaron terceros. Ningún equipo enfrenta a alguien de su mismo grupo.</p>
        <p><b>A partir de Octavos:</b> Bracket lineal — el ganador avanza al siguiente partido en el orden establecido.</p>
        <p><b>Marcador exacto:</b> Corresponde a los 90 minutos. Si predices empate, debes indicar quién avanza (puede ser por tiempo extra o penales).</p>
      `
    },
    {
      id:'premios',tag:'premios',icon:'💰',iconBg:'linear-gradient(135deg,#c0001a,#ff3355)',
      title:'Premios',
      sub:'Distribución de la bolsa',
      content:`
        <div class="rules-prizebox">
          <div class="rules-prizebox-l">
            <div class="rules-prizebox-lbl">Bolsa estimada</div>
            <div class="rules-prizebox-amt">$${bolsa.toLocaleString('es-MX')}</div>
            <div class="rules-prizebox-sub">MXN · ${totalUsers} participante${totalUsers!==1?'s':''} × $${PRICE_PER_USER}</div>
          </div>
          <div class="rules-prizebox-icon">💰</div>
        </div>
        <table class="rules-pts-table">
          <thead><tr><th>Posición</th><th>%</th><th>~Monto</th></tr></thead>
          <tbody>
            <tr><td class="pt-round">🥇 1er lugar</td><td><span class="pt-exact">40%</span></td><td><span class="pt-max">$${Math.floor(bolsa*.40).toLocaleString('es-MX')}</span></td></tr>
            <tr><td class="pt-round">🥈 2do lugar</td><td><span class="pt-exact">25%</span></td><td><span class="pt-max">$${Math.floor(bolsa*.25).toLocaleString('es-MX')}</span></td></tr>
            <tr><td class="pt-round">🥉 3er lugar</td><td><span class="pt-exact">15%</span></td><td><span class="pt-max">$${Math.floor(bolsa*.15).toLocaleString('es-MX')}</span></td></tr>
            <tr><td class="pt-round">⚽ 4to lugar</td><td><span class="pt-win">10%</span></td><td><span class="pt-max">$${Math.floor(bolsa*.10).toLocaleString('es-MX')}</span></td></tr>
            <tr><td class="pt-round">⚽ 5to lugar</td><td><span class="pt-win">5%</span></td><td><span class="pt-max">$${Math.floor(bolsa*.05).toLocaleString('es-MX')}</span></td></tr>
            <tr><td class="pt-round">🥄 Último lugar</td><td><span class="pt-exact" style="background:var(--r-bg);color:var(--r)">5%</span></td><td><span class="pt-max">$${Math.floor(bolsa*.05).toLocaleString('es-MX')}</span></td></tr>
          </tbody>
        </table>
        <div class="rules-note warn">⚠️ Para el premio de último lugar, el bracket debe estar <b>completamente lleno</b>. Sin bracket completo, el 5% pasa al siguiente de atrás que sí lo tenga.</div>
        <div class="rules-note">Los montos crecen conforme se registran más participantes.</div>
      `
    },
    {
      id:'referidos',tag:'general',icon:'🔗',iconBg:'linear-gradient(135deg,#006838,#0052cc)',
      title:'Referidos y bono especial',
      sub:'Bono de $500 si tu invitado gana',
      content:`
        <div class="rules-bonus">
          <div class="rules-bonus-icon">🎁</div>
          <div class="rules-bonus-meta">
            <div class="rules-bonus-h">Bono por referido campeón: $500 MXN</div>
            <div class="rules-bonus-s">Si uno de tus referidos termina en 1er lugar, recibes $500 MXN directamente — financiados por los organizadores, fuera de la bolsa.</div>
          </div>
        </div>
        <p>Cada participante tiene un <b>código único de 3 letras</b> visible en el menú lateral y en Premios. Al compartirlo, quien se registre con tu código queda vinculado como tu referido.</p>
        <p>El bono se activa automáticamente al cierre del torneo y se muestra en tiempo real en la pestaña de Premios.</p>
      `
    },
    {
      id:'desempates',tag:'reglas',icon:'⚖️',iconBg:'linear-gradient(135deg,#444,#666)',
      title:'Desempates y casos especiales',
      sub:'Qué pasa cuando hay empates o errores',
      content:`
        <p><b>Empate en el ranking:</b> Si dos participantes terminan con el mismo puntaje, el desempate es:</p>
        <div class="rules-timeline">
          ${['Mayor cantidad de marcadores exactos en eliminatoria','Mayor puntaje en fase de grupos','Mayor puntaje en rondas avanzadas (Final > Semis > …)','Si persiste, el premio se divide en partes iguales'].map((t,i)=>`
            <div class="rules-tl-item">
              <div class="rules-tl-num">${i+1}</div>
              <div class="rules-tl-content">
                <div class="rules-tl-val">${t}</div>
              </div>
            </div>`).join('')}
        </div>
        <p style="margin-top:10px"><b>Partidos no predichos:</b> 0 puntos en ese partido. No hay predicciones parciales.</p>
        <p><b>Errores en resultados:</b> Si el admin corrige un resultado, los puntos se recalculan automáticamente.</p>
      `
    },
    {
      id:'fechas',tag:'general',icon:'📅',iconBg:'linear-gradient(135deg,#c0001a,#9a6500)',
      title:'Fechas clave',
      sub:'Cierre, inicio y pago de premios',
      content:`
        <div class="rules-timeline">
          ${[
            {dot:'#00c46a',label:'Disponible ahora',val:'Predicciones abiertas ✓'},
            {dot:'#e8a020',label:'Cierre de predicciones',val:'11 de junio de 2026 · antes del partido 1'},
            {dot:'#3d87ff',label:'Inicio del torneo',val:'11 de junio de 2026 · México vs Sudáfrica'},
            {dot:'#ff3355',label:'Final del torneo',val:'19 de julio de 2026'},
            {dot:'#9a6500',label:'Pago de premios',val:'Máximo 7 días después de la Final'},
          ].map(d=>`<div class="rules-tl-item">
            <div class="rules-tl-dot" style="background:${d.dot};margin-top:6px"></div>
            <div class="rules-tl-content">
              <div class="rules-tl-label">${d.label}</div>
              <div class="rules-tl-val">${d.val}</div>
            </div>
          </div>`).join('')}
        </div>
      `
    },
  ];

  const filters=[
    {key:'all',label:'Todas'},
    {key:'general',label:'⚽ General'},
    {key:'puntos',label:'🏆 Puntos'},
    {key:'bracket',label:'🔀 Bracket'},
    {key:'premios',label:'💰 Premios'},
    {key:'reglas',label:'⚖️ Reglas'},
  ];

  // Persistir estado entre re-renders en variable local cerrada
  if(!window._rulesState){
    window._rulesState = {
      filter: 'all',
      open: new Set(['como','puntos'])
    };
  }
  const state = window._rulesState;

  function doRender(){
    const visible = sections.filter(s => state.filter==='all' || s.tag===state.filter);
    w.innerHTML = `
      <div class="rules-filter-bar">
        ${filters.map(f=>`<button class="rules-ftab${state.filter===f.key?' on':''}" onclick="setRulesFilter('${f.key}')">${f.label}</button>`).join('')}
      </div>
      ${visible.map((s, idx)=>`
        <div class="rules-section rg-reveal${state.open.has(s.id)?' open':''}" id="rs-${s.id}" style="--rg-i:${Math.min(idx,8)}">
          <div class="rules-section-hd" onclick="toggleRulesSection('${s.id}')">
            <div class="rules-icon-wrap" style="background:${s.iconBg}">${s.icon}</div>
            <div class="rules-section-meta">
              <div class="rules-section-title">${s.title}</div>
              <div class="rules-section-sub">${s.sub||''}</div>
            </div>
            <div class="rules-section-chevron">▼</div>
          </div>
          <div class="rules-body">${s.content}</div>
        </div>`).join('')}
    `;
    observeRulesSections();
  }

  window.setRulesFilter=function(f){ state.filter=f; doRender(); };
  window.toggleRulesSection=function(id){
    if(state.open.has(id)) state.open.delete(id);
    else state.open.add(id);
    doRender();
  };

  doRender();
}

let _rulesObserver = null;
function observeRulesSections(){
  if(_rulesObserver) _rulesObserver.disconnect();
  const cards = document.querySelectorAll('#reglas-wrap .rules-section.rg-reveal');
  if(!cards.length) return;
  if(!('IntersectionObserver' in window)){
    cards.forEach(c=>c.classList.add('show'));
    return;
  }
  _rulesObserver = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('show');
        _rulesObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.06, rootMargin: '0px 0px -3% 0px' });
  cards.forEach(c=>{
    const rect = c.getBoundingClientRect();
    if(rect.top < window.innerHeight * 0.95) c.classList.add('show');
    else _rulesObserver.observe(c);
  });
}

// ══════════════════════════════════════════════════════
//  LIVE SCORES (football-data.org — plan gratuito)
//  API key es pública/demo; en producción usar clave propia
// ══════════════════════════════════════════════════════
const FDORG_KEY=''; // dejar vacío usa modo simulado; poner tu key aquí
let liveAutoInterval=null;
let liveLastUpdate=null;
let liveEnabled=false;

// Map our internal team codes to football-data.org TLA codes
const FD_TLA={
  MEX:'MEX',RSA:'RSA',KOR:'KOR',CZE:'CZE',
  CAN:'CAN',BIH:'BIH',QAT:'QAT',SUI:'SUI',
  BRA:'BRA',MAR:'MAR',HAI:'HAI',SCO:'SCO',
  USA:'USA',PAR:'PAR',AUS:'AUS',TUR:'TUR',
  GER:'GER',CUW:'CUW',CIV:'CIV',ECU:'ECU',
  NED:'NED',JPN:'JPN',SWE:'SWE',TUN:'TUN',
  BEL:'BEL',EGY:'EGY',IRN:'IRN',NZL:'NZL',
  ESP:'ESP',CPV:'CPV',KSA:'KSA',URU:'URU',
  FRA:'FRA',SEN:'SEN',IRQ:'IRQ',NOR:'NOR',
  ARG:'ARG',ALG:'ALG',AUT:'AUT',JOR:'JOR',
  POR:'POR',COD:'COD',UZB:'UZB',COL:'COL',
  ENG:'ENG',CRO:'CRO',GHA:'GHA',PAN:'PAN',
};
const TLA_TO_INTERNAL=Object.fromEntries(Object.entries(FD_TLA).map(([k,v])=>[v,k]));

async function fetchLiveScores(){
  // football-data.org free tier: /v4/competitions/2000/matches (FIFA WC 2026)
  // If no API key configured, fall back to demo simulation
  if(!FDORG_KEY){
    simulateLiveUpdate();
    return;
  }
  try{
    const res=await fetch('https://api.football-data.org/v4/competitions/2000/matches?status=FINISHED',{
      headers:{'X-Auth-Token':FDORG_KEY}
    });
    if(!res.ok) throw new Error(`HTTP ${res.status}`);
    const data=await res.json();
    let updated=0;
    (data.matches||[]).forEach(m=>{
      const ht=TLA_TO_INTERNAL[m.homeTeam?.tla];
      const at=TLA_TO_INTERNAL[m.awayTeam?.tla];
      const hg=m.score?.fullTime?.home;
      const ag=m.score?.fullTime?.away;
      if(!ht||!at||hg==null||ag==null) return;
      // Find matching group match
      const found=findGroupMatch(ht,at);
      if(found&&(results.sc?.[found.id]?.h!==hg||results.sc?.[found.id]?.a!==ag)){
        if(!results.sc) results.sc={};
        results.sc[found.id]={h:hg,a:ag,auto:true};
        if(!results.groups) results.groups={};
        results.groups[found.g]=standings(found.g,results.sc).map(r=>r.team);
        updated++;
      }
    });
    if(updated>0){
      api('POST','/api/results',{data:results}).catch(e=>console.error('Error guardando resultados live:',e));
      renderRanking();renderAdmin();
    }
    liveLastUpdate=new Date();
    updateLiveBar(true,updated);
  }catch(e){
    console.warn('Live scores error:',e);
    updateLiveBar(false,0,e.message);
  }
}

function findGroupMatch(h,a){
  for(const [g,ms] of Object.entries(GM)){
    const m=ms.find(x=>(x.h===h&&x.a===a)||(x.h===a&&x.a===h));
    if(m) return{...m,g,swapped:m.h!==h};
  }
  return null;
}

function simulateLiveUpdate(){
  // Demo: auto-fill a random match result to show the feature working
  const allMs=Object.entries(GM).flatMap(([g,ms])=>ms.map(m=>({...m,g})));
  const unfilled=allMs.filter(m=>!results.sc?.[m.id]);
  if(!unfilled.length){updateLiveBar(true,0);return;}
  const pick=unfilled[Math.floor(Math.random()*Math.min(3,unfilled.length))];
  const hg=Math.floor(Math.random()*4),ag=Math.floor(Math.random()*4);
  if(!results.sc) results.sc={};
  results.sc[pick.id]={h:hg,a:ag,auto:true};
  if(!results.groups) results.groups={};
  results.groups[pick.g]=standings(pick.g,results.sc).map(r=>r.team);
  api('POST','/api/results',{data:results}).catch(e=>console.error(e));
  renderRanking();renderAdmin();
  liveLastUpdate=new Date();
  updateLiveBar(true,1);
}

function updateLiveBar(ok,count,errMsg){
  const dot=document.getElementById('live-dot');
  const status=document.getElementById('live-status-txt');
  const last=document.getElementById('live-last-txt');
  if(!dot) return;
  dot.className='live-dot'+(liveEnabled?' on':'');
  status.textContent=liveEnabled?(ok?'Sincronización activa':'Error de conexión'):'Sincronización pausada';
  last.textContent=liveLastUpdate
    ?`Última actualización: ${liveLastUpdate.toLocaleTimeString('es-MX',{hour:'2-digit',minute:'2-digit'})}${count>0?` · ${count} resultado${count!==1?'s':''} nuevos`:''}`
    :(errMsg?`Error: ${errMsg}`:'Sin actualizar aún');
}

function toggleLive(){
  liveEnabled=!liveEnabled;
  if(liveEnabled){
    fetchLiveScores();
    liveAutoInterval=setInterval(fetchLiveScores,60000); // cada 60s
  }else{
    clearInterval(liveAutoInterval);
  }
  updateLiveBar(true,0);
  renderAdmin();
}

function manualRefresh(){
  fetchLiveScores();
  toast('Actualizando resultados...');
}

// ══════════════════════════════════════════════════════
//  CHAT
// ══════════════════════════════════════════════════════
let chatMsgs = [];

function loadChat(){
  // Chat now comes from API — called in renderChat
}
function saveChat(){ /* no-op — API handles persistence */ }

// Convert server reaction format [{emoji,count,users}] to {emoji:{count,users}}
function normalizeReactions(reactions){
  if(!reactions) return {};
  if(Array.isArray(reactions)){
    const map = {};
    reactions.forEach(r=>{ map[r.emoji] = { count: r.count, users: r.users||[] }; });
    return map;
  }
  return reactions; // already object format
}

const WALL_EMOJIS = ['⚽','🔥','😂','😬','👏','💀','🐐','❤️','👍','😔'];
let _wallPosts = [];
let _openComments = {}; // postId -> bool

// ── SISTEMA DE MENCIONES ──

// Devuelve la lista de usernames válidos (aprobados) para autocompletar
function getMentionableUsers(){
  const out = new Set();
  // Usuarios hardcoded
  if(typeof USERS !== 'undefined' && Array.isArray(USERS)){
    USERS.forEach(u => { if(u && u.u) out.add(u.u); });
  }
  // Usuarios dinámicos
  if(typeof dynUsers !== 'undefined' && Array.isArray(dynUsers)){
    dynUsers.forEach(u => {
      const name = u?.u || u?.username;
      if(name) out.add(name);
    });
  }
  // Excluir admin de las menciones (cuenta de sistema)
  out.delete('admin');
  return Array.from(out).sort((a,b)=>a.localeCompare(b,'es'));
}

// Reemplaza @username con un span clickeable. El texto entrante NO debe estar escapado todavía.
function parseWithMentions(text){
  if(!text) return '';
  const validUsers = new Set(getMentionableUsers().map(u => u.toLowerCase()));
  // Primero escapamos todo el texto para seguridad
  const escaped = escHtml(text);
  // Luego buscamos @username en el texto YA escapado (los nombres son alfanuméricos así que no interfiere)
  // username puede tener letras, números, _, ., - (típico de usernames)
  return escaped.replace(/@([a-zA-Z0-9_.\-]{2,30})/g, (match, uname) => {
    if(validUsers.has(uname.toLowerCase())){
      const safeUname = uname.replace(/'/g, "\\'");
      return `<a class="wall-mention" onclick="openProfile('${safeUname}');event.stopPropagation()">@${escHtml(uname)}</a>`;
    }
    return match;
  });
}

// Extrae los usernames mencionados en un texto (devuelve set en lowercase)
function extractMentions(text){
  if(!text) return new Set();
  const validUsers = new Set(getMentionableUsers().map(u => u.toLowerCase()));
  const mentioned = new Set();
  const re = /@([a-zA-Z0-9_.\-]{2,30})/g;
  let m;
  while((m = re.exec(text)) !== null){
    const lower = m[1].toLowerCase();
    if(validUsers.has(lower)) mentioned.add(lower);
  }
  return mentioned;
}

// Estado del picker
let _mentionPicker = { el:null, target:null, items:[], activeIdx:0, query:'', startPos:0 };

function closeMentionPicker(){
  if(_mentionPicker.el){ _mentionPicker.el.remove(); _mentionPicker.el = null; }
  _mentionPicker.target = null;
}

function attachMentionPicker(textEl){
  if(!textEl || textEl.dataset.mentionAttached === '1') return;
  textEl.dataset.mentionAttached = '1';

  textEl.addEventListener('input', ()=>handleMentionInput(textEl));
  textEl.addEventListener('keydown', (e)=>handleMentionKeydown(e, textEl));
  textEl.addEventListener('blur', ()=>{
    // Cerrar después de pequeño delay para permitir click en items
    setTimeout(()=>{ if(_mentionPicker.target === textEl) closeMentionPicker(); }, 180);
  });
}

function handleMentionInput(textEl){
  const val = textEl.value;
  const caret = textEl.selectionStart;
  // Buscar el @ más cercano hacia atrás desde el caret, sin que haya espacios entre @ y caret
  let i = caret - 1;
  let foundAt = -1;
  while(i >= 0){
    const ch = val[i];
    if(ch === '@'){
      // Verificar que sea inicio de string o haya espacio/newline antes
      if(i === 0 || /\s/.test(val[i-1])) foundAt = i;
      break;
    }
    if(/\s/.test(ch)) break;
    if(!/[a-zA-Z0-9_.\-]/.test(ch)) break;
    i--;
  }
  if(foundAt < 0){ closeMentionPicker(); return; }
  const query = val.slice(foundAt + 1, caret);
  if(query.length > 30){ closeMentionPicker(); return; }
  showMentionPicker(textEl, foundAt, query);
}

function showMentionPicker(textEl, startPos, query){
  const all = getMentionableUsers().filter(u => u !== CU.u);
  const q = query.toLowerCase();
  const items = q ? all.filter(u => u.toLowerCase().includes(q)).slice(0, 6) : all.slice(0, 6);

  closeMentionPicker();

  const picker = document.createElement('div');
  picker.className = 'wall-mention-picker';

  if(!items.length){
    picker.innerHTML = `<div class="wall-mention-empty">Sin coincidencias</div>`;
  } else {
    picker.innerHTML = items.map((u, idx) => {
      const initials = u.slice(0,2).toUpperCase();
      return `<div class="wall-mention-item${idx===0?' active':''}" data-idx="${idx}" data-user="${escHtml(u)}">
        <div class="wall-mention-av">${initials}</div>
        <div class="wall-mention-name">${escHtml(u)}</div>
      </div>`;
    }).join('');
  }

  // Insertar después del textarea, en su contenedor
  const parent = textEl.parentNode;
  parent.appendChild(picker);
  // Posicionar absolutamente
  const tRect = textEl.getBoundingClientRect();
  const pRect = parent.getBoundingClientRect();
  picker.style.position = 'absolute';
  picker.style.left = (tRect.left - pRect.left) + 'px';
  picker.style.top  = (tRect.bottom - pRect.top + 4) + 'px';

  // Click handler en items
  picker.querySelectorAll('.wall-mention-item').forEach(itm=>{
    itm.addEventListener('mousedown', (e)=>{
      e.preventDefault();
      const u = itm.dataset.user;
      insertMention(textEl, startPos, u);
    });
  });

  _mentionPicker = { el: picker, target: textEl, items, activeIdx: 0, query, startPos };
}

function handleMentionKeydown(e, textEl){
  if(_mentionPicker.target !== textEl || !_mentionPicker.el) return;
  const items = _mentionPicker.items;
  if(!items.length) return;

  if(e.key === 'ArrowDown'){
    e.preventDefault();
    _mentionPicker.activeIdx = (_mentionPicker.activeIdx + 1) % items.length;
    updateMentionActive();
  } else if(e.key === 'ArrowUp'){
    e.preventDefault();
    _mentionPicker.activeIdx = (_mentionPicker.activeIdx - 1 + items.length) % items.length;
    updateMentionActive();
  } else if(e.key === 'Enter' || e.key === 'Tab'){
    e.preventDefault();
    insertMention(textEl, _mentionPicker.startPos, items[_mentionPicker.activeIdx]);
  } else if(e.key === 'Escape'){
    e.preventDefault();
    closeMentionPicker();
  }
}

function updateMentionActive(){
  if(!_mentionPicker.el) return;
  _mentionPicker.el.querySelectorAll('.wall-mention-item').forEach((el, i)=>{
    el.classList.toggle('active', i === _mentionPicker.activeIdx);
  });
}

function insertMention(textEl, startPos, username){
  const val = textEl.value;
  const caret = textEl.selectionStart;
  const before = val.slice(0, startPos);
  const after = val.slice(caret);
  const insert = `@${username} `;
  textEl.value = before + insert + after;
  const newCaret = startPos + insert.length;
  textEl.selectionStart = textEl.selectionEnd = newCaret;
  closeMentionPicker();
  // Trigger input para que se actualice el contador, etc.
  textEl.dispatchEvent(new Event('input', { bubbles: true }));
  textEl.focus();
}

function renderChat(){
  const wrap = document.getElementById('wall-wrap');
  if(!wrap) return;

  const buildBody = (posts, opts)=>{
    const muted = opts?.muted || false;
    const strikes = opts?.strikes || 0;

    _wallPosts = posts.map(p=>({...p, reactions: normalizeReactions(p.reactions)}));

    // Stats del hero
    const totalPosts = posts.length;
    const totalReactions = posts.reduce((sum,p)=>{
      const norm = normalizeReactions(p.reactions);
      return sum + Object.values(norm).reduce((s,r)=>s+(r?.count||0),0);
    }, 0);
    const ePosts = document.getElementById('wp-stat-posts');
    const eReact = document.getElementById('wp-stat-reactions');
    const eEye = document.getElementById('wp-eyebrow-txt');
    const eStk = document.getElementById('wp-sticky-stat');
    if(ePosts) ePosts.textContent = String(totalPosts);
    if(eReact) eReact.textContent = String(totalReactions);
    if(eEye) eEye.textContent = `En vivo · ${totalPosts} publicación${totalPosts!==1?'es':''}`;
    if(eStk) eStk.textContent = `${totalPosts} publicación${totalPosts!==1?'es':''}`;

    // Detectar nuevas menciones para notificaciones
    if(typeof refreshNotifications === 'function'){
      try { refreshNotifications(); } catch(e){}
    }

    let html = '';

    // Disclaimer (sutil)
    html += `<div class="wall-disclaimer">🤝 <strong>Sé respetuoso</strong> — 2 eliminaciones y pierdes acceso al muro</div>`;

    // Strike warning
    if(strikes === 1 && !muted){
      html += `<div style="background:var(--gld-bg);border:1.5px solid var(--gld);border-radius:14px;padding:10px 14px;font-size:.78rem;color:var(--gld);font-weight:600;margin-bottom:12px">
        ⚠️ Tienes 1 aviso — si el admin elimina otro de tus posts o comentarios, perderás acceso al muro.
      </div>`;
    }

    // Muted banner
    if(muted){
      html += `<div class="wall-muted-banner" style="text-align:center">🚫 Tu acceso al muro ha sido desactivado por el administrador.</div>`;
    }

    // Compose box
    if(!muted){
      const meInitials = CU.u.slice(0,2).toUpperCase();
      html += `<div class="wall-compose">
        <div class="wall-compose-top">
          <div style="width:36px;height:36px;border-radius:50%;background:var(--grad-tri);color:#fff;font-weight:800;font-size:.78rem;display:flex;align-items:center;justify-content:center;flex-shrink:0">${meInitials}</div>
          <textarea id="wall-input" placeholder="¿Qué está pasando en tu quiniela? Escribe @ para etiquetar ⚽" maxlength="500" rows="2"
            oninput="document.getElementById('wall-input-count').textContent=this.value.length+'/500'"
            onkeydown="if(event.ctrlKey&&event.key==='Enter')submitWallPost()"></textarea>
        </div>
        <div class="wall-compose-footer">
          <span class="wall-char-count" id="wall-input-count">0/500</span>
          <button class="wall-post-btn" onclick="submitWallPost()">Publicar ⚽</button>
        </div>
      </div>`;
    }

    // Section header
    if(posts.length){
      html += `<div class="wall-section-h">Recientes</div>`;
    }

    if(!posts.length){
      html += `<div style="text-align:center;padding:3rem 1.5rem;background:var(--surface);border:1px dashed var(--border);border-radius:18px;display:flex;flex-direction:column;align-items:center;gap:.6rem">
        <div style="font-size:3rem">⚽</div>
        <div style="font-weight:800;font-size:.95rem;color:var(--ink)">Sé el primero en publicar algo</div>
        <div style="font-size:.82rem;color:var(--ink3);max-width:300px;line-height:1.5">Comparte cómo va tu quiniela, comenta los partidos del Mundial.</div>
      </div>`;
    } else {
      html += posts.map((p, idx)=>renderPost(p, idx)).join('');
    }

    wrap.innerHTML = html;

    // Attach mention picker al compose
    const composeInput = document.getElementById('wall-input');
    if(composeInput) attachMentionPicker(composeInput);

    // Animar reveal de posts
    observeWallPosts();
  };

  // Check mute status first
  api('GET',`/api/wall/strikes/${CU.u}`).then(status=>{
    api('GET','/api/wall').then(posts=>{
      buildBody(posts, { muted: status.muted, strikes: status.strikes });
    }).catch(()=>{ wrap.innerHTML=`<div style="text-align:center;padding:2rem;color:var(--red)">Error cargando el muro</div>`; });
  }).catch(()=>{
    api('GET','/api/wall').then(posts=>{
      buildBody(posts, { muted: false, strikes: 0 });
    }).catch(()=>{ wrap.innerHTML=`<div style="padding:2rem;color:var(--red)">Error cargando</div>`; });
  });
}

let _wallPostObserver = null;
function observeWallPosts(){
  if(_wallPostObserver) _wallPostObserver.disconnect();
  const posts = document.querySelectorAll('#wall-wrap .wall-post.wp-reveal');
  if(!posts.length) return;
  if(!('IntersectionObserver' in window)){
    posts.forEach(p=>p.classList.add('show'));
    return;
  }
  _wallPostObserver = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('show');
        _wallPostObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.04, rootMargin: '0px 0px -2% 0px' });
  posts.forEach(p=>{
    const rect = p.getBoundingClientRect();
    if(rect.top < window.innerHeight * 0.95) p.classList.add('show');
    else _wallPostObserver.observe(p);
  });
}

function renderPost(p, idx){
  const isMe = p.username===CU.u;
  const canDelete = CU.admin || isMe;
  const time = timeAgo(p.created_at);
  const initials = p.username.slice(0,2).toUpperCase();
  const commentsOpen = _openComments[p.id];

  // Active reactions (ones with count > 0)
  const reactionMap = normalizeReactions(p.reactions);
  const activeReactions = WALL_EMOJIS.filter(e => (reactionMap[e]?.count||0) > 0);

  const activeHtml = activeReactions.map(e=>{
    const r = reactionMap[e];
    const active = r?.users?.includes(CU.u);
    return `<button onclick="toggleReaction(${p.id},'${e}')" style="padding:5px 11px;border-radius:24px;border:1.5px solid ${active?'var(--green)':'var(--border)'};background:${active?'var(--g-bg)':'var(--bg)'};cursor:pointer;font-size:.84rem;display:inline-flex;align-items:center;gap:3px;transition:all .15s">
      ${e}<span style="font-size:.7rem;font-weight:800;color:${active?'var(--green)':'var(--ink3)'}">${r.count}</span>
    </button>`;
  }).join('');

  const pickerHtml = `<div id="picker-${p.id}" style="display:none;flex-wrap:wrap;gap:5px;padding:8px 10px;background:var(--surface);border:1.5px solid var(--border);border-radius:14px;box-shadow:0 4px 16px rgba(0,0,0,.1);margin-top:6px">
    ${WALL_EMOJIS.map(e=>{
      const active = reactionMap[e]?.users?.includes(CU.u);
      return `<button onclick="toggleReaction(${p.id},'${e}')" style="padding:6px 8px;border:none;background:${active?'var(--g-bg)':'transparent'};border-radius:10px;cursor:pointer;font-size:1.15rem;transition:background .15s">${e}</button>`;
    }).join('')}
  </div>`;

  const idxAttr = (typeof idx === 'number') ? ` style="--wp-i:${Math.min(idx, 8)}"` : '';
  const contentHtml = parseWithMentions(p.content || '');

  return `<div class="wall-post wp-reveal" id="post-${p.id}"${idxAttr}>
    <div style="display:flex;align-items:flex-start;gap:10px;margin-bottom:10px">
      <div onclick="openProfile('${p.username.replace(/'/g,"\\'")}')" style="width:36px;height:36px;border-radius:50%;background:var(--grad-tri);color:#fff;font-weight:800;font-size:.78rem;display:flex;align-items:center;justify-content:center;flex-shrink:0;cursor:pointer" title="Ver perfil">${initials}</div>
      <div style="flex:1;min-width:0">
        <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">
          <span onclick="openProfile('${p.username.replace(/'/g,"\\'")}')" style="font-weight:800;font-size:.88rem;color:${isMe?'var(--green)':'var(--ink)'};cursor:pointer" title="Ver perfil">${escHtml(p.username)}</span>
          ${isMe?`<span style="background:var(--g-bg);color:var(--green);font-size:.6rem;font-weight:800;padding:2px 7px;border-radius:7px;letter-spacing:.5px;text-transform:uppercase">tú</span>`:''}
          <span style="font-size:.72rem;color:var(--ink3);font-weight:600">${time}</span>
        </div>
        <div style="font-size:.88rem;color:var(--ink2);line-height:1.55;margin-top:5px;word-break:break-word">${contentHtml}</div>
      </div>
      ${canDelete?`<button onclick="deleteWallPost(${p.id})" style="background:none;border:none;cursor:pointer;color:var(--ink3);font-size:.85rem;padding:2px 6px;flex-shrink:0;opacity:.5;transition:opacity .15s" onmouseover="this.style.opacity=1" onmouseout="this.style.opacity=.5" title="Eliminar">✕</button>`:''}
    </div>
    <div style="display:flex;align-items:center;gap:5px;flex-wrap:wrap;margin-bottom:10px">
      ${activeHtml}
      <button onclick="toggleEmojiPicker(${p.id})" style="width:30px;height:30px;border-radius:50%;border:1.5px dashed var(--border2);background:transparent;cursor:pointer;font-size:.9rem;font-weight:700;color:var(--ink3);display:flex;align-items:center;justify-content:center;transition:all .15s" title="Reaccionar">+</button>
    </div>
    ${pickerHtml}
    <div style="border-top:1px solid var(--border);padding-top:8px">
      <button onclick="toggleComments(${p.id})" class="wall-action-btn">
        💬 ${p.comment_count} comentario${p.comment_count!=1?'s':''}  ${commentsOpen?'▲':'▼'}
      </button>
    </div>
    <div id="comments-${p.id}" style="display:${commentsOpen?'block':'none'};margin-top:.5rem"></div>
  </div>`;
}

function toggleEmojiPicker(postId){
  const picker = document.getElementById(`picker-${postId}`);
  if(!picker) return;
  const isOpen = picker.style.display !== 'none';
  // Close all other pickers first
  document.querySelectorAll('[id^="picker-"]').forEach(el=>el.style.display='none');
  picker.style.display = isOpen ? 'none' : 'flex';
}

function toggleComments(postId){
  _openComments[postId] = !_openComments[postId];
  if(_openComments[postId]) loadComments(postId);
  else {
    const el = document.getElementById(`comments-${postId}`);
    if(el) el.style.display='none';
    // re-render toggle button only
    const post = _wallPosts.find(p=>p.id===postId);
    if(post){
      const btn = document.querySelector(`#post-${postId} button[onclick="toggleComments(${postId})"]`);
      if(btn) btn.innerHTML=`💬 ${post.comment_count} comentario${post.comment_count!=1?'s':''} ▼`;
    }
  }
}

function loadComments(postId){
  const wrap = document.getElementById(`comments-${postId}`);
  if(!wrap) return;
  wrap.style.display='block';
  wrap.innerHTML=`<div class="sk-stack" style="padding:.25rem 0">
    <div style="display:flex;gap:8px;align-items:center">
      <div class="sk circle" style="width:24px;height:24px;flex-shrink:0"></div>
      <div class="sk" style="height:12px;width:40%"></div>
    </div>
    <div class="sk" style="height:11px;width:80%;margin-left:32px"></div>
  </div>`;
  api('GET',`/api/wall/${postId}/comments`).then(comments=>{
    // Caché para detectar menciones en notificaciones
    if(!window._wallCommentCache) window._wallCommentCache = {};
    window._wallCommentCache[postId] = comments;
    wrap.innerHTML = renderComments(comments, postId, null) + commentInput(postId, null);
    // Attach mention picker al input principal de comentarios
    const inp = document.getElementById(`comment-input-${postId}`);
    if(inp) attachMentionPicker(inp);
    // Refrescar notificaciones por si hay menciones nuevas en estos comentarios
    if(typeof refreshNotifications === 'function'){
      try { refreshNotifications(); } catch(e){}
    }
  }).catch(()=>{ wrap.innerHTML=`<div style="color:var(--red);font-size:.78rem">Error</div>`; });
}

function renderComments(comments, postId, parentId){
  const level = comments.filter(c=>c.parent_id===parentId);
  if(!level.length) return '';
  return level.map(c=>{
    const isMe = c.username===CU.u;
    const canDelete = CU.admin||isMe;
    const replies = renderComments(comments, postId, c.id);
    const safeUname = c.username.replace(/'/g,"\\'");
    const contentHtml = parseWithMentions(c.content || '');
    return `<div style="padding:.6rem 0;border-bottom:1px solid var(--border);${parentId?'margin-left:1.5rem;':''}">
      <div style="display:flex;gap:8px;align-items:flex-start">
        <div onclick="openProfile('${safeUname}')" style="width:26px;height:26px;border-radius:50%;background:var(--grad-tri);color:#fff;font-weight:800;font-size:.65rem;display:flex;align-items:center;justify-content:center;flex-shrink:0;cursor:pointer">${c.username.slice(0,2).toUpperCase()}</div>
        <div style="flex:1;min-width:0">
          <div style="display:flex;align-items:center;gap:6px">
            <span onclick="openProfile('${safeUname}')" style="font-weight:800;font-size:.8rem;color:${isMe?'var(--green)':'var(--blue2)'};cursor:pointer">${escHtml(c.username)}</span>
            <span style="font-size:.65rem;color:var(--ink3);font-weight:600">${timeAgo(c.created_at)}</span>
          </div>
          <div style="font-size:.82rem;color:var(--ink);line-height:1.5;margin-top:2px;word-break:break-word">${contentHtml}</div>
          <div style="display:flex;gap:8px;margin-top:4px">
            <button onclick="showReplyInput(${postId},${c.id})" style="background:none;border:none;cursor:pointer;color:var(--ink3);font-size:.72rem;font-family:'Plus Jakarta Sans',sans-serif;font-weight:700;padding:0">Responder</button>
            ${canDelete?`<button onclick="deleteWallComment(${c.id},${postId})" style="background:none;border:none;cursor:pointer;color:var(--ink3);font-size:.72rem;padding:0;font-weight:700">Eliminar</button>`:''}
          </div>
          <div id="reply-input-${c.id}"></div>
        </div>
      </div>
      ${replies}
    </div>`;
  }).join('');
}

function commentInput(postId, parentId){
  const id = parentId ? `reply-form-${parentId}` : `comment-form-${postId}`;
  const inputId = `comment-input-${parentId||postId}`;
  return `<div style="display:flex;gap:8px;align-items:flex-start;padding:.75rem 0 0;position:relative" id="${id}">
    <div style="width:26px;height:26px;border-radius:50%;background:var(--grad-tri);color:#fff;font-weight:800;font-size:.65rem;display:flex;align-items:center;justify-content:center;flex-shrink:0">${CU.u.slice(0,2).toUpperCase()}</div>
    <div style="flex:1;display:flex;gap:6px;position:relative">
      <input type="text" placeholder="${parentId?'Responder... (@ para etiquetar)':'Comentar... (@ para etiquetar)'}" maxlength="500"
        id="${inputId}"
        style="flex:1;padding:8px 12px;border:1.5px solid var(--border);border-radius:10px;background:var(--bg);color:var(--ink);font-family:'Plus Jakarta Sans',sans-serif;font-size:.82rem;outline:none"
        onkeydown="if(event.key==='Enter' && !event.shiftKey){event.preventDefault();submitComment(${postId},${parentId||'null'})}"
        oninput="window._lastCommentInput='${inputId}'">
      <button onclick="submitComment(${postId},${parentId||'null'})" style="padding:8px 14px;background:var(--grad-tri);color:#fff;border:none;border-radius:10px;font-family:'Plus Jakarta Sans',sans-serif;font-weight:800;font-size:.78rem;cursor:pointer;flex-shrink:0">↗</button>
    </div>
  </div>`;
}

function showReplyInput(postId, parentId){
  const wrap = document.getElementById(`reply-input-${parentId}`);
  if(!wrap) return;
  wrap.innerHTML = commentInput(postId, parentId);
  setTimeout(()=>{
    const inp = document.getElementById(`comment-input-${parentId}`);
    if(inp){ inp.focus(); attachMentionPicker(inp); }
  },50);
}

function submitWallPost(){
  const inp = document.getElementById('wall-input');
  const text = inp.value.trim();
  if(!text){ toast('Escribe algo primero'); return; }
  api('POST','/api/wall',{username:CU.u, content:text})
    .then(()=>{ inp.value=''; document.getElementById('wall-input-count').textContent='0/500'; renderChat(); })
    .catch(e=>{ toast(e.message||'Error publicando'); });
}

function submitComment(postId, parentId){
  const inputId = `comment-input-${parentId||postId}`;
  const inp = document.getElementById(inputId);
  if(!inp||!inp.value.trim()) return;
  const text = inp.value.trim();
  api('POST',`/api/wall/${postId}/comments`,{username:CU.u, content:text, parent_id:parentId})
    .then(()=>{ loadComments(postId); _openComments[postId]=true; renderChat(); })
    .catch(e=>toast('Error: '+e.message));
}

let _wallPollPaused = false;
let _recentlyReacted = new Set(); // post IDs with pending reaction sync

function toggleReaction(postId, emoji){
  const picker = document.getElementById(`picker-${postId}`);
  if(picker) picker.style.display='none';

  // Optimistic update
  const post = _wallPosts.find(p=>p.id===postId);
  if(post){
    const reactions = normalizeReactions(post.reactions);
    const prevEmoji = Object.keys(reactions).find(e => reactions[e]?.users?.includes(CU.u));
    if(prevEmoji){
      reactions[prevEmoji].users = reactions[prevEmoji].users.filter(u=>u!==CU.u);
      reactions[prevEmoji].count = reactions[prevEmoji].users.length;
    }
    if(prevEmoji !== emoji){
      if(!reactions[emoji]) reactions[emoji] = { count: 0, users: [] };
      reactions[emoji].users.push(CU.u);
      reactions[emoji].count = reactions[emoji].users.length;
    }
    post.reactions = reactions;
    const el = document.getElementById(`post-${postId}`);
    if(el){
      const tmp = document.createElement('div');
      tmp.innerHTML = renderPost(post);
      const newEl = tmp.firstChild;
      if(newEl) newEl.classList.add('show'); // mantener visible (ya estaba en pantalla)
      el.replaceWith(newEl);
      if(_openComments[postId]) loadComments(postId);
    }
  }

  // Pause polling immediately so it doesn't fire while request is in flight
  _recentlyReacted.add(postId);

  api('POST',`/api/wall/${postId}/react`,{username:CU.u, emoji})
    .then(()=>{
      api('GET','/api/wall').then(posts=>{
        const fresh = posts.map(p=>({...p,reactions:normalizeReactions(p.reactions)})).find(p=>p.id===postId);
        console.log('Fresh reactions from server:', JSON.stringify(fresh?.reactions));
        if(fresh){
          const idx = _wallPosts.findIndex(x=>x.id===postId);
          if(idx>=0) _wallPosts[idx] = fresh;
          const el = document.getElementById(`post-${postId}`);
          if(el){
            const tmp = document.createElement('div');
            tmp.innerHTML = renderPost(fresh);
            const newEl = tmp.firstChild;
            if(newEl) newEl.classList.add('show'); // mantener visible
            el.replaceWith(newEl);
            if(_openComments[postId]) loadComments(postId);
          }
        }
        _recentlyReacted.delete(postId);
      }).catch(()=>_recentlyReacted.delete(postId));
    })
    .catch(e=>{
      _recentlyReacted.delete(postId);
      toast('Error: '+e.message);
    });
}

function deleteWallPost(id){
  api('DELETE',`/api/wall/${id}`,{username:CU.u, is_admin:!!CU.admin})
    .then(r=>{
      if(r.muted) toast('⚠️ Usuario silenciado del muro por 2 eliminaciones');
      renderChat();
    })
    .catch(e=>toast('Error: '+e.message));
}

function deleteWallComment(id, postId){
  api('DELETE',`/api/wall/comments/${id}`,{username:CU.u, is_admin:!!CU.admin})
    .then(r=>{
      if(r.muted) toast('⚠️ Usuario silenciado del muro por 2 eliminaciones');
      loadComments(postId);
    })
    .catch(e=>toast('Error: '+e.message));
}

// ── WALL POLLING ──
let _wallPollInterval = null;
let _lastWallPostCount = 0;

function startWallPolling(){
  stopWallPolling();
  _wallPollInterval = setInterval(()=>{
    if(localStorage.getItem('q26page') !== 'chat') { stopWallPolling(); return; }
    api('GET','/api/wall').then(posts=>{
      posts = posts.map(p=>({...p,reactions:normalizeReactions(p.reactions)}));
      posts.forEach(p=>{
        const existing = document.getElementById(`post-${p.id}`);
        const localPost = _wallPosts.find(x=>x.id===p.id);

        if(!existing){
          // New post — add to DOM
          _wallPosts.unshift(p);
          const wrap = document.getElementById('wall-wrap');
          if(wrap){
            const tmp = document.createElement('div');
            tmp.innerHTML = renderPost(p, 0);
            const newEl = tmp.firstChild;
            if(newEl){
              // Reveal inmediato para nuevos posts
              setTimeout(()=>newEl.classList.add('show'), 30);
              const sectionH = wrap.querySelector('.wall-section-h');
              if(sectionH){
                sectionH.after(newEl);
              } else {
                // Insertar antes del primer post existente o al final
                const firstPost = wrap.querySelector('.wall-post');
                if(firstPost) firstPost.before(newEl);
                else wrap.appendChild(newEl);
              }
            }
          }
          // Refrescar notificaciones por si me etiquetaron en este post nuevo
          if(typeof refreshNotifications === 'function'){
            try { refreshNotifications(); } catch(e){}
          }
          return;
        }

        // Skip if this post has a pending reaction from current user
        if(_recentlyReacted.has(p.id)){
          // Still update comment count label without re-rendering
          if(localPost) localPost.comment_count = p.comment_count;
          const btn = existing.querySelector(`[onclick="toggleComments(${p.id})"]`);
          if(btn) btn.innerHTML = `💬 ${p.comment_count} comentario${p.comment_count!=1?'s':''}  ${_openComments[p.id]?'▲':'▼'}`;
          return;
        }

        // Check if reactions changed by someone else (total count differs)
        const serverTotal = Object.values(p.reactions||{}).reduce((s,r)=>s+(r.count||0),0);
        const localTotal = Object.values(localPost?.reactions||{}).reduce((s,r)=>s+(r.count||0),0);
        const commentChanged = localPost && p.comment_count !== localPost.comment_count;
        const reactionsChanged = serverTotal !== localTotal;

        if(reactionsChanged || commentChanged){
          console.log(`Poll updating post ${p.id} - serverTotal:${serverTotal} localTotal:${localTotal}`);
          const idx = _wallPosts.findIndex(x=>x.id===p.id);
          if(idx>=0) _wallPosts[idx] = p;
          const tmp = document.createElement('div');
          tmp.innerHTML = renderPost(p);
          const newEl = tmp.firstChild;
          // Mantener visible — ya estaba en pantalla
          if(newEl) newEl.classList.add('show');
          existing.replaceWith(newEl);
          if(_openComments[p.id]) loadComments(p.id);
        }
      });

      // Remove deleted posts
      _wallPosts = _wallPosts.filter(p=>posts.find(x=>x.id===p.id));
      document.querySelectorAll('[id^="post-"]').forEach(el=>{
        const id = parseInt(el.id.replace('post-',''));
        if(!posts.find(p=>p.id===id)) el.remove();
      });

      // Actualizar stats del hero
      const totalPosts = posts.length;
      const totalReactions = posts.reduce((sum,p)=>{
        return sum + Object.values(p.reactions||{}).reduce((s,r)=>s+(r?.count||0),0);
      }, 0);
      const ePosts = document.getElementById('wp-stat-posts');
      const eReact = document.getElementById('wp-stat-reactions');
      const eEye = document.getElementById('wp-eyebrow-txt');
      const eStk = document.getElementById('wp-sticky-stat');
      if(ePosts) ePosts.textContent = String(totalPosts);
      if(eReact) eReact.textContent = String(totalReactions);
      if(eEye) eEye.textContent = `En vivo · ${totalPosts} publicación${totalPosts!==1?'es':''}`;
      if(eStk) eStk.textContent = `${totalPosts} publicación${totalPosts!==1?'es':''}`;
    }).catch(()=>{});
  }, 1000);
}

function stopWallPolling(){
  if(_wallPollInterval){ clearInterval(_wallPollInterval); _wallPollInterval=null; }
}

function timeAgo(dateStr){
  const diff = Date.now() - new Date(dateStr).getTime();
  const m = Math.floor(diff/60000);
  if(m<1) return 'ahora';
  if(m<60) return `hace ${m}m`;
  const h = Math.floor(m/60);
  if(h<24) return `hace ${h}h`;
  const d = Math.floor(h/24);
  return `hace ${d}d`;
}

// Legacy no-op for chat
function sendChat(){}
function deleteChatMsg(){}

function shouldShowRefModal(){
  if(!CU) return false;
  if(CU.refSeen) return false;
  if(CU.refCode) return false;
  if(localStorage.getItem(`q26ref_done_${CU.u}`)==='1') return false;
  if(localStorage.getItem(`q26ref_noshow_${CU.u}`)==='1') return false;
  return true;
}

function markRefSeen(){
  CU.refSeen = true;
  localStorage.setItem('q26u', JSON.stringify(CU));
  localStorage.setItem(`q26ref_done_${CU.u}`,'1');
}

// Check backend on boot — if user already has referrer, mark as seen
async function checkRefStatus(){
  if(!CU || CU.refSeen) return;
  // Also check localStorage flags first — avoid unnecessary API call
  if(localStorage.getItem(`q26ref_done_${CU.u}`)==='1' ||
     localStorage.getItem(`q26ref_noshow_${CU.u}`)==='1'){
    markRefSeen();
    return;
  }
  try {
    const r = await api('GET', `/api/refs/check/${CU.u}`);
    if(r.hasReferrer){
      markRefSeen();
      localStorage.setItem(`q26ref_done_${CU.u}`,'1');
    }
  } catch(e){}
}

function showRefModal(){
  document.getElementById('ref-screen-input').value='';
  document.getElementById('ref-screen-input').style.borderColor='var(--border)';
  document.getElementById('ref-noshow-cb').checked=false;
  const scr=document.getElementById('ref-screen');
  scr.classList.add('open');
  // Draw logo on the screen
  setTimeout(()=>{
    const c=document.getElementById('ref-screen-logo');
    if(c) drawStaticLogo(c,64);
    document.getElementById('ref-screen-input').focus();
  },50);
}

function closeRefScreen(){
  const scr=document.getElementById('ref-screen');
  scr.classList.remove('open');
  scr.style.display='none';
}

function submitRefScreen(){
  const code=document.getElementById('ref-screen-input').value.trim().toUpperCase();
  const inp=document.getElementById('ref-screen-input');
  if(!code||code.length!==3){
    inp.style.borderColor='var(--red)';
    inp.focus();
    return;
  }
  api('POST','/api/refs_register',{username:CU.u,refCode:code})
    .then(()=>{
      markRefSeen();
      localStorage.setItem(`q26ref_done_${CU.u}`,'1');
      toast('¡Código registrado! ✓');
      closeRefScreen();
    })
    .catch(()=>{
      inp.style.borderColor='var(--red)';
      toast('Código no válido, intenta de nuevo');
    });
}

function skipRefScreen(){
  const noShow=document.getElementById('ref-noshow-cb').checked;
  if(noShow){
    markRefSeen();
    localStorage.setItem(`q26ref_noshow_${CU.u}`,'1');
  }
  closeRefScreen();
}

// Legacy no-ops
function submitRefModal(){ submitRefScreen(); }
function skipRefModal(){ skipRefScreen(); }
function saveWelcomeRef(){}

function openPublicRules(){
  const modal = document.getElementById('public-rules-modal');
  const content = document.getElementById('public-rules-content');
  // Use a fixed estimate for bolsa since user isn't logged in yet
  const bolsa = 250 * 275; // ~250 players estimate
  content.innerHTML = `
    <div style="background:var(--b-bg);border:1px solid var(--b2);border-radius:12px;padding:10px 14px;font-size:.78rem;color:var(--b2);line-height:1.5">
      ⚽ <b>Fecha límite:</b> 11 de junio de 2026 · Costo de entrada: <b>$350 MXN</b>
    </div>

    <div>
      <div style="font-weight:800;font-size:.95rem;color:var(--ink);margin-bottom:.5rem">⚽ ¿Cómo se juega?</div>
      <p style="font-size:.85rem;color:var(--ink2);line-height:1.6;margin-bottom:.5rem"><b>Fase de Grupos:</b> Predice el marcador exacto de los 72 partidos. La app calcula la tabla de posiciones automáticamente usando reglas FIFA. Los dos primeros de cada grupo y los 8 mejores terceros avanzan al bracket.</p>
      <p style="font-size:.85rem;color:var(--ink2);line-height:1.6"><b>Fase Eliminatoria:</b> Completa el bracket desde Dieciseisavos hasta la Final. El marcador a 90 minutos es obligatorio. Si predices empate, elige quién avanza.</p>
    </div>

    <div>
      <div style="font-weight:800;font-size:.95rem;color:var(--ink);margin-bottom:.75rem">🏆 Sistema de puntos</div>
      <p style="font-weight:700;font-size:.82rem;color:var(--ink);margin-bottom:.4rem">Fase de Grupos</p>
      <table style="width:100%;border-collapse:collapse;font-size:.82rem;margin-bottom:.75rem">
        <thead><tr style="background:var(--bg)"><th style="padding:6px 8px;text-align:left;font-size:.72rem;color:var(--ink3)">Condición</th><th style="padding:6px 8px;text-align:right;font-size:.72rem;color:var(--ink3)">Puntos</th></tr></thead>
        <tbody>
          <tr><td style="padding:6px 8px;border-bottom:1px solid var(--border)">Aciertas el resultado (G/E/P)</td><td style="padding:6px 8px;text-align:right;font-weight:800;color:var(--green);border-bottom:1px solid var(--border)">+1</td></tr>
          <tr><td style="padding:6px 8px;border-bottom:1px solid var(--border)">Bonus marcador exacto</td><td style="padding:6px 8px;text-align:right;font-weight:800;color:#9a6500;border-bottom:1px solid var(--border)">+2</td></tr>
          <tr style="background:var(--bg)"><td style="padding:6px 8px;color:var(--ink3)">Máximo por partido</td><td style="padding:6px 8px;text-align:right;font-weight:800;color:var(--ink3)">+3</td></tr>
        </tbody>
      </table>
      <p style="font-weight:700;font-size:.82rem;color:var(--ink);margin-bottom:.4rem">Fase Eliminatoria</p>
      <table style="width:100%;border-collapse:collapse;font-size:.82rem">
        <thead><tr style="background:var(--bg)"><th style="padding:6px 8px;text-align:left;font-size:.72rem;color:var(--ink3)">Ronda</th><th style="padding:6px 8px;text-align:right;font-size:.72rem;color:var(--ink3)">Ganador</th><th style="padding:6px 8px;text-align:right;font-size:.72rem;color:var(--ink3)">+ Exacto</th><th style="padding:6px 8px;text-align:right;font-size:.72rem;color:var(--ink3)">Máx</th></tr></thead>
        <tbody>
          <tr><td style="padding:6px 8px;border-bottom:1px solid var(--border)">Dieciseisavos</td><td style="padding:6px 8px;text-align:right;font-weight:700;color:var(--green);border-bottom:1px solid var(--border)">+2</td><td style="padding:6px 8px;text-align:right;font-weight:700;color:#9a6500;border-bottom:1px solid var(--border)">+4</td><td style="padding:6px 8px;text-align:right;font-weight:800;border-bottom:1px solid var(--border)">+6</td></tr>
          <tr><td style="padding:6px 8px;border-bottom:1px solid var(--border)">Octavos</td><td style="padding:6px 8px;text-align:right;font-weight:700;color:var(--green);border-bottom:1px solid var(--border)">+3</td><td style="padding:6px 8px;text-align:right;font-weight:700;color:#9a6500;border-bottom:1px solid var(--border)">+6</td><td style="padding:6px 8px;text-align:right;font-weight:800;border-bottom:1px solid var(--border)">+9</td></tr>
          <tr><td style="padding:6px 8px;border-bottom:1px solid var(--border)">Cuartos</td><td style="padding:6px 8px;text-align:right;font-weight:700;color:var(--green);border-bottom:1px solid var(--border)">+5</td><td style="padding:6px 8px;text-align:right;font-weight:700;color:#9a6500;border-bottom:1px solid var(--border)">+10</td><td style="padding:6px 8px;text-align:right;font-weight:800;border-bottom:1px solid var(--border)">+15</td></tr>
          <tr><td style="padding:6px 8px;border-bottom:1px solid var(--border)">Semis</td><td style="padding:6px 8px;text-align:right;font-weight:700;color:var(--green);border-bottom:1px solid var(--border)">+7</td><td style="padding:6px 8px;text-align:right;font-weight:700;color:#9a6500;border-bottom:1px solid var(--border)">+14</td><td style="padding:6px 8px;text-align:right;font-weight:800;border-bottom:1px solid var(--border)">+21</td></tr>
          <tr style="background:var(--bg)"><td style="padding:6px 8px">Final</td><td style="padding:6px 8px;text-align:right;font-weight:700;color:var(--green)">+10</td><td style="padding:6px 8px;text-align:right;font-weight:700;color:#9a6500">+20</td><td style="padding:6px 8px;text-align:right;font-weight:800">+30</td></tr>
        </tbody>
      </table>
      <p style="font-size:.75rem;color:var(--ink3);margin-top:.5rem">⚠️ En eliminatoria, si no aciertas al que avanza no ganas ningún punto.</p>
    </div>

    <div>
      <div style="font-weight:800;font-size:.95rem;color:var(--ink);margin-bottom:.75rem">💰 Premios</div>
      <table style="width:100%;border-collapse:collapse;font-size:.82rem">
        <thead><tr style="background:var(--bg)"><th style="padding:6px 8px;text-align:left;font-size:.72rem;color:var(--ink3)">Posición</th><th style="padding:6px 8px;text-align:right;font-size:.72rem;color:var(--ink3)">%</th></tr></thead>
        <tbody>
          <tr><td style="padding:6px 8px;border-bottom:1px solid var(--border)">🥇 1er lugar</td><td style="padding:6px 8px;text-align:right;font-weight:800;color:var(--green);border-bottom:1px solid var(--border)">40%</td></tr>
          <tr><td style="padding:6px 8px;border-bottom:1px solid var(--border)">🥈 2do lugar</td><td style="padding:6px 8px;text-align:right;font-weight:800;border-bottom:1px solid var(--border)">25%</td></tr>
          <tr><td style="padding:6px 8px;border-bottom:1px solid var(--border)">🥉 3er lugar</td><td style="padding:6px 8px;text-align:right;font-weight:800;border-bottom:1px solid var(--border)">15%</td></tr>
          <tr><td style="padding:6px 8px;border-bottom:1px solid var(--border)">🏅 4to lugar</td><td style="padding:6px 8px;text-align:right;font-weight:800;border-bottom:1px solid var(--border)">10%</td></tr>
          <tr><td style="padding:6px 8px;border-bottom:1px solid var(--border)">🏅 5to lugar</td><td style="padding:6px 8px;text-align:right;font-weight:800;border-bottom:1px solid var(--border)">5%</td></tr>
          <tr style="background:var(--bg)"><td style="padding:6px 8px">🪦 Último lugar</td><td style="padding:6px 8px;text-align:right;font-weight:800;color:var(--red)">5%</td></tr>
        </tbody>
      </table>
      <p style="font-size:.75rem;color:var(--ink3);margin-top:.5rem">Los montos crecen conforme se registran más participantes ($275 MXN por jugador va a la bolsa).</p>
    </div>

    <div>
      <div style="font-weight:800;font-size:.95rem;color:var(--ink);margin-bottom:.5rem">🔗 Referidos</div>
      <div style="background:var(--gld-bg);border:1.5px solid var(--gld);border-radius:10px;padding:.75rem 1rem;font-size:.82rem;color:var(--ink2);line-height:1.5">
        🎁 <b>Bono por referido campeón: $500 MXN.</b> Si alguien que registraste con tu código termina en 1er lugar, recibes $500 MXN extra — fuera de la bolsa.
      </div>
    </div>

    <button onclick="closePublicRules()" style="width:100%;padding:12px;background:var(--grad-tri);color:#fff;border:none;border-radius:12px;font-family:'Plus Jakarta Sans',sans-serif;font-weight:700;font-size:.88rem;cursor:pointer">
      Entendido ✓
    </button>
  `;
  modal.style.display = 'block';
  modal.scrollTop = 0;
}

function closePublicRules(){
  document.getElementById('public-rules-modal').style.display = 'none';
}
function showWelcomeModal(){}
function closeWelcomeModal(){}

function escHtml(s){
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

// ══════════════════════════════════════════════════════
//  PROFILE & 1V1 COMPARE
// ══════════════════════════════════════════════════════

// Calcula stats completas de un usuario
function getProfileStats(username){
  const u = username;
  const sc = calcScore(u);
  const up = picks[u] || {sc:{},br:{}};

  // Predicciones de fase de grupos: total y aciertos
  let grpPredCount = 0, grpHits = 0, grpExacts = 0;
  if(typeof GM !== 'undefined'){
    Object.values(GM).forEach(ms=>{
      ms.forEach(m=>{
        const mine = up.sc?.[m.id];
        if(mine && mine.h!=null && mine.a!=null) grpPredCount++;
        const real = results?.sc?.[m.id];
        if(!real || !mine || mine.h==null) return;
        const rh=+real.h, ra=+real.a, mh=+mine.h, ma=+mine.a;
        const realRes = rh>ra?'H':rh<ra?'A':'D';
        const mineRes = mh>ma?'H':mh<ma?'A':'D';
        if(realRes === mineRes) grpHits++;
        if(rh===mh && ra===ma) grpExacts++;
      });
    });
  }

  // Predicciones del bracket: total y aciertos
  let brPredCount = 0, brHits = 0, brExacts = 0;
  if(up.br){
    brPredCount = Object.values(up.br).filter(v=>v!=null && v!=='').length;
  }
  if(results?.bracket){
    Object.entries(results.bracket).forEach(([id,rr])=>{
      if(!rr?.winner) return;
      const mw = up.br?.[id];
      if(!mw) return;
      if(mw === rr.winner){
        brHits++;
        const ms = up.sc?.[id];
        if(ms && rr.h!=null && +ms.h===rr.h && +ms.a===rr.a) brExacts++;
      }
    });
  }

  // Total de partidos juzgados (resultados ya cargados)
  const grpJudged = results?.sc ? Object.keys(results.sc).filter(k=>!k.includes('_')).length : 0;
  let brJudged = 0;
  if(results?.bracket){
    brJudged = Object.values(results.bracket).filter(rr=>rr?.winner).length;
  }
  const totalJudged = grpJudged + brJudged;
  const totalHits = grpHits + brHits;
  const totalExacts = grpExacts + brExacts;
  const accuracyPct = totalJudged > 0 ? Math.round((totalHits/totalJudged) * 100) : null;

  // Posición en ranking (excluye admins)
  let position = null, rankSize = 0;
  try {
    const adminSet = new Set((dynUsers||[]).filter(x=>x.admin).map(x=>x.u));
    const rank = Object.keys(picks)
      .filter(k=>!adminSet.has(k))
      .map(k=>({u:k, total:calcScore(k).total}))
      .sort((a,b)=>{ if(b.total !== a.total) return b.total - a.total; return a.u.localeCompare(b.u,'es'); });
    rankSize = rank.length;
    const idx = rank.findIndex(r=>r.u === u);
    if(idx >= 0) position = idx + 1;
  } catch(_){}

  // Streak actual (bracket) y total de predicciones
  const streak = currentStreak(u);
  const totalPreds = grpPredCount + brPredCount;

  return {
    username: u,
    grupos: sc.grupos,
    bracket: sc.bracket,
    total: sc.total,
    position, rankSize,
    grpPredCount, grpHits, grpExacts, grpJudged,
    brPredCount, brHits, brExacts, brJudged,
    totalPreds, totalHits, totalExacts, totalJudged,
    accuracyPct,
    streak
  };
}

function profileInitials(u){
  return (u || '?').slice(0,2).toUpperCase();
}

function openProfile(username){
  if(!username) return;
  const s = getProfileStats(username);
  const isMe = username === CU?.u;

  const positionTxt = s.position
    ? `<span class="prof-position-trophy">${s.position===1?'🥇':s.position===2?'🥈':s.position===3?'🥉':'🏅'}</span>${s.position}° de ${s.rankSize}`
    : 'Sin clasificar aún';

  const accuracyTxt = s.accuracyPct === null
    ? '<small>sin datos</small>'
    : `${s.accuracyPct}<small>%</small>`;

  const exactsTxt = s.totalJudged > 0
    ? `${s.totalExacts}<small>marcador${s.totalExacts!==1?'es':''}</small>`
    : `0<small>sin datos</small>`;

  const streakTxt = s.streak > 0
    ? `${s.streak}<small>🔥 al hilo</small>`
    : `0<small>sin racha</small>`;

  const html = `
    <div class="prof-hero">
      <div class="prof-avatar">${profileInitials(s.username)}</div>
      <div class="prof-uname">${escHtml(s.username)}${isMe?'<span class="prof-uname-me">tú</span>':''}</div>
      <div class="prof-position">${positionTxt}</div>
    </div>
    <div class="prof-body">
      <div class="prof-stats-grid">
        <div class="prof-stat">
          <div class="prof-stat-lbl">Puntos totales</div>
          <div class="prof-stat-val"><span class="icon">⚡</span>${s.total}<small>pts</small></div>
        </div>
        <div class="prof-stat">
          <div class="prof-stat-lbl">% aciertos</div>
          <div class="prof-stat-val"><span class="icon">🎯</span>${accuracyTxt}</div>
        </div>
        <div class="prof-stat">
          <div class="prof-stat-lbl">Marcadores exactos</div>
          <div class="prof-stat-val"><span class="icon">🎰</span>${exactsTxt}</div>
        </div>
        <div class="prof-stat">
          <div class="prof-stat-lbl">Racha bracket</div>
          <div class="prof-stat-val">${streakTxt}</div>
        </div>
      </div>

      <div class="prof-section-h">Desglose por fase</div>
      <div class="prof-breakdown">
        <div class="prof-bd-item">
          <div class="prof-bd-icon">📊</div>
          <div class="prof-bd-pts">${s.grupos}</div>
          <div class="prof-bd-lbl">Grupos · ${s.grpHits}/${s.grpJudged||'?'}</div>
        </div>
        <div class="prof-bd-item">
          <div class="prof-bd-icon">📈</div>
          <div class="prof-bd-pts">${s.bracket}</div>
          <div class="prof-bd-lbl">Bracket · ${s.brHits}/${s.brJudged||'?'}</div>
        </div>
      </div>

      <div class="prof-cta">
        ${isMe
          ? `<button class="prof-btn" onclick="closeProfile()">Cerrar</button>`
          : `<button class="prof-btn" onclick="closeProfile()">Cerrar</button>
             <button class="prof-btn prof-btn-vs" onclick="openCompare('${CU.u.replace(/'/g,"\\'")}','${s.username.replace(/'/g,"\\'")}')">⚔️ Comparar conmigo</button>`
        }
      </div>
    </div>`;

  document.getElementById('prof-content').innerHTML = html;
  document.getElementById('profile-modal').style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeProfile(){
  const m = document.getElementById('profile-modal');
  if(m) m.style.display = 'none';
  if(!document.getElementById('compare-modal') || document.getElementById('compare-modal').style.display === 'none'){
    document.body.style.overflow = '';
  }
}

function openCompare(userA, userB){
  if(!userA || !userB) return;
  // Cierra perfil si estaba abierto
  document.getElementById('profile-modal').style.display = 'none';

  const a = getProfileStats(userA);
  const b = getProfileStats(userB);

  // Helper: marca quién gana en una métrica (mayor es mejor por default)
  function cmp(va, vb, higherBetter = true){
    if(va === vb || va == null || vb == null) return ['tie','tie'];
    const aWins = higherBetter ? (va > vb) : (va < vb);
    return aWins ? ['win','lose'] : ['lose','win'];
  }

  // Para posición: menor es mejor
  const posA = a.position || 99999;
  const posB = b.position || 99999;
  const posCmp = cmp(posA, posB, false);

  const totalCmp    = cmp(a.total, b.total);
  const accCmp      = cmp(a.accuracyPct ?? -1, b.accuracyPct ?? -1);
  const exactsCmp   = cmp(a.totalExacts, b.totalExacts);
  const streakCmp   = cmp(a.streak, b.streak);
  const grpCmp      = cmp(a.grupos, b.grupos);
  const brCmp       = cmp(a.bracket, b.bracket);

  // Cuenta wins
  let wA = 0, wB = 0;
  [posCmp, totalCmp, accCmp, exactsCmp, streakCmp, grpCmp, brCmp].forEach(c=>{
    if(c[0] === 'win') wA++;
    if(c[1] === 'win') wB++;
  });

  let summary;
  if(wA > wB) summary = `<strong>${escHtml(a.username)}</strong> va arriba ${wA}–${wB}`;
  else if(wB > wA) summary = `<strong>${escHtml(b.username)}</strong> va arriba ${wB}–${wA}`;
  else summary = `Vienen empatados ${wA}–${wB}. ¡Definan en los próximos partidos!`;

  function row(icon, lbl, va, vb, cmpRes, suffix=''){
    return `<div class="cmp-row">
      <div class="cmp-val ${cmpRes[0]}">${va}${suffix}</div>
      <div class="cmp-lbl"><span class="cmp-icon">${icon}</span>${lbl}</div>
      <div class="cmp-val ${cmpRes[1]}">${vb}${suffix}</div>
    </div>`;
  }

  const fmtPos = s => s.position ? `${s.position}°` : '—';
  const fmtAcc = s => s.accuracyPct === null ? '—' : `${s.accuracyPct}%`;

  const html = `
    <div class="cmp-head">
      <div style="font-size:.7rem;font-weight:800;color:var(--ink3);letter-spacing:1.5px;text-transform:uppercase">Cara a cara</div>
      <div class="cmp-vs-row">
        <div class="cmp-side">
          <div class="cmp-side-av a">${profileInitials(a.username)}</div>
          <div class="cmp-side-name">${escHtml(a.username)}${a.username===CU.u?'<br><span style="font-size:.62rem;color:var(--green);font-weight:800">tú</span>':''}</div>
          <div class="cmp-side-pos">${a.position?`#${a.position}`:'sin pos'}</div>
        </div>
        <div class="cmp-vs">VS</div>
        <div class="cmp-side">
          <div class="cmp-side-av b">${profileInitials(b.username)}</div>
          <div class="cmp-side-name">${escHtml(b.username)}${b.username===CU.u?'<br><span style="font-size:.62rem;color:var(--green);font-weight:800">tú</span>':''}</div>
          <div class="cmp-side-pos">${b.position?`#${b.position}`:'sin pos'}</div>
        </div>
      </div>
    </div>
    <div class="cmp-body">
      ${row('🏆', 'Posición', fmtPos(a), fmtPos(b), posCmp)}
      ${row('⚡', 'Puntos', a.total, b.total, totalCmp)}
      ${row('🎯', '% aciertos', fmtAcc(a), fmtAcc(b), accCmp)}
      ${row('🎰', 'Marcadores exactos', a.totalExacts, b.totalExacts, exactsCmp)}
      ${row('🔥', 'Racha bracket', a.streak, b.streak, streakCmp)}
      ${row('📊', 'Puntos grupos', a.grupos, b.grupos, grpCmp)}
      ${row('📈', 'Puntos bracket', a.bracket, b.bracket, brCmp)}
      <div class="cmp-summary">${summary}</div>
    </div>`;

  document.getElementById('cmp-content').innerHTML = html;
  document.getElementById('compare-modal').style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeCompare(){
  const m = document.getElementById('compare-modal');
  if(m) m.style.display = 'none';
  if(!document.getElementById('profile-modal') || document.getElementById('profile-modal').style.display === 'none'){
    document.body.style.overflow = '';
  }
}

// ══════════════════════════════════════════════════════
//  ONBOARDING — primera vez que entra el usuario
// ══════════════════════════════════════════════════════
let _onbStep = 0;

const ONB_SLIDES = [
  {
    illus: '<div class="onb-emoji">⚽</div>',
    title: 'Bienvenido a <span class="grad">Al Ángulo</span>',
    body: 'Tu quiniela del Mundial 2026. Predice los partidos, súbele al ranking y vive el torneo con tus amigos. Te explicamos rápido cómo funciona.',
  },
  {
    illus: `<div class="onb-emoji">🎯</div>`,
    title: 'Predice los <span class="grad">104 partidos</span>',
    body: 'Llena el marcador exacto de cada partido antes del kickoff. Si aciertas el ganador, sumas. Si aciertas el marcador exacto, bonus.',
    extra: `<div class="onb-demo-card">
      <div class="onb-demo-team"><span class="onb-demo-flag">🇲🇽</span><span class="onb-demo-name">México</span></div>
      <div class="onb-demo-score"><div class="onb-demo-inp onb-demo-pulse">2</div><span class="onb-demo-dash">−</span><div class="onb-demo-inp onb-demo-pulse">1</div></div>
      <div class="onb-demo-team"><span class="onb-demo-flag">🇿🇦</span><span class="onb-demo-name">Sudáfrica</span></div>
    </div>`,
  },
  {
    illus: '<div class="onb-emoji">🏆</div>',
    title: 'Sube en el <span class="grad">ranking en vivo</span>',
    body: 'Cada acierto te sube en el podio. Las eliminatorias dan más puntos que la fase de grupos.',
    extra: `<div class="onb-demo-rank">
      <div class="onb-rank-row first"><div class="onb-rank-pos">1</div><div class="onb-rank-name">usuario_01</div><div class="onb-rank-pts">42</div></div>
      <div class="onb-rank-row"><div class="onb-rank-pos">2</div><div class="onb-rank-name">usuario_02</div><div class="onb-rank-pts">38</div></div>
      <div class="onb-rank-row me"><div class="onb-rank-pos">3</div><div class="onb-rank-name">tú 🔥</div><div class="onb-rank-pts">36</div></div>
    </div>`,
  },
  {
    illus: '<div class="onb-emoji">🎉</div>',
    title: 'Crea grupos y <span class="grad">compite</span>',
    body: 'Arma una liga privada con tus amigos, comenta en el muro social, comparte tus predicciones. Que empiece la fiesta.',
    extra: `<div class="onb-demo-feats">
      <div class="onb-feat"><div class="onb-feat-i">👥</div><div class="onb-feat-t">Grupos privados</div></div>
      <div class="onb-feat"><div class="onb-feat-i">💬</div><div class="onb-feat-t">Muro social</div></div>
      <div class="onb-feat"><div class="onb-feat-i">📤</div><div class="onb-feat-t">Compartir</div></div>
      <div class="onb-feat"><div class="onb-feat-i">⚔️</div><div class="onb-feat-t">Comparar 1v1</div></div>
    </div>`,
  },
];

function shouldShowOnboarding(){
  if(!CU) return false;
  if(CU.admin) return false; // admins se la saltan
  const k = `q26_onboarded_${CU.u}`;
  return !localStorage.getItem(k);
}

function markOnboarded(){
  if(!CU) return;
  localStorage.setItem(`q26_onboarded_${CU.u}`, '1');
}

function openOnboard(){
  _onbStep = 0;
  renderOnbSlide();
  const m = document.getElementById('onboard-modal');
  if(m){ m.style.display = 'flex'; document.body.style.overflow = 'hidden'; }
}

function renderOnbSlide(){
  const s = ONB_SLIDES[_onbStep];
  if(!s) return;
  const body = document.getElementById('onb-body');
  const dots = document.getElementById('onb-dots');
  const nextBtn = document.getElementById('onb-next-btn');
  if(!body || !dots || !nextBtn) return;
  body.innerHTML = `<div class="onb-slide">
    <div class="onb-illus">${s.illus}</div>
    <h2 class="onb-h">${s.title}</h2>
    <p class="onb-p">${s.body}</p>
    ${s.extra || ''}
  </div>`;
  dots.innerHTML = ONB_SLIDES.map((_, i)=>
    `<button class="onb-dot ${i===_onbStep?'on':''}" onclick="onbGo(${i})" aria-label="Slide ${i+1}"></button>`
  ).join('');
  const isLast = _onbStep === ONB_SLIDES.length - 1;
  nextBtn.textContent = isLast ? '¡Empezar! ⚽' : 'Siguiente →';
}

function onbNext(){
  if(_onbStep < ONB_SLIDES.length - 1){
    _onbStep++;
    renderOnbSlide();
  } else {
    closeOnboard(false);
  }
}

function onbGo(i){
  if(i < 0 || i >= ONB_SLIDES.length) return;
  _onbStep = i;
  renderOnbSlide();
}

function closeOnboard(skipped){
  markOnboarded();
  const m = document.getElementById('onboard-modal');
  if(m) m.style.display = 'none';
  document.body.style.overflow = '';
  if(!skipped){
    toast('¡Listo! Empieza a predecir 🎯');
  }
}

// ══════════════════════════════════════════════════════
//  COMPARTIR PREDICCIÓN — genera imagen PNG y comparte
// ══════════════════════════════════════════════════════
let _shareCtx = null;

// Render del canvas con la predicción
function renderShareCanvas(opts){
  // opts: {homeName, awayName, homeFlag, awayFlag, scoreH, scoreA, username, matchLabel}
  const cv = document.getElementById('share-canvas');
  if(!cv) return null;
  const ctx = cv.getContext('2d');
  const W = cv.width, H = cv.height;
  ctx.clearRect(0,0,W,H);

  // Fondo gradiente tricolor
  const grad = ctx.createLinearGradient(0,0,W,H);
  grad.addColorStop(0, '#006838');
  grad.addColorStop(0.5, '#003087');
  grad.addColorStop(1, '#c0001a');
  ctx.fillStyle = grad;
  ctx.fillRect(0,0,W,H);

  // Capa de overlay sutil para profundidad
  const ov = ctx.createRadialGradient(W*0.7, H*0.2, 0, W*0.7, H*0.2, W*0.6);
  ov.addColorStop(0,'rgba(255,255,255,.12)');
  ov.addColorStop(1,'rgba(255,255,255,0)');
  ctx.fillStyle = ov;
  ctx.fillRect(0,0,W,H);

  ctx.textBaseline = 'middle';
  ctx.textAlign = 'center';
  ctx.fillStyle = '#fff';

  // Logo + brand
  ctx.font = '700 22px "Plus Jakarta Sans", system-ui, sans-serif';
  ctx.globalAlpha = .85;
  ctx.fillText('⚽  Al Ángulo · Mundial 2026', W/2, 60);
  ctx.globalAlpha = 1;

  // Etiqueta "MI PREDICCIÓN"
  ctx.font = '800 18px "Plus Jakarta Sans", system-ui, sans-serif';
  ctx.fillStyle = 'rgba(255,255,255,.78)';
  const tag = (opts.matchLabel || 'Mi predicción').toUpperCase();
  ctx.fillText(tag, W/2, 110);
  // Subrayado
  const tagW = ctx.measureText(tag).width;
  ctx.fillStyle = 'rgba(255,255,255,.5)';
  ctx.fillRect(W/2 - tagW/2 - 6, 128, tagW + 12, 2);

  // Banderas y nombres
  const yTeams = 280;
  const flagSize = 110;
  ctx.font = `${flagSize}px "Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji",sans-serif`;
  ctx.fillStyle = '#fff';
  ctx.fillText(opts.homeFlag || '🏳', W*0.18 + 50, yTeams);
  ctx.fillText(opts.awayFlag || '🏳', W*0.82 - 50, yTeams);

  ctx.font = '800 32px "Plus Jakarta Sans", system-ui, sans-serif';
  ctx.fillStyle = '#fff';
  ctx.fillText(opts.homeName || 'Equipo 1', W*0.18 + 50, yTeams + 95);
  ctx.fillText(opts.awayName || 'Equipo 2', W*0.82 - 50, yTeams + 95);

  // Marcador en el centro con caja
  const boxX = W/2 - 110, boxY = yTeams - 60, boxW = 220, boxH = 130;
  ctx.fillStyle = 'rgba(255,255,255,.16)';
  // rounded rect
  const r = 22;
  ctx.beginPath();
  ctx.moveTo(boxX+r, boxY);
  ctx.arcTo(boxX+boxW, boxY, boxX+boxW, boxY+boxH, r);
  ctx.arcTo(boxX+boxW, boxY+boxH, boxX, boxY+boxH, r);
  ctx.arcTo(boxX, boxY+boxH, boxX, boxY, r);
  ctx.arcTo(boxX, boxY, boxX+boxW, boxY, r);
  ctx.closePath();
  ctx.fill();
  ctx.strokeStyle = 'rgba(255,255,255,.35)';
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.font = '800 76px "Plus Jakarta Sans", system-ui, sans-serif';
  ctx.fillStyle = '#fff';
  ctx.fillText(String(opts.scoreH ?? '?'), boxX + 55, boxY + boxH/2 + 4);
  ctx.fillText(String(opts.scoreA ?? '?'), boxX + boxW - 55, boxY + boxH/2 + 4);
  ctx.fillStyle = 'rgba(255,255,255,.55)';
  ctx.font = '700 38px "Plus Jakarta Sans", system-ui, sans-serif';
  ctx.fillText('−', boxX + boxW/2, boxY + boxH/2 + 2);

  // Footer: usuario
  ctx.font = '600 18px "Plus Jakarta Sans", system-ui, sans-serif';
  ctx.fillStyle = 'rgba(255,255,255,.85)';
  ctx.fillText(`Por @${opts.username || 'usuario'}`, W/2, H - 60);
  // sub
  ctx.font = '500 14px "Plus Jakarta Sans", system-ui, sans-serif';
  ctx.fillStyle = 'rgba(255,255,255,.55)';
  ctx.fillText('alangulo.lat', W/2, H - 32);

  return cv;
}

// Lookup de equipo: nombre + bandera
function shareTeamInfo(teamCode){
  if(!teamCode) return {name:'?', flag:'🏳'};
  const name = (typeof NM !== 'undefined' && NM[teamCode]) || teamCode;
  const flag = (typeof FL !== 'undefined' && FL[teamCode]) || '🏳';
  return {name, flag};
}

function openSharePrediction(matchId){
  if(!CU) return;
  const up = picks[CU.u];
  if(!up){ toast('No tienes predicciones aún'); return; }
  const sc = up.sc?.[matchId];
  if(!sc || sc.h==null || sc.a==null){
    toast('Aún no has predicho este partido');
    return;
  }
  // Buscar info del partido (grupos o bracket)
  let homeCode = null, awayCode = null, label = 'Mi predicción';
  // Grupos: buscar en GM
  if(typeof GM !== 'undefined'){
    Object.entries(GM).forEach(([gKey, ms])=>{
      ms.forEach(m=>{
        if(m.id === matchId){ homeCode = m.h; awayCode = m.a; label = `Grupo ${gKey}`; }
      });
    });
  }
  // Bracket: usar BRACKET_FEEDS / R32 matchups o picks del usuario
  if(!homeCode || !awayCode){
    if(matchId.startsWith('r32_') && typeof buildR32Matchups === 'function'){
      try{
        const mu = buildR32Matchups();
        const m = mu[matchId];
        if(m){ homeCode = m.home; awayCode = m.away; label = 'Dieciseisavos'; }
      }catch(_){}
    } else if(typeof BRACKET_FEEDS !== 'undefined'){
      const feed = BRACKET_FEEDS[matchId];
      if(feed && up.br){
        homeCode = up.br[feed[0]];
        awayCode = up.br[feed[1]];
        const stage = matchId.split('_')[0];
        const stageLbl = {r16:'Octavos',qf:'Cuartos',sf:'Semifinal',f:'Final'}[stage] || 'Eliminatoria';
        label = stageLbl;
      }
    }
  }

  const home = shareTeamInfo(homeCode);
  const away = shareTeamInfo(awayCode);

  // Render canvas
  renderShareCanvas({
    homeName: home.name,
    awayName: away.name,
    homeFlag: home.flag,
    awayFlag: away.flag,
    scoreH: sc.h,
    scoreA: sc.a,
    username: CU.u,
    matchLabel: label,
  });

  // Guardar contexto para doShare()
  _shareCtx = {
    matchId, homeName: home.name, awayName: away.name,
    scoreH: sc.h, scoreA: sc.a, label
  };

  document.getElementById('share-modal').style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeShare(){
  const m = document.getElementById('share-modal');
  if(m) m.style.display = 'none';
  document.body.style.overflow = '';
  _shareCtx = null;
}

async function doShare(){
  const cv = document.getElementById('share-canvas');
  if(!cv) return;
  const ctx = _shareCtx || {};
  const filename = `prediccion-${ctx.matchId || 'al-angulo'}.png`;
  const shareText = ctx.scoreH != null
    ? `Mi predicción: ${ctx.homeName} ${ctx.scoreH} - ${ctx.scoreA} ${ctx.awayName} ⚽\n¿Y tú? alangulo.lat`
    : 'Mi predicción del Mundial 2026 — alangulo.lat';

  // Try Web Share API with files
  try {
    const blob = await new Promise(resolve => cv.toBlob(resolve, 'image/png'));
    if(!blob){ throw new Error('blob fallido'); }
    const file = new File([blob], filename, { type: 'image/png' });

    if(navigator.canShare && navigator.canShare({ files: [file] })){
      await navigator.share({
        files: [file],
        title: 'Mi predicción · Al Ángulo',
        text: shareText,
      });
      closeShare();
      return;
    }

    // Fallback: descargar PNG
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(()=>URL.revokeObjectURL(url), 1000);
    toast('Imagen descargada · ¡súbela donde quieras!');
    closeShare();
  } catch(e){
    if(e.name === 'AbortError'){
      // Usuario canceló el share — no hacer nada
      return;
    }
    console.error('share error:', e);
    toast('No se pudo compartir, intenta descargar');
  }
}

// Cerrar con Escape
document.addEventListener('keydown', (e)=>{
  if(e.key !== 'Escape') return;
  const sm = document.getElementById('share-modal');
  const cm = document.getElementById('compare-modal');
  const pm = document.getElementById('profile-modal');
  // El onboarding NO se cierra con Escape — el usuario debe usar Saltar / Siguiente
  if(sm && sm.style.display !== 'none'){ closeShare(); return; }
  if(cm && cm.style.display !== 'none'){ closeCompare(); return; }
  if(pm && pm.style.display !== 'none'){ closeProfile(); return; }
});

// ══════════════════════════════════════════════════════
//  STREAK — consecutive correct results
// ══════════════════════════════════════════════════════
function calcStreak(u){
  if (!results.bracket) return 0;
  const up = picks[u];
  if (!up) return 0;
  // Walk bracket matches in order: r32_0..15, r16_0..7, qf_0..3, sf_0..1, f_0
  const order = [];
  ['r32','r16','qf','sf','f'].forEach(rk => {
    const n = rk==='r32'?16:rk==='r16'?8:rk==='qf'?4:rk==='sf'?2:1;
    for(let i=0;i<n;i++) order.push(`${rk}_${i}`);
  });
  let streak = 0, best = 0;
  order.forEach(id => {
    const rr = results.bracket?.[id];
    const mw = up.br?.[id];
    if (!rr?.winner || !mw) return; // not played yet
    if (mw === rr.winner){ streak++; best = Math.max(best, streak); }
    else streak = 0;
  });
  return best; // return best streak
}

function currentStreak(u){
  // current active streak (from last match backwards)
  if (!results.bracket) return 0;
  const up = picks[u]; if (!up) return 0;
  const order = [];
  ['r32','r16','qf','sf','f'].forEach(rk=>{
    const n=rk==='r32'?16:rk==='r16'?8:rk==='qf'?4:rk==='sf'?2:1;
    for(let i=0;i<n;i++) order.push(`${rk}_${i}`);
  });
  // Walk backwards
  let streak = 0;
  for(let i = order.length-1; i >= 0; i--){
    const id = order[i];
    const rr = results.bracket?.[id];
    const mw = up.br?.[id];
    if (!rr?.winner || !mw) continue;
    if (mw === rr.winner) streak++;
    else break;
  }
  return streak;
}

// ══════════════════════════════════════════════════════
//  CHANGELOG
// ══════════════════════════════════════════════════════
let changelog = []; // [{ts, user, matchId, oldH, oldA, newH, newA, auto}]

function loadChangelog(){ changelog = JSON.parse(localStorage.getItem('q26log')||'[]'); }
function saveChangelog(){ localStorage.setItem('q26log', JSON.stringify(changelog)); }

function logChange(matchId, oldH, oldA, newH, newA, isAuto){
  loadChangelog();
  changelog.unshift({ ts: Date.now(), user: CU.u, matchId, oldH, oldA, newH, newA, auto: isAuto||false });
  if (changelog.length > 200) changelog = changelog.slice(0,200);
  saveChangelog();
}

function renderChangelog(){
  const w = document.getElementById('changelog-wrap'); if (!w) return;
  loadChangelog();
  if (!changelog.length){ w.innerHTML='<div style="color:var(--ink3);font-size:.82rem;padding:.5rem">Sin cambios registrados aún.</div>'; return; }
  let html = '<div class="changelog-list">';
  changelog.forEach(c => {
    const dt = new Date(c.ts).toLocaleString('es-MX',{day:'numeric',month:'short',hour:'2-digit',minute:'2-digit'});
    const had = (c.oldH!=null&&c.oldA!=null) ? `${c.oldH}-${c.oldA}` : '—';
    const now = `${c.newH}-${c.newA}`;
    const badge = c.auto
      ? '<span class="cl-badge cl-auto">AUTO</span>'
      : '<span class="cl-badge cl-manual">MANUAL</span>';
    html += `<div class="cl-item">
      <div class="cl-dot ${c.auto?'auto':'manual'}"></div>
      <div style="flex:1">
        <div class="cl-text"><b>${c.matchId}</b> · ${had} → <b>${now}</b>${badge}</div>
        <div class="cl-time">${dt} · por ${c.user}</div>
      </div>
    </div>`;
  });
  html += '</div>';
  w.innerHTML = html;
}

// Patch saveGRes to log changes
const _origSaveGRes = typeof saveGRes === 'function' ? saveGRes : null;

// ══════════════════════════════════════════════════════
//  EXPORT RANKING AS IMAGE (canvas)
// ══════════════════════════════════════════════════════
function exportRanking(){
  const board = buildBoard();
  const maxPts = board[0]?.total || 1;
  const rows = board.slice(0, 10);
  const W = 600, ROW = 44, PAD = 20;
  const H = PAD*2 + 60 + rows.length * ROW + 20;

  const canvas = document.createElement('canvas');
  canvas.width = W * 2; canvas.height = H * 2; // retina
  const ctx = canvas.getContext('2d');
  ctx.scale(2, 2);

  // Background
  ctx.fillStyle = '#f7f7f4';
  ctx.fillRect(0, 0, W, H);

  // Header band
  ctx.fillStyle = '#005c2e';
  ctx.fillRect(0, 0, W, 56);
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 18px sans-serif';
  ctx.fillText('⚽ Al Ángulo · Ranking', PAD, 34);
  const now = new Date().toLocaleDateString('es-MX',{day:'numeric',month:'short',hour:'2-digit',minute:'2-digit'});
  ctx.font = '11px sans-serif';
  ctx.fillStyle = 'rgba(255,255,255,.7)';
  ctx.fillText(now, PAD, 48);

  // Rows
  rows.forEach((p, i) => {
    const y = 56 + PAD/2 + i * ROW;
    const isMe = p.name === CU.u;
    ctx.fillStyle = isMe ? '#edf7f1' : i%2===0 ? '#fff' : '#fafaf8';
    ctx.fillRect(0, y, W, ROW);

    // Position
    const medals = ['🥇','🥈','🥉'];
    ctx.font = 'bold 15px sans-serif';
    ctx.fillStyle = i===0?'#a86800':i===1?'#888':i===2?'#c8875a':'#7a7a7a';
    ctx.fillText(medals[i]||`${i+1}`, PAD, y + ROW/2 + 5);

    // Name + streak
    ctx.font = isMe ? 'bold 13px sans-serif' : '13px sans-serif';
    ctx.fillStyle = '#0d0d0d';
    const streak = currentStreak(p.name);
    const streakTxt = streak >= 3 ? ` 🔥${streak}` : '';
    ctx.fillText(p.name + streakTxt, 50, y + ROW/2 + 5);

    // Points
    ctx.font = 'bold 16px sans-serif';
    ctx.fillStyle = i===0 ? '#005c2e' : '#0d0d0d';
    ctx.textAlign = 'right';
    ctx.fillText(p.total, W - PAD, y + ROW/2 + 6);
    ctx.textAlign = 'left';

    // Bar
    const barW = Math.round((W - PAD*2 - 160) * p.total / maxPts);
    ctx.fillStyle = isMe ? '#005c2e' : '#d0d0cc';
    ctx.fillRect(50, y + ROW - 5, barW, 3);
  });

  // Footer
  ctx.fillStyle = '#7a7a7a';
  ctx.font = '10px sans-serif';
  ctx.fillText('alangulo.mx', PAD, H - 6);

  // Download
  const link = document.createElement('a');
  link.download = `ranking_alangulo_${Date.now()}.png`;
  link.href = canvas.toDataURL('image/png');
  link.click();
  toast('Imagen del ranking descargada ✓');
}

function isAdminUser(u){
  // Hardcoded admin usernames always excluded
  if(u==='admin') return true;
  // Check hardcoded USERS array
  if(USERS.find(x=>x.u===u&&x.admin===true)) return true;
  // Check DB-loaded users
  if(dynUsers.find(x=>x.u===u&&x.admin===true)) return true;
  return false;
}

function buildBoard(){
  const hasReal = Object.keys(results.groups||{}).length > 0;
  if (!hasReal){
    return SIM_NAMES.map((n,i)=>({
      name: n.includes('(tú)') ? CU.u : n,
      ...SIM_PTS[i],
      isMe: n.includes('(tú)')
    })).sort((a,b)=>b.total-a.total);
  }
  return Object.keys(picks)
    .filter(u=>!isAdminUser(u))  // exclude admins
    .map(u=>{
      const sc = calcScore(u);
      return { name:u, ...sc, isMe:u===CU.u };
    }).sort((a,b)=>b.total-a.total);
}

// ══════════════════════════════════════════════════════
//  DRAWER
// ══════════════════════════════════════════════════════
function openDrawer(){
  document.getElementById('drawer').classList.add('open');
  document.getElementById('drawer-overlay').classList.add('open');
  document.body.style.overflow='hidden';
}
function closeDrawer(){
  document.getElementById('drawer').classList.remove('open');
  document.getElementById('drawer-overlay').classList.remove('open');
  document.body.style.overflow='';
}
function goDrawer(name){
  closeDrawer();
  go(name);
}
function syncDrawer(){
  const code=CU?.code||genCode(CU?.u||'');
  const dv=document.getElementById('drawer-code-val');
  if(dv) dv.textContent=code;
  // sync dark label
  const isDark=document.body.classList.contains('dark');
  const icon=document.getElementById('drawer-dark-icon');
  const label=document.getElementById('drawer-dark-label');
  if(icon)  icon.textContent  = isDark?'☀️':'🌙';
  if(label) label.textContent = isDark?'Modo claro':'Modo oscuro';
  // show admin item in drawer if admin
  if(CU?.admin) document.querySelectorAll('.drawer-admin-item').forEach(e=>e.style.display='');
  // show main nav in drawer on mobile
  const isMobile=window.innerWidth<=768;
  document.querySelectorAll('.drawer-mobile-nav').forEach(e=>e.style.display=isMobile?'':'none');
}

// ══════════════════════════════════════════════════════
//  DARK MODE
// ══════════════════════════════════════════════════════
function toggleDark(){
  const isDark=document.body.classList.toggle('dark');
  localStorage.setItem('q26dark', isDark?'1':'0');
  document.getElementById('dark-btn') && (document.getElementById('dark-btn').textContent = isDark?'☀️ Claro':'🌙 Oscuro');
  syncDrawer();
}
function initDark(){
  // 1) Si el usuario ya eligió un tema, respeta su elección
  const saved = localStorage.getItem('q26dark');
  if(saved === '1'){
    document.body.classList.add('dark');
    return;
  }
  if(saved === '0'){
    document.body.classList.remove('dark');
    return;
  }
  // 2) Si no hay preferencia guardada, sigue al sistema
  if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches){
    document.body.classList.add('dark');
  }
  // 3) Escuchar cambios del sistema mientras NO haya elección manual
  if(window.matchMedia){
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (e)=>{
      // Solo aplicar si el usuario sigue sin elegir manualmente
      if(localStorage.getItem('q26dark') !== null) return;
      if(e.matches) document.body.classList.add('dark');
      else document.body.classList.remove('dark');
    };
    if(mq.addEventListener) mq.addEventListener('change', handler);
    else if(mq.addListener) mq.addListener(handler);
  }
}

// ══════════════════════════════════════════════════════
//  MI QUINIELA — predicción vs realidad
// ══════════════════════════════════════════════════════
let mqFilter = 'all'; // all | correct | exact | wrong | pending
let mqStage  = 'all'; // all | grupos | r32 | r16 | qf | sf | f
let mqGroup  = 'all'; // all | A | B | C | D | E | F | G | H | I | J | K | L

function renderMiQuiniela(){
  const wrap = document.getElementById('mq-wrap');
  const sumEl = document.getElementById('mq-summary');
  const statsEl = document.getElementById('mq-stats-wrap');
  const up = picks[CU.u];
  if (!up){ wrap.innerHTML='<div style="padding:2rem;text-align:center;color:var(--ink3)">Sin predicciones guardadas aún.</div>'; return; }

  // ── Build full match list with comparison ──
  const allMatches = [];

  // Group stage matches
  Object.entries(GM).forEach(([g, ms]) => {
    ms.forEach(m => {
      const myScore = up.sc?.[m.id];
      const realScore = results.sc?.[m.id];
      let status = 'pending';
      let pts = 0;
      if (myScore != null && realScore != null){
        const rh=+realScore.h, ra=+realScore.a, mh=+myScore.h, ma=+myScore.a;
        const rRes = rh>ra?'H':rh<ra?'A':'D';
        const mRes = mh>ma?'H':mh<ma?'A':'D';
        const isExact = rh===mh && ra===ma;
        const isCorrect = rRes===mRes;
        if (isExact){ status='exact'; pts=PTS.grpResult+PTS.grpExact; }
        else if (isCorrect){ status='correct'; pts=PTS.grpResult; }
        else { status='wrong'; pts=0; }
      }
      allMatches.push({
        id:m.id, label:`${NM[m.h]||m.h} vs ${NM[m.a]||m.a}`,
        flags:`${FL[m.h]||'🏳'} ${FL[m.a]||'🏳'}`,
        myScore, realScore, status, pts, phase:'grupos', group:g
      });
    });
  });

  // Elimination matches
  const elimRounds=[
    {key:'r32',name:'Dieciseisavos',cls:'rnd-r32'},
    {key:'r16',name:'Octavos',cls:'rnd-r16'},
    {key:'qf', name:'Cuartos',cls:'rnd-qf'},
    {key:'sf', name:'Semis',cls:'rnd-sf'},
    {key:'f',  name:'Final',cls:'rnd-f'},
  ];
  const mu = buildR32Matchups();
  elimRounds.forEach(({key,name,cls}) => {
    const n = key==='r32'?16:key==='r16'?8:key==='qf'?4:key==='sf'?2:1;
    for(let i=0; i<n; i++){
      const id = `${key}_${i}`;
      const rr = results.bracket?.[id];
      const myWinner = up.br?.[id];
      let status = 'pending', pts = 0;
      const [winPts, exactBonus] = PTS[key]||[0,0];
      if (myWinner && rr?.winner){
        if (myWinner === rr.winner){
          pts = winPts;
          const ms = up.sc?.[id];
          if (ms && +ms.h===rr.h && +ms.a===rr.a){ status='exact'; pts+=exactBonus; }
          else status='correct';
        } else status='wrong';
      }
      // Get team names from matchup
      let homeTeam=null, awayTeam=null;
      if(key==='r32'){const m=mu[id];homeTeam=m?.home;awayTeam=m?.away;}
      else{
        const feed=BRACKET_FEEDS[id];
        if(feed){homeTeam=up.br?.[feed[0]]||null;awayTeam=up.br?.[feed[1]]||null;}
      }
      allMatches.push({
        id, label: myWinner?(NM[myWinner]||myWinner):`Partido ${id}`,
        flags: myWinner?FL[myWinner]||'⚽':'❓',
        myScore: myWinner?{winner:myWinner}:null,
        myBrScore: up.sc?.[id]||null,
        realScore: rr||null, status, pts,
        phase:'elim', round:key, roundName:name, roundCls:cls,
        myWinner, realWinner:rr?.winner
      });
    }
  });

  // ── Stats ──
  const played = allMatches.filter(m=>m.status!=='pending');
  const exact  = allMatches.filter(m=>m.status==='exact');
  const correct= allMatches.filter(m=>m.status==='correct'||m.status==='exact');
  const wrong  = allMatches.filter(m=>m.status==='wrong');
  const pending= allMatches.filter(m=>m.status==='pending');
  const totalPts = allMatches.reduce((s,m)=>s+m.pts,0);

  // Stats grid en el hero
  if(statsEl){
    statsEl.style.display = 'grid';
    statsEl.innerHTML = `
      <div class="mq-stat pts"><div class="mq-stat-icon">⭐</div><div class="mq-stat-num">${totalPts}</div><div class="mq-stat-label">Total</div></div>
      <div class="mq-stat correct"><div class="mq-stat-icon">✅</div><div class="mq-stat-num">${correct.length}</div><div class="mq-stat-label">Correctos</div></div>
      <div class="mq-stat exact"><div class="mq-stat-icon">🎯</div><div class="mq-stat-num">${exact.length}</div><div class="mq-stat-label">Exactos</div></div>
      <div class="mq-stat wrong"><div class="mq-stat-icon">❌</div><div class="mq-stat-num">${wrong.length}</div><div class="mq-stat-label">Fallados</div></div>
      <div class="mq-stat pending"><div class="mq-stat-icon">⏳</div><div class="mq-stat-num">${pending.length}</div><div class="mq-stat-label">Pendientes</div></div>`;
  }
  // Sticky pts
  const stkPts = document.getElementById('mq-sticky-pts');
  if(stkPts) stkPts.textContent = `${totalPts} pts`;
  // sumEl está oculto pero lo mantenemos por compatibilidad
  if(sumEl) sumEl.innerHTML = '';

  // ── Filters ──
  let html = `
    <div class="mq-filters">
      <div class="mq-filter">
        <button class="mq-f-btn ${mqFilter==='all'?'active':''}"    onclick="setMqFilter('all')">Todos<span class="mq-f-count">${allMatches.length}</span></button>
        <button class="mq-f-btn ${mqFilter==='exact'?'active':''}"  onclick="setMqFilter('exact')">🎯 Exactos<span class="mq-f-count">${exact.length}</span></button>
        <button class="mq-f-btn ${mqFilter==='correct'?'active':''}" onclick="setMqFilter('correct')">✅ Correctos<span class="mq-f-count">${correct.length}</span></button>
        <button class="mq-f-btn ${mqFilter==='wrong'?'active':''}"  onclick="setMqFilter('wrong')">❌ Fallados<span class="mq-f-count">${wrong.length}</span></button>
        <button class="mq-f-btn ${mqFilter==='pending'?'active':''}" onclick="setMqFilter('pending')">⏳ Pendientes<span class="mq-f-count">${pending.length}</span></button>
      </div>
      <div class="mq-filter">
        <button class="mq-f-btn ${mqStage==='all'?'active':''}"    onclick="setMqStage('all')">Todas las etapas</button>
        <button class="mq-f-btn ${mqStage==='grupos'?'active':''}" onclick="setMqStage('grupos')">Grupos</button>
        <button class="mq-f-btn ${mqStage==='r32'?'active':''}"   onclick="setMqStage('r32')">D16</button>
        <button class="mq-f-btn ${mqStage==='r16'?'active':''}"   onclick="setMqStage('r16')">Octavos</button>
        <button class="mq-f-btn ${mqStage==='qf'?'active':''}"    onclick="setMqStage('qf')">Cuartos</button>
        <button class="mq-f-btn ${mqStage==='sf'?'active':''}"    onclick="setMqStage('sf')">Semis</button>
        <button class="mq-f-btn ${mqStage==='f'?'active':''}"     onclick="setMqStage('f')">Final</button>
      </div>
      ${mqStage==='grupos'?`<div class="mq-filter">
        <button class="mq-f-btn ${mqGroup==='all'?'active':''}" onclick="setMqGroup('all')">Todos</button>
        ${'ABCDEFGHIJKL'.split('').map(g=>`<button class="mq-f-btn ${mqGroup===g?'active':''}" onclick="setMqGroup('${g}')">Grupo ${g}</button>`).join('')}
      </div>`:''}
    </div>`;

  // ── Group sections ──
  let sectionIdx = 0;
  const groupMatches = allMatches.filter(m=>m.phase==='grupos');
  const groupPts = groupMatches.reduce((s,m)=>s+m.pts,0);
  const showGroups = mqStage==='all'||mqStage==='grupos';
  const filteredGroup = groupMatches.filter(m=>
    (mqFilter==='all'||m.status===mqFilter||(mqFilter==='correct'&&(m.status==='correct'||m.status==='exact'))) &&
    (mqGroup==='all'||m.group===mqGroup)
  );

  if(showGroups && filteredGroup.length){
    html+=`<div class="mq-section mq-reveal" style="--mqs-i:${sectionIdx++}">
      <div class="mq-section-hd">
        <div class="mq-section-name">Fase de Grupos</div>
        <div class="mq-section-pts ${groupPts===0?'zero':''}">${groupPts > 0 ? '+' : ''}${groupPts} pts</div>
      </div>
      <div class="mq-row-h">
        <div>Partido</div>
        <div class="h-c">Tu pred.</div>
        <div class="h-c">Real</div>
        <div class="h-c"></div>
      </div>`;
    filteredGroup.forEach(m=>{
      const myTxt = m.myScore ? `${m.myScore.h}-${m.myScore.a}` : '—';
      const realTxt = m.realScore ? `${m.realScore.h}-${m.realScore.a}` : '?';
      const realCls = m.realScore ? '' : 'mq-score-pending';
      const icon = m.status==='exact'?'🎯':m.status==='correct'?'✅':m.status==='wrong'?'❌':'⏳';
      const ptsBadge = m.pts>0 ? `<span class="mq-pts-badge">+${m.pts}</span>` : '';
      html+=`<div class="mq-row ${m.status}">
        <div class="mq-match-name">
          <span class="mq-match-flags">${m.flags}</span>
          <span class="mq-match-text">${escHtml(m.label)}</span>
        </div>
        <div class="mq-score mq-score-mine">${myTxt}</div>
        <div class="mq-score mq-score-real ${realCls}">${realTxt}</div>
        <div class="mq-result-icon">${icon}${ptsBadge}</div>
      </div>`;
    });
    html+=`</div>`;
  }

  // Elimination stage
  elimRounds.forEach(({key,name,cls})=>{
    const showRound = mqStage==='all'||mqStage===key;
    if(!showRound) return;
    const rndMatches = allMatches.filter(m=>m.phase==='elim'&&m.round===key);
    const filtered = rndMatches.filter(m=>mqFilter==='all'||m.status===mqFilter||(mqFilter==='correct'&&(m.status==='correct'||m.status==='exact')));
    if(!filtered.length) return;
    const rndPts = rndMatches.reduce((s,m)=>s+m.pts,0);
    html+=`<div class="mq-section mq-reveal" style="--mqs-i:${sectionIdx++}">
      <div class="mq-section-hd">
        <div class="mq-section-name">${name}</div>
        <div class="mq-section-pts ${rndPts===0?'zero':''}">${rndPts > 0 ? '+' : ''}${rndPts} pts</div>
      </div>
      <div class="mq-row-h">
        <div>Tu pick</div>
        <div class="h-c">Tu pred.</div>
        <div class="h-c">Real</div>
        <div class="h-c"></div>
      </div>`;
    filtered.forEach(m=>{
      const myTxt = m.myWinner
        ? `${FL[m.myWinner]||'🏳'}${m.myBrScore!=null&&m.myBrScore.h!=null?` ${m.myBrScore.h}-${m.myBrScore.a}`:''}`
        : '—';
      const realTxt = m.realWinner
        ? `${FL[m.realWinner]||'🏳'}${m.realScore?.h!=null?` ${m.realScore.h}-${m.realScore.a}`:''}`
        : '?';
      const realCls = m.realWinner ? '' : 'mq-score-pending';
      const icon = m.status==='exact'?'🎯':m.status==='correct'?'✅':m.status==='wrong'?'❌':'⏳';
      const ptsBadge = m.pts>0 ? `<span class="mq-pts-badge">+${m.pts}</span>` : '';
      html+=`<div class="mq-row ${m.status}">
        <div class="mq-match-name">
          <span class="mq-match-text">${m.id} <span class="mq-elim-rnd ${cls}">${name}</span></span>
        </div>
        <div class="mq-score mq-score-mine" style="font-size:.78rem">${myTxt}</div>
        <div class="mq-score mq-score-real ${realCls}" style="font-size:.78rem">${realTxt}</div>
        <div class="mq-result-icon">${icon}${ptsBadge}</div>
      </div>`;
    });
    html+=`</div>`;
  });

  if(!filteredGroup.length && !elimRounds.some(r=>allMatches.find(m=>m.phase==='elim'&&m.round===r.key&&(mqFilter==='all'||m.status===mqFilter||(mqFilter==='correct'&&(m.status==='correct'||m.status==='exact')))))){
    html += `<div style="text-align:center;padding:2.5rem 1rem;display:flex;flex-direction:column;align-items:center;gap:.5rem">
      <div style="font-size:2.5rem">🔍</div>
      <div style="font-weight:700;font-size:.9rem;color:var(--ink)">Sin partidos con ese filtro</div>
      <div style="font-size:.78rem;color:var(--ink3)">Prueba cambiando los filtros</div>
    </div>`;
  }

  wrap.innerHTML = html;
  observeMqSections();
}

let _mqSectionObserver = null;
function observeMqSections(){
  if(_mqSectionObserver) _mqSectionObserver.disconnect();
  const sections = document.querySelectorAll('#mq-wrap .mq-section.mq-reveal');
  if(!sections.length) return;
  if(!('IntersectionObserver' in window)){
    sections.forEach(s=>s.classList.add('show'));
    return;
  }
  _mqSectionObserver = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('show');
        _mqSectionObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.06, rootMargin: '0px 0px -5% 0px' });
  sections.forEach(s=>{
    const rect = s.getBoundingClientRect();
    if(rect.top < window.innerHeight * 0.95) s.classList.add('show');
    else _mqSectionObserver.observe(s);
  });
}

function setMqFilter(f){ mqFilter=f; renderMiQuiniela(); }
function setMqStage(s){ mqStage=s; mqGroup='all'; renderMiQuiniela(); }
function setMqGroup(g){ mqGroup=g; renderMiQuiniela(); }

// ══════════════════════════════════════════════════════
//  NAV
// ══════════════════════════════════════════════════════
function exportBracketPDF(){
  const btn = document.querySelector('[onclick="exportBracketPDF()"]');
  const original = btn.textContent;
  btn.textContent = 'Generando...';
  btn.disabled = true;

  // Load libs dynamically
  function loadScript(src, cb){
    const s = document.createElement('script');
    s.src = src; s.onload = cb; document.head.appendChild(s);
  }

  function doExport(){
    const el = document.querySelector('.br-outer');
    if(!el){ toast('No se encontró el bracket'); btn.textContent=original; btn.disabled=false; return; }

    html2canvas(el, {
      scale: 2,
      backgroundColor: getComputedStyle(document.body).getPropertyValue('--bg') || '#f2f4f8',
      useCORS: true,
      logging: false,
    }).then(canvas => {
      const { jsPDF } = window.jspdf;
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({ orientation:'landscape', unit:'px', format:[canvas.width/2, canvas.height/2] });
      pdf.addImage(imgData, 'PNG', 0, 0, canvas.width/2, canvas.height/2);
      pdf.save(`bracket_alangulo_${CU.u}_${Date.now()}.pdf`);
      btn.textContent = original;
      btn.disabled = false;
      toast('PDF descargado ✓');
    }).catch(()=>{
      toast('Error al generar el PDF');
      btn.textContent = original;
      btn.disabled = false;
    });
  }

  if(window.html2canvas && window.jspdf){
    doExport();
  } else {
    loadScript('https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js', ()=>{
      loadScript('https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js', doExport);
    });
  }
}

// ══════════════════════════════════════════════════════
//  FIXTURE
// ══════════════════════════════════════════════════════

// ══════════════════════════════════════════════════════
//  CUENTA REGRESIVA
// ══════════════════════════════════════════════════════
let _cdTimer=null;
function renderCountdown(){
  const wrap=document.getElementById('countdown-wrap');
  if(!wrap) return;
  if(_cdTimer) clearInterval(_cdTimer);

  const TARGET=new Date('2026-06-11T13:00:00-06:00');

  // Add keyframes once
  if(!document.getElementById('cd-styles')){
    const s=document.createElement('style');s.id='cd-styles';
    s.textContent=`
      @keyframes cdPulse{0%,100%{transform:scale(1)}50%{transform:scale(1.04)}}
      @keyframes cdTick{0%{transform:translateY(-8px);opacity:0}100%{transform:translateY(0);opacity:1}}
      .cd-block{background:rgba(255,255,255,.12);backdrop-filter:blur(8px);border:1px solid rgba(255,255,255,.2);border-radius:12px;padding:.875rem .5rem;text-align:center;min-width:56px;flex:1}
      .cd-num{font-family:'Plus Jakarta Sans',sans-serif;font-weight:800;font-size:clamp(1.8rem,7vw,3rem);line-height:1;color:#fff;letter-spacing:-1px}
      .cd-num.tick{animation:cdTick .18s ease-out}
      .cd-label{font-size:.55rem;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;opacity:.75;color:#fff;margin-top:6px}
      .cd-sep{font-size:1.8rem;font-weight:800;color:rgba(255,255,255,.5);align-self:center;margin-bottom:6px;animation:cdPulse 1s ease-in-out infinite}
    `;
    document.head.appendChild(s);
  }

  let prev={d:-1,h:-1,m:-1,s:-1};

  function update(){
    const now=new Date();
    const diff=TARGET-now;
    if(diff<=0){
      wrap.innerHTML=`<div style="text-align:center;padding:4rem 2rem;font-weight:800;font-size:2rem;background:var(--grad-tri);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text">¡El Mundial ya comenzó! ⚽🌍</div>`;
      clearInterval(_cdTimer);return;
    }
    const days=Math.floor(diff/86400000);
    const hrs=Math.floor((diff%86400000)/3600000);
    const mins=Math.floor((diff%3600000)/60000);
    const secs=Math.floor((diff%60000)/1000);
    const cur={d:days,h:hrs,m:mins,s:secs};

    // First render — build full HTML
    if(prev.s===-1){
      wrap.innerHTML=`
      <div style="display:flex;flex-direction:column;align-items:center;gap:1.5rem;max-width:600px;margin:0 auto">
        <div style="background:var(--grad-tri);border-radius:24px;padding:1.5rem 1.25rem 1.25rem;width:100%;position:relative;overflow:hidden;box-shadow:0 12px 32px rgba(0,0,0,.25)">
          <div style="position:absolute;inset:0;background:radial-gradient(ellipse at 20% 120%,rgba(255,255,255,.15),transparent 55%),radial-gradient(ellipse at 80% -20%,rgba(255,255,255,.1),transparent 55%)"></div>
          <div style="position:relative;z-index:1">
            <div style="font-size:.68rem;font-weight:700;letter-spacing:3px;opacity:.8;margin-bottom:1.5rem;text-transform:uppercase;text-align:center;color:#fff">⚽ El Mundial comienza en</div>
            <div style="display:flex;align-items:flex-start;justify-content:center;gap:.5rem">
              <div class="cd-block"><div class="cd-num" id="cd-d">${String(days).padStart(2,'0')}</div><div class="cd-label">Días</div></div>
              <div class="cd-sep">:</div>
              <div class="cd-block"><div class="cd-num" id="cd-h">${String(hrs).padStart(2,'0')}</div><div class="cd-label">Horas</div></div>
              <div class="cd-sep">:</div>
              <div class="cd-block"><div class="cd-num" id="cd-m">${String(mins).padStart(2,'0')}</div><div class="cd-label">Min</div></div>
              <div class="cd-sep">:</div>
              <div class="cd-block"><div class="cd-num" id="cd-s">${String(secs).padStart(2,'0')}</div><div class="cd-label">Seg</div></div>
            </div>
          </div>
        </div>
        <div style="background:var(--surface);border:1.5px solid var(--border);border-radius:20px;padding:1.1rem 1.25rem;width:100%;box-shadow:var(--sh2);display:flex;align-items:center;justify-content:space-between;gap:.75rem">
          <div style="text-align:center;flex:1">
            <div style="font-size:2.5rem;line-height:1;margin-bottom:6px">🇲🇽</div>
            <div style="font-weight:800;font-size:1rem;color:var(--ink)">México</div>
            <div style="font-size:.7rem;color:var(--ink3);margin-top:2px">Local</div>
          </div>
          <div style="text-align:center;flex-shrink:0">
            <div style="background:var(--grad-tri);border-radius:12px;padding:8px 20px;color:#fff;font-weight:800;font-size:1.1rem;margin-bottom:6px">VS</div>
            <div style="font-size:.65rem;color:var(--ink3);font-weight:600;letter-spacing:.5px">PARTIDO 1 · M1</div>
          </div>
          <div style="text-align:center;flex:1">
            <div style="font-size:2.5rem;line-height:1;margin-bottom:6px">🇿🇦</div>
            <div style="font-weight:800;font-size:1rem;color:var(--ink)">Sudáfrica</div>
            <div style="font-size:.7rem;color:var(--ink3);margin-top:2px">Visitante</div>
          </div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:.75rem;width:100%">
          ${[{icon:'📅',label:'Fecha',val:'11 jun 2026'},{icon:'🕐',label:'Hora CDMX',val:'13:00'},{icon:'🏟',label:'Estadio',val:'Azteca, CDMX'}]
            .map(c=>`<div style="background:var(--surface);border:1.5px solid var(--border);border-radius:var(--rad);padding:1rem;text-align:center;box-shadow:var(--sh)">
              <div style="font-size:1.4rem;margin-bottom:5px">${c.icon}</div>
              <div style="font-size:.6rem;color:var(--ink3);text-transform:uppercase;letter-spacing:1px;margin-bottom:4px">${c.label}</div>
              <div style="font-weight:800;font-size:.82rem;color:var(--ink)">${c.val}</div>
            </div>`).join('')}
        </div>
      </div>`;
    } else {
      // Subsequent ticks — only update changed numbers
      const keys={d:'cd-d',h:'cd-h',m:'cd-m',s:'cd-s'};
      const vals={d:days,h:hrs,m:mins,s:secs};
      Object.entries(vals).forEach(([k,v])=>{
        if(v!==prev[k]){
          const el=document.getElementById(keys[k]);
          if(el){
            el.classList.remove('tick');
            el.offsetWidth; // reflow
            el.textContent=String(v).padStart(2,'0');
            el.classList.add('tick');
          }
        }
      });
    }
    prev=cur;
  }
  update();
  _cdTimer=setInterval(update,1000);
}
// ── AUTO-REFRESH ──
let _autoRefreshInterval = null;

function startAutoRefresh(page){
  stopAutoRefresh();
  if(page === 'ranking'){
    _autoRefreshInterval = setInterval(()=>{
      const cur = localStorage.getItem('q26page');
      if(cur === 'ranking') renderRanking();
    }, 2 * 60 * 1000); // cada 2 minutos
  }
}

function stopAutoRefresh(){
  if(_autoRefreshInterval){ clearInterval(_autoRefreshInterval); _autoRefreshInterval=null; }
}

function go(name){
  // Transición de fade entre páginas (#7)
  const currentPage = document.querySelector('.page.on');
  if(currentPage && localStorage.getItem('q26page') !== name){
    currentPage.classList.add('page-fading-out');
    setTimeout(()=>{
      currentPage.classList.remove('page-fading-out');
      _doNavigate(name);
    }, 140);
    return;
  }
  _doNavigate(name);
}

function _doNavigate(name){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('on'));
  document.querySelectorAll('.ntab').forEach(t=>t.classList.remove('on'));
  // Stop wall polling when leaving chat
  if(localStorage.getItem('q26page')==='chat' && name!=='chat') stopWallPolling();
  const pg=document.getElementById(`page-${name}`);
  if(pg){
    pg.classList.add('on');
    pg.classList.add('page-fading-in');
    setTimeout(()=>pg.classList.remove('page-fading-in'), 320);
  }
  const tab=document.querySelector(`[data-p="${name}"]`);
  if(tab) tab.classList.add('on');
  if(name==='ranking')        { renderRanking(); renderRankingHistory(); setupRankingSticky(); }
  if(name==='stats')          { renderStats(); setupStatsSticky(); }
  if(name==='bracket')        { renderBracket(); setupBracketSticky(); }
  if(name==='admin')          renderAdmin();
  if(name==='premios')        renderPremios();
  if(name==='reglas')         { renderReglas(); setupRulesSticky(); }
  if(name==='chat')           { renderChat(); startWallPolling(); setupWallSticky(); }
  if(name==='miquiniela')     { renderMiQuiniela(); setupMqSticky(); }
  if(name==='misgrupos')      renderMisGrupos();
  if(name==='referidos')      renderReferidos();
  if(name==='countdown')      renderCountdown();
  if(name==='inicio')         renderInicio();
  if(name==='grupos')         { renderGroups(); setupGruposSticky(); }
  document.getElementById('fab').classList.toggle('vis',name==='grupos'||name==='bracket');
  localStorage.setItem('q26page', name);
  startAutoRefresh(name);
  // Reset scroll al cambiar de página
  try { window.scrollTo({top:0,behavior:'instant'}); } catch(_){ window.scrollTo(0,0); }
}

// Sticky compact header en grupos cuando el hero sale del viewport
let _gruposScrollHandler = null;
function setupGruposSticky(){
  const hero = document.querySelector('#page-grupos .grp-hero');
  const sticky = document.getElementById('grp-sticky');
  if(!hero || !sticky) return;
  // Limpiar handler anterior si existía
  if(_gruposScrollHandler) window.removeEventListener('scroll', _gruposScrollHandler);
  _gruposScrollHandler = ()=>{
    if(localStorage.getItem('q26page') !== 'grupos'){
      sticky.classList.remove('show');
      return;
    }
    const rect = hero.getBoundingClientRect();
    // Mostrar el sticky cuando el hero ya casi sale del viewport
    if(rect.bottom < 110) sticky.classList.add('show');
    else sticky.classList.remove('show');
  };
  window.addEventListener('scroll', _gruposScrollHandler, { passive: true });
  _gruposScrollHandler();
}

let _bracketScrollHandler = null;
function setupBracketSticky(){
  const hero = document.querySelector('#page-bracket .br-page-hero');
  const sticky = document.getElementById('br-sticky');
  if(!hero || !sticky) return;
  if(_bracketScrollHandler) window.removeEventListener('scroll', _bracketScrollHandler);
  _bracketScrollHandler = ()=>{
    if(localStorage.getItem('q26page') !== 'bracket'){
      sticky.classList.remove('show');
      return;
    }
    const rect = hero.getBoundingClientRect();
    if(rect.bottom < 110) sticky.classList.add('show');
    else sticky.classList.remove('show');
  };
  window.addEventListener('scroll', _bracketScrollHandler, { passive: true });
  _bracketScrollHandler();
}

let _rankingScrollHandler = null;
function setupRankingSticky(){
  const hero = document.querySelector('#page-ranking .rk-page-hero');
  const sticky = document.getElementById('rk-sticky');
  if(!hero || !sticky) return;
  if(_rankingScrollHandler) window.removeEventListener('scroll', _rankingScrollHandler);
  _rankingScrollHandler = ()=>{
    if(localStorage.getItem('q26page') !== 'ranking'){
      sticky.classList.remove('show');
      return;
    }
    const rect = hero.getBoundingClientRect();
    if(rect.bottom < 110) sticky.classList.add('show');
    else sticky.classList.remove('show');
  };
  window.addEventListener('scroll', _rankingScrollHandler, { passive: true });
  _rankingScrollHandler();
}

let _mqScrollHandler = null;
function setupMqSticky(){
  const hero = document.querySelector('#page-miquiniela .mq-page-hero');
  const sticky = document.getElementById('mq-sticky');
  if(!hero || !sticky) return;
  if(_mqScrollHandler) window.removeEventListener('scroll', _mqScrollHandler);
  _mqScrollHandler = ()=>{
    if(localStorage.getItem('q26page') !== 'miquiniela'){
      sticky.classList.remove('show');
      return;
    }
    const rect = hero.getBoundingClientRect();
    if(rect.bottom < 110) sticky.classList.add('show');
    else sticky.classList.remove('show');
  };
  window.addEventListener('scroll', _mqScrollHandler, { passive: true });
  _mqScrollHandler();
}

let _wallScrollHandler = null;
function setupWallSticky(){
  const hero = document.querySelector('#page-chat .wp-page-hero');
  const sticky = document.getElementById('wp-sticky');
  if(!hero || !sticky) return;
  if(_wallScrollHandler) window.removeEventListener('scroll', _wallScrollHandler);
  _wallScrollHandler = ()=>{
    if(localStorage.getItem('q26page') !== 'chat'){
      sticky.classList.remove('show');
      return;
    }
    const rect = hero.getBoundingClientRect();
    if(rect.bottom < 110) sticky.classList.add('show');
    else sticky.classList.remove('show');
  };
  window.addEventListener('scroll', _wallScrollHandler, { passive: true });
  _wallScrollHandler();
}

let _rulesScrollHandler = null;
function setupRulesSticky(){
  const hero = document.querySelector('#page-reglas .rg-page-hero');
  const sticky = document.getElementById('rg-sticky');
  if(!hero || !sticky) return;
  if(_rulesScrollHandler) window.removeEventListener('scroll', _rulesScrollHandler);
  _rulesScrollHandler = ()=>{
    if(localStorage.getItem('q26page') !== 'reglas'){
      sticky.classList.remove('show');
      return;
    }
    const rect = hero.getBoundingClientRect();
    if(rect.bottom < 110) sticky.classList.add('show');
    else sticky.classList.remove('show');
  };
  window.addEventListener('scroll', _rulesScrollHandler, { passive: true });
  _rulesScrollHandler();
}

let _statsScrollHandler = null;
function setupStatsSticky(){
  const hero = document.querySelector('#page-stats .st-page-hero');
  const sticky = document.getElementById('st-sticky');
  if(!hero || !sticky) return;
  if(_statsScrollHandler) window.removeEventListener('scroll', _statsScrollHandler);
  _statsScrollHandler = ()=>{
    if(localStorage.getItem('q26page') !== 'stats'){
      sticky.classList.remove('show');
      return;
    }
    const rect = hero.getBoundingClientRect();
    if(rect.bottom < 110) sticky.classList.add('show');
    else sticky.classList.remove('show');
  };
  window.addEventListener('scroll', _statsScrollHandler, { passive: true });
  _statsScrollHandler();
}

// ══════════════════════════════════════════════════════
//  TOAST
// ══════════════════════════════════════════════════════
function toast(msg){
  const t=document.getElementById('toast');t.textContent=msg;t.classList.add('show');
  clearTimeout(t._t);t._t=setTimeout(()=>t.classList.remove('show'),2500);
}

// ══════════════════════════════════════════════════════
//  LOGO — portería + balón al ángulo
// ══════════════════════════════════════════════════════
function drawLogoShape(ctx, s){
  const cut=s*0.22, r=s*0.14;
  const p=new Path2D();
  p.moveTo(r,0);p.lineTo(s-r,0);
  p.arcTo(s,0,s,r,r);p.lineTo(s,s-r);
  p.arcTo(s,s,s-r,s,r);p.lineTo(cut,s);
  p.lineTo(0,s-cut);p.lineTo(0,r);
  p.arcTo(0,0,r,0,r);p.closePath();
  return p;
}

function drawLogoFull(ctx, s, opts){
  const o=Object.assign({shapeAlpha:1,travProg:1,postProg:1,dotScale:1},opts);
  const path=drawLogoShape(ctx,s);
  const grad=ctx.createLinearGradient(0,0,s,s);
  grad.addColorStop(0,'#006838');grad.addColorStop(0.45,'#003087');grad.addColorStop(1,'#9b0020');
  ctx.globalAlpha=o.shapeAlpha;ctx.fillStyle=grad;ctx.fill(path);ctx.globalAlpha=1;

  const sw=s*0.095, br=s*0.085, pad=s*0.27;
  const tx1=pad,tx2=s-pad,ty=pad;
  const px=pad,py1=ty+sw*0.5,py2=s-pad-br*0.5;
  const bx=s-pad,by=s-pad;
  const hLen=tx2-tx1,vLen=py2-py1;

  ctx.save();ctx.clip(path);ctx.lineCap='round';ctx.strokeStyle='#fff';ctx.lineWidth=sw;
  if(o.travProg>0){
    ctx.beginPath();ctx.moveTo(tx1,ty);ctx.lineTo(tx1+hLen*o.travProg,ty);ctx.stroke();
  }
  if(o.postProg>0){
    ctx.beginPath();ctx.moveTo(px,py1);ctx.lineTo(px,py1+vLen*o.postProg);ctx.stroke();
  }
  if(o.dotScale>0){
    const r2=br*o.dotScale;
    ctx.beginPath();ctx.arc(bx,by,r2,0,Math.PI*2);ctx.fillStyle='#fff';ctx.fill();
    if(o.dotScale>0.5){
      const a=Math.min(1,(o.dotScale-0.5)/0.5);
      ctx.beginPath();ctx.arc(bx,by,r2*0.48,0,Math.PI*2);
      ctx.strokeStyle=`rgba(0,0,0,${0.13*a})`;ctx.lineWidth=r2*0.25;ctx.stroke();
    }
  }
  ctx.restore();
}

function drawStaticLogo(canvas, size){
  canvas.width=size;canvas.height=size;
  const ctx=canvas.getContext('2d');
  ctx.clearRect(0,0,size,size);
  drawLogoFull(ctx,size,{shapeAlpha:1,travProg:1,postProg:1,dotScale:1});
}

function easeOut3L(t){return 1-Math.pow(1-t,3);}
function easeElasticL(t){
  if(t<=0)return 0;if(t>=1)return 1;
  return Math.pow(2,-10*t)*Math.sin((t*10-0.75)*(2*Math.PI)/3)+1;
}
function easeBounceSh(t){
  const c4=(2*Math.PI)/3;
  if(t<=0)return 0;if(t>=1)return 1;
  return Math.pow(2,-8*(t-1))*Math.sin(((t-1)*10-0.75)*c4)+1;
}

function animateLogo(canvas, size, onDone){
  canvas.width=size;canvas.height=size;
  const ctx=canvas.getContext('2d');
  const T_SH=[80,340],T_TR=[300,380],T_PO=[640,440],T_BA=[1060,400];
  const T_TOT=1060+400+200;
  const path=drawLogoShape(ctx,size);
  const grad=ctx.createLinearGradient(0,0,size,size);
  grad.addColorStop(0,'#006838');grad.addColorStop(0.45,'#003087');grad.addColorStop(1,'#9b0020');
  const sw=size*0.095,br=size*0.085,pad=size*0.27;
  const tx1=pad,tx2=size-pad,ty=pad;
  const px=pad,py1=ty+sw*0.5,py2=size-pad-br*0.5;
  const bx=size-pad,by=size-pad;
  const hLen=tx2-tx1,vLen=py2-py1;
  const start=performance.now();
  function frame(now){
    const el=now-start;
    ctx.clearRect(0,0,size,size);
    ctx.save();ctx.translate(size/2,size/2);
    const st=Math.max(0,Math.min(1,(el-T_SH[0])/T_SH[1]));
    ctx.scale(easeBounceSh(st),easeBounceSh(st));
    ctx.translate(-size/2,-size/2);
    ctx.globalAlpha=Math.min(1,st*3);ctx.fillStyle=grad;ctx.fill(path);ctx.globalAlpha=1;
    ctx.save();ctx.clip(path);ctx.lineCap='round';ctx.strokeStyle='#fff';ctx.lineWidth=sw;
    const hp=easeOut3L(Math.max(0,Math.min(1,(el-T_TR[0])/T_TR[1])));
    if(hp>0){ctx.beginPath();ctx.moveTo(tx1,ty);ctx.lineTo(tx1+hLen*hp,ty);ctx.stroke();}
    const vp=easeOut3L(Math.max(0,Math.min(1,(el-T_PO[0])/T_PO[1])));
    if(vp>0){ctx.beginPath();ctx.moveTo(px,py1);ctx.lineTo(px,py1+vLen*vp);ctx.stroke();}
    const bp=easeElasticL(Math.max(0,Math.min(1,(el-T_BA[0])/T_BA[1])));
    if(bp>0){
      const r2=br*bp;
      ctx.beginPath();ctx.arc(bx,by,r2,0,Math.PI*2);ctx.fillStyle='#fff';ctx.fill();
      if(bp>0.5){
        const a=Math.min(1,(bp-0.5)/0.5);
        ctx.beginPath();ctx.arc(bx,by,r2*0.48,0,Math.PI*2);
        ctx.strokeStyle=`rgba(0,0,0,${0.13*a})`;ctx.lineWidth=r2*0.25;ctx.stroke();
      }
    }
    ctx.restore();ctx.restore();
    if(el<T_TOT)requestAnimationFrame(frame);
    else{drawStaticLogo(canvas,size);if(onDone)onDone();}
  }
  requestAnimationFrame(frame);
}

// ── SPLASH ──
function runSplash(onDone){
  const canvas=document.getElementById('splash-canvas');
  const wm=document.getElementById('splash-wm');
  const dots=document.getElementById('splash-dots');
  const pf=document.getElementById('splash-pfill');
  const screen=document.getElementById('splash-screen');

  // progress bar
  const pStart=performance.now();
  const pDur=2600;
  function stepP(now){
    const t=Math.min(1,(now-pStart)/pDur);
    pf.style.width=(t*100)+'%';
    if(t<1)requestAnimationFrame(stepP);
  }
  requestAnimationFrame(stepP);

  animateLogo(canvas, 140, function(){
    setTimeout(()=>{ wm.classList.add('show'); dots.classList.add('show'); }, 60);
    setTimeout(()=>{
      screen.classList.add('hide');
      setTimeout(()=>{
        screen.style.display='none';
        // Quitar la clase pre-paint ahora que initDark ya aplicó body.dark
        document.documentElement.classList.remove('dark-pre');
        if(onDone) onDone();
      }, 500);
    }, 1800);
  });
}

// ══════════════════════════════════════════════════════
//  MIS REFERIDOS
// ══════════════════════════════════════════════════════
// ══════════════════════════════════════════════════════
//  MIS GRUPOS
// ══════════════════════════════════════════════════════
let _myGroups=[];

function renderMisGrupos(){
  const wrap=document.getElementById('misgrupos-wrap');
  if(!wrap) return;
  wrap.innerHTML=`<div class="sk-stack" style="padding:.5rem 0">
    ${Array.from({length:2},()=>`
    <div class="sk row" style="display:block;padding:14px">
      <div class="sk" style="width:55%;height:18px;margin-bottom:10px"></div>
      <div class="sk" style="width:30%;height:12px;margin-bottom:14px"></div>
      <div class="sk" style="width:100%;height:12px;margin-bottom:8px"></div>
      <div class="sk" style="width:80%;height:12px"></div>
    </div>`).join('')}
  </div>`;
  api('GET',`/api/groups/user/${CU.u}`).then(groups=>{
    _myGroups=groups;
    let html=`
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:.75rem;margin-bottom:1.5rem">
      <button onclick="showCreateGroup()" style="padding:14px;background:var(--grad-tri);color:#fff;border:none;border-radius:var(--rad);font-family:'Plus Jakarta Sans',sans-serif;font-weight:700;font-size:.88rem;cursor:pointer;box-shadow:var(--sh)">
        ➕ Crear grupo
      </button>
      <button onclick="showJoinGroup()" style="padding:14px;background:var(--surface);color:var(--ink);border:1.5px solid var(--border);border-radius:var(--rad);font-family:'Plus Jakarta Sans',sans-serif;font-weight:700;font-size:.88rem;cursor:pointer;box-shadow:var(--sh)">
        🔗 Unirse al grupo
      </button>
    </div>`;

    if(!groups.length){
      html+=`<div style="background:var(--surface);border:1.5px solid var(--border);border-radius:var(--rad);padding:2.5rem;text-align:center;box-shadow:var(--sh)">
        <div style="font-size:2rem;margin-bottom:.75rem">👥</div>
        <div style="font-weight:700;font-size:1rem;color:var(--ink);margin-bottom:.5rem">Aún no estás en ningún grupo</div>
        <div style="font-size:.82rem;color:var(--ink3);line-height:1.6">Crea un grupo e invita a tus amigos, o únete con un código que alguien te haya compartido.</div>
      </div>`;
    } else {
      // Generate unique gradient per group from name hash
      const GROUP_GRADS=[
        'linear-gradient(135deg,#006838,#003087)',
        'linear-gradient(135deg,#003087,#c0001a)',
        'linear-gradient(135deg,#c0001a,#9a6500)',
        'linear-gradient(135deg,#006838,#c0001a)',
        'linear-gradient(135deg,#0052cc,#8800cc)',
        'linear-gradient(135deg,#cc6600,#c0001a)',
        'linear-gradient(135deg,#006838,#009650)',
        'linear-gradient(135deg,#003087,#0052cc)',
      ];
      function groupGrad(name){ let h=0;for(let i=0;i<name.length;i++)h=(h*31+name.charCodeAt(i))>>>0;return GROUP_GRADS[h%GROUP_GRADS.length]; }

      html+=`<div style="display:flex;flex-direction:column;gap:1rem">`;
      groups.forEach(g=>{
        const isOwner=g.owner===CU.u;
        const grad=groupGrad(g.name);
        html+=`<div style="background:var(--surface);border:1.5px solid var(--border);border-radius:var(--rad);overflow:hidden;box-shadow:var(--sh);transition:transform .2s" onmouseenter="this.style.transform='translateY(-2px)'" onmouseleave="this.style.transform=''">
          <div style="background:${grad};padding:14px 16px;display:flex;align-items:center;justify-content:space-between;gap:12px">
            <div style="min-width:0">
              <div style="font-weight:800;font-size:1.05rem;color:#fff;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${g.name}</div>
              <div style="font-size:.7rem;color:rgba(255,255,255,.8);margin-top:3px;display:flex;align-items:center;gap:8px">
                <span>👥 ${g.member_count} miembro${g.member_count!=1?'s':''}</span>
                <span>${isOwner?'👑 Creador':'🎮 Miembro'}</span>
              </div>
            </div>
            <div onclick="copyGroupCode('${g.code}')" title="Clic para copiar código"
              style="flex-shrink:0;background:rgba(255,255,255,.2);backdrop-filter:blur(8px);border:1.5px solid rgba(255,255,255,.3);border-radius:10px;padding:8px 14px;cursor:pointer;transition:background .2s;text-align:center"
              onmouseenter="this.style.background='rgba(255,255,255,.3)'" onmouseleave="this.style.background='rgba(255,255,255,.2)'">
              <div style="font-size:.55rem;color:rgba(255,255,255,.7);font-weight:600;letter-spacing:1px;text-transform:uppercase;margin-bottom:2px">Código</div>
              <div style="font-weight:800;font-size:1rem;color:#fff;letter-spacing:3px">${g.code}</div>
            </div>
          </div>
          <div id="group-ranking-${g.id}" style="padding:.5rem">
            <div class="sk-stack" id="grp-rank-${g.id}" style="padding:.5rem 0">
              ${Array.from({length:3},(_,i)=>`<div class="sk row" style="background:transparent;border-color:rgba(255,255,255,.15)">
                <span class="sk circle" style="width:22px;height:22px;flex-shrink:0;background:linear-gradient(90deg,rgba(255,255,255,.15) 25%,rgba(255,255,255,.3) 50%,rgba(255,255,255,.15) 75%);background-size:200% 100%"></span>
                <span class="sk" style="height:11px;flex:1;background:linear-gradient(90deg,rgba(255,255,255,.15) 25%,rgba(255,255,255,.3) 50%,rgba(255,255,255,.15) 75%);background-size:200% 100%"></span>
              </div>`).join('')}
            </div>
          </div>
          <div style="padding:10px 16px;border-top:1px solid var(--border);display:flex;gap:.5rem;justify-content:flex-end">
            <button onclick="copyGroupCode('${g.code}')" style="padding:7px 14px;background:var(--b-bg);color:var(--blue2);border:1px solid var(--b2);border-radius:7px;font-family:'Plus Jakarta Sans',sans-serif;font-size:.78rem;font-weight:700;cursor:pointer;transition:opacity .15s" onmouseenter="this.style.opacity='.8'" onmouseleave="this.style.opacity='1'">📋 Compartir código</button>
            ${isOwner
              ? `<button onclick="deleteGroup(${g.id},'${g.name}')" style="padding:7px 14px;background:var(--r-bg);color:var(--red);border:1px solid var(--red);border-radius:7px;font-family:'Plus Jakarta Sans',sans-serif;font-size:.78rem;font-weight:700;cursor:pointer">🗑 Eliminar</button>`
              : `<button onclick="leaveGroup(${g.id},'${g.name}')" style="padding:7px 14px;background:var(--r-bg);color:var(--red);border:1px solid var(--red);border-radius:7px;font-family:'Plus Jakarta Sans',sans-serif;font-size:.78rem;font-weight:700;cursor:pointer">Salir del grupo</button>`
            }
          </div>
        </div>`;
      });
      html+=`</div>`;
    }
    wrap.innerHTML=html;
    // Load rankings for each group
    groups.forEach(g=>loadGroupRanking(g.id));
  }).catch(()=>{
    wrap.innerHTML=`<div style="color:var(--ink3);font-style:italic;padding:1rem">Error cargando grupos.</div>`;
  });
}

function loadGroupRanking(groupId){
  const el=document.getElementById(`group-ranking-${groupId}`);
  if(!el) return;

  // Fetch group ranking AND global ranking in parallel
  Promise.all([
    api('GET',`/api/groups/${groupId}/ranking`),
    api('GET','/api/ranking')
  ]).then(([data, globalRanking])=>{
    const {members, picks:gPicks}=data;

    // Build global position map: { username -> { pos, total } }
    const globalMap={};
    globalRanking.forEach((r,i)=>{ globalMap[r.username]={pos:i+1, total:globalRanking.length}; });
    const totalPlayers=globalRanking.length;

    // Calculate group scores
    const board=members
      .filter(u=>!isAdminUser(u))
      .map(u=>{
        const saved=picks[u];
        picks[u]=gPicks[u]||{sc:{},br:{}};
        const sc=calcScore(u);
        picks[u]=saved;
        return {name:u, ...sc, isMe:u===CU.u};
      })
      .sort((a,b)=>b.total-a.total);

    const isOwner=_myGroups.find(g=>g.id===groupId)?.owner===CU.u;
    if(!board.length){el.innerHTML=`<div style="padding:.75rem;font-size:.8rem;color:var(--ink3)">Sin miembros aún.</div>`;return;}
    const medals=['🥇','🥈','🥉'];
    el.innerHTML=`<table style="width:100%;border-collapse:collapse">
      ${board.map((p,i)=>{
        const gp=globalMap[p.name];
        const globalLine=gp
          ? `<div style="font-size:.68rem;color:var(--ink3);font-weight:600;margin-top:2px">#${gp.pos} de ${totalPlayers} en general</div>`
          : '';
        return `
        <tr style="${p.isMe?'background:var(--g-bg)':i%2===0?'background:var(--bg)':''}">
          <td style="padding:8px 12px;font-size:.9rem;width:32px;vertical-align:top;padding-top:10px">${medals[i]||`${i+1}`}</td>
          <td style="padding:8px 4px;vertical-align:top">
            <div style="font-weight:${p.isMe?'800':'600'};font-size:.85rem;color:${p.isMe?'var(--green)':'var(--ink)'}">
              ${p.name}${p.isMe?' <span style="font-size:.6rem;background:var(--green);color:#fff;padding:1px 5px;border-radius:4px">tú</span>':''}
            </div>
            ${globalLine}
          </td>
          <td style="padding:8px 12px;text-align:right;font-weight:800;font-size:.88rem;color:var(--ink);vertical-align:top;padding-top:10px">${p.total} <span style="font-size:.65rem;opacity:.6">pts</span></td>
          <td style="padding:8px 8px;width:28px;vertical-align:top;padding-top:10px">${isOwner&&!p.isMe?`<button onclick="removeMemberFromGroup(${groupId},'${p.name}')" style="background:none;border:none;cursor:pointer;color:var(--ink3);font-size:.75rem;padding:2px 5px;border-radius:4px" title="Eliminar del grupo">✕</button>`:''}
          </td>
        </tr>`;
      }).join('')}
    </table>`;
  }).catch(()=>{
    if(el) el.innerHTML=`<div style="padding:.75rem;font-size:.8rem;color:var(--ink3)">Error cargando ranking.</div>`;
  });
}

function showCreateGroup(){
  const name=prompt('Nombre del grupo:','');
  if(!name||!name.trim()) return;
  api('POST','/api/groups',{name:name.trim(),username:CU.u})
    .then(g=>{
      toast(`Grupo "${g.name}" creado · Código: ${g.code}`);
      // Copy code to clipboard
      navigator.clipboard?.writeText(g.code).catch(()=>{});
      renderMisGrupos();
    })
    .catch(e=>toast('Error: '+e.message));
}

function showJoinGroup(){
  const code=prompt('Ingresa el código del grupo (6 letras):','');
  if(!code||!code.trim()) return;
  api('POST','/api/groups/join',{code:code.trim().toUpperCase(),username:CU.u})
    .then(g=>{
      toast(`¡Te uniste a "${g.name}"! 🎉`);
      renderMisGrupos();
    })
    .catch(e=>toast('Error: '+e.message));
}

function copyGroupCode(code){
  navigator.clipboard?.writeText(code)
    .then(()=>toast(`Código ${code} copiado ✓`))
    .catch(()=>toast(`Código del grupo: ${code}`));
}

function removeMemberFromGroup(groupId, username){
  if(!confirm(`¿Eliminar a "${username}" del grupo?`)) return;
  api('DELETE',`/api/groups/${groupId}/member/${username}`,{requester:CU.u})
    .then(()=>{ toast(`${username} eliminado del grupo`); renderMisGrupos(); })
    .catch(e=>toast('Error: '+e.message));
}

function leaveGroup(id, name){
  if(!confirm(`¿Salir del grupo "${name}"?`)) return;
  api('DELETE',`/api/groups/${id}/leave`,{username:CU.u})
    .then(()=>{ toast('Saliste del grupo'); renderMisGrupos(); })
    .catch(e=>toast('Error: '+e.message));
}

function deleteGroup(id, name){
  if(!confirm(`¿Eliminar el grupo "${name}"? Esta acción no se puede deshacer.`)) return;
  api('DELETE',`/api/groups/${id}`,{username:CU.u})
    .then(()=>{ toast('Grupo eliminado'); renderMisGrupos(); })
    .catch(e=>toast('Error: '+e.message));
}

// ══════════════════════════════════════════════════════
//  MIS REFERIDOS
function renderReferidos(){
  const wrap=document.getElementById('referidos-wrap');
  if(!wrap) return;
  const myCode=CU.code||genCode(CU.u);
  wrap.innerHTML=`<div class="sk-stack" style="padding:.5rem 0">
    <div class="sk row" style="display:block;padding:18px">
      <div class="sk" style="width:35%;height:14px;margin-bottom:10px"></div>
      <div class="sk" style="width:55%;height:32px"></div>
    </div>
    ${Array.from({length:3},()=>`<div class="sk row">
      <span class="sk circle" style="width:30px;height:30px;flex-shrink:0"></span>
      <span class="sk" style="height:14px;flex:1;max-width:140px"></span>
      <span class="sk" style="width:48px;height:14px;flex-shrink:0"></span>
    </div>`).join('')}
  </div>`;

  api('GET',`/api/refs/${myCode}`).then(myRefs=>{
    refs[myCode]=myRefs||[];
    const board=buildBoard();
    const myRank=board.findIndex(r=>r.name===CU.u)+1;

    let html=`<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:.75rem;margin-bottom:1.5rem">
      <div class="mq-stat">
        <div class="mq-stat-num" style="color:var(--green)">${myRefs.length}</div>
        <div class="mq-stat-label">Referidos tuyos</div>
      </div>
      <div class="mq-stat">
        <div class="mq-stat-num" style="color:var(--blue2)">${myRank||'—'}</div>
        <div class="mq-stat-label">Tu posición actual</div>
      </div>
      <div class="mq-stat">
        <div class="mq-stat-num" style="color:var(--gld)">$500</div>
        <div class="mq-stat-label">Bono si tu ref gana</div>
      </div>
    </div>`;

    html+=`<div class="my-ref-box" style="margin-bottom:1.25rem">
      <div class="my-ref-left">
        <div class="label">Tu código de referido</div>
        <div class="code">${myCode}</div>
      </div>
      <button class="copy-code-btn" onclick="copyMyCode()">Copiar código</button>
    </div>`;

    if(myRefs.length===0){
      html+=`<div style="background:var(--surface);border:1.5px solid var(--border);border-radius:var(--rad);padding:2.5rem;text-align:center;box-shadow:var(--sh)">
        <div style="font-size:2rem;margin-bottom:.75rem">🔗</div>
        <div style="font-weight:700;font-size:1rem;color:var(--ink);margin-bottom:.5rem">Aún no tienes referidos</div>
        <div style="font-size:.82rem;color:var(--ink3);line-height:1.6">Comparte tu código <b style="color:var(--green)">${myCode}</b> con amigos para que se unan.<br>Si tu referido gana el 1er lugar, te caen $500 MXN.</div>
      </div>`;
    } else {
      html+=`<div style="background:var(--surface);border:1.5px solid var(--border);border-radius:var(--rad);overflow:hidden;box-shadow:var(--sh)">
        <div style="padding:10px 16px;background:var(--grad-tri);color:#fff;font-weight:700;font-size:.8rem;letter-spacing:.5px">
          TUS REFERIDOS · ${myRefs.length} persona${myRefs.length!==1?'s':''}
        </div>
        <table style="width:100%;border-collapse:collapse">
          <thead>
            <tr style="background:var(--bg)">
              <th style="padding:9px 14px;font-size:.68rem;text-transform:uppercase;letter-spacing:.7px;color:var(--ink3);font-weight:600;text-align:left;border-bottom:1.5px solid var(--border)">#</th>
              <th style="padding:9px 14px;font-size:.68rem;text-transform:uppercase;letter-spacing:.7px;color:var(--ink3);font-weight:600;text-align:left;border-bottom:1.5px solid var(--border)">Usuario</th>
              <th style="padding:9px 14px;font-size:.68rem;text-transform:uppercase;letter-spacing:.7px;color:var(--ink3);font-weight:600;text-align:left;border-bottom:1.5px solid var(--border)">Posición</th>
              <th style="padding:9px 14px;font-size:.68rem;text-transform:uppercase;letter-spacing:.7px;color:var(--ink3);font-weight:600;text-align:right;border-bottom:1.5px solid var(--border)">Pts</th>
            </tr>
          </thead>
          <tbody>
            ${myRefs.map((u,i)=>{
              const rank=board.findIndex(r=>r.name===u)+1;
              const pts=board.find(r=>r.name===u)?.total||0;
              return `<tr style="${i%2===0?'background:var(--bg)':''}">
                <td style="padding:10px 14px;font-size:.82rem;color:var(--ink3)">${i+1}</td>
                <td style="padding:10px 14px;font-weight:600;color:var(--ink)">${u}</td>
                <td style="padding:10px 14px;color:var(--ink2)">${rank?`#${rank}`:'—'}</td>
                <td style="padding:10px 14px;text-align:right;font-weight:700;color:var(--ink)">${pts} pts</td>
              </tr>`;
            }).join('')}
          </tbody>
        </table>
      </div>`;
    }
    wrap.innerHTML=html;
  }).catch(()=>{
    wrap.innerHTML=`<div style="color:var(--ink3);font-style:italic;padding:1rem">Error cargando referidos.</div>`;
  });
}


// ══════════════════════════════════════════════════════
//  INIT
// ══════════════════════════════════════════════════════
load(); loadChat(); loadChangelog(); initDark();
drawStaticLogo(document.getElementById('auth-logo'), 36);
drawStaticLogo(document.getElementById('nav-logo'),  34);
// Run splash and data load in parallel — close splash only when both done
let _splashDone=false, _dataDone=false, _splashCallback=null;

function tryCloseSplash(){
  if(_splashDone && _dataDone && _splashCallback) _splashCallback();
}

// Preload data in parallel with splash
if(CU){
  (async()=>{
    try { await loadAllData(); ensure(CU.u); } catch(e){}
    try { const r=await api('GET',`/api/refs/${CU.code}`); refs[CU.code]=r; } catch(e){}
    try {
      const users=await api('GET','/api/users');
      dynUsers=users.filter(u=>!USERS.find(x=>x.u===u.username)).map(u=>({u:u.username,p:'',admin:u.is_admin,code:u.code}));
    } catch(e){}
    _dataDone=true;
    tryCloseSplash();
  })();
} else {
  _dataDone=true;
}

runSplash(function(){
  _splashDone=true;
  _splashCallback=function(){
    if(CU){
      const dl=document.getElementById('drawer-logo');
      if(dl) drawStaticLogo(dl,28);
      syncDrawer();
      boot();
      setTimeout(connectOnlineCounter, 3000);
    } else {
      document.getElementById('auth').style.display='block';
      initLanding();
    }
  };
  tryCloseSplash();
});
document.getElementById('lp').addEventListener('keydown',e=>{if(e.key==='Enter')doLogin();});
document.getElementById('lu').addEventListener('keydown',e=>{if(e.key==='Enter')document.getElementById('lp').focus();});
const _chatInput = document.getElementById('chat-input');
if(_chatInput) _chatInput.addEventListener('keydown',e=>{
  if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();sendChat();}
});

function saveRankingSnapshot(){
  const label = document.getElementById('snapshot-label').value.trim();
  if(!label){ toast('Ponle un nombre al snapshot'); return; }
  api('POST','/api/ranking/snapshot',{ label })
    .then(r=>{ toast(`Snapshot "${label}" guardado — ${r.count} jugadores ✓`); document.getElementById('snapshot-label').value=''; })
    .catch(e=>toast('Error: '+e.message));
}

function renderRankingHistory(){
  const wrap = document.getElementById('rk-history-wrap');
  if(!wrap) return;
  api('GET','/api/ranking/history').then(snapshots=>{
    if(!snapshots.length){ wrap.innerHTML=''; return; }

    // Build position map per snapshot for each user
    const allUsers = [...new Set(snapshots.flatMap(s=>s.snapshot.map(p=>p.name)))];
    const myName = CU.u;

    // For each snapshot, get position of current user and top 3
    let html=`<div style="background:var(--surface);border:1.5px solid var(--border);border-radius:var(--rad);padding:1.25rem;box-shadow:var(--sh)">
      <div style="font-weight:800;font-size:.9rem;color:var(--ink);margin-bottom:1rem">📈 Historial del ranking</div>`;

    // Timeline of user's position
    html+=`<div style="overflow-x:auto;padding-bottom:.5rem"><div style="display:flex;gap:0;min-width:max-content">`;
    snapshots.forEach((snap,i)=>{
      const pos = snap.snapshot.findIndex(p=>p.name===myName);
      const myData = snap.snapshot.find(p=>p.name===myName);
      const total = snap.snapshot.length;
      const posNum = pos===-1 ? '-' : pos+1;
      const isFirst = posNum===1;
      const color = pos===0?'var(--gld)':pos===1?'#888':pos===2?'#c8875a':'var(--green)';
      html+=`<div style="display:flex;flex-direction:column;align-items:center;gap:6px;padding:0 12px;border-right:1px solid var(--border);min-width:90px">
        <div style="font-size:.65rem;font-weight:700;color:var(--ink3);text-transform:uppercase;letter-spacing:.5px;text-align:center">${snap.label}</div>
        <div style="font-size:1.6rem;font-weight:800;color:${color}">${pos===0?'🥇':pos===1?'🥈':pos===2?'🥉':'#'+posNum}</div>
        <div style="font-size:.72rem;color:var(--ink3)">${myData?myData.total+' pts':'-'}</div>
      </div>`;
    });
    html+=`</div></div>`;

    // Top 3 per snapshot table
    html+=`<div style="margin-top:1rem;overflow-x:auto"><table style="width:100%;border-collapse:collapse;font-size:.78rem">
      <thead><tr style="border-bottom:2px solid var(--border)">
        <th style="padding:6px 8px;text-align:left;color:var(--ink3);font-weight:700;font-size:.65rem;text-transform:uppercase">Jornada</th>
        <th style="padding:6px 8px;text-align:center;color:var(--gld);font-size:.9rem">🥇</th>
        <th style="padding:6px 8px;text-align:center;color:#888;font-size:.9rem">🥈</th>
        <th style="padding:6px 8px;text-align:center;color:#c8875a;font-size:.9rem">🥉</th>
        ${CU.admin?'<th style="padding:6px 8px;width:36px"></th>':''}
      </tr></thead><tbody>`;
    snapshots.forEach(snap=>{
      const top3 = snap.snapshot.slice(0,3);
      html+=`<tr style="border-bottom:1px solid var(--border)">
        <td style="padding:8px;font-weight:600;color:var(--ink)">${snap.label}</td>
        ${top3.map(p=>`<td style="padding:8px;text-align:center;color:var(--ink2)">${p.name}<br><span style="font-size:.65rem;color:var(--ink3)">${p.total}pts</span></td>`).join('')}
        ${top3.length<3?'<td></td>'.repeat(3-top3.length):''}
        ${CU.admin?`<td style="padding:8px;text-align:center"><button onclick="deleteSnapshot(${snap.id})" style="background:none;border:none;cursor:pointer;color:var(--ink3);font-size:.8rem;padding:2px 6px;border-radius:4px" title="Eliminar">✕</button></td>`:''}
      </tr>`;
    });
    html+=`</tbody></table></div></div>`;
    wrap.innerHTML = html;
  }).catch(()=>{ document.getElementById('rk-history-wrap').innerHTML=''; });
}

function renderStats(){
  const wrap = document.getElementById('stats-wrap');
  const overviewEl = document.getElementById('st-overview');
  const disclaimerEl = document.getElementById('st-disclaimer');
  const eyebrowEl = document.getElementById('st-eyebrow-txt');
  const stickyEl = document.getElementById('st-sticky-stat');

  // Skeleton mientras carga
  wrap.innerHTML=`<div class="sk-stack" style="padding:.5rem 0">
    <div class="sk row" style="display:block;padding:14px">
      <div class="sk" style="width:35%;height:14px;margin-bottom:12px"></div>
      <div class="sk-stack">
        ${Array.from({length:3},()=>`<div class="sk" style="height:34px"></div>`).join('')}
      </div>
    </div>
  </div>`;
  if(overviewEl) overviewEl.style.display = 'none';
  if(disclaimerEl) disclaimerEl.style.display = 'none';

  api('GET','/api/stats').then(d=>{
    function matchLabel(id){ return `Partido ${id.replace(/\D/g,'')}`; }
    const safe = (u) => (u || '').replace(/'/g,"\\'");

    // Disclaimer si NO todos los registrados tienen bracket completo
    const elig = d.eligibleCount ?? d.total ?? 0;
    const reg = d.totalRegistered ?? elig;
    const missing = Math.max(0, reg - elig);
    if(disclaimerEl && missing > 0){
      disclaimerEl.style.display = 'flex';
      disclaimerEl.innerHTML = `
        <div class="st-disclaimer-icon">⚠️</div>
        <div class="st-disclaimer-txt">Solo se incluyen jugadores con <strong>bracket completo</strong>. <strong>${missing}</strong> jugador${missing!==1?'es':''} sin bracket completo no aparece${missing!==1?'n':''} en estas estadísticas.</div>`;
    } else if(disclaimerEl){
      disclaimerEl.style.display = 'none';
    }

    // Caso vacío: nadie tiene bracket completo
    if(d.empty){
      if(eyebrowEl) eyebrowEl.textContent = `Estadísticas en vivo · 0 elegibles`;
      if(stickyEl) stickyEl.textContent = `0 elegibles`;
      wrap.innerHTML = `<div class="st-empty">
        <div class="st-empty-icon">📊</div>
        <div class="st-empty-t">Sin jugadores con bracket completo</div>
        <div class="st-empty-s">Las estadísticas aparecen cuando al menos un jugador llene los 31 partidos del bracket.</div>
      </div>`;
      return;
    }

    // Stats overview en el hero
    if(overviewEl){
      const totalExacts = (d.exactByUser || []).reduce((s,u)=>s+(u.exact||0), 0);
      overviewEl.style.display = 'grid';
      overviewEl.innerHTML = `
        <div class="st-stat"><div class="st-stat-icon">👥</div><div class="st-stat-num">${elig}</div><div class="st-stat-label">Elegibles</div></div>
        <div class="st-stat"><div class="st-stat-icon">🎯</div><div class="st-stat-num">${totalExacts}</div><div class="st-stat-label">Exactos</div></div>
        <div class="st-stat"><div class="st-stat-icon">⚽</div><div class="st-stat-num">${d.matchesWithResults ?? 0}</div><div class="st-stat-label">Partidos</div></div>
        <div class="st-stat"><div class="st-stat-icon">📊</div><div class="st-stat-num">${d.globalPct ?? 0}%</div><div class="st-stat-label">Avg.</div></div>`;
    }

    if(eyebrowEl) eyebrowEl.textContent = `Estadísticas en vivo · ${elig} elegible${elig!==1?'s':''}`;
    if(stickyEl)  stickyEl.textContent  = `${elig} elegible${elig!==1?'s':''}`;

    let html='';
    let sIdx = 0;

    // ── PARTIDOS DESTACADOS ──
    if(d.mostCorrect || d.mostExact || d.leastCorrect){
      html += `<div class="st-section-h">Partidos destacados</div>`;
      html += `<div class="st-card st-reveal" style="--st-i:${sIdx++}">
        <div class="st-match-list">`;
      if(d.mostCorrect){
        html += `<div class="st-match-row">
          <div class="st-match-icon green">✅</div>
          <div class="st-match-meta">
            <div class="st-match-tag">Más acertado</div>
            <div class="st-match-name">${matchLabel(d.mostCorrect.id)}</div>
            <div class="st-match-desc green">${d.mostCorrect.pct}% lo acertaron (${d.mostCorrect.correct}/${d.mostCorrect.picked})</div>
          </div>
        </div>`;
      }
      if(d.mostExact){
        html += `<div class="st-match-row">
          <div class="st-match-icon blue">🎯</div>
          <div class="st-match-meta">
            <div class="st-match-tag">Más exacto</div>
            <div class="st-match-name">${matchLabel(d.mostExact.id)}</div>
            <div class="st-match-desc blue">${d.mostExact.exact} persona${d.mostExact.exact!==1?'s lo dijeron':' lo dijo'} exacto</div>
          </div>
        </div>`;
      }
      if(d.leastCorrect){
        html += `<div class="st-match-row">
          <div class="st-match-icon red">😬</div>
          <div class="st-match-meta">
            <div class="st-match-tag">Sorpresa del torneo</div>
            <div class="st-match-name">${matchLabel(d.leastCorrect.id)}</div>
            <div class="st-match-desc red">Solo ${d.leastCorrect.pct}% lo acertó (${d.leastCorrect.correct}/${d.leastCorrect.picked})</div>
          </div>
        </div>`;
      }
      html += `</div></div>`;
    }

    // ── CAMPEÓN MÁS SELECCIONADO ──
    if(d.topChamp?.length){
      html += `<div class="st-section-h">Campeón más seleccionado</div>`;
      html += `<div class="st-card st-reveal" style="--st-i:${sIdx++}">
        <div class="st-bars">`;
      d.topChamp.forEach((c,i)=>{
        const medals=['🥇','🥈','🥉'];
        html += `<div class="st-bar-row">
          <div class="st-bar-medal">${medals[i]||''}</div>
          <div class="st-bar-info">
            <div class="st-bar-name-row">
              <span class="st-bar-name">${escHtml(c.team)}</span>
              <span class="st-bar-pct">${c.pct}%</span>
            </div>
            <div class="st-bar-track"><div class="st-bar-fill" data-pct="${c.pct}"></div></div>
          </div>
          <div class="st-bar-votes">${c.votes} voto${c.votes!==1?'s':''}</div>
        </div>`;
      });
      html += `</div></div>`;
    }

    // ── TOP EXACTOS ──
    if(d.exactByUser?.length){
      html += `<div class="st-section-h">Reyes del marcador exacto</div>`;
      html += `<div class="st-list st-reveal" style="--st-i:${sIdx++}">`;
      d.exactByUser.forEach((u,i)=>{
        const isMe = u.name===CU.u;
        html += `<div class="st-list-row${isMe?' me':''}" onclick="openProfile('${safe(u.name)}')">
          <div class="st-list-pos">${i+1}</div>
          <div class="st-list-name">${escHtml(u.name)}${isMe?' <span style="font-size:.6rem;font-weight:800;background:rgba(0,196,106,.16);color:var(--green);padding:1px 6px;border-radius:5px;letter-spacing:.5px;text-transform:uppercase;margin-left:2px">tú</span>':''}</div>
          <div class="st-list-val"><strong>${u.exact}</strong> exacto${u.exact!==1?'s':''}</div>
        </div>`;
      });
      html += `</div>`;
    }

    // ── CURIOSIDADES ──
    const curios = [];
    if(d.tumba)    curios.push({icon:'🥄',title:'La tumba',name:d.tumba.name,desc:`${d.tumba.total} pts · tiene bracket completo`,isMe:d.tumba.name===CU.u});
    if(d.basico)   curios.push({icon:'🤷',title:'El básico',name:d.basico.name,desc:`Puso 2-0 en ${d.basico.count} partido${d.basico.count!==1?'s':''}`,isMe:d.basico.name===CU.u});
    if(d.goleador) curios.push({icon:'💥',title:'El más goleador',name:d.goleador.name,desc:`Predijo ${d.goleador.goals} goles en total`,isMe:d.goleador.name===CU.u});
    if(d.aburrido) curios.push({icon:'😴',title:'El aburrido',name:d.aburrido.name,desc:`Solo predijo ${d.aburrido.goals} goles en total`,isMe:d.aburrido.name===CU.u});

    if(curios.length){
      html += `<div class="st-section-h">Curiosidades</div>`;
      html += `<div class="st-curios">`;
      curios.forEach((c, i)=>{
        const delay = i * 80;
        html += `<div class="st-curio st-reveal${c.isMe?' me':''}" style="--st-i:${sIdx + i};transition-delay:${delay}ms" onclick="openProfile('${safe(c.name)}')">
          ${c.isMe?`<div class="st-curio-me-pill">tú</div>`:''}
          <div class="st-curio-icon">${c.icon}</div>
          <div class="st-curio-tag">${c.title}</div>
          <div class="st-curio-name">${escHtml(c.name)}</div>
          <div class="st-curio-desc">${c.desc}</div>
        </div>`;
      });
      html += `</div>`;
    }

    wrap.innerHTML = html;

    // Animar barras del campeón después de renderizar
    setTimeout(()=>{
      document.querySelectorAll('#stats-wrap .st-bar-fill').forEach(b=>{
        b.style.width = (b.dataset.pct || 0) + '%';
      });
    }, 200);

    // Reveal on-scroll
    observeStatsCards();
  }).catch(()=>{
    wrap.innerHTML=`<div style="text-align:center;padding:2rem;color:var(--ink3)">Error cargando estadísticas</div>`;
  });
}

let _statsObserver = null;
function observeStatsCards(){
  if(_statsObserver) _statsObserver.disconnect();
  const cards = document.querySelectorAll('#stats-wrap .st-reveal');
  if(!cards.length) return;
  if(!('IntersectionObserver' in window)){
    cards.forEach(c=>c.classList.add('show'));
    return;
  }
  _statsObserver = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('show');
        _statsObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.06, rootMargin: '0px 0px -3% 0px' });
  cards.forEach(c=>{
    const rect = c.getBoundingClientRect();
    if(rect.top < window.innerHeight * 0.95) c.classList.add('show');
    else _statsObserver.observe(c);
  });
}

function statCard(icon, label, value, sub){
  return `<div style="background:var(--surface);border:1.5px solid var(--border);border-radius:var(--rad);padding:1rem;box-shadow:var(--sh);display:flex;flex-direction:column;gap:4px">
    <div style="font-size:1.4rem">${icon}</div>
    <div style="font-weight:800;font-size:1.3rem;color:var(--ink);line-height:1">${value}</div>
    <div style="font-size:.72rem;font-weight:700;color:var(--ink2)">${label}</div>
    ${sub?`<div style="font-size:.65rem;color:var(--ink3)">${sub}</div>`:''}
  </div>`;
}

function matchStatRow(icon, tag, match, desc, color){
  return `<div style="display:flex;align-items:flex-start;gap:10px;padding:.5rem 0;border-bottom:1px solid var(--border)">
    <div style="font-size:1.1rem;flex-shrink:0">${icon}</div>
    <div style="flex:1">
      <div style="font-size:.7rem;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:var(--ink3)">${tag}</div>
      <div style="font-weight:700;color:var(--ink);font-size:.88rem">${match}</div>
      <div style="font-size:.78rem;color:${color}">${desc}</div>
    </div>
  </div>`;
}

function deleteSnapshot(id){
  if(!confirm('¿Eliminar este snapshot?')) return;
  api('DELETE',`/api/ranking/snapshot/${id}`)
    .then(()=>{ toast('Snapshot eliminado ✓'); renderRankingHistory(); })
    .catch(e=>toast('Error: '+e.message));
}

// ── ONLINE COUNTER ──
let _onlineSSE = null;

function connectOnlineCounter(){
  if(!CU || _onlineSSE) return;
  try {
    _onlineSSE = new EventSource(`${API}/api/online?u=${encodeURIComponent(CU.u)}`);
    _onlineSSE.onmessage = function(e){
      try {
        const msg = JSON.parse(e.data);
        if(msg.type === 'online_count'){
          const badge = document.getElementById('online-badge');
          const count = document.getElementById('online-count');
          if(badge && count){
            count.textContent = msg.count;
            badge.style.display = msg.count > 1 ? 'flex' : 'none';
          }
        }
      } catch(err){}
    };
    _onlineSSE.onerror = function(){
      _onlineSSE.close();
      _onlineSSE = null;
      // Retry after 10s
      setTimeout(connectOnlineCounter, 10000);
    };
  } catch(e){}
}

// Register PWA service worker
if('serviceWorker' in navigator){
  navigator.serviceWorker.register('/sw.js').catch(()=>{});
}

// ── PWA INSTALL ──
let _pwaPrompt = null;
const _isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent);
const _isInStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone;

// Capture install prompt (Android/Chrome)
window.addEventListener('beforeinstallprompt', e => {
  e.preventDefault();
  _pwaPrompt = e;
  showInstallButton();
});

function showInstallButton(){
  const btn = document.getElementById('drawer-install-btn');
  if(btn) btn.style.display = 'block';
}

function showInstallBanner(isIOS){
  if(_isInStandalone) return;
  const banner = document.getElementById('install-banner');
  if(!banner) return;
  if(isIOS){
    document.getElementById('install-banner-sub').textContent = 'Toca compartir → Añadir a pantalla de inicio';
    document.getElementById('install-banner-btn').textContent = 'Ver cómo';
    document.getElementById('install-banner-btn').onclick = showIOSInstructions;
  }
  banner.style.display = 'flex';
}

function dismissInstallBanner(){
  document.getElementById('install-banner').style.display = 'none';
  localStorage.setItem('q26install_dismissed','1');
}

function triggerInstall(){
  if(_pwaPrompt){
    _pwaPrompt.prompt();
    _pwaPrompt.userChoice.then(r=>{
      if(r.outcome==='accepted'){
        document.getElementById('install-banner').style.display='none';
        document.getElementById('drawer-install-btn').style.display='none';
      }
      _pwaPrompt=null;
    });
  }
  closeDrawer();
}

function showIOSInstructions(){
  document.getElementById('ios-modal').style.display='flex';
  closeDrawer();
}

// iOS — show after login, not immediately
if(_isIOS && !_isInStandalone){
  document.getElementById('drawer-ios-btn').style.display='block';
}

function showInstallBannerIfNeeded(){
  if(_isInStandalone) return;
  if(localStorage.getItem('q26install_dismissed')) return;
  if(_isIOS){
    showInstallBanner(true);
  } else if(_pwaPrompt){
    showInstallBanner(false);
  }
}
</script>
</body>
</html>
