let lengthOfLongestSubstring = (s) => {
    if (s.length === 0) return 0; 
    if (s.length == 1) return 1;
    let storage = {}; //our hash table to hold our characters and index;
    let longestSubstringLength = 0; //length of longest substring
    let start = 0; //start index
    //iterate over the array
    for (let i = 0; i < s.length; i++) {
        const letter = s[i]
        //if the character exist and the value of the character is greater or equal to our start index
        //change the value of start to one higher than the value of our current character 
        if (storage[letter] !== undefined && storage[letter] >= start) start = storage[letter] + 1
        //add the current index and it's value to the hash table
        storage[letter] = i;
        //find the length of the longest substring by comparing the value with the value of the current index minus the start value plus 1
        longestSubstringLength = Math.max(longestSubstringLength, (i - start + 1))
    }
    return longestSubstringLength;
}

console.log(lengthOfLongestSubstring('aa'))//1
console.log(lengthOfLongestSubstring('au'))//2
console.log(lengthOfLongestSubstring('aab'))//2
console.log(lengthOfLongestSubstring('abcabcbb'))//3
console.log(lengthOfLongestSubstring('bbbbb'))//1
console.log(lengthOfLongestSubstring('pwwkew'))//3
console.log(lengthOfLongestSubstring(''))//0