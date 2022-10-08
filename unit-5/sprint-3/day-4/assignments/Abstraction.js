
/*
Abstratction is just hiding some information and showing only relevent informations 
So we can so this task can be done by adding information in Protoype which need to hide 
*/

class teacher{

    constructor(name,age,institute){
        this.name=name;
        this.age=age;
        this.institute=institute;
    }
   // This method would add in prototype
    Address(){
        console.log("Address of "+this.name+" is (w-08,Model_Town) 30Km Apart from "+this.institute );
    }
}

let priya=new teacher("Priya","24","IIT Delhi");

teacher.prototype.ID=233454;
teacher.prototype.salary=5000000;

console.log(priya);
priya.Address();