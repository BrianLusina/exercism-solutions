object Pangrams {

    fun isPangram(sentence: String) : Boolean{
        if(sentence.isNullOrEmpty())
            return false
        var i = 0
        sentence.toCharArray()
                .map { it.toUpperCase().toInt() }
                .filter{ it.toChar() in 'A'..'Z' }
                .forEach { i = i or (1 shl it.toChar() - 'A') }

        return i == i or (1 shl ('Z') + 1 - 'A') - 1
    }
}