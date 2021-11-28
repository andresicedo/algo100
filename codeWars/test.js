// function arraySum(numbers) {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         const number = numbers[i];
//         sum+=number;
//     }
//     return sum;
// }

// console.log(arraySum([3,13,4,11,9]));

// function fizzBuzz(n) {
//     for (let i = 1; i < n+1; i++){
//         if (i % 15 == 0) console.log("FizzBuzz");
//         else if (i % 3 == 0) console.log("Fizz");
//         else if (i % 5 == 0) console.log("Buzz");
//         else console.log(i);
//     }
// }

// console.log(fizzBuzz(15))

// function deliveryPlan (allLocations, numDeliveries) {
//     let result = [];
//     let distanceOfAllLoc = getDistanceFromStartPoint(allLocations);
//     let deliverableDistances = [];
//     let idx = 0;
//     while (deliverableDistances.length < numDeliveries) {
//         deliverableDistances.push(getShortestDistances(distanceOfAllLoc, numDeliveries));
//         idx++;
//     }
//     for (let i = 0; i < deliverableDistances.length; i++) {
//         const currLoc = deliverableDistances[i];
//         let idxOfCurrLoc = distanceOfAllLoc.indexOf(currLoc);
//         result.push(allLocations[idxOfCurrLoc]);
//     }
//     return result;
// }

// let getDistanceFromStartPoint = (arr) => {
//     let result = []
//     for (let i = 0; i < arr.length; i++) {
//         let x = arr[i][0] * arr[i][0];
//         let y = arr[i][1] * arr[i][1];
//         result.push(Math.sqrt(x+y));
//     }
//     return result;
// }

// let getShortestDistances = (array, numOfDistances) => {
//     let result = [];
//     let shortest = array[0];
//     while (result.length < numOfDistances) {
//         for (let i = 0; i < array.length; i++) {
//             const num = array[i];
//             if (num < shortest) {
//                 shortest = num;
//             }
//         }
//         result.push(shortest)
//         array.splice(array.indexOf(shortest), 1);
//     }
//     return result;
// }

// console.log(deliveryPlan([[1,2], [3,4], [1,-1]], 2));

function minimumDistance(area) {
    //
}