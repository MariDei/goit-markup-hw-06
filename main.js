const modal = document.getElementById('backdrop');
const openModalBtn = document.getElementById('open-modal-btn');
const closeModalBtn = document.getElementById('close-modal-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuBtn = document.querySelector('.mobile-nav-menu');
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

mobileMenuBtn.addEventListener('click', openMobileMenu);

mobileCloseBtn.addEventListener('click', closeMobileMenu);

window.addEventListener('click', function (event) {
  if (event.target === modal) {
    closeModal();
  }
});
