// Write some code to test two arrays for equality 
// using == and ===. Test the following:
let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;
// What do you think will happen with x == y, x === y and z == y and z == x?
// I think all this returns true.
console.log(x == y);
console.log(z == y);  // true
console.log(x == z);
console.log(x === y);
console.log(z === y); // true
console.log(x === z);
// only two are return true, the reason was: x and y have the same value and the same  type,
// but different adresses! Because of z=y; line, z and y get same : value, adress and type.
// And array don't have a bulit in compare operation, so, to compare arrays we have to write a function:

const compareArrays = (a,b) =>{
    console.log(a.length===b.length &&  a.every((item,index) => item === b[index]));
};
compareArrays(x,y);
compareArrays(x,z);
compareArrays(z,y);

// for test :
compareArrays([1,2,3],y); // true
compareArrays([1,2,4],y); // false