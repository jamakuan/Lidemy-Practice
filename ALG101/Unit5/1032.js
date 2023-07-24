/*
Math.sqrt((Math.abs(x1-x2))**2+Math.abs((y1-y2|**2)))
*/

//distance between two point
function dtp(x1, y1, x2, y2) {
	result = Math.abs(x1-x2)**2 + Math.abs(y1-y2)**2
	sqrt = Math.sqrt(result)
	return sqrt.toFixed(2)
	
}

console.log(dtp(3,3,4,4))

function solve(lines){
	let n = Number(lines[0])
	for (let i=1; i<=n; i++) {
		let start = (i-1)*4 + 1 // 找出不同筆資料的開頭
		let x1 = Number(lines[start])
		let y1 = Number(lines[start + 1])
		let x2 = Number(lines[start + 2])
		let y2 = Number(lines[start + 3])
		console.log(distance(x1, y1, x2, y2))
	} 
}

solve(['1', '1', '1', '2', '2'])

function distance(x1, y1, x2, y2) {
	let dis = Math.sqrt(
		abs(x1-x2) * abs(x1-x2) +
		abs(y1-y2) * abs(y1-y2)
	)
	return dis.toFixed(2)

}
function abs(n) {
	if (n < 0) {
		return -n
	}
	return n
}