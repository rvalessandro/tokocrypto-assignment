const rl = require("readline-sync");

function userInput() {
  const strInput = rl.question("Input a single number:\n>");
  return parseInt(strInput);
}

const rotateArr = (arr, n) => {
  let count = 0;
  while (count < n) {
    // Removes end of arr and moves it to beginning of arr
    arr.unshift(arr.pop());
    count++;
  }
  return arr;
};

const main = () => {
  const arr = [9, 10, 11, 12, 13, 14, 15];
  const n = userInput();

  const rotatedArr = rotateArr(arr, n);
  console.log(rotatedArr);
};

main();
