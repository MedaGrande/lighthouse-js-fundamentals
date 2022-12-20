function howManyHundreds(num) {
  let hundreds = 0;
  
  while (num >= 100) {
    num = num - 100;
    hundreds++;
  }
  return hundreds;
}

console.log(howManyHundreds(-109));
console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);