function calc(...args) {
  let result;
  let operand = 0;
  let operation = 1;
  let finalArr = [];
  let temp = 0;
  while (operand < args.length) {
    //throw error if one of the operands is not a number
    if (typeof args[operand] !== "number") {
      throw new Error("Invalid input type");
    }

    //check if the one of the operand have a value greater than 1000
    if (
      args[operand] > 1000 &&
      (args[operation] === "+" || args[operation] === "-")
    ) {
      args[operand] = 0;
    } else if (
      args[operand] > 1000 &&
      (args[operation] === "*" || args[operation] === "/")
    ) {
      args[operand] = 1;
    }

    // check if we reach the last element
    if (operand === args.length - 1) {
      finalArr.push(args[operand]);
      break;
    }

    //caqlculator operations
    if (args[operation] === "*") {
      temp = args[operand] * args[operand + 2];
      args[operation + 1] = temp;
    } else if (args[operation] === "/") {
      if (args[operand + 2] === 0) {
        throw new Error("Division by zero");
      }
      temp = args[operand] / args[operand + 2];
      args[operation + 1] = temp;
    } else if (args[operation] === "+" || args[operation] === "-") {
      finalArr.push(args[operand]);
      finalArr.push(args[operation]);
    } else {
      throw new Error("Invalid operator");
    }

    operation += 2;
    operand += 2;
  }
  operand = 0;
  operation = 1;
  while (operand < finalArr.length - 1) {
    if (finalArr[operation] === "+") {
      temp = finalArr[operand] + finalArr[operand + 2];
    } else {
      temp = finalArr[operand] - finalArr[operand + 2];
    }
    finalArr[operand + 2] = temp;
    operand += 2;
    operation += 2;
  }
  result = finalArr[finalArr.length - 1];
  return result;
}

module.exports = calc;
