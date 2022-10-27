import Popup from "./popup.js";
import Component from "./component.js";

const form = document.querySelector('.form');
form.onsubmit = (e) => {
  e.preventDefault();
  const popup = new Popup(document.body, 'div', 'popup', '', 'Форма отправлена!')
  new Component(popup.overlay.node, 'button', 'popup-close-btn', 'x').setListener('click', () => {
    popup.destroy();
  })
  return false;
} 

import "./burger.js";