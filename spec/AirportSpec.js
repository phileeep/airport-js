describe("Airport", function(){

  let airport;
  let defaultCapacity = 20

  beforeEach(function(){
    airport =  new Airport();
  });

  describe('#capacity', function() {
    it ('automatically sets to default capacity', function() {
      expect(airport.capacity).toEqual(defaultCapacity)
    });
    it ('Checks that the airport has a hangar to land in', function() {
      expect(airport.hangar).toEqual([]);
    });
  });
});