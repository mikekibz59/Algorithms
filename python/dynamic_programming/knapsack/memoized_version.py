value = [60, 100, 120]
weight = [10, 20, 30]
max_weight = 50

def knapsack(max_weight, value_, weight_, idx=0):
  """ Classic dynamic programming question """
  if max_weight < 0:
    return 0
  
  if max_weight == 0:
    return value_[idx]
  
  current_max = 0
  for i in range(len(weight)):
    result = knapsack(max_weight-weight[i], value_, weight_, i)
    if current_max <= result:
      current_max = result
  
  return current_max

print(knapsack(50, value, weight))  
