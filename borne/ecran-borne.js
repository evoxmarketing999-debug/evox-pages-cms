// Choix de ce qu'affiche la tablette (réservé à l'équipe) : appui long de 3 s, ou 5 appuis rapides, sur un élément [data-reglage].
// Le choix est gardé dans la tablette (localStorage). La page d'accueil de la borne (borne/index.html)
// redirige vers l'écran choisi (pack, mur Porsche ou mur WheelForce).
(() => {
  const CLE = "evox-borne-ecran";
  const base = new URL(".", document.currentScript.src).href; // …/borne/
  const ECRANS = [
    { id: "", nom: "Murs de jantes", sous: "Accueil : Porsche et WheelForce", url: base },
    { id: "porsche", nom: "Mur jantes Porsche", sous: "Directement, avec écran de veille", url: "https://evoxmarketing999-debug.github.io/evox-mur-jantes-porsche/v2/?borne" },
    { id: "wheelforce", nom: "Mur jantes WheelForce", sous: "Directement, avec écran de veille", url: new URL("../jantes-wheelforce/?borne", base).href },
    { id: "pack-stage2", nom: "Pack Stage 2 / 340", sous: "Alpine A110 II", url: base + "pack-stage2/" }
  ];
  const lire = () => { try { return localStorage.getItem(CLE) || ""; } catch (e) { return ""; } };

  function ouvrir() {
    if (document.getElementById("reglage-borne")) return;
    const actuel = lire();
    const d = document.createElement("div");
    d.id = "reglage-borne";
    d.style.cssText = "position:fixed;inset:0;z-index:9999;background:rgba(5,5,4,.86);display:grid;place-items:center;padding:20px;font-family:Montserrat,sans-serif;color:#fff";
    d.innerHTML = `<div style="width:min(440px,100%);background:#1A1A17;border-radius:22px;padding:24px">
      <p style="font-size:11px;letter-spacing:.2em;color:#9C9C95;text-transform:uppercase">Réglage équipe</p>
      <p style="font-size:20px;font-weight:700;margin:6px 0 16px">Cette tablette affiche :</p>
      ${ECRANS.map(e => `<button data-id="${e.id}" style="display:block;width:100%;text-align:left;margin-top:8px;padding:16px;border-radius:14px;border:2px solid ${e.id === actuel ? "#CCFF00" : "transparent"};background:#24241F;color:#fff;font:inherit;cursor:pointer">
        <b style="display:block;font-size:16px">${e.nom}${e.id === actuel ? " ✓" : ""}</b><small style="color:#9C9C95">${e.sous}</small></button>`).join("")}
      <button data-fermer style="margin-top:14px;width:100%;padding:12px;border:0;border-radius:12px;background:transparent;color:#9C9C95;font:inherit;cursor:pointer">Annuler</button></div>`;
    d.addEventListener("pointerdown", ev => ev.stopPropagation());
    d.addEventListener("click", ev => {
      ev.stopPropagation();
      const b = ev.target.closest("button");
      if (!b) return;
      if (b.hasAttribute("data-fermer")) return d.remove();
      const e = ECRANS.find(x => x.id === b.dataset.id);
      try { e.id ? localStorage.setItem(CLE, e.id) : localStorage.removeItem(CLE); } catch (er) {}
      location.replace(e.url);
    });
    document.body.appendChild(d);
  }

  document.querySelectorAll("[data-reglage]").forEach(el => {
    let t = null, appuis = 0, premier = 0;
    const stop = () => clearTimeout(t);
    el.addEventListener("pointerdown", ev => {
      ev.stopPropagation(); stop(); t = setTimeout(ouvrir, 3000);
      // ou 5 appuis rapides (en moins de 3 s)
      const now = Date.now(); if (now - premier > 3000) { premier = now; appuis = 0; }
      if (++appuis >= 5) { appuis = 0; stop(); ouvrir(); }
    });
    ["pointerup", "pointerleave", "pointercancel"].forEach(n => el.addEventListener(n, stop));
    el.addEventListener("contextmenu", ev => ev.preventDefault());
    el.addEventListener("click", ev => ev.stopPropagation()); // ne pas fermer l'écran de veille en comptant les appuis
  });
})();
