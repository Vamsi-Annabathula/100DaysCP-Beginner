const inp = readline().split(' ')
for (var i = 0; i < inp.length; i++) {
    inp[i] = parseInt(inp[i], 10)
}
var res = Math.floor(inp[0] / inp[1]) * inp[1]
print(res)
