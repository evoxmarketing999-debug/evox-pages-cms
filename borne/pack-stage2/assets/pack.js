// Pack Performance « STAGE 2 / 340 » by EVOX — Alpine A110 II
// Toutes les infos viennent de la fiche produit evox-performance.com (id 2964), relevées le 12 nov. 2026.
// Prix TTC par déclinaison : à mettre à jour ici si les prix du site changent (fin de Black Week, etc.).
window.PACK = {
  nom: "Pack Performance « STAGE 2 / 340 »",
  vehicule: "Alpine A110 II",
  compat: ["Alpine A110 II", "Alpine A110 II Première Édition"],
  puissance: "330–345 ch", couple: "390–440 Nm",
  banc: { ch: 339, chRegime: "6 368", nm: 409, nmRegime: "3 268", source: "Banc Dynojet" },

  catalyseurs: [
    { id: "cata", nom: "Cata Sport", produit: "DownPipe SuperSport 200 cellules EVOX", court: "Catalyseur sport 200 cellules" },
    { id: "decat", nom: "Decat", produit: "DownPipe Race EVOX", court: "Sans catalyseur" }
  ],
  silencieux: [
    { id: "sans", nom: "Sans silencieux", court: "Sans", img: null },
    { id: "origine", nom: "A110 · canule d’origine", court: "A110", img: "silencieux-origine.jpg" },
    { id: "chrome", nom: "A110 R / R Look · sorties Chrome", court: "Chrome", img: "silencieux-chrome.jpg" },
    { id: "carbone", nom: "A110 R / R Look · sorties Carbone", court: "Carbone", img: "silencieux-carbone.jpg" },
    { id: "pvd", nom: "A110 R / R Look · sorties Black PVD", court: "Black PVD", img: "silencieux-pvd.jpg" }
  ],
  // prix[catalyseur][silencieux] = [prix TTC, référence]
  prix: {
    cata:  { origine: [8249, "928959-1"], sans: [6349, "928959-2"], chrome: [8849, "928959-3"], carbone: [9149, "928959-4"], pvd: [9049, "928959-5"] },
    decat: { origine: [7649, "928959-6"], sans: [5749, "928959"],   chrome: [8249, "928959-7"], carbone: [8549, "928959-8"], pvd: [8449, "928959-9"] }
  },

  // Les 3 éléments du pack + l'option. pt = position du point sur assets/pack.jpg (fractions largeur / hauteur)
  pieces: [
    { id: "downpipe", n: "01", nom: "DownPipe EVOX", sous: "SuperSport 200 cellules ou Race", pt: [0.67, 0.17],
      photos: ["downpipe-1.jpg", "downpipe-2.jpg", "downpipe-3.jpg", "downpipe-4.jpg"],
      accroche: "Remplace l’élément d’origine pour libérer l’échappement.",
      points: [
        ["Débit", "Nette amélioration du débit d’échappement, moins de contre-pression."],
        ["Réponse", "Meilleure réponse du moteur turbo, sonorité plus agressive à l’accélération."],
        ["Matière", "Alliage d’inox spécifique, résistant à la chaleur et à la corrosion, peinture céramique haute température."],
        ["Précision", "Pièces conçues par modélisation 3D, montage comme à l’origine."]
      ] },
    { id: "echangeur", n: "02", nom: "Échangeur-Intercooler EVOX", sous: "Performance · 3,9 L", pt: [0.22, 0.31],
      photos: ["echangeur-1.jpg", "echangeur-2.jpg", "echangeur-3.jpg"],
      accroche: "Développé pour les contraintes thermiques des configurations Stage 2 et au-delà.",
      points: [
        ["Volume", "Cœur haute capacité de 3,9 L, contre 2,5 L pour l’échangeur d’origine."],
        ["Structure", "Architecture Bar & Plate haute densité."],
        ["Température", "Températures d’admission nettement réduites, phénomène de heat soak limité."],
        ["Endurance", "Puissance maintenue dans la durée : accélérations répétées, usage circuit."]
      ] },
    { id: "admission", n: "03", nom: "Kit admission carbone Gruppe M", sous: "Admission directe · double entrée", pt: [0.56, 0.66],
      photos: ["admission-1.jpg", "a110-1.jpg", "a110-2.jpg", "a110-3.jpg"],
      accroche: "Deux entrées d’air : la prise latérale et la grille arrière.",
      points: [
        ["Air frais", "2 fois plus d’air frais qu’à l’origine, jusqu’à +200 % de volume d’air admis."],
        ["Stabilité", "Températures d’air admis stabilisées, contrairement à la boîte à air d’origine enfermée dans la baie."],
        ["Son", "En bonus, une sonorité d’admission incroyable."],
        ["Matière", "Carbone, conçu avec des technologies numériques de dernière génération."]
      ] },
    { id: "silencieux", n: "+", nom: "Silencieux EVOX ValveTronic", sous: "En option · A110, A110 R ou R Look", pt: null,
      photos: ["silencieux-carbone.jpg", "silencieux-chrome.jpg", "silencieux-pvd.jpg", "silencieux-origine.jpg"],
      accroche: "Un son contrôlable par télécommande, sur deux positions.",
      points: [
        ["Open", "Votre Alpine fait le son d’une vraie voiture de sport : rauque, agressif, envoûtant."],
        ["Closed", "Sobre et sage : le grain métallique de l’inox, discret, pour le quotidien."],
        ["Finitions", "A110 avec canule d’origine, ou A110 R / R Look en sorties Chrome, Carbone ou Black PVD."]
      ] }
  ],

  // Tableau EVOX « puissance visée / température / litrage intercooler » (une ligne 340 ch en double sur l'original, gardée une fois)
  litrage: {
    origine: 2.5, evox: 3.9,
    temperatures: ["< 25 °C", "35 °C", "> 35 °C"],
    lignes: [
      [250, [2.3, 2.5], [2.5, 2.8], [2.8, 3.1]],
      [300, [2.7, 3.0], [3.0, 3.3], [3.3, 3.8]],
      [320, [2.9, 3.2], [3.2, 3.6], [3.6, 4.0]],
      [330, [3.0, 3.3], [3.3, 3.7], [3.7, 4.1]],
      [340, [3.1, 3.4], [3.4, 3.8], [3.8, 4.3]],
      [350, [3.2, 3.5], [3.5, 3.9], [3.9, 4.4]]
    ]
  }
};
