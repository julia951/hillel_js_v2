/**
 --- Масиви ---

 У JavaScript масив (Array) є структурою даних, яка дозволяє зберігати колекцію елементів в одній змінній.
 Масиви в JavaScript можуть містити елементи будь-якого типу даних, такі як числа, рядки, об'єкти, функції та інше.
 Кожен елемент у масиві має унікальний індекс, що дозволяє доступатися до нього та взаємодіяти з ним.

 Тобто, 
 * масив – впорядкована колекція значень. JavaScript масив може містити елементи будь-якого типу. Масив – це особливий вид об'єктів.
 * Елемент масиву – окреме значення, що знаходиться у масиві.
 * Індекс – числова позиція елемента масиву. Індексація масиву починається з 0

 --- Ініціалізація масивів ---

 Літеральний спосіб: Ви можете створити масив, вказуючи його елементи у квадратних дужках. Наприклад:
 
 */

// Ви можете створити порожній масив
let emptyArray = [];            // створення масиву з використанням літералу (частіше використовується цей варіант)
let emptyArrayConstructor = new Array();   // створення масиву з використанням конструктора


const fruits = ["яблуко", "груша", "апельсин"]; // створення масиву та заповнення масиву рядковими значеннями
const numbers = new Array(1, 2, 3, 4, 5); // Використання конструктора Array

var arr = [10, "John", true]; // Масив у JS дуже невибагливий, туди можна наштовхати чого завгодно

// під час використання consol.log будуть відображатися всі елементи масиву
console.log(fruits);
console.log(arr);
console.log(typeof arr); // object - масив, особливий вид об'єктів

/* Отримання доступу до елементів масиву відбувається за допомогою наступного синтаксису:

масив[індекс] = значення; - зміна значення елемента масиву за індексом
змінна = масив[індекс]; - читання значення елемента масиву за індексом */

let cities = []; // створення порожнього масиву
cities[0] = "London"; // присвоєння значення за індексом 0
cities[1] = "Paris"; // присвоєння значення за індексом 1
cities[2] = "Berlin"; // присвоєння значення за індексом 2
cities[3] = "Rome"; // присвоєння значення за індексом 3

let cityName = cities[0];
console.log("First array element - " + cityName);

// Додавання та перезапис значень
var arr = ['Oleg', 'Olga', 'Mikola'];
console.log(arr[0])
arr[3] = 'Koly';
console.log(arr)

// Додавання значень за допомогою push
const emptyArray1 = [];
emptyArray1.push("елемент 1");
emptyArray1.push("елемент 2");

/* Тож яка різниця із об'єктом?

const fruits = ["яблуко", "груша", "апельсин"];

const person = {
  name: "John",
  age: 30,
  city: "New York"
};

- Масиви зазвичай використовуються для зберігання списків елементів одного типу (наприклад, чисел, рядків).
- Об'єкти використовуються для зберігання асоціативних даних, де кожен ключ має своє значення.

- У масивах доступ до даних відбувається за допомогою індексів, які є числами.
- У об'єктах доступ до даних відбувається за допомогою ключів, які можуть бути рядками.
*/

/* А що буде якщо записати у неіснуючий індекс?

При записі значення за неіснуючим індексом в масив буде додано нове значення за цим 
індексом. Водночас значення властивості length буде перераховано. 

https://www.tiktok.com/@scrumlaunch/video/7303225465404230917

*/

const numbers1 = [1, 2, 3, 4, 5];

console.log(numbers1[7]);//Якщо спробувати прочитати значення індексу для якого немає елемента масиву, буде отримано значення undefined.
console.log(numbers1.length);
numbers1[7] = 10; // 6 елемент (індекс 2) стає 10
console.log(numbers1[7]);
console.log(numbers1.length);

// Перезапис
var arr = ['Oleg', 'Olga', 'Mikola'];
arr[0] = 'Solomiya';
console.log(arr)

/* 

Важливо пам'ятати, що індекси масивів починаються з нуля. 
Тобто перший елемент має індекс 0, другий - індекс 1 і так далі. 
Якщо ви намагаєтесь прочитати або записати значення за індексом, який виходить за межі розміру масиву, то це може призвести до помилки. Також, важливо перевіряти діапазон індексів перед читанням або записом даних у масив.
 
*/

// Властивість length

let cities = ["London", "Paris", "Berlin", "Rome"];
console.log(cities.length); // length - властивість масиву, в якому знаходиться кількість елементів масиву

