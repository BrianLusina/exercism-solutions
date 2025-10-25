def rebase(baseA, numbers, baseB):
    if baseA < 2 or baseB < 2:
        raise ValueError("Invalid base")
    if any(True for num in numbers if num < 0 or num >= baseA):
        raise ValueError("Invalid number input")
    return convert_to_digits(convert_from_digits(numbers, baseA), baseB)


def convert_from_digits(digits, base):
    return sum(num * base ** indx for indx, num in enumerate(reversed(digits)))


def convert_to_digits(number, base):
    output = []
    while number > 0:
        output.append(number % base)
        number //= base
    return list(reversed(output))