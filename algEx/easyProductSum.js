//time: O(N) - N being the number of integers in the array 12
//space: O(depth) - depth being the max multiplier 3

function productSum(array, multiplier = 1) {
    //create a sum var and assign initially to 0
    let sum = 0;
    //iterate over array
    for (const element of array) {
        //if element is a special array, call the product sum function
        //and add 1 to the multiplier parameter
        if (Array.isArray(element)) {
            sum += productSum(element, multiplier + 1);
            //else, the element is an integer
            //add the integer to the sum
        } else {
            sum += element;
        }
    }
    //return the sum * the multiplier
    return sum * multiplier;
  }

array = [5,2,[7,-1], 3, [6, [-13, 8], 4]];

console.log(productSum(array))