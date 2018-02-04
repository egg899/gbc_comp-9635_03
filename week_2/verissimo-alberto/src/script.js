

google.maps.event.addDomListener(window, 'load', function(){

console.log(google);
var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var labelIndex =0;


function map(){


var locations=[{lat:-34.7784272, lng:-58.2694053},
          {lat:-34.7788589, lng:-58.2692429},
          {lat:-34.7776, lng:-58.2709075},
          {lat:-34.7787215, lng:-58.2666316}
        ];
var map_canvas = document.getElementById('map-canvas');

var myMap = new google.maps.Map(map_canvas, {
  zoom:15,
  center:locations[0],
  mapTypeId : 'roadmap'

});//myMap


var marker = new google.maps.Marker({

  position:locations[0],
  label:labels[labelIndex++ % labels.length],
  map:myMap,
  radius:30,
  type:'info'


})//marker

var markerb = new google.maps.Marker({

position:locations[1],
label:labels[labelIndex++ % labels.length],
map:myMap,
radius:30,


})//markerb

//Event listener for marker
marker.addListener('click',function(){
  myMap.setZoom(18);
  housewindow.open(myMap, marker);
  schoolwindow.close(myMap, markerb);
$("#bio").html("<p>This is the house that I lived most of my childhood and all my teenage years. it is located in a city called Florencio Varela in the Province of Buenos Aires, Argentina. My mother and my 2 sisters still live there, I go to visit this place once every 2 years.</p>");
});

markerb.addListener('click',function(){
  myMap.setZoom(18);

  schoolwindow.open(myMap, markerb);
  housewindow.close(myMap, marker);
  $("#bio").html("<p>This is my Elementary school and I studied here for 7 years before going to High School </p>")
});









var house = '<div id="content">'+
'<h1>My House</h1>'
+'</div>';
var school = '<div id="content">'+
'<p>My school <b>Instituto Manuel Belgrano</b></p>'
+'</div>';

var housewindow = new google.maps.InfoWindow({
content:house
});

var schoolwindow = new google.maps.InfoWindow({
content:school
});

var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
var icons = {
  bus: {
    icon: iconBase + 'bus.png',
    size: new google.maps.Size(50, 50), // scaled size
        origin: new google.maps.Point(0,0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
  }

};
var features = [
  {
    position: locations[2],
    type: 'bus'
  },
  {
    position: locations[3],
    type: 'bus'
  }
];

features.forEach(function(feature){
  var mark = new google.maps.Marker({
    position: feature.position,
   icon: icons[feature.type].icon,
   shape:icons[feature.type].size,
    map: myMap
  });
});



}// function map
map();


/*google.maps.event.addDomListener(window, 'load', function(){
  //console.log('page is loaded');
  navigator.geolocation.getCurrentPosition(function(position){
    console.log(position);
    var map_canvas = document.getElementById('map-canvas');


    //My Current position
    var lat = position.coords.latitude;
      var lng = position.coords.longitude;

      //My house Position in Argentina
      var myHouse = {lat:-34.7784272, lng:-58.2694053};
      //var myHouseLat = -34.7784272;
      //var myHouseLng = -58.2694053;

      var myLatLng = new google.maps.LatLng(lat, lng);
      //var myHouseLatLng =new google.maps.LatLng(myHouse);

      var myMap = new google.maps.Map(map_canvas, {
        zoom:15,
        center:myHouse,


      })
      var marker = new google.maps.Marker({
        //position:myHouseLatLng,
        position:myHouse,
        map:myMap,
      })
console.log(myLatLng);


  })
})//Google maps*/


});//document ready jquery
