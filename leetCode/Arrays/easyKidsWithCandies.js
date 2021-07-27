let kidsWithCandies = (candies, extraCandies) => {
    let mostCandy = findMostCandies(candies);
    let result = [];
    for (let i = 0; i < candies.length; i++) {
        const currCandy = candies[i];
        if ((currCandy + extraCandies) >= mostCandy) {
            result.push(true);
        } else {
            result.push(false);
        }
    }
    return result;
}

let findMostCandies = (arr) => {
    let most = arr[0];
    for (let i = 0; i < arr.length; i++) {
        const currAmount = arr[i];
        if (currAmount > most) {
            most = currAmount;
        }
    }
    return most;
}

console.log(kidsWithCandies([2,3,5,1,3], 3));