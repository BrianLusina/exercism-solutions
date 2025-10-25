def transform(old):
    return {let.lower(): point for point, letters in old.items() for let in letters}