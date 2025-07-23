import Module from '@module/Module.js';

import { container } from '@appContainer';

import SvgCacheService from '@sharedModule/services/svg-cache/svg-cache.service.js';

import SvgIconComponent from '@sharedModule/components/svg-icon/svg-icon.component.js';

const SharedModule = new Module({
  services: [
    [SvgCacheService.serviceName, SvgCacheService, SvgCacheService.options]
  ],
  components: [[SvgIconComponent.tag, SvgIconComponent]],
  container
});

SharedModule.register();

container.get(SvgCacheService.serviceName);
