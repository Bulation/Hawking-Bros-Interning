const input = document.querySelector('.color-input');
const targetBlock = document.querySelector('.target');

const savedColor = localStorage.getItem('color')
if (savedColor) {
  targetBlock.style.backgroundColor = savedColor;
  input.value = savedColor;
}

input.addEventListener('input', () => {
  targetBlock.style.backgroundColor = input.value;
})

window.addEventListener('beforeunload', () => localStorage.setItem('color', input.value));