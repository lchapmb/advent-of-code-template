// common functions that are shared between all the event files

const fs = require("fs");
const path = require("path");
const chalk = require("chalk");

const returnInput = (filename) => {
  return fs.readFileSync(path.resolve(__dirname, filename), "utf-8");
};

const inputToArray = (filename, splitter) => {
  return returnInput(filename).split(splitter);
};

const inputToIntArray = (filename, split) => {
  return returnInput(filename).split(split).map(Number);
};

function calculatePercentage(part, total) {
  return Math.round((part / total) * 100);
}
const test = (givenFunction, input, expected) => {
  return { f: givenFunction, input, expected }
}

const tests = (tests) => {
  console.clear();
  let passedTests = 0;
  for (let i = 0; i < tests.length; i++) {
    const { f, input, expected } = tests[i];
    let toRun = tests[i].enabled !== undefined ? tests[i].enabled : true;
    if (toRun) {
      let result = f(input);
      let passedOrFail = result === expected;
      console.log(chalk`
      \tTest {underline #${i + 1}} {${
        passedOrFail ? "green.bold passed" : "red.bold failed"
      }}.
      \tExpected {green.bold ${expected}} ${
        passedOrFail ? "and" : "but"
      } got {${passedOrFail ? "green" : "red"}.bold ${result}}.
    `);
      if (passedOrFail) passedTests++;
    }
  }
  console.log(chalk`
    \tPassed {green.bold ${passedTests}} out of {red.bold ${
    tests.length
  }} - ${calculatePercentage(passedTests, tests.length)}%.
  `);
};

const inputToString = (filename) => {
  return returnInput(filename);
};

module.exports = {
  inputToArray,
  inputToIntArray,
  inputToString,
  test,
  tests,
};
