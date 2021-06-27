const readline = require("readline-sync")
const cases = readline.question();
const isPrime = (n) => {
  if (n <= 1)
    return false;
  for (let i = 2; i < n / 2; i++)
    if (n % i == 0)
      return false;
  return true;
}
for (var i = 0; i < cases; i++) {
  const inp = readline.question()
  for (var j = 0; j < inp; j++) {
      
  }
}
 
     
