// abbba = abbba

function ad(str){
	let result = ''
	for(i = str.length-1; i >= 0; i--) {
		result += str[i]
		
	} if(result == str) {
		return true
	}else return false
}
console.log(ad('abcbfa'))


// ans
function solve(lines) {
	let str = lines[0]
	if (reverse(str) === str) {
		console.log('True')
	} else {
		console.log('False')
	}
}

function reverse(str){
	let result = ''
	for(let i=str.length - 1; i>= 0; i--) {
		result += str[i]
	}
	return result
} 

solve(['abba'])