import java.math.BigInteger
import kotlin.math.pow

object Board {

    fun getGrainCountForSquare(square: Long): BigInteger {
        if(square !in IntRange(1, 64)){
            throw IllegalArgumentException("Only integers between 1 and 64 (inclusive) are allowed")
        }
        return BigInteger.valueOf(2.0.pow(square - 1.0).toLong())
    }

    fun getTotalGrainCount() : BigInteger{
        var total = 0L
        for (x in LongRange(1, 64)){
            total += getGrainCountForSquare(x).toLong()
        }
        return BigInteger.valueOf(total)
    }
}