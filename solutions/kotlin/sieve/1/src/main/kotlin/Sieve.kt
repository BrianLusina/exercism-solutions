object Sieve {

    fun primesUpTo(ceil : Int) : List<Int>{
        if (ceil == 1){
            return emptyList()
        }

        var possiblePrimes = (2..ceil).toList()
        val primes = mutableListOf<Int>()

        do {
            val prime = possiblePrimes[0]
            primes.add((prime))

            possiblePrimes = possiblePrimes.filter { it % prime != 0 }.toMutableList()
        } while (!possiblePrimes.isEmpty())

        return primes
    }
}