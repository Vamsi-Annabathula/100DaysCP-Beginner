const str = readline()
var zeros = 0
var ones = 0
for(var i = 0; i< str.length; i++){
  if(str[i] === '0'){
    ones = 0
    zeros = zeros + 1
    if(zeros > 6 ){
      print("YES")
      break
    }
  }
  if(str[i] === '1'){
    zeros = 0
    ones = ones + 1
   if(ones > 6 ){
      print("YES")
      break
    }
  }
}
if(!(zeros > 6) && !(ones > 6)){
print("NO")
}
