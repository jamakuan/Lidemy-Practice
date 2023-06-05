/*
給一個陣列 arr，裡面全都包含了數字（整數），請輸出陣列中的最大值

範例輸入：[1, 2, 3]

範例輸出：3
*/

/*
pseudo code  比大小
var int =[]
var bigger = 0
for(i from 0 to n-1, i++){
    if (int[i+1] > int[i]){
        bigger = int[i+1]
    }
}
console.log(bigger)
*/

var int = [20, 3, 5, 6, 4]
var bigger = int[0]
for (i = 0; i < int.length; i++){
    if (int[i] > bigger){
        bigger = int[0]
    }
}
console.log(bigger)


//Answer

