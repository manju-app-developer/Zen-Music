// Mobile Menu Toggle with Animation and Smooth Effects
const menuIcon = document.getElementById('menu-icon');
const navList = document.querySelector('#nav ul');

menuIcon.addEventListener('click', () => {
    navList.classList.toggle('active');
    menuIcon.classList.toggle('open');
});

// Automatic Image Slider with Advanced Smooth Transitions
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

// Function to handle smooth transitions
function showSlides() {
    slides.forEach((slide, index) => {
        slide.style.opacity = '0';
        slide.style.transition = 'opacity 1s ease-in-out, transform 1s ease-in-out';
        slide.style.transform = 'scale(0.9)';
        slide.style.transitionDelay = `${index * 0.2}s`; // Adding delay for smooth staggered effect
    });
    
    slideIndex = (slideIndex + 1) % totalSlides; // Move to the next slide
    slides[slideIndex].style.display = 'block';
    
    // Add transitions after setting the display
    setTimeout(() => {
        slides[slideIndex].style.opacity = '1';
        slides[slideIndex].style.transform = 'scale(1)';
    }, 50); // Add slight delay before applying fade-in and scaling
    
    // Loop the slideshow
    setTimeout(showSlides, 3500); // Change slides every 3.5 seconds
}

// On page load, start the slider
document.addEventListener('DOMContentLoaded', () => {
    showSlides();
});

// Smooth Scroll for Anchor Links
const anchorLinks = document.querySelectorAll('a[href^="#"]');

anchorLinks.forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        e.preventDefault();
        
        const targetId = anchor.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        // Smooth scroll to the target element
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    });
});

// Scroll Animation for Sections
const sections = document.querySelectorAll('.content-section');
const options = {
    root: null, 
    rootMargin: '0px', 
    threshold: 0.5,
};

// Intersection Observer to trigger animation when sections come into view
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
}, options);

// Observe each section
sections.forEach(section => {
    observer.observe(section);
});

// Add Hover Effects to Video Items
const videoItems = document.querySelectorAll('.video-item');
videoItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.transform = 'scale(1.05)';
        item.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.3)';
    });

    item.addEventListener('mouseout', () => {
        item.style.transform = 'scale(1)';
        item.style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.1)';
    });
});

// Add Hover Effects to Music Items
const musicItems = document.querySelectorAll('.music-item');
musicItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.transform = 'scale(1.05)';
        item.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.3)';
    });

    item.addEventListener('mouseout', () => {
        item.style.transform = 'scale(1)';
        item.style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.1)';
    });
});
