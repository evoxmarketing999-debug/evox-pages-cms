// Silencieux EVOX ValveTronic « RACE TITANIUM » — Porsche 992 GT3 / GT3 RS (evox-performance.com, produit 4037)
// Prix TTC relevés le 13 nov. 2026 (Black Week). Mettre à jour ici si le site change.
window.PRODUIT = {
  vehicule: "Porsche 992 GT3 / GT3 RS",
  nom: "Silencieux EVOX ValveTronic RACE TITANIUM",
  titre: ["992 GT3", "Race Titanium"],
  accroche: "Poids ultra réduit, réactivité moteur accrue, sonorité radicale et finition exclusive : le meilleur de l’échappement EVOX, en titane.",
  chiffres: [["Titane", true], ["−10 kg", true], ["Tube 65–100 mm", false], ["Sorties 100 mm", false]],
  veille: { l1: "992 GT3", l2: "Race Titanium", sous: "Silencieux ValveTronic · Porsche 992 GT3 / GT3 RS",
            stats: [["7", "kg", "Le silencieux titane"], ["−10", "kg", "Face à l’origine"]] },
  photos: ["p-1.jpg", "p-2.jpg", "p-3.jpg", "p-4.jpg", "p-5.jpg", "p-6.jpg"],
  situ: ["m-1.jpg", "m-2.jpg", "m-3.jpg", "m-4.jpg"],
  points: [
    ["Poids", "Origine 16,6 kg · EVOX inox 10,6 kg · EVOX RACE TITANIUM 7 kg : près de 10 kg de moins qu’à l’origine."],
    ["Conduite", "Direction plus vive, train arrière plus mobile : une GT3 encore plus affûtée, sur route comme sur circuit."],
    ["Flux", "Tube évolutif 65–100 mm et sorties de 100 mm : moins de contre-pression, meilleure montée en régime, réponse plus directe."],
    ["Son", "Titane et « Megaphone Sound Design » : grondement grave à bas régime, voix rauque à mi-régime, stridence métallique typée GT en haut du compte-tours."],
    ["Fabrication", "Alliage de titane spécifique, pièces modélisées en 3D, fixations d’origine respectées."]
  ],
  options: [
    { id: "boitier", nom: "Boîtier de gestion de valves", aide: "Fortement recommandé : 3 modes (Ouvertes, Fermées, Origine).",
      choix: [{ id: "sans", nom: "Sans" }, { id: "avec", nom: "Avec" }], defaut: "avec" }
  ],
  prix: { "sans": [5999, "937835TITANE"], "avec": [6499, "937835TITANE-1"] },
  inclus: [],
  notes: ["Le boîtier de gestion de valves donne accès aux 3 modes : Ouvertes, Fermées et Origine."],
  son: {
    titre: ["Trois modes,", "un seul titane"],
    modes: [
      { id: "ouvertes", nom: "Ouvertes", niveau: 1, court: "Valves ouvertes", texte: "Valves totalement ouvertes, flux libéré au maximum : sonorité course, volume élevé, pour les montées en régime franches." },
      { id: "fermees", nom: "Fermées", niveau: .3, court: "Valves fermées", texte: "Son présent mais contenu : le timbre métallique du titane reste audible, avec plus de discrétion pour le quotidien." },
      { id: "origine", nom: "Origine", niveau: .6, court: "Gestion d’origine", texte: "Ouverture des valves selon la pression sur l’accélérateur, comme à l’origine : le compromis idéal entre confort et sportivité." }
    ],
    note: "Les 3 modes sont pilotés par le boîtier de gestion de valves (option). Animation indicative : aucun son n’est diffusé par la tablette.",
    photo: "p-3.jpg"
  }
};
