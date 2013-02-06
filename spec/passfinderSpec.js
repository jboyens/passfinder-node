var passfinder = require("../lib/passfinder");

describe("Passfinder", function() {
  var p;

  beforeEach(function() {
    p = new passfinder.Loader();
  });

  it("should define a list of attractions and urls", function() {
    expect(p.passes).toBeDefined();
  });

  describe(".load", function() {
  });
});
