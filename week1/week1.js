//Write a console.log statement saying "Hello World!" for each language that you know.
console.log('Hello, world!')  //English
console.log('ياخشىمۇسەن ، دۇنيا!')  //Uyghur
console.log('مرحبا، عالم!') //Arabic
console.log('Merhaba , dünya!')  //Turkish
console.log('Hallo, wereld!')  //Nederlands

//2. solutions for syntaxError:(4)
console.log("I'm awesome"); 
console.log('I\'m awesome'); 
console.log('I'+String.fromCharCode(39)+'m awesome'); 
console.log('I'+"'"+'m awesome');

// 3. Declare a variable x and initialize it with an integer:
var x3;
console.log("the value of variable x3 is : undefined , because it's empty now. ");
console.log(x3);
x3 = 101;
console.log("the value of variable x3 is now : a integer" );
console.log(x3);
console.log(typeof(x3));

// 4. Declare a variable y and assign a string to it.
var y4 = "first step";
console.log("the value of variable y4 is : a String ");
console.log(y4);
var y4 = "last String ";
console.log("the value of variable y4 will be changed to:  a new String ");
console.log(y4);

// 5.  How do you round the number 7.25, to the nearest integer (i.e., whole number) ?
// the answer is : JavaScript | Math.round( )
var z5=7.25;
console.log(z5);
var a5 = Math.round(z5);
console.log(a5);
//5.5 So now we have z and a find a way to compare the two values and store the highest of the two in a new variable
var y5 = Math.max(z5,a5);
console.log(y5);

//6. Arrays
var cars = [];
console.log("the value of my array is: 0, because it's still empty");
console.log(cars);
var myFavoriteAnimals = ["cat","lamb","cow"];
console.log(myFavoriteAnimals);
myFavoriteAnimals.push("baby cow");
console.log(myFavoriteAnimals);

//7. More strings
let myString = "this is a test";
let a7 = myString.length;
console.log(a7);

//8.  Write a program that checks the types of two variables and prints out SAME TYPE if they are the same type.
let a8 = 100;
let b8 = "hello!"
let c8 = ["car","bike","trein"];
let d8 = true;
let e8 = 99;
let f8 = false;
console.log("the value of a8 is:"+a8);
console.log("the value of b8 is:"+b8);
console.log("the value of c8 is:"+c8);
console.log("the value of d8 is:"+d8);
console.log("the value of e8 is:"+e8);
console.log("the value of f8 is:"+f8);
//8.3
console.log("the value of a8 is: number");
console.log("the value of b8 is: String");
console.log("the value of c8 is: Array");
console.log("the value of d8 is: boolean");
console.log("the value of e8 is: number");
console.log("the value of f8 is: bolean");
//the true type of each variable
console.log("type of a8 is: "+typeof(a8));
console.log("type of b8 is: "+typeof(b8));
console.log("type of c8 is: "+typeof(c8));
console.log("type of d8 is: "+typeof(d8));
console.log("type of e8 is: "+typeof(e8));
console.log("type of f8 is: "+typeof(f8));
//compare
//a8 & e8 
if (typeof(a8)==typeof(e8)){
    console.log("a8 and e8 are : same type");
}else{
    console.log("a8 and e8 are : not  same type");
}
//b8 & d8
if (typeof(b8)==typeof(d8)){
    console.log("b8 and d8 are : same type");
}else{
    console.log("b8 and d8 are : not same type");
}

// 9 .  If x equals 7, and the only other statement is x = x % 3, what would be the new value of x?
let x9 = 7;
x9 = x9%3; // remainder of 7 devided by 3 is : 1
console.log(x9);
console.log(9%3); // remainder of 9 devided by 3 is : 0
console.log(5%3); //remainder of 5 devided by 3 is : 2

// 10 . Write a program to answer the following questions:
// 10.1 Can you store multiple types in an array? Numbers and strings? Make an example that illustrates your answer.
// yes, for eg:
var a10 = ["adil",33,"asiye",7,"fatime",false];
console.log("array a10's length is : " + a10.length);
console.log(a10);

// 10.2 Can you compare infinities? (Not in Eyad's world) - does 6/0 === 10/0? How can you test this?
console.log("6/0 is",6/0);
console.log("10/0 is",10/0);
if (6/0 === 10/0){
    console.log("6/0 & 10/0 are same type and same value, so , yes!")
}else{
    console.log("No!")
}