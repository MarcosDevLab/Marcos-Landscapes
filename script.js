// script.js

// Hamburger Menu
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Form Validation
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const inputs = form.querySelectorAll('input, textarea');
    let isValid = true;

    inputs.forEach(input => {
        if(!input.value) {
            isValid = false;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });

    if(isValid) {
        form.submit();
    }
});

// Gallery Lightbox
const galleryImages = document.querySelectorAll('.gallery img');
const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.querySelector('.lightbox img');

galleryImages.forEach(image => {
    image.addEventListener('click', () => {
        lightbox.classList.add('active');
        lightboxImg.src = image.src;
    });
});

lightbox.addEventListener('click', () => {
    lightbox.classList.remove('active');
});

// Smooth Scrolling
const scrollLinks = document.querySelectorAll('a[href^="#"];');

scrollLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Scroll Animations
const sections = document.querySelectorAll('section');

const options = {
    threshold: 0.5
};

const callback = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
};

const observer = new IntersectionObserver(callback, options);
sections.forEach(section => {
    observer.observe(section);
});