// Event Year: 2022
// Event Day: 1

// Advent of code 2022 -- Filename : main.js
// Run with `node main.js`
// Task link -- https://adventofcode.com/2022/day/1

const { inputToArray, test, tests } = require("../../common/common");

// const _REALinput = inputToArray("../2022/task 5/input.txt", "\r\n");
const _TESTinput = inputToArray("../2022/task 5/test.txt", "\r\n");

const part1 = (input) => {
  // part 1
  const gap = input.indexOf("");
  const boxStartState = input.slice(0, gap - 1);
  // console.log(boxStartState);
  const boxLabels = input[gap - 1];
  console.log(boxLabels.length);
  const instructions = input.slice(gap + 1);
  // console.log(instructions);

  for (let i = boxStartState.length - 1; i >= 0; i--) {
    let row = boxStartState[i];
    console.log(row);
    let col = [];
    for (let j = 1; j < row.length; j += 4) {
      console.log(row[j]);
      col.push(row[j]);
    }
    console.log(col);
  }

  return 0;
};

const part2 = (input) => {
  // part 2

  return 0;
};

tests([
  test(part1, _TESTinput, "CMZ"),
  // test(part1, _REALinput, 0),
  // test(part2, _TESTinput, 0),
  // test(part2, _REALinput, 0),
]);
