/*
Returns the common directory path for specified array of full filenames.

@return {string}
Examples:

  ['/web/images/image1.png', '/web/images/image2.png']  => '/web/images/'
  ['/web/assets/style.css', '/web/scripts/app.js',  'home/setting.conf'] => ''
  ['/web/assets/style.css', '/.bin/mocha',  '/read.me'] => '/'
  ['/web/favicon.ico', '/web-scripts/dump', '/webalizer/logs'] => '/'
*/

function getCommonDirectoryPath(array) {
    let model = array[0].split("/");
    let common = [];
    for (let i = 0; i < array.length; i++) {
        const current = array[i].split("/");
        common.push(compareVal(model, current));
    }
    let mostCommon = common[0];
    for (let i = 1; i < common.length; i++) {
        const current = common[i];
        if (current.length < mostCommon.length) {
            mostCommon = current;
        }
    }
    return mostCommon.join("");
}

function compareVal(arr1, arr2) {
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
        const letter1 = arr1[i];
        const letter2 = arr2[i];
        if (letter1 === letter2) {
           result.push(letter1,"/"); 
        } else {
            break;
        }
    }
    return result;
}

console.log(getCommonDirectoryPath(['/web/images/image1.png', '/web/images/image2.png']));
//=> '/web/images/' 
console.log(getCommonDirectoryPath(['/web/assets/style.css', '/web/scripts/app.js', 'home/setting.conf']));
//=> '/'
console.log(getCommonDirectoryPath(['/web/assets/style.css', '/.bin/mocha', '/read.me']));
//=> '/'
console.log(getCommonDirectoryPath(['/web/favicon.ico', '/web-scripts/dump', '/webalizer/logs']));
//=> '/'

