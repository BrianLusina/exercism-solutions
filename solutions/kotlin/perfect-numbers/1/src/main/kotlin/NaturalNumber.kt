enum class Classification {
    DEFICIENT, PERFECT, ABUNDANT
}

fun classify(naturalNumber: Int): Classification {
    if(naturalNumber <= 0){
        throw RuntimeException()
    }

    //get the aliquot sum .ie. sum of factors of a number
    val aliquotSum = getAliquotSum(naturalNumber)

    return when {
        aliquotSum == naturalNumber -> Classification.PERFECT
        aliquotSum > naturalNumber -> Classification.ABUNDANT
        else -> Classification.DEFICIENT
    }
}


/**
 * Gets the sum of factors of a number
 * @param number Natural number
 * @return [Int] Sum of factors of a natural number
 * */
private fun getAliquotSum(number : Int): Int{
    return (1 until number)
            .filter { number % it == 0 }
            .sum()
}