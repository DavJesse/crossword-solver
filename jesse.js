function solveCrossword(puzzle, words) {
    const puzzleRows = puzzle.split("\n");
    let ind = 0; 
    
  
    for (let i = 0; i < puzzleRows.length; i++) {
      for (let j = 0; j < puzzleRows[i].length; j++) {
        if (puzzleRows[i][j] !== "0" && puzzleRows[i][j] !== ".") {
          // Check horizontal placement
          if (checkPlacement(puzzleRows, i, j, "horizontal", words[ind])) {
            console.log(true);
          }
  
          // Check vertical placement
          if (checkPlacement(puzzleRows, i, j, "vertical", words[ind])) {
            console.log(true);
          }
          
          while (ind < words.length) {
            ind++
          }
  
        }
      }
    }
  
    console.log(false);
  }
  
  function checkPlacement(puzzleRows, row, col, direction, word) {
    const height = puzzleRows.length;
    const width = puzzleRows[0].length;
    
    // Check if the word fits within the puzzle boundaries
    if (direction === "horizontal" && col + word.length > width) return false;
    if (direction === "vertical" && row + word.length > height) return false;
  
    const indices = [];
  
    for (let i = 0; i < word.length; i++) {
      let currentRow = direction === "horizontal" ? row : row + i;
      let currentCol = direction === "horizontal" ? col + i : col;
  
      // Check if the current position is available ('0') or already matches the word letter
      if (puzzleRows[currentRow][currentCol] !== '0' && puzzleRows[currentRow][currentCol] !== word[i]) {
        return false;
      }
  
      indices.push([currentRow, currentCol]);
    }
  
    // If we've made it here, the word fits
    return { success: true, indices: indices };
  }
  // Example usage:
  const emptyPuzzle = "2001\n0..0\n1000\n0..0";
  const words = ['casa', 'alan', 'ciao', 'anta'];
  console.log(solveCrossword(emptyPuzzle, words));
  