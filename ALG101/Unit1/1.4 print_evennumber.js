// 印出 1~100 之間的偶數

// 1. 如何印出 1~100

// for (i = 1; i < 101; i++){
//     console.log(i)
// }

/* 2. 如何判斷某個數是偶數
如果可以整除 2 印出
如果不能，繼續執行
*/

/* pseudo code
for ( i from 1 to 100) do
    if (i mod 2 === 0 ) then
        print i
    end if
end for
*/

for (i = 1; i<101; i++){
    if(i % 2 === 0){
        console.log(i)
    }
}

