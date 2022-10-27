const burger = document.querySelector('.burger')
const nav = document.querySelector('.navigation')

function toggleMenuClasses() {
  if (document.body.clientWidth > 1200) {
    return false;
  }
  burger.classList.toggle('burger_active');
  nav.classList.toggle('navigation_active');
  if (!nav.classList.contains('navigation_active')) {
    nav.classList.add('navigation_inactive');
  } else {
    nav.classList.remove('navigation_inactive');
  }
  document.body.classList.toggle('body_overlay');
}

burger.addEventListener('click', toggleMenuClasses)
nav.addEventListener('click', (e) => {
  if (e.target.classList.contains('navigation-list__link')) {
    toggleMenuClasses();
  }
});
document.body.addEventListener('click', (e) => {
  if (!e.target.closest('.navigation, .burger') && burger.classList.contains('burger_active')) {
    toggleMenuClasses();
  }
});