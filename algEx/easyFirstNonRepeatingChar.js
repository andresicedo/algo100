function firstNonRepeatingCharacter(string) {
    let arr = string.split("");
    let storage = {};
    for (let i = 0; i < arr.length; i++) {
        const char = arr[i];
        if (storage[char]) {
            storage[char]++;
        } else {
            storage[char] = 1;
        }
    }
    for (const key in storage) {
        if (storage[key] === 1) {
            return arr.indexOf(key);
        } else {
            continue;
        }
    }
    return -1;
}

console.log(firstNonRepeatingCharacter('abcdcaf'))//1