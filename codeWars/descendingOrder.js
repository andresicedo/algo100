/*
Your task is to make a function that can take any non-negative integer as 
an argument and return it with its digits in descending order. Essentially, 
rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321
*/

// function descendingOrder(n){
//     let arr = n.toString().split("");
//     let out = [];
//     for (let i = 0; i < arr.length; i++) {
//         const num = Number(arr[i]);
//         out.push(num);
//     }
//     return Number(out.sort((a, b) => b - a).join(""));
// }

const descendingOrder = (n) => {
    return Number(n.toString().split("").sort().reverse().join(""));
}


console.log(descendingOrder(42145));//54421
console.log(descendingOrder(145263));//654321