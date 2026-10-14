const alertPlaceholder = document.getElementById('liveAlertPlaceholder');
const contactForm = document.getElementById('contactForm');

const appendAlert = (message, type) => {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible fade show" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('');

  alertPlaceholder.append(wrapper);
};

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault(); //evita qe se recarguue
    appendAlert('Mensaje enviado', 'success');
    contactForm.reset(); 
  });
}