/*
Given a string of words, you need to find the highest scoring word.
Each letter of a word scores points according to its position in the 
alphabet: a = 1, b = 2, c = 3 etc.
You need to return the highest scoring word as a string.
If two words score the same, return the word that appears earliest in 
the original string.
All letters will be lowercase and all inputs will be valid.
*/

function high(x){
    let words = x.split(" ");
    let splitWord = [];
    let storage = {};
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        let letter = word.split("");
        if (!storage[word]) {
            storage[word] = 0;
            splitWord.push(letter);
        } else {
            continue;
        }
    }
    let keys = Object.keys(storage);
    let highest = keys[0];
    for (let i = 0; i < splitWord.length; i++) {
        const letter = splitWord[i];
        storage[keys[i]] += counter(letter);
    }
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        if (storage[key] > storage[highest]) {
            highest = key;
        }
    }
    return highest;
}

function counter(array) {
    let alphabet = ' abcdefghijklmnopqrstuvwxyz'.split("");
    let counter = 0;
    for (let i = 0; i < array.length; i++) {
        const letter = array[i];
        counter += alphabet.indexOf(letter);
    }
    return counter;
}

console.log(high('aaa bbb ccc'))//'ccc'
console.log(high('man i need a taxi up to ubud'))//'taxi'
console.log(high('what time are we climbing up the volcano'))//'volcano'
console.log(high('take me to semynak'))//'semynak'
console.log(high('aa b'))//'aa'
console.log(high('b aa'))//'b'
