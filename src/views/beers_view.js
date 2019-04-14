const PubSub = require('../helpers/pub_sub.js');
const BeerDetails = require('./beer_details.js');

const BeersView = function (container) {
  this.container = container;
};

BeersView.prototype.bindEvents = function () {
  PubSub.subscribe( 'Beers:beers-ready', (evt) => {
    this.render(evt.detail);
  });
};

BeersView.prototype.render = function (beers) {
  beers.forEach( (beer) => {
    const beerItem = this.createBeerItem(beer)
    this.container.appendChild(beerItem)
  });
};

BeersView.prototype.createBeerItem = function (beer) {
  const beerDetailView = new BeerDetails();
  const beerDetail = beerDetailView.createBeerDetails();
  return beerDetail;
};

module.exports = BeersView;
