 // Mobile Menu Toggle
 const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
 const navLinks = document.querySelector('.nav-links');

 mobileMenuBtn.addEventListener('click', () => {
     navLinks.classList.toggle('active');
 });

 // Smooth Scrolling
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
     anchor.addEventListener('click', function (e) {
         e.preventDefault();
         document.querySelector(this.getAttribute('href')).scrollIntoView({
             behavior: 'smooth'
         });
     });
 });

 // Navbar Background Change on Scroll
 window.addEventListener('scroll', () => {
     const navbar = document.querySelector('.navbar');
     if (window.scrollY > 50) {
         navbar.style.backgroundColor = '#1a1a1a';
     } else {
         navbar.style.backgroundColor = 'var(--secondary)';
     }
 });
