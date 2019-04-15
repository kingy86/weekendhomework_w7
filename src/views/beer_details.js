const BeerDetails = function () {
};

BeerDetails.prototype.createBeerDetails = function (beer) {
  const beerDetail = document.createElement('div');
  beerDetail.classList.add('beer-detail');


  const name = document.createElement('h1');
  name.textContent = beer.name;
  beerDetail.appendChild(name);

  const tag = document.createElement('h3');
  tag.textContent = beer.tagline;
  beerDetail.appendChild(tag);

  const description = document.createElement('p');
  description.textContent = beer.description;
  beerDetail.appendChild(description);

  const image = document.createElement('img');
  image.classList.add('beer-pic')
  image.src = beer.image_url;
  beerDetail.appendChild(image);

  return beerDetail;
};

module.exports = BeerDetails;
