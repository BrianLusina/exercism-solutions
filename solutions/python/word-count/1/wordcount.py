import re
from collections import Counter


def word_count(sentence):
    newsent = re.sub(pattern=r"\_|\W+", repl=" ", string=sentence.lower())
    count = dict(Counter(newsent.split()))
    return count