import CardsList from "./cards-list.js"
import Pagination from './pagination.js';

//products?_page=3&_limit=3

const BACKEND_URL = 'https://online-store.bootcamp.place/api/';
  export default class OnlineStorePage {
    constructor () {
    this.products = [];
    this.pageSize = 9;

    this.url = new URL('products', BACKEND_URL);
    this.url.searchParams.set('_limit', this.pageSize);

    this.components = {};
    this.initComponents();
    this.render();
    this.renderComponents();
    this.initEventListeners();
    this.update(1);
  };

    async loadData (pageNumber) {
      this.url.searchParams.set('_page', pageNumber);

      const response = await fetch(this.url);
      const products = await response.json();
      return products;

    };

    getTemplate () {
      return `
        <div>
          <div class="container nowrap" data-element="cards-list"> <!-- Card Component--!> </div>
          <div data-element="pagination"> <!--- Pagination!--> </div>
        </div>
      `;
    }

    initComponents () {
      const totalElemets = 100;
      const totalPages = Math.ceil(totalElemets / this.pageSize);
      const cards = new CardsList(this.products);

      const pagination = new Pagination({
        activePageIndex: 0,
        totalPages
      });

      this.components.cards = cards;
      this.components.pagination = pagination;
    };


    renderComponents () {
      const cardsContainer = this.element.querySelector(`[data-element="cards-list"]`);
      const paginationContainer = this.element.querySelector(`[data-element="pagination"]`);

      cardsContainer.append(this.components.cards.element);
      paginationContainer.append(this.components.pagination.element);
    };

    render() {
    const wrapper = document.createElement('div');
    wrapper.className = "col-12 col-m-6 col-l-4";

    wrapper.innerHTML = this.getTemplate();
    this.element = wrapper.firstElementChild;

    };

    initEventListeners () {
      this.components.pagination.element.addEventListener('foo-bar', event =>{
        const pageIndex = event.detail;
        this.update(pageIndex + 1);
      })

    }


    async update(pageNumber) {

      const data = await this.loadData(pageNumber);
      this.components.cards.update(data);

    }
  }







