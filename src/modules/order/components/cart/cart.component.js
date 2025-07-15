import Component from '@component/Component.js';

export default class CartComponent extends Component {
  static tag = 'cart-component';
  static templateUrl = './cart.component.html';
  static stylesUrl = ['./cart.component.scss'];

  constructor() {
    super();

    this.innerHTML = '<h3>Your cart</h3>';
  }
}
