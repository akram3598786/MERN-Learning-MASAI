

class my_grandfather{
    constructor(name,sur_name,city,state,heigh_feet,occup,salary){
        this.name=name;
        this.sur_name=sur_name;
        this.city=city;
        this.state=state;
        this.height_feet=heigh_feet;
        this.occup=occup;
        this.salary=salary;
        // this.address = function (){
        //     console.log("My Grandfather name is "+this.name+" and Address is "+this.city+", "+this.state);
        // }
    }
    address = function (){
        console.log("My Grandfather name is "+this.name+" "+this.sur_name+" and Address is "+this.city+", "+this.state);
    }
    Occupation (){
        console.log("My Grandfather is a "+this.occup);
    }
} 

let my_grndpa=new my_grandfather("Alahuddin","Idrisi","Panipat","Haryana",6,"Teacher",5000000);
my_grndpa.address();
console.log(my_grndpa);
class My_Father extends my_grandfather{
    constructor(name,sur_name,city,state,heigh_feet,occup,salary,office_in_city,illness){
        super(name,sur_name,city,state,heigh_feet,occup,salary);
        this.office_in_city = office_in_city;
        this.illness=illness;
    }
    address = function (){
        console.log("My father name is "+this.name+" "+this.sur_name+" and Address is "+this.city+", "+this.state);
    }
    Occupation (){
        console.log("My father is a "+this.occup);
    }
}
let father=new My_Father("Irfan","Idrisi","Panipat","Haryana",5.6,"Supervisor",6000000,"Delhi",false);
console.log(father);
father.address();

class Myself extends My_Father{
    constructor(name,sur_name,city,state,heigh_feet,occup,salary,office_in_city,illness,buisness,student_life){
        super(name,sur_name,city,state,heigh_feet,occup,salary,office_in_city,illness);
        this.buisness = buisness;
        this.student_life=student_life;
    }
}

let myself = new Myself("Akram","Idrisi","Panipat","Haryana",5.7,"Software Engineer",8000000,"Mumbai",false,false,true);
console.log(myself);

class Cat{
    constructor(name,age,weight,claws,tail,legs,whiskers){
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.claws = claws;
        this.tail = tail;
        this.legs = legs;
        this.whiskers = whiskers;
    }
}

let cat1=new Cat("Billy",3,10,"very sharp",true,4,true);
console.log(cat1)

class Cat_child extends Cat{
    constructor(name,age,weight,claws,tail,legs,whiskers,illness){
        super(name,age,weight,claws,tail,legs,whiskers);
        this.illness = false;
    }
}

const cat_child_1=new Cat_child("Billy_child",2,5,"sharp",false,true);
console.log(cat_child_1);
