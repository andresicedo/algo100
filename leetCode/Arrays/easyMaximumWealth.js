let maximumWealth = (accounts) => {
    let maxWealth = getAccountTotal(accounts[0]);
    for (let i = 1; i < accounts.length; i++) {
        const account = accounts[i];
        let currWealth = getAccountTotal(account)
        if ( currWealth> maxWealth) {
            maxWealth = currWealth;
        };
    }
    return maxWealth;
}

let getAccountTotal = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        const amount = arr[i];
        sum += amount;
    }
    return sum;
}

console.log(maximumWealth([[1,2,3], [3,2,1]]));//6
console.log(maximumWealth([[1,5], [7,3], [3,5]]));//10