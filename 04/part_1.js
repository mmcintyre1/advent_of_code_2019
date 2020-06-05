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

  for (let c of str) {
    if (c === prev) {
      doubleCheck = true;
    }

    if (parseInt(c) < parseInt(prev)) {
      ascendingCheck = false;
    }
    prev = c;
  }

  return doubleCheck && ascendingCheck;
}

const eligible = numRange.filter(passwordCheck).length
console.log(eligible)
