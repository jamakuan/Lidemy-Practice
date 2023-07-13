/*

相信應該不少人知道身份證字號有一個公式可以做簡單的驗證，驗證某一組身份證字號是否有問題。

相同的，信用卡號其實也有類似的機制，可以判斷一個卡號是否「合法（Valid）」，但是合法不代表這就是一張真的能夠使用的信用卡，只代表這卡號沒有問題而已。

信用卡的驗證機制很簡單，首先卡號基本上都是 16 碼，只有美國運通是 15 碼。為了節省大家的麻煩，這一題的測試資料卡號皆為 16 碼。

從左邊算起來的第一個數字為發卡行，Master Card 是 5 開頭，Visa 是 4，JCB 則是 3

而前 15 位數經過加權後加總，會得出一個數字，先把這數字除以 10 取餘數，如果結果是 0，那檢查碼就是 0，否則就是用 10 減去之後的結果

權重的部分你可以很簡單這樣記：左邊數起奇數位是 2，偶數位是 1

若是在計算的過程中某一位數加權後的結果比 10 大，那請減去 9

舉例來說，5412-3456-7890-1232這個卡號的第一位是 5，代表這是 MasterCard 的卡

而奇數位加總為：5*2 + 1*2 + 3*2 + 5*2 + 7*2 + 9*2 + 1*2 + 3*2，原本應該是：10 + 2 + 6 + 10 + 14 + 18 + 2 + 6

但前面有說過「如果比 10 大，請減去 9」，所以就是 1(10-9) + 2 + 6 + 1(10-9) + 5(14-9) + 9(18-9) + 2 + 6 = 32

偶數位加總為：4 + 2 + 4 + 6 + 8 + 0 + 2 = 26，乘以 1 之後還是 26

把 32 跟 26 相加，得到 58，58 % 10 = 8，因此檢查碼就是 10-8 = 2

而卡號的第 16 碼也是 2，因此這個卡號是沒有問題的。

現在給你一些信用卡卡號，你可以幫忙判斷是否合法嗎？

Input
輸入為一個信用卡卡號，皆為 16 碼，每 4 碼以 - 做為分隔


Output
若是信用卡不合法，請輸出 INVALID

否之則輸出信用卡的發卡行，只會有 VISA 與MASTER_CARD 這兩種結果

/*
weights[2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1]
5: master Card
4: Visa
3: JCB

check number = sum % 10
last = check number = true
*/
// 合法 = Output visa or Master card


// weight multiple, odd number * 2, even number*1, （if >10）str-9 first then multiple, 
function weight(str) {
	if(str.length < 16 || str.length > 16) return false
	let sum = 0
	let odd = 0
	for(i=0; i<str.length-1; i++){
		if (i % 2 == 0){
			odd = Number(str[i]) * 2
			if(odd >= 10) {
				 sum += odd - 96
				console.log('sum', sum)
			}
			sum += odd
		}
		else if (i % 2 == 1){
			sum += Number(str[i])
			console.log('sum', sum)
		}
	} 
	check_number = sum 
	console.log('check_number', check_number)
	return check_number == str[16]
}
	console.log(weight('5412345678901232'))