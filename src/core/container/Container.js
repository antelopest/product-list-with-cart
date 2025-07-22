export default class Container {
  constructor() {
    this.services = new Map();
    this.singletons = new Map();
  }

  register(serviceName, ServiceClass, singleton = true) {
    if (this.services.has(serviceName)) {
      throw new Error(`Service ${serviceName} already registered`);
    }

    this.services.set(serviceName, {
      ServiceClass,
      singleton
    });
  }

  get(serviceName) {
    if (!this.services.has(serviceName)) {
      throw new Error(`Service ${serviceName} not registered`);
    }

    const { ServiceClass, singleton } = this.services.get(serviceName);

    if (singleton) {
      if (!this.singletons.has(serviceName)) {
        this.singletons.set(serviceName, new ServiceClass());
      }

      return this.singletons.get(serviceName);
    }

    return new ServiceClass();
  }

  remove(serviceName) {
    if (this.services.has(serviceName)) {
      this.services.delete(serviceName);
      this.singletons.delete(serviceName);
    }
  }

  clear() {
    this.services.clear();
    this.singletons.clear();
  }
}
