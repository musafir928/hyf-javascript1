//  Create an object and a function that takes the object as a parameter and prints out all of its properties and values.
let myBook = {
    Title: "The Sun",
    Year: 1965,
    Pages: 450,
    By: "Unknown"
};
printObject = (a) => {
    for (let property in a) {
        console.log(property + " : " + a[property])
    };
};
printObject(myBook);

print2 = (targetObject) =>{
    for (a of Object.entries(targetObject)) {
        console.log(a[0] + " : " +a[1]); 
    };
};
print2(myBook);
