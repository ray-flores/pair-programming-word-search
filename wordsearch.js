const transpose = function (matrix) {
  let arr = [];

  for (let i = 0; i < matrix[0].length; i++) {
    arr.push([]);
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      arr[j][i] = matrix[i][j];
    }
  }
  return arr;
};

const wordSearch = (letters, word) => {
  if (letters.length < 1) {
    return false;
  }
  const horizontalJoin = letters.map((ls) => ls.join(""));
  let transposed = transpose(letters);
  const verticalJoin = transposed.map((ls) => ls.join(""));
  let isPass = false;
  for (l of horizontalJoin) {
    if (l.includes(word)) {
      isPass = true;
    } 
  } 
  for (l of verticalJoin) {
    if (l.includes(word)) {
      isPass = true;
    } 
  }
  return isPass;
};

module.exports = wordSearch;