cities[4] = "Lisbon"; // при зміні елемента масиву, що знаходиться за межами поточної довжини масиву, відбувається автоматичне оновлення властивості length
console.log(cities.length); // довжина масиву збільшилась на 1

cities[10] = "Madrid";
console.log(cities.length); // тепер довжина масиву 11, оскільки індекс останнього елемента масиву 10

cities.length = 2; // встановивши lenth менше розміру масиву, ми видалили елементи, що виходять за межі нового розміру масиву
console.log(cities);

/* 
   Оператор delete видалить елемент масиву, але залишить його індекс з властивістю undefined.

   Важливо враховувати, що видалені елементи залишаються в масиві як undefined, і вони можуть впливати на подальшу роботу з масивом. Тому ретельно вивчайте потреби та вимоги вашого коду, перш ніж використовувати оператор delete для масивів.
*/

var arr = ['Oleg', 'Olga', 'Mikola'];
delete arr[0];
console.log(arr)
console.log(arr[0])

//Масив також має властивості

var arr = ['Oleg', 'Olga', 'Mikola'];
console.log('Довжина масиву = ' + arr.length);
//властивість length доступна на запис
arr.length = 15; //Але так робити не треба!
console.log('Довжина масиву = ' + arr.length);
console.log(arr);
console.log(arr[10]);


// Як зрозуміти, що перед вами масив?
var arr = ["один", "два", "три"];
console.log(typeof arr);

var notArr = {
    0: "Один",
    1: "Другой",
    2: "Третий",
    length: 3
}
console.log(typeof notArr);

/* 

Метод Array.isArray() - використовується для перевірки, чи об'єкт є масивом.
Він повертає true, якщо об'єкт є масивом, і false у протилежному випадку. 

*/

var arr = ["один", "два", "три"];

console.log(Array.isArray(arr));
console.log(Array.isArray(notArr));

// Виведення елементів масиву за допомогою циклу

let cities = ["London", "Paris", "Berlin", "Rome"];

// запускаємо цикл із лічильником від 0 до 4 (довжини масиву)
for (let index = 0; index < cities.length; index++) {
    const element = cities[index]; // звертаємось до елементу масиву за індексом (значенням лічильника циклу)
    console.log(element);
}

// for of

let cities = ["London", "Paris", "Berlin", "Rome"];

// прохід за значеннями масиву cities
// на кожній ітерації в змінну city записуватиметься наступні значення з масиву cities
for (const city of cities) {
    console.log(city);
}

// Пошук максимального значення масиву

var values = [10, 20, 4, 6, 11, 9, 125, 1, 8, 0, 3];
var max = Number.MIN_VALUE;

for (let index = 0; index < values.length; index++) {
    const element = values[index];
    if (element > max) {
        max = element;
    }
}

// Зберігання назви, ціни та кількості обраних продуктів у різних масивах - не оптимальне рішення
// даний приклад демонструє використання масивів та зручність їх застосування для додатків, де є багато однотипних даних
// цей код буде оптимізовано в уроці, присвяченому роботі з об'єктами

// масив із іменами продуктів
let names = [];
names[0] = "Папір офісний А4, 80 г/м2, 500 л";
names[1] = "Біндери для паперу 51 мм";
names[2] = "Ручка кулькова синя";
names[3] = "Test";

// масив із цінами продуктів
let prices = [];
prices[0] = 280.25;
prices[1] = 56;
prices[2] = 12.50;
prices[3] = 10;

// масив з кількістю продуктів, що купуються
let products = [];

// цикл для отримання кількості продуктів, що купуються
for (let index = 0; index < names.length; index++) {
    const name = names[index];
    const price = prices[index];

    products[index] = +prompt(`Вкажіть кількість продуктів '${name}', ціна ${price}`, 0);
}

// цикл для розрахунку загальної ціни куплених продуктів
let totalPrice = 0;
for (let index = 0; index < products.length; index++) {
    totalPrice += prices[index] * products[index];
}

alert(`Сума Вашого замовлення ${totalPrice}.`);

let isFreeShipping = totalPrice > 1000;
if (isFreeShipping) // іноді в умові використовується лише одна змінна
{
    alert("Доставка буде безкоштовною.");
}

console.log("Максимальне значення масиву - " + max);

// Перебір масиву
var arr = ["перший", "другий", "ще один"];

// Робимо масив з "діркою"
arr[5] = "багато";
for (let i = 0; i < arr.length; i++) {
    console.log("arr[" + i + "] = " + arr[i]);
}

