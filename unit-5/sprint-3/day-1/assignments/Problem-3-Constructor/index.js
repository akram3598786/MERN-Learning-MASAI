


function Obj(occ,nme,qual,live){
   this.occupation = occ;
   this.name = nme;
   this.qualty = qual;
   this.quality = function(){
      console.log(nme+" has quality of "+this.qualty)
   };
   this.lives = live;
   this.skill=function(){
       console.log(nme+" is a nice "+this.occupation);
   }
}

let Amar = new Obj("singer","Amar","Ossm Voice","Goa");
let Akbar = new Obj("chef","Akbar","Ossm Cooking","Mumbai");
let Anthony = new Obj("Magician","Anthony","Ossm Magic represenetation","Kashmir");


// Now each perso n can call each other sills
 Amar.skill.call(Akbar);
 Akbar.skill.call(Anthony);
 Anthony.skill.call(Amar);

 Amar.quality.call(Anthony);
 Anthony.quality.call(Amar);
 Akbar.skill.call(Anthony);

/*
let Amar={
    occupation :"singer",
    name : "Amar",
    quality : "Ossm Voice",
    lives : "Goa",
}
let Akbar={
    occupation:"chef",
    name : "Akbar",
    quality : "Ossm Cooking",
    lives : "Mumbai",
}
let Anthony={
    occupation:"Magician",
    name : "Anthony",
    quality : "Ossm Magic represenetation",
    lives : "Kashmir",
}
*/