document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    window.addEventListener('scroll', function () {
        let current = '';

        let windowMid = window.innerHeight / 2;

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop <= windowMid && sectionTop >= -windowMid) {
                current = section.getAttribute('id');
                section.classList.add('fadeIn'); // Add animation class
            } else {
                section.classList.remove('fadeIn'); // Remove animation class
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });
});
