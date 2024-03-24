// 1. Перетворити рядок fruits у масив. Результат зберегти у масиві fruits.
let fruits = 'apple banana cantaloupe blueberries grapefruit';
fruits = fruits.split(' ');


// 2. Використовуючи цикл for, вивести на консоль список елементів з масиву fruits.
for (i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}


// 3. Використовуючи цикл while, вивести на консоль список елементів з масиву fruits.
let w = 0;
while (w < fruits.length) {
    console.log(fruits[w]);
    w++;
}


// 4. Використовуючи цикл do...while, вивести на консоль список елементів з масиву fruits.
let d = 0;
do {
    console.log(fruits[d]);
    d ++;
} while (d < fruits.length);


// 5. Використовуючи цикл for...of, вивести на консоль список елементів з масиву fruits.
for (const fruit of fruits) {
    console.log(fruit);
}


// 6. Використовуючи цикл for, вивести на консоль парні елементи з масиву Numbs.
const Numbs = [1,2,3,4,5,6,7,8,9,10];

for (i = 0; i < Numbs.length; i++) {
    if (Numbs[i] % 2 === 0) {
        console.log(Numbs[i]);
        i++;
    }
}

// 7. Додати 'Joker' в кінець масиву names:
{
    const names = ['Batman'];
    names.push('Joker');
    console.log(names);
}


// 8. Додати 'Joker' на початок масиву names
{
    const names = ['Batman'];
    names.unshift('Joker');
    console.log(names);
}


// 9. Додати 'Catwoman' на початок масиву names, використовуючи метод unshift
{
    names = ['Batman', 'Joker', 'Bane'];
    names.unshift('Catwoman');
    console.log(names);
}


// 10. Додати 'Catwoman' на початок масиву names, використовуючи оператор ...
{
    let names = ['Batman', 'Joker', 'Bane'];
    names = ['Catwoman', ...names];
    console.log(names);
}


// 11. Додати до names елемент 'Catwoman', розмістивши його з індексом 1
{
    let names = ['Batman', 'Joker', 'Bane'];
    names.splice(1, 0, 'Catwoman');
    console.log(names);
}


// 12. Видалити елементи 'Catwoman' і 'Joker' з масиву names:
{
    const names = ['Batman', 'Catwoman', 'Joker', 'Bane'];

    const catwomanIndex = names.indexOf('Catwoman');
    
    if (catwomanIndex !== -1) {
        names.splice(catwomanIndex, 1);
    }

    const jokerIndex = names.indexOf('Joker');

    if (jokerIndex !== -1) {
        names.splice(jokerIndex, 1)
    }

    console.log(names);
}


// 13. Замінити елементи 'Catwoman' і 'Joker' на 'Alfred' у масиві names

{
    const names = ['Batman', 'Catwoman', 'Joker', 'Bane'];

    const catwomanIndex = names.indexOf('Catwoman');
    
    if (catwomanIndex !== -1) {
        names[catwomanIndex] = 'Alfred';
    }

    const jokerIndex = names.indexOf('Joker');

    if (jokerIndex !== -1) {
        names[jokerIndex] = 'Alfred';
    }

    console.log(names);
}

// 14. Перевірити чи існує рядок 'Alfred' у масиві names, і якщо не існує, додати його до кінця масиву.

{
    const names = ['Batman', 'Catwoman', 'Joker', 'Bane'];

    if (!names.includes('Alfred')) {
        names.push('Alfred');
    }

    console.log(names);
}


// 15. Перевірити, чи існує рядок 'Alfred' у масиві names, і якщо існує, видалити його з масиву.

{
    const names = ['Batman', 'Catwoman', 'Joker', 'Bane'];

    if (names.includes('Alfred')) {
        const alfredIndex = names.indexOf('Alfred');
        names.splice(alfredIndex, 1);
    }

    console.log(names);

}