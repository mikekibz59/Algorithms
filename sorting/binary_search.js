/**
 * Implementing Binary search
 */

 let value = [3,4,6,7,1,4,6,3,9]
 let sortedValue = value.sort()
 
 const BinarySearch = (arr_, value)=>{
  if (arr_.length === 0){
    return false
  }
  return binaryHelper(arr_, value, 0, arr_.length-1 )
 }

 const binaryHelper = (list,value,  low, high)=>{
  if(low === high){
    return list[low] == value
  }
  let tempMid = low+high 
  let mid = Math.floor(tempMid/2)

  if (list[mid] === value){
    return true
  } 
  if (list[mid] < value){
    return binaryHelper(list, value, mid+1, high)
  } else {
    return binaryHelper(list, value,low, mid-1 )
  }
 }

let some = BinarySearch(sortedValue, 1)
console.log(some)