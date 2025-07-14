import { OrderContainer } from './order.container';

import Module from '../../core/module/Module.js';
import ProductsService from './services/products/products.service.js';

export const OrderModule = new Module({
  services: [
    [ProductsService.serviceName, ProductsService, ProductsService.isSingleton],
    [Card.serviceName, ProductsService, ProductsService.isSingleton]
  ],
  components: [],
  OrderContainer
});
