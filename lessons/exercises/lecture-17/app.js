

console.log(typeof(3), typeof("3"), 3 === '3');

// &&

console.log((3 === '3') && false); // false;

console.log((3 == '3') && true); // true;

console.log((3 === '3') || false); // false;

console.log((3 === '3') || true); // true;

// falsy false 0 "" null undefined NaN
console.log(Boolean(false)); // false;
console.log(Boolean(" ")); // false;
console.log(Boolean(0)); // false;

// ! bang

console.log(Boolen(!0));
{name: 'Hello'}

console.log(Boolen({name: 'Hello'})); // true;
console.log(Boolen({name: 'Hello'} == null));

console.log(Boolen(!{name: 'Hello'} == null)); // false;

let test = 0;
console.log(Boolean(!test)); // true

if (!test) {
    console.log("User text 0 value");
}

console.log(typeof(test));

if (test) {
    console.log("User text 0 value");
}

// || && !

// 2 + 2

// let num = prompt("Type number: ");

// if (!isNaN(numb)) {
//     alert(+numb + +numb);
// } else {
//     alert('Type number pease')
// }


// let a = prompt("Type a: ");
// let b = prompt("Type b: ");
// let o = prompt("Type operation: ");

// if (!isNaN(a)) && !isNaN(b) {
//     if (o == '+') {
//         alert(+a + +b);
//     } else if (o == '-') {
//         alert(+a - +b);
//     } else if (o == '*') {
//         alert(+a * +b);
//     } else {
//         alert('Bet operation');
//     }
// } else {
//     alert('Type number pease');
// }

// switch (o) {
//     case '+': 
//         alert(+a + +b);
//         break;
//     case '-': 
//         alert(+a - +b);
//         break;
//     case '*': 
//         alert(+a * +b);
//         break;
//     default:
//         alert('Hello user')
// }


const wealth = houseOwend > 3 ? "rich" 
                                : housesOwned > 1 ? "nothing to comlain"    
                                : 'poor';

console.log(wealth);

let x = 0 ?? "hello";
console.log(x)

x = null ?? "hello";
console.log(x)

x = undefined ?? "hello";
console.log(x)

x = false ?? "hello";
console.log(x)