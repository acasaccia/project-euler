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

var lines = require('fs').readFileSync('./problems/input/sudoku.txt', 'utf-8').split('\n').filter(Boolean);
var result = 0,
    associated_cells = {},
    puzzle,
    solution;

while(lines.length) {
    lines.shift();
    puzzle = [];
    for (var i=0; i<9; i++) {
        puzzle.push.apply(puzzle, lines.shift().split('').map(function(v){ return parseInt(v); }));
    }
    solution = solve(puzzle);
    if (solution) {
        result += parseInt('' + solution[0] + solution[1] + solution[2]);
    }
}

console.log(result);

function get_most_constrained_cell(puzzle) {
    var cell_index = -1,
        cell = {},
        cell_valid_values;
    while((cell_index = puzzle.indexOf(0, cell_index + 1)) !== -1) {
        cell_valid_values = get_valid_values(puzzle, cell_index);
        if (!cell.index || cell_valid_values.length < cell.valid_values.length) {
            cell.valid_values = cell_valid_values;
            cell.index = cell_index;
        }
        if (cell_valid_values.length === 1) {
            break;
        }
    }
    return cell;
}

function get_associated_cells(index) {
    if (associated_cells[index]) {
        return associated_cells[index];
    }
    var row_id = parseInt(index / 9);
    var column_id = index % 9;
    var column_begin = column_id;
    var column_end = column_id + 72;
    var cells_to_check = [];
    for (var i=column_begin; i<=column_end; i+=9) {
        if (i !== index) {
            cells_to_check[i] = true;
        }
    }
    var row_begin = row_id * 9;
    var row_end = row_begin + 8;
    for (var i=row_begin; i<=row_end; i++) {
        if (i !== index) {
            cells_to_check[i] = true;
        }
    }
    var quadrant_row_id = parseInt(row_id / 3);
    var quadrant_column_id = parseInt(column_id / 3);
    var first_cell = quadrant_row_id * 27 + quadrant_column_id * 3;
    var k;
    for (var i=0; i<3; i++) {
        for (var j=0; j<3; j++) {
            k = first_cell + i + j * 9;
            if (k !== index) {
                cells_to_check[k] = true;
            }
        }
    }
    associated_cells[index] = Object.keys(cells_to_check);
    return associated_cells[index];
}

function get_valid_values(puzzle, index) {
    var invalid = {};
    var valid = [];
    var cells_to_check = get_associated_cells(index);
    for (var i=0; i<20; i++) {
        invalid[puzzle[cells_to_check[i]]] = true;
    }
    for (var i=1; i<=9; i++) {
        if (!invalid[i]) {
            valid.push(i);
        }
    }
    return valid;
}

function solved(puzzle) {
    return puzzle.indexOf(0) === -1;
}

function print_solution(puzzle) {
    if (!puzzle) {
        console.log("Couldn't solve puzzle")
        return;
    }
    for (var i=0; i<9; i++) {
        var row = [];
        for (var j=0; j<3; j++) {
            row.push(puzzle.slice(i*9 + j*3, i*9 + j*3 + 3).join(''));
        }
        console.log(row.join(' '));
        if ((i+1) % 3 === 0) {
            console.log('');
        }
    }
}

function evaluate(puzzle, status) {
    if (status.solution) {
        return;
    }
    status.counter++;
    if (solved(puzzle)) {
        status.solution = puzzle.slice();
        return;
    }
    var cell = get_most_constrained_cell(puzzle);
    cell.valid_values.forEach(function(valid_value) {
        puzzle[cell.index] = valid_value;
        evaluate(puzzle, status);
    });
    puzzle[cell.index] = 0;
}

function solve(puzzle) {
    var status = { counter: 0, solution: false };
    evaluate(puzzle, status);
    //print_solution(status.solution);
    //console.log("Evaluated %d positions", status.counter);
    return status.solution;
}