// Якщо спробувати for in
var arr = ["перший", "другий", "ще один"];
arr[11] = "багато";
arr.someNew = '12345er'; // Можемо зробити наш масив трохи асоціативним

for (let i in arr) {
    console.log("arr[" + i + "] = " + arr[i]);
}

//Але чому дорівнює довжина такого масиву?
console.log("length of arr = " + arr.length);

// Як буде виглядати вивід саме через класичний for!

for (let i = 0; i < arr.length; i++) {
    console.log("arr[" + i + "] = " + arr[i]);
}

/* ----- Методи масивів ------

Метод – функція, визначена в об'єкті. 
Функція – блок коду, який виконує певну дію, цей  блок коду можна використовувати неодноразово. 
У багатьох об'єктів, таких як масиви, є 
багато вбудованих методів, які спрощують роботу розробника. Використання методів  має наступний загальний принцип: 

змінна.ім'я_методу(список_параметрів);

Для отримання доступу до методів об'єкта необхідно скористатися оператором ”.”, після  якого вказати ім'я методу. 
Після імені методу обов'язково потрібно вказати круглі дужки,  у яких, залежно від методу, використовуватимуться різні значення.

*/

// Перетворення масиву на рядок
var arr = [1, 2, 3, 4, 5];
//arr[9] = 10;
console.log('toString() : ' + arr.toString()); // метод, який перетворює масив в рядок. Він повертає рядок, який містить розділені комами значення масиву
console.log('join без параметрів : ' + arr.join());	// Якщо в метод join() не передати роздільник, то елементи масиву будуть об'єднані за допомогою коми
console.log('join з параметром : ' + arr.join('----'));// можна вказати роздільник

// Дія зворотна join - split
var str = "Був рядок із пробілами. Став масив слів";
var arr = str.split(' '); //Вказуємо символ, яким будемо " розбивати "
console.log(arr);

var str = "value1, value2, value3";       
var values = str.split(', '); // створення масиву на основі рядка, використовуючи як роздільник ', '  
console.log(values);

// concat - об'єднує два масиви
var a = [1, 2];
var b = [3, 4];
var res = a.concat(b);
console.log(res);

// У метод concat можна передати багато параметрів, і навіть не обов'язково - масивів
var a = [1, 2];
var b = [3, 4];
var res = a.concat("five", true, b); // Вихідні масиви не змінилися, поверне НОВИЙ масив
console.log(res);

// Начебто як "складення" масивів
var a = [1, 2];
var b = [3, 4];
var str = a + b;
console.log(str);
console.log(typeof str);

//indexOf()/lastIndexOf() - Працює і у масиві!
// indexOf - шукає елемент із зазначеним значенням у масиві та повертає його індекс, або -1, якщо елемент не знайдений
var arr = ['Oleg', 'Olga', 'Mikola', 'Vadim', 'Vadim'];
console.log(arr.indexOf('Olga')); 
console.log(arr.indexOf('Vadim')); 
console.log(arr.indexOf("Vadim", 4)); // шукає індекс значення Vadim, починаючи з 4 індексу масиву
console.log(arr.indexOf("Julia")); // -1 значення не знайдено
console.log(arr.lastIndexOf('Vadim')); // lastIndexOf - пошук праворуч наліво 

// вирізаємо "шматочок" масиву
// slice - створює новий масив, який містить підмасив від певного індексу 
// slice(start, end) - чи можна сказати, що повертає новий масив, який копіює елементи з start до end (не включаючи end)
var arr = [1, 3, 7, 5, 8, 9];
//var newArray = arr.slice(3);// З третього – і до кінця
//var newArray = arr.slice(2, 5); // з другого по п'ятий
//var newArray = arr.slice(3, 1);//порожній масив
//var newArray = arr.slice(-4, -1);//відраховує з кінця
//var newArray = arr.slice(); // Поверне весь масив. Тобто фактично клонує його!
console.log('arr = ' + arr); // Початковий масив залишився незмінним
console.log('x = ' + newArray);

// Задом на перед - все навпаки!
var arr = [1, 3, 7, 5, 8, 9];
arr.reverse(); //Змінює сам масив!
console.log(arr)

/*  includes()  використовується для визначення того, чи містить масив певне значення. 
Він повертає true, якщо значення знайдено у масиві, та false, якщо воно відсутнє */
var arr = [1, 3, 7, 5, 8, 9];
console.log(arr.includes(7));

// Епічна тема: сортування масиву
var arr = [16, 2, 7, 9, 34, 3];
console.log("before sort: " + arr);
console.log("after default sort: " + arr.sort());

