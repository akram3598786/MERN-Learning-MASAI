
let ele=[1, 2, 3, 4, 5, 6];
let out=ele.filter((el)=>{
    return (el%3==0);
}).map((el)=>{
   return el**3;
}).reduce((cont,el)=>{
    return cont+=el;
})
console.log(out)