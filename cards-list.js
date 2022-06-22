import Card from "./card-item.js";

export default class CardsList {
    constructor(data = []) {
      this.data = data;
      this.render();
      this.renderCards();

     };

      getTemplate() {
       return `
        <div class="col-12 col-m-9 col-l-10">
        <div class="right-box row" data-element = "body">
        !-- <div class="col-12 col-m-6 col-l-4"> card 1 </div>--!
        </div>
        `;

        };

    render() {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = this.getTemplate();
    this.element = wrapper.firstElementChild;
    };

    renderCards() {

    const cards = this.data.map(item => {
      const card = new Card(item);
      return card.element});
      const body = this.element.querySelector(`[data-element="body"]`);
      body.innerHTML = '';
     body.append(...cards);
    };

    update (data = [] ) {
      this.data = data;
      this.renderCards();
    }


  };






