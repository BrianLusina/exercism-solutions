class SpaceAge(val seconds: Long) {

    private fun formatNum(age: Double) = "%.2f".format(age).toDouble()

    fun onEarth() = formatNum(seconds / 31557600.0)

    fun onMercury() = formatNum(onEarth() / 0.2408467)

    fun onVenus() = formatNum(onEarth() / 0.61519726)

    fun onMars() = formatNum(onEarth() / 1.8808158)

    fun onJupiter() = formatNum(onEarth() / 11.862615)

    fun onSaturn() = formatNum(onEarth() / 29.447498)

    fun onUranus() = formatNum(onEarth() / 84.016846)

    fun onNeptune() = formatNum(onEarth() / 164.79132)
}