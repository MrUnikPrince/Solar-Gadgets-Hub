// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navList = document.querySelector('.nav-list');
    
    // Toggle mobile menu
    hamburger.addEventListener('click', function(e) {
        e.stopPropagation();
        navList.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    // Close menu
    function closeMenu() {
        navList.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Close when clicking outside
    document.addEventListener('click', function(e) {
        if (!navList.contains(e.target) && !hamburger.contains(e.target)) {
            closeMenu();
        }
    });

    // Close menu button
    const closeBtn = document.createElement('div');
    closeBtn.className = 'close-menu';
    closeBtn.innerHTML = '&times;';
    closeBtn.addEventListener('click', closeMenu);
    navList.appendChild(closeBtn);

    // Close on resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            closeMenu();
        }
    });
});