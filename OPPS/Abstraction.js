// /there is no way to mark a class as abstract in ES6,
//however you can force a class to behave line one by
//	- forcing derived classes to override a method
//	- causing the base class's contructor to throw an error so that it
//			is never used to create instances of the base type*
// *Be careful, as this will cause problems if you do need derived classes
// 	to call super() contructor


class Employee {
    constructor() {
        if (this.constructor == Employee) {
            throw new Error(" Object of Abstract Class cannot be created");
        }
    }
    display() {
        throw new Error("Abstract Method has no implementation");
    }
}
class Manager extends Employee{
    constructor(){
        super();
        this.sub_type = "manager"
    }
}
// class Manager extends Employee {
//     display() {
//         // super.display();
//         console.log("I am a Manager");
//     }
// }
//var emp = new Employee;
var mang = new Manager();
mang.display();
