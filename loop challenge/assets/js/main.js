//hier wird eine function definiert die die range vom trinkgeld festlegt (ternary operator)
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// man legt leere arrays fest, damit man später reinpushen kann
let tips = [];
let totals = [];

//
//
//
for (let i = 0; i < bills.length; i++) {
  //die function wird aufgerufen und in es wird loop als
  let tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}

console.log(bills, tips, totals