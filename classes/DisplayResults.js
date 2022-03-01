class DisplayResults {
  constructor() {
    this.elements = new DomElements();
  }

  showCurrentDayDetails(details) {
    $.each(details, (key, value) => {
      $('#details').append(`<div class="d-flex justify-content-between">
        <span class="font-weight-bolder">${key}</span>
        <span>${value}</span></div>`);
    });

    this.elements.hideLoader();
    this.elements.showResultsBox();
  }

  showCurrentDayData(details) {
    $('#card-weekday').html(details.day);
    $('#card-date').html(details.date);
    $('#card-location').html(details.city);
    $('#card-index').html(details.aqi);
    $('#card-description').html(details.aqiDescription);
  }
}
