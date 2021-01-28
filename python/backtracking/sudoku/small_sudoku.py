""" 
We shall start this with a simple
3X3 sudoku puzzle and see it is valid
"""


def solve_sudoku(brd: list)-> bool:
  # method to find the latest empty
  # cell
  empty = empty_cell(brd)
  # if there is no empty cell then we have 
  #solved the problem
  if not empty:
    return True
  
  row, col = empty
  # loop of all possible numbers that we can use
  #
  for i in range(1, 10):
    value = valid_entry(brd, row, col, i)
    if value:
      brd[row][col] = i
      return_value = solve_sudoku(brd)
      if return_value:
        return True
      
      brd[row][col] = 0
  
  return False




def empty_cell(brd: list)-> list:
  """looks for empty cell and returns it """
  for i in range(len(brd)):
    for j in range(len(brd[0])):
      if brd[i][j] == 0:
        return [i,j]
  return None

def valid_entry(brd, row, col, value):
  """ check if every entry is valid"""
  raise NotImplementedError
