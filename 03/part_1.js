const fs = require("fs");

const data = fs
  .readFileSync("./03/data/puzzle_input.txt", { encoding: "utf8", flag: "r" })
  .toString()
  .split("\r\n");

const movementMap = {
  U: [0, 1],
  D: [0, -1],
  L: [-1, 0],
  R: [1, 0],
};

function buildPaths(nodes) {
  traversalPath = [[0, 0]];
  nodes.split(",").forEach((node) => {
    let direction = node[0];
    let steps = parseInt(node[1]);

    for (let i = 0; i < steps; i++) {
      let [lastX, lastY] = traversalPath[traversalPath.length - 1];
      let newNode = [
        lastX + movementMap[direction][0],
        lastY + movementMap[direction][1],
      ];
      traversalPath.push(newNode);
    }
  });

  return traversalPath;
}

let pathOne = buildPaths(data[0]);
let pathTwo = buildPaths(data[1]);

let intersection = pathOne.filter((array) => {
  pathTwo.forEach(() => true)
});

console.log(intersection);