/*
За замовчуванням sort() сортує елементи у лексикографічному порядку, що означає, що рядки сортуються за їхніми кодами Unicode,
а числа сортуються як рядки.
Проте, ви можете використовувати власну функцію порівняння для визначення кастомного порядку сортування.
*/
var arr = [16, 2, 7, 9, 34, 3];
arr.sort(myCompare);
console.log("after my sort: " + arr);

function myCompare(a, b) {
    return a - b // якщо результат буде позитивне то порядок буде змінено
}

console.log(myCompare(-4, -2));


// -2 - (-4) = -2 +4 = 2
// -4 - (-2) = -4 +2 = -2


// А можна навіть так
var arr = [16, 2, 7, 9, 34, 3];
arr.sort(function (a, b) {
    return b - a
});
console.log("after my sort: " + arr); // в змінному порядку

// Як воно буде працювати зі строками ?
const fruits2 = ['banana', 'apple', 'date', 'cherry'];
fruits2.sort();
console.log(fruits2);

// ----- Маніпуляції з масивом -----

// push та pop - додають елементи в кінець масиву або видаляють останній елемент
// pop() - метод масиву, який видаляє останній елемент масиву та повертає його
var cities = ["London", "Paris", "Berlin", "Rome"];
console.log('Початковий arr = ' + cities);
let last = cities.pop();
console.log("pop result " + last);
console.log('Після змін arr = ' + cities);

// push - метод, який додає вказане значення в кінець масиву
var cities = ["London", "Paris", "Berlin", "Rome"];
console.log('Початковий arr = ' + cities);
cities.push("> Lisbon <");
console.log('Після змін arr = ' + cities);
cities.push(">> Las Vegas <<", ">> New York <<", ">> Toronto <<");
console.log('Після змін arr = ' + cities);


// unshift та shift - додають елементи на початок масиву або видаляють перший елемент
// зсув масиву - вліво, "втрачаючи" перший елемент
var arr = ['abc', 24, 'def', 14];
console.log('Початковий arr = ' + arr);
var v = arr.shift(); //"втрачений" елемент
console.log('v = ' + v + '\narr = ' + arr);

// зсув масиву - праворуч, додаючи елементи
var arr = ['abc', 24, 'def', 14];
console.log('Початковий arr = ' + arr);
var v = arr.unshift(1, 2); //Повертає довжину масиву
console.log('v = ' + v + '\narr = ' + arr);

var arr = ['abc', 24, 'def', 14];
console.log('Початковий arr = ' + arr);
console.log('Новий arr = ' + arr.fill('blablabla'));

var arr = ['abc', 24, 'def', 14];
console.log('Початковий arr = ' + arr);
console.log('Змінений arr = ' + arr.fill('blablabla', 1));

var arr = ['abc', 24, 'def', 14];
console.log('Початковий arr = ' + arr);
console.log('Змінений arr = ' + arr.fill('blablabla', 1, 3));

/*  Метод splice, ! не плутати з slice!. 

    Використовується для зміни вмісту масиву, включаючи вставку, видалення та заміну елементів.
*/

var arr = [1, 2, 3, 4, 5];
console.log('Початковий arr = ' + arr);
var newArr = arr.splice(1, 2);
console.log('newArr = ' + newArr + '\narr = ' + arr);

//вставити шматочок у середину
var arr = [1, 2, 3, 4, 5];
console.log('Початковий arr = ' + arr);
var res = arr.splice(2, 0, 'a', 'b'); //другий параметр дорівнює 0, що означає, що жоден елемент не буде видалено, але нові елементи 'a' та 'b' будуть вставлені починаючи з позиції 2 у масиві arr
console.log('res = ' + res + '\narr = ' + arr);

//Можна і вирізати та вставити
var arr = [1, 2, 3, 4, 5];
console.log('Початковий arr = ' + arr);
var res = arr.splice(1, 2, 'a', 'b');
console.log('res = ' + res + '\narr = ' + arr);

//Виконуємо щось для кожного члена масиву. 

/* Ітераційні методи масивів в JavaScript - це методи, які дозволяють легко перебирати елементи масиву та виконувати певні дії над кожним з них. 
Ці методи роблять роботу з масивами більш зручною та допомагають уникнути ручного написання циклів. 
Ось декілька ітераційних методів масивів та приклади їх використання: 

*/

//forEach - виконує задану функцію для кожного елемента масиву
var arr = [2, 4, 6, 8];

arr.forEach(function (v) {
    console.log(v * 10)
});

