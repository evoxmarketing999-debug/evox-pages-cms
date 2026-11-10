// Gamme WheelForce présentée chez EVOX — infos reprises des fiches produit evox-performance.com (sans prix).
// id : nom des fichiers dans dessins/ et photos/ (id-1.jpg … id-4.jpg)
// coloris : finitions listées sur wheelforce.de (CF.3 et CF.4 uniquement, sous réserve de disponibilité chez EVOX)
// col / ligne : place sur le mur (g = gauche, d = droite ; ligne en demi-hauteurs, la colonne droite commence plus haut)
// galerie : une lettre par photo de galeries/<id>/NN.jpg — c = photo sur voiture (plein cadre), s = photo studio sur fond blanc
// mur : centre x, centre y et rayon de la jante sur photos/mur.jpg (fractions de la largeur / hauteur)
window.TECHNOS = {
  forged: { nom: "Full Forged", detail: "Aluminium T6061 Aerospace Grade, structure complexe usinée sur 5 axes." },
  flow: { nom: "Flowforming", detail: "Monobloc chauffé, étiré et compacté sur un axe rotatif : surface homogène, résistance et poids proches d’une jante forgée." },
  hypercast: { nom: "WF Hypercast", detail: "Technologie de création WheelForce, avec centres de roue WF Hypercast." }
};

// Teintes approximatives des finitions WheelForce, pour les pastilles
window.TEINTES = {
  "Gloss Steel": "linear-gradient(135deg, #B9BCC1, #6E7277)",
  "Light Gold": "linear-gradient(135deg, #E3C98A, #A88440)",
  "Deep Black": "linear-gradient(135deg, #3A3A3D, #0E0E10)",
  "Satin Bronze": "linear-gradient(135deg, #BC9A6E, #7A5D3C)",
  "Rhodium": "linear-gradient(135deg, #EEF0F2, #A9AEB4)"
};

window.WHEELFORCE = [
  { id: "raceone", col: "g", ligne: 6, nom: "RACE.ONE", finition: "Frozen Silver", techno: "forged", diametres: ["19\"", "22\""], entraxes: "5x112 · 5x120", galerie: "ccccccccc", mur: [0.3131, 0.8198, 0.1105],
    concave: "Deep Concave, Flat Concave, Xtreme Deep Concave (22\" RS Edition)",
    accroche: "Jantes forgées en aluminium T6061 Aerospace Grade, au design concave agressif.",
    compat: ["Audi RS3 8V et 8Y", "BMW M2 F87 et M2 CS", "Ø22\" RS Edition"] },
  { id: "race2", col: "g", ligne: 4, nom: "RACE.2", finition: "Deep Black", techno: "forged", diametres: ["19\"", "20\"", "21\""], entraxes: "5x112 · 5x120", galerie: "cccccs", mur: [0.3223, 0.5877, 0.1280],
    concave: "Centre concave",
    accroche: "Un aspect concave prononcé, qui accentue la sportivité de votre auto.",
    compat: ["Audi RS3 8Y", "BMW M2 G87, M3 G80, M4 G82", "BMW M5 F90, M8"] },
  { id: "race3", col: "g", ligne: 2, nom: "RACE.3", finition: "Frozen Silver", techno: "forged", diametres: ["19\"", "21\""], entraxes: "5x112", galerie: "ccccss", mur: [0.3112, 0.3384, 0.1197],
    concave: "Centre concave",
    accroche: "Un aspect concave prononcé, qui accentue la sportivité de votre auto.",
    compat: ["Audi RS3 8Y", "BMW M2 G87, M3 G80, M4 G82", "BMW M5 F90, M8"] },
  { id: "cf3", col: "d", ligne: 5, nom: "CF.3-FF R", finition: "Satin Bronze", coloris: ["Satin Bronze", "Gloss Steel", "Light Gold", "Deep Black", "Rhodium"], techno: "flow", diametres: ["20\"", "21\"", "22\""], entraxes: "5x112 · 5x120", galerie: "ccccccccccccccc", mur: [0.6400, 0.7058, 0.1243],
    concave: "Ultra Concave (UC) et Extra Deep Concave (XDC), jusqu’à 82 mm de recul",
    accroche: "Des traits fins et tendus jusqu’au bord de la jante, qui mettent en valeur le freinage.",
    compat: ["BMW M2 G87, M3 G80, M4 G82, M3 F80, M4 F82", "BMW Série 3, 4, 5, 8 et Z4", "Audi A4 à A7, RS4, RS5, RS6, RS7", "Mercedes C 63, Classe E, CLS", "Toyota Supra MK5"] },
  { id: "cf4", col: "d", ligne: 3, nom: "CF.4-FF R", finition: "Deep Black", coloris: ["Deep Black", "Satin Bronze", "Gloss Steel", "Light Gold", "Rhodium"], techno: "hypercast", diametres: ["20\"", "21\"", "22\""], entraxes: "5x112 · 5x120", galerie: "cccccc", mur: [0.6280, 0.4613, 0.1225],
    concave: "Centre concave, Ultra Concave (UC)",
    accroche: "Environ 11,15 kg par jante, pour une charge maximale de 690 kg par roue.",
    compat: ["BMW M2 G87, M3 G80, M4 G82, M3 F80, M4 F82", "Audi A4, S4, RS4, A5, S5, RS5, A7, Q3", "Audi RS6, RS7"] },
  { id: "he1", col: "d", ligne: 1, nom: "HE.1-FF", finition: "Gloss Steel", techno: "flow", diametres: ["20\"", "21\""], entraxes: "5x112 · 5x120 · 5x114.3", galerie: "ccss", mur: [0.6308, 0.2175, 0.1243],
    concave: "Curved Deep Concave, Medium Deep Concave, Straight Extreme Concave, jusqu’à 82 mm de recul",
    accroche: "Monobloc allégé fabriqué en Allemagne par flowforming, au design concave agressif.",
    compat: ["BMW M2 G87, M3 G80, M4 G82, M5 F90, M8", "BMW Série 3, 4, 5, 8, X3, X4 M et Z4", "Audi A4 à A7, RS4 à RS7", "Mercedes Classe E, CLS, E 63 AMG", "Porsche Macan, 911 991.2", "Toyota Supra MK5, Tesla Model Y"] }
];
