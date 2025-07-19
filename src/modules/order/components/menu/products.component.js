import Component from '@component/Component.js';

import { container } from '@orderModule/order.module.js';

export default class ProductsComponent extends Component {
  static tag = 'products-component';
  static classes = ['products'];

  async connectedCallback() {
    await this.productsService.initCompleted;

    this.classList.add(...ProductsComponent.classes);

    this.innerHTML = `<div class="header">
      <h1 class="header__title">Desserts</h1>
    </div>`;

    for (const product of this.productsService.products) {
      this.innerHTML += `<product-card-component product-id="${product.id}"></product-card-component>`;
    }
  }

  async render() {
    //
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
