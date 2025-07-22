import Component from '@component/Component.js';

export default class SvgIcon extends Component {
  static tag = 'svg-loader-component';
  // static classes = ['svg-loader'];

  // addClasses() {
  //   this.classList.add(...SvgLoaderComponent.classes);
  // }

  async init() {
    const src = this.getAttribute('src');

    try {
      const res = await fetch(src);
      this.innerHTML = await res.text();
    } catch (e) {
      console.error(`Error fetching ${src}: ${e}`);
    }
  }

  constructor() {
    super();

    // this.addClasses();

    // this.init();
  }
}
