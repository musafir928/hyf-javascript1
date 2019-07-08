//  16. Show that changing o2 changes o3 (or not) and changing o1 changes o3(or not).

let o1 = { foo: "bar" };
let o2 = { foo: "bar" };
let o3 = o2;
console.log("o1: " + o1.foo);
console.log("o2: " + o2.foo);
console.log("o3: " + o3.foo);

// changing o1 doesn't change o3 
 o1 = { foo: "changedbar" };
 o2 = o3;
console.log("o1: " + o1.foo);
console.log("o2: " + o2.foo);
console.log("o3: " + o3.foo);

//  but changing o2 will change o3 ***
//  because complex object in js when we asign them they will get same address
o1 = { foo: "bar" };
o2 = { foo: "changedbar" };
o3 = o2;
console.log("o1: " + o1.foo);
console.log("o2: " + o2.foo);
console.log("o3: " + o3.foo);

// Does the order that you assign (o3 = o2 or o2 = o3) matter?
// yes, because "=" will design the value of it's right side to the variable on it's left side
// eg: 
o1 = { foo: "bar" };
o2 = { foo: "changedbar" };
o3 = "gg";
o2 = o3;
console.log("o1: " + o1.foo);
console.log("o2: " + o2.foo);
console.log("o3: " + o3.foo);
