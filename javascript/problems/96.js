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

function valid_quadrant(table, quadrant_row_id, quadrant_column_id, value) {
    var first_cell = quadrant_row_id * 27 + quadrant_column_id * 3;
    for (var i=0; i<3; i++) {
        for (var j=0; j<3; j++) {
            if (table[first_cell+i+j*9] === value) {
                return false;
            }
        }
    }
    return true;
}

function valid_row(table, row_id, value) {
    var row_begin = row_id*9;
    var row_end = row_begin+8;
    for (var i=row_begin; i<=row_end; i++) {
        if (table[i] === value) {
            return false;
        }
    }
    return true;
}

function valid_column(table, column_id, value) {
    var column_begin = column_id;
    var column_end = column_id + 72;
    for (var i=column_begin; i<=column_end; i+=9) {
        if (table[i] === value) {
            return false;
        }
    }
    return true;
}

function valid_value(table, position, value) {
    var row_id = parseInt(position / 9);
    var column_id = position % 9;
    var quadrant_row_id = parseInt(row_id / 3);
    var quadrant_column_id = parseInt(column_id / 3);
    return valid_quadrant(table, quadrant_row_id, quadrant_column_id, value) &&
        valid_row(table, row_id, value) &&
        valid_column(table, column_id, value);
}

function get_next_move(puzzle) {
    var next_move = {},
        next_insertion_index = puzzle.indexOf(0),
        valid_values = get_valid_values(puzzle, next_insertion_index);
    next_move.insertion_index = next_insertion_index;
    next_move.valid_values = valid_values;
    while(
        (next_insertion_index = puzzle.indexOf(0, next_insertion_index+1)) !== -1 &&
        next_move.valid_values.length > 1
    ) {
        valid_values = get_valid_values(puzzle, next_insertion_index);
        if (next_move.valid_values.length > valid_values.length) {
            next_move.valid_values = valid_values;
            next_move.insertion_index = next_insertion_index;
        }
    }
    return next_move;
}

function get_valid_values(puzzle, insertion_index) {
    var valid_moves = [];
    for (var i=1; i<=9; i++) {
        if (valid_value(puzzle, insertion_index, i) /*&& look_ahead(puzzle, insertion_index, i)*/) {
            valid_moves.push(i);
        }
    }
    return valid_moves;
}

function look_ahead(puzzle, insertion_index, value) {
    var ok = true;
    var next_insertion_index = insertion_index;
    var valid_move;
    puzzle[insertion_index] = value;
    while((next_insertion_index = puzzle.indexOf(0, next_insertion_index+1)) !== -1) {
        valid_move = false;
        for (var i=1; i<=9; i++) {
            if (valid_value(puzzle, next_insertion_index, i)) {
                valid_move = true;
                break;
            }
        }
        ok = ok && valid_move;
        if (!ok) {
            break;
        }
    }
    puzzle[insertion_index] = 0;
    return ok;
}

function solved(puzzle) {
    return puzzle.indexOf(0) === -1;
}

function print_solution(puzzle) {
    for (var i=0; i<9; i++) {
        var row = [];
        for (var j=0; j<3; j++) {
            row.push(puzzle.slice(i*9+j*3, i*9+j*3+3).join(''));
        }
        console.log(row.join(' '));
        if ((i+1)%3 === 0) {
            console.log('');
        }
    }
}

function solve(puzzle) {
    var c = 0;
    var solution;

    var evaluate = function(puzzle) {
        c++;
        if (solved(puzzle)) {
            throw new Error(puzzle)
        }
        var next_move = get_next_move(puzzle);
        //var insertion_index = puzzle.indexOf(0);
        //var next_move = {
        //    insertion_index: insertion_index,
        //    valid_values: get_valid_values(puzzle, insertion_index)
        //};
        next_move.valid_values.forEach(function(valid_value) {
            puzzle[next_move.insertion_index] = valid_value;
            evaluate(puzzle);
        });
        puzzle[next_move.insertion_index] = 0;
    };

    try {
        evaluate(puzzle);
    } catch (e) {
        solution = e.message.split(',');
        //print_solution(solution);
    }
    //console.log("Evaluated %d positions", c);
    return solution;
}

var lines = require('fs').readFileSync('./problems/input/sudoku.txt', 'utf-8').split('\n').filter(Boolean);
var result = 0, puzzle, solution;

while(lines.length) {
    lines.shift();
    puzzle = [];
    for (var i=0; i<9; i++) {
        puzzle.push.apply(puzzle, lines.shift().split(''));
    }
    solution = solve(puzzle.map(function(v){ return parseInt(v); }));
    result += parseInt(solution[0] + solution[1] + solution[2]);
}

console.log(result);