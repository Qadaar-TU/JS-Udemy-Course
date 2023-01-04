const calcAverage = (a, b, c) => (a + b + c) / 3;

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

console.log(scoreDolphins, scoreKoalas);

function checkWinner(avgDolphin, avgKoala) {
  if (avgDolphin >= 2 * avgKoala) {
    console.log(`Dolphins win ${avgDolphin} vs. ${avgKoala}`);
  } else if (avgKoala >= 2 * avgDolphin) {
    console.log(`Koalas Win ! ${avgKoala} vs. ${avgDolphin}`);
  } else {
    console.log("No team wins");
  }
}
checkWinner(scoreDolphins, scoreKoalas);

//test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);

checkWinner(scoreDolphins, scoreKoalas);
