const tests = readline()
var cases = []
for(i = 0; i< tests; i++){
  cases[i] = readline()
}
for(i = 0; i< tests; i++){
 var resArr = cases[i].split(' ').sort((a, b) => a - b)
 print(resArr[0]*resArr[2])
}
