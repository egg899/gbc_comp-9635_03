google.maps.event.addDomListener(window, 'load', function(){

  console.log('dom has loaded')

 var mapEl = document.getElementById('places-map')
 var latLng = new google.maps.LatLng(0,0)
 var mapOptions = {
   center: latLng,
   zoom: 2,
 }
 var map = new google.maps.Map(mapEl, mapOptions)
 //var marker = new google.maps.Marker({
//   map: map,
//.   position: latLng,
 //})
 //var infowindow = new google.maps.InfoWindow({
//   content: 'This is an info window, pretty cool yea',
// })

var myPlaces = [{
  name: '<h2>Hong Kong, Hong Kong</h2>',
  description: '<p><a href="https://en.wikipedia.org/wiki/Hong_Kong">Hong Kong</a> is an autonomous territory, and former British colony, in southeastern China. Its vibrant, densely populated urban centre is a major port and global financial hub with a skyscraper-studded skyline. Central (the business district) features architectural landmarks like I.M. Peis Bank of China Tower. Hong Kong is also a major shopping destination, famed for bespoke tailors and Temple Street Night Market.</p>',
  image: '<img height="100" width="300" src="https://wikitravel.org/upload/shared//0/06/Hong_Kong_Banner.jpg">',
  lat: 22.286394,
  lng: 114.149139,
}, {
  name: '<h2>Berlin, Germany<h2>',
  description: '<p><a href="https://en.wikipedia.org/wiki/Berlin">Berlin</a>, Germanys capital, dates to the 13th century. Reminders of the city turbulent 20th-century history include its Holocaust memorial and the Berlin Wall graffitied remains. Divided during the Cold War, its 18th-century Brandenburg Gate has become a symbol of reunification. The city also known for its art scene and modern landmarks like the gold-colored, swoop-roofed Berliner Philharmonie, built in 1963.</p>',
  image: '<img height="100" width="300" src="https://www.visitberlin.de/system/files/styles/visitberlin_hero_visitberlin_desktop_2x/private/image/Museumsinsel%2BDom_iStock_c_Chalabala_DL_PPT_0.jpg?itok=GzX54IDM">',
  lat: 52.520008,
  lng: 13.404954,
}, {
  content: 'SEOUL',
  name: '',
  description: '<p></p>',
  image: '<img height="100" width="300" src="https://media.webjet.com.au/Images/cities/1200x472/GMP1.jpg">',
  lat: 37.517235,
  lng: 127.047325,
}, {
  content: 'NEW YORK',
  name: '',
  description: '<p></p>',
  image: '<img height="100" width="300" src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Lower_Manhattan_from_Jersey_City_November_2014_panorama_3.jpg">',
  lat: 40.730610,
  lng: -73.935242,
}, {
  content: 'LOS ANGELES',
  name: '',
  description: '<p></p>',
  image: '<img height="100" width="300" src="https://media1.britannica.com/eb-media/40/189440-049-A9F1124D.jpg">',
  lat: 34.052235,
  lng: -118.243683,
}]


 myPlaces.forEach(function(place) {
   console.log(place.content)
   var latLng = new google.maps.LatLng(place.lat, place.lng)
   var marker = new google.maps.Marker({
     map: map,
     position: latLng,
   })
   var infowindow = new google.maps.InfoWindow({
     content: place.name + place.description + place.image
   })

   google.maps.event.addListener(marker, 'click', function ClickHandler() {
     map.setCenter(marker.position)
     map.setZoom(2)
     infowindow.open(map, marker)
   })

  })
 })
