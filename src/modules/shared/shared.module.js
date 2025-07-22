import Module from '@module/Module.js';

import { container } from '@appContainer';

const SharedModule = new Module({
  services: [],
  components: [],
  container
});

SharedModule.register();
