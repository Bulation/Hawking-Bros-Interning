const form = document.querySelector('.form');
console.log(document.querySelector('.form'))
form.onsubmit = () => {
  alert('форма отправлена!');
  return false;
} 