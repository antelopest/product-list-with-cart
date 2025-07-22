import Module from '@module/Module.js';

import { AppDIContainer } from '@appDIContainer';

// import ProductsService from './services/products/products.service.js';
import CartService from './services/cart/cart.service.js';

// import ProductCardComponent from './components/product-card/product-card.component.js';
// import CartComponent from './components/cart/cart.component.js';
// import ProductsComponent from './components/products/products.component.js';
// import SvgLoaderComponent from '@orderModule/components/svg-loader/svg-loader.component.js';

export const OrderModule = new Module({
  services: [
    // [ProductsService.serviceName, ProductsService, ProductsService.isSingleton],
    [CartService.serviceName, CartService, CartService.isSingleton]
  ],
  components: [
    // [SvgLoaderComponent.tag, SvgLoaderComponent],
    // [ProductCardComponent.tag, ProductCardComponent],
    // [ProductsComponent.tag, ProductsComponent],
    // [CartComponent.tag, CartComponent]
  ],
  AppDIContainer
});
