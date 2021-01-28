values = [5, 3, 4, 7]

target = 7


def canSum(n: int, num_arr: list, memo=dict()) -> bool:
    """
      recursive method to find if an array elements 
      can add up to the target number
    """

    if n in memo:
        return memo[n]

    if n == 0:
        return True
    if n < 0:
        return False

    for i in num_arr:
        returnValue = canSum(n-i, num_arr, memo=memo)
        if returnValue:
            memo[n] = True
            return True
    return False


print(canSum(7, values))
