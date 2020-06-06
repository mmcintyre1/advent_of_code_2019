const fs = require("fs");

class IntCodeComputer {
  constructor(program) {
    this.program = program;
  }

  operations = {
    1: this.add,
    2: this.multiply,
    3: this.getInput,
    4: this.print,
    99: this.break,
  };

  running = false;
  currentPosition = 0;
  currentOpCode = null;

  getNum(mode = 0) {
    let num;

    if (mode === 0) {
      num = this.program[this.program[this.currentPosition]];
    } else {
      num = this.program[this.currentPosition];
    }
    this.currentPosition++;

    return num;
  }

  setNum(num, mode = 0) {
    if (mode === 0) {
      this.program[this.program[this.currentPosition]] = num;
    } else {
      this.program[this.program] = num;
    }
    this.currentPosition++;
  }

  parseOpCode() {
    let unparsedOpCode = this.program[this.currentPosition].toString();
    this.currentOpCode = [];

    for (let i = 0; i < 6; i++) {
      if (i == 0) {
        this.currentOpCode.push(parseInt(unparsedOpCode.substr(-1)))
        i = 2;
      } else if (i > unparsedOpCode.toString().length) {
        this.currentOpCode.push(0);
      } else {
        this.currentOpCode.push(parseInt(unparsedOpCode.substr(-i, 1)));
      }
    }
    this.currentPosition++;
  }

  add() {
    const firstNum = this.getNum(this.currentOpCode[1]);
    const secondNum = this.getNum(this.currentOpCode[2]);

    this.setNum(firstNum + secondNum, this.currentOpCode[3]);
  }

  multiply() {
    const firstNum = this.getNum(this.currentOpCode[1]);
    const secondNum = this.getNum(this.currentOpCode[2]);

    this.setNum(firstNum * secondNum, this.currentOpCode[3]);
  }

  break() {
    this.running = false;
  }

  print() {
    console.log(this.getNum(this.currentOpCode[1]))
  }

  getInput() {
    this.setNum(1)
  }

  process() {
    this.running = true;

    while (this.running) {
      this.parseOpCode();
      this.operations[this.currentOpCode[0]].call(this);
    }
  }
}

let data = fs
  .readFileSync("./data/puzzle_input.txt", { encoding: "utf8", flag: "r" })
  .split(",")
  .map((item) => parseInt(item.trim()));

computer = new IntCodeComputer(data);
computer.process();
