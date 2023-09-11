var arr = [1, 2, 3, 4, 5]
console.log(
	arr
		.filter(function(value) {
			return value > 1
		})
		.map(function(value) {
			return value * 2
		})
)

// use Arrow Function
console.log(
	arr
	.filter(value => value > 1)
	.map(value => value * 2)
)
