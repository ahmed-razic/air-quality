class PrepareData {
  constructor() {
    this.displayResults = new DisplayResults();
    this.helpers = new HelperFunctions();
  }

  currentDayData(data) {
    return {
      cityName: data.city,
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

    const date = data.list[0].dt;
    const aqindex = data.list[0].main.aqi;
    const aqiDescription = this.helpers.calculateAqiDescription(aqindex);
    const city = data.location.cityName;

    const currentDetails = this.currentDayDetailsData({ co, nh3, no, no2, o3, pm2_5, pm10, so2 });
    this.displayResults.showCurrentDayDetails(currentDetails);

    const currentDay = this.currentDayData({ date, aqindex, city, aqiDescription });
  }
  prepareForecastData(data) {
    console.log('Forecast data: ', data);
  }
  prepareHistoricalData(data) {
    console.log('Historical data: ', data);
  }
}
