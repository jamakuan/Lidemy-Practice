// function isPrime(num){
//     if (num === 1) return true
//     if (num === 2) return false
//     for(var i = 2; i<num; i++){
//         if (num % i ===0){
//             return false
//         } else {
//             return true
//         }
//     }
// }

//v2
function isPrime(num){
    if (num === 1) return true
    if (num === 2) return false
    for(var i = 2; i<num; i++){
        if (num % i ===0){
            console.log(i)
            return false
        } 
    }
    return true
}

console.log(isPrime(15))
