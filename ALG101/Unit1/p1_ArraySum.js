/*

Question: 
給一個陣列 arr，裡面全都包含了數字（整數），請輸出陣列加總的結果（總和保證不超過 int 範圍）
範例輸入：[1, 2, 3]
範例輸出：6

 */

/*
pseudo code
var int = []
function sum(int){
    for(i=0; int.length; i++){
        var init = 0
        init = init + int[i]
    }
}
*/

var int = [1, 2, 3, 4]
var init = 0
for (i = 0; i < int.length; i++){
    init += int[i]
}
console.log(init)
