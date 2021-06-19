const inp = readline().split(' ').map((e) => { return parseInt(e, 10) })
var res = inp[1]
if (inp[1] >= inp[0]) {
    print(inp[0] - 1)
} else {
    for (var i = 2; i <= inp[0] - inp[1]; i++) {
        res = res + i
    }
    print(res)
}
