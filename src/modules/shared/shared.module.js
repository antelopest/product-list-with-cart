import Module from '@module/Module.js';

import { container } from '@appDIContainer';

const SharedModule = new Module({
  services: [],
  components: [],
  container
});

SharedModule.register();
