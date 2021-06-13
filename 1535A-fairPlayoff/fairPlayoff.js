const cases = readline();
var arr = []
for(var i=0; i< cases; i++){
  var ele = readline().split(" ")
  if(Math.max(ele[0], ele[1]) > Math.min(ele[2], ele[3])){
    print("YES")
  }
  else{
    print("NO")
  }
}
