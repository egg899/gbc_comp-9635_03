
$(document).ready(function(){


console.log(google);
google.maps.event.addDomListener(window, 'load', function(){
  //console.log('page is loaded');
  navigator.geolocation.getCurrentPosition(function(position){
    console.log(position);
    var map_canvas = document.getElementById('map-canvas');


    //My Current position
    var lat = position.coords.latitude;
      var lng = position.coords.longitude;

      //My house Position in Argentina
      var myHouseLat = -34.7784272;
      var myHouseLng = -58.2694053;

      var myLatLng = new google.maps.LatLng(lat, lng);
      var myHouseLatLng =new google.maps.LatLng(myHouseLat, myHouseLng);

      var myMap = new google.maps.Map(map_canvas, {
        zoom:15,
        center:myHouseLatLng,


      })
      var marker = new google.maps.Marker({
        position:myHouseLatLng,

        map:myMap,
      })
console.log(myLatLng);


  })
})//Google maps


});//document ready jquery
