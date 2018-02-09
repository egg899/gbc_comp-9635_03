console.log(google)


//this will allow to add a listener on the window
//this will be an anonymous function hense function()
google.maps.event.addDomListener(window, 'load', function(){
	console.log("DOM has loaded");

	var mapElement = document.getElementById('places-map');
	
	//LatLng is the constructor for the maps class.  The capitalization is a convention to denote a constructor call.
	//var latLng = new google.maps.LatLng(0, 0);
	//console.log(latLng);
	
	navigator.geolocation.getCurrentPosition(function(position){

		var homeLat = position.coords.latitude;
		var homeLng = position.coords.longitude;
		var myHomeLatLng = new google.maps.LatLng(homeLat, homeLng)

		var mapOptions = {
			center: myHomeLatLng,
			zoom: 2,
		};

		var myMap = new google.maps.Map(mapElement, mapOptions);


		var myPlaces = [{
			content: ' There is no place like home',
			lat: homeLat,
			lng: homeLng,
		},{
			content: ' London, England',
			lat: 51.507351,
			lng: -0.127758,
		},{
			content: ' Paris, France',
			lat: 48.856614,
			lng: 2.352222,
		},{
			content: ' Cairo, Egypt',
			lat: 30.044420,
			lng: 31.235712,
		},{
			content: ' Bangkok, Thailand',
			lat: 13.756331,
			lng: 100.501765,
		},{
			content: ' Havana, Cuba',
			lat: 23.113592,
			lng: -82.366596,
		}]

		myPlaces.forEach(function(place){
			console.log(place.content);
			var latLng = new google.maps.LatLng(place.lat, place.lng);

			//this is an object literal
			var myMarker = new google.maps.Marker({
				//variables in an object literal is denoted with : and ending with ,
				map: myMap,
				position: latLng,
			})

			var myInfoWindow = new google.maps.InfoWindow({
				content: place.content,
			})

			google.maps.event.addListener(myMarker, 'click',  function ClickHandler(){
				myMap.setCenter(myMarker.position);
				myMap.setZoom(12);
				myInfoWindow.open(myMap, myMarker);
			})
			google.maps.event.addListener(myInfoWindow,'closeclick',function(){
				myMap.setCenter(myHomeLatLng);
				myMap.setZoom(2);
			});



		})
	})
})


