const form = document.getElementById('newsletter-form');
const status = document.getElementById('subscription-status');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  status.textContent = 'Inscrição confirmada!';
});
