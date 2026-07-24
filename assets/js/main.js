document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.side li a');
  if(!links.length) return;
  const targets = Array.from(links)
    .map(a => document.querySelector(a.getAttribute('href')))
    .filter(Boolean);

  const setActive = (id) => {
    links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + id));
  };

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if(e.isIntersecting) setActive(e.target.id);
    });
  }, { rootMargin: '-100px 0px -70% 0px' });

  targets.forEach(t => obs.observe(t));
});
