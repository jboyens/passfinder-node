var _ = require("underscore");

var Attraction = function(options) {
  this.name = options.name;
  this.passes = [];
};

_.extend(Attraction.prototype, {
  add: function(pass) {
    this.passes.push(pass);
  },

  inspect: function() {
    var passes = _.map(this.passes, function(item) {
      return item.inspect();
    }).join(",\n\t");
    return "Attraction(name: "+this.name+", passes:\n\t"+passes+")";
  }
});

exports.Attraction = Attraction;


var Pass = function(options) {
  this.location = options.location;
  this.dueDate = options.dueDate;
};

_.extend(Pass.prototype, {
  inspect: function() {
    return "Pass(location: "+this.location+", dueDate: "+this.dueDate+")";
  }
});


exports.Pass = Pass;
