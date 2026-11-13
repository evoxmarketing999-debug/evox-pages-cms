// Silencieux-Catalyseurs EVOX ValveTronic Race — Porsche 991 Turbo (evox-performance.com, produit 99)
// Prix TTC relevé le 13 nov. 2026 (Black Week). Mettre à jour ici si le site change.
window.PRODUIT = {
  vehicule: "Porsche 991 Turbo",
  nom: "Silencieux-Catalyseurs EVOX ValveTronic Race",
  titre: ["991 Turbo", "ValveTronic Race"],
  accroche: "Les turbos étouffent une grande partie du son du moteur : ces silencieux-catalyseurs lui rendent la voix qu’une 991 Turbo mérite.",
  chiffres: [["−6,5 kg", true], ["Decat", true], ["Inox", false], ["Tube 70 mm", false]],
  veille: { l1: "991 Turbo", l2: "ValveTronic Race", sous: "Silencieux-Catalyseurs EVOX · Porsche 991 Turbo",
            stats: [["−6,5", "kg", "Plus léger"], ["2", "modes", "Open · Closed"]] },
  photos: ["p-1.jpg", "p-2.jpg", "p-3.jpg", "p-4.jpg", "p-5.jpg", "p-6.jpg", "app.jpg"],
  situ: ["m-1.jpg", "m-2.jpg"],
  points: [
    ["Gains", "Gain de poids, de puissance et de couple, réactivité moteur améliorée."],
    ["Decat", "Décatalyseurs Bypass Race en inox associés : flux optimisés, contre-pression réduite."],
    ["Son", "En Open, rauque, agressif, métallique, envoûtant ; en Closed, sobre et élégant pour le quotidien."],
    ["Fabrication", "Alliage d’inox spécifique, peinture céramique haute température, pièces modélisées en 3D."]
  ],
  options: [],
  prix: { "": [3599, "939526"] },
  inclus: ["Télécommande + application mobile", "Sorties de silencieux Black PVD"],
  notes: ["Cartographie à prévoir pour l’installation de ce matériel."],
  son: {
    titre: ["Deux caractères,", "une télécommande"],
    modes: [
      { id: "open", nom: "Open", niveau: 1, court: "Valves ouvertes", texte: "En position Open, votre Porsche fait le son d’une voiture de course : l’émotion et l’adrénaline montent avec le compte-tours." },
      { id: "closed", nom: "Closed", niveau: .3, court: "Valves fermées", texte: "En position Closed, votre Porsche est sobre, sage : le grain métallique de l’inox, discret et élégant au quotidien." }
    ],
    note: "Livré avec télécommande et application mobile. Animation indicative : aucun son n’est diffusé par la tablette.",
    photo: "app.jpg"
  }
};
