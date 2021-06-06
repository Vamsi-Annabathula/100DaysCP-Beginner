const children = readline()
let check = 1
let res = ''
let inc = children - 2
while (check < children) {
    res = res + `${children - inc} `
    check++;
    inc = inc - check < 0 ? children - check + inc : inc - check
}
print(res)