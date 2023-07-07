for (let i=1; i<=100; i++) {
    if (isSquare(i)) {
        console.log(i)
    }
}

/*
如何判斷平方數

開根號：Math.sqrt(n)
無條件捨去：Math.floor(n)
*/

function isSquare(n) {
    let root = Math.floor(Math.sqrt(n))
    return root * root === n

}

/*
another thinking
Print the number of squares over 100.
*/

let i = 1
while(i*i <= 100) {
    console.log(i*i)
    i++
}
