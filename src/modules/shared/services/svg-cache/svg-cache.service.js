import Service from '@services/Service.js';

export default class SvgCacheService extends Service {
  static serviceName = 'SvgCacheService';
  static options = {
    singleton: true,
    dependencies: [],
    params: [
      {
        maxCacheSize: 50,
        initPaths: []
      }
    ]
  };

  #cache = new Map();
  #maxCacheSize;

  constructor({ maxCacheSize = 100, initPaths = [] }) {
    super();

    this.#maxCacheSize = maxCacheSize;

    this.init(initPaths);
  }

  async init(paths) {
    if (!Array.isArray(paths) || !paths.length) {
      return;
    }

    const promises = paths.map((path) => {
      if (typeof path !== 'string' || !path) {
        throw new Error(`Path ${path} must be a non-empty string`);
      }

      return this.loadSvg(path);
    });

    try {
      await Promise.all(promises);
    } catch (error) {
      throw new Error(`SvgCacheService init error:${error.message}`);
    }
  }

  async getSvg(path) {
    if (typeof path !== 'string' || !path) {
      throw new Error('Path must be a non-empty string');
    }

    if (this.#cache.has(path)) {
      return this.#cache.get(path);
    }

    if (this.#cache.size >= this.#maxCacheSize) {
      this.#cache.clear();
    }

    await this.loadSvg(path);

    return this.#cache.get(path);
  }

  async loadSvg(path) {
    try {
      const response = await fetch(path);

      if (!response.ok) {
        throw new Error(`Failed to fetch SVG from ${path}: ${response.status}`);
      }

      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('image/svg+xml')) {
        throw new Error(
          `Content at ${path} is not SVG (Content-Type: ${contentType}`
        );
      }

      const svg = await response.text();
      if (
        !svg.trim().startsWith('<svg') ||
        !svg.includes('xmlns="http://www.w3.org/2000/svg"')
      ) {
        throw new Error(`Content at ${path} is not a valid SVG`);
      }

      this.#cache.set(path, svg);
    } catch (error) {
      throw new Error(
        `SvgCacheService: Failed to load SVG from ${path}: ${error.message}`
      );
    }
  }
}
