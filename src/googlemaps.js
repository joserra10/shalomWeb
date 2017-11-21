function initMap() {
    alert("mapa");
    var uluru = {lat: 19.490439, lng: -99.0384255};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 17,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
  }
