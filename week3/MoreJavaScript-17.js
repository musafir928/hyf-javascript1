//  What does the following code return? (And why?)
//  will retrun String

let bar = 42;
console.log(typeof typeof bar);
// because from right to left <typeof bar> returns number,
//  and the next step is <typeof number> retruns string
//  console.log(typeof typeof bar); = console.log(typeof b) and b = typeof bar 