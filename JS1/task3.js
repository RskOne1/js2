var cart = [
    {
      name: 'Йогурт',
      price: 100,
      count: 3,
      amount: 33,
    },
    {
      name: 'Хлеб',
      price: 120,
      count: 2,
      amount: 50,
    },
    {
      name: 'Сметана',
      price: 220,
      count: 1,
      amount: 3,
    },
    {
      name: 'Семечки',
      price: 1,
      count: 100,
      amount: 99,
    },
    {
      name: 'Пиво',
      price: 90,
      count: 22,
      amount: 20,
    },
    {
      name: 'Мясо',
      price: 600,
      count: 3,
      amount: 5,
    },
  ];

let totalSum = 0;
cart.forEach(item => {
totalSum += item.price * item.count});
console.log('Сумма покупок:', totalSum);

let totalCount = 0;
cart.forEach(item => {
totalCount += item.count});
console.log('Общее количество единиц товара:', totalCount);

let cheapestItem = cart[0];
cart.forEach(item => {
if (item.price < cheapestItem.price) {
cheapestItem = item}});
console.log('Самый дешевый товар:', cheapestItem);
cart.splice(cart.indexOf(cheapestItem), 1);

let mostExpensiveItem = cart[0];
cart.forEach(item => {
if (item.price > mostExpensiveItem.price) {
mostExpensiveItem = item}});
console.log('Самый дорогой товар:', mostExpensiveItem);
cart.splice(cart.indexOf(mostExpensiveItem), 1);

let amountSum = 0;
cart.forEach(item => {
if (item.count > item.amount) {
item.count = item.amount;}
amountSum += item.price * item.count});
console.log('Сумма доступных товаров:', amountSum);
