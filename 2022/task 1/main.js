// Event Year: 2022
// Event Day: 1

// Advent of code 2022 -- Filename : main.js
// Run with `node main.js`
// Task link -- https://adventofcode.com/2022/day/1

const { inputToArray, test, tests } = require("../../common/common");

const _REALinput = inputToArray("../2022/task 1/input.txt", "\r\n");
const _TESTinput = inputToArray("../2022/task 1/test.txt", "\r\n");

const part1 = (input) => {
  // part 1
  let runningTot = 0;
  let compTot = 0;
  for (let i = 0; i < input.length; i++) {
    let value = parseInt(input[i]);
    if (value) {
      runningTot += value;
    } else {
      if (runningTot > compTot) {
        compTot = runningTot;
      }
      runningTot = 0;
    }
  }

  return compTot;
};

const part2 = (input) => {
  // part 2
  let runningTot = 0;
  let totArr = [];

  for (let i = 0; i < input.length; i++) {
    let value = parseInt(input[i]);
    if (value) {
      runningTot += value;
    } else {
      totArr.push(runningTot);
      runningTot = 0;
    }
  }

  totArr.push(runningTot);

  const sortedArr = totArr.sort(function(a, b){return b - a});
  const result = sortedArr[0] + sortedArr[1] + sortedArr[2];

  return result;
};

tests([
  // test(part1, _TESTinput, 24000),
  // test(part1, _REALinput, 0),
  // test(part2, _TESTinput, 45000),
  test(part2, _REALinput, 203420),
]);
