const root = document.documentElement;
const body = document.body;
const header = document.querySelector('.site-header');
const themeToggle = document.querySelector('.theme-toggle');
const themeLabel = document.querySelector('.theme-label');
const mobileToggle = document.querySelector('.mobile-toggle');
const navLinks = document.querySelectorAll('.nav a');
const cursorGlow = document.querySelector('.cursor-glow');

const savedTheme = localStorage.getItem('sab-theme');
if (savedTheme) {
  root.setAttribute('data-theme', savedTheme);
}

function syncThemeLabel() {
  const isDark = root.getAttribute('data-theme') === 'dark';
  themeLabel.textContent = isDark ? 'Light' : 'Dark';
  document.querySelector('meta[name="theme-color"]').setAttribute('content', isDark ? '#06131d' : '#f7f4ed');
}

syncThemeLabel();

themeToggle?.addEventListener('click', () => {
  const nextTheme = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', nextTheme);
  localStorage.setItem('sab-theme', nextTheme);
  syncThemeLabel();
});

mobileToggle?.addEventListener('click', () => {
  const isOpen = body.classList.toggle('menu-open');
  mobileToggle.setAttribute('aria-expanded', String(isOpen));
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    body.classList.remove('menu-open');
    mobileToggle?.setAttribute('aria-expanded', 'false');
  });
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });

document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

function onScroll() {
  header?.classList.toggle('scrolled', window.scrollY > 24);
}

window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

window.addEventListener('pointermove', (event) => {
  if (!cursorGlow) return;
  cursorGlow.style.left = `${event.clientX}px`;
  cursorGlow.style.top = `${event.clientY}px`;
});
