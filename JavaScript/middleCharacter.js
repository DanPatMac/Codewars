/*
You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

#Examples:

runBF("test\0") should return "es"

runBF("testing\0") should return "t"

runBF("middle\0") should return "dd"

runBF("A\0") should return "A"
#Input

A word (string) of length 0 < str < 200 For BF, all the input strings end with "\0". You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

#Output

The middle character(s) of the word represented as a string.

round down the length divided by 2
return w/ternary if even then print middle 2, else print middle value

*/

function runBF(word) {
  len = Math.floor(word.length/2);
  return (word.length%2 === 0 ? word[len-1] + word[len] : word[len]);
}

console.log(runBF("test") == "es");
console.log(runBF("testing") == "t");
console.log(runBF("middle") == "dd");
console.log(runBF("A") == "A");
