
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (typeof (matrix) != "object" || matrix.length == 0) {
    return [];
  } else {
    for (let i = 1; i < matrix.length; i = i + 2) {
      matrix[i].reverse();
    }
  }
  return matrix.flat();
}
