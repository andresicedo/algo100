function runLengthEncoding(string) {
    let given = string.split("");
    let result = [];
    let count = 1;
    for (let i = 0; i < given.length; i++) {
        const character = given[i];
        let next = given[i+1];
        if (character === next) {
            count++;
        }
        if (count > 9) {
            result.push(9, character);
            count -= 9;
        }
        if (character !== next) {
            result.push(count);
            result.push(character);
            count = 1;
        }
    }
    return result.join("");
}


console.log(runLengthEncoding('aAaAaaaaaAaaaAAAABbbbBBBB'))//1a1A1a1A5a1A3a4A1B3b4B