export default class Component extends HTMLElement {
  constructor() {
    super();
  }

  static selector = '';

  static template = '';
  static templateUrl = '';

  static styles = '';
  static stylesUrl = '';

  /* Hook call when element adds in DOM */
  connectedCallback() {}

  /* Hook call when delete element in DOM */
  disconnectedCallback() {}

  /* Hook call when change attributes */
  attributeChangedCallback() {}

  async #getTemplate() {
    if (this.constructor.template) {
      return this.constructor.template;
    }

    if (this.constructor.templateUrl) {
      const response = await fetch(this.constructor.templateUrl);
      return response.text();
    }

    return '';
  }

  async #getStyles() {
    if (this.constructor.styles) {
      return this.constructor.styles;
    }

    if (this.constructor.stylesUrl) {
      const response = await fetch(this.constructor.stylesUrl);
      return response.text();
    }

    return '';
  }

  #getSelector() {
    return this.constructor.selector;
  }
}
