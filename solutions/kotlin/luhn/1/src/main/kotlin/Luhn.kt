object Luhn {

    fun isValid(cardNumber : String) : Boolean {
        val newCardNumber = cardNumber.replace(" ", "")

        if(newCardNumber.length <= 1){
            return false
        }

        val reversed = newCardNumber.reversed()
        val evenlyPositioned = reversed.filterIndexed {index, _ -> index % 2 == 0}.sumBy { it - '0' }
        val oddlyPositioned = reversed.filterIndexed {index, _ -> index % 2 == 1}.map { sumDigits((it -'0') * 2)}.sum()

        return (evenlyPositioned + oddlyPositioned) % 10 == 0

    }

    private fun sumDigits(n : Int) = n / 10 + n % 10
}