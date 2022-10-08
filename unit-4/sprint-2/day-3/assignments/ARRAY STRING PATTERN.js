
let ele = ["assignment", "problem", "media", "upload"];

let out=[];
out=ele.filter((el)=>{
    if(el.charAt(0)==="a" || el.charAt(el.length-1)==="a")  return el;
});

console.log(out);