"""
Given a tree, get the sum of all leaf nodes 
"""
from tree_struct import tree_structure


# using dfs
def dfs_sum_leaf_node(node):
    """ Using dfs to transverse tree """

    if not node.children:
        print(f'leaf node: {node.value}')
        return node.value
    total = 0
    for child_node in node.children:
        total += dfs_sum_leaf_node(child_node)
    return total



def bfs_sum_leaf_node(node):
    """Using bfs to transverse tree """
    
    stack = list()
    stack.append(node)
    total = 0
    while stack:
      node = stack.pop()
      if not node.children:
        total += node.value
      for child in node.children:
        stack.append(child)
    return total



node = tree_structure()
print(dfs_sum_leaf_node(node))
print(bfs_sum_leaf_node(node))
