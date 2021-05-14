var fruits = ["grapes" ,"orange" ,"kivi" , 100 , true , null , [1,2]];
fruits["rare"] = "dragonfruit";
console.log(fruits);

for(var i = 0 ; i < fruits.length ; i++){

    console.log(fruits[i]);
}

console.log(fruits["rare"]);

console.log(typeof fruits);

//var isArray = Array.isArray(fruits)
//console.log(isArray);

//fruits.push("abc") 
//fruits.unshift("xyz" , "abc" );  //shift()
//console.log(fruits);
//console.log(fruits.pop());
//console.log(fruits.shift());

fruits.splice(2,"lemon");
console.log(fruits);

var citrus=fruits.slice(1);//creates new array
console.log(citrus);

fruits. includes("banana",0);