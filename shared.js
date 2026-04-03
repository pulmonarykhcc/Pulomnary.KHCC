// Hamburger toggle
function toggleNav() {
  document.getElementById('navLinks').classList.toggle('open');
}
// Shrink nav on scroll
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if(nav) nav.style.height = window.scrollY > 50 ? '54px' : '66px';
});
// Scroll reveal
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
