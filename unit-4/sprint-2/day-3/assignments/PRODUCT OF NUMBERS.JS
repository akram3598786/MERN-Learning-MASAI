let ele=[2,3,4,5,6,7];
let prod=1;
let out=ele.reduce((out,el)=> {
    return out*=el;
});
console.log(out);