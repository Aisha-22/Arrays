// Model a group of friends:
// Arrays let us group data together in lists

var friends = ["Charlie", "Liz", "David", "Mattias"];

// Array are indexed starting at 0. Every slot has a corresponding number


// We can use those indices to retrieve data

var friends = ["Charlie", "Liz", "David", "Mattias"];

console.log(friends[0]);  //"Charlie"

friends[1] + " <3 " + friends[2] //"Liz <3 David"

// We can also update arrays

var friends = ["Charlie", "Liz", "David", "Mattias"];

friends[0] = "Chuck";
friends[1] = "Lizzie";

// We can also add new data

var friends = ["Charlie", "Liz", "David", "Mattias"];
friends[4] = "Amelie";

// Lats few things about arrays

// We can initialize an empty arrt two ways:
var friends = []; //no friends 
var friends = new Array(); //uncommon

// Arrays can hold any type of data
var random_collection = [49, true, "Hermione", null];

// Arrays have a length property
var nums = [45, 37,89,24];
nums.length //4 