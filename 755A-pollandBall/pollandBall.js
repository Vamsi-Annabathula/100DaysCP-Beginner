const n = readline();
var i = 1
while (true) {
    if (!isPrime((n * i) + 1)) {
        print(i)
        break
    }
    i++
}
function isPrime(n) {
    var i, flag = true;
    if (n == 2) {return true}
    else{
    for(i = 2; i <= n - 1; i++)
        if (n % i == 0) {
            flag = false;
            break;
        }
        return flag
    }
}
