const PubSub = require('../helpers/pub_sub.js');
const BeerDetails = require('./beer_details.js');

const BeersView = function (container) {
  this.container = container;
};

BeersView.prototype.bindEvents = function () {
  PubSub.subscribe( 'Beers:Ready', (evt) => {
    this.renderBeerInformation(evt.detail);
  });
};

BeersView.prototype.renderBeerInformation = function (beers) {
  beers.forEach( (beer) => {
    const beerItem = this.createBeerItem(beer);
    this.container.appendChild(beerItem);
    console.log(beerItem);
  });
};

BeersView.prototype.createBeerItem = function (beer) {
  const beerDetailsView = new BeerDetails();
  const beerDetails = beerDetailsView.createBeerDetails();
  return beerDetails;
};

module.exports = BeersView;
