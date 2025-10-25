/**
 * @author lusinabrian on 31/05/17.
 */
object ETL{
    
    /**
     * Maps the old data to a new system
     * @param oldMap old map with ints as keys and lists as values
     * @return [Map] new map with characters as keys and ints as values
     * */
    fun transform(oldMap : Map<Int, List<Char>>) : Map<Char, Int>{
        return oldMap.flatMap { 
            it.value.map { 
                word -> Pair(word.toLowerCase(), it.key)
            } 
        }.toMap()
    }
}