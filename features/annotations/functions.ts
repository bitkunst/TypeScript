const add = (a: number, b: number): number => {
    return a + b;
};

// define a function using an arrow
const subtract = (a: number, b: number): number => {
    return a - b;
};

// named function
function divide(a: number, b: number): number {
    return a / b;
}

// anonymous function assigned to a variable
const multiply = function (a: number, b: number): number {
    return a * b;
};

// function that's going to not return anything
// there will be no return value from this function
const logger = (message: string): void => {
    console.log(message);
};

// we are never going to actually reach the end of this function
// never going to execute the function completely
const throwError = (message: string): never => {
    throw new Error(message);
};

// only possibly throw an error
// we're still going to annotate it with whatever we expect it to eventually return
const throwError2 = (message: string): string => {
    if (!message) {
        throw new Error(message);
    }

    return message;
};

const throwError3 = (message: string): void => {
    if (!message) {
        throw new Error(message);
    }
};

const todaysWeather = {
    date: new Date(),
    weather: 'sunny',
};

const logWeather = (forecast: { date: Date; weather: string }): void => {
    console.log(forecast.date);
    console.log(forecast.weather);
};

logWeather(todaysWeather);

// destructuring
const logWeather2 = ({ date, weather }: { date: Date; weather: string }): void => {
    console.log(date);
    console.log(weather);
};
