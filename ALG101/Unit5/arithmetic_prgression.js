// 判斷是否爲等差數列
function isValid(arr) {
	if (arr.length === 0) return true
	for(let i = 1; i<arr.length - 1; i++) {
		if (arr[i] - arr[i-1] !== arr[i+1] - arr[i]) {
			return false
		}
	}
	return true
	
}

console.log('isValid: ',isValid([1, 3, 5, 7, 9]))


/*
arr[1] - arr[0] === arr[2] - arr[1] === arr[3] - arr[2] === arr[4] - arr[3]

*/

// method
/*
1. 先算出 arr[1] - arr[0] 等作公差
2. 判斷 arr[i] - arr[i-1] 是否等於公差
*/

function isValid2(arr) {
	let d = arr[1] - arr[0]
	for(let i=1; i<arr.length; i++) {
		if (arr[i] - arr[i-1] !== d) {
			return false
		}
	}
	return true
}
console.log('isValid2: ',isValid2([1, 3, 5, 7, 11]))
console.log('isValid2: ',isValid2([3]))
	
/*
	edge array
*/