/*
An isogram is a word that has no repeating letters, consecutive or 
non-consecutive. Implement a function that determines whether a string 
that contains only letters is an isogram. Assume the empty string 
is an isogram. Ignore letter case.


*/

function isIsogram(str){
    if (str === "") {
        return true;
    }
    let storage = {};
    let lower = str.toLowerCase();
    let arr = lower.split("");
    for (let i = 0; i < arr.length; i++) {
        const letter = arr[i];
        if (storage[letter]) {
            return false;
        } else {
            storage[letter] = 1;
        }
    }
    return true;
}

console.log(isIsogram("Dermatoglyphics"))// == true
console.log(isIsogram("aba"))// == false
console.log(isIsogram("moOse"))// == false // -- ignore letter case