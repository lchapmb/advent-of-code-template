const { inputToArray } = require("../common/common");

const inputs = inputToArray("../task 1/input.txt", "\r\n");

// PART 1
const part1 = () => {
  let score = 0;
  for (let i = 0; i < inputs.length; i++) {
    score += parseInt(inputs[i]);
  }
  return score;
};

// PART 2
const part2 = () => {
  let seenValues = [];
  let score = 0;
  while (true) {
    for (let i = 0; i < inputs.length; i++) {
      score += parseInt(inputs[i]);
      if (seenValues.includes(score)) {
        return score;
      } else {
        seenValues.push(score);
      }
    }
  }
};

console.log(part2());
console.log(part1());
