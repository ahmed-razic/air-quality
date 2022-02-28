class DomElements {
    constructor() {
        this.searchBox = $('#searchBox');
        this.searchQuery = $('#searchQuery');
        this.mapButton = $('#mapButton');
        this.mapBox = $('#mapBox');
        this.map = $('#map');
        this.historyBox = $('#historyBox');
        this.loaderBox = $('#loaderBox');
        this.error = $('#error');
    }

    showLoader() {
        this.loaderBox.removeClass('d-none');
    }

    hideLoader() {
        this.loaderBox.addClass('d-none');
    }

    showSearchBox() {
        this.searchBox.removeClass('d-none');
        this.searchBox.addClass('d-flex');
    }

    hideSearchBox() {
        this.searchBox.removeClass('d-flex');
        this.searchBox.addClass('d-none');
    }

    showMapBox() {
        this.mapBox.removeClass('d-none');
        this.mapBox.addClass('d-flex');
    }

    hideMapBox() {
        this.mapBox.removeClass('d-flex');
        this.mapBox.addClass('d-none');
    }

    showHistoryBox() {
        this.historyBox.removeClass('d-none');
        this.historyBox.addClass('d-flex');
    }

    hideHistoryBox() {
        this.historyBox.removeClass('d-flex');
        this.historyBox.addClass('d-none');
    }

    showError() {
        this.error.removeClass('d-none');
    }

    hideError() {
        this.error.addClass('d-none');
    }
}
