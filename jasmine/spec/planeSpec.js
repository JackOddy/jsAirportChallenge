describe('Plane', function() {
  var plane;

  beforeEach(function() {
    plane = new Plane();
  });

  it("planes start with true for airborne status", function() {
    expect(plane.isAirborne()).toEqual(true);
  });

  describe('land', function() {
    it('sets airborneStatus to false', function() {
      plane.land();
      expect(plane.isAirborne()).toEqual(false);
    })
  })
  describe('takeOff', function() {
    it('sets airborneStatus to true', function() {
      plane.takeOff();
      expect(plane.isAirborne()).toEqual(true);
    })
  })

});
