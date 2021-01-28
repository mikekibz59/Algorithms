values = [2, 4, 7]

target = 8


def howSum(target, num_list, memo=dict()):
    """
        return value of nums that equals
        targetsum
    """
    if target in memo:
        return memo[target]
    if target == 0:
        return []

    if target < 0:
        return None
    for i in num_list:
        value = howSum(target-i, num_list, memo)
        if value != None:
            value.append(i)
            memo[target] = value
            return memo[target]

    memo[target] = None
    return None


print(howSum(300, [7,14]))
