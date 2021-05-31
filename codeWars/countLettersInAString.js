/*
In this kata, you've to count lowercase letters in a given string 
and return the letter count in a hash with 'letter' as key and count 
as 'value'. 
*/

function letterCount(s){
    let hash = {};
    for (let i = 0; i < s.length; i++) {
        const letter = s[i];
        hash[letter] ? hash[letter]++ : hash[letter] = 1;
    }
    return hash;
}

console.log(letterCount('arithmetics'));
//{"a": 1, "c": 1, "e": 1, "h": 1, "i": 2, "m": 1, "r": 1, "s": 1, "t": 2}