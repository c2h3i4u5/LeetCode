/**
 * A valid sudoku board should satisfy three conditions
 * 1. each row, 2. each column, 3. each box has no duplicate numbers
 *
 * For instance, in example 1 from the problem description, for
 * board[2][1] = 9, we need to check the following conditions.
 *
 */

/**
 *
 * @param {character[][]} board
 * @return {boolean}
 *
 * [["5","3",".",".","7",".",".",".","."]
 *,["6",".",".","1","9","5",".",".","."]
 *,[".","9","8",".",".",".",".","6","."]
 *,["8",".",".",".","6",".",".",".","3"]
 *,["4",".",".","8",".","3",".",".","1"]
 *,["7",".",".",".","2",".",".",".","6"]
 *,[".","6",".",".",".",".","2","8","."]
 *,[".",".",".","4","1","9",".",".","5"]
 *,[".",".",".",".","8",".",".","7","9"]]
 */

let isValidSudoku = function (board) {
  let seen = new Map();

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      let number = board[i][j];
      let block = Math.floor(i / 3) + "-" + Math.floor(j / 3);

      if (number !== ".") {
        if (
          seen.has(number + "in row" + i) ||
          seen.has(number + "in column" + j) ||
          seen.has(number + "in block" + block)
        ) {
          return false;
        } else {
          seen.set(number + "in row" + i, number);
          seen.set(number + "in column" + j, number);
          seen.set(number + "in block" + block, number);
        }
      }
    }
  }
  return true;
};
