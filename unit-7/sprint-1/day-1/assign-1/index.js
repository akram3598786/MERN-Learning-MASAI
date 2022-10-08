
// console.log("Started Backend learning");

const randomNumber = require("./randomNumber");

// console.log(process.argv)
let type=process.argv[2] , num1=process.argv[3],num2=process.argv[4];

num1 = +num1,num2=+num2;

const sum=(num1,num2)=> console.log("Sum is = ",num1+num2);
const sub=(num1,num2) => console.log("Diff is = ",num1-num2);
const multiply=(num1,num2)=> console.log("Multiplication  is = ",num1*num2);
const divide=(num1,num2)=>console.log("Division is = ",num1/num2);

const sin=(num)=>console.log(`Sin value of ${num} is=`,Math.sin(num));
const cos=(num)=>console.log(`Cos value of ${num} is=`,Math.cos(num));
const tan=(num)=>console.log(`Tan value of ${num} is=`,Math.tan(num));

type==="sum" ? sum(num1,num2) : type==="sub" ? sub(num1,num2) : type==="multiply" ? multiply(num1,num2) :
type==="divide" ? divide(num1,num2) : type==="sin" ? sin(num1) : type==="cos" ? cos(num1) :
type==="tan" ? tan(num1) : type==="random" ? randomNumber(num1) : console.log("give correct cmnd");


