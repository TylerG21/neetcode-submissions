class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {

        // Check the rows
        for(let row = 0; row < 9; row++) {
            let seenInRow = new Set()
             for(var i = 0; i < 9; i++) {
                if(board[row][i] === ".") continue
                if(seenInRow.has(board[row][i])) return false
                seenInRow.add(board[row][i])
             }

        }

        // Check the Columns
        for(let col = 0; col < 9; col++) {
            let seenInCol = new Set()
            for(var i = 0; i < 9; i++) {
                if(board[i][col] === ".") continue
                if(seenInCol.has(board[i][col])) return false
                seenInCol.add(board[i][col])
            }
        }

        // Check the squares 3x3
        for(let square = 0; square < 9; square++) {
            let seenInBox = new Set()
            for(var i = 0; i < 3; i++){
               for(var j = 0; j < 3; j++) {
                let row = Math.floor(square / 3) * 3 + i
                let col = (square % 3) * 3 + j
                if(board[row][col] === ".") continue
                if(seenInBox.has(board[row][col])) return false
                seenInBox.add(board[row][col])
               } 
            }
        }
    return true
    }
}
