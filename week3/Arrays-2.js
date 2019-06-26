let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];
favoriteAnimals.push("turtle"); // 2.1 Add a statement that adds Mauro's ...
console.log(favoriteAnimals); // 2.2 console log the new array
favoriteAnimals.splice(1,0,"meerkat"); // 2.3 Add meerkat to target index
console.log("I thik the new value of array is : b...,meer...,ca...,gira...,tur..."); // 2.4
console.log(favoriteAnimals); // 2.5 log
console.log("The array has a length of: " + favoriteAnimals.length); // 2.6
favoriteAnimals.splice(favoriteAnimals.length-2,1); // 2.7 delete giraffe
console.log(favoriteAnimals); // 2.8 log
console.log('The item you are looking for is at index: '+favoriteAnimals.indexOf("meerkat")); // 2.9 & 2.10