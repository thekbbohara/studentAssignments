const arr = [3,5,6,1]
let sum = 0

// calculate sum of odd number
arr.forEach((item)=>{
  if(item%2!==0) sum= sum + item
})
console.log(sum)

