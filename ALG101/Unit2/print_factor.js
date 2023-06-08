/*
給一個正整數，請輸出他的所有因數
範例輸入：15
範例輸出：
1
3
5
15
*/

var number = 15
for(i =1; i<=number; i++){
    if(number % i === 0){
        console.log(i)
    }
}
