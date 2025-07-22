import Module from '@module/Module.js';

import { container } from '@appDIContainer';

const OrderModule = new Module({
  services: [],
  components: [],
  container
});

OrderModule.register();
