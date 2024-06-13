/*
Define a function called `secondHalf` that takes in a string
parameter. The function should return a new string containing only the second
half of characters in the string parameter.
*/


  // Your code here 
function secondHalf(str) {
  const index = Math.ceil(str.length / 2);
  return str.substring(index);
}

// console.log(secondHalf('academy')); // 'emy'
// console.log(secondHalf('planet'));  // 'net'
// console.log(secondHalf('sport'));   // 'rt'


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = secondHalf;
