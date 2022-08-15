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

// set
// const menu = ["pizza", "pizza", "chicken", "wings", "wings"];

// const menuSet = new Set(menu);
// console.log(menuSet);
// menuSet.add("dim");
// console.log(menuSet);
// menuSet.delete("dim");
// console.log(menuSet);

//map

// const rest = new Map();
// rest.set("name", "shofol");
// rest.set(1, "age");
// console.log(rest.get("name"));

// const question = new Map([
//   ["question", "which laguage is more powerfull?"],
//   [1, "HTML"],
//   [2, "CSS"],
//   [3, "JS"],
//   ["correct", 3],
//   [true, "correct"],
//   [false, "try again"],
// ]);

// console.log(question.get("question"));
// for (const [key, value] of question) {
//   if (typeof key === "number") console.log(`Answer ${key} : ${value}`);
// }

// const answer = Number(prompt("your answer"));

// console.log(question.get(question.get("correct") === answer));

const airline = "novo airline BD";
const country = " Bangladesh is a.  \n";
// console.log(airline.indexOf("air"));
// console.log(airline.indexOf(" "));
// console.log(airline.slice(0, airline.indexOf("airline")));
// console.log(airline.slice(airline.lastIndexOf(" ") + 1));
// console.log(airline.slice(1, -1));
// console.log(airline.slice(0, airline.indexOf(" ")));

// console.log(new String("shofol"));
// console.log(country.length);
// const trim = country.trim();
// console.log(trim.length);

//replace
// const priceBD = "2,300tk";
// const priceUS = priceBD.replace("tk", "$");
// console.log(priceUS);

//replace any word
const annoucement =
  "All the students of IUBT please come in front of IUBT gate";
console.log(annoucement.replace(/IUBT/g, "IUBAT")); //regular expression
console.log(annoucement.replaceAll("IUBT", "IUBAT"));

//boolean string methods

// console.log(airline.includes("BD"));
// console.log(airline.startsWith("no"));
// console.log(airline.startsWith("noc"));
// console.log(airline.endsWith("BD"));

// function checkBeggage(items) {
//   const baggage = items.toLowerCase();

//   if (baggage.includes("knife") || baggage.includes("gun")) {
//     console.log("you are not allowed to abroad");
//   } else {
//     console.log("welcome to abroad");
//   }
// }

// checkBeggage("I have clothes,medicine,knife");
// checkBeggage("I have clothes,medicine");
// checkBeggage("I have laptop,mobile,gun");

// const myName = "i am shofol";
// console.log(myName.split(" "));
// const [firstName, lastName] = "Ashikul Shofol".split(" ");
// console.log(firstName);
// console.log(lastName);
// const fullName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
// console.log(fullName);

//capitalize name

// function capitalize(name) {
//   const names = name.split(" ");
//   const nameCapitalized = [];
//   for (let n of names) {
//     // nameCapitalized.push(n[0].toUpperCase() + n.slice(1));

//     nameCapitalized.push(n.replace(n[0], n[0].toUpperCase()));
//   }
//   console.log(nameCapitalized.join(" "));
// }

// capitalize("md ashikul hossain");
// capitalize("amir Sohel");

//padStart()
// console.log("shofol".padStart(24, "."));
// console.log("shofol".padEnd(24, "."));

//credit card

// function makeCreditCard(number) {
//   const str = number + " ";
//   const last = str.slice(-5);
//   console.log(last.padStart(str.length, "*"));
// }

// makeCreditCard(46448488484484423);
// makeCreditCard(46448488484484865);

//repeat

// const message = "Bad weather .... all Departures Delayed..";
// console.log(message.repeat(5));

// const planeInLine = (n) => {
//   console.log(`There are ${n} planes in line ${"🛩".repeat(n)}`);
// };
// planeInLine(5);
// planeInLine(10);
// planeInLine(3);

const flights =
  "_Delayed_Departure;fao92344293;txl21335345334;11:25+_Arrival;bru0454405433;fao93766456;11:45+_Delayed_Arrival;jel7543433345;fao934499399;12:05+_Departure;fao94559390;lis23234556445;12:40";

//convert flights as like as below

// 🎈 Delayed Departure FAO TXL (11h25)
//              Arrival BRU FAO (11:45)
// 🎈 Delayed Departure JEL FAO (12h05)
//            Departure FAO LIS (11:45)

// const rows = flights.split("+");
// for (const row of rows) {
//   const [type, from, to, time] = row.split(";");
//   console.log(
//     `${type.startsWith("_Delayed") ? "🎈" : " "}${type.replaceAll(
//       "_",
//       " "
//     )} ${from.slice(0, 3).toUpperCase()} ${to
//       .slice(0, 3)
//       .toUpperCase()} (${time.replace(":", "h")})`.padStart(36)
//   );
// }

//passing by value and ref

// const flight = "NOBO AIR 102";
// const person = {
//   name: "Ashikul Hossain",
//   passport: 232356577867,
// };

// function checkin(flightNum, passenger) {
//   flightNum = "US Bangla 111";
//   passenger.name = "MR." + passenger.name;
//   if (passenger.passport === 232356577867) {
//     alert("check in");
//   } else {
//     alert("wrong passport");
//   }
// }
// checkin(flight, person);
// console.log(flight);
// console.log(person);

// function newPassport(passenger) {
//   passenger.passport = Math.trunc(Math.random() * 10000000);
// }
// newPassport(person);
// checkin(flight, person);

// function firstLetterCapital(str) {
//   const wordArray = str.split(" ");
//   const fullName = [];
//   for (const word of wordArray) {
//     const [first, ...others] = word;

//     fullName.push(
//       [first.replace(first[0], first[0].toUpperCase()), ...others].join("")
//     );
//   }
//   console.log(fullName.join(" "));
// }

// const capitalized = firstLetterCapital("md ashikul hossain Shafol");
// console.log(capitalized);

//higher order function example

//---this are call back function ----

// function makeFirstUpper(str) {
//   const [first, ...others] = str.split(" ");
//   return [first.toUpperCase(), ...others].join(" ");
// }
// function makeFirstLower(str) {
//   const [first, ...others] = str.split(" ");
//   return [first.toLowerCase(), ...others].join(" ");
// }

//----this is H.O.F----
// function transformer(str, fn) {
//   console.log(`original string: ${str} `);
//   console.log(`converted to string: ${fn(str)}`);
//   console.log(`converted by : ${fn.name}`);
// }
// console.log("-------------");

// transformer("Javascript is a powerfull language", makeFirstLower);
// console.log("-------------");
// transformer("Javascript is a powerfull language", makeFirstUpper);

//function returning funtion

// const greet = (greeting) => (name) => console.log(`${greeting} ${name}`);
// const greeterHey = greet("hey");
// greeterHey("shofol");

//call and apply
const novoAir = {
  name: "Novo airbd",
  code: "NA12",
  bookings: [],
  book(passenger, seat) {
    this.bookings.push({ flights: [passenger, seat, this.name, this.code] });
    return `${passenger} book ${seat} on ${this.name} and code is ${this.code}`;
  },
};

console.log(novoAir.book("shofol", "1A"));
console.log(novoAir.bookings);

const UsBangla = {
  name: "US bangla bd",
  code: "US12",
  bookings: [],
};
const bookNew = novoAir.book;
bookNew.call(UsBangla, "shanto", "B1");
console.log(UsBangla.bookings);

const flightData = ["sohan", "3C"];

bookNew.call(novoAir, ...flightData);

console.log(novoAir);
