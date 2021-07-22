// these questions should run by javascript(Node)

// // ================= Question1 ======================
// //create a function take a string as input and output the reverse string.
// //example:
// //input: 'abcd e'
// //output: 'e dcba'

// function foo(input) {
//     let splitString = input.split("");
//     return splitString.reverse().join("");
// }

// // test case
// console.log(foo('abcd e')); // should output 'e dcba' in the console
// console.log(foo('233c de')); // should output 'ed c332' in the console
//     // ================== Question1 end ===================

// // ================= Question2 ======================
// //create a function that takes a string as input and remove the duplicate.
// //example:
// //input: 'abbbcd'
// //output: 'abcd'

// function foo(input) {
//     let result = [];
//     for (let i = 0; i < input.length; i++) {
//         const value = input[i];
//         if (!result.includes(value)) {
//             result.push(value);
//         }
//     }
//     return result.join("");
// }

// // test case
// console.log(foo('abbbcd')); // should output 'abcd' in the console
// console.log(foo('abcddaea')); // should output 'abcde' in the console
// // ================== Question2 end ===================

// // ================= Question3 ======================
// //create a function take a string as input and return a double string.
// //example:
// //input: 'abc'
// //output: 'abcabc'

// function foo(input) {
//     return `${input}${input}`;
// }

// // test case
// console.log(foo('abc')); // should output 'abcabc' in the console
// console.log(foo('eff')); // should output 'effeff' in the console
// // ================== Question3 end ===================

// // ================= Question4 ======================
// //create a function take a string as input and return a double string.
// //example:
// //input: 'abc'
// //output: 'aabbcc'

// function foo(input) {
//     let result = [];
//     for (let i = 0; i < input.length; i++) {
//         const value = input[i];
//         result.push(value, value);
//     }
//     return result.join("");
// }

// // test case
// console.log(foo('abc')); // should output 'aabbcc' in the console
// console.log(foo('a12f')); // should output 'aa1122ff' in the console
// // ================== Question4 end ===================

// // ================= Question5 ======================
// //create a function take a string as input and return a double string.
// //example:
// //input: 'abc'
// //output: 'aabbcc'

// function foo(input) {
//     let result = [];
//     for (let i = 0; i < input.length; i++) {
//         const value = input[i];
//         result.push(value, value);
//     }
//     return result.join("");
// }

// // test case
// console.log(foo('abc')); // should output 'aabbcc' in the console
// console.log(foo('a12f')); // should output 'aa1122ff' in the console
// // ================== Question5 end ===================

// // ================= Question6 ======================
// //create a function take a string statement as input and return 
// //a reverse word of the statement
// //example:
// //input: 'hi i am sam'
// //output: 'sam am i hi'

// function foo(input) {
//     let splitString = input.split(" ");
//     return splitString.reverse().join(" ");
// }

// // test case
// console.log(foo('hi i am sam')); // should output 'sam am i hi' in the console
// console.log(foo('abc bcd')); // should output 'bcd abc' in the console
// // ================== Question6 end ===================

// ================= Question7 ======================
//create a function take a string as input and replace 'a' to '*'.
//example:
//input: 'hi i am sam'
//output: 'hi i *m s*m'

// function foo(input) {
//     let result = [];
//     for (let i = 0; i < input.length; i++) {
//         const value = input[i];
//         if (value === "a") {
//             result.push("*");
//         } else {
//             result.push(value);
//         }
//     }
//     return result.join("");
// }

// // test case
// console.log(foo('hi i am sam')); // should output 'hi i *m s*m' in the console
// console.log(foo('abc bcd')); // should output '*bc bcd' in the console
// // ================== Question7 end ===================

// // ================= Question8 ======================
// //create a function take a string array as input and return an object that 
// //contains the frequency of each string in the array.
// //example:
// //input: ['a','b','c','a']
// //output: {a:2,b:1,c:1}

// function foo(input) {
//     let storage = {};
//     for (let i = 0; i < input.length; i++) {
//         const value = input[i];
//         storage[value] ? storage[value]++ : storage[value] = 1;
//     }
//     return storage;
// }

// // test case
// console.log(foo(['a', 'b', 'c', 'a'])); // should output {a:2,b:1,c:1} in the console
// console.log(foo(['sam', 'jane', 'sam', 'sam'])); // should output {sam:3,jane:1} in the console
// // ================== Question8 end ===================

// // ================= Question9 ======================
// //create a function take a object array as input and sort it based on the 
// //object.id .
// //example:
// //input: [{id:1,name:'sam1'},{id:3,name:'sam3'},{id:4,name:'sam4'},{id:2,name:'sam2'}]
// //output: [{id:1,name:'sam1'},{id:2,name:'sam2'},{id:3,name:'sam3'},{id:4,name:'sam4'}]

// function foo(input) {
//     return input.sort((a,b) => a.id - b.id);
// }

// // test case
// console.log(
// foo([
// {id: 1, name: 'sam1'},
// {id: 3, name: 'sam3'},
// {id: 4, name: 'sam4'},
// {id: 2, name: 'sam2'},
// ])
// ); // should output [{id:1,name:'sam1'},{id:2,name:'sam2'},{id:3,name:'sam3'},{id:4,name:'sam4'}]in the console
// // ================== Question9 end ===================

