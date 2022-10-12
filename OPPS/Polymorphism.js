class Vehicle{
    run(){
        console.log("Vehicle is Running");
    }
}
class Car extends Vehicle{
    run(){
        console.log("Car is Running");
    }
}
class Truck extends Vehicle{
    run(){
        console.log("Truck is Running");
    }
}

let V1 = new Vehicle();
// run()
V1.run();
// console.log('V1:', V1)

let V2 = new Car();
V2.run()
// console.log('V2:', V2)

let V3 = new Truck();
// console.log('V3:', V3)