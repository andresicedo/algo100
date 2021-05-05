/*
The goal of this exercise is to convert a string to a new string where 
each character in the new string is "(" if that character appears only 
once in the original string, or ")" if that character appears more than 
once in the original string. Ignore capitalization when determining if a 
character is a duplicate.
*/

function duplicateEncode(word){
    //create a result var
    let result = [];
    //store values in a hash table
    let storage = {};
    //split string at ""
    let array = word.toLowerCase().split("");
    //traverse the array
    for (let i = 0; i < array.length; i++) {
        const letter = array[i];
        //if letter is in storage, add 1
        //if letter is not storage, assign value to 1 in storage
        if (storage[letter]) {
            storage[letter]++;
        } else {
            storage[letter] = 1;
        }
    }
    //traverse the storage keys
    for (let i = 0; i < array.length; i++) {
        const letter = array[i];
        //if the letter in storage is > 1
        //push the close parenthesis to result
        //if the value of letter in storage is equal to 1
        //push the open parenthesis to result
        if (storage[letter] > 1) {
            result.push(")");
        }
        if(storage[letter] === 1) {
            result.push("(");
        }
    }
    //join the array and turn to string
    let encoded = result.join("").toString();
    //return the string
    return encoded;
}


console.log(duplicateEncode("din"))//"((("
console.log(duplicateEncode("recede"))//"()()()"
console.log(duplicateEncode("Success"))//")())())"
console.log(duplicateEncode("(( @" ))//"))(("