console.log(arr);

// Можна зустріти такий вигляд
var arr = [2, 4, 6, 8];
arr[7] = 111;
arr.forEach((v) => {
    console.log(v * 10)
});
console.log(arr);

// Звісно можна використовувати старий добрий спосіб. Але не забуваємо що виводимо повністю все!
var arr = [2, 4, 6, 8];
arr[7] = 111;
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i] * 10);
}
console.log(arr);


// map - створює новий масив, не трансформуючи вихідний, застосовуючи функцію до кожного елемента
var arr = [2, 4, 6, 8];
var res = arr.map(function (v) {
    return v * 10;
});
console.log(arr);
console.log(res);

// Фільтрація масиву 
// filter - створює новий масив, включаючи елементи, які задовольняють умову
// Приклад 1
var arr = [2, 8, 4, 12, 34, 3, 51];

var res = arr.filter(checker);

console.log("arr = " + arr);
console.log("res = " + res);

function checker(item) {
    return item > 8;
}

// Приклад 2
const numbers1 = [1, 2, 3, 4, 5];
const evenNumbers = numbers1.filter((number) => number % 2 === 0);
// evenNumbers: [2, 4]

// Перевірка масиву every/ some
// every - перевіряє, чи задовольняють всі елементи масиву певну умову:
const ages1 = [25, 30, 35, 40, 45];
const isAdults = ages1.every((age) => age >= 18); // true, всі старше 18

// some - перевіряє, чи хоча б один елемент масиву задовольняє певну умову:
const ages = [16, 20, 25, 30, 35];
const hasAdult = ages.some((age) => age >= 18); // true, є дорослі



var arr = [1, 2, 3, -4, 4, 5, 6];
console.log("arr = " + arr);

console.log("Is EVERY positive? " + arr.every(checker)); // Метод every() повертає true, якщо всі елементи масиву задовольняють умову, вказану у функції checker
console.log("is SOME positive? " + arr.some(checker)); // Метод some() повертає true, якщо хоча б один елемент масиву задовольняє умову, вказану у функції checker, та false, якщо жоден елемент не задовольняє цю умову.


function checker(item) {
    return item > 0;
}

/*

reduce  використовується для зменшення масиву до одного значення шляхом виконання функції звуження (reducer function) для кожного елемента масиву. 
Цей метод приймає функцію звуження та, за потреби, початкове значення, і використовує їх для обчислення одного значення на виході 

*/
const numbers2 = [1, 2, 3, 4, 5];
const sum = numbers2.reduce((accumulator, number) => accumulator + number, 0);
// sum: 15




var arr = [2, 4, 3, 1, 5];
//var res = arr.reduce(myAction);
//var res = arr.reduce(myAction, 12); // "стартове" значення
//var res = arr.reduce(myAction, 0);
//var res = arr.reduceRight(myAction, 0);

console.log('+++++++++++++\nresult: ' + res);

// Сума масиву
function myAction(accumulator, currentValue, index, array) {
    console.log('-----\n' + 'now in accumulator: ' + accumulator);
    console.log('arr[' + index + '] = ' + currentValue);
    return accumulator + currentValue;
}

// Ще приклад сума масиву тільки для непарних чисел, як приклад
var arr = [1, 2, 3, 4, 5];
var res = arr.reduce(myAction);
function myAction(accumulator, currentValue, index, array) {
    console.log('-----\n' + 'now in accumulator: ' + accumulator);
    console.log('arr[' + index + ']=' + currentValue);
    accumulator = (currentValue % 2 !== 0) ? accumulator + currentValue : accumulator;
    return accumulator;
}
console.log(res);

/* find  -  знаходить перший елемент масиву, який задовольняє певну умову. */
var arr = [1, 2, true, 4, 5, 'test'];
console.log(arr.find((el) => {
    return el === 5;
}))

const fruits4 = ["яблуко", "груша", "апельсин", "банан"];
const firstCitrusFruit = fruits4.find((fruit) => fruit === "апельсин");
// firstCitrusFruit: "апельсин"

//можна достукатись і до об'єктів
var arr = [
    { name: "John Snow", age: 45 },
    { name: "Cersei Lannister", age: 32 },
    { name: "Daenerys Targaryen", age: 18 },
    { name: "Jorah Mormont", age: 28 }
];

console.log(arr.find((el) => {
    return el.age === 18;
}))

//findIndex - знаходить індекс першого елемента, який задовольняє умову
const colors = ["червоний", "зелений", "синій", "жовтий"];
const indexOfBlue = colors.findIndex((color) => color === "синій"); // indexOfBlue: 2

