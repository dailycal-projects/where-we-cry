require('../scss/main.scss');
const map_data = require('../data/data.json'); //loading in data.json as a data variable in js
const L = require('leaflet');

window.$('.icon-facebook').click((e) => {
  e.preventDefault();
  const uri = encodeURIComponent(window.location.href);
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${uri}`);
});


window.$('.icon-twitter').click((e) => {
  e.preventDefault();
  const uri = window.location.href;
  const status = encodeURIComponent(`${window.tweetText} ${uri}`);
  window.open(`https://twitter.com/home?status=${status}`);
});

var map = L.map('map').setView([37.871470, -122.260363], 15); //'map' refers to map.html

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map); //map style pulling from open street map

//for every line in the spreadsheet, add a point with the lat and long that has the pop message ,essage
map_data.events.map(d => {
  L.marker([d.lat, d.long]).addTo(map)
      .bindPopup(d.message)
      //.openPopup();
})
