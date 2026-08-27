// Initialize AOS when the external library is available.
if (window.AOS) {
    AOS.init({
        offset: 0,
        duration: 1000,
        once: true
    });
}

// Mobile menu functionality
const hamburger = document.getElementById('hamburger');
const cancelBtn = document.getElementById('cancel');
const dropdown = document.getElementById('dropdown');
const dropdownLinks = document.querySelectorAll('.dropdown-links a');

const closeMenu = () => {
    dropdown.classList.remove('active');
    hamburger.classList.remove('hide');
    document.body.style.overflow = '';
};

hamburger.addEventListener('click', () => {
    dropdown.classList.add('active');
    hamburger.classList.add('hide');
    document.body.style.overflow = 'hidden';
});

cancelBtn.addEventListener('click', closeMenu);

dropdownLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
});

document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeMenu();
});

// Tab functionality
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons and contents
        tabBtns.forEach(b => b.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));
        
        // Add active class to clicked button
        btn.classList.add('active');
        
        // Show corresponding content
        const tabId = btn.dataset.tab;
        document.getElementById(`${tabId}-tab`).classList.add('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});