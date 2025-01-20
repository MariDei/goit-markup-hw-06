const modal = document.querySelector('.backdrop');
const openModalBtn = document.querySelector('.hero-button');
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

const scrollBtn = document.querySelector('.scroll-btn');

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
