def is_armstrong(number):
    number_str = str(number)
    number_len = len(number_str)
    sum = 0
    for x in number_str:
        sum += int(x) ** number_len
    return number == sum