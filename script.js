document.addEventListener('DOMContentLoaded', () => {
    // --- Navigation Header Scroll Effect ---
    const header = document.querySelector('header');
    const scrollIndicator = document.querySelector('.scroll-indicator');

    function handleScroll() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
            // Hide scroll indicator when user starts scrolling
            scrollIndicator.style.opacity = '0';
            scrollIndicator.style.visibility = 'hidden';
        } else {
            header.classList.remove('scrolled');
            // Show scroll indicator when back at top
            scrollIndicator.style.opacity = '0.7';
            scrollIndicator.style.visibility = 'visible';
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

    // Update on resize and orientation change
    window.addEventListener('load', setViewportHeight);
    window.addEventListener('resize', setViewportHeight);
    window.addEventListener('orientationchange', setViewportHeight);

    setViewportHeight();

    // --- Footer Year ---
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }
});