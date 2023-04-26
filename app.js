
function initMap() {
    // Create a map object and set the initial location to Oakland, CA
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 37.8044, lng: -122.2711},
      zoom: 14
    });
  
    // Create a directions service object and set the destination to 415 40th St, Oakland, CA
    var directionsService = new google.maps.DirectionsService();
    var directionsRenderer = new google.maps.DirectionsRenderer();
    directionsRenderer.setMap(map);
    var destination = '415 40th St, Oakland, CA';
  
    // Get the user's current location using the Geolocation API
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var origin = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
  
        // Set the origin and destination for the directions request
        var request = {
          origin: origin,
          destination: destination,
          travelMode: 'DRIVING'
        };
  
        // Send the directions request to the Directions service
        directionsService.route(request, function(result, status) {
          if (status == 'OK') {
            // Display the directions on the map
            directionsRenderer.setDirections(result);
          }
        });
      });
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  }
 
  initMap();

console.log("made it to the end")