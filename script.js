const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');

if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
    });
  });
}

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

document.querySelectorAll('img[onerror]').forEach(img => {
  img.addEventListener('error', () => {
    img.style.display = 'none';
    const fallback = img.nextElementSibling;
    if (fallback && fallback.classList.contains('widget-fallback')) fallback.style.display = 'block';
  });
});
