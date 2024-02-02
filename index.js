const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

const reducer = () => {
    return batteryBatches.reduce((accumulator, currentValue) => {
        accumulator += currentValue;
        return accumulator;
    });
}
const totalBatteries = reducer()
console.log(reducer());

