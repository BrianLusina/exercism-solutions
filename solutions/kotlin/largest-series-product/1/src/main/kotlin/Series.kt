class Series(val input : String){

    private val digits : List<Long>

    init {
        // validity check
        if(input.any { !Character.isDigit(it) } )
            throw IllegalArgumentException()

        // map all characters to Long
        digits = input.map { it.toString().toLong() }
    }

    private fun product( digits : List<Long>) = digits.fold(1L) { acc, i -> acc * i }

    private fun <T> List<T>.windowed(span: Int) = (0 .. (this.size - span)).map { this.subList(it, it + span) }

    fun getLargestProduct(n : Int) : Long{
        // validity check
        if(n < 0 || n > digits.size){
            throw IllegalArgumentException()
        }

        return digits.windowed(n).map { product(it) }.max() ?: 0
    }
}