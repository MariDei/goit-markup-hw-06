const modal = document.querySelector('.backdrop');
const openModal = document.querySelector('.hero-button');
const closeModal = document.getElementById('close-modal-btn');
const mobileModal = document.querySelector('.js-mobile-menu');
const mobileOpenModal = document.querySelector('.mobile-burger-btn');
const mobileCloseModal = document.querySelector('.mobile-close-btn');
const navLink = document.querySelector('.nav-link');
const mobileNavLink = document.querySelector('.mobile-nav-link');
const scrollBtn = document.querySelector('.scroll-btn');

openModal.addEventListener('click', () => {
  modal.classList.add('is-open');
});

closeModal.addEventListener('click', () => {
  modal.classList.remove('is-open');
});

window.addEventListener('click', function (event) {
  if (event.target === modal) {
    modal.classList.remove('is-open');
  }
});

mobileOpenModal.addEventListener('click', () => {
  mobileModal.classList.toggle('is-open');
});

mobileCloseModal.addEventListener('click', () => {
  mobileModal.classList.remove('is-open');
});

navLink.addEventListener('click', openModal);
mobileNavLink.addEventListener('click', () => {
  mobileCloseModal();
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 250) {
    scrollBtn.style.display = 'flex';
  } else {
    scrollBtn.style.display = 'none';
  }
});

scrollBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
