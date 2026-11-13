/* Veille vivante EVOX — commune aux univers clairs (pack, 997, produits).
   Usage : VeilleVivante({ mot: "STAGE 2", images: ["assets/a.jpg", ...], defile: ["Downpipe", "339 ch", ...] })
   Ajoute à l'écran #veille : grand mot qui défile en fond, anneau vert qui tourne autour du produit,
   photos qui s'enchaînent, bandeau noir défilant en bas, ondes autour du bouton « Touchez pour découvrir ». */
(function () {
  const css = `
  .veille.vv { background: #F5F5F7; }
  .vv-fond { position: absolute; inset: 0; overflow: hidden; pointer-events: none; z-index: 0; }
  .vv-mot { position: absolute; left: 0; display: flex; white-space: nowrap; line-height: .9; text-transform: uppercase;
    font-family: "cofo-peshka-variable", "Poppins", sans-serif; font-weight: normal; font-variation-settings: "wght" 900, "wdth" 150, "slnt" 0;
    font-size: clamp(90px, min(30vh, 34vw), 330px); animation: vv-defile 70s linear infinite; will-change: transform; }
  .vv-mot span { padding-right: .35em; }
  .vv-mot.l1 { top: 3%; color: transparent; -webkit-text-stroke: 1.5px rgba(17,17,14,.09); }
  .vv-mot.l2 { bottom: calc(var(--vv-bande) + 2%); color: #EAEAEC; animation-direction: reverse; animation-duration: 90s; }
  .vv-halo { position: absolute; left: 50%; top: 42%; width: 120vmax; height: 120vmax; transform: translate(-50%, -50%);
    background: radial-gradient(closest-side, rgba(204,255,0,.22), rgba(204,255,0,.06) 45%, transparent 70%); animation: vv-respire 6s ease-in-out infinite alternate; }
  .vv-bande { position: absolute; left: 0; right: 0; bottom: 0; height: var(--vv-bande); background: #11110E; display: flex; align-items: center; overflow: hidden; }
  .vv-bande .piste { display: flex; white-space: nowrap; animation: vv-defile 45s linear infinite; will-change: transform; }
  .vv-bande span { display: inline-flex; align-items: center; gap: 26px; padding-right: 26px; color: #fff; text-transform: uppercase;
    font-family: "cofo-peshka-variable", sans-serif; font-size: 13px; letter-spacing: .18em; font-variation-settings: "wght" 700, "wdth" 130, "slnt" 0; }
  .vv-bande span::after { content: ""; width: 7px; height: 7px; border-radius: 50%; background: #CCFF00; }
  .veille.vv { --vv-bande: 52px; }
  .veille.vv .contenu { position: relative; z-index: 2; padding-bottom: calc(var(--vv-bande) + 20px); }
  .veille.vv .v-studio { position: relative; background: transparent !important; box-shadow: none !important; border-radius: 0 !important; overflow: visible !important; aspect-ratio: 1; }
  .veille.vv .v-studio::after { display: none !important; }
  .vv-disque { position: absolute; inset: 5%; border-radius: 50%; background: #fff; box-shadow: 0 30px 70px rgba(17,17,14,.10), 0 0 0 1px rgba(17,17,14,.04); }
  .vv-anneau { position: absolute; inset: 0; border-radius: 50%; animation: vv-tourne 7s linear infinite;
    background: conic-gradient(from 0deg, transparent 0 62%, rgba(204,255,0,.15) 70%, #CCFF00 92%, transparent 93%);
    -webkit-mask: radial-gradient(farthest-side, transparent calc(100% - 4px), #000 calc(100% - 3px));
            mask: radial-gradient(farthest-side, transparent calc(100% - 4px), #000 calc(100% - 3px)); }
  .vv-anneau::after { content: ""; position: absolute; inset: 0; border-radius: 50%; box-shadow: inset 0 0 0 1px rgba(17,17,14,.08); }
  .veille.vv .v-studio img { position: absolute; left: 16%; top: 16%; width: 68% !important; height: 68%; object-fit: contain; mix-blend-mode: multiply;
    opacity: 0; transform: scale(.86) rotate(-4deg); transition: opacity .9s cubic-bezier(.2,.7,.2,1), transform 3.6s cubic-bezier(.2,.7,.2,1); filter: none !important; }
  .veille.vv .v-studio img.on { opacity: 1; transform: scale(1) rotate(0); }
  .veille.vv .compteurs > div:first-child { background: #11110E; box-shadow: 0 14px 34px rgba(17,17,14,.22); }
  .veille.vv .compteurs > div:first-child b { color: #CCFF00; }
  .veille.vv .compteurs > div:first-child > small { color: #A1A1A6; }
  .veille.vv .toucher { position: relative; }
  .veille.vv .toucher::before, .veille.vv .toucher::after { content: ""; position: absolute; inset: 0; border-radius: 999px; border: 2px solid #11110E; opacity: 0; animation: vv-onde 2.6s ease-out infinite; pointer-events: none; }
  .veille.vv .toucher::after { animation-delay: 1.3s; }
  .veille.vv .grand.vv-in span:first-child { animation: vv-monte 1s cubic-bezier(.2,.7,.2,1) both !important; }
  .veille.vv .grand.vv-in span + span { animation: vv-monte 1s .12s cubic-bezier(.2,.7,.2,1) both !important; }

  .veille.vv { grid-template-columns: minmax(0, 1fr); }
  .veille.vv .contenu { min-width: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100%; max-width: 1280px; margin: 0 auto; }
  .vv-texte { display: contents; }
  .veille.vv .grand { width: 100%; max-width: 100%; } .veille.vv .modele { max-width: 100%; overflow-wrap: anywhere; }
  .veille.vv .logo { order: -2; } .veille.vv .v-studio { order: -1; flex: none; }
  @media (orientation: landscape) {
    .veille.vv .contenu { flex-direction: row; gap: clamp(24px, 4.5vw, 88px); text-align: left; padding-left: 4vw; padding-right: 4vw; }
    .veille.vv .vv-texte { display: flex; flex-direction: column; align-items: flex-start; flex: 0 1 auto; min-width: 0; max-width: min(46vw, 620px); }
    .veille.vv .logo { order: 0; margin: 0 0 3.4vh !important; }
    .veille.vv .v-studio { display: block !important; width: min(60vh, 38vw) !important; margin: 0 !important; }
    .veille.vv .grand span { font-size: clamp(30px, min(7vw, 12vh), 128px) !important; }
    .veille.vv .modele { margin-top: 2vh; }
    .veille.vv .compteurs { justify-content: flex-start; flex-wrap: wrap; gap: 12px; margin-top: 3.4vh; }
    .veille.vv .toucher { margin-top: 4vh; }
  }
  @media (orientation: landscape) and (max-height: 560px) {
    .veille.vv .v-studio { width: min(54vh, 34vw) !important; }
    .veille.vv .logo { margin-bottom: 1.6vh !important; height: 20px; }
    .veille.vv .grand span { font-size: clamp(26px, 11vh, 60px) !important; }
    .veille.vv .compteurs { margin-top: 2vh !important; } .veille.vv .toucher { margin-top: 2.4vh !important; }
  }
  @media (orientation: portrait) and (max-height: 720px) {
    .veille.vv .v-studio { width: min(30vh, 58vw) !important; margin-bottom: 1.6vh !important; }
    .veille.vv .logo { margin-bottom: 1.6vh !important; height: 22px; }
    .veille.vv .grand span { font-size: clamp(26px, 6.4vh, 48px); }
    .veille.vv .modele { margin-top: 1.2vh; }
    .veille.vv .compteurs { margin-top: 1.8vh !important; } .veille.vv .compteurs > div { padding: 10px 14px; }
    .veille.vv .toucher { margin-top: 2.2vh !important; padding: 12px 22px; }
  }
  @media (orientation: landscape) and (max-height: 380px) {
    .veille.vv { --vv-bande: 32px; }
    .veille.vv .modele { display: none; }
    .veille.vv .logo { height: 16px !important; margin-bottom: 1.2vh !important; }
    .veille.vv .grand span { font-size: clamp(22px, 10vh, 40px) !important; }
    .veille.vv .compteurs > div { padding: 6px 12px; }
    .veille.vv .compteurs b { font-size: 22px !important; }
    .veille.vv .compteurs > div > small { font-size: 10px; margin-top: 2px; }
    .veille.vv .toucher { margin-top: 1.8vh !important; padding: 8px 16px; font-size: 13px; }
  }
  @keyframes vv-defile { to { transform: translateX(-50%); } }
  @keyframes vv-tourne { to { transform: rotate(360deg); } }
  @keyframes vv-respire { from { opacity: .7; transform: translate(-50%, -50%) scale(.92); } to { opacity: 1; transform: translate(-50%, -50%) scale(1.05); } }
  @keyframes vv-onde { 0% { opacity: .35; transform: scale(1); } 100% { opacity: 0; transform: scale(1.25, 1.9); } }
  @keyframes vv-monte { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: none; } }
  @media (max-width: 480px) { .veille.vv { --vv-bande: 44px; } .vv-bande span { font-size: 11px; gap: 18px; padding-right: 18px; } }
  @media (orientation: landscape) and (max-height: 560px) { .veille.vv { --vv-bande: 38px; } .veille.vv .contenu { padding-bottom: calc(var(--vv-bande) + 8px); } .vv-bande span { font-size: 11px; } }
  @media (prefers-reduced-motion: reduce) { .vv-mot, .vv-bande .piste, .vv-anneau, .vv-halo { animation: none !important; } }`;

  window.VeilleVivante = function (o) {
    const v = document.getElementById("veille");
    if (!v || v.classList.contains("vv")) return;
    const st = document.createElement("style"); st.textContent = css; document.head.appendChild(st);
    v.classList.add("vv");
    const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
    const mot = Array(8).fill(`<span>${esc(o.mot || "EVOX")}</span>`).join("");
    const items = (o.defile || []).map(t => `<span>${esc(t)}</span>`).join("");
    const fond = document.createElement("div"); fond.className = "vv-fond"; fond.setAttribute("aria-hidden", "true");
    fond.innerHTML = `<div class="vv-halo"></div><div class="vv-mot l1">${mot}</div><div class="vv-mot l2">${mot}</div>` +
      (items ? `<div class="vv-bande"><div class="piste">${items.repeat(6)}${items.repeat(6)}</div></div>` : "");
    v.insertBefore(fond, v.firstChild);
    v.querySelectorAll(".grand").forEach(g => g.classList.add("vv-in"));
    const contenu = v.querySelector(".contenu");
    if (contenu) {
      const texte = document.createElement("div"); texte.className = "vv-texte";
      [".logo", ".grand", ".modele", ".compteurs", ".toucher"].forEach(q => { const e = contenu.querySelector(":scope > " + q); if (e) texte.appendChild(e); });
      contenu.appendChild(texte);
    }

    const studio = v.querySelector(".v-studio");
    if (studio) {
      const imgs = (o.images && o.images.length ? o.images : [...studio.querySelectorAll("img")].map(i => i.getAttribute("src"))).filter(Boolean);
      studio.innerHTML = `<div class="vv-disque"></div><div class="vv-anneau"></div>` + imgs.map((s, k) => `<img src="${esc(s)}" alt=""${k ? ' loading="lazy"' : ""}>`).join("");
      const els = [...studio.querySelectorAll("img")]; let k = 0;
      if (els[0]) els[0].classList.add("on");
      if (els.length > 1) setInterval(() => {
        if (v.classList.contains("cachee")) return;
        els[k].classList.remove("on"); k = (k + 1) % els.length; els[k].classList.add("on");
      }, 3600);
    }
    // Titres ajustés à la place disponible (jamais rognés)
    const ajuster = () => v.querySelectorAll(".grand span").forEach(sp => {
      sp.style.removeProperty("font-size");
      const max = sp.parentElement.clientWidth; if (!max) return;
      let fs = parseFloat(getComputedStyle(sp).fontSize);
      while (sp.scrollWidth > max + 1 && fs > 14) { fs -= 2; sp.style.setProperty("font-size", fs + "px", "important"); }
    });
    ajuster(); addEventListener("resize", ajuster); setTimeout(ajuster, 1500);
    if (document.fonts) { document.fonts.ready.then(ajuster); document.fonts.load('700 40px "Poppins"').then(ajuster).catch(() => {}); }
    // Relance l'entrée du titre à chaque retour en veille
    new MutationObserver(() => {
      if (v.classList.contains("cachee")) return;
      ajuster();
      v.querySelectorAll(".grand").forEach(g => { g.classList.remove("vv-in"); void g.offsetWidth; g.classList.add("vv-in"); });
    }).observe(v, { attributes: true, attributeFilter: ["class"] });
  };
})();
