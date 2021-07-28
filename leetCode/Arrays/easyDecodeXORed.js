let decode = (encoded, first) => {
    const arr = [first];
    encoded.forEach((val, i) => {
        arr.push(arr[i] ^ val);
        // x^y = z
        // x^z = y
    });
    return arr;
};

console.log(decode([1,2,3], 1))//[1,0,2,1]
console.log(decode([6,2,7,3], 4))//[4,2,0,7,4]