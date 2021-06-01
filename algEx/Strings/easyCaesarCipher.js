/*
Given a non-empty string of lowercase letters and non-negative
integer representing a key, write a function that returns a new
string obtained by shifting every letter in the input string by
k positions in the alphabet, where k is the key.

Note that letters should "wrap" around the alphabet; in other words,
the letter "z" shifted by one returns the letter "a".
*/

function caesarCipherEncryptor(string, key) {
    let alphabet = ' abcdefghijklmnopqrstuvwxyz'.split("");
    let given = string.split("");
    let currentIndex = [];
    let result = [];
    let newKey = key % 26;
    for (let i = 0; i < given.length; i++) {
        const letter = given[i];
        if (alphabet.indexOf(letter) + newKey <= 26) {
            currentIndex.push(alphabet.indexOf(letter) + newKey);
        }
        if (alphabet.indexOf(letter) + newKey > 26) {
            currentIndex.push((alphabet.indexOf(letter) + newKey - 26));
        }
    }

    for (let i = 0; i < currentIndex.length; i++) {
        const newIndex = currentIndex[i];
        result.push(alphabet[newIndex]);
    }
    return result.join("");
}


console.log(caesarCipherEncryptor("xyz", 2));//zab
console.log(caesarCipherEncryptor("abc", 52));//abc
console.log(caesarCipherEncryptor("abc", 57));//fgh
console.log(caesarCipherEncryptor("ovmqkwtujqmfkao", 52));//fgh//ovmqkwtujqmfkao
