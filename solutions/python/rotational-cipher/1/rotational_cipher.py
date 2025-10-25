import string


def rotate(word, key):
    """
    Rotates each letter in word by the given key
    :param: word the word to perform the rotation on
    :param: key key used to determine how to rotate each letter in word
    :return: rotation of the word
    :rtype: str
    """
    d = create_dict(key)
    return "".join([d[letter] if letter in d else letter for letter in word])
    

def create_dict(key):
    """
    Creates a dictionary with encryption values
    :param: key the key to use when creating the encription
    """
    key = key % 26

    # used for encryption
    e = dict(zip(string.ascii_lowercase, string.ascii_lowercase[key:] + string.ascii_lowercase[:key]))

    e.update(dict(zip(string.ascii_uppercase, string.ascii_uppercase[key:] + string.ascii_uppercase[:key])))

    return e