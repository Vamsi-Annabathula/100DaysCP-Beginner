const bidders = readline()
  var arr = readline().split(" ")
  const len = arr.length
  var firstMax = 0
  var secondMax = 0
  for (var j = 0; j < arr.length; j++) {
    if(firstMax < parseInt(arr[j], 10)){
      secondMax = firstMax
      firstMax = arr[j]
    }
    if(firstMax > parseInt(arr[j], 10) && secondMax < parseInt(arr[j], 10))
    secondMax = arr[j]
  }
  print(`${arr.indexOf(firstMax) + 1} ${secondMax}`)
