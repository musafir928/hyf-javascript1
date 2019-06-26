/* Create a function named vehicleType that receives a color, 
and a code, 1 for car, 2 for motorbike. And prints 'a blue motorbike'
for example when called as vehicleType("blue", 2) */
vehicleType = (color, type) => {
    if (type === 1) {
        console.log("a " + color + " car")
    } else {
        console.log("a " + color + " motorbike")
    }
};
vehicleType("blue", 2);
vehicleType("red", 1);