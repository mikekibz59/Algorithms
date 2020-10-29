let lengthOfSubstring = function(s){
let i=0;
let j=0;
let max = 0
let sLength = s.length;
let set = new Set()
while(i<sLength ){
  let char = s.charAt(i)
  if(!set.has(char)){
    set.add(char)
  }else{
    let tempChar = s.charAt(j)
    set.delete(tempChar)
    j++
  }
  set_size = set.size

  if (set_size === 0 && (i-j)=== 0){
    max = 1
  }else{
  max = Math.max(set_size, i-j)
  }
  console.log(set, (i-j))
  i++
}
return max

}

let results = lengthOfSubstring("aaaaa")
// let results = lengthOfSubstring('wwwk')
console.log(results)