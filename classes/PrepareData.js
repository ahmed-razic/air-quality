class PrepareData {
  constructor() {
    this.displayResults = new DisplayResults();
    this.helpers = new HelperFunctions();
    this.myMap = new CityMap();
  }

  currentDayData(data) {
    return {
      city: data.city,
      day: data.day,
      date: data.date,
      aqindex: data.aqindex,
      aqiDescription: data.aqiDescription,
    };
  }

  currentDayDetailsData(data) {
    return {
      'Carbon monoxide': data.co,
      'Nitrogen monoxide': data.no,
      'Nitrogen dioxide': data.no2,
      Ozone: data.o3,
      'Sulphur dioxide': data.so2,
      'Fine particles matter': data.pm2_5,
      'Coarse particulate matter': data.pm10,
      Ammonia: data.nh3,
    };
  }

  forecastDetails(data) {
    return {};
  }

  prepareCurrentData(data) {
    console.log(data);
    const { lon, lat } = data.coord;
    const { co, nh3, no, no2, o3, pm2_5, pm10, so2 } = data.list[0].components;

    const city = data.location.name;
    const day = dayjs().format('dddd');
    const date = dayjs().format('DD/MM/YYYY');
    const aqindex = data.list[0].main.aqi;
    const aqiDescription = this.helpers.calculateAqiDescription(aqindex);
    console.log(aqindex);
    const currentDetails = this.currentDayDetailsData({ co, nh3, no, no2, o3, pm2_5, pm10, so2 });

    const currentDay = this.currentDayData({ date, day, aqindex, city, aqiDescription });

    this.displayResults.showCurrentDayDetails(currentDetails);
    this.displayResults.showCurrentDayData(currentDay);
    this.myMap.showMap(lon, lat);
  }
  prepareForecastData(data) {
    console.log('Forecast data: ', data);
  }
  prepareHistoricalData(data) {
    console.log('Historical data: ', data);
  }

  /*   showMap(lat, lon) {
    var map = L.map('map').setView([lat, lon], 13);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: 'your.mapbox.access.token',
    }).addTo(map);
  } */
}
