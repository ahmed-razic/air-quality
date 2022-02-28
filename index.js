const fetchData = new PollutionData(50, 50, 1606223802, 1606482999);
const geolocation = new GeolocationData('Mostar');

/* fetchData.getCurrentPollution();
fetchData.getForecastPollution();
fetchData.getHistoricalPollution(); */

geolocation.getGeolocation('sarajevo');
