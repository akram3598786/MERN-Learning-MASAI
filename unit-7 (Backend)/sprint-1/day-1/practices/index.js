
console.log("Started Backend");
console.log(process.argv)
let type=process.argv[1] , num1=process.argv[2],num2=process.argv[3];

function sum(num1,num2){
    console.log("Sum is = ",num1-num2);
}
function sub(num1,num2){
    console.log("Diff is = ",num1-num2);
}

type==="sum" ? sum(2,7) : type==="sub" ? sub(num1,num2) : "give correct cmnd";
