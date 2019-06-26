let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString); // 1.1 Add the string to your file and log it.
console.log(myString.length); //  1.2 Log the length of myString.
let removeItem = /,/gi;
console.log(myString.replace(removeItem, " ")); // 1.3 Remove the comma and replace it with space