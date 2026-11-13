// Kit admission en carbone Gruppe M — Alpine A110 (evox-performance.com, produit 2614)
// Prix TTC relevés le 13 nov. 2026 (Black Week). Mettre à jour ici si le site change.
window.PRODUIT = {
  vehicule: "Alpine A110 II",
  nom: "Kit admission en carbone Gruppe M",
  titre: ["A110", "Gruppe M"],
  accroche: "Deux entrées d’air, la plus grande boîte à air conçue pour l’A110, en carbone visible depuis la vitre arrière.",
  chiffres: [["Jusqu’à +17 ch", true], ["Jusqu’à +20 Nm", true], ["Carbone", false], ["Filtre K&N", false]],
  veille: { l1: "A110", l2: "Gruppe M", sous: "Kit admission en carbone · Alpine A110 II",
            stats: [["+17", "ch", "Gain max au banc"], ["2", "entrées", "Latérale + arrière"]] },
  photos: ["p-1.jpg", "p-2.jpg", "p-3.jpg", "double-entree.jpg"],
  situ: ["m-1.jpg", "m-2.jpg", "m-3.jpg", "m-4.jpg", "m-5.jpg", "m-6.jpg", "m-7.jpg", "m-8.jpg", "m-9.jpg", "m-10.jpg", "m-11.jpg", "m-12.jpg", "m-13.jpg", "m-14.jpg", "m-15.jpg"],
  points: [
    ["Air frais", "2 entrées d’air (latérale + grille sous la lunette) : 2 fois plus d’air frais qu’à l’origine. +170 % de volume d’admission, jusqu’à +200 % en modifiant une partie de la plage arrière."],
    ["Température", "Conduit carbone qui bloque l’air chaud de la baie : températures d’admission stabilisées, meilleure réactivité du moteur et du turbo."],
    ["Son", "Sonorité d’admission nettement plus puissante et marquée."],
    ["Fabrication", "Gruppe M, préparateur japonais depuis 1996. Filtre K&N coton multicouches lavable, tous les accessoires et la notice fournis."],
    ["Compatibilité", "Alpine A110 II, toutes versions. Aussi intégré au Pack Performance Stage 2 EVOX."]
  ],
  options: [
    { id: "vehicule", nom: "Véhicule", choix: [{ id: "a110", nom: "A110 · S · GT" }, { id: "a110r", nom: "A110 R" }], defaut: "a110" },
    { id: "durite", nom: "Durite inlet de turbo", choix: [{ id: "sans", nom: "Sans" }, { id: "avec", nom: "Avec" }], defaut: "sans" }
  ],
  prix: {
    "a110|sans": [2479, "929086"], "a110|avec": [2559, "929086"],
    "a110r|sans": [2479, "929086R"], "a110r|avec": [2559, "929086R"]
  },
  inclus: ["Filtre à air sport K&N lavable", "Tous les accessoires et la notice d’installation"],
  notes: [],
  perfs: {
    titre: "Gains au banc",
    intro: "Deux relevés publiés par EVOX. Les gains varient selon le régime : voici les valeurs annoncées sur chaque relevé.",
    releves: [
      { image: "courbe-2.jpg", titre: "Relevé EVOX · banc du 06/02/2025",
        gains: [["+17 ch", "gain max à 5 700 tr/min"], ["+20 Nm", "gain max à 5 500 tr/min"], ["+6 ch / +14 Nm", "au pic de puissance et de couple"]] },
      { image: "gains.jpg", titre: "Second relevé au banc",
        gains: [["+15 ch", "à 5 500 tr/min"], ["+7,5 ch", "au régime de puissance max"], ["+14 Nm", "à 4 080 tr/min"]] }
    ]
  }
};
