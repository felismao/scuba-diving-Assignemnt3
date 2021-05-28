function myMap() {
    var mapProp= {
      center:new google.maps.LatLng(1.6761432788902966, 124.75589919207879), // bunaken national marine park
      zoom:5,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
}

    function addMarker(coords){
        var marker = new google.maps.Marker({
            position:coords,
            map:map,
            icon:'image/demo/pin.png',
        });
     }

     addMarker({lat: -8.7238487479919, lng:115.54450416665807});  // Nusa Penida, bali
     addMarker({lat:-5.623107332312841,lng:106.55927236720076});   // kepulauan seribu
     addMarker({lat:-8.630156588992994,lng:116.32762166372027}); // lombok 
     addMarker({lat:-0.3606882239129842,lng: 131.25708065675894}); // raja ampat