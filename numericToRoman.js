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

console.log(toSimpleRoman(44));