from string import ascii_uppercase


def make_diamond(letter):
    """
    makes a diamond from the given letter
    :return: a diamond
    :rtype: list
    """
    result = []
    # count how far the letter is from A and use that as counter
    counter = ord(letter.upper()) - ord("A")

    # generate the letters from A up to the letter given
    alphabet = [let for let in ascii_uppercase[:counter+1]]

    # make the head part of the diamond
    for pos in range(len(alphabet)):
        "{}{}{}".format("" * counter, alphabet[pos], " " * counter)

    for alph in alphabet:
        result.append(" " * counter + alph + " " * counter)
        counter -= 1

    # make a copy of the head diamond and get the tail section alone
    result_tail = result[:counter]

    # add the tail to the head for the final result
    result.extend(reversed(result_tail))

    return "\n".join(result)


result = ['  A  ',
          ' B B ',
          'C   C',
          ' B B ',
          '  A  ']
print(make_diamond("C"))