const readline = require("readline-sync")
const dummy = readline.question()
const inp = readline.question()
var toggleOrder
var res = ''
if (inp.length < 3) {
  res = inp
} else if (inp.length % 2 === 0) {
  toggleOrder = false
  res = inp[0]
  for (var i = 1; i < inp.length; i++) {
    if(toggleOrder){
      res = inp[i].concat(res)
    }else{
      res = res.concat(inp[i])
    }
    toggleOrder = !toggleOrder
  }
}else{
  toggleOrder = true
  res = inp[0]
  for (var i = 1; i < inp.length; i++) {
    if(toggleOrder){
      res = inp[i].concat(res)
    }else{
      res = res.concat(inp[i])
    }
    toggleOrder = !toggleOrder
  }
}
console.log(res)
