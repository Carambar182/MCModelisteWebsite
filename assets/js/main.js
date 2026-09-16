(function () {
  'use strict';

  /* ---- menu mobile ---- */
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('menu');

  if (toggle && nav) {
    var setOpen = function (open) {
      toggle.setAttribute('aria-expanded', String(open));
      nav.setAttribute('data-open', String(open));
    };

    toggle.addEventListener('click', function () {
      setOpen(toggle.getAttribute('aria-expanded') !== 'true');
    });

    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) setOpen(false);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        setOpen(false);
        toggle.focus();
      }
    });

    // Le menu est un panneau plein écran sous 900px ; au-delà il redevient
    // une barre, et l'état ouvert doit être oublié.
    window.matchMedia('(min-width: 900px)').addEventListener('change', function (e) {
      if (e.matches) setOpen(false);
    });
  }

  /* ---- révélation au défilement ---- */
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  var items = document.querySelectorAll('.reveal');

  if (!reduced.matches && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0, rootMargin: '0px 0px -10% 0px' });

    items.forEach(function (el) {
      var group = el.parentElement;
      var peers = group ? group.querySelectorAll(':scope > .reveal') : [];
      var index = Array.prototype.indexOf.call(peers, el);
      el.style.setProperty('--reveal-delay', Math.max(0, index) * 70 + 'ms');
      observer.observe(el);
    });
  } else {
    items.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ---- année du copyright ---- */
  var year = document.getElementById('annee');
  if (year) year.textContent = new Date().getFullYear();
})();
