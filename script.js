document.addEventListener('DOMContentLoaded', () => {
    // --- Navigation Header Scroll Effect ---
    const header = document.querySelector('header');
    
    function handleScroll() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Call once on load to set initial state
    handleScroll();

    // --- Mobile Navigation ---
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');

    mobileMenu.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when a nav link is clicked
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            navMenu.classList.remove('active');
            
            // Put focus back to body to remove focus from navigation
            document.getElementById("main").focus();
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.navbar')) {
            mobileMenu.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });

    // --- Dynamic Viewport Height Fix for Mobile ---
    function setViewportHeight() {
        // Calculate the actual viewport height
        const vh = window.innerHeight * 0.01;
        // Set the CSS custom property
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }

    // Set initial viewport height
    setViewportHeight();

    // Update on resize and orientation change
    window.addEventListener('resize', setViewportHeight);
    window.addEventListener('orientationchange', () => {
        // Small delay to ensure the browser has updated the viewport
        setTimeout(setViewportHeight, 100);
    });

    // --- Footer Year ---
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // --- Initialize ---
});