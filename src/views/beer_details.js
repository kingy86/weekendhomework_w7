const BeerDetails = function () {
};

BeerDetails.prototype.createBeerDetails = function (beer) {
  const beerDetail = document.createElement('div');
  beerDetail.classList.add('beer-detail');

  const name = document.createElement('h1');
  name.textContent = beers['name'];
  beerDetail.appendChild(name);
  console.log(beers);

  return beerDetail;
};

module.exports = BeerDetails;
