const fs = require("fs");

const data = fs
  .readFileSync("./data/puzzle_input.txt", { encoding: "utf8", flag: "r" })
  .toString()
  .split("\r\n");

const getFuelConsumption = (mass, arr = []) => {
  let fuel = Math.floor(mass / 3) - 2;
  if (fuel <= 0) {
    return arr;
  } else {
    arr.push(fuel);
    return getFuelConsumption(fuel, arr);
  }
}

getTotalFuelConsumption = (mass) => {
  return getFuelConsumption(mass).reduce((a, b) => a + b, 0);
}

sum = data
  .map((mass) => {
    return getTotalFuelConsumption(mass);
  })
  .reduce((a, b) => a + b, 0);
console.log(sum);
