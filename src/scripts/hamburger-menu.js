// src/scripts/hamburger-menu.js

// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
  const toggleButton = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const hamburgerIcon = document.querySelector('.hamburger-icon');
  const closeIcon = document.querySelector('.close-icon');

  if (toggleButton && mobileMenu) {
    toggleButton.addEventListener('click', function() {
      const isExpanded = toggleButton.getAttribute('aria-expanded') === 'true';
      
      // Toggle aria-expanded attribute
      toggleButton.setAttribute('aria-expanded', String(!isExpanded));
      
      // Toggle menu visibility
      if (isExpanded) {
        // Close menu
        mobileMenu.classList.add('hidden');
        if (hamburgerIcon) hamburgerIcon.classList.remove('hidden');
        if (closeIcon) closeIcon.classList.add('hidden');
      } else {
        // Open menu
        mobileMenu.classList.remove('hidden');
        if (hamburgerIcon) hamburgerIcon.classList.add('hidden');
        if (closeIcon) closeIcon.classList.remove('hidden');
      }
    });

    // Close menu when clicking on nav links (optional UX improvement)
    const navLinks = mobileMenu.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        if (hamburgerIcon) hamburgerIcon.classList.remove('hidden');
        if (closeIcon) closeIcon.classList.add('hidden');
        toggleButton.setAttribute('aria-expanded', 'false');
      });
    });

    // Close menu when clicking outside (optional UX improvement)
    document.addEventListener('click', function(event) {
      const target = event.target;
      const isClickInsideNav = toggleButton.contains(target) || mobileMenu.contains(target);
      const isMenuOpen = !mobileMenu.classList.contains('hidden');
      
      if (!isClickInsideNav && isMenuOpen && window.innerWidth < 768) {
        mobileMenu.classList.add('hidden');
        if (hamburgerIcon) hamburgerIcon.classList.remove('hidden');
        if (closeIcon) closeIcon.classList.add('hidden');
        toggleButton.setAttribute('aria-expanded', 'false');
      }
    });
  }
});