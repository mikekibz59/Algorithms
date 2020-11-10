const board = [
  [1,2,3,4,5,6],
  [1,6,3,9,5,6],
  [6,5,7,3,8,1],
  [6,7,8,9,0,11],
  [0,9,8,7,6,5],
  [11,12,13,14,15,16]
]
const secondBoard = [
  [1 ,1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0]
]

const thirdBoard = [
  [-1, -1, 0, -9 ,-2 ,-2],
[-2, -1, -6, -8, -2, -5],
[-1, -1, -1, -2, -3, -4],
[-1 ,-9 ,-2, -4, -4, -5],
[-7 ,-3 ,-3 ,-2 ,-9 ,-9],
[-1, -3, -1 ,-2 ,-4 ,-5]
]
const solveBoard = (arr)=>{
  let row = arr.length

  let i=0, sumArr=[]
  let looper = Math.floor(row/2)

  while(i<= looper){
      for(let j=0; j<=looper; j++){
        let sum = 0
        let row_1=arr[i][j], row_2=arr[i][j+1], row_3=arr[i][j+2]
        let mid_row=arr[i+1][j+1]

        let b_row=arr[i+2][j], b_row1=arr[i+2][j+1], b_row2=arr[i+2][j+2]
        sum =row_1+row_2+row_3+mid_row+b_row+b_row1+b_row2
        sumArr.push(sum)
      }
      i++

  }
  return Math.max(...sumArr)
}

console.log(solveBoard(thirdBoard))