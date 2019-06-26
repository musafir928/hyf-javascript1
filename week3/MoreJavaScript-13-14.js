//  13. Create an object that contains the teachers that you have had so far for the different modules.
const listOfTeachers = [
    {
        name: "Rob",
    },
    {
        name: "Nick",
    },
    {
        name: "Ze-german",
    },
];

//  14. Add a property to the object you just created that 
//  contains the languages that they have taught you.
listOfTeachers[0].Languages = ["CSS"];
listOfTeachers[1].Languages = ["JS", "GIT"];
listOfTeachers[2].Languages = ["HTML", "CSS"];
console.log(listOfTeachers);