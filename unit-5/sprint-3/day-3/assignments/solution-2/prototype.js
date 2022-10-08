
const Array= function(ele){
  this.size = ele.length;
 for(let i=0;i<ele.length;i++){
     this[i]=ele[i];
 }
}
Array.prototype.add_ele= function(el){
    let top=this.size;
     this[top]=el;
     this.size++;
  }

Array.prototype.my_pop=function(){
    let top=this.size-1;
    let popped_ele=this[top];
     delete this[top];
    this.size--;
    return popped_ele;
}
Array.prototype.top=function(){
    let ind = this.size-1;
    let top_ele = this[ind];
    return top_ele;
}
Array.prototype.print=function(){
    let out="";
    for(let i=0;i<this.size;i++){
        out+=this[i]+" ";
    }
    console.log(out);
}
Array.prototype.printReverse=function(){
    let out="";
    for(let i=this.size-1;i>=0;i--){
        out+=this[i]+" ";
    }
    console.log(out);
}
Array.prototype.size_of_arry=function(){
    return this.size;
}

let arr=[2,3,4,5,6,7,8,9];
let elem= new Array(arr);
elem.add_ele(22);
elem.add_ele(33);

console.log("Popped_ele - "+elem.my_pop());
console.log("Top_ele - "+elem.top());
elem.print();
elem.printReverse();
console.log("Size of Array - "+elem.size_of_arry());

console.log(elem);