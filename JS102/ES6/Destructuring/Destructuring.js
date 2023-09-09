const arr = [1, 2, 3, 4]

var [first, second, third, fourth] = [1, 2, 3, 4]

console.log(second, third)

//

const obj = {
	name: 'nick', 
	age: 30, 
	address: 'taiwan',
	family: {
		father: 'hello'
	}
}

/*
var name = obj.name
var age = obj.age
var address = obj.address
*/

var {name, age, address, family} = obj
var {father} = family
console.log(address, father)

//
function test({a,b}) {
	console.log(a)
}

test({
	a: 1,
	b: 2
})

console.log(test)
