const ANCESTRY_FILE = require("../../ext/ancestry");

var ancestry = JSON.parse(ANCESTRY_FILE);

function average(array) {
    function plus(a, b) { return a + b; }
    return Math.round(array.reduce(plus) / array.length);
}

function groupBy(array, groupOf) {
  return array.reduce(function(groups, element) {
    var groupName = groupOf(element);
    (groupName in groups) ? groups[groupName].push(element) : groups[groupName] = [element];

    return groups;
  }, {});
}

var getStatistic = groupBy(ancestry, function(person) {
  return Math.ceil(person.died / 100);
});

for (var statistic in getStatistic) {
  var ages = getStatistic[statistic].map(function(person) {
    return person.died - person.born;
  });
}