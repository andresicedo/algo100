//O(n log(n) + m log(m)) time | O(1) space
function smallestDifference(arrayOne, arrayTwo) {
    //sort both array in ascending order to effectively compare differences
    arrayOne.sort((a, b) => a - b)
    arrayTwo.sort((a, b) => a - b)
    //assign indexes to 0 for both arrays
    //assign a smallest number to an infinite num
    //assign the current number to to an infinite num
    //assign the smallest pair to an empty array
    let indexOne = 0;
    let indexTwo = 0;
    let smallest = Infinity;
    let current = Infinity;
    let smallestPair = [];
    //while the indexes have not grown larger than the length of respective arrays
    while (indexOne < arrayOne.length && indexTwo < arrayTwo.length) {
        //assign first/second numbers to the first indexes of each array
        let firstNum = arrayOne[indexOne];
        let secNum = arrayTwo[indexTwo];
        //if first num is less than sec, we know we can reassign the current to 
        //the difference of sec and first num, also increment the indexOne 
        if(firstNum < secNum) {
            current = secNum - firstNum;
            indexOne++;
        }
        //if sec num is less than first, we know we can reassign the current to 
        //the difference of first and sec num, also increment the indexTwo
        else if(secNum < firstNum) {
            current = firstNum - secNum;
            indexTwo++
        } 
        //if either of the above conditions cannot be met, we know we are pointing
        //at the smallest pairs, reassign smallest pairs var to first, sec and return
        else {
            smallestPair = [firstNum, secNum];
            return smallestPair;
        }
        //if smallest num assignment is > the current num assignment
        //we know we can reassign the current to be the smallest
        //and reassign the smallest pair to be the two numbers were pointing at
        if(smallest > current) {
            smallest = current;
            smallestPair = [firstNum, secNum];
        }
    }
    //return the smallest pair
    return smallestPair;
  }


console.log(smallestDifference([-1,5,10,20,28,3], [26,134,135,15,17]))