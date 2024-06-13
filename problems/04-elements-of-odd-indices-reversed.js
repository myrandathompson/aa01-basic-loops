/*
Implement the `elementsOfOddIndicesReversed` function so that it
returns a new string containing all the elements with odd indices in the input
string in reverse order.
*/

function elementsOfOddIndicesReversed(str) {
  let result = '';
  for (let i = 1; i < str.length; i += 2) {
    result = str[i] + result;
  }
  return result;
}

// console.log(elementsOfOddIndicesReversed('academy')); // 'mdc'
// console.log(elementsOfOddIndicesReversed('planet'));  // 'tnl'
// console.log(elementsOfOddIndicesReversed('sport'));   // 'rp'


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = elementsOfOddIndicesReversed;
