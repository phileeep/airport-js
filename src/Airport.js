class Airport {

    constructor(capacity = this._defaultCapacity()){
      this.capacity = capacity;
      this.hangar = [];
      this.weather = new Weather();
    }

    land(plane) {
      this.hangar.push(plane);
      if (this.hangar.length > this.capacity) {
        throw new Error('Airport is full');
      } 
    }

    takeoff() {
      if (this.hangar.length < 1) {
        throw new Error('No Planes Available');
      } else if (this.isStormy() == true) {
        throw new Error('It is stormy cannot take off');
      } else {
        this.hangar.pop();
      }
    }

    isStormy() {
      return false; 
    }

    _defaultCapacity(){
      return 20;
    }
    
}