export default class Card {
  constructor (someProduct) {
    this.state = someProduct;
    this.myrender();
  }

  getTemplate () {
    return `
       <div class="picture"> <img src="${this.state.images[0]}" alt=""> </div>
       <div class="raiting-price">
        <div class="raiting"> ${this.state.rating} <i class="bi bi-star"></i> </div>
        <div class="price"> ${this.state.price} </div>
        </div>
        <div class="item-title">${this.state.title}</div>
        <div class="type">${this.state.category}</div>
        <div class="button">ADD TO CART </div>
        `;
     };

  update(data = {}) {
    this.state = data;
    this.componentElement.innerHTML = this.getTemplate();
  };

  myrender () {
    const element = document.createElement('div');
    element.className = "wrapper";
    element.innerHTML = this.getTemplate();
    this.element = element;

  };


}





