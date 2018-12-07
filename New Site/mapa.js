function myMap() {
//definir localização cidade de Braga
    const myLocation = new google.maps.LatLng(41.550197, -8.426933)

    const mapProp = {
        center: myLocation,
        zoom: 17,
        mapTypeId: google.maps.MapTypeId.HIBRID
    }
    const map = new google.maps.Map(
        document.getElementById("googleMap"), 
        mapProp)
//definir infowindow
const contentString = '<div id="content"><div id="siteNotice"></div>'+
'<h3 id="firstHeading" class="firstHeading">BRAGA</h1>'+
'<div id="bodyContent"><p> <b>Equipa de Desenvolvimento Infantil</b> </p>' +
'<div class="col-md-12">Contacte-nos!'+
'</div>'+
'</div></div>';

        const infowindow = new google.maps.InfoWindow({ content: contentString, maxWidth: 480,});
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