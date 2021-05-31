/*
The main idea is to count all the occurring characters in a string. 
If you have a string like aba, then the result should be 
{'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object 
literal, {}.
*/

function count (string) {  
    let storage = {};
    string === "" && storage;
    for (let i = 0; i < string.length; i++) {
        const char = string[i];
        storage[char] ? storage[char]++ : storage[char] = 1;
    }
    return storage;
}


console.log(count("aba"))// { a: 2, b: 1 }
console.log(count(""))// {}