let words = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
let alphabet = ' abcdefghijklmnopqrstuvwxyz'.split("");


let jumbledNums = (string) => {
    let result = [];
    let substring = getAllSubstrings(string);
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        if (substring.includes(word)) {
            result.push(words.indexOf(word));
        }
    }
    return result;
}

let getAllSubstrings = (string) => {
    let i, j, result = [];
    for (i = 0; i < string.length; i++) {
        for (j = i + 1; j < string.length + 1; j++) {
            result.push(string.slice(i, j));
        }
    }
    return result;
}

let wordReversed = (string) => {
    let arr = string.split("");
    return arr.reverse().join("");
}

console.log(jumbledNums('eonenourfirz'));