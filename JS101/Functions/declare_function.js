function transform(arr, transformFunction) {
    var result = []
    for (var i=0; i<arr.length; i++) {
        result.push(transformFunction(arr[i]))  
      }
      return result
}

function double(x){
    return x*2
}

//transform(1, 2, 3), double(e) => (2, 4, 6)

console.log(
    transform([1,2,3], double)
)

//Anonymous function

function transform(arr, transformFunction) {
    var result = []
    for (var i=0; i<arr.length; i++) {
        result.push(transformFunction(arr[i]))  
      }
      return result
}

console.log(
    transform([1,2,3], function(x){
        return x*3
    })
)