function moveElementToEnd(array, toMove) {
    //assign a left and right pointer index at 0 and end
    let l = 0;
    let r = array.length-1
    //while the left pointer is before the right pointer and
    //comparison(if the element at left pointer is equal to toMove)
    //run the swap function
    //after our comparison, increment the left pointer 1
    while(l < r) {
        //while the left point is before the right pointer and
        //comparison(the element of right pointer is equal to toMove)
        //decrement the right pointer 1
        while(l < r && array[r] === toMove){
            r--
        };
        if(array[l] === toMove){
            swap(l,r,array)
        }
        l++
    }
    //return our array
    return array;
  }

//create a helper function to reassign the index (swap)
function swap(l,r,array) {
    //store the initial index of the right pointer
    const initial = array[r];
    //reassign the right pointer element to the left
    array[r] = array[l];
    //reassign the left pointer to the initial element of the right pointer
    array[l] = initial;
}

console.log(moveElementToEnd([2,1,2,2,2,3,4,2], 2))