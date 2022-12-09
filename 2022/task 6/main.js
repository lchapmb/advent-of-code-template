// Event Year: 2022
// Event Day: 1

// Advent of code 2022 -- Filename : main.js
// Run with `node main.js`
// Task link -- https://adventofcode.com/2022/day/1

const { inputToArray, test, tests } = require("../../common/common");

const _REALinput = inputToArray("../2022/task 6/input.txt", "");
const _TESTinput = inputToArray("../2022/task 6/test.txt", "");

const getMarkerByLength = (input, length) => {
  for (let i = 3; i < input.length; i++) {
    let tempArr = [];

    for (let j = 0; j < length; j++) {
      tempArr.push(input[i - j]);
    }

    let dupsInArr = false;
    tempArr.forEach((x) => {
      const count = tempArr.filter((y) => x === y).length;
      if (count > 1) {
        dupsInArr = true;
      }
    });

    if (!dupsInArr) {
      markerFoundAt = i + 1;
      break;
    }
  }

  return markerFoundAt;
};

const part1 = (input) => {
  // part 1

  return getMarkerByLength(input, 4);
};

const part2 = (input) => {
  // part 2

  return getMarkerByLength(input, 14);
};

tests([
  test(part1, _TESTinput, 7),
  test(part1, _REALinput, 1625),
  test(part2, _TESTinput, 19),
  test(part2, _REALinput, 2250),
]);
