function longestPeak(array) {
    //assign the length of the longest peak variable to 0
    let longestPeakLength = 0;
    //assign i to the second index, as a peak should have an
    //increase and a decrease
    let i = 1;
    //iterate the array with a while loop
    //while i is less than the second to last element in the array:
    while (i < array.length - 1) {
        //find a peak by stating that a peak is an index, whose prev
        //index element is less than current and next index element 
        //is less than current
        let isPeak = array[i - 1] < array[i] && array[i + 1] < array[i];
        //if we do not find a peak, increment i and continue the iteration
        if (!isPeak) {
            i++;
            continue;
        }
        //assign a left var to two elements prior to current index
        let left = i - 2;
        //while the left element is not the first index element and less 
        //than prev element of current index
        while (left >= 0 && array[left] < array[left + 1]) {
            //decrement the left element by one
            left--;
        }
        //assign a right var to two element ahead of current index
        let right = i + 2;
        //while the right element is not the last index element and less
        //than the next element of current index
        while (right < array.length && array[right] < array[right - 1]) {
            //increment the right element by one
            right++;
        }
        //assign a var  to the length of the current peaks length
        const currentPeakLength = right - left - 1;
        //assign the longest peak length to the greater of longest peak and
        //current peak
        longestPeakLength = Math.max(longestPeakLength, currentPeakLength);
        //reassign i to the right variable
        i = right;
    }
    //return the longest peak length
    return longestPeakLength;
}


console.log(longestPeak([1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]))