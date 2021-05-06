class Weather { 
  isStormy() {
      if (this.weatherPrediction() == 5) {
        return true;
      } else {
        return false;
      }
  }

  weatherPrediction() {
    return Math.floor(Math.random() * 5)
  }
}