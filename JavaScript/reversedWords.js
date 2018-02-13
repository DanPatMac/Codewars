/*
Complete the solution so that it reverses all of the words within the string passed in.

Example:

reverseWords("The greatest victory is that which requires no battle")
// should return "battle no requires which that is victory greatest The"

Steps:
Split string into Array
Reverse Array order
join array back to string
*/

function reverseWords(str){
  return str.split(" ").reverse().join(" ");
}

// Test Cases
console.log(reverseWords("hello world!") == "world! hello")
console.log(reverseWords("yoda doesn't speak like this") == "this like speak doesn't yoda")
console.log(reverseWords("foobar") == "foobar")
console.log(reverseWords("kata editor") == "editor kata")
console.log(reverseWords("row row row your boat") == "boat your row row row")
