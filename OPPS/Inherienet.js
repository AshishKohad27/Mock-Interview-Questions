class Car {//Grandparent
    constructor(n, b) {
        this.name = n;
        this.brand = b;
    }
    showDetails() {
        console.log(`${this.name} ${this.brand}`);
    }
}

class SUV extends Car {//parent
    constructor(x, y) {
        super(x, y);

        this.buyer = "Ashish Kohad";
    }
}

class miniSUV extends SUV {//son
    constructor(x, y) {
        super(x, y);
        this.type = "mini-suv";
    }
}

var car1 = new Car('duster', 'renault');

console.log(car1);

var car2 = new SUV('duster', 'renault');

console.log(car2);

var car3 = new miniSUV("duster", "renault");

console.log(car3);
