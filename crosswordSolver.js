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

        const wordCount = parseInt(grid[row][col], 10); // Added radix 10
        if (isNaN(wordCount) || wordCount === 0) return solve(row, col + 1);

        const possibleWords = words.filter(word => !usedWords.has(word));

        let placedWords = 0;
        for (const word of possibleWords) {
            if (isValidPlacement(word, row, col, true)) {
                placeWord(word, row, col, true);
                placedWords++;
                if (solve(row, col + word.length)) return true;
                removeWord(word, row, col, true);
                placedWords--;
            }

            if (isValidPlacement(word, row, col, false)) {
                placeWord(word, row, col, false);
                placedWords++;
                if (solve(row + word.length, col)) return true;
                removeWord(word, row, col, false);
                placedWords--;
            }

            // If the number of words placed equals the number specified, proceed to next position
            if (placedWords === wordCount) return solve(row, col + 1);
        }

        return false;
    }

    if (solve(0, 0)) {
        return grid.map(row => row.join('')).join('\n');
    } else {
        return 'Error';
    }
}

// Example usage:
const emptyPuzzle = `2001
0..0
1000
0..0`;
const words = ['casa', 'alan', 'ciao', 'anta'];

console.log(crosswordSolver(emptyPuzzle, words));
