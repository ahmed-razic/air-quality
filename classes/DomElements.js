class DomElements {
  constructor() {
    this.searchBox = $('#searchBox');
    this.searchForm = $('#searchForm');
    this.searchQuery = $('#searchQuery');
    this.resultsBox = $('#resultsBox');
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

  showResultsBox() {
    this.resultsBox.removeClass('d-none');
    this.resultsBox.addClass('d-flex');
  }

  hideResultsBox() {
    this.resultsBox.removeClass('d-flex');
    this.resultsBox.addClass('d-none');
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
