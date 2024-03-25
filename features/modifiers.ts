{
    class Vehicle {
        protected honk(): void {
            console.log('beep');
        }
    }

    class Car extends Vehicle {
        // we are going to use 'private'
        // whenever we want to restrict access to a function
        private drive(): void {
            console.log('vroom');
        }

        startDrivingProcess(): void {
            this.drive();
            this.honk();
        }
    }

    const car = new Car();
    car.startDrivingProcess();
}
