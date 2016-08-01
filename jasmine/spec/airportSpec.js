describe('airPort', function(){

  beforeEach(function() {
    airport = new airPort();
    plane = {
      land : function() {
      }
    };
  });

  describe('capacity', function(){
    it('has a default value of 3', function(){
      expect(airport.capacity()).toEqual(3);
    });
  });
  describe('landPlane', function(){
    it('lands a plane', function() {
      spyOn(plane, 'land')
      airport.landPlane(plane)
      expect(plane.land).toHaveBeenCalled();
      expect(airport.hanger).toEqual([plane]);
    })
  });
});
