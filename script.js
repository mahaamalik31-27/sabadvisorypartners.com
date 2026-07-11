const menuBtn = document.querySelector('.menu-btn') || document.querySelector('.menu');
const nav = document.querySelector('.nav') || document.querySelector('.desktop-nav');
if (menuBtn && nav) {
  menuBtn.addEventListener('click', () => nav.classList.toggle('open'));
}

const whatsappStyles = document.createElement('link');
whatsappStyles.rel = 'stylesheet';
whatsappStyles.href = 'whatsapp.css?v=21';
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
  document.body.appendChild(whatsappWidget);
}
whatsappWidget.href = waUrl;
whatsappWidget.innerHTML = '<span class="wa-icon" aria-hidden="true"></span><span class="wa-label">WhatsApp</span>';

const enquiryForm = document.getElementById('enquiryForm');
if (enquiryForm) {
  enquiryForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const data = new FormData(enquiryForm);
    const name = (data.get('name') || '').toString().trim();
    const email = (data.get('email') || '').toString().trim();
    const phone = (data.get('phone') || '').toString().trim();
    const enquiryType = (data.get('enquiry_type') || '').toString().trim();
    const message = (data.get('message') || '').toString().trim();
    const subject = 'New SAB Advisory Partners Website Enquiry';
    const body = [
      'New enquiry from SAB Advisory Partners website',
      '',
      'Name: ' + name,
      'Email: ' + email,
      'Phone / WhatsApp: ' + phone,
      'Enquiry Type: ' + enquiryType,
      '',
      'Message:',
      message
    ].join('\n');
    window.location.href = 'mailto:info@sabadvisorypartners.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    const note = enquiryForm.querySelector('.form-note');
    if (note) {
      note.textContent = 'Your email app should open with the enquiry ready to send. You can also use the WhatsApp button for a direct message.';
    }
  });
}
