/* Map */

var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -12.0431800, 
      lng: -77.0282400},
    zoom: 11
  });
}