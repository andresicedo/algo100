/*
Write a function that when given a URL as a string, parses out just the 
domain name and returns it as a string. For example:


*/

// function domainName(url){
//     let initSplit = url.split(".");
//     let domain = initSplit[0];
//     let result;
//     if (initSplit[0].includes('www')) {
//         return initSplit[1];
//     } 
//     if (!initSplit[0].includes('www') && initSplit[0].includes('http')) {
//         result = domain.split("//")
//     } else {
//         return initSplit[0];
//     }
//     return result[1];
// }

function domainName(url){
    url = url.replace("https://", '');
    url = url.replace("http://", '');
    url = url.replace("www.", '');
    return url.split('.')[0];
};


console.log(domainName("http://github.com/carbonfive/raygun"));// == "github" 
console.log(domainName("http://www.zombie-bites.com"));// == "zombie-bites"
console.log(domainName("https://www.cnet.com"));// == "cnet"
console.log(domainName("http://google.com"));// == "google"
console.log(domainName("http://google.co.jp"));// == "google"
console.log(domainName("www.xakep.ru"));// == "xakep"
console.log(domainName("https://youtube.com"));// == "youtube"
console.log(domainName('yy-nral4.com/default.html'))//"yy-nral4"
