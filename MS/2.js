/**
 * classic stack 
 */

 function solution(s){
  let stack = []
  let stringArr = s.split(' ');
  let status = true
  for(let i = 0; i< stringArr.length; i++){
    status = operateOnStack(stringArr[i], stack)
    if (!status){
      break
    }
  }

  if(status){
    return stack[stack.length-1]
  }else{
    return -1
  }
 }

 let operateOnStack = (str_, stack)=>{
   if (!isNaN(str_)){
     stack.push(parseInt(str_))
     return true
   }else if(str_ === 'DUP' ){
     if (stack.length >= 1){
      let value = stack[stack.length-1]
      stack.push(value)
      return true
    }else{
      return false
    }
   }else if(str_ === 'POP' ){
      if (stack.length >= 1){
        stack.pop()
        return true
      }else{
        return false
      }
   } else if(str_ === '+'){
     if (stack.length >=2){
       let value1 = stack.pop()
       let value2 = stack.pop()
       let sum = value1+value2
       stack.push(sum)
       return true
     }else{
       return false
     }
   }else if(str_ === '-'){
     if (stack.length >=2){
       let value1 = stack.pop()
       let value2 = stack.pop()
       let diff = value1-value2
       if(diff < 0){
         return false
       } else{
         stack.push(diff)
         return true
       }
     }
   }else{
     return false
   }
 }


 let someString = '5 6 + -'
 let anotherString = '3 DUP 5 - -'
 let correctString = '13 DUP 4 POP 5 DUP + DUP + -'
 let result = solution(anotherString)
 console.log(result)
 