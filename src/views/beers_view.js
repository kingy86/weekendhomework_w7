const PubSub = require('../helpers/pub_sub.js');
const RequestHelper = require('../helpers/request_helper.js');

const BeersView = function (container) {
  this.container = container;
};

BeersView.prototype.bindEvents = function () {
  PubSub.subscribe( 'Beers:Ready', (event) => {
    this.renderBeerInformation(event.detail);
  });
};

BeersView.prototype.renderBeerInformation = function (beers) {
  beers.forEach( (beer) => {
    beerItem = this.createBeerItem(beer);
    this.container.appendChild(beerItem);
  });
};

module.exports = BeersView;
