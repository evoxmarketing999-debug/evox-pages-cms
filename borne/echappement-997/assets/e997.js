// Échappement EVOX pour Porsche 997 MKI — infos des fiches produit evox-performance.com, prix TTC relevés le 12 nov. 2026 (Black Week).
// Mettre à jour les prix ici si le site change, puis changer le numéro ?v= dans index.html.
window.E997 = {
  vehicule: "Porsche 997 MKI",
  ligne: {
    nom: "Ligne d’échappement EVOX", gain: "+15–20 ch", poids: "−4,9 kg",
    // collecteurs + catalyseurs + silencieux : prix de la ligne complète (site, produit 22)
    prix: { ss: [4499, "939932"], vt: [5299, "939932V"] },
    accroche: "Le moteur est métamorphosé et totalement libéré, ses performances dopées, avec une sonorité envoûtante et ultra sportive."
  },
  pieces: [
    { id: "collecteurs", n: "01", nom: "Collecteurs SuperSport", court: "Collecteurs", prix: [1349, "939981"], img: "collecteurs-1.jpg",
      photos: ["collecteurs-1.jpg", "collecteurs-2.jpg", "collecteurs-3.jpg", "collecteurs-4.jpg", "collecteurs-5.jpg"],
      specs: "Inox · −0,9 kg · tubes 42 mm",
      accroche: "Optimisation de la longueur des tubes, conception F-1 / 3-en-1.",
      points: [["Flux", "Longueur des tubes optimisée et conception F-1 / 3-en-1 : meilleure dynamique des gaz d’échappement."],
               ["Gains", "Gain de puissance et de couple, rendement et réactivité moteur nettement améliorés face aux collecteurs d’origine restrictifs."],
               ["Matière", "Alliage d’inox spécifique, résistant à la chaleur et à la corrosion, peinture céramique haute température."]] },
    { id: "catalyseurs", n: "02", nom: "Catalyseurs SuperSport", court: "Catalyseurs", prix: [1599, "939834"], img: "catalyseurs-2.jpg",
      photos: ["catalyseurs-2.jpg", "catalyseurs-1.jpg", "catalyseurs-3.jpg", "catalyseurs-4.jpg"],
      specs: "Inox · −2 kg · 55 mm · 200 cellules",
      accroche: "Un gain de puissance et de couple qui améliore le rendement et la réactivité du moteur.",
      points: [["Cellules", "Cartouches catalytiques de 200 cellules, moins restrictives que les catalyseurs d’origine."],
               ["Flux", "Écoulement des gaz optimisé et contre-pression réduite."],
               ["Matière", "Alliage d’inox spécifique, peinture céramique haute température, pièces modélisées en 3D."]] },
    { id: "silencieux", n: "03", nom: "Silencieux", court: "Silencieux",
      versions: [
        { id: "ss", nom: "SuperSport", prix: [1499, "939927SS"], img: "sil-ss-1.jpg", specs: "Inox · −2 kg · 55 mm",
          detail: "Dérivé du mode Open du ValveTronic : son rauque, métallique, addictif.",
          photos: ["sil-ss-1.jpg", "sil-ss-2.jpg", "sil-ss-3.jpg", "sil-ss-4.jpg"] },
        { id: "vt", nom: "ValveTronic", prix: [2299, "939833"], img: "sil-vt-1.jpg", specs: "Inox · −0,5 kg · 55 mm",
          detail: "Deux sonorités Open / Closed, par télécommande et appli mobile.",
          photos: ["sil-vt-1.jpg", "sil-vt-2.jpg", "sil-vt-3.jpg", "sil-vt-4.jpg", "sil-vt-5.jpg", "app-valvetronic.jpg"] }
      ],
      accroche: "Une nouvelle émotion sonore : le son sans compromis.",
      points: [["SuperSport", "Dérivé du mode Open de la version ValveTronic : sonorité rauque, métallique et addictive, typée Racing."],
               ["ValveTronic", "Télécommande à deux niveaux : Open, le son d’une voiture de course ; Closed, sobre et confortable au quotidien. En ligne complète ValveTronic : livré avec la nouvelle télécommande et l’appli mobile (App Store et Google Play)."],
               ["Tiptronic", "Pour les boîtes Tiptronic, EVOX recommande la version ValveTronic."]] },
    { id: "sorties", n: "04", nom: "Sorties de silencieux", court: "Sorties", option: true,
      finitions: [
        { id: "chrome", nom: "Chrome", prix: { "3.8": [499, "939904"], "3.6": [549, "939904"] }, img: "sorties-chrome-1.jpg", photos: ["sorties-chrome-1.jpg", "sorties-chrome-2.jpg", "sorties-chrome-3.jpg", "sorties-chrome-4.jpg"] },
        { id: "noir", nom: "Noir", prix: { "3.8": [619, "939904B"], "3.6": [669, "939904B"] }, img: "sorties-noir-1.jpg", photos: ["sorties-noir-1.jpg", "sorties-noir-2.jpg", "sorties-noir-3.jpg", "sorties-noir-4.jpg"] },
        { id: "carbone", nom: "Carbone", prix: { "3.8": [819, "939647"], "3.6": [869, "939647-1"] }, img: "sorties-carbone-1.jpg", photos: ["sorties-carbone-1.jpg", "sorties-carbone-2.jpg", "sorties-carbone-3.jpg"] }
      ],
      specs: "Diamètre 88 mm",
      accroche: "La touche finale d’élégance et de sportivité.",
      points: [["Finitions", "Inox chrome, noir ou inox et carbone, diamètre 88 mm."],
               ["3.6L", "Sur une 997 3.6L, les sorties d’origine ne sont pas compatibles avec la ligne : prévoir les sorties EVOX (bagues de jonction en plus)."],
               ["PSE", "Non compatibles avec les véhicules équipés du PSE d’origine."]] }
  ]
};
