/*
Define a function hasVowel that takes in a string parameter. The function should
return a boolean, true if the string contains at least one vowel, false
otherwise.

Vowels are the letters "a", "e", "i", "o", "u".
*/

// Your code here 
function hasVowel(str) {
    if (str.includes('a')) {
        return true
    } else if (str.includes('e')) {
        return true
    } else if (str.includes('i')) {
        return true
    } else if (str.includes('o')) {
        return true
    } else if (str.includes('u')) {
        return true
    } else {
        return false
    }
} 
    

// console.log(hasVowel('dog'));          // => true
// console.log(hasVowel('conventional')); // => true
// console.log(hasVowel('rhythm'));       // => false

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = hasVowel;
