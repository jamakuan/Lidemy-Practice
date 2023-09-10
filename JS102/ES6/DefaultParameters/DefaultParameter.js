function repeat(str='hello', times = 5 ) {
	return str.repeat(times)
}

console.log(repeat('abt'))


const obj = {
	b: 2
}

const {a = 123, b = 'hello'} = obj

console.log(a, b)
