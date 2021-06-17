const isSorted = (arr, temp) => {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] != temp[i]) {
            return false
        }
    }
    return true
}

const cases = readline();
for (var i = 0; i < cases; i++) {
    var size = readline()
    var inp = readline()
    var arr = inp.split(' ')
    var temp = inp.split(' ')
    temp = temp.sort((a, b) => { return a - b })
    var res = 2
    if (isSorted(arr, temp))
        res = 0;
    else if (arr[0] == 1 || arr[size - 1] == size)
        res = 1;
    else if (arr[0] == size && arr[size - 1] == 1)
        res = 3;
    print(res)
}
