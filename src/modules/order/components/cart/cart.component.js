import Component from '@component/Component.js';

import templateHTML from './cart.component.html';

export default class CartComponent extends Component {
  static tag = 'cart-component';
  static classes = ['cart'];

  constructor() {
    super();

    this.innerHTML = templateHTML;

    this.classList.add(...CartComponent.classes);
  }

  async render() {
    // const getHeaderCart = (count) => {
    //   return `
    //   <div class="header">
    //     <h2 class="header__title">Your cart</h2>
    //   </div>`;
    // }
    //
    // const getOrder = (products) => {
    //
    // }
    //
    // const getTotal => {
    //
    // }
  }
}
