import Component from '@component/Component.js';

const template = import('./svg-icon.component.html');

export default class SvgIconComponent extends Component {
  static tag = 'svg-icon-component';

  static get observedAttributes() {
    return ['src', 'width', 'height', 'fill', 'stroke'];
  }

  constructor() {
    super();

    // const svg = ;
  }
}
