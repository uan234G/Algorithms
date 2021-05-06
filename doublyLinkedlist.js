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

    // determine if a list is empty
    isEmpty() {
        return this.head === null;
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
    insertAtFront(data) {
        const newNode = new Node(data);

        if (!this.head) {
            this.head = this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        return this;
    }

    toArray() {
        const newArray = [];
        let runner = this.head;
        while (runner) {
            newArray.push(runner.data);
            runner = runner.next;
        }
        return newArray;
    }

    seedFromArray(items = []) {
        items.forEach((item) => {
            this.insertAtBack(item);
        });
        return this;
    }

    // remove middle node
    removeMiddle() {
        if (!this.isEmpty() && this.head === this.tail) {
            const removedData = this.head.data;
            this.head = null;
            this.tail = null;
            return removedData;
        }

        let forwardRunner = this.head;
        let backwardsRunner = this.tail;

        while (forwardRunner && backwardsRunner) {
            if (forwardRunner === backwardsRunner) {
                const midNode = forwardRunner;
                midNode.prev.next = midNode.next;
                midNode.next.prev = midNode.prev;
                return midNode.data;
            }

            // runners passed each other without stopping on the same node, even length, we can exit early
            if (forwardRunner.prev === backwardsRunner) {
                return null;
            }

            forwardRunner = forwardRunner.next;
            backwardsRunner = backwardsRunner.prev;
        }
        return null;
    }

    // Inserts a new node with the given newVal after the node that has the
    //    * given targetVal as it's data.
    insertAfter(targetVal, newVal) {
        if (this.isEmpty()) {
            return false;
        }

        let runner = this.head;
        // runner && is in case runner becomes null so we don't check null.data
        while (runner && runner.data !== targetVal) {
            runner = runner.next;
        }

        if (runner === null) {
            return false;
        }

        const newNode = new Node(newVal);
        newNode.prev = runner;
        newNode.next = runner.next;

        if (runner === this.tail) {
            this.tail = newNode;
        } else {
            // if runner was tail then next would be null.
            runner.next.prev = newNode;
        }

        runner.next = newNode;
        return true;
    }
}