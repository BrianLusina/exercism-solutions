object Raindrops {
    fun convert(number: Int) : String{
        var output = ""
        (1..number)
                .asSequence()
                .filter { number % it == 0 }
                .forEach {
                    when(it){
                        3 -> output += "Pling"
                        5 -> output += "Plang"
                        7 -> output += "Plong"
                    }
                }
        if (output.isEmpty()){
            output = number.toString()
        }
        
        return output
    }
}