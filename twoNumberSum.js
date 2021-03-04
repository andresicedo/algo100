// function twoNumberSum(array, targetSum) {
//     const sum = []
//   for (let i = 0; i < array.length; i++) {
//       const number1 = array[i];
//       for (let j = 0; j < array.length; j++) {
//           const number2 = array[j];
//           if (targetSum - number1 === number2 && number1 !== number2) {
//               if (sum.includes(number1) || sum.includes(number2)) {
//                   continue
//               } else {
//                 sum.push(number1, number2);
//               }
//           } 
//       }
//   }
//   return sum;
// }
function twoNumberSum(array, targetSum) {
    //sort array from least to greatest num
      array.sort((a, b) => a - b);
      //assign a left most variable and a right most variable
      let left = 0;
      let right = array.length -1;
      //iterate over array under the condition that left is less than right
      while (left < right) {
          //establish a current some variable that adds left and right
          const currentSum = array[left] + array[right];
          //if the current sum is equal to our target sum
          if(currentSum === targetSum) {
              //return [array[left], array[right]]
              return [array[left] , array[right]];
              //if the current sum is less than the target sum will 
              //increment the left var by 1
          } else if (currentSum < targetSum) {
              left++;
              //if current sum is greater than our target sum
          //decrement our right variable by 1
          } else if (currentSum > targetSum) {
              right--;
          }
      }
      //return an empty array if no two numbers equal the target sum
      return [];
  }



console.log(twoNumberSum([3,5,-4,8,11,1,-1,6], 10));