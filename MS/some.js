let arr1 = [3,4,5,6,7,9,1].sort()
let arr2 = [8,7,6,5,4,1].sort()

let checkout = (arr1, arr2)=>{
  if(arr1.length ===0 || arr2.length === 0){
    return []
  }
  let store = []
  for(let i = 0; i< arr1.length; i++){
    if (arr2.indexOf(arr1[i]) !== -1){
      store.push(arr1[i])
    }
  }
  return store
}

console.log(checkout(arr1, arr2))