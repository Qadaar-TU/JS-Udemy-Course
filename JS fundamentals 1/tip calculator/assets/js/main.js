//meine Lösung

// const bill1 = 275;
// const bill2 = 40;
// const bill3 = 430;

// const tip = (bill1 / 100) * 15;

// bill1 >= 50 && bill1 <= 300
//   ? console.log(
//       `the bill was ${bill1},the tip was ${tip}, and the total value was ${
//         bill1 + tip
//       }`
//     )
//   : console.log("mehr");

// if (bill1 >= 50 && bill1 <= 300) {
//   console.log(
//     `the bill was ${bill1},the tip was ${tip}, and the total value was ${
//       bill1 + tip
//     } `
//   );
// }

// ================    lösung von jonas ==================

// const bill = 40;
// const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// console.log(
//   `the bill was ${bill},the tip was ${tip}, and the total value was ${
//     bill + tip
//   } `0
// );

const jonas = {};

const tayfun = [
  "tayfun",
  "unterberg",
  2022 - 1984,
  "teacher",
  ["sabri", "hanad", "karim"],
  true,
];

const tayfun2 = [];

for (let index = 0; index < tayfun.length; index++) {
  // console.log(String(tayfun[index]));
  // tayfun2.push(tayfun[index]);
  tayfun2[index] = tayfun[index];
}

console.log(tayfun2);

// ======================================
const years = [1991, 2007, 1969, 2020];
const diesesJahr = 2022;
const age = [];

for (let index = 0; index < years.length; index++) {
  age.push(diesesJahr - years[index]);
}

console.log(age);
