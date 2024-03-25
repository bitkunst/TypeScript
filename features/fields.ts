{
    class Vehicle {
        // property
        color: string;

        // constructor function
        // it will be instantly executed right when we create a new instance of the class
        constructor(color: string) {
            this.color = color;
        }

        protected honk(): void {
            console.log('beep');
        }
    }

    const vehicle = new Vehicle('orange');
    console.log(vehicle.color);

    // shortcut
    class Vehicle2 {
        // it will be assigned as an instance variable of color to our vehicle that we are creating
        constructor(public color: string) {}
    }

    const vehicle2 = new Vehicle2('red');
    console.log(vehicle2.color);

    class Car extends Vehicle {
        // constructors for derived classes must contain a 'super' call
        // 'super' is a reference to the super class or the parent class
        constructor(public wheels: number, color: string) {
            // whenever we call the constructor of a child class,
            // we are required to call the constructor method of the parent as well
            super(color); // 'super' is a reference to the constructor method in the parent
        }

        private drive(): void {
            console.log('vroom');
        }

        startDrivingProcess(): void {
            this.drive();
            this.honk();
        }
    }

    const car = new Car(4, 'red');
    car.startDrivingProcess();
}
