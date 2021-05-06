'use strict';

describe("Weather", function(){
  let weather;

  beforeEach(function(){
    weather = new Weather();
  });

  describe('Is it Stormy?', () => {
    it('Returns a value of true if random number is 5', () => {
      spyOn(weather, 'weatherPrediction').and.returnValue(5);
      expect(weather.isStormy()).toEqual(true);
    });
  });
});