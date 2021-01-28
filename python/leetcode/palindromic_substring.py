
#ToDo: Dynamic programming: Palindromic substring


dict_length = dict()

def recursive_substring(input: str, output: str):

    if not input:
        if is_palindrom(output) and output not in dict_length:
            dict_length[output] = len(output)
        return

    recursive_substring(input[1:], output)
    recursive_substring(input[1:], output + input[0])

def is_palindrom(str_:str)->bool:
    return str_ == str_[::-1]

def return_highest(dict_):
    max = 0
    str_ = str()
    for k,v in dict_.items():
        if v >= max:
            max = v
            str_ = k
    return str_

recursive_substring('abba', str())

print(dict_length)
print(return_highest(dict_length))