object SumOfMultiples{

    fun sum(numbers: Set<Int>, limit: Int) : Int{
        if( limit <= 1){
            return 0
        }

        val range = IntRange(1, limit -1)
        val multiples = arrayListOf<Int>()

        for (num in numbers){
            range
                    .asSequence()
                    .filter { it % num == 0 && it !in multiples }
                    .forEach { multiples.add(it) }
        }

        return multiples.sum()
    }
}