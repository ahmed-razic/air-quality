class PrepareData {
  constructor() {
    this.displayResults = new DisplayResults();
  }

  currentDay(data) {
    return {};
  }

  currentDayDetails(data) {
    return {
      'Carbon monoxide': { value: data.co, unit: '&mu;g/m<sup>3</sup>' },
      'Nitrogen monoxide': { value: data.no, unit: '&mu;g/m<sup>3</sup>' },
      'Nitrogen dioxide': { value: data.no2, unit: '&mu;g/m<sup>3</sup>' },
      Ozone: { value: data.o3, unit: '&mu;g/m<sup>3</sup>' },
      'Sulphur dioxide': { value: data.so2, unit: '&mu;g/m<sup>3</sup>' },
      'Fine particles matter': { value: data.pm2_5, unit: '&mu;g/m<sup>3</sup>' },
      'Coarse particulate matter': { value: data.pm10, unit: '&mu;g/m<sup>3</sup>' },
      Ammonia: { value: data.nh3, unit: '&mu;g/m<sup>3</sup>' },
    };
  }

  forecastDetails(data) {
    return {};
  }

  prepareCurrentData(data) {
    const { lon, lat } = data.coord;
    const { co, nh3, no, no2, o3, pm2_5, pm10, so2 } = data.list[0].components;
    const dt = data.list[0].dt;
    const aqi = data.list[0].main.aqi;

    const currentDetails = this.currentDayDetails({ co, nh3, no, no2, o3, pm2_5, pm10, so2 });
    console.log(currentDetails);
    this.displayResults.showCurrentDayDetails(currentDetails);
  }
  prepareForecastData(data) {
    console.log('Forecast data: ', data);
  }
  prepareHistoricalData(data) {
    console.log('Historical data: ', data);
  }
}
