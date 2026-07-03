/**
 * Responsive Mobile Navigation Toggle
 * Handles standard click interactions and basic accessibility focus states.
 */
document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.querySelector('.menu-toggle');
  const navMenu = document.getElementById('primary-nav');

  // Verify elements exist on current template before applying events
  if (toggleButton && navMenu) {
    toggleButton.addEventListener('click', () => {
      // 1. Check if menu is currently expanded for screen readers
      const isExpanded = toggleButton.getAttribute('aria-expanded') === 'true';
      
      // 2. Toggle state utility classes on elements
      toggleButton.classList.toggle('open');
      navMenu.classList.toggle('active');
      
      // 3. Update accessibility state properties dynamically
      toggleButton.setAttribute('aria-expanded', !isExpanded);
    });

    // Optional: Close menu automatically if user clicks outside of the header area
    document.addEventListener('click', (event) => {
      const isClickInsideHeader = event.target.closest('.site-header');
      
      if (!isClickInsideHeader && navMenu.classList.contains('active')) {
        toggleButton.classList.remove('open');
        navMenu.classList.remove('active');
        toggleButton.setAttribute('aria-expanded', 'false');
      }
    });
  }
});
