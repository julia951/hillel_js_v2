/* Task - 1

    Створіть масив (array1) з 5 любих елементів
    Створіть функцію, яка буде повертати другий елемент з масиву
    
*/

/* Task - 2

    Створіть функцію, який додасть 1 елемент до масиву з попередньої задачи (array1) (наприклад, "new item")

*/

/* Task - 5 

    Створіть функцію , яка отримує масив об'єктів
    наприклад, [{name: "John Snow", age: 45}, {name: "Cersei Lannister", age: 32}, {name: "Daenerys Targaryen", age: 18}, {name: "Jorah Mormont", age: 28}]]
    і повертає кількість людей, чиє ім'я "John" або вік менший за 30 не використовуйте цикли

*/

/* Task - 6 

    Створити функцію для знаходження індексу мінімального елементу масиву, а також виведе суму всіх елементів массиву.

*/

var values = [10, 20, 4, 6, 11, 9, 125, -1, 8, 0, 3];
var max = Number.MIN_VALUE;
var min = Number.MAX_VALUE;
var sum = 0;

for (let index = 0; index < values.length; index++) {
    const element = values[index];
    if (element > max) {
        max = element;
    }
    if (element < min) {
        min = element;
    }

    sum += element;
}

console.log("Максимальне значення массиву - " + max);
console.log("Минимальное значення массиву - " + min);
console.log("Сума всіх елементів - " + sum);

/* Task - 7 

   Створити функцію, яка поверне кількість допустимих (НЕ not null/undefined) значень масиву

*/

/* Task - 8 

   Створити функцію, яка відфільтрує нульові та невизначені значення
   якщо кількість невірних записів більше 3 - потрібно згенерувати помилку "Дані потрібно переглянути"

*/

/* Task - 9 

   Створити функцію, яка   знайде в массиві всі від'ємні значення та замінить їх на значення 0.
   
   Після цього виведіть всі значення массиву.

*/

let values = [10, 20, -2, 6, 11, -10, 125, -3, 8, 0, 3];

for (let i = 0; i < values.length; i++) {
    if (values[i] < 0) {
        values[i] = 0;
    }
}

for (let value of values) {
    console.log(value);
}

/* Task - 10 

Дано массив. Створіть на основі значень цього массиву два нових массиви. В один массив помістіть всі парні значення, а у
другий всі непарні.
Виведіть на екран значення, які війшли в перший массив та у другий массив.

*/

let values = [10, 20, 5, 7, 11, 8, 125, 4, 8, 3, 23];
let oddValues = [];
let evenValues = [];
let oddValuesPosition = 0;
let evenValuesPosition = 0;

for (let value of values) {
    if (value % 2 == 0) {
        evenValues[evenValuesPosition] = value;
        evenValuesPosition++;
    }
    else {
        oddValues[oddValuesPosition] = value;
        oddValuesPosition++;
    }
}

console.log("Непарне значення");
for (let oddVal of oddValues) {
    console.log(oddVal);
}

console.log("Парне значення");
for (let evenVal of evenValues) {
    console.log(evenVal);
}

/* Task - 11

Знайдіть перший позитивний елемент массива та виведіть його на екран.
*/

let values = [-1, -5, -6, -3, -10, -5, 3, 4, -1, -8, 1, -10, 3];
for (let i = 0; i < values.length; i++) {
    if (values[i] > 0) {
        alert(`Значення ${values[i]} по індексу ${i} - перше позитивне значення у массиві`);
        break; // немає сенсу продовжувати цикл, так як значення знайдене
    }
}

/* Task - 12

  Дано массив. Знайдіть середнє арифметичне значення цього массиву.
        Виведіть на екран тільки ті значення, які більше цього цього середнього арифметичного значення.
        
        */

let values = [10, 20, 48, 6, 11, 9, 125, 1, 8, 0, 3, 255, 77, 11, 170, 4, 28];

// сума всіх елементів
let sum = 0;
for (const value of values) {
    sum += value;
}

// среднє арифметичне
let avg = sum / values.length;
console.log("avg = " + avg);

for (const value of values) {
    if (value > avg) {
        console.log(value);
    }
}

//-------------------------------------------------------------------------------------------------------
/* Task - 6 

    Створіть функцію , яка отримує масив об'єктів
    наприклад, [{name: "John Snow", age: 45}, {name: "Cersei Lannister", age: 32}, {name: "Daenerys Targaryen", age: 18}, {name: "Jorah Mormont", age: 28}]]
    і повертає новий масив усіх людей, старших за 30 років
*/


/* Task - 7 

    Створіть функцію, яка буде приймати масив об'єктів
    наприклад, [{ім'я: "Jane", вік: 45}, {ім'я: "Peter", вік: 18}].
    та поверне новий масив об'єктів, що містить додаткову властивість "state"
    state = "baby", якщо вік дорівнює 0 або 3,
    state = "preschooler", якщо вік від 4 до 5,
    state = "teenager", якщо вік від 13 до 18 років

 https://www.w3schools.com/jsref/jsref_map.asp
*/

/* Task - 12

        Дано массив. Переставте елемент з максимальним значенням місцями з елементом з мінімальним значенням.
*/
var values = [10, 125, 4, 6, 11, 9, 20, 1, 8, 0, 3];

var max = Number.MIN_VALUE;
var min = Number.MAX_VALUE;

let maxElementIndex, minElementIndex;

for (let index = 0; index < values.length; index++) {
    const element = values[index];
    if (element > max) {
        max = element;
        maxElementIndex = index; // зберігаємо індекс максимального значення
    }
    if (element < min) {
        min = element;
        minElementIndex = index; // зберігаємо індекс мінімального значення
    }
}

// змінюємо значення місйями, використовуючи індекс, який зберегли раніше
values[maxElementIndex] = min;
values[minElementIndex] = max;

for (const value of values) {
    console.log(value);
}

/* Task - 13

        Дано массив. Переставте елемент з максимальним значенням місцями з елементом з мінімальним значенням.
*/

let values = [10, 20, 4, 6, 11, 9, 125, 10, 8, 0, 3, 5, 89, 12, 46, 77, 3];

for (let i = 0; i < values.length - 1; i++) {

    const current = values[i];

    // k = i - так як нам непотрібно перевіряти попередні значення, тоді вкладений цикл перевіряє поточне значення current з наступним
    // Останній елемент вже порівнювати не треба, так як предостанній елемент буде перевірено на рівність з останнім.
    // Тому перший цикл на 16 рядку запускається на одну ітерацію меньше, чим розмір массиву.
    for (let k = i + 1; k < values.length; k++) {
        const element = values[k];

        if (current == element) {
            console.log(`Значення ${current} повторюється`);
            break;
        }
    }
}

/* Task - 13

Дано массив. Переставте елемент з максимальним значенням місцями з елементом з мінімальним значенням.
*/