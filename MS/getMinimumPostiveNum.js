function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let sampleArr = A.filter((a)=> a > 0)
  let arrLength = sampleArr.length
  if (arrLength === 0){
      return 1
  }

  if(arrLength === 1){
    return sampleArr[0]
  }
  let sortedArr = sampleArr.sort((a,b)=>a-b)
  let i=0, j=1
  let minArray = []

  while(j < sortedArr.length){
      let diff = sortedArr[j]-sortedArr[i]
      if(diff > 1){
          minArray.push(sortedArr[i]+1) 
      }else if(j === arrLength-1){
      
          minArray.push(sortedArr[j]+1)
      }
      
      j++
      i++
  }
  console.log(minArray)
  
  return Math.min(...minArray)
}
let some_random_value = Array.from(Array(1000000).keys())
some_random_value.splice(50000,1)
let another_value = [1,1,1,-1,0]
console.log(solution(another_value))
