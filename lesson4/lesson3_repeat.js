/* Questions 0

- Як працює цикл while?
















- Як працює цикл do…while?









- Як працює цикл for?



- За допомогою якого символу відокремлюються одна від одної частини циклу for, що знаходяться в дужках?  
1) && 
2) ; 
3) . 





- Що робить ключове слово break?






- Що робить ключове слово continue?






Якщо _______ завжди залишатиметься істинним, то код може застрягти в нескінченному _______.
1) умова/циклі
2) цикл/умови
 */




// Question 1. Яке останнє значення буде виведено на екран? Чому?
let i = 7;

while (i) {
  console.log(i--);
}

console.log("i = " + i);

// Question 2. Яке значення виведе цикл "while"?

let w = 0;
while (++w < 5) {
  console.log(w);
}


let q = 0;
while (q++ < 5) {
  console.log(q);
}

// Змінна i ініціалізується зі значенням 0.
// Умова i++ < 5 повертає true, оскільки i дорівнює 0, і після цього змінна i збільшується на 1.
// Виконується тіло циклу, і в консоль виводиться значення змінної i, яке дорівнює 1.
// Умова i++ < 5 повертає true, оскільки i дорівнює 1, і після цього змінна i збільшується на 1.
// Виконується тіло циклу, і в консоль виводиться значення змінної i, яке дорівнює 2.
// Умова i++ < 5 повертає true, оскільки i дорівнює 2, і після цього змінна i збільшується на 1.
// Виконується тіло циклу, і в консоль виводиться значення змінної i, яке дорівнює 3.
// Умова i++ < 5 повертає true, оскільки i дорівнює 3, і після цього змінна i збільшується на 1.
// Виконується тіло циклу, і в консоль виводиться значення змінної i, яке дорівнює 4.
// Умова i++ < 5 повертає true, оскільки i дорівнює 4, і після цього змінна i збільшується на 1.
// Виконується тіло циклу, і в консоль виводиться значення змінної i, яке дорівнює 5.
// Умова i++ < 5 повертає false, оскільки i дорівнює 5, і цикл завершується.

// Question 3. Чи потрібен "else"?
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return console.log('Батьки дозволили?');
  }
}
checkAge(10);

function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return console.log('Батьки дозволили?');
}
checkAge(10);





// Question 4. Цей цикл безкінечний. Він ніколи не закінчується. Чому?

let j = 0;
while (j != 10) {
  j += 0.2;
}



// Question 5. Що буде виведено у консоль?

for (let i = 1; i < 5; i++){
  if (i === 3) continue;
  console.log(i);
}


// Question 6. Що буде виведено у консоль?

var a = 10;
do{
  a += 1; // a = a + 1
  console.log(a);
} while (a < 5)

// Question 7. Що буде виведено у консоль?

let a = 10
if (a) {
  let a = 3;
  a *= a; // a = a * а
}
console.log(a);

// Question 8. Що буде виведено у консоль?

function sum (num1, num2 = num1){
  console.log(num1 + num2);
}
sum(10);
sum(10, 5);

//------------------------------------------

// Які є в нас типи даних? Як вони називаються?