import Container from '../../core/container/Container.js';
import { OrderContainer } from './order.container';

import Module from '../../core/module/Module.js';
import ProductsService from './services/products/products.service.js';
import CartService from './services/cart/cart.service.js';

export const OrderModule = new Module({
  services: [
    [ProductsService.serviceName, ProductsService, ProductsService.isSingleton],
    [CartService.serviceName, CartService, CartService.isSingleton]
  ],
  components: [],
  OrderContainer
});
