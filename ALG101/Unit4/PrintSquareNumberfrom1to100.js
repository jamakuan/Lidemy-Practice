/*
example:
1
4
9
16
....
*/

// 填空法
for (let i=1; i<=100; i++) {
    if (isSquare(i)) {
        console.log(i)
    }
}

function isSquare(n) {
    let root = Math.floor(Math.sqrt(n))
    return root * root === n

}

/*
如何判斷平方數
開根號 : Math.sqrt(n) 
無條件捨去: Math.floor(n)
*/

// another way
console.log('Another way')

let i=1
while(i*i <= 100) {
    console.log(i*i)
    i++
}