// ─── Mobile Menu Toggle ───
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('open');
});

// Close menu on link click
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('open');
    });
});

// ─── Nav scroll effect ───
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ─── Reveal on scroll ───
const revealElements = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.01,
        rootMargin: '0px 0px 0px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // Fallback: if elements are still hidden after 3 seconds, force-show them
    setTimeout(() => {
        revealElements.forEach(el => {
            if (!el.classList.contains('visible')) {
                el.classList.add('visible');
            }
        });
    }, 3000);
} else {
    // No IntersectionObserver support — show everything immediately
    revealElements.forEach(el => el.classList.add('visible'));
}

// ─── Smooth scrolling for anchor links ───
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80;
            const position = target.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top: position, behavior: 'smooth' });
        }
    });
});

