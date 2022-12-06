// Event Year: 2022
// Event Day: 1

// Advent of code 2022 -- Filename : main.js
// Run with `node main.js`
// Task link -- https://adventofcode.com/2022/day/1

const { inputToArray, test, tests } = require("../../common/common");

const _REALinput = inputToArray("../2022/task 4/input.txt", "\r\n");
const _TESTinput = inputToArray("../2022/task 4/test.txt", "\r\n");

const part1 = (input) => {
  // part 1
  let pairCount = 0;
  console.log(input);
  for (let i = 0; i < input.length; i++) {
    let inputArr = input[i].split(",");
    console.log(inputArr);
    let elfOne = inputArr[0].split("-");
    console.log(elfOne);
    let elfTwo = inputArr[1].split("-");
    console.log(elfTwo);

    if (elfOne[0] >= elfTwo[0] && elfOne[1] <= elfTwo[1]) {
      console.log("1 in 2");
      pairCount++;
    } else if (elfTwo[0] >= elfOne[0] && elfTwo[1] <= elfOne[1]) {
      console.log("2 in 1");
      pairCount++;
    }
  }
  return pairCount;
};

const part2 = (input) => {
  // part

  return 0;
};

tests([
  test(part1, _TESTinput, 2),
  // test(part1, _REALinput, 0),
  // test(part2, _TESTinput, 0),
  // test(part2, _REALinput, 0),
]);
