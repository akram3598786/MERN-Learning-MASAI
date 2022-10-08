
//Inheritence Model Using Object.create;
let std_car={
    wheels:4,
    BHP:115.0,
    Transmission:"Manual/Automatic",
    Fuel_tank_cp:45,
    Enigine:"1498 CC",
    service_cost:"4000/yr",
    price:1400000,
}

let suv=Object.create(std_car);
suv.name="SUV";
suv.seats=7;
suv.fuel="petrol";
suv.Mileage=22;
let tata = Object.create(std_car);
tata.name="Tata-Texon-EV";
tata.Mileage=25;
tata.fuel="Electric";
tata.seats=6;
 console.log(suv);
 console.log(tata);


//Inheritence Model Using Constructors

function car(specs){
        this.wheels=specs[0];
        this.BHP=specs[1];
        this.Transmission=specs[2];
        this.Fuel_tank_cp=specs[3];
        this.Enigine=specs[4];
        this.service_cost=specs[5];
}

const car_specs=[4,115.0,"Manual/Automatic",45,"1498 CC","4000/yr"]
const barezza= new car(car_specs);
car.prototype.line = function(){
    console.log("Our car is nice in terms of speed");
};
car.prototype.speed="100 km/hr";
console.log(barezza);