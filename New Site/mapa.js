function myMap() {

    const myLocation = new google.maps.LatLng(41.552149, -8.421033)

    const mapProp = {
        center: myLocation,
        zoom: 20,
        mapTypeId: google.maps.MapTypeId.HYBRID
    }
    const map = new google.maps.Map(
        document.getElementById("googleMap"), 
        mapProp)

        const marker = new google.maps.Marker({
            position:myLocation,
            animation:google.maps.Animation.BOUNCE
            });
          
          marker.setMap(map);
}