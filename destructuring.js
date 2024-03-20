/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

// Destructuring arrays
let ages = [30, 26, 27];
let [john, mary, joe] = ages;
console.log(john, mary, joe);

// Destructuring objects
let jobs = {
    mike: "designer",
    jill: "developer",
    alicia: "accountant",
};
let {mike, jill, alicia} = jobs;
console.log(mike, jill, alicia);

// Destructuring subsets
let languages = ["english", "french", "spanish", "german", "japanese"];
let [johnnative, johnsecondary] = languages;
console.log(johnnative, johnsecondary);

let [, , marynative, marysecondary] = languages;
console.log(marynative, marysecondary);

let languages2 = {
    firstlanguage: "english",
    secondlanguage: "french",
    thirdlanguage: "german",
    fourthlanguage: "japanese",
};
let {firstlanguage, thirdlanguage} = languages2;
console.log(firstlanguage, thirdlanguage);

// Using rest parameter syntax
let fruits = ["apple", "orange", "banana", "peach", "cherry"];
let [favourite, secondFavourite, ...others] = fruits;
console.log(favourite);
console.log(secondFavourite);
console.log(others);

let favouriteFoods = {
    brian: "pizza",
    anna: "pasta",
    sarah: "vegetarian",
    andrea: "steak",
};
let { brian, anna, ...rest } = favouriteFoods;
console.log(brian);
console.log(anna);
console.log(rest);
