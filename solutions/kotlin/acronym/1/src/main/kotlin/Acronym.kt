object Acronym{
	fun generate(phrase : String) : String {
		val words = phrase.split(Pattern.compile("\\W+"))
	        val acronym = StringBuilder()

	        words.forEach { acronym.append(it[0].toUpperCase()) }
        
        	return acronym.toString()
	}
}