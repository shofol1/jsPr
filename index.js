// const numbers = [20, 23, -45, 33, 25];
// numbers.sort();
// numbers.reverse();
// const doctors = [
//   { name: "shofol", age: 26 },
//   { name: "shanto", age: 23 },
// ];
// doctors
//   .sort((d1, d2) => {
//     if (d1.age > d2.age) {
//       return +1;
//     } else if (d1.age == d2.age) {
//       return 0;
//     } else {
//       return -1;
//     }
//   })
//   .reverse();
// console.log(doctors);

// const data = numbers.some((num) => {
//   return num > 0;
// });
const num1 = [1, 2, 4];
const num2 = [2, 3, 5];

const array = [30, 40, 33, 22, 44, 55, 33];

// const result = num1.concat(num2);

// console.log(array.slice(3, 5));
// const rst = [...num1, ...num2];
// if (rst.includes(2)) {
//   rst.pop(2);
//   console.log(rst);
// }
// console.log(array.join(" "));

// const result = array.filter((num) => {
//   return num % 2 == 0;
// });

// const rst = array.reduce((sum, num) => {
//   return sum + num;
// }, 0);
// console.log(rst);

const set = new Set();
set.add(100);
set.add(200);
set.add(300);

set.delete(100);
set.clear();

console.log(set);

const map = new Map();
map.set("Mango", 100);
map.set("Lichu", 200);
map.set("Orange", 300);

console.log(map.keys());
