function mergeOverlappingIntervals(array) {
    //sort the intervals array by the first index of each interval in ascending order
    const sortedArray = array.sort((a,b) => a[0] - b[0])
    //create a merged intervals var and assign to an empty array, this is our result
    //after we completed each comparison and merge
    const mergedIntervals = [];
    //create a current interval var and assign to the first interval
    let currentInterval = sortedArray[0];
    //push the first interval to our merged intervals arr
    mergedIntervals.push(currentInterval);

    //traverse the sorted array
    for (const nextInterval of sortedArray) {
        //assign [first index of interval, last index of interval] to current
        const [_, currentIntervalEnd] = currentInterval;
        //assign [first index of next interval, last index of next interval to next]
        const [nextIntervalStart, nextIntervalEnd] = nextInterval;
        //if the last index of current is >= the first index of next
        //the last index of current will be assigned to the greater number 
        //of the last index of current or the last index of next
        if(currentIntervalEnd >= nextIntervalStart) currentInterval[1] = Math.max(currentIntervalEnd, nextIntervalEnd);
        //else there is not overlap and push the current to the merged interval array
        else{
            currentInterval = nextInterval;
            mergedIntervals.push(currentInterval);
        }
    }
    //return the merged intervals
    return mergedIntervals;
  }


  console.log(mergeOverlappingIntervals([[1, 2],[3, 5],[4, 7],[6, 8],[9, 10]]));
