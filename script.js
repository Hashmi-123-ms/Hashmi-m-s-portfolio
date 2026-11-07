// ===== Theme toggle (saved in browser) =====
const root = document.documentElement;
document.getElementById('themeToggle').addEventListener('click', () => {
  const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  try { localStorage.setItem('theme', next); } catch (e) {}
});

// ===== Mobile menu =====
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
menuBtn.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuBtn.classList.toggle('open', open);
  menuBtn.setAttribute('aria-expanded', open);
});
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  navLinks.classList.remove('open');
  menuBtn.classList.remove('open');
  menuBtn.setAttribute('aria-expanded', false);
}));

// ===== Typing animation =====
const roles = ['Software Developer', 'Flutter App Developer', 'Python & Django Developer', 'Problem Solver'];
const typedEl = document.getElementById('typed');
let r = 0, c = 0, deleting = false;
function type() {
  const word = roles[r];
  typedEl.textContent = word.slice(0, c);
  if (!deleting && c < word.length) c++;
  else if (deleting && c > 0) c--;
  else if (!deleting) { deleting = true; return setTimeout(type, 1500); }
  else { deleting = false; r = (r + 1) % roles.length; }
  setTimeout(type, deleting ? 45 : 85);
}
type();

// ===== Scroll reveal + counters =====
const counters = new Set();
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    e.target.classList.add('visible');
    const num = e.target.querySelector('[data-count]');
    if (num && !counters.has(num)) { counters.add(num); countUp(num); }
    io.unobserve(e.target);
  });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach((el, i) => {
  el.style.transitionDelay = `${(i % 4) * 80}ms`;
  io.observe(el);
});
function countUp(el) {
  const target = +el.dataset.count; let n = 0;
  const step = () => { el.textContent = ++n; if (n < target) setTimeout(step, 180); };
  step();
}

// ===== Nav shadow, active link, back-to-top =====
const nav = document.getElementById('nav');
const toTop = document.getElementById('toTop');
const sections = [...document.querySelectorAll('main section[id]')];
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  nav.classList.toggle('scrolled', y > 20);
  toTop.classList.toggle('show', y > 600);
  let current = '';
  sections.forEach(s => { if (y >= s.offsetTop - 120) current = s.id; });
  navLinks.querySelectorAll('a').forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + current));
}, { passive: true });
toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

document.getElementById('year').textContent = new Date().getFullYear();
