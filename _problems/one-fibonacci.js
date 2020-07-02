const rl = require("readline-sync");

const userInput = () => {
  const strInput = rl.question("Input a single number:\n>");
  return parseInt(strInput);
};

const isPrime = (n) => {
  // Angka 1 dianggap bilangan prima
  if (n <= 1) return true;

  for (let i = 2; i < n; i++) {
    if (n % i == 0) return false;
  }

  return true;
};

const fibonacci = (max) => {
  let n1 = 0;
  let n2 = 1;
  let sumPrimeFibonacci = 0;

  while (n1 <= max) {
    if (isPrime(n1)) {
      sumPrimeFibonacci += n1;
    }
    const temp = n1;
    n1 += n2;
    n2 = temp;
  }

  return sumPrimeFibonacci;
};

const main = () => {
  const n = userInput();
  const sumPrimeFibonacci = fibonacci(n);
  console.log(sumPrimeFibonacci);
};

main();
