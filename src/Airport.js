class Airport {

    constructor(capacity = 20){
      this.capacity = capacity;
      this.hangar = [];
    }

    land(plane) {
        this.hangar.push(plane)
        if (this.hangar.length > this.capacity) {
          throw new Error('Airport is full');
        } 
    }

    takeoff() {
      if (this.hangar.length < 1) {
        throw new Error('No Planes Available');
      } else {
        this.hangar.pop();
      }
    }
}