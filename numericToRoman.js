function toSimpleRoman(num) {
	console.log('toSimpleRoman(' + num + ')');

  var roman =  {"M" :1000, "D":500, "C":100, "L":50, "X":10, "V":5, "I":1};
  var str = "";

  for (var i of Object.keys(roman) ) {
    var q = Math.floor(num / roman[i]);
    num -= q * roman[i];
    str += i.repeat(q);
  }

  return str;

}

function toCompactRoman(num) {
	console.log('toCompactRoman(' + num + ')');

  var roman =  {"M" :1000, "CM":900, "D":500, "CD":400, "C":100, "XC":90, "L":50, "XL":40, "X":10, "IX":9, "V":5, "IV":4, "I":1};
  var str = "";

  for (var i of Object.keys(roman) ) {
    var q = Math.floor(num / roman[i]);
    num -= q * roman[i];
    str += i.repeat(q);
  }

  return str;

}

var num = 44
console.log('-----------------');
console.log(toSimpleRoman(num));
console.log('-----------------');
console.log(toCompactRoman(num));
console.log('-----------------');


function toArabic(str) {
	console.log('toArabic(' + str + ')')
  if(str == null) return -1;
  
  var result = charToInt(str.charAt(0));
  var pre, curr;

  for(var i = 1; i < str.length; i++){
    curr = charToInt(str.charAt(i));
    pre = charToInt(str.charAt(i-1));
    if(curr <= pre){
      result += curr;
    } else {
      result = result - pre*2 + curr;
    }
  }

  return result;
}

function charToInt(c) {
	var roman =  {"M" :1000, "CM":900, "D":500, "CD":400, "C":100, "XC":90, "L":50, "XL":40, "X":10, "IX":9, "V":5, "IV":4, "I":1};
	
	if (c in roman)
		return roman[c]
	else
		return -1
}

console.log(toArabic('IX'));
console.log('-----------------');
console.log(toArabic('MCMXC'));
console.log('-----------------');

