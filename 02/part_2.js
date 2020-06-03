const fs = require("fs");

let data = fs
  .readFileSync("./02/data/puzzle_input.txt", { encoding: "utf8", flag: "r" })
  .split(",")
  .map((item) => parseInt(item.trim()));

function compute(data, noun, verb) {
  data[1] = noun;
  data[2] = verb;

  for (let i = 0; i <= data.length; i += 4) {
    let opCode = data[i];
    let replacePosition = data[i + 3];
    let firstNumber = data[i + 1];
    let secondNumber = data[i + 2];

    switch (opCode) {
      case 1:
        data[replacePosition] = data[firstNumber] + data[secondNumber];
        break;
      case 2:
        data[replacePosition] = data[firstNumber] * data[secondNumber];
        break;
      default:
        break;
    }
  }
  return data[0]
}

for (let noun = 0; noun <= 100; noun++) {
  for (let verb = 0; verb <= 100; verb++) {
    value = compute([...data], noun, verb)
    if (value === 19690720) {
      console.log(100 * noun + verb)
    }
  }
}