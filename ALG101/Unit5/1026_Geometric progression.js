// 判斷等比數列
// example: [1, 2, 4, 6, 8]

function isvalid(arr) {
	for(let i=1; i < arr.length -1; i++) {
		if (arr[i] / arr[i-1] !== arr[i+1] / arr[i]) {
			return false
		}
	}
	return true
}

console.log('isvalid: ',isvalid([1,3,4,10,16]))

function isvalid2(arr) {
	let d = arr[1] / arr[0]
	for(let i = 1; i<arr.length; i++) {
		if (arr[i] / arr[i-1] !== d ) {
			return false
		}
	}
	return true
}

console.log(isvalid2([1,3,4,10,16]))