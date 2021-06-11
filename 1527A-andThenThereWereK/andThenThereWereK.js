const cases = readline()
var bit = []
for (var i = 0; i < cases; i++) {
    bit[i] = readline()
}
var i = 0
while (i < bit.length) {
    var res = bit[i]
    var last = 0
    for(var j=0; j<30; ++j) {
        if ((res >> j)& 1 === 1) {
            last = j
        }
    }
    print((1<<last)-1)
    i++
}
