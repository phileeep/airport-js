'use strict';

describe("Airport", function(){

  let airport;
  let plane;
  let weather;
  let defaultCapacity = 20;

  beforeEach(function(){
    airport =  new Airport();
    plane = new Plane();
    // weather = jasmine.createSpyObj('weather', ['isStormy'])
    weather = new Weather
  });

  describe('#capacity', ()=>{
    it ('automatically sets to default capacity', () => {
      expect(airport.capacity).toEqual(defaultCapacity)
    });
    it ('Checks that the airport has a hangar to land in', () => {
      expect(airport.hangar).toEqual([]);
    });
    it ('Can land a plane into the hangar', () => {
      airport.land(plane);
      expect(airport.hangar).toEqual([plane]);
    });
    it ('Can take off a plane from the hangar', () => {
      airport.land(plane);
      airport.takeoff();
      expect(airport.hangar).toEqual([]);
    });
    it ('Can have the capacity of the airport changed', () => {
      airport = new Airport(1);
      expect(airport.capacity).toEqual(1);
    });
    it ('Will not land a plane if the airport is full', () => {
      airport = new Airport(1);
      airport.land(plane);
      expect(() => { airport.land(plane); }).toThrowError('Airport is full');
    }); 
    it ('Will not take off a plane if the hangar is empty', () => {
      expect(() => { airport.takeoff(); }).toThrowError('No Planes Available');
    });
  });
  
  describe('weather conditions', () => {

    beforeEach(function() {
      airport.land(plane);
      spyOn(airport, 'isStormy').and.returnValue(true)
    })

    it ('Will not take off a plane if the weather is stormy', () => {
      expect(() => { airport.takeoff(); }).toThrowError('It is stormy cannot take off');
    }); 
  });
});