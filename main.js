const modal = document.querySelector('.backdrop');
const openModalBtn = document.querySelector('.hero-button');
const closeModalBtn = document.getElementById('close-modal-btn');
const mobileModal = document.querySelector('.js-mobile-menu');
const mobileOpenBtn = document.querySelector('.mobile-burger-btn');
const mobileCloseBtn = document.querySelector('.mobile-close-btn');
const navLink = document.querySelector('.nav-link');
const mobileNavLink = document.querySelector('.mobile-nav-link');
const scrollBtn = document.querySelector('.scroll-btn');

openModalBtn.addEventListener('click', () => {
  modal.classList.add('is-open');
});

closeModalBtn.addEventListener('click', () => {
  modal.classList.remove('is-open');
});

window.addEventListener('click', function (event) {
  if (event.target === modal) {
    modal.classList.remove('is-open');
  }
});

mobileOpenBtn.addEventListener('click', () => {
  mobileModal.classList.toggle('is-open');
});

mobileCloseBtn.addEventListener('click', () => {
  mobileModal.classList.remove('is-open');
});

navLink.addEventListener('click', openModalBtn);
mobileNavLink.addEventListener('click', () => {
  mobileCloseBtn();
  openModalBtn();
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