// // ================= Question10 ======================
// //create a function take a Object array as input and flat that 
// //array to an object.
// //example:
// //input: [{name:'sam',age:18},{name:'jane',age:10},{name:'john',age:20}]
// //output: {sam:18,jane:10,john:20}

// function foo(input) {
//     let result = {};
//     for (let i = 0; i < input.length; i++) {
//         const obj = input[i];
//         result[obj.name] = obj.age;
//     }
//     return result;
// }

// // test case
// console.log(
// foo([
// {name: 'sam', age: 18},
// {name: 'jane', age: 10},
// {name: 'john', age: 20},
// ])
// ); // should output {sam:18,jane:10,john:20} in the console

// // ================== Question10 end ===================

// /** Q1 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//  * Find 3 closest numbers of a given number (50) 
//  * in an array: [45, 32, 55, 16, 25, 74, 22, 13, 27, 41];
//  */
// const givenArr = [44, 32, 55, 16, 25, 74, 22, 13, 27, 41];
// // complete the solution: 
// function solution(givenNum, givenArr) {
//     let diff = [];
//     let sortedArr = givenArr.sort((a,b) => b-a);
//     let [first, second, third] = [0,0,0];
//     for (let i = 0; i < sortedArr.length; i++) {
//         const currNum = sortedArr[i];
//         if ((Math.abs(givenNum-first)) > (Math.abs(givenNum-currNum))) first = currNum;
//         if ((Math.abs(givenNum-currNum)) < (Math.abs(givenNum-second)) && (Math.abs(givenNum-currNum)) > (Math.abs(givenNum-first))) second = currNum;
//         if ((Math.abs(givenNum-currNum)) < (Math.abs(givenNum-third)) && (Math.abs(givenNum-currNum)) > (Math.abs(givenNum-second))) third = currNum;
//     }
//     diff.push(first, second, third);
//     return diff;
// }
// // test:
// console.log(solution(50, givenArr)); //expected: [55, 44, 41], (the order is of the distance from closest to far) 

// /** Q2 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//  * 1. Use a constructor function to implement a Plane with a name and a speed property. 
//  * The speed property is the current speed of the plane in mi/h.
//  * 2. Implement an ‘accelerate’ method that will increase the plane’s speed 25 mi/h, and log the new speed to the console.
//  * 3. Implement a ‘decelerate’ method that will decrease the plane’s speed 25 mi/h, and log the new speed to the console.
//  * 4. Create 2 plane objects and experiment with calling ‘accelerate’ and ‘decelerate’ multiple times on each of them.
//  */
// // complete the class: expected: 
// class Plane {
//     constructor(name, speed) {
//         this.name = name;
//         this.speed = speed;
//     }
//     accelerate = () => {
//         this.speed += 25;
//         console.log(`${this.name} going at ${this.speed} mi/h`)
//     }
//     decelerate = () => {
//         this.speed -= 25;
//         console.log(`${this.name} going at ${this.speed} mi/h`)
//     }
// }

// // test:
// const plane1 = new Plane('Boeing 787', 561);
// const plane2 = new Plane('Airbus A320', 674);
// plane1.accelerate(); // console output: Boeing 787 going at 586 mi/h
// plane2.decelerate(); // console output: Airbus A320 going at 649 mi/h

/** Q3 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * Say you have an array prices for which the ith element is the price of a given 
 * stock on day i.
 * Design an algorithm to find the maximum profit. 
 * You may complete as many transactions as you like (i.e., buy one and sell one 
 * share of the stock multiple times).
 * Note: You may not engage in multiple transactions at the same time (i.e., you 
 * must sell the stock before you buy again).
 * 
 * Example 1:
 * Input: [7,1,5,3,6,4]
 * Output: 7
 * Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), 
 *              profit = 5-1 = 4.
                Then buy on day 4 (price = 3) and sell on day 5 (price = 6), 
                profit = 6-3 = 3.
 * 
 * Example 2:
 * Input: [1,2,3,4,5]
 * Output: 4
 * Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
            Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are
            engaging multiple transactions at the same time. You must sell before buying again.
 *
 * Example 3:
 * Input: [7,6,4,3,1]
 * Output: 0
 * Explanation: In this case, no transaction is done, i.e. max profit = 0.
 */
// complete the solution: 
const prices = [7, 1, 5, 3, 6, 4, 6, 5, 7, 2, 4, 7];
function solution(prices) {
    let profit = 0;
    for (let i = 0; i < prices.length; i++) {
        const currPrice = prices[i];
        const nextDayPrice = prices[i+1];
        if (nextDayPrice > currPrice) profit+=(nextDayPrice-currPrice);
    }
    return profit;
}

// test:
console.log(solution(prices)); // expected: 16

//    /** Q4 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//     * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
//     * An input string is valid if:
//     * Open brackets must be closed by the same type of brackets.
//     * Open brackets must be closed in the correct order.
//     * 
//     * Example 1:
//     * Input: s = "()"
//     * Output: true
//     * 
//     * Example 2:
//     * Input: s = "()[]{}"
//     * Output: true
//     * 
//     * Example 3: 
//     * Input: s = "(]"
//     * Output: false
//     */
//    // complete the solution:
//    function solution(str) {

//    }

//    // test:
//    console.log(solution("([]([{()}()]){})")); // true
//    console.log(solution("([]([()}()]){})")); // false
//    console.log(solution("([[]]([()}()]){})")); // false


