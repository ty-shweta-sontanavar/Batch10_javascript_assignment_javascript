var str = "Please  where 'locate' occurs!";
var pos = str.indexOf("locate");
console.log(pos);

//var str1="locate";
//var pos1=str1.lastIndexOf("locate");
//console.log(pos1);

var pos1=str.search("locate");
console.log(pos1);

var string="shweta";
console.log(string.charAt(0));

var msg1="good";
var msg2=msg1.concat("morning");
console.log(msg2);

var msg="welcome to technoelevate";
var word=msg.split("l");
console.log(word);

var text="excellent";
var text2=text.substring(0,2);
console.log(text2);

var myString="JAVASCRIPT";
myString=myString.toLowerCase();
console.log(myString);

var myString="javascript";
myString=myString.toUpperCase();
console.log(myString);

var str="welcome to technoelevate";
var n=str.includes("technoelevate");
console.log(n);

var str="good moring";
console.log(str.repeat(2));