const elements = document.querySelectorAll('.content, .github-btn');

elements.forEach(el => {
  el.addEventListener('mouseenter', () => {
    el.querySelectorAll('[data-uk]').forEach(e => {
      const ukText = e.getAttribute('data-uk');
      if (ukText) e.innerHTML = ukText;
    });
    if(el.classList.contains('github-btn')){
      const ukText = el.getAttribute('data-uk');
      if(ukText) el.innerHTML = ukText;
    }
  });
  el.addEventListener('mouseleave', () => {
    el.querySelectorAll('[data-en]').forEach(e => {
      const enText = e.getAttribute('data-en');
      if (enText) e.innerHTML = enText;
    });
    if(el.classList.contains('github-btn')){
      const enText = el.getAttribute('data-en');
      if(enText) el.innerHTML = enText;
    }
  });
});

const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*(){}[]<>?'.split('');
const fontSize = 16;
const columns = Math.floor(width / fontSize);

const drops = new Array(columns).fill(1);

function draw() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
  ctx.fillRect(0, 0, width, height);

  ctx.fillStyle = '#0F0';
  ctx.font = fontSize + 'px Share Tech Mono';

  for (let i = 0; i < drops.length; i++) {
    const text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }

  requestAnimationFrame(draw);
}

draw();

window.addEventListener('resize', () => {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
});
