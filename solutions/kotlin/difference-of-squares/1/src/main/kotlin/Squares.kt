class Squares(val n: Int) {
    fun squareOfSum(): Int {
        val naturalNumbers = IntRange(1, n)
        return Math.pow(naturalNumbers.sum().toDouble(), 2.0).toInt()
    }

    fun sumOfSquares(): Int {
        val naturalNumbers = IntRange(1, n)
        return naturalNumbers.reduce{acc, i ->  acc + (i * i)}
    }

    fun difference() = squareOfSum() - sumOfSquares()
}