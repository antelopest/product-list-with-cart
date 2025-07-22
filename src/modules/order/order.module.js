import Module from '@module/Module.js';

import { container } from '@appContainer';

const OrderModule = new Module({
  services: [],
  components: [],
  container
});

OrderModule.register();
