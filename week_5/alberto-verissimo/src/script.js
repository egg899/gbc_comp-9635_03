$(document).ready(function(){

  var element = document.getElementById('foursquare-map');
  var options = {
    center: new google.maps.LatLng(43.6532, -79.3832),
    zoom: 10,
  }
  var map = new google.maps.Map(element, options);
var val;
var panorama;
$("#btn").click(function(){

val = $("input").val();
$("#view").hide();

var element = document.getElementById('foursquare-map');
var options = {
  center: new google.maps.LatLng(43.6532, -79.3832),
  zoom: 10,
}
var map = new google.maps.Map(element, options);







$.ajax({
  type:'GET',

  dataType:'jsonp',
  cache:false,
  url:"https://api.foursquare.com/v2/venues/search?client_id=DKBDKXUQ3BKJTG451SXK0BYNDUIZCUMHLNOT13NZ0DLRYFXB&client_secret=3V4RPTNGF0JJD032TY22X0BJYZTGGQ2QY0WUSPVBQD4FKBGD&v=20180212&near=Toronto&query="+ val,
  success:function(response){
    //console.log(response);
    console.log(response.response.venues);
    var infowindow = new google.maps.InfoWindow({});//infowindow
    var markers =[];
      response.response.venues.forEach(function(venue, i){
        //console.log(venue.location.address)
        var venueLatLng=new google.maps.LatLng(venue.location.lat, venue.location.lng);
setTimeout(function(){


        var marker = new google.maps.Marker({
            map:map,
            position:venueLatLng,
            animation: google.maps.Animation.DROP
        })//marker

markers.push(marker);




  marker.addListener('click', function(){
          $("#view").show();
          infowindow.open(map, marker);

          for (var j = 0; j < markers.length; j++) {
                    markers[j].setAnimation(null);

                  }
                  //Toggle function
                  toggleBounce(this);

        infowindow.setContent('<a '+'target="_blank"'+'href='+venue.url +'>'+"<strong>"+venue.name +"</strong>"+"</a>"+"<br/>"+ venue.location.address
);//content of the info window
if(venue.url===undefined){
  infowindow.setContent("<strong>"+venue.name +"</strong>"+"<br/>"+ venue.location.address
);//content of the info window
}


        infowindow.addListener('closeclick', function(){
          map.panTo(this.getPosition());
          marker.setAnimation(null);
        //  map.setZoom(12);
        });

    ///this is for the google streetviw
          panorama = new google.maps.StreetViewPanorama(
                     document.getElementById('view'), {
                       position: marker.position,

                       //zoom:1,
                       pov: {
                         heading: 10,
                         pitch: 0
                       }
                     });//panorama



        });//Event listener for marker
},i*50)//setTiemeout
      })//forEach



      //function to toggle each individual Marker
        function toggleBounce(ele) {
          if (ele.getAnimation() !== null  ) {

            ele.setAnimation(null);


          } else {
            ele.setAnimation(google.maps.Animation.BOUNCE);
            setTimeout(function(){
              ele.setAnimation(null);
            },1450);


          }
        }


  },//success
})//ajax
})//btn
////////OPTIONS//////
// $(".option").click(function(){
//
//   var element = document.getElementById('foursquare-map');
//   var options = {
//     center: new google.maps.LatLng(43.6532, -79.3832),
//     zoom: 10,
//   }
//   var map = new google.maps.Map(element, options);
//
//
//
//
//
//   val = $(this).text();
//
//   $.ajax({
//     type:'GET',
//
//     dataType:'jsonp',
//     cache:false,
//     url: 'https://api.foursquare.com/v2/venues/search?client_id=UYXWDL4J1XESVFDVL4IQS4FKZJVLMCOF0SKNRRWRBBSC0LPE&client_secret=IFYVZGRK3EVI4DF1JEND5ZHC1K15NP5GAZ3NKXPOVCELZQSL&v=20180212&near=Toronto&query='+val,
//     success:function(response){
//       //console.log(response);
//     //  console.log(response.response.venues);
//
//         response.response.venues.forEach(function(venue){
//           var venueLatLng=new google.maps.LatLng(venue.location.lat, venue.location.lng);
//           var marker = new google.maps.Marker({
//               map:map,
//               position:venueLatLng,
//           })//marker
//
//           var infowindow = new google.maps.InfoWindow({
//             content: venue.name,
//           });//infowindow
//
//           marker.addListener('click', function(){
//             infowindow.open(map, marker);
//           });
//
//           infowindow.addListener('closeclick', function(){
//             map.panTo(this.getPosition());
//             map.setZoom(12);
//           });
//
//         })//forEach
//
//
//
//
//
//
//     },//success
//   })//ajax
//
//
//
// })//option click



})//Document Ready
