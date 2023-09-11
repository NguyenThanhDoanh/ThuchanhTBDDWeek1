console.log("Coding Challenge #1");
let massM = 78;
let heightM = 1.69;
let massJ = 92;
let heightJ = 1.95;
let BMIM = Number(massM) / (Number(heightM) * Number(heightM));
let BMIJ = Number(massJ) / (Number(heightJ) * Number(heightJ));

let markHigherBMI = BMIM > BMIJ;

console.log("Mark có BMI cao hơn John hay không? " + markHigherBMI);
console.log("coding challenge #2");
let massM2 = 95;
let heightM2 = 1.88;
let massJ2 = 85;
let heightJ2 = 1.76;

let BMIM2 = Number(massM2) / (Number(heightM2) * Number(heightM2));
let BMIJ2 = Number(massJ2) / (Number(heightJ2) * Number(heightJ2));

let markHigherBMI2 = BMIM > BMIJ;

if (markHigherBMI) {
    console.log("Mark's " + "(" + BMIM2 + ")" + "is higher than John 's" + "(" + BMIJ2 + ")");
} else {
    console.log("John's " + "(" + BMIJ2 + ")" + "is higher than Mark 's" + "(" + BMIM2 + ")");
}
console.log("coding challenge #3 (data1)");
var Dolphins = [96, 108, 89];
var Koalas = [88, 91, 110];

function trungbinhdiem(a, b, c) {
    return (a + b + c) / 3;
}
if (trungbinhdiem(Dolphins[0], Dolphins[1], Dolphins[2]) > trungbinhdiem(Koalas[0], Koalas[1], Koalas[2])) {
    console.log("Dolphins win");
} else if (trungbinhdiem(Dolphins[0], Dolphins[1], Dolphins[2]) < trungbinhdiem(Koalas[0], Koalas[1], Koalas[2])) {
    console.log("Koalas win");
} else {
    console.log("Draw");
}
console.log("coding challenge #4");

function calculateTip(bill) {
    const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
    const total = bill + tip;
    console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${total}`);
}

// Test for bill values 275, 40 and 430
calculateTip(275);
calculateTip(40);
calculateTip(430);