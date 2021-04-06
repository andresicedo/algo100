function arrayOfProducts(array) {
    //create a result array to return
    let result = [];
    //create a product var and assign to 1
    let product = 1;
    //iterate over the array to find the total product
    for (let i = 0; i < array.length; i++) {
        const current = array[i];
        product *= current;
    }
    //Now that we have the product we can simply divide
    //the product by the current element which should be 
    //excluded and push that number to our result var
    for (let i = 0; i < array.length; i++) {
        const exclusion = array[i];
        const next = array[i + 1];
        if (exclusion === 0 && next === 0) {
            result.push(0);
            product = 0;
            continue;
        } else {
            result.push(product / exclusion);
        }
    }
    //return the result var
    return result;
}

console.log(arrayOfProducts([5, 1, 4, 2]));
console.log(arrayOfProducts([0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]))
console.log(arrayOfProducts([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]))