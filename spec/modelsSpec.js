var models = require("../lib/models");

describe("Models", function() {
  describe("Attraction", function() {
    var model;

    beforeEach(function() {
      model = new models.Attraction({name: "SFMOMA"});
    });

    it("should take constructor arg of name", function() {
      expect(model.name).toEqual("SFMOMA");
    });

    describe(".inspect", function() {
      it("should have the name of the attraction", function() {
        expect(model.inspect()).toMatch(model.name);
      });

      it("should have the inspect() output of each pass", function() {
        spyOn(models.Pass.prototype, 'inspect');

        model.add(new models.Pass({}));
        model.add(new models.Pass({}));

        model.inspect();

        expect(models.Pass.prototype.inspect.callCount).toEqual(2);
      });
    });
  });

  describe("Pass", function() {
    var model;

    beforeEach(function() {
      model = new models.Pass({location: "SOMA", dueDate: '02/03/04'});
    });

    it("should take constructor args", function() {
      expect(model.location).toEqual('SOMA');
      expect(model.dueDate).toEqual('02/03/04');
    });

    describe(".inspect", function() {
      it("should have the location", function() {
        expect(model.inspect()).toMatch(model.location);
      });

      it("should have the dueDate", function() {
        expect(model.inspect()).toMatch(model.dueDate);
      });
    });
  });
});
