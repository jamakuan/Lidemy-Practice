/*
- Question
    - 給一個字串 str，請輸出 str 反過來的結果
    - example:
        - input: hello 
        - output: HELLO 
    - PS. 可以用 str[i] 取得第 i 個字，例如說 str="abc"，str[0] 就是 'a' 
*/

/*
pseudo code
var string=''
for(i = 0; i < string.length; i++){
    if (string[i].charCodeAt() > 90){
        string[i] = string[i].toUpperCase()
    }else (string[i].toLowerCase())
}
console.log(string)
*/

var string = 'hEllo'
var string_output = ''
for (i = 0; i < string.length; i++){
    if(string[i].charCodeAt() > 90){
        string_output += string[i].toUpperCase()
    }else{
        string_output += string[i].toLowerCase()
    }
}

console.log(string_output)
