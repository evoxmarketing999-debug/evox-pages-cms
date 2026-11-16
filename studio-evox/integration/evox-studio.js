/* STUDIO EVOX — apparitions discrètes au défilement (facultatif).
   Sans ce fichier, la page reste complète et lisible.
   Ne touche qu'aux éléments situés dans .evox-studio. */
(function () {
  var root = document.querySelector('.evox-studio');
  if (!root || !('IntersectionObserver' in window)) return;
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var items = root.querySelectorAll('.es-reveal');
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });

  // Les éléments déjà visibles à l'ouverture apparaissent sans attendre
  var vh = window.innerHeight || 800;
  items.forEach(function (el) {
    if (el.getBoundingClientRect().top < vh * 0.9) el.classList.add('is-in');
    else io.observe(el);
  });
  root.classList.add('es-js');
})();
