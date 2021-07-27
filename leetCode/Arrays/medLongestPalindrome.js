/*
Complexity:

Time complexity : O(n^2).
Space complexity : O(1).
*/

let longestPalindrome = (string) => {
    let start = 0;
    let end = 0;
    let num = 0;
    for (let i = 0; i < string.length; i++) {
        num = Math.max(expandAroundCenter(string, i, i), expandAroundCenter(string, i, i + 1));
        if (num > end - start) {
            start = i - Math.floor((num - 1) / 2);
            end = i + Math.floor(num / 2);
        }
    }
    return string.slice(start, end + 1);
}

let expandAroundCenter = (string, l, r) => {
    while (l >= 0 && r < string.length && string[l] === string[r]) {
        l--;
        r++;
    }
    return r - l - 1;
}


console.log(longestPalindrome('babad'))//bab