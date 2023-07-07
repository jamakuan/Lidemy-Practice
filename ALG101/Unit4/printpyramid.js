/*
n = 1
*

n = 2
_*_
***

n = 3
__*__
_***_
*****


 規律
 1. 一共有 n 層
 2. 第 i 層會有 2i-1 個星星
 星星會置中
 需要 n-i 個空白

*/
let n=5

for(let i=1; i<=n; i++) {
    printLayer(i, n)
}

function printLayer(i,n) {
    // 空白 + 星星
    let str = repeat(' ', n-i)+ repeat('*', 2*i-1)
    console.log(str)
}

function repeat(str, n) {
    let s = ''
    for (let i=1; i<=n; i++) {
        s += str
    }
    return s
}
