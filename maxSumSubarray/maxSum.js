/**
 * Example input
 * [4,2,1,7,8,1,2,8,1,0]
 */

 let maxSumSubArray = (numArr, k) => {
   let maxValue = 0 
   let currentRunningSum = 0
   for (let i=0; i<numArr.length; i++){
     currentRunningSum+=numArr[i]
     if (i >= k-1){
      maxValue = Math.max(maxValue, currentRunningSum)
      currentRunningSum -= numArr[i-(k-1)]
     }
   }
   return maxValue;
 }

let sample_arr = [4,2,1,7,8,1,2,8,1,0]
let k = 3
let result =  maxSumSubArray(sample_arr, k)
console.log(result)