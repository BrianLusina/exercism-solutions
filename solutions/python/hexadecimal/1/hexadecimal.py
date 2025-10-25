from functools import reduce
from string import hexdigits

def hexa_first_principles(hexadecimal):
	hexa = hexadecimal.lower()
	if set(hexa) - set(hexdigits[:len(hexdigits) - 6]):
	    raise ValueError("Invalid hexadecimal string")

	# if c in hexdigits[10: len(hexdigits) - 6] is equivalent to abcdef
	# converts each character in hexa to digit
	l = [ord(c) - ord('a') + 10 if c in hexdigits[10: len(hexdigits) - 6] else ord(c) - ord('0') for c in hexa]

	# converts it to base 16
	return reduce(lambda x, y: x * 16 + y, l, 0)