
google.maps.event.addDomListener(window, 'load', function(){

var places=[
  {name:'<h2>Porto Cathedral,Porto, Portugal</h2>',
    lat:'41.142826',lng:'-8.6111836'},
    {name:'<h2>Alcala Gate, Madrid,Spain</h2>',lat:'40.420056',lng:'-3.6884699'},
    {name:'<h2>Eiffel Tower, Paris,France</h2>',lat:'48.85835',lng:'2.294525'},
    {name:'<h2>Big Ben,London,UK</h2>',lat:'51.5007286',lng:'-0.124625'},
    {name:'<h2>Roman Forum, Rome, Italy</h2>',lat:'41.8925473',lng:'12.4853655'},
    {name:'<h2>Dracula Castle, Pennsylvania, Rumania</h2>',lat:'45.5147926',lng:'25.3670621'},
    {name:'<h2>Parthenon, Acropolis, Athens, Greece</h2>',lat:'37.9714486',lng:'23.7267694'}


]


var panorama;
var latlng = new google.maps.LatLng('50.0598058','14.3255428');
var mapEl=document.getElementById('map');
var mapOptions ={
  center: latlng,
  zoom:4
}
  var myMap = new google.maps.Map(mapEl,mapOptions);//myMap

//Info  want an info window to close when I click another I have to declare it outside the forEach or for loop
//Then inside of the clickEvent set the content with setContent instead with content inside of the infoWindow
  var infowindow = new google.maps.InfoWindow();//info window Ends

  //Markers
  places.forEach(function(place){
    var latlng=new google.maps.LatLng(place.lat, place.lng);
    var marker=new google.maps.Marker({
      position:latlng,
      map:myMap
    })

    //info windows



    google.maps.event.addListener(marker,'click', function clickHandler(){
      myMap.setCenter(marker.position),
//myMap.setZoom(12);

infowindow.setContent(place.name);
  infowindow.open(myMap, marker);

  panorama = new google.maps.StreetViewPanorama(
             document.getElementById('view'), {
               position: marker.position,

               //zoom:1,
               pov: {
                 heading: 10,
                 pitch: 0
               }
             });//panorama


    });//click events for markers

  });//places forEach

//myMap.setStreetView(panorama);


})//document
