$(document).ready(function(){


  $("#interest").keypress(function(e){
           if(e.which===13){
             $("#places").focus();

           }
         });
$("#interest").click(function(){
  $("input").val(" ");
}

);
$("#places").click(function(){
  $("#places").val("");
})
         $("#places").keypress(function(e){
                  if(e.which===13){
                    $("#btn").focus();

                  }
                });



  var element = document.getElementById('foursquare-map');
  var options = {
    center: new google.maps.LatLng(43.6532, -79.3832),
    zoom: 10,
  }
  var map = new google.maps.Map(element, options);
var val;
var panorama;



       var place=document.getElementById("places");
       var autocomplete = new google.maps.places.Autocomplete(place);
       autocomplete.bindTo('bounds', map);


$("#btn").click(function(){
  var auto =autocomplete.getPlace();



     val = $("#interest").val();

try{
  if(!auto.geometry||$("#places").val()===""){
    auto.geometry="";
    throw Error("Wrooong, location input should not be empty");

  }//if
  else{
    $("#view").hide();
    $("#view").removeClass("floating-panel");
    $("#foursquare-map").removeClass("map-resized");

    var element = document.getElementById('foursquare-map');
    var options = {
      //center: new google.maps.LatLng(43.6532, -79.3832),
      center:auto.geometry.location,
      zoom: 10,
    }
     map = new google.maps.Map(element, options);

    //Enter//








    $.ajax({
      type:'GET',

      dataType:'jsonp',
      cache:false,
      url:"https://api.foursquare.com/v2/venues/search?client_id=DKBDKXUQ3BKJTG451SXK0BYNDUIZCUMHLNOT13NZ0DLRYFXB&client_secret=3V4RPTNGF0JJD032TY22X0BJYZTGGQ2QY0WUSPVBQD4FKBGD&v=20180212&near="+auto.name+"&query="+ val,
      success:function(response){
        //console.log(response);
        console.log(response.response.venues);
        var infowindow = new google.maps.InfoWindow({});//infowindow
        var markers =[];
        $("#description").html("");
          response.response.venues.forEach(function(venue, i){
            //console.log(venue.location.address)

            var venueLatLng=new google.maps.LatLng(venue.location.lat, venue.location.lng);
    setTimeout(function(){

$("#description").append('<a  data-marker="' + i + '" href="#" class="info">'+venue.name+"</a>"+"<br/>");





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
              $("#view").removeClass("floating-panel");
              $("#foursquare-map").removeClass("map-resized");
              $("#view").hide();
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


       $("#view").addClass("floating-panel");
       $("#foursquare-map").addClass("map-resized");



            });//Event listener for marker



    },i*50)//setTiemeout







          })//forEach

          $(document).on('click','.info',function(){
            var mid=$(this).data('marker');
            console.log(infowindow);
             infowindow.close();
             google.maps.event.trigger(markers[mid], "click");
          });

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
$("#places").removeClass("red");
// $("#places").css({ "box-shadow": "0 0 3px #CC0000"});
      },//success
    })//ajax
  }//else
}//try

catch(e){
  alert(e);
  $("#places").addClass("red");
}








})//btn



////////OPTIONS//////
$(".option").click(function(){
  var auto =autocomplete.getPlace();

$("#interest").val("");

     val = $(this).text();

try{
  if(!auto.geometry||$("#places").val()===""){
    auto.geometry="";
    throw Error("Wrooong, location input should not be empty");

  }//if
  else{
    $("#view").hide();
    $("#view").removeClass("floating-panel");
    $("#foursquare-map").removeClass("map-resized");

    var element = document.getElementById('foursquare-map');
    var options = {
      //center: new google.maps.LatLng(43.6532, -79.3832),
      center:auto.geometry.location,
      zoom: 10,
    }
     map = new google.maps.Map(element, options);

    //Enter//








    $.ajax({
      type:'GET',

      dataType:'jsonp',
      cache:false,
      url:"https://api.foursquare.com/v2/venues/search?client_id=DKBDKXUQ3BKJTG451SXK0BYNDUIZCUMHLNOT13NZ0DLRYFXB&client_secret=3V4RPTNGF0JJD032TY22X0BJYZTGGQ2QY0WUSPVBQD4FKBGD&v=20180212&near="+auto.name+"&query="+ val,
      success:function(response){
        //console.log(response);
        console.log(response.response.venues);
        var infowindow = new google.maps.InfoWindow({});//infowindow
        var markers =[];
        $("#description").html("");
          response.response.venues.forEach(function(venue, i){
            //console.log(venue.location.address)

            var venueLatLng=new google.maps.LatLng(venue.location.lat, venue.location.lng);
    setTimeout(function(){

$("#description").append('<a  data-marker="' + i + '" href="#" class="info">'+venue.name+"</a>"+"<br/>");





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
              $("#view").removeClass("floating-panel");
              $("#foursquare-map").removeClass("map-resized");
              $("#view").hide();
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


       $("#view").addClass("floating-panel");
       $("#foursquare-map").addClass("map-resized");



            });//Event listener for marker



    },i*50)//setTiemeout







          })//forEach

          $(document).on('click','.info',function(){
            var mid=$(this).data('marker');
            console.log(infowindow);
             infowindow.close();
             google.maps.event.trigger(markers[mid], "click");
          });

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
$("#places").removeClass("red");
// $("#places").css({ "box-shadow": "0 0 3px #CC0000"});
      },//success
    })//ajax
  }//else
}//try

catch(e){
  alert(e);
  $("#places").addClass("red");
}




})//option click



})//Document Ready
