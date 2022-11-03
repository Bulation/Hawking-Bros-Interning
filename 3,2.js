/* Автосохранение поля формы
  Создайте поле textarea, значение которого будет автоматически сохраняться при каждом его изменении.
  Когда пользователь закроет страницу и потом откроет её заново он должен увидеть последнее введённое значение. */

const textarea = document.querySelector('textarea');
const btn = document.querySelector('.textarea-btn');

const savedText = localStorage.getItem('text')
if (savedText) {
  textarea.value = savedText;
}

btn.addEventListener('click', () => {
  textarea.value = '';
})

window.addEventListener('beforeunload', () => localStorage.setItem('text', textarea.value));