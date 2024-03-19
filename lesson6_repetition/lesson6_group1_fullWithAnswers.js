let str = "JavaScript";
let letter = str[1]; // Код отримує другий символ рядка str за допомогою індексу 1 і зберігає його в змінній letter
console.log(letter);

let text = "Джаваскріпт - це весело";
let length = text.length;
console.log(length);//Цей код виведе довжину рядка text у консоль

var result = 0 / 0; //Вираз 0 / 0 є прикладом ділення на нуль, що в результаті дає нечисловий результат. У математиці ділення на нуль є невизначеним, тому в JavaScript таке ділення повертає спеціальне значення, що називається "NaN" (Not a Number)
console.log(nan)

var guessWho = 3.14;
guessWho = 'А тепер тут строка';
guessWho = false;
guessWho = 9.14;
console.log(guessWho) //Останнє присвоєння перезаписує попереднє значення. Отже, на момент виклику console.log(guessWho) змінна guessWho містить число 8.97, і це значення буде виведене у консоль.

const num = 42;
const str1 = "Shuba";
const result = num + str1;
console.log(result)//Якщо один із операндів є рядком, то інший операнд буде автоматично перетворений у рядок, і операція додавання буде виконана як конкатенація рядків

var result = "40" - 4;
console.log(result); //У JavaScript, якщо ви віднімаєте число від рядка, JavaScript спробує автоматично перетворити рядок у число. Тому вираз "40" - 4 буде розглядатися як віднімання чисел, а не конкатенація рядків

let n = 7;
n *= 9 + 1;
console.log(n);
//Спочатку обчислюється вираз 9 + 1, що дорівнює 10.
//Змінна n множиться на результат виразу 10.
//Результат помноження (70) присвоюється змінній n.

var a = 4;
var b = 3;
var c = a = b;
console.log(c) //Спочатку відбувається присвоєння b значення a (тобто a тепер дорівнює 3). Після цього вираження a = b має значення 3, і воно також присвоюється змінній c.

var number = 65;
number %= 2;
console.log(number);
/* Оператор %= в JavaScript використовується для отримання залишку від ділення числа на інше число і призначення результату змінній. У вашому випадку number %= 2; означає, що залишок від ділення числа number на 2 буде присвоєно змінній number.
Отже, для першого випадку, коли number = 80, результат виразу number %= 2; буде 0, оскільки 80 ділиться націло на 2.
Для другого випадку, коли number = 65, результат буде 1, оскільки 65 ділиться на 2 з залишком.
Таким чином, якщо ви виведете значення змінної number після кожного виразу, результат буде:
Для першого випадку: 0.
Для другого випадку: 1. */

console.log(17 !== '17'); 
/* Вираз !== - це строга нерівність в JavaScript, яка перевіряє значення операндів і їхні типи даних. Якщо значення або тип даних не однакові, вираз повертає true, інакше - false.
У вашому випадку один операнд має тип числа, а інший - тип рядка. Навіть якщо значення однакові, їхні типи відрізняються, тому вираз буде true. */

console.log((+null)); //У JavaScript вираз +null поверне числове значення 0, оскільки null у контексті числових операцій вважається нульовим числом.

let sex = 'male';
let birthday = 19;
let discount;
if (sex === 'male') {
    discount = (birthday >= 25) ? "30%" : "10%";
} else if (sex === 'female') {
    discount = (birthday === 19) ? "30%" : "10%";
} else {
    discount = (birthday === 7) ? "10%" : "5%";
}
console.log(discount)
/* Ви перевіряєте значення змінної sex, а потім застосовуєте тернарний оператор ? для визначення розміру знижки в залежності від значення birthday.

Якщо sex дорівнює 'male', то:

Якщо birthday більше або дорівнює 25, знижка становить "30%".
В іншому випадку знижка становить "10%".
Якщо sex дорівнює 'female', то:

Якщо birthday дорівнює 19, знижка становить "30%".
В іншому випадку знижка становить "10%".
Якщо значення sex не є або 'male', або 'female', то знижка буде:

Якщо birthday дорівнює 7, знижка становить "10%".
В іншому випадку знижка становить "5%".

Оскільки ви встановили значення sex як 'male' і birthday як 19, в результаті отримаєте "30%", оскільки ці умови задовольняються. */

let firstName = "";
let lastName = "Bulochka";
let nickName = "";
console.log(firstName || lastName || nickName || "Анонім"); //В даному виразі використовується оператор "або" (||), який поверне перше істинне значення

console.log(null || (2 && 3) || 4);
/* оператор "або" (||) поверне перше істинне значення з середини. Якщо всі значення є "брехнею" (нуль, пустий рядок, false тощо), то повернеться значення, що стоїть в кінці.

null є "брехнею", тому використовується наступний операнд.
(2 && 3) - оператор "і" (&&) поверне останнє значення, якщо обидва значення є істинними. У даному випадку 2 та 3 є істинними, тому використовується 3.
3 є істинним значенням, тому це значення повертається. */

// Яке буде останне значення?
var i = 0;
do {
    i += 3;
    console.log("i = " + i);
} while (i < 8);
/* У цьому коді do-while цикл буде виконуватися, допоки значення i буде менше 8.

Початкове значення i - 0.

Перша ітерація: i += 3, отже i стає 3.
Друга ітерація: i += 3, отже i стає 6.
Третя ітерація: i += 3, отже i стає 9. */

/* Завдання 1:

Вирахуйте значення площі кола на основі наданих значень.
Площа кола дорівню добутку квадрату радіуса на число Пі(3.1415)
Виведіть результат 

*/

var r = 15; // радіус
var Pi = 3.1415; // число Пі


//Відповідь
let S = Pi * r * r;
alert(S);


/* Завдання 2:

Виведіть на екран загальну вартість всіх продуктів, які є на складі

 */

let productPrice1 = 101.5; // ціна 1го продукту
let productPrice2 = 50.25; // ціна 2го продукту
let productPrice3 = 10.11; // ціна 3го продукту

let productQuantity1 = 5;  // кількість одениць 1го продукту на складі 
let productQuantity2 = 9;  // кількість одениць 2го продукту на складі 
let productQuantity3 = 15; // кількість одениць 3го продукту на складі 


// Відповідь

let totalPrice = productPrice1 * productQuantity1
    + productPrice2 * productQuantity2
    + productPrice3 * productQuantity3;


console.log(totalPrice);


/* Завдання 3:

Змініть switch на if...else. 

Поведінка сценарія, після зміни, повинно залишитись без змін (зверніть увагу на змінні USA и Great Britain). 

*/

var country = prompt("Введіть назву країни");

if (country == "USA" || country == "Great Britain") {
    alert("Англійська мова");
}
else if (country == "Germany") {
    alert("Німецька мова");
}
else if (country == "France") {
    alert("Французька мова");
}
else {
    alert("Вказаної країни немає в списку");
}

// Відповідь

switch (country) {
    case "USA":
    case "Great Britain":
        alert("Англійська мова");
        break;
    case "Germany":
        alert("Німецька мова");
        break;
    case "France":
        alert("Французька мова");
        break;

    default:
        alert("Вказаної країни немає в списку");
        break;

}

/* Завдання 4:

За допомогою цикла for виведіть всі числа котрі НЕ діляться на 6 між 0 и 100 

*/

// Відповідь
for (let i = 0; i < 100; i++) {
    if (i % 6 !== 0) // ділиться на 2 без останку
    {
        console.log(i);
    }
}

/* Завдання 5:

Створіть функцію max(a, b), яка повертає більшее число з чисел а и b без використання бібліотеки Math

*/

function max(a, b) {
    return a > b ? a : b;
}