/*

當一個數字是某個正整數的平方時，我們稱這個數為完全平方數

例如說 1、9、16、25、36、49，這些都是完全平方數

今天給你一個數字 N，請你求出 1~N 裡面完全平方數的總和

*/
function perfect_square(n) {
	let result = 0
	for(let i = 1; i<= n; i++){
		let s = Math.floor(Math.sqrt(i))
		if ( i == s**2){
			result += i
		}
	}return result
}

console.log(perfect_square(30))


// Ans
function solve(lines) {
	let n = Number(lines[0])
	let sum = 0
	for(let i=1; i<=n; i++){
		if (isSquare(i)) {
			sum += i
		}
	}
	console.log(sum)
}

function isSquare(n) {
	let r = Math.floor(Math.sqrt(n))
	return r*r === n
}

solve(['55'])