// JavaScript for Menu Animation and Scroll Behavior

// Variables
const header = document.querySelector('header');
const navLinks = document.querySelector('.nav-links');
const menuIcon = document.querySelector('.menu-icon');
let lastScrollY = window.scrollY;

// Toggle Mobile Menu
menuIcon.addEventListener('click', () => {
  navLinks.classList.toggle('nav-active');
});

// Hide Header on Scroll Down
window.addEventListener('scroll', () => {
  if (window.scrollY > lastScrollY) {
    header.classList.add('header-hidden');
  } else {
    header.classList.remove('header-hidden');
  }
  lastScrollY = window.scrollY;
});
