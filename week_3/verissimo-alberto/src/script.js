
google.maps.event.addDomListener(window, 'load', function(){

var places=[
  {name:'<h2>Porto, Portugal</h2>',
    lat:'41.1622023',lng:'-8.656973'},
    {name:'<h2>Madrid,Spain</h2>',lat:'40.4380638',lng:'-3.7495761'},
    {name:'<h2>Paris,France</h2>',lat:'48.8589101',lng:'2.3120406'}


]



var latlng = new google.maps.LatLng('50.0598058','14.3255428');
var mapEl=document.getElementById('map');
var mapOptions ={
  center: latlng,
  zoom:4
}
  var myMap = new google.maps.Map(mapEl,mapOptions);//myMap

  //Markers
  places.forEach(function(place){
    var latlng=new google.maps.LatLng(place.lat, place.lng);
    var marker=new google.maps.Marker({
      position:latlng,
      map:myMap
    })

    //info windows
    var currentInfoWindow =null;
    var infowindow = new google.maps.InfoWindow({
      content:place.name
    });//info window Ends

    google.maps.event.addListener(marker,'click', function clickHandler(){
      //myMap.setCenter(marker.position),

      if(currentInfoWindow!=null){
        currentInfoWindow.close();
      }
      infowindow.open(myMap, marker);
      currentInfoWindow = infowindow;

    });//click events for markers

  });//places forEach




})//document
