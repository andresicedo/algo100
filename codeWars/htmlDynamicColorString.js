/*
Generate a valid randomly generated hexadecimal color string. 
Assume all of them always have 6 digits.
*/

let generateColor = () => {
    let color = ['#'];
    while (color.length !== 7) {
        color.push(getRandValue());
    }//push six rand values to color array
    return color.join('');//return hex string
}

let getRandValue = () => {//set possible hex values in var and return rand value
    let alphabet = "abcdef123456789";
    return alphabet[Math.floor(Math.random() * alphabet.length)]
}

//  const generateColor = () => '#' + Math.random().toString(16).substr(-6);

console.log(generateColor());