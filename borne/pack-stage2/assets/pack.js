// Pack Performance « STAGE 2 / 340 » by EVOX — Alpine A110 II
// Toutes les infos viennent de la fiche produit evox-performance.com (id 2964), relevées le 12 nov. 2026.
// Prix TTC par déclinaison : à mettre à jour ici si les prix du site changent (fin de Black Week, etc.).
window.PACK = {
  nom: "Pack Performance « STAGE 2 / 340 »",
  vehicule: "Alpine A110 II",
  compat: ["Alpine A110 II", "Alpine A110 II Première Édition"],
  puissance: "330–345 ch", couple: "390–440 Nm",
  banc: { ch: 339, chRegime: "6 368", nm: 409, nmRegime: "3 268", source: "Banc Dynojet" },
  // Courbe redessinée d'après l'image du relevé Dynojet (assets/dyno.jpg) : tracés relevés pixel par pixel,
  // régime lu sur l'axe du graphique, valeurs recalées pour que les pics égalent la légende du banc (339,26 ch · 409,36 Nm).
  courbe: {"regimes":[1825,1850,1875,1900,1925,1950,1975,2000,2025,2050,2075,2100,2125,2150,2175,2200,2225,2250,2275,2300,2325,2350,2375,2400,2425,2450,2475,2500,2525,2550,2575,2600,2625,2650,2675,2700,2725,2750,2775,2800,2825,2850,2875,2900,2925,2950,2975,3000,3025,3050,3075,3100,3125,3150,3175,3200,3225,3250,3275,3300,3325,3350,3375,3400,3425,3450,3475,3500,3525,3550,3575,3600,3625,3650,3675,3700,3725,3750,3775,3800,3825,3850,3875,3900,3925,3950,3975,4000,4025,4050,4075,4100,4125,4150,4175,4200,4225,4250,4275,4300,4325,4350,4375,4400,4425,4450,4475,4500,4525,4550,4575,4600,4625,4650,4675,4700,4725,4750,4775,4800,4825,4850,4875,4900,4925,4950,4975,5000,5025,5050,5075,5100,5125,5150,5175,5200,5225,5250,5275,5300,5325,5350,5375,5400,5425,5450,5475,5500,5525,5550,5575,5600,5625,5650,5675,5700,5725,5750,5775,5800,5825,5850,5875,5900,5925,5950,5975,6000,6025,6050,6075,6100,6125,6150,6175,6200,6225,6250,6275],"ch":[44.5,50.1,55.1,59.8,64.0,68.4,72.9,78.0,83.2,88.8,95.1,100.7,105.8,110.2,114.1,117.1,119.7,121.9,123.9,125.7,127.6,129.1,130.5,131.9,133.6,135.3,137.1,139.3,141.3,143.2,144.9,146.3,147.5,148.7,149.7,150.7,151.9,153.0,154.2,155.2,156.5,158.1,160.5,163.5,166.7,170.2,173.7,177.2,180.7,184.0,187.1,190.1,193.1,196.2,199.0,201.4,204.4,206.6,208.3,210.2,212.1,213.4,214.5,215.5,216.6,217.4,217.9,218.7,219.8,221.2,223.4,225.3,227.0,228.4,229.4,230.1,230.9,232.4,233.7,235.3,236.2,236.7,237.6,238.5,239.8,241.1,242.3,243.7,244.6,246.0,247.3,248.6,250.1,251.4,252.1,252.9,253.7,255.0,255.8,256.8,257.9,258.9,259.8,260.8,261.0,261.4,262.6,263.4,264.2,265.5,266.9,268.2,269.8,271.6,273.2,275.3,277.4,279.7,282.0,283.2,284.8,286.7,288.3,289.2,290.5,291.6,292.8,293.4,294.1,294.4,294.4,295.1,296.0,297.6,299.3,300.5,302.2,303.4,304.6,305.5,306.6,307.7,309.0,310.1,311.4,313.0,314.1,314.7,315.5,317.6,319.1,320.3,321.6,323.1,324.6,327.2,330.2,332.1,332.3,333.0,334.1,334.9,335.7,336.6,338.2,339.0,339.3,339.1,337.5,335.5,335.1,335.1,335.7,336.2,336.3,334.4,326.9,312.9,307.0],"nm":[156.5,175.1,190.3,204.6,216.1,228.1,241.1,253.4,268.4,283.7,299.5,313.2,327.1,337.4,346.6,351.6,355.0,358.2,358.5,358.5,358.5,358.5,360.1,361.3,361.8,363.7,364.0,364.0,364.5,366.4,367.8,369.5,368.9,366.7,364.5,364.0,364.0,362.0,361.3,360.4,358.6,360.5,363.0,365.8,369.0,370.7,375.1,378.9,382.8,386.1,389.3,393.2,396.5,400.3,402.3,402.7,406.4,408.1,409.4,407.8,407.7,407.7,407.5,404.1,402.8,402.3,402.3,402.3,399.1,396.8,396.8,396.8,396.8,396.8,396.8,396.8,394.9,394.1,394.1,394.1,393.2,391.3,391.3,391.3,389.4,388.6,388.6,388.6,388.6,388.0,386.1,385.9,385.9,385.9,384.4,383.1,382.7,380.8,380.4,380.4,380.4,379.0,376.0,377.1,375.6,374.8,371.9,370.5,370.1,369.5,369.5,369.5,369.5,369.5,369.5,369.7,372.6,374.9,374.9,374.9,374.9,374.9,374.9,374.9,374.9,374.9,371.6,369.5,369.5,368.6,367.3,365.9,364.0,364.0,364.0,364.0,364.0,364.0,364.0,364.0,363.9,362.0,361.3,361.3,361.3,361.3,361.3,361.3,361.3,361.3,359.5,358.5,358.5,358.5,359.3,361.2,361.3,361.3,360.0,360.1,361.0,359.1,358.3,357.4,356.6,355.8,355.0,353.1,350.3,345.4,342.1,342.1,342.1,342.1,338.8,336.0,326.7,309.5,301.1]},

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
