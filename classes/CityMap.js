class CityMap {
  showMap(lat, lon) {
    var map = L.map('map').setView([lat, lon], 13);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: 'pk.eyJ1IjoiYWhtZWQtcmF6aWMiLCJhIjoiY2wwOGl3ZTkwMDNvdTNpbGdzMThmczBsdSJ9.Cqh4zSucHQ7fe8V-is50Qw',
    }).addTo(map);

    L.marker([lat, lon]).addTo(map).bindPopup('Your city').openPopup();
  }
}
