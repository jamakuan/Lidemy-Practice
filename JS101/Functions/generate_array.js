function generateArray(n){
    var result = []
    for(var i = 1; i<=n; i++){
        result.push(i)
    } 
    return result
}

//generateArray(3) => [1, 2, 3]
//generateArray[10] => [1, 2, 3, .... ,10]

console.log(generateArray(3))
