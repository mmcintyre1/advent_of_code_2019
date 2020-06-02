const fs = require("fs");

const data = fs
  .readFileSync("./data/puzzle_input.txt", { encoding: "utf8", flag: "r" })
  .toString()
  .split("\r\n");

sum = data.map((item) => Math.floor(item / 3) - 2).reduce((a, b) => a + b, 0);
console.log(sum)
