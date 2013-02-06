var request = require("request");
var cheerio = require("cheerio");
var _ = require("underscore");
var models = require("./models");

var Loader = function() {
};

_.extend(Loader.prototype, {
  attractions: [],
  locations: {},

  passes: {
    AquariumOfTheBay:            "http://sflib1.sfpl.org/record=b2318132~S1",
    AsianArtMuseum:              "http://sflib1.sfpl.org/record=b2318133~S1",
    BalboaSwimmingPool:          "http://sflib1.sfpl.org/record=b2534125~S1",
    CaliforniaAcademyOfSciences: "http://sflib1.sfpl.org/record=b2318134~S1",
    CaliforniaHistoricalSociety: "http://sflib1.sfpl.org/record=b2318135~S1",
    CartoonArtMuseum:            "http://sflib1.sfpl.org/record=b2318136~S1",
    ChildrensCreativityMuseum:   "http://sflib1.sfpl.org/record=b2318154~S1",
    CoffmanSwimmingPool:         "http://sflib1.sfpl.org/record=b2541153~S1",
    CoitTower:                   "http://sflib1.sfpl.org/record=b2534123~S1",
    ConservatoryOfFlowers:       "http://sflib1.sfpl.org/record=b2318137~S1",
    ContemporaryJewishMuseum:    "http://sflib1.sfpl.org/record=b2318141~S1",
    GarfieldSwimmingPool:        "http://sflib1.sfpl.org/record=b2534127~S1",
    HaasLilienthalHouse:         "http://sflib1.sfpl.org/record=b2318144~S1",
    HamiltonSwimmingPool:        "http://sflib1.sfpl.org/record=b2534126~S1",
    JapaneseTeaGarden:           "http://sflib1.sfpl.org/record=b2534124~S1",
    MLKSwimmingPool:             "http://sflib1.sfpl.org/record=b2534130~S1",
    MuseumOfTheAfricanDiaspora:  "http://sflib1.sfpl.org/record=b2318149~S1"
  },

  load: function() {
    _.each(passes, function(value, key) {
      var attraction = new models.Attraction({name: key});
      attractions.push(attraction);

      request(value, function(error, response, body) {
        var $ = cheerio.load(body);
        var nextStep = $('input[value*=additional]').parent().attr('action');

        request.post("http://sflib1.sfpl.org/"+nextStep, function(error, response, body) {
          var $ = cheerio.load(body);

          $('#bib_items .bibItemsEntry').each(function(index, element) {
            var location = $(this).find("td:first-child").text().trim();

            attraction.add(new models.Pass({
              location: location,
              dueDate: $(this).find("td:last-child").text().trim()
            }));

            if (!locations[location]) {
              locations[location] = [];
            }
            locations[location].push(attraction);
          });
        });
      });
    });
  }

});

exports.Loader = Loader;
