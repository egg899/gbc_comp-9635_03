
google.maps.event.addDomListener(window, 'load', function(){

var places=[
  {name:'<h2>Porto, Portugal</h2>',
    lat:'41.1622023',lng:'-8.656973'},
    {name:'<h2>Madrid,Spain</h2>',lat:'40.4438122',lng:'-3.6378245'},
    {name:'<h2>Paris,France</h2>',lat:'48.8589101',lng:'2.3120406'},
    {name:'<h2>Ukraine</h2>',lat:'47.9855766',lng:'22.2123707'},
    {name:'<h2>Italy</h2>',lat:'40.9401583',lng:'3.7241571'}


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
