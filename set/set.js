/**
 * Set data structure
 * functions: has,values,intesection,union,remove,length
 */

function MySet() {
  this.collection = new Array()

  this.has = (value) => {
    /**
     * returns true if it exist otherswise false
     */
    return this.collection.indexOf(value) !== -1
  }

  this.values = () => {
    return this.collection
  }

  this.add = (value) => {
    if (!this.has(value)) {
      this.collection.push(value)
      return true
    }
    return false
  }

  this.remove = (value) => {
    if (this.has(value)) {
      let index = this.collection.indexOf(value)
      this.collection.splice(index, 1)
      return true
    }
    return false
  }

  this.length = () => {
    return this.collection.length
  }
  this.union = (otherSet) => {
    let tempSet = new MySet()
    let firstSet = this.values()
    let secondSet = otherSet.values()
    firstSet.forEach((value) => {
      tempSet.add(value)
    })

    secondSet.forEach((value) => {
      tempSet.add(value)
    })
    return tempSet
  }
}

let set = new MySet()
let secondSet = new MySet()
secondSet.add('v')
secondSet.add('z')
secondSet.add('a')
set.add('a')
set.add('b')
set.add('b')
set.add('c')
console.log('set:', set)
let unionSet = set.union(secondSet)
console.log('unionSet:', unionSet)