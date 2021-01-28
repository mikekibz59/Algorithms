word = 'abcdef'
word_bank = ['ab', 'abc', 'cd', 'def', 'abcd']
word2 = 'skateboard'
word_bank_2 = ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']
word3 = 'eeeeeeeeeeeeeeeeeeeeeeef'
word_bank_3 = ['e', 'eee', 'eeeee', 'eeeeee']


def canConstruct(match_word, word_bank, memo=dict()):

    if match_word in memo:
        return memo[match_word]

    if not match_word:
        return True

    for word in word_bank:
        if word[0] == match_word[0] and word in match_word:
            result = canConstruct(match_word[len(word):], word_bank, memo)
            if result:
                memo[match_word] = result
                return memo[match_word]
    memo[match_word] = False
    return False


print(canConstruct(word3, word_bank_3))
