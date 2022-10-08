

// Note : All inherited properties from parent obj to 
//child will be in "Prototype" in console panel


const gr_father={
    surname:"winechester",
    hair:"big_hairs",
}

const father=Object.create(gr_father);
father.occup="teacher";

const son=Object.create(father);
son.age=18;
son.name="harry";

console.log(son.hasOwnProperty("age"));  // true
console.log(son.hasOwnProperty("occup")); //false
console.log(son.hasOwnProperty("name")); //true