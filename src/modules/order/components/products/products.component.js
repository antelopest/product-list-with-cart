import Component from '@component/Component.js';

import { container } from '@orderModule/order.module.js';

export default class ProductsComponent extends Component {
  static tag = 'products-component';

  async connectedCallback() {
    await this.productsService.initCompleted;

    for (const product of this.productsService.products) {
      this.innerHTML += `<product-card-component product-id="${product.id}"></product-card-component>`;
    }
  }

  // /* Hook call when delete element in DOM */
  // disconnectedCallback() {}
  //
  // /* Hook call when change attributes */
  // attributeChangedCallback() {}

  constructor() {
    super();

    this.productsService = container.get('ProductsService');
  }
}
