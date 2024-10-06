// JavaScript for Menu Animation, Scroll Behavior, and Animations on Scroll

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
  if (window.scrollY > lastScrollY && window.scrollY > 100) {
    // Hide header after scrolling down more than 100px
    header.classList.add('header-hidden');
  } else {
    header.classList.remove('header-hidden');
  }
  lastScrollY = window.scrollY;
});

// Fade-In Animations
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add('show');
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});
