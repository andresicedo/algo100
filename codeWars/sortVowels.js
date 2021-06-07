/*
Write a function which takes a input string s and return a string in the 
following way:
                  C|                          R|
                  |O                          n|
                  D|                          d|
   "Codewars" =>  |E       "Rnd Te5T"  =>      |
                  W|                          T|
                  |A                          |e
                  R|                          5|
                  S|                          T|

Notes:
List all the Vowels on the right side of |
List every character except Vowels on the left side of |
Case doesn't matter
Each line is seperated with \n
Invalid input ( undefined / null / integer ) should return an empty string
*/

function sortVowels(s){
    if (s === undefined || s.length === 0 || Number(s)) return "";
    let lower = s.split("");
    let lowerVowels = 'aeiou'.split("");
    let upperVowels = 'AEIOU'.split("");
    let result = [];
    for (let i = 0; i < lower.length; i++) {
        const letter = lower[i];
        if (letter === null) return "";
        if (lowerVowels.includes(letter) || upperVowels.includes(letter)) {
            result.push("|", letter, '\n');
        } else {
            result.push(letter, "|", '\n');
        }
    }
    result.pop();
    return result.join("");
}


console.log(sortVowels('Codewars'))//'C|\n|o\nd|\n|e\nw|\n|a\nr|\ns|'
console.log(sortVowels('Rnd Te5T'))//'R|\nn|\nd|\n |\nT|\n|e\n5|\nT|'
console.log(sortVowels(1337))//''
console.log(sortVowels(undefined))//''
