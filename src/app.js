const Beers = require('./models/beers.js');
const BeersView = require('./views/beers_view.js')
const BeerDetails = require('./views/beer_details.js');


document.addEventListener('DOMContentLoaded', () => {
  const listContainer = document.querySelector('#beers');
  const beerListView = new BeersView(listContainer);
  beerListView.bindEvents();
  // const beerInfomation = document.querySelector('.beer-detail')


const beers = new Beers();
beers.getData()
});
