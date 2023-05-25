var arr = [1, 2, 3]
console.log('join', arr.join('!'))

// map, 把每一個運算都帶到 function 裡面
var arr = [1, 2, 3]

function double(x) {
    return x*2
}
console.log('map', arr.map(double))

//filter, 回傳 true 會留下 回傳 false 會消失
var arr2 = [1, -1, 3, -2]
console.log('filter', arr2.filter(function(x){
    return x > 0
})
)

//slice, not changing exist array
var arr3 = [0, 1, 2, 3, 4, 5, 6]
console.log('slice', arr3.slice(3))

//splice, change exist array

//sort
var arr4 = [1, 30, 4, 21]
arr4.sort(function(a, b){
    if (a===b) return 0
    if (b > a) return -1
    return 1
})
console.log('sort',arr4)
