function Plane() {
  this.airborneStatus = true;
};

Plane.prototype.isAirborne = function() {
  return this.airborneStatus;
};

Plane.prototype.land = function() {
  this.airborneStatus = false
};

Plane.prototype.takeOff = function() {
  this.airborneStatus = true
};
