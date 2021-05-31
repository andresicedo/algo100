/*
Write a function that takes in a string of one or more words, 
and returns the same string, but with all five or more letter 
words reversed (like the name of this kata).

Strings passed in will consist of only letters and spaces.
Spaces will be included only when more than one word is present.
Examples:

*/

function spinWords(string){
    let arr = string.split(" ");
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        const word = arr[i];
        let revWord = word.split("").reverse().join("");
        if (fiveLetters(word)) {
            result.push(revWord);
        } else {
            result.push(word);
        }
    }
    return result.join(" ");
}

function fiveLetters(word) {
    let arr = word.split("");
    if (arr.length >= 5) {
        return true;
    } else { 
        return false;
    }
}


console.log(spinWords("Hey fellow warriors"))// "Hey wollef sroirraw" 
console.log(spinWords("This is a test"))//"This is a test" 
console.log(spinWords("This is another test"))//"This is rehtona test"
console.log(spinWords('Welcome'))//'emocleW'