""" Calculate the height of a binary tree """

from tree_struct import tree_structure

node = tree_structure()

def recursive_height(node):
  if not node:
    return -1
  
  left = 1 + recursive_height(node.left)
  right = 1 + recursive_height(node.right)
  return max(left, right)

print(recursive_height(node))