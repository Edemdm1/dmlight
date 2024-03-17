// 1. Створити об'єкт person, що має властивості name з типом рядка та age з типом цілого числа. Надати значення цим властивостям. Вивести значення властивостей об'єкту на консоль

let person = {
    name: "Luis",
    age: 25,

};

console.log(person);
console.log(`Person name: ${person.name}`);
console.log(`Person age: ${person.age}`);


// 2. Змінити тип властивості name з рядка на об'єкт, з ключами firstName та lastName. Надати значення цим властивостям. Вивести значення властивостей об'єкту на консоль.

person = {
    name: {
           firstName: "Luis",
           lastName: "Collins",
        },
    age: 25,

};

console.dir(person);
console.dir(`Person first name: ${person.name.firstName}`);
console.dir(`Person last name: ${person.name.lastName}`);
console.dir(`Person age: ${person.age}`);


// 3. Створити метод об'єкту bio(), що виводить на консоль ім'я, прізвище та вік person.

person = {
    name: {
           firstName: "Luis",
           lastName: "Collins",
        },
    age: 25,
    bio: function() {
        console.log(`Person fullname: ${this.name.firstName} ${this.name.lastName}`);
        console.log(`Person age: ${this.age}`);
    },

};

person.bio();


// 4. Створити метод об'єкту introduceSelf, що виводить на консоль Hi! I'm firstName.

person = {
    name: {
           firstName: "Luis",
           lastName: "Collins",
        },
    age: 25,
    bio: function() {
        console.log(`Person fullname: ${this.name.firstName} ${this.name.lastName}`);
        console.log(`Person age: ${this.age}`);
    },
    introduceSelf: function() {
        console.log(`Hi! I'm ${this.name.firstName} `);
    },

};

person.introduceSelf();


// 5. Створити функцію-шаблон createPerson, що приймає аргумент name та повертає новий об'єкт з властивістю name та методом introduceSelf. Створити за допомогою createPerson 2 екземпляри об'єкта.

function createPerson(name) {
    return {
        introduceSelf: function() {
            console.log(`Hi! I'm ${name}`);
        },
    };
}

let personFirst = createPerson("Josh");
let personSecond = createPerson("Ann");

personFirst.introduceSelf();
personSecond.introduceSelf();


// 6. Створити функцію-конструктор Person, що приймає аргумент name та повертає новий об'єкт з властивістю name та методом introduceSelf. Створити за допомогою Person 2 екземпляри об'єкта mary та tom.

function Person(name){ 
    this.name = name;
    this.introduceSelf = function() {
        console.log(`Hi! I'm ${this.name}`);
    }
    
}

let mary = new Person("Mary");
let tom = new Person("Tom");

mary.introduceSelf();
tom.introduceSelf();

// Перевірка чи містить об'єкт mary властивість prop
console.log("Властивість prop в об'єкті mary:", mary.hasOwnProperty("prop"));


// 7.  Створіть об'єкт DirtyMartini, що має 2 методи english_please() та excuse_my_french() При виклику методу excuse_my_french(), на консоль виводиться:

function DirtyMartini() {
    this.english_please = function() {
        console.log("ingredients:");
        console.log("  6 fluid ounces gin");
        console.log("  1 dash dry vermouth (0.0351951ml)");
        console.log("  1 fluid ounce brine from olive jar");
        console.log("  4 stuffed green olives");
    };

    this.excuse_my_french = function() {
        console.log("ingrédients:");
        console.log("  170.4786 ml de gin");
        console.log("  1 trait de vermouth sec (0.0351951ml)");
        console.log("  28.4131 ml de saumure du pot d'olive");
        console.log("  4 olives vertes farcies");
    };
}

const dirtyMartini = new DirtyMartini();

// При виклику методу english_please(), на консоль виводиться:

//       ingredients:
//         6 fluid ounces gin
//         1 dash dry vermouth (0.0351951ml) 
//         1 fluid ounce brine from olive jar
//         4 stuffed green olives
dirtyMartini.english_please();


// При виклику методу excuse_my_french(), на консоль виводиться:

//       ingrédients:  
//         170.4786 ml de gin
//         1 trait de vermouth sec (0.0351951ml) 
//         28.4131 ml de saumure du pot d'olive
//         4 olives vertes farcies

dirtyMartini.excuse_my_french();
