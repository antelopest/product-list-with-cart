import Service from '../../core/service/Service.js';
import { API_CONFIG } from '../../config/config.js';

export default class ProductsService extends Service {
  static serviceName = 'ProductsService';
  static isSingleton = true;
  static productsUrl = API_CONFIG.productsUrl;

  static initCompleted;

  products = [];

  async initService() {
    await this.initProducts();
  }

  async initProducts() {
    const response = await fetch(ProductsService.productsUrl);
    this.products = await response.json();
  }

  constructor() {
    super();

    this.initCompleted = this.initService();
  }
}
