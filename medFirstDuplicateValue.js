function firstDuplicateValue(array) {
    //create an empty object to store elements as keys
    let history = {};
    //iterate over the array
    for (let i = 0; i < array.length; i++) {
        const current = array[i];
        //if the current element key is not present in the object as a key
        //assign key to current element with a value of 1
        //if we have seen the current element as a key in the object before
        //add 1 to the value of the key(current)
        //stop iteration and return the current element,as it is the first
        //duplicate
        if(!history[current]) {
            history[current] = 1;
        } else {
            history[current]++;
            return current;
        }
    }
    return -1;
}

console.log(firstDuplicateValue([2,1,5,2,3,3,4]));//2
console.log(firstDuplicateValue([2,1,5,3,3,2,4]));//3