var arr = [1, 2, 3, 4]
var [first, ...rest] = arr

console.log(rest)

//
var obj = {
	a: 1, 
	b: 2, 
	c: 3
}

var {a, ...obj2} = obj

console.log(obj2)

// 
var obj = {
	a: 1,
	b: 2
}

var obj2 = {
	...obj,
	c: 3
}

console.log(a, obj)
