// 填空法

var arr = [1,2,3,4,5]

// for ( let i=0; i<arr.length; i++) {
//     if(isPrime(arr[i])) {
//         console.log("Prime")
//     } else {
//         console.log("Composite")
//     }
// }

// function isPrime(n) {
//     //TODO
//     if (n === 1) return false
//     for (let i=2; i<n; i++) {
//         if (n % i === 0) {
//             return false
//         }
//     }
//     return true 
// }

// 雙重迴圈
for (let i = 0; i<arr.length; i++) {
    let isPrime = true
    if (arr[i] === 1) {
        isPrime = false
    }
    for (let j=2; j<arr[i]; j++) {
        if (arr[i] % j ===0) {
            isPrime = false
            break
        }
    }
    if (isPrime) {
        console.log("Prime")
    } else {
        console.log("Composite")
    }
}
