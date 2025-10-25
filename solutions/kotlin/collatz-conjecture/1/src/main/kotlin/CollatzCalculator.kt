object CollatzCalculator{

    fun computeStepCount(n : Int) : Int{
        require(n > 0, { "Only natural numbers are allowed" })

        var steps = 0
        var number = n

        while (number > 1){
            if(number % 2 == 0) {
                number /= 2
                steps += 1
            } else{
                number = (3 * number) + 1
                steps += 1
            }
        }

        return steps
    }
}