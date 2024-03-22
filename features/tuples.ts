const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
};

// Type alias
type Drink = [string, boolean, number];

// tuple
// this array is going to always have a very consistent ordering of elements inside of it
const pepsi: [string, boolean, number] = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];

// if we use a tuple to represent some meaningful data,
// it's really hard for us to look at the value and understand what we are trying to say
const carSpecs: [number, number] = [400, 3354];
const carStats = {
    horsepower: 400,
    weight: 3354,
};
