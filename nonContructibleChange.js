function nonConstructibleChange(coins) {
    //sort array of coins from least to greatest
    coins.sort((a,b) => a-b);
    //edge case: if coins array is empty, return 1
    //because you cant make any change
    if(coins.length === 0) {
        return 1;
    }
    //create a current change var and assign to 0 cents
    let currentChange = 0;
    //iterate over the coins array
    for (let i = 0; i < coins.length; i++) {
        const coin = coins[i];
    //if current index is greater than current change + 1cent
        if(coin > currentChange + 1) {
            //eturn current change +1
            return currentChange + 1;
            //else add the value of the coin to the current change
        } else {
            currentChange += coin;
        }
    }
    return currentChange + 1;
  }

  console.log(nonConstructibleChange([5,7,1,1,2,3,22]));//20

  console.log(nonConstructibleChange([1, 1, 1, 1, 1]))//6