import Container from '@container/Container.js';

import Module from '@module/Module.js';

import ProductsService from './services/products/products.service.js';
import CartService from './services/cart/cart.service.js';

import ProductCardComponent from './components/product-card/product-card.component.js';
import CartComponent from './components/cart/cart.component.js';
import ProductsComponent from './components/products/products.component.js';

export const container = new Container();

export const OrderModule = new Module({
  services: [
    [ProductsService.serviceName, ProductsService, ProductsService.isSingleton],
    [CartService.serviceName, CartService, CartService.isSingleton]
  ],
  components: [
    [ProductCardComponent.tag, ProductCardComponent],
    [ProductsComponent.tag, ProductsComponent],
    [CartComponent.tag, CartComponent]
  ],
  container
});
