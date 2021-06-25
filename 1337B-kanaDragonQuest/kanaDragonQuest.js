const cases = readline()
for( var i = 0; i < cases ; i++){
  var inp = readline().split(' ').map(e => parseInt(e, 10))
  while(inp[1] > 0){
    var temp = Math.floor(inp[0]/2) + 10
    if(temp < inp[0]){
      inp[0] = temp
    }
    inp[1]--
  }
  if(inp[0]< 0){
    print("Yes")
    break
  }
  inp[0] = Math.round(inp[0] - 10 * inp[2])
  if(inp[0]<= 0){
    print("Yes")
  }else{
    print("No")
  }
}
