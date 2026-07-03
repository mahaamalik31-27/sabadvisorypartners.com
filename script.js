document.addEventListener('DOMContentLoaded', function () {
  var body = document.body;
  var header = document.querySelector('.site-header');
  var mobileToggle = document.querySelector('.mobile-toggle');
  var navLinks = document.querySelectorAll('.nav a');
  var revealItems = document.querySelectorAll('.reveal');

  if (mobileToggle) {
    mobileToggle.addEventListener('click', function () {
      var isOpen = body.classList.toggle('menu-open');
      mobileToggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      body.classList.remove('menu-open');
      if (mobileToggle) mobileToggle.setAttribute('aria-expanded', 'false');
    });
  });

  revealItems.forEach(function (element) {
    element.classList.add('visible');
  });

  function onScroll() {
    if (header) header.classList.toggle('scrolled', window.scrollY > 24);
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
});
