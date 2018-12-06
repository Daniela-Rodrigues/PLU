function myMap() {
//definir localização cidade de Braga
    const myLocation = new google.maps.LatLng(41.550197, -8.426933)

    const mapProp = {
        center: myLocation,
        zoom: 17,
        mapTypeId: google.maps.MapTypeId.HYBRID
    }
    const map = new google.maps.Map(
        document.getElementById("googleMap"), 
        mapProp)


    
        var contentString = '<div id="content"><div id="siteNotice"></div>'+ '<h4 >Equipa Desenvolvimento Infantil em Braga!<br> Contacte-nos</h4>'

        var infowindow = new google.maps.InfoWindow({ content: contentString, maxWidth: 335,});
        const marker = new google.maps.Marker({
            position:myLocation,
            map:map,
            animation:google.maps.Animation.BOUNCE
            })
          
            marker.addListener('click', function(){
                infowindow.open(map, marker)
            })
          marker.setMap(map);
        }