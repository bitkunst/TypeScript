// anytime we create an interface, we are creating a new type
interface IVehicle {
    name: string;
    year: Date;
    broken: boolean;
    summary(): string;
}

// we can use a single interface to describe the shape or the different properties of very different objects
// Reportable <- oldCivic
// Reportable <- myDrink
interface Reportable {
    summary(): string;
}

const oldCivic = {
    name: 'civic',
    year: new Date(),
    broken: true,
    summary(): string {
        return `Name: ${this.name}`;
    },
};

const myDrink = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
    summary(): string {
        return `My drink has ${this.sugar} grams of sugar`;
    },
};

const printVehicle = (vehicle: IVehicle): void => {
    console.log(vehicle.summary());
};

printVehicle(oldCivic);

/********************************************************/

const printSummary = (item: Reportable): void => {
    console.log(item.summary());
};

printSummary(oldCivic);
printSummary(myDrink);
