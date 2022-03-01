class PollutionData {
  constructor() {
    this.me = '710c6cc112097842960b03138d82fd30';
    this.baseApiUrl = 'http://api.openweathermap.org/data/2.5/air_pollution';
  }

  getCurrentData(location, callback) {
    console.log(location);
    const currentApiUrl = `${this.baseApiUrl}?lat=${location.lat}&lon=${location.lon}&appid=${this.me}`;
    $.getJSON(currentApiUrl)
      .done(data => {
        data.location = location;
        callback(data);
      })
      .fail(() => this.elements.showError('Error geting current pollution data. Try again.'));
  }

  getForecastData(location, callback) {
    const forecastApiUrl = `${this.baseApiUrl}/forecast?lat=${location.lat}&lon=${location.lon}&appid=${this.me}`;
    $.getJSON(forecastApiUrl)
      .done(data => {
        data.location = location;
        callback(data);
      })
      .fail(() => this.elements.showError('Error geting forecast pollution data. Try again.'));
  }

  getHistoricalData(location, callback) {
    const historicalApiUrl = `${this.baseApiUrl}/history?lat=${location.lat}&lon=${location.lon}&start=1606223802&end=1606482999&appid=${this.me}`;
    $.getJSON(historicalApiUrl)
      .done(data => {
        data.location = location;
        callback(data);
      })
      .fail(() => this.elements.showError('Error geting hystorical pollution data. Try again.'));
  }
}
