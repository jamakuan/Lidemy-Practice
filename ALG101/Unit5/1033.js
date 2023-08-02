// 在一個二維的坐標系裡面給你一大堆點的座標，請你求出距離最近的兩個點

/*

第一行爲一個數字 N, 2 <= N <= 100, 代表有幾組座標，每一組座標以空格分隔
每一個組座標都會有兩個空白分開的數字 x1 與 y1, range: -100 <= x1, y1 <= 100	

請輸出距離最近的兩個點，若是有兩組以上，請輸出最先出現在測資的那組

輸出的時候請先輸出 x 比較小的那個點，若是 x 相同，請先輸出 y 比較小的那個點，若是 x 相同，請先輸出 x 較小的那個點，若是 x 相同，請輸出 y 比較小的那個點

input
N
Coordinates: 
x = [x1, x2, y3, y4, y5,...yn]
y = [y1, y2, y3, y4, y5,...yn]

output
x1 y1
x2 y2
*/

// input to x_array, y_array

function TransToArray_x(n){
	let x_array = []
	for(i = 0; i<=n-1; i++){
		x_array[i] = Math.floor(Math.random()*100)
	}
	return x_array
}
function TransToArray_y(n){
	let y_array = []
	for(i = 0; i<=n-1; i++){
		y_array[i] = Math.floor(Math.random()*100)
	}
	return y_array
}

let n = 4
let x = [2, 1, 10, 100 ]
let y = [2, 1, 10, 100]
let x1 = [2, 1, 1, 1]
let y1 = [3, 3, 2, 1]


function closeone(n, x, y) {
	let d = []
	let d1 = - Math.sqrt(20000)
	let d2 = - Math.sqrt(20000)
	let x_min = Infinity
	let x_min2 = Infinity
	// 找出 d[] 爲每一點之間距離的 array
	for(i = 0; i < n-1; i++ ){
		d[i] = Math.sqrt((Math.abs(x[i]-x[i+1]))**2 + (Math.abs(y[i]-y[i+1]))**2)
		d[i] = d[i].toFixed(2)
	}
	
	// 找出 d[i] 中的最小值
	for (i = 0; i < n-1; i++) {
		if (d[i] < x_min) {
			x_min2 = x_min
			x_min = d[i]
		}
	}
	// d[i] 的最小值等於第一個點跟第二個點的距離，index = x[i], [i+1]，因此output x[i], x[i+1], y[i], y[i+1]
	for(i = 0; i < n-1; i++){
		if (x_min == d[i]) {
			return [x[i], y[i], x[i+1], y[i+1]]
		}
	}
}
	
		
console.log(closeone(4, x, y))
console.log(closeone(4, x1, y1))

// Ans

function solve(lines) {
	let n = Number(lines[0])
	let dots = []
	for(let i=1; i<lines.length; i++) {
		let temp = lines[i].split(' ')
		dots.push({
			x: Number(temp[0]), 
			y: Number(temp[1])
		})
	}
	console.log(dots)
}

function distance(x1, y1, x2, y2) {
	let dis = Math.sqrt(
		abs(x1-x2) * abs(x1-x2) + 
		abs(y1-y2) * abs(y1-y2) 
	)
	return dis
}

function abs(n) {
	if(n < 0 ){
		return -n
	}return n
}