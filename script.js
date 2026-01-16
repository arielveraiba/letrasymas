// REVEAL SCROLL
const reveals = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add('active');
    }
  });
});

// POEMAS INTERACTIVOS
function togglePoem(element) {
  const text = element.querySelector('p');
  text.classList.toggle('hidden');
}
