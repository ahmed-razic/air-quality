class DisplayResults {
  constructor() {}

  showCurrentDayDetails(details) {
    $.each(details, (key, val) => {
      const name = key;
      const value = val.value;
      const unit = val.unit;
      $('#details').append(`<div class="d-flex justify-content-between">
        <span class="font-weight-bolder">${name}</span>
        <span>${value} ${unit}</span></div>`);
    });
  }
}
