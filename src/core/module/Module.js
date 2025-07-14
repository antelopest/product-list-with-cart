export default class Module {
  constructor({ components = [], services = [], container }) {
    this.components = components;
    this.services = services;
    this.container = container;
  }

  register() {
    for (const [serviceName, ServiceClass, isSingleton] of this.services) {
      this.container.register(serviceName, ServiceClass, isSingleton);
    }

    for (const [tag, ComponentClass] of this.components) {
      if (customElements.get(tag)) {
        throw new Error(`Component ${tag} already registered`);
      }

      customElements.define(tag, ComponentClass);
    }
  }
}
