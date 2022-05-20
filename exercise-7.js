function sumUntil(maxValue) {
  let numbers = [];
  let baseNum = 1;

  // scrittura dei numeri dentro l'array
  do {
    numbers.push(baseNum);
    baseNum++;
  } while (baseNum <= maxValue);

  // somma dei numeri
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}
console.log(numbers);

console.log(sumUntil(5));
