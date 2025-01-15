const modal = document.getElementById('backdrop');
const openModalBtn = document.getElementById('open-modal-btn');
const closeModalBtn = document.getElementById('close-modal-btn');
const mobileMenu = document.querySelector('.js-mobile-menu');
const mobileOpenBtn = document.querySelector('.mobile-burger-btn');
const mobileCloseBtn = document.querySelector('.mobile-close-btn');

function openModal() {
  modal.classList.add('is-open');
}

function closeModal() {
  modal.classList.remove('is-open');
}

function openMobileMenu() {
  mobileMenu.classList.add('is-open');
}

function closeMobileMenu() {
  mobileMenu.classList.remove('is-open');
}

openModalBtn.addEventListener('click', openModal);

closeModalBtn.addEventListener('click', closeModal);

mobileOpenBtn.addEventListener('click', openMobileMenu);

mobileCloseBtn.addEventListener('click', closeMobileMenu);

window.addEventListener('click', function (event) {
  if (event.target === modal) {
    closeModal();
  }
});
