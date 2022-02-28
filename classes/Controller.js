class Controller {
    constructor() {
        this.pollutionData = new PollutionData();
        this.geolocationData = new GeolocationData();
        this.elements = new DomElements();
        this.prepareData = new PrepareData();
        this.start();
    }

    getAllData(cityName) {
        this.geolocationData.getGeolocation(cityName, location => {
            if (!location) {
                this.elements.showError('Could not find city. Please try again.');
                return;
            }
            this.pollutionData.getCurrentPollution(location[0], data => {
                if (!data) {
                    this.elements.showError('Could not get pollution data. Please try again.');
                    return;
                }
                this.prepareData.prepareCurrentData(data);
            });
        });
    }

    getCityName() {
        return this.elements.searchQuery.val().trim();
    }

    onSubmit() {
        const cityName = this.getCityName();
        if (!cityName) return;
        this.elements.hideSearchBox();
        this.elements.showLoader();

        getAllData(cityName);
    }

    start() {
        this.elements.searchForm.on('submit', e => {
            e.preventDefault();
            this.onSubmit();
        });
    }
}
