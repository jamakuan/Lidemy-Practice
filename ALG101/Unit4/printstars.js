/* 

*/

var number = 4
for(i=0; i<=number; i++) {
    printStar(i)
}

function printStar(n) {
    let s = ''
    for(let i=1; i<=n; i++) {
        s+= '*'
    }
    console.log(s)
}

console.log('') // split two methods
// Origin
for (i=0; i<=number; i++) {
    let s = ''
    for(let j=1; j<=i; j++) {
        s+= '*'
    }
    console.log(s)
}
