// Event Year: 2022
// Event Day: 1

// Advent of code 2022 -- Filename : main.js
// Run with `node main.js`
// Task link -- https://adventofcode.com/2022/day/1

const { inputToArray, test, tests } = require("../../common/common");

const _REALinput = inputToArray("../2022/task 5/input.txt", "\r\n");
const _TESTinput = inputToArray("../2022/task 5/test.txt", "\r\n");

const createInstructionsArr = (inputArr) => {
  let instructionsArr = [];

  inputArr.forEach((instructionStr) => {
    let instructionArr = [];
    let tempInstrArr = instructionStr.split(" ");

    for (let m = 1; m < tempInstrArr.length; m += 2) {
      instructionArr.push(tempInstrArr[m]);
    }

    instructionsArr.push(instructionArr);
  });

  return instructionsArr;
};

const createStackArr = (inputArr) => {
  let stackArr = [];

  for (let k = 0; k < inputArr.length; k++) {
    const row = inputArr[k];
    let rowArr = [];
    for (let l = 1; l < row.length; l += 4) {
      rowArr.push(row[l]);
    }
    stackArr.push(rowArr);
  }
  return stackArr;
};

const createInputObj = (inputArr) => {
  const gap = inputArr.indexOf("");
  const instructions = createInstructionsArr(inputArr.slice(gap + 1));
  const stackArr = createStackArr(inputArr.slice(0, gap - 1));

  return { stack: stackArr, instructions: instructions };
};

const createNewStack = (inputObj, craneType) => {
  let stack = inputObj.stack;
  const instructions = inputObj.instructions;

  for(let i = 0; i < instructions.length; i++){
    let quantity = instructions[i][0];
    const fromVal = instructions[i][1] - 1;
    const toVal = instructions[i][2] - 1;

    let transportArr = [];

    while (quantity > 0) {
      for (let j = 0; j < stack.length; j++) {
        const stackVal = stack[j][fromVal];
        if (stackVal != " ") {
          if(craneType === "9000") {
            transportArr.push(stackVal);
          } else if (craneType === "9001"){
            transportArr.unshift(stackVal);
          }
          stack[j][fromVal] = " ";
          quantity--;
          break;
        }
      }
    }

    transportArr.forEach(crate => {
      let shelfFound;
      for(let m = stack.length; m > 0; m--){
        if(stack[m - 1][toVal] === " "){
          stack[m - 1][toVal] = crate
          shelfFound = true;
          break
        }
      }
      
      if(!shelfFound){
        let newShelf = []
        for(let q = 0; q < stack[0].length; q++){
          newShelf.push(' ')
        }
        stack.unshift(newShelf)
        
        stack[0][toVal] = crate
      }
    });
  }

  return stack
}

const createMessage = (stack) => {
  let message = "";

  for(let n = 0; n < stack[0].length; n++){
    for(let p = 0; p < stack.length; p++) {
      if(stack[p][n] != " ") {
        message += stack[p][n];
        break
      }
    }
  }

  return message;
}

const part1 = (input) => {
  // part 1
  const inputObj = createInputObj(input);
  const newStack = createNewStack(inputObj, "9000")
  const message = createMessage(newStack);
  return message;
};

const part2 = (input) => {
  // part 2
  const inputObj = createInputObj(input);
  const newStack = createNewStack(inputObj, "9001")
  const message = createMessage(newStack);
  return message;
};

tests([
  test(part1, _TESTinput, "CMZ"),
  test(part1, _REALinput, "VPCDMSLWJ"),
  test(part2, _TESTinput, "MCD"),
  test(part2, _REALinput, "TPWCGNCCG"),
]);
