// Event Year: 2022
// Event Day: 1

// Advent of code 2022 -- Filename : main.js
// Run with `node main.js`
// Task link -- https://adventofcode.com/2022/day/1

const { inputToArray, test, tests } = require("../../common/common");

const _REALinput = inputToArray("../2022/task 3/input.txt", "\r\n");
const _TESTinput = inputToArray("../2022/task 3/test.txt", "\r\n");

const part1 = (input) => {
  // part 1
  let charTotal = 0;

  for (let i = 0; i < input.length; i++) {
    let string = input[i];
    let bagOne = string.substring(0, string.length / 2);
    let bagTwo = string.substring(string.length / 2);

    let charCode;

    for (let j = 0; j < bagOne.length; j++) {
      for (let k = 0; k < bagTwo.length; k++) {
        if (bagOne[j] === bagTwo[k]) {
          charCode = bagOne.charCodeAt(j);
        }
      }
    }

    if (charCode > 64 && charCode < 91) {
      charTotal += charCode - 38;
    } else if (charCode > 96 && charCode < 123) {
      charTotal += charCode - 96;
    }
  }

  return charTotal;
};

const part2 = (input) => {
  // part 2
  console.log(input);

  let charTotal = 0;

  for (let i = 0; i < input.length; i += 3) {
    let bagOne = input[i];
    let bagTwo = input[i + 1];
    let bagThree = input[i + 2];
    let charCode;
    for (let j = 0; j < bagOne.length; j++) {
      for (let k = 0; k < bagTwo.length; k++) {
        if (bagOne[j] === bagTwo[k]) {
          for (let l = 0; l < bagThree.length; l++) {
            if (bagOne[j] === bagThree[l]) {
              charCode = bagOne.charCodeAt(j);
            }
          }
        }
      }
    }

    if (charCode > 64 && charCode < 91) {
      charTotal += charCode - 38;
    } else if (charCode > 96 && charCode < 123) {
      charTotal += charCode - 96;
    }
  }

  return charTotal;
};

tests([
  test(part1, _TESTinput, 157),
  test(part1, _REALinput, 7597),
  test(part2, _TESTinput, 70),
  test(part2, _REALinput, 2607),
]);
