const Beers = require('./models/beers.js');
const BeersView = require('./views/beers_view.js')


document.addEventListener('DOMContentLoaded', () => {



const beers = new Beers;
beers.getData()
});
