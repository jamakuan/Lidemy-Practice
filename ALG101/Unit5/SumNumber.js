function addDigits(n) {
	if (n < 0) {
		n = -n 
	}
	let sum = 0
	while(n != 0) {
		sum += n % 10
		n = Math.floor(n / 10)
	}
	return sum
}

console.log(addDigits(1)) // 1
console.log(addDigits(0)) // 0
console.log(addDigits(10)) // 1 
console.log(addDigits(99)) // 18
console.log(addDigits(3412)) // 10
console.log(addDigits(5566)) //  2
console.log(addDigits(-34)) //7


function addDigits2(n) {
	if(n < 0){
		n = -n
	}
	n = n + ''
	let sum = 0
	for(let i=0; i<n.length; i++) {
		sum += Number(n[i])
	}
	return sum
}
console.log(addDigits2(1)) // 1
console.log(addDigits2(0)) // 0
console.log(addDigits2(10)) // 1 
console.log(addDigits2(99)) // 18
console.log(addDigits2(3412)) // 10
console.log(addDigits2(5566)) //  22
console.log(addDigits2(-34)) //7