/*Create a stackLetters function that should console.log rows of letters. It should take an array containing the letters of the alphabet and output them like this:

a
ab
abc
abcd
abcde
abcdef

Then add logic to stackLetters that places a space after every fifth letter, like this:

a
ab
abd
abcd
abcde
abcde f

*/

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var letterStack = []; //this is where the variables will be logged/stacked.
var prettyLetters; //this is how I'll log the contents of the array without all the grammar added.
var stackLetters = function() {
  for (var i = 0; i < alphabet.length; i++) {
    if ((i+1) % 6 == 0) { 
      letterStack.push(" " + alphabet[i]); //adds a space before every 6th character and also logs the 6th letter so the stack doesn't skip letters.
      prettyLetters = letterStack.join("");
      console.log(prettyLetters); //this is printing the array. Every time, to make a cumulative stack image.
    } else {
      letterStack.push(alphabet[i]); //adding the variables in order, at the end of the array. 
      prettyLetters = letterStack.join("");
      console.log(prettyLetters); //this is printing the array. Every time, to make a cumulative stack image.
    }
  }
}
stackLetters();
