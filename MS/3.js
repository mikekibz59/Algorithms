function solution(A,B){
 
 if (A.length !== B.length){
   return 0
 } 
 if (A.length === 0 || B.length===0){
   return 0
 }
 let aCurrentsum = 0
 let bCurrentsum = 0
 let counter = 0
 for(let i=0; i<A.length; i++ ){
   aCurrentsum+=A[i]
   bCurrentsum+=B[i]
   if (aCurrentsum === bCurrentsum){
     counter++
     aCurrentsum-=A[A.length-i]
     bCurrentsum-=B[B.length-i]
   }
 }
 return counter
}

console.log(solution([0,4,-1,0,3], [0,-2,5,0,3]))