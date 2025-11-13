// Toggle theme and fade-in
const themeToggle = (() => {
  const btn = document.createElement('button');
  btn.id = 'themeToggle';
  btn.className = 'toggle-btn';
  btn.style.border = 'none';
  btn.style.background = 'transparent';
  btn.style.cursor = 'pointer';
  btn.style.fontSize = '18px';
  btn.style.padding = '6px';

  document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    if (header) header.appendChild(btn);

    const html = document.documentElement;

    if (localStorage.getItem('icomp-theme') === 'light') {
      html.classList.add('light');
      btn.textContent = '☀️';
    } else {
      btn.textContent = '🌙';
    }

    btn.addEventListener('click', () => {
      html.classList.toggle('light');
      const light = html.classList.contains('light');
      localStorage.setItem('icomp-theme', light ? 'light' : 'dark');
      btn.textContent = light ? '☀️' : '🌙';
    });

    const main = document.querySelector('main');
    if (main) main.classList.add('fade-in');
  });
})();

// Resaltar link activo del menú
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('nav a');
  links.forEach(a => {
    if (
      window.location.pathname.endsWith(a.getAttribute('href')) ||
      (a.getAttribute('href') === 'index.html' && window.location.pathname.endsWith('/'))
    ) {
      a.style.background = 'rgba(255,255,255,0.03)';
      a.style.color = 'var(--text)';
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const banner = document.getElementById("privacy-banner");
  const button = document.getElementById("pb-accept");
  if (!banner || !button) return;
  if (!localStorage.getItem("privacidadAceptada")) {
    banner.classList.remove("hidden");
  }
  button.addEventListener("click", function () {
    banner.classList.add("hidden");
    localStorage.setItem("privacidadAceptada", "true");
  });
});
