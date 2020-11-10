let lengthOfSubstring = function(s){
let a_pointer=0, b_pointer=0;
let max = 0

let set = new Set()
while(b_pointer < s.length){

  let char = s.charAt(b_pointer)
  if (set.has(char)){
    let tempChar = s.charAt(a_pointer)
    set.delete(tempChar)
    a_pointer++
  }else{
    set.add(char)
    b_pointer++
    max = Math.max(set.size, max)
  }
}
  return max
}

let results = lengthOfSubstring("pwwkew")
// let results = lengthOfSubstring('wwwkee')
console.log(results)