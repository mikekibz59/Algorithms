def merge_sort(num_list: list) -> list:
    """ divide and concure sorting algorithm """
    if not num_list:
        return list()
    if len(num_list) == 1:
        return num_list
    mid_idx = len(num_list) // 2
    first_arr = num_list[:mid_idx]
    last_arr = num_list[mid_idx:]
    first_merge = merge_sort(first_arr)
    last_merge = merge_sort(last_arr)
    return merge(first_merge, last_merge)


def merge(first, last):
    result = list()

    while first and last:
        if first[0] < last[0]:
            result.append(first.pop(0))
        else:
            result.append(last.pop(0))

    while first:
        result.append(first.pop(0))

    while last:
        result.append(last.pop(0))
    return result


sample_arr = [x for x in range(100_000)]
sample_arr.reverse()

print(merge_sort(list()))
