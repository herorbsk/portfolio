// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking on a link
    const navLinks = navMenu.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// Navbar active state based on current page
document.addEventListener('DOMContentLoaded', () => {
    const currentLocation = location.pathname;
    const menuItems = document.querySelectorAll('.nav-link');

    menuItems.forEach(item => {
        if (item.getAttribute('href') === currentLocation) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.borderBottomColor = 'rgba(45, 55, 72, 0.5)';
    } else {
        navbar.style.borderBottomColor = 'rgba(45, 55, 72, 1)';
    }
});

// Counter Animation
const countElements = document.querySelectorAll('.stat-number[data-count]');

function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-count'));
    let current = 0;
    const increment = target / 30;
    const interval = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + (element.textContent.includes('%') ? '%' : '');
            clearInterval(interval);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 50);
}

// Intersection Observer for counter animation
if (countElements.length > 0) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                animateCounter(entry.target);
                entry.target.classList.add('animated');
            }
        });
    }, { threshold: 0.5 });

    countElements.forEach(element => observer.observe(element));
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add scroll reveal animation
function reveal() {
    const reveals = document.querySelectorAll('.expertise-card, .link-card');
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            element.style.animation = 'fadeInUp 0.6s ease-out forwards';
        }
    });
}

window.addEventListener('scroll', reveal);
reveal(); // Call on load

// Form handling (basic validation)
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !subject || !message) {
            alert('Please fill in all fields');
            return;
        }

        if (!validateEmail(email)) {
            alert('Please enter a valid email address');
            return;
        }

        // Show success message
        const successMessage = document.getElementById('successMessage');
        if (successMessage) {
            successMessage.style.display = 'block';
            successMessage.style.animation = 'fadeInUp 0.6s ease-out';
        }

        // Reset form
        contactForm.reset();

        // Hide success message after 5 seconds
        setTimeout(() => {
            if (successMessage) {
                successMessage.style.display = 'none';
            }
        }, 5000);
    });
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Highlight code blocks (if using code in pages)
function highlightCode() {
    const codeBlocks = document.querySelectorAll('pre code');
    codeBlocks.forEach(block => {
        block.classList.add('language-' + (block.classList[0] || 'text'));
    });
}

document.addEventListener('DOMContentLoaded', highlightCode);

// Lazy load images
if ('IntersectionObserver' in window) {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute('data-src');
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

console.log('%c CyberProfile Portfolio', 'color: #00d4ff; font-size: 24px; font-weight: bold;');
console.log('%c Securing the Digital Future', 'color: #7c3aed; font-size: 14px;');
