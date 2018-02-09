console.log(google);

google.maps.event.addDomListener(window, 'load', function() {
  var travelled = [
    {
      name: '<h2>San Francisco</h2>',
      description: '<p><b>San Francisco</b> the first city I have travelled to with friends. <a target="_blank" href="https://en.wikipedia.org/wiki/San_Francisco" title="San Francisco">San Francisco</a>. Here, I got to explore the Piers. The most well known pier is <a target="_blank" "href="https://en.wikipedia.org/wiki/Pier_39">Pier 39</a>. My friends and I had ridden the <a target="_blank" href="https://en.wikipedia.org/wiki/San_Francisco_cable_car_system">cable cars</a> and explored the largest Gay Village in the world, <a target="_blank" href="https://en.wikipedia.org/wiki/Castro_District,_San_Francisco">Castro District.</p>',
      image: '<img src="https://i.imgur.com/3qul073.jpg"/img>',
      lat: '37.757815',
      lng: '-122.5076393',
    },
  ];


  var latlng = new google.maps.LatLng('45.188713', '-109.5543477');
  var mapOptions = {
    center: latlng,
    zoom: 4
  };

  // Loop travelled cities
  var map = new google.maps.Map(document.getElementById('travelled-map'), mapOptions);
  travelled.forEach(function(travelled) {
    var latlng = new google.maps.LatLng(travelled.lat, travelled.lng);
    var marker = new google.maps.Marker( {
      position: latlng,
      map: map
    });

    // When City Marker is clicked, info window will appear
    var infowindow = new google.maps.InfoWindow( {
      content: travelled.name + travelled.image + travelled.description
    });

    google.maps.event.addListener(marker, 'click', function() {
      map.setCenter(marker.position);
      map.setZoom(12);
      infowindow.open(map, marker);
    });
  });

});
