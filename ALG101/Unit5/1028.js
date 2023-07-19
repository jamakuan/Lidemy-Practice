/*

而生命靈數的計算方式也很簡單，就是把你生日的每一個數字相加

以上面川普的生日 1946-06-14 為例，就是 
1+9+4+6+0+6+1+4=31，而我們把這個結果的每個位數再次做相加：
3+1=4，就得出了生命靈數 4

所以計算過程就是從生日開始，不斷把每一個位數相加，直到剩下一位為止

現在給你一個生日，請你幫忙計算出生命靈數是多少

*/

//function Super_number(str) {
//	let sum = 0
//	let sum2 = 0
//	let sum3 = 0
//	for(i=0; i<= str.length-1; i++){
//		sum+=Number(str[i])
//	} 
//	while(sum != 0 ){
//		sum2+= sum % 10
//		sum = Math.floor(sum / 10)
//	}
//	if(sum2 > 10 ) {
//		while(sum2 != 0) {
//			sum3 += sum2 % 10
//			sum2 = Math.floor(sum2 / 10)
//		}
//		return sum3
//		
//		
//	}else return(sum2)
//}
//
//console.log(Super_number('19971117'))


//Ans
function solve(lines){
	let temp = lines[0].split(' ')
	// 19911117
	let num = Number(temp[0] + temp[1] + temp[2])
	let p = addDigits(num)
	while(p >= 10) {
		p = addDigits(p)
	}
	console.log(p)
}
function addDigits(n) {
	let sum = 0
	while(n != 0) {
		sum += n % 10
		n = Math.floor(n / 10)
	}
	return sum
}
solve(['1991 11 7'])