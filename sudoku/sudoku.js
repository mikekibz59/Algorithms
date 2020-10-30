/**
 * sudoku solver using backtracking
 */

 let board = [
  [7,8,0,4,0,0,1,2,0],
  [6,0,0,0,7,5,0,0,9],
  [0,0,0,6,0,1,0,7,8],
  [0,0,7,0,4,0,2,6,0],
  [0,0,1,0,5,0,9,3,0],
  [9,0,4,0,6,0,0,0,5],
  [0,7,0,3,0,0,0,1,2],
  [1,2,0,0,0,7,4,0,0],
  [0,4,9,2,0,6,0,0,7]
]

const printBoard = (brd)=>{
  for(let i=0; i <brd.length; i++){
    if (i%3 === 0 && i!==0){
      console.log('-------------------------')
    }
    for(let j=0; j<brd[0].length; j++){
      if (j%3 === 0 && j !== 0){
        process.stdout.write(' | ')
      }
      if(j===8){
        console.log(brd[i][j])
      }else{
      value = brd[i][j].toString()
      process.stdout.write(value+" ")
      }
    }
  }
}

const solveSudoku = (brd)=>{
  /**
   * Actual function to solve
   * sudoku using backtracking
   * 
   */

  let emptySpace = findEmpty(brd)
  let row, col;
  if(emptySpace === null){
    return true
  } else {
    [row, col] = emptySpace
  }
  for(let i=1; i< 10; i++){
    if (Validate(i,row, col, brd)){
      brd[row][col] = i
      if (solveSudoku(brd)){
        return true
      }
      brd[row][col] = 0
    }
  }
return false

}
const findEmpty = (brd)=>{
  /**
   * Helper function to find zero based
   * space in the board
   */
  for(let i=0; i<brd.length; i++){
    for(let j=0; j<brd.length; j++){
      if (brd[i][j] === 0){
        return [i,j]
      }
    }
  }
  return null
}

const Validate = (value,row, col, brd)=>{
  // check if value is present in row
  for(let i=0; i< brd[row].length; i++){
    if (value === brd[row][i]){
      return false
    }
  }
  //check if the value is present in the column
  for(let j=0; j<brd.length; j++){
    if(value === brd[j][col]){
      return false
    }
  }
  
  let box_x = Math.floor(col/3)
  let box_y = Math.floor(row/3)
  let i=0,j=0
  while(i>=box_y*3 && i< box_y*3 +3){
    while(j>=box_x*3 && j< box_x*3 +3){
      if (brd[i][j] === value){
        return false
      }
      j++
    }
    i++
  }
  return true
}

console.log('Before')
printBoard(board)
console.log('After \n')
solveSudoku(board)
printBoard(board)

