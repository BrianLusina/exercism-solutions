def smallest_palindrome(self, max_factor, min_factor=0):
	return min(self.generate_palindromes(max_factor, min_factor), key=lambda tup: tup[0])

def largest_palindrome(self, max_factor, min_factor=0):
	return max(self.generate_palindromes(max_factor, min_factor), key=lambda tup: tup[0])

def generate_palindromes(self, max_factor, min_factor):
	return ((a * b, (a, b))
        for a in range(min_factor, max_factor + 1)
        for b in range(min_factor, a + 1)
        if self.is_palindrome(a * b)
        )