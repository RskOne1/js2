var zoo1 = {
  name: 'Зоопарк 1',
  animals: ['медведь', 'лиса', 'заяц'],
}

var zoo2 = {
  name: 'Зоопарк 2',
  animals: ['жираф', 'слон', 'медведь', 'тигр', 'змея'],
}

var allAnimals = zoo1.animals.concat(zoo2.animals);
console.log('в городе животные: '+ allAnimals);
var totalAnimals = allAnimals.length;
console.log('всего животных: '+ totalAnimals);
var uniqueAnimals = array.map(allAnimals);
console.log('уникальные животные: '+ uniqueAnimals.join(","));
