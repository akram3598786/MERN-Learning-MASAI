/* Polymorphism: Multiple forms can be take by a method based onvits runtime (from whwrecinvoked). */

class student_type_1{
    constructor(name,institute,std_ID,age,DOA,year,course,branch){
        this.name=name;
        this.std_ID = std_ID;
        this.institute = institute;
        this.age = age;
        this.DOA=DOA;
        this.year=year;
        this.course=course;
        this.branch=branch;
    }

    check_institute(){
        console.log(this.name+" is studing in "+this.institute);
    }
}

class student_type_2 extends student_type_1{
    constructor(name,institute){
        super(name,institute);
    }
    // check_institute(){
    //     console.log(this.name+" is studing in "+this.institute);
    // }
}
class student_type_3 extends student_type_2{
    constructor(name,institute){
        super(name,institute);
    }
    // check_institute(){
    //     console.log(this.name+" is studing in "+this.institute);
    // }
}

const std_type_1=new student_type_1("Alex","Harvard University",234,20,"20-08-2020",3,"B.Tech","IT");
const std_type_2=new student_type_2("Albert","Hopking University");
const std_type_3=new student_type_2("Akram","MASAI School");
console.log(std_type_1);
console.log(std_type_2);
console.log(std_type_3);

std_type_1.check_institute();
std_type_2.check_institute();
std_type_3.check_institute();
