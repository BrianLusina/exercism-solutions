"""
Verifies isbn
"""


def verify(isbn):
    """
    Verifies an isbn, returning True if isbn is valid, False, otherwise
    :param: isbn, str
    rtype: bool
    """
    characters = list(isbn.replace("-", ""))

    if characters and characters[-1] == "X":
        characters[-1] = "10"

    if not len(characters) == 10 or all(char.isdigit() for char in characters):
        return False

    indices = range(10, 0, -1)

    return sum(int(char) * index for char, index in zip(characters, indices)) % 11 == 0