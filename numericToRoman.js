function toSimpleRoman(num) {
	console.log('toSimpleRoman (' + num + ')');

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
	console.log('toCompactRoman (' + num + ')');

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