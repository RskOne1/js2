// 1.
// В городе 2 зоопарка с разными животными
// Посчитать сколько всего животных в городе
// * Посчитать уникальных животных в городе, вывести список

var zoo1 = {
  name: 'Зоопарк 1',
  animals: ['медведь', 'лиса', 'заяц'],
}

var zoo2 = {
  name: 'Зоопарк 2',
  animals: ['жираф', 'слон', 'медведь', 'тигр', 'змея'],
}


// 2.
// Выйдите из цикла, изменив только две отмеченные строки.
// Результат в консоли сейчас останавливается на 9 9. Должен на 5 4.

for (let i = 0; i < 10; i++) { //! Эту строку можно изменить
 for (let j = 0; j < 10; j++) {
   if (i === 5 && j === 5) {
     //! Эту строку можно изменить
   }
 
   console.log(i, j);
 }
}


// 3.
// Из базы данных пришел ответ с набором пользователей
// 1. Вывести в консоль список ФИО всех пользователей
// 2. Вывести в консоль спикок ФИО пенсионеров мужчин (старше 65)
// 3. Вывести в консоль спикок ФИО людей, возраст которых делится на 2 без остатка

var response = {
  statusCode: 200,
  status: 'ok',
  data: {
    users: [
      {
        name: 'Max',
        lastName: 'Smith',
        age: 45,
        gender: 'male'
      },
      {
        name: 'John',
        lastName: 'Add',
        age: 67,
        gender: 'male'
      },
      {
        name: 'Samanta',
        lastName: 'Smith',
        age: 73,
        gender: 'female'
      },
      {
        name: 'James',
        lastName: 'Brooks',
        age: 66,
        gender: 'male'
      },
      {
        name: 'James',
        lastName: 'Brooks',
        age: 83,
        gender: 'male'
      },
      {
        name: 'Adam',
        lastName: 'Jacks',
        age: 43,
        gender: 'male'
      },
      {
        name: 'Sindey',
        lastName: 'Star',
        age: 24,
        gender: 'female'
      },
    ]
  }
}


// 4.
// На страницу с корзиной пришел набор товаров
// 1. Посчитать сумму покупок
// 2. Посчитать общее кол-во единиц товара
// 3. Посчитать общий вес
// 4. Найти самый дешевый товар и удалить его из набора
// 5. Найти самый дорогой товар и удалить его из набора
// *  Случайно набрали некоторых товаров больше чем есть на складе. Посчитать сумму доступных товаров (кол-во на складе - amount)

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

