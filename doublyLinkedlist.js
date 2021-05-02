// Doubly Linked list | Unlike a singly linked list, a doubly linked list allows you to traverse backwards

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insertAtBack(data) {
        const newTail = new Node(data);

        if (!this.head) {
            // if no head, set new tail to be both head and the tail
            this.head = this.tail = newTail;
        } else {
            this.tail.next = newTail;
            newTail.prev = this.tail;

            this.tail = newTail;
        }
        return this

    }
}