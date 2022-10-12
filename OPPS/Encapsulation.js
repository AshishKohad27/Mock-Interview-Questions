class ClassWithPrivateField {
    #passward;

    constructor() {
      this.#passward = "ASHISH@132";
    }
  }

//   class SubClass extends ClassWithPrivateField {
//     #subPrivateField;

//     constructor() {
//       super();
//       this.#subPrivateField = 23;
//     }
//   }

  let x = new ClassWithPrivateField();
  console.log('x:', x.passward);
