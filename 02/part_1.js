const fs = require("fs");

let data = fs
  .readFileSync("./02/data/puzzle_input.txt", { encoding: "utf8", flag: "r" })
  .split(",")
  .map(item => parseInt(item.trim()))

data[1] = 12
data[2] = 2

for (let i = 0; i <= data.length; i += 4) {
  let opCode = data[i]
  let replacePosition = data[i + 3]
  let firstNumber = data[i + 1]
  let secondNumber = data[i + 2]

  switch (opCode) {
    case 1:
      data[replacePosition] = data[firstNumber] + data[secondNumber]
      break
    case 2:
      data[replacePosition] = data[firstNumber] * data[secondNumber]
      break
  }
}

console.log(data[0])