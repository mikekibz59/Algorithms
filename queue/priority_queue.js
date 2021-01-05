/**
 * PriorityQueue
 * 
 */

 function PriorityQueue(){
   this.collection = new Array();
   this.printCollection = ()=> {
     console.log(this.collection)
   }

   this.isEmpty = ()=>{
     return (this.collection.length === 0)
   }
   this.size = ()=>{
     return this.collection.length
   }
   this.enqueue = (value)=>{
      if(this.isEmpty())
      {
        this.collection.push(value)
      } else {
        let added = false
        for(let i=0;i<this.size();i++){
          if(value[1] < this.collection[i][1]){
            this.collection.splice(i,0,value)
            added=true;
            break;
          }
        }

        if(!added){
          this.collection.push(value)
        }
      }
   }

   this.dequeue = ()=>{
     let value = this.collection.shift()
     return value[0]
   }

 }

 let pq = new PriorityQueue()
 pq.enqueue(['a',4])
 pq.enqueue(['b',2])
 pq.enqueue(['g',1])
 

 pq.printCollection()