/*

水仙花數（Narcissistic number）又被稱為自戀數或者是阿姆斯壯數，太數學的定義我們就不講了，詳情可以查維基百科。

比較白話的定義為：「一個 n 位數的數字，每一個數字的 n 次方加總等於自身」

例如說 153 是三位數，而 1^3 + 5^3 + 3^3 = 153，所以它就是一個水仙花數

而 1634 是四位數，而 1^4 + 6^4 + 3^4 + 4^4 = 1634，所以它也是一個水仙花數

而數字 0~9 也都是水仙花數，因為一位數 n 的 1 次方一定會等於自己

現在給你一個範圍 n 到 m，請你求出這範圍之中的水仙花數有哪些


Input
輸入為兩個用空白分割的正整數 N 與 M, 1<=N<=M<=10^6

Output
請由小到大輸出從 N 到 M（包含 N 與 M）有哪些水仙花數，每個數字以空行分隔
*/

/* 先判斷 N～M 的範圍，from 1 to 1000000
1~9
10~99
100~999
1000~9999
10000~99999
100000~999999
*/

// try to write a simple narcissistic number multiple
let n = '153'
let m = '2000'
let s = 0
// for(i=Number[n]; i<=Number[m]; i++){
//     if(n-10 < 0){
//         s+=Number(n[0])**1
//     } 
//     else if(n-100 < 0){
//         for(i = 0; i<=1; i++) {
//             s+Number(n[i])**2
//         }
//     }
//     else if (n-1000 < 0){
//         for(i=0; i<=2; i++) {
//             s+=Number(n[i])**3
//         }
//     }
//     else if (n-10000 < 0){
//         for (i = 0; i<=3; i++)
//             s+=Number(n[i])**4
//     }
    
// }
// if(s = n){
//     console.log(s)
// }


// for(i=153; i=2000; i++){
//     for(i = 0; i=2; i++){
//         s+=(Number(n[i]))**3
//     }
//     if(s=n){
//         console.log(s)
//     } else (s = 0)
// }

/*
難點：
1. 如何判斷幾位數
2. 如何取出各個數字
*/

// 回傳數字幾位數
// function digits(n) {
//     if( 0 <= n && n < 10) {
//         return 1
//     } else if   (10 <= n && n < 100) {
//         return 2
//     } else if ( 100 <= n && n<= 1000) {
//         return 3
//     } else if ( 1000 <= n && n < 10000) {
//         return 4
//     } else (5)

// }

// method 2 
function digitsCount(n) {
    if (n===0) return 1 
    let result = 0
    while(n != 0) {
        n = Math.floor(n / 10)
        result++ 
    }
    return result
}

console.log(digitsCount(15))

// 取出各個數字

function isNarcissistic(n) {
    // 幾位數
    let digits = digitsCount(n)
    let sum = 0
    let m = n
    while(m != 0) {
        let num = m % 10 
        sum += num**digits
        m = Math.floor(m / 10)
    }
    
    // 可簡化成
    // return sum === n
    if (sum === n ) {
        return true
    } else {
        return false
    }
}

console.log(isNarcissistic(153))