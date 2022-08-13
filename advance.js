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
  orderPasta: function (ing1, ing2, ing3) {
    return `here is your pasta with ${ing1},${ing2} and ${ing3}`;
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

const arr = [1, 2, 3, 4, 5];
const [a, b, ...others] = arr;
console.log(a, b, others);