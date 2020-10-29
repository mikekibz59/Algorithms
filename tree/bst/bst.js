/* Binary Search Tree */

class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  add(data) {
    const node = this.root;
    if (node === null) {
      this.root = new Node(data);
      return;
    } else {
      const searchTree = function(node) {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data);
            return;
          } else if (node.left !== null) {
            return searchTree(node.left);
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data);
            return;
          } else if (node.right !== null) {
            return searchTree(node.right);
          }
        } else {
          return null;
        }
      };
      return searchTree(node);
    }
  }
  printLeft(node){
    if(node === null){
      return
    }
    console.log('left', node.data)
    return this.printLeft(node.left)
  }

  printRight(node){
    if(node === null){
      return
    }
    console.log('right',node.data)
    return this.printRight(node.right)
  }

  findMin(){
    let node = this.root
    while(node.left !== null){
      node = node.left
    }
    return node.data
  }

  findMax(){
    let node = this.root
    let data = null
    const recursiveReturn = (node)=>{
      if (node === null){
        return 
      }
      data = node.data
      return recursiveReturn(node.right)
    }
    recursiveReturn(node)
    return data
  }

  isPresent(value){
    const node = this.root
    const recursiveFind = (node, value)=>{
      if(node === null){
        return false
      }
      if (node.data === value){
        return true
      }
      if(value < node.data){
        recursiveFind(node.left, value)
      }
      if (value > node.data){
        recursiveFind(node.right, value)
      }
    }
    return recursiveFind(node, value)
  }
}
  
  

  



const bst = new BST();


bst.add(9);
bst.add(4);
bst.add(17);
bst.add(3);
bst.add(6);
bst.add(22);
bst.add(5);
bst.add(7);
bst.add(20);

// console.log(bst.findMinHeight());
// console.log(bst.findMaxHeight());
// console.log(bst.isBalanced());
// bst.add(10);
// console.log(bst.findMinHeight());
// console.log(bst.findMaxHeight());
// console.log(bst.isBalanced());
// console.log('inOrder: ' + bst.inOrder());
// console.log('preOrder: ' + bst.preOrder());
// console.log('postOrder: ' + bst.postOrder());

// console.log('levelOrder: ' + bst.levelOrder());
// console.log('bst', bst)
// bst.printLeft(bst.root)
// bst.printRight(bst.root)
// console.log('min', bst.findMin())
// console.log('max', bst.findMax())
console.log('search', bst.isPresent(4))