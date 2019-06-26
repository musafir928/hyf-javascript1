/* 6. Create a function called vehicle, like before, 
but takes another parameter called age,
so that vehicle("blue", 1, 5) prints 'a blue used car */
vehicle = (color, a, b) => {
    let type;
    if (a === 1) {
        type = "car";
    } else if (a === 2) {
        type = "motorbike";
    } else { type = "bike" };

    let age;
    if (b < 2) {
        age = "new";
    } else {
        age = "used";
    };
    console.log("a " + color + " " + age + " " + type + ".");
};
vehicle("blue", 1, 5);
vehicle("white", 3, 1);

// 7. Make a list of vehicles, you can add "motorbike", "caravan", "bike", or more.
const listOfVehicels = ["car", "motorbike", "bike", "caravan"];

// 8. get the third element from the list
let thirdelement = listOfVehicels[2];
console.log(thirdelement);

// 9. Change the function vehicle to use the list of question 7.
//  So that vehicle("green", 3, 1) prints "a green new bike"

changedVehicleFunction = (color, a, b) => {
    let type = listOfVehicels[a - 1];
    let age;
    if (b < 2) {
        age = "new";
    } else {
        age = "used";
    };
    console.log("a " + color + " " + age + " " + type + ".");
};

changedVehicleFunction("green", 3, 1)
changedVehicleFunction("green", 4, 10)

// 10. Use the list of vehicles to write an advertisement. 
// So that it prints something like: "Amazing Joe's Garage, we service cars,
//  motorbikes, caravans and bikes."

advertisement = (v)=>{
    let text = "Amazing Joe's Garage, we service ";
    for(i=0; i<v.length-2; i++){
        text += (v[i] + "s, ");
    };
    text += (v[v.length-2] + "s and " +v[v.length-1] + "s.");
    console.log(text);
};
advertisement(listOfVehicels);

// 11.  What if you add one more vehicle to the list,
//  can you have that added to the advertisement without 
// changing the code for question 10?
listOfVehicels.push('airplane');
advertisement(listOfVehicels);