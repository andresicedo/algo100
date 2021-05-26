function generateDocument(characters, document) {
    let storage = {};
    let givenChar = characters.split("");
    let givenDoc = document.split("");
    for (let i = 0; i < givenChar.length; i++) {
        const char = givenChar[i];
        if (storage[char]) {
            storage[char]++;
        } else {
            storage[char] = 1;
        }
    }

    for (let i = 0; i < givenDoc.length; i++) {
        const char = givenDoc[i];
        if (!(char in storage)) {
            return false;
        } 
        if (storage[char] === 0) {
            return false;
        } else {
            storage[char]--;
        }
    }
    return true;
}

console.log(generateDocument('A', 'a'))//false
console.log(generateDocument('Bste!hetsi ogEAxpelrt x ', 'AlgoExpert is the Best!'));//true
console.log(generateDocument('serdna', 'andres'))//true
