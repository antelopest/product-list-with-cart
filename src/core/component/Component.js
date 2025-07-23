export default class Component extends HTMLElement {
  static tag = '';

  #container = null;

  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
    this.#container = null;
  }

  setContainer(container) {
    if (!container || typeof container.get !== 'function')
      throw new Error('Valid DI container is required');

    this.#container = container;
  }

  async getService(serviceName) {
    if (!this.#container) {
      throw new Error('Container is not set. Call setContainer() first');
    }

    try {
      return await this.#container.get(serviceName);
    } catch (error) {
      throw new Error(`Failed to get service ${serviceName}: ${error.message}`);
    }
  }

  async connectedCallback() {
    await this.init();
  }

  async init() {}

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this.onAttributeChanged(name, newValue);
    }
  }

  onAttributeChanged(name, value) {}
}
