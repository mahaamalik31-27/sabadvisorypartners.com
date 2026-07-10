const menuBtn = document.querySelector('.menu-btn') || document.querySelector('.menu');
const nav = document.querySelector('.nav') || document.querySelector('.desktop-nav');
if (menuBtn && nav) {
  menuBtn.addEventListener('click', () => nav.classList.toggle('open'));
}

const whatsappStyles = document.createElement('link');
whatsappStyles.rel = 'stylesheet';
whatsappStyles.href = 'whatsapp.css?v=16';
document.head.appendChild(whatsappStyles);

const waUrl = 'https://wa.me/971585992893?text=Hello%20SAB%20Advisory%20Partners%2C%20I%20would%20like%20to%20submit%20an%20enquiry.';
let whatsappWidget = document.querySelector('.whatsapp-widget');
if (!whatsappWidget) {
  whatsappWidget = document.createElement('a');
  whatsappWidget.className = 'whatsapp-widget';
  whatsappWidget.href = waUrl;
  whatsappWidget.target = '_blank';
  whatsappWidget.rel = 'noopener';
  whatsappWidget.setAttribute('aria-label', 'WhatsApp SAB Advisory Partners');
  whatsappWidget.innerHTML = '<span class="wa-icon" aria-hidden="true"></span><span class="wa-label">WhatsApp</span>';
  document.body.appendChild(whatsappWidget);
} else {
  whatsappWidget.href = waUrl;
  whatsappWidget.innerHTML = '<span class="wa-icon" aria-hidden="true"></span><span class="wa-label">WhatsApp</span>';
}
