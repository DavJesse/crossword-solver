# CrosswordSolver
The crosswordSolver function is designed to solve a crossword puzzle by filling in the grid with the provided words. The function validates the input, processes the grid, and attempts to place the words in either horizontal or vertical positions.
## Usage
To use this program:
1. Have the latest version of javascript installed and clone the repository by typing:
```bash
https://learn.zone01kisumu.ke/git/davodhiambo/crossword.git
```
2. Navigate into the parent folder by:
```bash
cd crossword
```
3. Open the crossworldSolver file and prepare the Grid: Create a string representation of the grid with cells separated by newline characters. Use . for empty cells, 0 for cells that can be filled with any letter, and 1 or 2 for cells that must be filled.
4. Provide the Words: Prepare an array of words that you want to place in the grid.
5. Call the Function: Invoke crosswordSolver with your grid and word list as arguments.

For example:
```javascript
const puzzle = '2001\n0..0\n1000\n0..0';
const words = ['casa', 'casa', 'ciao', 'anta'];

crosswordSolver(puzzle, words);
```
6. To display the puzzle created, run the program by typing onto the terminal the command:
```bash
node crosswordSolver.js
```

## Error Handling
The function prints 'Error' if:
- The emptyPuzzle or words array is invalid.
- The total number of cells that need to be filled does not match the number of words.
- It is not possible to place all words in the grid.
## Authors 
[David Odhiambo](https://learn.zone01kisumu.ke/git/davodhiambo)

[Joan Wambugu](https://learn.zone01kisumu.ke/git/jwambugu)
## Licence
This project is licensed under the MIT License. See the LICENSE file for details.
## Contributions
Contributions are welcome. Simply fork the repository, make your changes, and submit a pull request.