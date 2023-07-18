/*
Caesar cipher
凱薩加密是一個非常古老而且經典的加密演算法，給定一個數字 N，把每一個英文字母都往右移 N 個，就是加密完的密文

舉例來說，假設原文是 apple，而 N=1，那加密完後的結果就是：bqqmf

因為 a 往右移一位是 b，p 往右移一位是 q，以此類推

若是往右移之後超出 z，那就從 a 再開始。

例如說 xray 搭配 N=3，會變成：audb，因為 x 往右移兩位是 z，在右移一位就變成 a 了，以此類推

現在給你原文以及 N，請你輸出凱薩加密完之後的結果


Input
第一行爲一個數字 N，代表要往右移的位數，0 <= N <= 100
第二行爲一個字串 S，1 <= length(S) <= 1000，代表原文，只會由小寫字母組成

Output
*/


function CC(n, str){
	let new_string = ''
	result = ''
	for(i = 0; i < n; i++) {
		new_string[i] = str[i].charCodeAt() + n
		result += String.fromCharCode(new_string[i])
	}
	return result
}

console.log(10, 'xray')
