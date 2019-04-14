const BeerDetails = function () {};

BeerDetails.prototype.createBeerDetails = function (beer) {
  const beerDetails = document.createElement('div')
  beerDetails.classList.add('beer-details')

  const name = document.createElement('h3');
  name.textContent = beers.name;
  beerDetails.appendChild(name);


  return beerDetails;

};

module.exports = BeerDetails;
