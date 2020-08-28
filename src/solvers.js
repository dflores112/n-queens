/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  // n = ;
  var solution = new Board({'n' : n});

  var newSolution = function(row) {
    // debugger;
    if (row === n) {
      return solution.rows();
    } else {
    for (var column = 0; column < n; column++) {
      solution.togglePiece(row, column);
      if (!solution.hasAnyRooksConflicts()) {
        console.log(row , n);
        return newSolution(row + 1);
      }
      solution.togglePiece(row, column);
    }
    }
  }
  var result = newSolution(0);
  // console.log(solution.rows());
  // generate a new instance of board
  // var columnIndex = 0
  // var rowIndex = 0
  // solution.togglePiece(rowIndex,columnIndex)
  // // put first piece at (0,0)
  // columnIndex++;
  // solution.togglePiece(rowIndex,columnIndex)
  // var rows = n - 1;
  // // put next piece at (1,0)
  // for (var i = 0; i < rows; i++) {
  //   // if vertical conflict
  //   if (!solution.hasAnyColConflict()) {
  //     // remove piece
  //     solution.togglePiece(rowIndex, columnIndex)
  //     columnIndex++;
  //     solution.togglePiece(rowIndex, columnIndex)
  //     // move it down once and place
  //     rowIndex++;
  // }
  // solution.togglePiece(rowIndex, columnIndex)

console.log('Single solution for ' + n + ' rooks:', JSON.stringify(result));
return result;
  //return boardInstance;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = new Board({'n' : n})
  var newSolution = function(row) {
    // debugger;
    if (row === n) {
      return solution.rows();
    } else {
    for (var column = 0; column < n; column++) {
      solution.togglePiece(row, column);
      if (!solution.hasAnyQueensConflicts()) {
        console.log(row , n);
        return newSolution(row + 1);
      }
      solution.togglePiece(row, column);
    }
    }
  }
  var result = newSolution(0);

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(result));
  return result;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
