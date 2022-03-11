class GeolocationData {
  constructor() {
    this.me = '710c6cc112097842960b03138d82fd30';
    this.baseApiUrl = 'https://api.openweathermap.org/geo/1.0/direct?q=';
    this.elements = new DomElements();
  }

  getGeolocation(cityName, callback) {
    const searchApiUrl = `${this.baseApiUrl}${cityName}&limit=1&appid=${this.me}`;
    $.getJSON(searchApiUrl)
      .done(data => callback(data))
      .fail(() => this.elements.showError('Error geting city location. Try again.'));
  }
}
