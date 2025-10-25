package linkedlist

import (
	"errors"
)

// Define List and Node types here.
type (
	Node struct {
		Val  interface{}
		next *Node
		prev *Node
	}

	List struct {
		Head *Node
		Tail *Node
	}
)

var (
	ErrEmptyList = errors.New("empty list")
)

// NewNode creates a new doubly linked list node with the given value.
func NewNode(data interface{}) *Node {
	return &Node{
		Val:  data,
		next: nil,
		prev: nil,
	}
}

// NewList creates a new doubly linked list with the provided arguments as elements.
func NewList(args ...interface{}) *List {
	ll := &List{
		Head: nil,
		Tail: nil,
	}

	if len(args) < 1 {
		return ll
	}

	node := NewNode(args[0])
	ll.Head = node
	ll.Tail = node

	if len(args) == 1 {
		return ll
	}

	current := ll.Head

	for _, arg := range args[1:] {
		node := NewNode(arg)
		current.next = node
		node.prev = current
		current = current.next
	}

	ll.Tail = current
	return ll
}

func (n *Node) Next() *Node {
	return n.next
}

func (n *Node) Prev() *Node {
	return n.prev
}

// PushFront adds a new node to the front of a doubly linked list
func (l *List) PushFront(v interface{}) {
	node := NewNode(v)
	switch {
	case l.Head == nil:
		l.Head = node
		l.Tail = l.Head
	case l.Head != nil && l.Tail != nil:
		node.next = l.Head
		l.Head.prev = node
		l.Head = node
	}
}

// PushBack adds a new node to the back of a doubly linked list
func (l *List) PushBack(v interface{}) {
	node := NewNode(v)
	if l.Head == nil {
		l.Head = node
		l.Tail = node
		return
	}
	if l.Head != nil && l.Tail != nil {
		l.Tail.next = node
		node.prev = l.Tail
		l.Tail = node
		return
	}
}

// PopFront removes the first node of a doubly linked list
func (l *List) PopFront() (interface{}, error) {
	switch {
	// empty list
	case l.Head == nil && l.Tail == nil:
		return nil, ErrEmptyList

	// linked list with more than 1 node
	case l.Head != nil && l.Tail != nil && l.Head.next != nil:
		node := l.Head
		next := l.Head.next
		next.prev = nil
		l.Head = next
		return node.Val, nil

	// head is the tail
	case l.Head != nil && l.Tail != nil && l.Head.next == nil:
		node := l.Head
		l.Head = nil
		l.Tail = nil
		return node.Val, nil

	// no case matched
	default:
		return nil, errors.New("unexpected error")
	}
}

// PopBack removes the last node of a doubly linked list
func (l *List) PopBack() (interface{}, error) {
	switch {

	// empty list
	case l.Head == nil && l.Tail == nil:
		return nil, ErrEmptyList

	// linked list with 1 node, the head is the tail
	case l.Head != nil && l.Tail != nil && l.Tail.prev == nil:
		tail := l.Tail
		l.Head = nil
		l.Tail = nil
		return tail.Val, nil

	// linked list has more than 1 node
	case l.Head != nil && l.Tail != nil && l.Tail.prev != nil:
		tail := l.Tail
		l.Tail.prev.next = nil
		l.Tail = l.Tail.prev
		return tail.Val, nil

	default:
		return nil, errors.New("unexpected error")
	}
}

func (l *List) Reverse() {
	if l.Head == nil || l.Head.next == nil {
		return
	}

	var prev, next *Node
	current := l.Head
	tail := current

	for current != nil {
		next = current.next
		current.next = prev
		prev = current
		current = next
		prev.prev = current
	}

	l.Head, l.Tail = prev, tail
}

func (l *List) First() *Node {
	return l.Head
}

func (l *List) Last() *Node {
	return l.Tail
}
