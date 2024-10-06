// JavaScript for Menu Animation and Animations on Scroll

// Variables
const navLinks = document.querySelector('.nav-links');
const menuIcon = document.querySelector('.menu-icon');

// Toggle Mobile Menu
menuIcon.addEventListener('click', () => {
  navLinks.classList.toggle('nav-active');
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
