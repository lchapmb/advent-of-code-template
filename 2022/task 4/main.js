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
  let overlapCount = 0;

  for (let i = 0; i < input.length; i++) {
    const drumOfElves = input[i].split(",");

    const elfOne = drumOfElves[0].split("-").map((x) => parseInt(x));
    const elfTwo = drumOfElves[1].split("-").map((x) => parseInt(x));

    const elfOneInElfTwo = elfOne[0] >= elfTwo[0] && elfOne[1] <= elfTwo[1];
    const elfTwoInElfOne = elfTwo[0] >= elfOne[0] && elfTwo[1] <= elfOne[1];

    if (elfOneInElfTwo || elfTwoInElfOne) {
      overlapCount++;
    }
  }
  return overlapCount;
};

const part2 = (input) => {
  // part
  let overlapCount = 0;

  for (let i = 0; i < input.length; i++) {
    const drumOfElves = input[i].split(",");

    const elfOne = drumOfElves[0].split("-").map((x) => parseInt(x));
    const elfTwo = drumOfElves[1].split("-").map((x) => parseInt(x));

    const elfOneInElfTwo = elfOne[0] >= elfTwo[0] && elfOne[1] <= elfTwo[1];
    const elfTwoInElfOne = elfTwo[0] >= elfOne[0] && elfTwo[1] <= elfOne[1];

    const elfOneOverElfTwo = elfOne[0] <= elfTwo[0] && elfOne[1] >= elfTwo[0];
    const elfTwoOverElfOne = elfOne[0] <= elfTwo[1] && elfOne[1] >= elfTwo[1];

    if (
      elfOneInElfTwo ||
      elfTwoInElfOne ||
      elfOneOverElfTwo ||
      elfTwoOverElfOne
    ) {
      console.log("overlap");
      overlapCount++;
    }
  }
  return overlapCount;
};

tests([
  // test(part1, _TESTinput, 2),
  // test(part1, _REALinput, 605),
  test(part2, _TESTinput, 4),
  test(part2, _REALinput, 914),
]);
