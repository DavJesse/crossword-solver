function crosswordSolver(emptPuzzle, words) {
    const grid = emptPuzzle.split('\n');
    const width = grid[0].length;
    const height = grid.length;
    const index = 1;


    for (let row = 0; row < width) {
        for (let col = 0; col < heght) {
            grid[row][col]
        }
    }
    console.log(grid)
}

function canPlace(row, col) {
    if (grid[row][col] == '.') {
        return false;
    }
    
}

const emptPuzzle = `2001
0..0
1000
0..0`;
const words = ['casa', 'alan', 'ciao', 'anta'];

crosswordSolver(emptPuzzle, words);