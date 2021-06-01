/*
Write a function that takes in a non-empty string and that returns
a boolean representing whether the string is a palindrome.

A palindrome is defined as a string that's written the same forward
and backward. Note that single character strings are palindromes.
*/


function isPalindrome(string) {
    //create an array of the string characters
    let arr = string.split("");
    //assign var to the reversal of the string
    let rev = arr.reverse().join("").toString();
    //edge case
    if (string.length === 1) {
        return true;
    }
    //if string equals reversal true:false
    if (string === rev) {
        return true;
    } else {
        return false;
    }
  }

console.log(isPalindrome('abcdcba'));//true
console.log(isPalindrome('a'))//true
console.log(isPalindrome('andres'))//false