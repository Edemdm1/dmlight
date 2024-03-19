// app.js

// 1. Чи мають рядки str1 та str2 однакову довжину. Перевірити на рівність (недбалу та строгу) рядки str1 та str2.

let str1 = 'I\'m a string!';
let str2 = "I'm a string!";

// Недбала перевірка рівності
if (str1 == str2) {
    console.log("Рядки str1 та str2 мають однакове значення.");
} else {
    console.log("Рядки str1 та str2 мають різне значення.");
}

// Строга перевірка рівності
if (str1 === str2) {
    console.log("Рядки str1 та str2 мають однакове значення та тип.");
} else {
    console.log("Рядки str1 та str2 мають різне значення або тип.");
}

// 2. Повернути перший символ рядка string5. Виконайте завдання, використовуючи індекс та метод charAt.

let string5 = 'Hello World';

let first_value = string5.charAt(0);
console.log(first_value);

let first = string5[0];
console.log(first); 

// 3. повернути символ J рядка str3:

// повернути символ J рядка:
let str3 = "Hello Javascript";

let symbolJ = str3[6];
console.log(symbolJ); // Виведе "J"

let value = "J";
let symbolIndex = str3.indexOf(value);
if (symbolIndex  !== -1){
    console.log(str3[symbolIndex]);
} else {
    console.log("Symbol is not found in the string")
}

// 4. Використовуючи індекс, отримати доступ до останнього символу рядка двома способами
let lasrChar1 = str3[str3.length - 1];
console.log(lasrChar1);

let lasrChar2 = str3.charAt(str3.length - 1);
console.log(lasrChar2);

let lastChar3 = str3.slice(-1);
console.log(lastChar3);

// 5. Напишіть три варіанти функції lastChar, що повертає останній символ рядка

function lastCharVar1 (str) {
    return str[str.length - 1];
}

function lastCharVar2 (str) {
    return str.charAt(str.length - 1);
}

function lastCharVar3 (str) {
    return str.slice(-1);
}

console.log(lastCharVar1(str3));
console.log(lastCharVar2(str3));
console.log(lastCharVar3(str3));

// 6. Використовуючи метод concat, вивести на консоль: When candles are out, all cats are grey

let a = 'When candles are out,';
let b = 'all cats are grey.';

let c = a.concat(" " + b);
console.log(c);

// 7. Використовуючи змінні a, b, fact, змінити значення fact та вивести його на консоль, щоб результат виглядав так: Fifteen is the same as 15

let fact = "Fifteen is the same as";
let a1 = 5;
let b1 = 10;

fact += ` ${a1 + b1}`;
console.log(fact);

// 8. Напишіть функцію getFullName, що повертає результат: "Tom Cat"

let firstName = "Tom";
let lastName = "Cat";

function getFullName(firstName, lastName) {
    let fullName = `${firstName + " " + lastName}`;
    return fullName;
}

console.log(getFullName(firstName, lastName));

// 9. Напишіть функцію greeting, що використовує виклик функції getFullName та повертає такий результат: Hello, Tom Cat!

function greeting(firstName, lastName) {
    let showValue = getFullName(firstName, lastName);
    return "Hello, " + showValue + "!";
}

console.log(greeting(firstName,lastName));

// 10. Використовуючи функцію greeting, створити такий шаблон:

function createGreetingTemplate(firstName, lastName){
    let message = greeting(firstName, lastName);
    let template = "<div><h1>" + message + "</div></h1>";
    return template;
}

console.log(createGreetingTemplate(firstName, lastName));

11. // Потрібно отримати такі результати
let string1 = "  The name of our game  ";

// "The name of our game"
console.log(string1.trim());

// "The name of our game  "
console.log(string1.trimStart());

// "  The name of our game"
console.log(string1.trimEnd());

const phoneNumber = '\t  555-123\n ';
// Потрібно отримати такі результати

// => '555-123'
console.log(phoneNumber.trim());

// => '555-123 \n'
console.log(phoneNumber.trimStart());


// 12. Маємо наступний код:
let sentence = 'Always look on the bright side of life';

// Перевірити, чи містить рядок значення 'look up'
console.log(sentence.includes('look up'));

// Перевірити, чи містить рядок значення 'look on'
console.log(sentence.includes('look on'));

// Перевірити, чи містить рядок значення 'look on'Б починаючи з 8-ї позиції
console.log(sentence.includes('look un', 8));


// 13. Маємо наступний код
let sentence1 = 'Always look on the bright side of life';

// Знайти індекс символу 'l'
console.log(sentence1.indexOf('l'));

// Знайти індекс символу 'l', починаючи з 3-ї позиції
console.log(sentence1.indexOf('l', 3));

// Знайти індекс символу 'L'
console.log(sentence1.indexOf('L'));


// 14. Маємо наступний код:
let sentence2 = 'Always look on the bright side of life';

// Отримати підрядок 'look on the bright side of life'
console.log(sentence2.substring(7));

// Отримати підрядок 'Always'
console.log(sentence2.substring(0, 7));

// Отримати підрядок 'look'
console.log(sentence2.substring(7, 11));


// 15. Створити регулярний вираз, який призначений для перевірки імені користувача, що може містити цифри, літери у нижньому регістрі та символи - і _. Довжину імені користувача встановити від 8 до 16 знаків.

function validateName(userName) {
    const pattern = /^[a-z0-9_-]{8,16}$/i;

    let matched = userName.match(pattern);
    if (pattern.test(userName)) {
        console.log("Username is correct", matched);
        return true;
    } else {
        console.log("Username is not correct", matched);
        return false;
    }
}


console.log(validateName("Jonny123"));
console.log(validateName("+Jonny123"));


// 16. Створити регулярний вираз, який призначений для перевірки email на коректність.

function validateEmail(email) {
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    let matched = email.match(pattern);
    if (pattern.test(email)) {
        console.log("Email is correct", matched);
        return true;
    } else {
        console.log("Email is not correct", matched);
        return false;
    }
}


console.log(validateEmail("Jonny123@gmail.com"));
console.log(validateEmail("Jonny123@@mail.com"));



// 17. Маємо наступний код:
let sentence3 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in sapien eu velit eleifend ullamcorper eget vitae nulla. Aenean euismod purus sed neque dictum, nec lobortis ante faucibus.';

// Напишіть функцію truncateText скорочення тексту до 50 символів, використовуючи метод substring
function truncateText(string){
    text = string.substring(0, 50);
    return text;
}

console.log(truncateText(sentence3));
console.log(truncateText(sentence3).length);

// Напишіть функцію truncateText скорочення тексту до 50 символів, використовуючи метод substr
function truncateText(string){
    text = string.substr(0, 50);
    return text;
}

console.log(truncateText(sentence3));
console.log(truncateText(sentence3).length);