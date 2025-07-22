import Module from '@module/Module.js';

import { AppDIContainer } from '@appDIContainer';

export const OrderModule = new Module({
  services: [
    // [ProductsService.serviceName, ProductsService, ProductsService.isSingleton],
    // [CartService.serviceName, CartService, CartService.isSingleton]
  ],
  components: [
    // [SvgLoaderComponent.tag, SvgLoaderComponent],
    // [ProductCardComponent.tag, ProductCardComponent],
    // [ProductsComponent.tag, ProductsComponent],
    // [CartComponent.tag, CartComponent]
  ],
  AppDIContainer
});

OrderModule.register();
