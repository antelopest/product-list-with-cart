import Component from '@component/Component.js';

import { container } from '@orderModule/order.module.js';

export default class ProductCardComponent extends Component {
  static tag = 'product-card-component';
  static classes = ['product-card'];

  async connectedCallback() {
    this.innerHTML = `<h3>Product</h3>`;

    this.classList.add(...ProductCardComponent.classes);
  }

  // /* Hook call when delete element in DOM */
  // disconnectedCallback() {}
  //
  // /* Hook call when change attributes */
  // attributeChangedCallback() {}

  constructor() {
    super();

    // this.productsService = container.get('ProductsService');
  }
}
