/*
給你兩個數字以及一個運算符號（只會是加減乘除其中一個），請你求出計算結果

為了方便起見，保證數字以及除法出來的結果都會是整數

數字 A （0 <= A <= 10000)
運算符號 （加法：+, 減法：-, 乘法：*, 除法：\）
數字 B （0 <= B <= 10000)

*/

function solve(lines){
	let temp = lines[0].split(' ')
	let a = Number(temp[0])
	let b = Number(temp[2])
	
	if (temp[1] === '+') {
		console.log(a + b)
	} else if (temp[1] === '-') {
		console.log(a - b)
	} else if (temp[1] === '*') {
		console.log (a * b) 
	} else  {
		console.log(a / b)
	}
}

solve(['4 + 4'])