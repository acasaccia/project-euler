// Su Doku (Japanese meaning number place) is the name given to a popular puzzle concept. Its origin is unclear, but
// credit must be attributed to Leonhard Euler who invented a similar, and much more difficult, puzzle idea called Latin
// Squares. The objective of Su Doku puzzles, however, is to replace the blanks (or zeros) in a 9 by 9 grid in such that
// each row, column, and 3 by 3 box contains each of the digits 1 to 9. Below is an example of a typical starting puzzle
// grid and its solution grid.
// A well constructed Su Doku puzzle has a unique solution and can be solved by logic, although it may be necessary to
// employ "guess and test" methods in order to eliminate options (there is much contested opinion over this). The
// complexity of the search determines the difficulty of the puzzle; the example above is considered easy because it can
// be solved by straight forward direct deduction.
// The 6K text file, sudoku.txt (right click and 'Save Link/Target As...'),
// contains fifty different Su Doku puzzles ranging in difficulty, but all with unique solutions (the first puzzle in
// the file is the example above). By solving all fifty puzzles find the sum of the 3-digit numbers found in the top
// left corner of each solution grid; for example, 483 is the 3-digit number found in the top left corner of the
// solution grid above.


function solve(puzzle) {

    var valid_quadrant = function(table, quadrant_id, value) {

    };

    var valid_row = function(table, row_id, value) {
        var row_begin = row_id*9;
        var row_end = row_begin+8;
        for (var i=row_begin; i<=row_end; i++) {
            if (table[i] === value) {
                return false;
            }
        }
        return true;
    };

    var valid_column = function(table, column_id, value) {
        var column_begin = column_id;
        var row_end = column_id + 72;
        for (var i=row_begin; i<=row_end; i++) {
            if (table[i] === value) {
                return false;
            }
        }
        return true;
    };

    var valid_insertion = function(table, position, value) {
        var row_id = parseInt(position / 9);
        var column_id = position % 9;
        return valid_quadrant(table, quadrant_id, value) &&
            valid_row(table, row_id, value) &&
            valid_column(table, column_id, value);
    };

    var solved = function(puzzle) {
        return puzzle.indexOf('0') === -1;
    };

    var get_adjacents = function(puzzle) {
        var table = puzzle.split('');
        var adjacents = [];
        var table_copy;
        for (var i=0; i<81; i++) {
            if (table[i] === '0') {
                for (var j=1; j<=9; j++) {
                    if (valid_insertion(table, i, String(j))) {
                        table_copy = table.slice();
                        table_copy[i] = j;
                        adjacents.push(table_copy[i].join(''));
                    }
                }
            }
        }
    };

    var visited = {};

    var evaluate = function(puzzle) {
        if (solved(puzzle)) {
            console.log(puzzle);
            process.exit();
        }
        visited[puzzle] = true;
        var adjacents = get_adjacents(puzzle);
        adjacents.forEach(function(adjacent){
            if (!evaluated[adjacent]) {
                evaluate(adjacent)
            }
        });
    };

    evaluate(puzzle);

}