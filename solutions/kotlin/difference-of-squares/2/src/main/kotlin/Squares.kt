class Squares(val n: Int) {
    fun squareOfSum(): Int {
        val sumOfNNaturalNums = (1..n).sum()
        return sumOfNNaturalNums * sumOfNNaturalNums
    }

    fun sumOfSquares(): Int {
        return (1..n).reduce{acc, i ->  acc + (i * i)}
    }

    fun difference() = squareOfSum() - sumOfSquares()
}