/**
 * 
 * Similar to stack
 */

 function Queue(){
   this.collection = []

   this.print = ()=>{
     console.log(this.collection)
    }

    this.enqueue = (value)=>{
      this.collection.push(value)
    }

    this.dequeue = ()=>{
      return this.collection.shift()
    }

    this.front = () =>{
      return this.collection[0]
    }

    this.size = ()=>{
      return this.collection.length
    }
    this.empty = ()=>{
      return (this.collection.length === 0)
    }
 }

 let q = new Queue()

 q.enqueue(1)
 q.enqueue(2)
 q.enqueue(3)
 q.enqueue(4)
 q.enqueue(6)

 console.log('front', q.front())
 console.log('dequeue', q.dequeue())
 q.print()
