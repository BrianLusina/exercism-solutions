def convert(number):
    raindrop_speak = ""
    mapping = {
        3: "Pling",
        5: "Plang",
        7: "Plong"
    }
    
    # get factors of number
    for x in range(1, number + 1):
        if number % x == 0:
            word = mapping.get(x, None)

            if word:
                raindrop_speak += word
    
    return raindrop_speak if raindrop_speak else str(number)