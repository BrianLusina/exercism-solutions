import re
from collections import Counter


def word_count(sentence):
    newsent = re.sub(pattern=r"\_|\W+", repl=" ", string=sentence.lower())
    words = ''.join([char if char.isalnum() else ' ' for char in sentence.decode('utf-8')]).split(' ')
    count = dict(Counter(words))
    return count


"""
def word_count(sentence):
    words = ''.join([char if char.isalnum() else ' ' for char in sentence.decode('utf-8')]).split(' ')
    words_dict = dict()

    for word in [word.lower() for word in words if word != '']:
        if word in words_dict:
            words_dict[word] += 1
        else:
            words_dict[word] = 1

    return words_dict
"""