# Pages CMS EVOX Performance

Pages du site evox-performance.com (PrestaShop).

## suivez-evox/ — « Suivez EVOX Performance »

- `index.html` : page intégrée au site en iframe (https://evoxmarketing999-debug.github.io/evox-pages-cms/suivez-evox/)
- `code-prestashop.html` + `apercu-version-tableaux.html` : ancienne version sans iframe, en tableaux, à coller directement dans la page CMS

## jantes-wheelforce/ — Gamme WheelForce

- `index.html` : landing au style du mur Porsche (https://evoxmarketing999-debug.github.io/evox-pages-cms/jantes-wheelforce/), cible du QR code de la fiche A4

## borne/ — Accueil de la tablette du magasin

- `index.html` : page d’accueil de l’appli Borne EVOX (choix Porsche / WheelForce)
- `ecran-borne.js` : réglage équipe (appui long 3 s sur « Showroom EVOX » ou sur le logo du pack) pour choisir ce qu'affiche la tablette ; mémorisé dans la tablette

## borne/pack-stage2/ — Fiche tablette Pack Performance Stage 2 / 340 (Alpine A110 II)

- `index.html` : fiche interactive (veille animée, le pack, configurateur avec prix, performances, son ValveTronic)
- `assets/pack.js` : contenus et **prix TTC des 10 déclinaisons** (à mettre à jour si les prix du site changent)

## borne/echappement-997/ — Univers Échappement EVOX Porsche 997 MKI

- `index.html` : veille, l'échappement, composer (pièces à cocher, 3.6L / 3.8L, prix de la ligne complète), le son ValveTronic
- `assets/e997.js` : pièces et **prix TTC** (à mettre à jour si les prix du site changent)

## borne/univers.json — Catalogue des univers (appli Borne EVOX 2.x)

Ajouter un univers = ajouter une entrée (id, nom, sous, url, visite). Il apparaît dans le menu équipe de toutes les tablettes.

