let size = 8;
let chessboard = '';

for (let j = 0; j < size; j++) {
  for (let h = 0; h < size; h++) {
    if ((j + h) % 2 === 0) {
      chessboard += ' ';
    } else {
      chessboard += '&';
    }
  }
  chessboard += '\n';
}

console.log(chessboard);





let i=0
console.log(++i)
console.log(i++)
console.log(i)


