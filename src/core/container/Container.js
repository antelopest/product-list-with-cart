export default class Container {
  constructor() {
    this.services = new Map();
    this.singletons = new Map();
  }

  register(
    serviceName,
    factory,
    options = {
      singleton: true,
      dependencies: [],
      params: []
    }
  ) {
    if (typeof serviceName !== 'string' || !serviceName) {
      throw new Error('Service name must be a non-empty string');
    }

    if (typeof factory !== 'function') {
      throw new Error('Factory must be a function or class');
    }

    if (this.services.has(serviceName)) {
      throw new Error(`Service ${serviceName} already registered`);
    }

    this.services.set(serviceName, {
      factory,
      singleton: !!options.singleton,
      dependencies: options.dependencies || [],
      params: options.params || []
    });
  }

  async get(serviceName) {
    if (!this.services.has(serviceName)) {
      throw new Error(`Service ${serviceName} not registered`);
    }

    const { factory, singleton, dependencies, params } =
      this.services.get(serviceName);

    const resolvedDependencies = await Promise.all(
      dependencies.map(async (dependency) => await this.get(dependency))
    );

    const args = [...resolvedDependencies, ...params];

    if (singleton) {
      if (!this.singletons.has(serviceName)) {
        const instance =
          factory.prototype && factory.prototype.constructor === factory
            ? new factory(...args)
            : await factory(...args);

        this.singletons.set(serviceName, instance);
      }

      return this.singletons.get(serviceName);
    }

    return factory.prototype && factory.prototype.constructor === factory
      ? new factory(...args)
      : await factory(...args);
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
