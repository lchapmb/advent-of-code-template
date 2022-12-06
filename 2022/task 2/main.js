// Event Year: 2022
// Event Day: 1

// Advent of code 2022 -- Filename : main.js
// Run with `node main.js`
// Task link -- https://adventofcode.com/2022/day/1

const { inputToArray, test, tests } = require("../../common/common");

const _REALinput = inputToArray("../2022/task 2/input.txt", "\r\n");
const _TESTinput = inputToArray("../2022/task 2/test.txt", "\r\n");

const part1 = (input) => {
  // part 1
  let totScore = 0;

  input.forEach((element) => {
    const gameArr = element.split(" ");
    const opp = gameArr[0];
    const me = gameArr[1];

    let score = 0;

    if (
      (opp === "A") & (me === "Y") ||
      (opp === "B") & (me === "Z") ||
      (opp === "C") & (me === "X")
    ) {
      score += 6;
    } else if (
      (opp === "A") & (me === "X") ||
      (opp === "B") & (me === "Y") ||
      (opp === "C") & (me === "Z")
    ) {
      score += 3;
    }

    if (me === "X") score += 1;
    if (me === "Y") score += 2;
    if (me === "Z") score += 3;

    totScore += score;
  });

  return totScore;
};

const part2 = (input) => {
  // part 2
  let totScore = 0;

  input.forEach((element) => {
    const gameArr = element.split(" ");
    const opp = gameArr[0];
    const me = gameArr[1];

    let score = 0;

    if (me === "Z") {
      score += 6;

      if (opp === "C") score += 1;
      if (opp === "A") score += 2;
      if (opp === "B") score += 3;
    } else if (me === "Y") {
      score += 3;

      if (opp === "A") score += 1;
      if (opp === "B") score += 2;
      if (opp === "C") score += 3;
    } else {
      if (opp === "B") score += 1;
      if (opp === "C") score += 2;
      if (opp === "A") score += 3;
    }

    totScore += score;
  });

  return totScore;
};

tests([
  test(part1, _TESTinput, 15),
  test(part1, _REALinput, 13221),
  test(part2, _TESTinput, 12),
  test(part2, _REALinput, 13131),
]);
