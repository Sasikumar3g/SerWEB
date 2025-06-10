// Simple scroll-based shape animation
window.addEventListener('scroll', () => {
  const value = window.scrollY;
  const shape1 = document.querySelector('.shape1');
  const shape2 = document.querySelector('.shape2');
  if (shape1 && shape2) {
    shape1.style.transform = `translateY(${value * 0.3}px) rotate(${value * 0.1}deg)`;
    shape2.style.transform = `translateY(-${value * 0.2}px) rotate(-${value * 0.1}deg)`;
  }
});
