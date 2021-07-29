let countMatches = (items, ruleKey, ruleValue) => {
    let matchIdx = getMatchIdx(ruleKey); 
    let matches = 0;
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        item[matchIdx] === ruleValue && matches++;
    }
    return matches;
}

let getMatchIdx = (string) => {
    if (string === "type") return 0;
    if (string === "color") return 1;
    if (string === "name") return 2;
}

console.log(countMatches([
    ["phone","blue","pixel"],
    ["computer","silver","lenovo"],
    ["phone","gold","iphone"]], 'color', 'silver'))//1

console.log(countMatches([
    ["phone","blue","pixel"],
    ["computer","silver","phone"],
    ["phone","gold","iphone"]], 'type', 'phone'))//2