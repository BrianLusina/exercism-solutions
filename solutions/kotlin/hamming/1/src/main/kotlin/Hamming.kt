object Hamming{

	fun compute(strandA : String, strandB : String){
		     var count = 0
        if(strandA.length != strandB.length){
            throw IllegalArgumentException("leftStrand and rightStrand must be of equal length.")
        }
        strandA.forEachIndexed { index, c ->
            if( strandB[index] != c)
                count += 1
        }
        return count	
	}
}