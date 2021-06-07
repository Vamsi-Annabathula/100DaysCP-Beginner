const n = readline();
var arr = [];
for (var i = 0; i < n; i++) {
    arr[i] = readline();
}
arr = arr.sort()
var count = 0
arrFirst = arr[0]
arrLast = arr[n - 1]
while (count < arrFirst.length && arrFirst.charAt(count) === arrLast.charAt(count))
    count++;

print(count)
