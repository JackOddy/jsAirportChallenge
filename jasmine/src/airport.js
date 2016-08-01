function airPort(){
  this.hangerCapacity = 3
  this.hanger = []
}

airPort.prototype.capacity = function() {
  return this.hangerCapacity;
};

airPort.prototype.landPlane = function (plane) {
  plane.land();
  this.hanger.push(plane)
};
