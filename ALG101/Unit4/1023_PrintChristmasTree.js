/*
N=1

*

N=2

 * 
***
 |


N=3
  *
 ***
*****
  |
  |

N=4
   *
  ***
 *****
*******
   |
   |
   |

規律：
1. 一共有 n 層
2. 第 i 層會有 2i-1個星星
3. 星星會置中
4. 需要 n-1 個空白
5. 會有 n-1 個 |

   */
let n = 4

for(let i = 1; i<=n; i++) {

 console.log(repeat(' ', n-i) + repeat('*', 2*i-1))
  }
for(let i = 1; i<=n-1; i++) {
  console.log(repeat(' ', n-1) + repeat('|', 1))   
}

// 卡在這裡
function printLayer(i, n) {
  let str = repeat(' ', n-i) + repeat('*', 2*i-1) 
  console.log(str)
}

function repeat(str, n) {
  let s = ''
  for (let i = 1; i<=n; i++) {
    s += str
  }
  return s
}


//Ans
// var readline = require('readline');
// var rl = readline.createInterface({
//   input: process.stdin
// });

// var lines = []

// rl.on('line', function (line) {
//   lines.push(line)
// });

// rl.on('close', function() {
//   solve(lines)
// })

// //拿到所有的資料
// function solve(lines) {
//   let n = Number(lines[0])
//   for (let i=1; i<=n; i++) {
//     printTree(i, n)
//   }
//   for(let i=1; i<=n-1; i++) {
//     printBottom(n)
//   }
// }

// function printTree(i, n) {
//   console.log(
//     repeat(' ', n - i) +
//     repeat('*', 2*i-1)
//   )
// }

// function printBottom(n) {
//   console.log(repeat(' ', n - 1) + '|')
// }

// function repeat(str, n) {
//   let result = ''
//   for(let i = 1; i<=n; i++) {
//     result += str
//   }
//   return result
// }
