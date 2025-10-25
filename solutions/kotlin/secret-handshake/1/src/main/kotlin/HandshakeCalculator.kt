object HandshakeCalculator{
	private const REVERSE_BITS_POSITION = 4

	fun calculateHandshake(decimalNumber : Int) : List<Signal>{
		val result = Signal.values().filter { isBitSet(it.ordinal, decimalNumber) }

		return if(isBitSet(REVERSE_BITS_POSITION, decimalNumber)) result.reversed() else result
	}

	private fun isBitSet(position : Int, number : Int) : Boolean{
		return number shr position and 1 == 1
	}
}