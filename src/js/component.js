export default class Component {
  constructor(parentNode, tagName, className, content) {
    const el = document.createElement(tagName);
    el.className = className;
    el.textContent = content;
    parentNode.append(el);
    this.parentNode = parentNode;
    this.node = el;
  }

  setListener(event, callback, params = null) {
    this.node.addEventListener(event, callback, params);
    return this;
  }

  setClass(className) {
    this.node.classList.add(className);
    return this;
  }

  removeClass(className) {
    this.node.classList.remove(className);
    return this;
  }
}