function spiralTraverse(array) {
    const spiralSort = [];
    let startRow = 0,
    endRow = array.length -1;
    let startCol = 0,
    endCol = array[0].length -1;

    while(startRow <= endRow && startCol <= endCol) {
        for (let col = startCol; col <= endCol; col++) {
            spiralSort.push(array[startRow][col]);
        }
        for (let row = startRow+1; row <= endRow; row++) {
            spiralSort.push(array[row][endCol]);
        }
        for (let col = endCol-1; col >= startCol; col--) {
            if(startRow === endRow)break;
            spiralSort.push(array[endRow][col]);
        }
        for (let row = endRow-1; row > startRow; row--) {
            if(startCol === endCol)break;
            spiralSort.push(array[row][startCol]);
        }

        startRow++;
        endRow--;
        startCol++;
        endCol--;
    }
    return spiralSort;
  }

array = [
    [1,2,3,4],
    [12,13,14,5],
    [11,16,15,6],
    [10,9,8,7]
]

console.log(spiralTraverse(array))