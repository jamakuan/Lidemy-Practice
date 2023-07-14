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

