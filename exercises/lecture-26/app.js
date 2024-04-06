// Exercise_1:
// Функція calculate() приймає масив чисел як аргумент і повертає суму:

// function calculate(numbers) {
//  let sum = 0;
//  for (const number of numbers) {
//    sum = sum + number;
//  }
//  return sum;
// }
// calculate([1, 2, 4]); // => 7

// // sum() - це функція, яка описує операцію додавання. 
// function sum(n1, n2) {
//    return n1 + n2;
// }

// // multiply() - це функція, яка описує операцію множення.

// function multiply(n1, n2) {
//    return n1 * n2;
// }

// Зробити calculate() функцією вищого порядку, змусивши її підтримувати операцію додавання над масивом чисел та операцію множення над масивом чисел

// calculate(operation, initialValue, numbers) приймає перший аргумент - функцію, яка описує операцію, другий аргумент - початкове значення, третій аргумент - масив чисел.

// calculate(sum, 0, [1, 2, 4]); // => 7 calculate(multiply, 1, [1, 2, 4]); // => 8

function calculate(operation, initialValue, numbers) {
    return numbers.reduce(operation, initialValue);
  }
  
  // Функція додавання
  function sum(n1, n2) {
    return n1 + n2;
  }
  
  // Функція множення
  function multiply(n1, n2) {
    return n1 * n2;
  }
  
  // Використання функції calculate
  console.log(calculate(sum, 0, [1, 2, 4])); // => 7
  console.log(calculate(multiply, 1, [1, 2, 4])); // => 8
  
  
// Exercise_2:
// Маємо масив student_names
let student_names = ["Wick", "Malcolm", "Smith"]
// Застосувати до масиву student_names метод map, щоб отримати на консолі результат у такому вигляді:

// name: Wick | index: 0 | array: [ "Wick", "Malcolm", "Smith" ] name: Malcolm | index: 1 | array: [ "Wick", "Malcolm", "Smith" ] name: Smith | index: 2 | array: [ "Wick", "Malcolm", "Smith" ]

student_names.map((name, index, array) => {
  console.log(`name: ${name} | index: ${index} | array: [ ${array.join(", ")} ]`);
});


// Exercise_3:
// Маємо масив об'єктів students_information, що представляє результати іспитів кожного студента у полі degree:

let students_information = [
    {"name": "Wick", "degree": 375}, 
    {"name": "Malcolm", "degree": 405}, 
    {"name": "Smith", "degree": 453},
];

let maxDegree = 600; // максимальна оцінка

let results = students_information.map(student => {
  let percentage = (student.degree / maxDegree) * 100;
  return {
    name: student.name,
    degree: student.degree,
    percentage: percentage
  };
});

results.forEach(result => {
  console.log(result);
});


// Exercise_4:
// Маємо масив :
// [1, 2, 3, [10, 11, 12], 21, 22, 23, [31, 32, 33, 34], [41, 42]];
// // Використовуючи метод reduce, звести масив до одномірного

// [ 1, 2, 3, 10, 11, 12, 21, 22, 23, 31, 32, 33, 34, 41, 42 ] 

let nestedArray = [1, 2, 3, [10, 11, 12], 21, 22, 23, [31, 32, 33, 34], [41, 42]];

// function flattenArray(arr) {
//   return arr.reduce((acc, currentValue) => {
//     if (Array.isArray(currentValue)) {
//       return acc.concat(flattenArray(currentValue));
//     } else {
//       return acc.concat(currentValue);
//     }
//   }, []);
// }

// Спрощений варіант:
function flattenArray(arr) {
  return arr.reduce((acc, currentValue) => {
    return acc.concat(currentValue);
  }, []);
}

let flattenedArray = flattenArray(nestedArray);
console.log(flattenedArray);


// Exercise_5:
// Створити конструктор прототипу масиву upperCase(), що перетворює символи рядка у символи верхнього регістру:
// Оголошення конструктора

Array.prototype.upperCase = function() {
    for (let i = 0; i < this.length; i++) {
        if (typeof this[i] === 'string') {
            this[i] = this[i].toUpperCase();
        }
    }
};

function myFunc() {
    let arr = ["Algorithm", "Data Structure", "Operating System", "html"];
    arr.upperCase();
    console.log(arr);
}

myFunc(); // Виведе: [ 'ALGORITHM', 'DATA STRUCTURE', 'OPERATING SYSTEM', 'HTML' ]
