"use strict";
//primitive type vs refference type
// string.       || objects
// number.       || functions
// bigint.       || collections
// boolean.      || arrays
// undefined.    || dates
// symbol.       ||
// null.         ||

// let age = 24;
// let oldAge = age;
// age = 25;
// console.log(age);
// console.log(oldAge);

// const me = {
//   name: "shofol",
//   age: 24,
// };
// const he = me;
// he.age = 28;

// const me2 = {
//   name: "shofol",
//   age: 24,
// };
// me2Copy = Object.assign({}, me2);
// me2Copy.age = 28;
// console.log(me2);
// console.log(me2Copy);

//distructuring array

// const arr = [1, 2, 3];

// const [x, y, z] = arr;
// console.log(x);

const restaurent = {
  name: "classicco italian",
  location: "via angelo tavanti 23",
  categories: ["Italian", "Bruschetta", "Garlic", "Bread"],
  mainMenu: ["pizza", "pasta", "risotto"],
  starterMenu: ["burger", "chicken roll", "biriyani"],
  order: function (mainIndex, starterIndex) {
    return [this.mainMenu[mainIndex], this.starterMenu[starterIndex]];
  },
  openingHour: {
    sat: {
      open: 10,
      close: 20,
    },
    fri: {
      open: 11,
      close: 20,
    },
    mon: {
      open: 0,
      close: 24,
    },
  },
  // orderPasta: function (ing1, ing2, ing3) {
  //   return `here is your pasta with ${ing1},${ing2} and ${ing3}`;
  // },

  // es5 enhanced object literal
  orderPasta(ing1, ing2, ing3) {
    return `here is your pasta with ${ing1},${ing2} and ${ing3}`;
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient, otherIngredients);
  },
};
// let [first, , second] = restaurent.categories;
// console.log(first, second);
// [first, second] = [second, first];
// console.log(first, second);

// from a function

// const [main, starter] = restaurent.order(0, 2);
// console.log(main, starter);

// nested array distructuring

// const arr = [1, 3, [3, 4]];
// const [i, , [j, k]] = arr;
// console.log(i, j, k);

//default value of array

// const [p = 1, q = 1, r = 1] = [4, 5];
// console.log(p, q, r);

// object distructuring
// const { main = [], starterMenu: starters = [] } = restaurent;
// console.log(main, starters);
// const { openingHour } = restaurent;
// const {
//   fri: { open, close },
// } = openingHour;
// console.log(open, close);

//spreed operator

// const str = "shofol";
// const letter = [...str];
// console.log(letter);

// const ingredient = [
//   prompt("let's put ingredient 1?"),
//   prompt("put ingredient 2?"),
//   prompt("put ingredient 3?"),
// ];
// console.log(restaurent.orderPasta(...ingredient));

// const restaurentCopy = { foundedIn: 1998, ...restaurent, founder: "shofol" };
// console.log(restaurentCopy);

// restaurentCopy.name = "shanto";
// console.log(restaurentCopy);

// const arr = [1, 2, 3, 4, 5];
// const [a, b, ...others] = arr;
// console.log(a, b, others);
// const [pizza, , risotto, ...others] = [
//   ...restaurent.mainMenu,
//   ...restaurent.starterMenu,
// ];
// console.log(pizza, risotto, others);

// const { fri, ...weekday } = restaurent.openingHour;
// console.log(fri, weekday);

//spreed arguments oppsite of spreed operators

// const add = (...numbers) => {
//   let sum = 0;
//   for (i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };

// add(2, 3);
// add(2, 3, 5);
// add(2, 3, 5, 6);

// restaurent.orderPizza("mashroom", "onion", "potato", "chicken");

// const person1 = {
//   name: "shofol",
//   guestNum: 0,
// };

// const person2 = {
//   name: "shanto",
//   owner: "Koli",
// };

// person1.guestNum = person1.guestNum ?? 10;
// person2.guestNum && "<Anonymouse>";
// console.log(person2);

// for ([i, el] of restaurent.starterMenu.entries()) {
//   console.log(`${i + 1}:${el}`);
// }

//object length

// const openingHour = {
//   fri: {
//     open: 11,
//     close: 24,
//   },
//   sat: {
//     open: 12,
//     close: 24,
//   },
//   sun: {
//     open: 11,
//     close: 24,
//   },
// };
// for (const days of Object.keys(openingHour)) {
//   console.log(days.length);
// }
// const values = Object.values(openingHour);
// console.log(values);

//convert object into array
// const entries = Object.entries(openingHour);
// console.log(entries);
// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open ${open} and close ${close}`);
// }

const menu = ["pizza", "pizza", "chicken", "wings", "wings"];

const menuSet = new Set(menu);
console.log(menuSet);
menuSet.add("dim");
console.log(menuSet);
menuSet.delete("dim");
console.log(menuSet);
