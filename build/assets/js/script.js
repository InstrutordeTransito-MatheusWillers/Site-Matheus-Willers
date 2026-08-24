/**
 * SCRIPT.JS — Matheus Willers | Instrutor de Trânsito
 * Interações e scripts auxiliares
 */

document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll adicional para links de âncora caso necessário
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});
