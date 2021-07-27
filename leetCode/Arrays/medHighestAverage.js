let highestAverage = (arr) => {
    if (arr.length === 0) return 0;
    let highestScore = Number(arr[0][1]);
    let storage = {};
    for (let i = 0; i < arr.length; i++) {
        const name = arr[i][0];
        const score = Number(arr[i][1]);
        if (storage[name]) {
            storage[name] = [storage[name][0] += 1, storage[name][1]+=score];
        } else {
            storage[name] = [1, score]
        }
    }
    return getHighestScore(storage, highestScore);
}

let getHighestScore = (obj, highestScore) => {
    for (const key in obj) {
        let currScore = obj[key][1] / obj[key][0];
        if (currScore > highestScore) highestScore = currScore;
    }
    return highestScore
}

console.log(highestAverage([
    ['Sarah', '87'],
    ['Julie', '100'],
    ['Julie', '0'],
    ['Sarah', '42'],
    ['Andres', '100'],
    ['Andres', '98'],
]));//99

console.log(highestAverage([
    ['Sarah', '-87'],
    ['Julie', '-100'],
    ['Julie', '0'],
    ['Sarah', '-42'],
    ['Andres', '-100'],
    ['Andres', '98'],
]));//-1

console.log(highestAverage([]));//0


