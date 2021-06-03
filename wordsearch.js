const transpose = function(matrix) {
  const newMatrix = [];
  let xLength = matrix.length;
  let yLength = matrix[0].length;

  for (let y = 0; y < yLength; y++) {
    const innerArray = [];
    for (let x = 0; x < xLength; x++) {
      innerArray.push(matrix[x][y]);
    }
    newMatrix.push(innerArray);
  }
  return newMatrix;
};
  
  
const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  const verticalJoin = transpose(letters).map(ls => ls.join(''));
  console.log(horizontalJoin);
  console.log(verticalJoin);
  for (let l of horizontalJoin) {
    if (l.includes(word)) {
      console.log(l);
      return true;
    }
  }
  for (let l of verticalJoin) {
    if (l.includes(word)) {
      console.log(l);
      return true;
    }
  }
  return false;
};

module.exports = wordSearch;

