export default class Module {
  constructor({ components = [], services = [], container }) {
    if (!container || typeof container.register !== 'function') {
      throw new Error('Valid DI container is required');
    }

    this.components = components;
    this.services = services;
    this.container = container;
  }

  register() {
    for (const [
      serviceName,
      ServiceClass,
      options = { singleton: true }
    ] of this.services) {
      if (typeof serviceName !== 'string' || !serviceName) {
        throw new Error('Service name must be a non-empty string');
      }

      if (typeof ServiceClass !== 'function') {
        throw new Error(`Service ${serviceName} must be a class or function`);
      }

      this.container.register(serviceName, ServiceClass, {
        singleton: options.singleton ?? true,
        dependencies: options.dependencies ?? [],
        params: options.params ?? []
      });
    }

    for (const [tag, ComponentClass] of this.components) {
      if (typeof tag !== 'string' || !tag.includes('-')) {
        throw new Error(
          `Component tag ${tag} must be a valid custom element name`
        );
      }

      if (typeof ComponentClass !== 'function') {
        throw new Error(`Component ${tag} must be a class`);
      }

      if (customElements.get(tag)) {
        throw new Error(`Component ${tag} already registered`);
      }

      customElements.define(tag, ComponentClass);
    }
  }

  unregister() {
    for (const [serviceName] of this.services) {
      this.container.remove(serviceName);
    }

    /* CustomElement don't support remove custom components */
  }
}
