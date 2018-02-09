google.maps.event.addDomListener(window, 'load', function() {
	var wonders = [
		{
			name: '<h2>CN Tower</h2>',
			city: '<h3>Toronto, Ontario</h3>',
			description: '<p>The CN Tower has been a landmark in Toronto for over thiry years. It\'s uses are being a tower for radio and television signals as well as a lookout point for tourists. It has been the pride of Toronto since it was built in 1976.</p>',
			image: '<img src="http://cld.escapehere.com/image/upload/t_cn,f_auto,q_auto,$w_800/eh/2013/05/CN-tower-toronto-820x480.jpg">',
			lat: '43.642509',
			lng: '-79.387039',
		},
		{
			name: '<h2>Banff National Park</h2>',
			city: '<h3>Banff, Alberta</h3>',
			description: '<p>The CN Tower has been a landmark in Toronto for over thiry years. It\'s uses are being a tower for radio and television signals as well as a lookout point for tourists. It has been the pride of Toronto since it was built in 1976.</p>',
			image: '<img src="http://cld.escapehere.com/image/upload/t_cn,f_auto,q_auto,$w_800/eh/2013/05/shutterstock_126257273-820x480.jpg">',
			lat: '51.496845',
			lng: '-115.928055',
		},
		{
			name: '<h2>Château Frontenac</h2>',
			city: '<h3>Quebec City, Quebec</h3>',
			description: '<p>The CN Tower has been a landmark in Toronto for over thiry years. It\'s uses are being a tower for radio and television signals as well as a lookout point for tourists. It has been the pride of Toronto since it was built in 1976.</p>',
			image: '<img src="http://cld.escapehere.com/image/upload/t_cn,f_auto,q_auto,$w_800/eh/2013/05/Chateau-Frontenac-Quebec-City.jpg">',
			lat: '46.807163438',
			lng: '-71.202999188',
		},
		{
			name: '<h2>Paralament Hill</h2>',
			city: '<h3>Ottawa, Ontario</h3>',
			description: '<p>The CN Tower has been a landmark in Toronto for over thiry years. It\'s uses are being a tower for radio and television signals as well as a lookout point for tourists. It has been the pride of Toronto since it was built in 1976.</p>',
			image: '<img src="http://cld.escapehere.com/image/upload/t_cn,f_auto,q_auto,$w_800/eh/2013/05/Ottawa-Canada.jpg">',
			lat: '45.424807',
			lng: '-75.699234',
		},
		{
			name: '<h2>Northern Lights</h2>',
			city: '<h3>Whitehorse, Yokon Territories</h3>',
			description: '<p>The CN Tower has been a landmark in Toronto for over thiry years. It\'s uses are being a tower for radio and television signals as well as a lookout point for tourists. It has been the pride of Toronto since it was built in 1976.</p>',
			image: '<img src="http://cld.escapehere.com/image/upload/t_cn,f_auto,q_auto,$w_800/eh/2013/05/Aurora-Borealis-northern-lights.jpg">',
			lat: '60.721188',
			lng: '-135.056839',
		},
		{
			name: '<h2>Peggy\'s Cove</h2>',
			city: '<h3>Peggy’s Cover, Nova Scotia</h3>',
			description: '<p>The CN Tower has been a landmark in Toronto for over thiry years. It\'s uses are being a tower for radio and television signals as well as a lookout point for tourists. It has been the pride of Toronto since it was built in 1976.</p>',
			image: '<img src="http://cld.escapehere.com/image/upload/t_cn,f_auto,q_auto,$w_800/eh/2013/05/peggys-cove-lighthouse-nova-scotia.jpg">',
			lat: '44.488998044',
			lng: '-63.917162998',
		},
	];
	 
	var latlng = new google.maps.LatLng('57.341346', '-101.777344');
	var mapOptions = {
		center: latlng,
		zoom: 4
	};
	var map = new google.maps.Map(document.getElementById('wonders-map'), mapOptions);
	wonders.forEach(function(wonder) {
		var latlng = new google.maps.LatLng(wonder.lat, wonder.lng);
		var marker = new google.maps.Marker({
			position: latlng,
			map: map
		});
		var infowindow = new google.maps.InfoWindow({
			content: "<div class='info'>" +  wonder.name + wonder.city + wonder.description + "</div><div class='photo'>" + wonder.image + "</div>"
		});
		google.maps.event.addListener(marker, 'click', function() {
			map.setCenter(marker.position);
			map.setZoom(12);
			infowindow.open(map, marker);
		});

	});

})
