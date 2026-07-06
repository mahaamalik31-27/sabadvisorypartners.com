const menuBtn = document.querySelector('.menu-btn') || document.querySelector('.menu');
const nav = document.querySelector('.nav') || document.querySelector('.desktop-nav');
if (menuBtn && nav) {
  menuBtn.addEventListener('click', () => nav.classList.toggle('open'));
}
