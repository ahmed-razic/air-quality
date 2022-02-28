class PollutionData {
    constructor() {
        this.me = '710c6cc112097842960b03138d82fd30';
        this.baseApiUrl = 'http://api.openweathermap.org/data/2.5/air_pollution';
    }

    getCurrentPollution(location, callback) {
        const currentApiUrl = `${this.baseApiUrl}?lat=${location.lat}&lon=${location.lon}&appid=${this.me}`;
        console.log(currentApiUrl);
        $.getJSON(currentApiUrl)
            .done(data => callback(data))
            .fail(() => callback(null));
    }

    getForecastPollution(location, callback) {
        const forecastApiUrl = `${this.baseApiUrl}/forecast?lat=${location.lat}&lon=${location.lon}&appid=${this.me}`;
        $.getJSON(forecastApiUrl)
            .done(data => callback(data))
            .fail(() => callback(null));
    }

    getHistoricalPollution(location, callback) {
        const historicalApiUrl = `${this.baseApiUrl}/history?lat=${location.lat}&lon=${
            location.lon
        }&start=1606223802&end=${Date.now()}&appid=${this.me}`;
        $.getJSON(historicalApiUrl)
            .done(data => callback(data))
            .fail(() => callback(null));
    }
}
