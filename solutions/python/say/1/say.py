def say(number, recurse=False):
    ones_teens = dict(enumerate(('zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight',
                                 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen',
                                 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty')))

    tens = {20: 'twenty', 30: 'thirty', 40: 'forty', 50: 'fifty',
            60: 'sixty', 70: 'seventy', 80: 'eighty', 90: 'ninety'}

    thousands, millions, billions, trillions = 1e3, 1e6, 1e9, 1e12

    if number < 0:
        raise AttributeError('number is negative')
    if number >= trillions:
        raise AttributeError('number is too large: %s' % str(number))

    if number < 20:
        return ones_teens[number] if not recurse else 'and ' + ones_teens[number]

    if number < 100:
        if number % 10 == 0:
            return ones_teens[number]
        return tens[number // 10 * 10] + '-' + ones_teens[number % 10]

    if number < thousands:
        if number % 100 == 0:
            return ones_teens[number // 100] + ' hundred'
        return ones_teens[number // 100] + ' hundred and ' + say(number % 100, True)

    if number < millions:
        if number % thousands == 0:
            return say(number // thousands) + ' thousand'
        return say(number // thousands) + ' thousand ' + say(number % thousands, True)

    if number < billions:
        if number % millions == 0:
            return say(number // millions) + ' million'
        return say(number // millions) + ' million ' + say(number % millions, True)

    if number % billions == 0:
            return say(number // billions) + ' billion'
    return say(number // billions) + ' billion ' + say(number % billions, True)