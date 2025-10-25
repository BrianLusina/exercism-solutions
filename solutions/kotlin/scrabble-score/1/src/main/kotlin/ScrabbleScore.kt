object ScrabbleScore {

    private val scoreMap = mapOf(
            arrayListOf("A", "E", "I", "O", "U", "L", "N", "R", "S", "T") to 1,
            arrayListOf("D", "G") to 2,
            arrayListOf("B", "C", "M", "P") to 3,
            arrayListOf("F", "H", "V", "W", "Y") to 4,
            arrayListOf("K") to 5,
            arrayListOf("J", "X") to 8,
            arrayListOf("Q", "Z") to 10
    )

    fun scoreWord(word: String): Int {
        var total = 0
        val letters = word.toUpperCase().split("")

        scoreMap.forEach { arrList, score ->
            letters.filter { arrList.contains(it) }
                    .forEach { total += score }
        }
        // return the total
        return total
    }
}