const readline = require("readline-sync");
const cases = readline.question()
var temp
var flag = 0
for (var i = 0; i < cases; i++) {
  inp = readline.question()
  temp = parseInt(inp, 10)
  if (temp % 2020 == 0) {
    flag ++
    console.log("Yes")
  } else if (temp % 2021 == 0) {
    flag ++
    console.log("Yes")
  } else{
    while (temp >= 2020) {
      temp = temp - 2020
      if (temp % 2021 == 0) {
        flag ++
        console.log("Yes")
      }
    }
  }
  if (flag < 1 ){
    console.log("No")
  }
flag = 0
}

