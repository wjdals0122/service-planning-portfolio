// ── Scroll Reveal ──────────────────────────────
const reveals = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 70);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });
reveals.forEach(el => revealObserver.observe(el));

// ── Nav scroll shadow ──────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
});

// ── Smooth active nav link ─────────────────────
const sections = document.querySelectorAll('section[id], section.proj-section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach(a => {
        a.style.color = a.getAttribute('href') === `#${id}` ? '#002F6C' : '';
        a.style.fontWeight = a.getAttribute('href') === `#${id}` ? '700' : '';
      });
    }
  });
}, { rootMargin: '-40% 0px -40% 0px' });
sections.forEach(sec => sectionObserver.observe(sec));
