target = 8
values = [2,5]

def bestSum(target, values, memo={}):
  if target < 0:
    return None
  
  if target == 0:
    return []

  min_item = None

  for i in values:
    items = bestSum(target-i, values, memo)

    if items != None:
      items.append(i)
      if min_item == None or len(items) < len(min_item):
        min_item = items
  
  return min_item

print(bestSum(target, values))