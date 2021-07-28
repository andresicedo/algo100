let restoreString = (string, arr) => {
    let result = new Array(string.length);
    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        result[num] = string[i];
    }
    return result.join("");
}

console.log(restoreString('codeleet', [4,5,6,7,0,2,1,3]))//leetcode