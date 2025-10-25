def collatz_steps(number):
    if number <= 0:
        raise ValueError("Number can not be less than or equal to 0")

    # If number is 1, 0 steps are required
    if number == 1:
        return 0

    steps = 0
    while 1 < number:
        
        # if number is even
        if number % 2 == 0:
            number /= 2
            steps += 1
        
        else:
            number = number * 3 + 1
            steps += 1

    return steps
