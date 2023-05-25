//call by value
function swap(a, b) {
    var temp = a;
    a = b;
    b = temp;
  }
  
  var x = 10;
  var y = 20;
  swap(x, y);
  console.log(x, y) // 10, 20

//call by reference
function add(obj){
    obj.number++
}

var o = {number: 10}
add(o)
console.log(o.number) //11

//call by sharing
function add(obj){
    //讓 obj 變成一個新的 object
    obj ={
        number: obj.number + 1
    }
}

var o = {number: 10}
add(o)
console.log(o.number) // 10