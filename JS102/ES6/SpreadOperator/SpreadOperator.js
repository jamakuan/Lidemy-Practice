var arr = [1, 2, 3]
var arr2 = [4, 5, 6, ...arr]

console.log(arr2)

function add(a, b, c) {
	return a + b + c
}

var arr=[1, 2, 3]
console.log(add(...arr))

var obj1 = {
	a: 1, 
	b: 2
}

var obj2 = {
	z: 1
}

var obj3 = {
	...obj1, 
	c: 3
}

console.log(obj3)

//
var nestedArray = [4]
var arr = [1, 2, 3, nestedArray]
console.log('arr:', arr)
var arr2 = [... arr]
console.log('arr2:', arr2)
console.log(arr[3] === arr2[3])

// 記憶體位置不同
var obj = {
	a: 1, 
	b: 2
}

var obj = {
	...obj
}

console.log(obj, obj2, obj === obj2)
