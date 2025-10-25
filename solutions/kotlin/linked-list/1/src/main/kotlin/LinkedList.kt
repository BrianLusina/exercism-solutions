data class DoublyLinkedListNode<T>(
    var data: T,
    var next: DoublyLinkedListNode<T>? = null,
    var prev: DoublyLinkedListNode<T>? = null
)

class Deque<T> {
    private var head: DoublyLinkedListNode<T>? = null

    fun push(value: T) {
        val newNode = DoublyLinkedListNode(data)
        if (head == null) {
            head = newNode
        } else {
            var current = head
            while (current?.next != null) {
                current = current.next
            }
            current?.next = newNode
            newNode.prev = current
        }
    }

    fun pop(): T? {
        if (head == null) {
            return null
        }

        var current = head

        while (current?.next != null) {
            current = current.next
        }

        val prevNode = current?.prev
        prevNode?.next = null
        current?.prev = null

        return current?.data
    }

    fun unshift(value: T) {
        if(head == null) {
            head = DoublyLinkedListNode(data)
        } else {
            val newHead = DoublyLinkedListNode(data)
            newHead.next = head
            head?.prev = newHead
            head = newHead
        }
    }

    fun shift(): T? {
        if (head != null) {
            val currentHead = head
            head = currentHead?.next
            currentHead?.next = null
            return currentHead?.data
        }
        return null
    }
}
