
some_arr = list()
dict_ = dict()

def recursive_substring(input: str, output: str):

    if not input:
        print(output)
        some_arr.append(output)
        return

    recursive_substring(input[1:], output)
    recursive_substring(input[1:], output + input[0])

recursive_substring('abba', str())
print(some_arr)