// Su Doku (Japanese meaning number place) is the name given to a popular puzzle concept. Its origin is unclear, but
// credit must be attributed to Leonhard Euler who invented a similar, and much more difficult, puzzle idea called Latin
// Squares. The objective of Su Doku puzzles, however, is to replace the blanks (or zeros) in a 9 by 9 grid in such that
// each row, column, and 3 by 3 box contains each of the digits 1 to 9. Below is an example of a typical starting puzzle
// grid and its solution grid.
//
// 003 020 600
// 900 305 001
// 001 806 400
//
// 008 102 900
// 700 000 008
// 006 708 200
//
// 002 609 500
// 800 203 009
// 005 010 300
//
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

    var valid_quadrant = function(table, quadrant_row_id, quadrant_column_id, value) {
        var first_cell = quadrant_row_id * 27 + quadrant_column_id * 3;
        for (var i=0; i<3; i++) {
            for (var j=0; j<3; j++) {
                if (table[first_cell+i+j*9] === value) {
                    return false;
                }
            }
        }
        return true;
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
        var column_end = column_id + 72;
        for (var i=column_begin; i<=column_end; i+=9) {
            if (table[i] === value) {
                return false;
            }
        }
        return true;
    };

    var valid_insertion = function(table, position, value) {
        var row_id = parseInt(position / 9);
        var column_id = position % 9;
        var quadrant_row_id = parseInt(row_id / 3);
        var quadrant_column_id = parseInt(column_id / 3);
        return valid_quadrant(table, quadrant_row_id, quadrant_column_id, value) &&
            valid_row(table, row_id, value) &&
            valid_column(table, column_id, value);
    };

    var solved = function(puzzle) {
        return puzzle.indexOf(0) === -1;
    };

    var evaluate = function(puzzle) {
        c++;
        if (c%1000000 === 0) {
            elapsed = new Date().getTime();
            console.log("Evaluated %dM positions: %d\"", c/1000000, (elapsed - start) / 1000);
        }
        if (solved(puzzle)) {
            throw new Error(puzzle)
        }
        for (var i=0; i<81; i++) {
            if (!puzzle[i]) {
                for (var j=1; j<=9; j++) {
                    if (valid_insertion(puzzle, i, j)) {
                        puzzle[i] = j;
                        evaluate(puzzle);
                        puzzle[i] = 0;
                    }
                }
            }
        }
    };

    var c = 0;
    var start = new Date().getTime(), elapsed;

    try {
        evaluate(puzzle);
    } catch (e) {
        var table = e.message.split(',');
        console.log(table.slice(0,9).join(''));
        console.log(table.slice(9,18).join(''));
        console.log(table.slice(18,27).join(''));
        console.log(table.slice(27,36).join(''));
        console.log(table.slice(36,45).join(''));
        console.log(table.slice(45,54).join(''));
        console.log(table.slice(54,63).join(''));
        console.log(table.slice(63,72).join(''));
        console.log(table.slice(72,81).join(''));
    }

    console.log("Evaluated %d positions", c);

}

solve('480921657967345821000876493008132906729564108006798205372689514814253769695417382'.split('').map(function(v){
    return parseInt(v);
}));

//solve('480921657967345821000876493008102900729504108006790200372009014814253769605410082'.split('').map(function(v){
//    return parseInt(v);
//}));