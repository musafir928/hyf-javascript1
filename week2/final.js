// 1.Array manipulation
let myArray = [ 5 , 3, 2, 9, 19, 20, 3, 5];
let testArray = [3,3,3,3]; //just for a test
const ArrayM = function(a){
    for(i=a.length; i>=0; i--){
        if (a[i]==3){
          a.splice(i,1);
        }
    }
    a.push(100);
    return a;
}
console.log(ArrayM(myArray));
console.log(ArrayM(testArray));
/* ! important : positive loop will appear a problem: 
 when there is two 3s come together (one after one),
 the code can't delete the next one( because the index of items have been changed after delete )
so, use reverse loop */



// 2.Object Fun
let myPets = [
    {
        sort: "dog",
        name: "doggy",
        weight: " 5kg",
        sound: ()=>{
            console.log("sound : hao ");
        },
    },
    {
        sort: "cat",
        name: "catty",
        weight: " 2kg",
        sound: ()=>{
            console.log("sound : miao ");
        },
    },
    {
        sort: "bird",
        name: "angrybird",
        weight: " 0.5kg",
        sound : ()=> {
            console.log("sound : haaaaa!!!!! ")
        },
    },
] ;
myPets.forEach(element => {
   console.log("name : " + element.name);
   element.sound();
});
    

// 3.String manipulation
let myString = 'Hello, it is a good day, I eat good bananas, I do not like the word good';
let deleteGood = (c)=>{
let extra = /good/gi; // global ignore?
console.log(c.replace(extra,''));
};
deleteGood(myString);


// 4.Conditionals
var fizz = (d,e)=>{
    for(d; d>0; d--){
        if(d%3===0){
            console.log(d);
        };
    };
    for(e; e>0; e--){
        e%3===0 ?  console.log(e) : delete(e);
    };
};
fizz(200,200);
