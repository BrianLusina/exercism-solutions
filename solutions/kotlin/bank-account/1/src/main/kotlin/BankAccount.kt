class BankAccount {
    private val lock = Any()
    var balance: Long = 0
        get() {
            synchronized(lock) {
                if (isOpen) {
                    return field
                } else {
                    throw IllegalStateException("Account is closed")
                }
            }
        }
        private set

    private var isOpen: Boolean = true

    fun adjustBalance(amount: Long) {
        synchronized(lock) {
            balance += amount
        }
    }

    fun close() {
        synchronized(lock) {
            isOpen = false
        }
    }
}
