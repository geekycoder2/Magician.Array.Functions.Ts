"use strict";
// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
// Step 2: Create the showMagicians function
function showMagicians(magicians) {
    magicians.forEach((magician) => {
        console.log(magician);
    });
}
// Step 3: Create the makeGreat function
function makeGreat(magicians) {
    return magicians.map((magician) => `the Great ${magician}`);
}
// Step 4: Create an array of magician names
const originalMagicianNames = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
// Step 5: Make a copy of the array
const copiedMagicianNames = [...originalMagicianNames];
// Step 6: Call makeGreat with the copied array
const greatMagicians = makeGreat(copiedMagicianNames);
// Step 7: Call showMagicians to show the original names
console.log("Original Magicians:");
showMagicians(originalMagicianNames);
// Step 8: Call showMagicians to show the array with "the Great" added
console.log("\nMagicians with 'the Great':");
showMagicians(greatMagicians);
