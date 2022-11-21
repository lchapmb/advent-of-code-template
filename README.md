# Advent Of Code

## Table of Contents

- [Advent Of Code](#advent-of-code)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
    - [Setup](#setup)
    - [Starting a Task](#starting-a-task)
    - [Running the solution](#running-the-solution)
    - [Tests](#tests)
  - [Events](#events)
    - [2022](#2022)

## Installation

### Setup

1. Make sure you have installed nodeJs from [NodeJs Download](https://nodejs.org/en/)
2. run the `npm install` command in the root directory to install dependencies
3. [Starting a Task](#starting-a-task)

### Starting a Task

In the root directory create a folder for the year of the event e.g. `/2022`, and then a another folder for each task `/2022/task 1`

your file directory after following the setup steps should look like:

```bash
.vscode/
├── event table task.code-snippets
└── task boiler.code-snippets
2022/
└── task 1
common/
└── common.js
node_modules
.gitignore
package-lock.json
package.json
README.md
```

inside the task folder, you should create a `main.js` file
```bash
2022/
└── task 1/
    └── main.js
```

Inside this file start typing `advent of code task` this should show the user snippet

pressing enter will auto enter the code, where you start by entering the event year and event task number e.g. `2022` and `1`. head to [Running the solution](#running-the-solution)

### Running the solution
to run the file click `Terminal` then `New Terminal` go to the location of the file e.g. `cd '.\2022\task 1\'` and type `node .\main.js` to run the file using the nodeJs engine.

### Tests
at the bottom of the file you will see a tests function, when you run the file you can see if the function given a test input actually works, you will have to run the file in the terminal as in [Running the solution](#running-the-solution)

## Events

### [2022](https://adventofcode.com/2021)

| Task | Part 1 | Part 2 |
| :--: | :----: | :----: |
