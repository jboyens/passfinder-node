var Passfinder = require("../lib/passfinder");

describe("Passfinder", function() {
  var passfinder;

  beforeEach(function() {
    spyOn(Passfinder.prototype, '_load');

    passfinder = new Passfinder();
  });

  it("should define a list of attractions and urls", function() {
    expect(passfinder.passes).toBeDefined();
  });

  describe(".load", function() {
    it("should do that thing", function() {
      passfinder.load('CoitTower');

      expect(passfinder._load).toHaveBeenCalledWith(jasmine.objectContaining({
        CoitTower: "http://sflib1.sfpl.org/record=b2534123~S1"
      }));
    });
  });
});
