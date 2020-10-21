/**
 * Stacks
 * 
 * functions: push, pop, peek, length
 */


 var Stack = function(){
   console.log('stack', this)
   this.count = 0
   this.storage = {}

   this.push = function(value){
     this.storage[this.count] = value;
     this.count++
   }

   this.pop = function(){
     if(this.count === 0){
       return undefined;
     }
     this.count--;
     var result = this.storage[this.count]
     delete this.storage[this.count]
     return result;
   }

   this.size = function(){
     return this.count
   }

 }

 m.push(2)
 m.push(3)
 m.push(4)
 console.log(m)
 console.log(m.size())

let z = Stack()

console.log(Stack.prototype)