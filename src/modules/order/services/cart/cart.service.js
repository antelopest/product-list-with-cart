import Service from '@services/Service.js';
import { API_CONFIG } from '@config/config.js';

export default class CartService extends Service {
  static serviceName = 'CartService';
  static isSingleton = true;
  static cartUrl = API_CONFIG.cartUrl;

  static initCompleted;

  cart = {};

  async initService() {
    await this.initCart();
  }

  async initCart() {
    const response = await fetch(CartService.cartUrl);
    this.cart = await response.json();
  }

  constructor() {
    super();

    this.initCompleted = this.initService();
  }
}
