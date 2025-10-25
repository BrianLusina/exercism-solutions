from data_structures.lists.linked_lists import LinkedList, Node


class DoubleNode(Node):
    """
    Node implementation of DoubleLinkedList
    """

    def __init__(self, value, prev_node=None, next_node=None):
        super().__init__(value, next_node)
        self.value = value
        self.prev_node = prev_node
        self.next_node = next_node


class DoublyLinkedList(LinkedList):
    """
    Doubly linked list which will implement methods from LinkedList parent class
    Doubly linked lists have nodes which have reference to its predecessor and its successor
    """

    def __init__(self):
        super().__init__()

    def push(self, data):
        """
        Add a node to the end of Linked List
        :param data: Data to add
        :return:
        """
        node = DoubleNode(data, prev_node=self.tail)
        if self.tail:
            self.tail.next_node = node

        # if the head does not exist, set the head to the node
        if not self.head:
            self.head = node
        self.tail = node

    def pop(self):
        """
        Removes the last item from the list and returns it
        :return: Node at the last position
        """
        last_node = self.tail.value
        self.tail = self.tail.prev_node
        return last_node

    def shift(self):
        """
        Removes value at the front of the doubly linked list
        :return: deleted node
        """
        value = self.head.value
        self.head = self.head.next_node
        return value

    def unshift(self, value):
        """
        Inserts a value at the front of the doubly linked list
        :param value: data to add at the front of the list
        """
        node = DoubleNode(value, next_node=self.head)
        if self.head:
            self.head.prev_node = node
        if not self.tail:
            self.tail = node
        self.head = node