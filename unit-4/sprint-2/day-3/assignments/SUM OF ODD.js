
let ele=[2,7,9,3,45,88,99];

let out=ele.filter((el)=>{
    return (el%2!=0);
}).reduce((cont,el)=>{
    return cont+=el;
})

console.log(out)