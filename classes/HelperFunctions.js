class HelperFunctions {
  calculateAqiDescription(i) {
    switch (i) {
      case 1:
        return 'Good';
      case 2:
        return 'Fair';

      case 3:
        return 'Moderate';

      case 4:
        return 'Poor';

      case 5:
        return 'Very Poor';

      default:
        return 'N/A';
    }
  }
}
