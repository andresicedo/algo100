function arrayOfProducts(array) {
    //create a new array with the length of the parameter array
    //assign each element in the new array to 1
    let result = new Array(array.length).fill(1)
    //create a left and right variable and assign to 1
    let left = 1;
    let right = 1;
    //iterate over the array 
    //reassign each element in result array to the number stored in left var
    //increment the left variable by the product of left*current element
    for (let i = 0; i < array.length; i++) {
        const current = array[i]
        result[i] = left;
        left *= current; 
    }
    //iterate over the array in reverse
    //assign the result array at i to the right variable 
    //increment the right variable by the product of right*current element
    //At this point we are assigning element in result to be the product 
    //of all the left index elements by the right index elements
    //[1,5,5,20]
    for (let i = array.length-1; i > -1; i--) {
        const current = array[i];
        result[i] *= right;
        right *= current;
    }
    //[8,8,2,1]
    return result;
}

console.log(arrayOfProducts([5, 1, 4, 2]));//[8, 40, 10, 20]
console.log(arrayOfProducts([0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]))
//[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
console.log(arrayOfProducts([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]))
//[362880, 0, 0, 0, 0, 0, 0, 0, 0, 0]
