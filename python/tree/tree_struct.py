# Tree


class Node:
    def __init__(self, right_node=None, left_node=None, value=0):
        self.right = right_node
        self.left = left_node
        self.value = value

    def __str__(self):
        """ return node value """
        return f'Node:{self.value}'

    @property
    def children(self):
        """ return all children of this tree"""

        arr = list()
        arr.append(self.right) if self.right else None
        arr.append(self.left) if self.left else None
        return arr


def tree_structure():
    node = Node(value=1)
    node2 = Node(value=2)
    node3 = Node(value=3)
    node4 = Node(value=4)
    node5 = Node(value=5)
    node.left = node2
    node.right = node3
    node2.left = node4
    node2.right = node5
    return node
