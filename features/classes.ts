{
    class Vehicle {
        drive(): void {
            console.log('chugga chugga');
        }

        honk(): void {
            console.log('beep');
        }
    }

    class Car extends Vehicle {
        // when we have a class that 'extends' another,
        // we can optionally choose to override different methods
        drive(): void {
            console.log('vroom');
        }
    }

    const vehicle = new Vehicle();
    vehicle.drive();
    vehicle.honk();

    const car = new Car();
    car.drive();
    car.honk();
}
