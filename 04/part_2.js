const lowerBound = 197487;
const upperBound = 673252;

const numRange = Array(upperBound - lowerBound)
  .fill(lowerBound)
  .map((x, y) => x + y);

function passwordCheck(num) {
  let str = num.toString();
  let prev = "";

  let doubleCheck = false;
  let ascendingCheck = true;
  let repeats = 0;

  for (let c of str) {
    if (c === prev) {
      repeats++;
    } else {
      if (repeats === 1) {
        doubleCheck = true;
      }
      repeats = 0;
    }

    if (parseInt(c) < parseInt(prev)) {
      ascendingCheck = false;
    }
    prev = c;
  }
  if (repeats === 1) {
    doubleCheck = true
  }

  return doubleCheck && ascendingCheck;
}

const eligible = numRange.filter(passwordCheck).length;
console.log(eligible);
