var a = 'abc'.toUppser

console.log(a)


//find index in a word, can use this method to find if the word is in the string
var str = 'hey hello world yoyooyoyo'
var index = str.indexOf('hello')
console.log(index) //if not appear, return -1 

//replace
var str ='hey helllo world yoyoyo'.replace(/y/g,'!!!')
console.log(str)

//split, return array
var str = 'hey hello world yoyoyo'
console.log(str.split(''))
console.log(str.split(' '))
console.log(str.length)
