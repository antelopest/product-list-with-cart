import Service from '../../core/service/Service.js';
import { API_CONFIG } from '../../config/config.js';

export default class ProductsService extends Service {
  static serviceName = 'CartService';
  static isSingleton = true;
  static productsUrl = API_CONFIG.productsUrl;

  static initCompleted;

  cart = {};

  async initService() {}

  constructor() {
    super();

    this.initCompleted = this.initService();
  }
}
