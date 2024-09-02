function crosswordSolver(emptyPuzzle, words) {
    const puzzleRows = emptyPuzzle.split('\n');
    const puzzleHeight = puzzleRows.length;
    const puzzleWidth = puzzleRows[0].length;
    const grid = puzzleRows.map(row => row.split(''));
    const usedWords = new Set();

    function isValidPlacement(word, row, col, isHorizontal) {
        if (isHorizontal && col + word.length > puzzleWidth) return false;
        if (!isHorizontal && row + word.length > puzzleHeight) return false;

        for (let i = 0; i < word.length; i++) {
            const r = isHorizontal ? row : row + i;
            const c = isHorizontal ? col + i : col;
            if (grid[r][c] !== '.' && grid[r][c] !== word[i]) return false;
        }
        return true;
    }

    function placeWord(word, row, col, isHorizontal) {
        for (let i = 0; i < word.length; i++) {
            const r = isHorizontal ? row : row + i;
            const c = isHorizontal ? col + i : col;
            grid[r][c] = word[i];
        }
        usedWords.add(word);
    }

    function removeWord(word, row, col, isHorizontal) {
        for (let i = 0; i < word.length; i++) {
            const r = isHorizontal ? row : row + i;
            const c = isHorizontal ? col + i : col;
            grid[r][c] = '.';
        }
        usedWords.delete(word);
    }

    function solve(row, col) {
        if (row === puzzleHeight) return true;
        if (col === puzzleWidth) return solve(row + 1, 0);
        if (grid[row][col] !== '.' && isNaN(grid[row][col])) return solve(row, col + 1);

        const wordCount = parseInt(grid[row][col]);
        if (isNaN(wordCount)) return solve(row, col + 1);

        for (const word of words) {
            if (usedWords.has(word)) continue;

            if (isValidPlacement(word, row, col, true)) {
                placeWord(word, row, col, true);
                if (solve(row, col + 1)) return true;
                removeWord(word, row, col, true);
            }

            if (isValidPlacement(word, row, col, false)) {
                placeWord(word, row, col, false);
                if (solve(row, col + 1)) return true;
                removeWord(word, row, col, false);
            }
        }

        return false;
    }

    if (solve(0, 0)) {
        console.log(grid.map(row => row.join('')).join('\n'));
    } else {
        console.log('Error');
    }
}

// Example usage:
const emptyPuzzle = `2001
0..0
1000
0..0`;
const words = ['casa', 'alan', 'ciao', 'anta'];

crosswordSolver(emptyPuzzle, words);