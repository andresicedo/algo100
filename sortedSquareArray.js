function sortedSquaredArray(array) {
    //create squared array variable
    let squaredArray = [];
    //iterate over the array
    for (let i = 0; i < array.length; i++) {
        const number = array[i];
        //at the index, push the squared result of index to squared array
        squaredArray.push(number*number);
    }
    //return squared array
    return squaredArray.sort((a,b) => a-b);
  }

  console.log(sortedSquaredArray([1,2,3,5,6,8,9]))