/* Дз 1 
Ми знаємо як відсортувати масив. А ось спробуйте його перемішати!

Приклад масиву: arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

Напишіть функцію myBlend(arr), яка перемішуватиме переданий їй масив. 
Зверніть увагу: не створювати новий масив, вже перемішаний, а саме перемішувати той, який їй передали. */


// Як зробити "випадковіть"?


/* Дз 2
Уявімо собі, що ми є власниками великої компанії, яка розробляє платформу для продажу квитків. 

Окрім того, наша компанія продає рішення для організації продажу цих квитків. 
Таким чином, у нас будуть клієнти, які придбають наше програмне забезпечення (ПО). 
По суті, ці клієнти будуть подібні до "дочірніх компаній" (subCompany), які вже використовують наше ПО для продажу квитків. 
Крім цього, ці "дочірні компанії" також можуть стати постачальниками цього рішення, 
і в цьому випадку вони вже будуть "внучатами компанії" (subSubCompany), і так далі і далі

Ось приклад об'єкту, зверніть увагу на вкладеність, та маєте на увазі що об'єкт може ставати ще глибшим.

Вам необхідно написати функцію findValueByKey(companyName), яка буде приймати значення у вигляді companyName та надавати інформацію про цю subCompany. */

const company = {
    name: 'Велика Компанія',
    type:'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
      {
        name: 'Клієнт 1',
        type: 'subCompany',
        uses: 'ПО для продажу квитків',
        sells: 'Рішення для продажу квитків',
        partners: [
          {
            name: 'Клієнт 1.1',
            type: 'subSubCompany',
            uses: 'Рішення для продажу квитків',
            sells: 'Рішення для продажу квитків',
          },
          {
            name: 'Клієнт 1.2',
            type: 'subSubCompany',
            uses: 'Рішення для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
              {
                name: 'Клієнт 1.2.3',
                type: 'subSubCompany',
                uses: 'Рішення для продажу квитків',
                sells: 'Рішення для продажу квитків',
              }
            ]
          }
        ]
      },
      {
        name: 'Клієнт 2',
        type: 'subCompany',
        uses: 'ПО для продажу квитків',
        sells: 'Рішення для продажу квитків'
      }
    ]
  };
// Яким чином перевірити що є в обєкті конкретне значення?

function findValueByKey(companyName, company) {
    // Перевірка, чи існує компанія з такою назвою
    if (company.name === companyName) {
      return company;
    }
  
    // Перевірка, чи є у компанії клієнти
    if (company.clients) {
      // Пошук серед клієнтів
      for (let client of company.clients) {
        if (client.name === companyName) {
          return client;
        }
  
        // Перевірка, чи є у клієнта партнери
        if (client.partners) {
          // Рекурсивний виклик функції для кожного партнера
          let result = findValueByKey(companyName, { clients: client.partners });
          if (result) {
            return result;
          }
        }
      }
    }
  
    // Повернення значення null, якщо компанія не знайдена
    return null;
  }
  
  // Приклад використання
  const companyName = 'Клієнт 1.2.3';
  const result = findValueByKey(companyName, company);
  
  if (result) {
    console.log(`Інформація про компанію ${companyName}:`);
    console.log(result);
  } else {
    console.log(`Компанія ${companyName} не знайдена`);
  }

/*--------------------------------------------------------------------------------------------------------
Додатково:

w3schools

https://www.w3schools.com/js/js_arrays.asp
https://www.w3schools.com/js/js_array_methods.asp
https://www.w3schools.com/js/js_array_search.asp
https://www.w3schools.com/js/js_array_sort.asp
https://www.w3schools.com/js/js_array_iteration.asp

developer mozilla

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

Hardcore tasks from codewars.com:

https://www.codewars.com/kata/57cc975ed542d3148f00015b
https://www.codewars.com/kata/5a2be17aee1aaefe2a000151
https://www.codewars.com/kata/56576f82ab83ee8268000059
https://www.codewars.com/kata/563e320cee5dddcf77000158
https://www.codewars.com/kata/5a092d9e46d843b9db000064
https://www.codewars.com/kata/588a3c3ef0fbc9c8e1000095
https://www.codewars.com/kata/57f22b0f1b5432ff09001cab
https://www.codewars.com/kata/5b6c220fa0a661fbf200005d
https://www.codewars.com/kata/55eeddff3f64c954c2000059
https://www.codewars.com/kata/558fc85d8fd1938afb000014
*/