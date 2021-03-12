class Node {
    constructor(data) {
        this.val = data
        this.next = null
    }
}

class linkedList {
    constructor(head = null) {
        this.head = head
    }
    getFirst() {
        return this.head;
    }
    size() {
        let count = 0;
        let node = this.head;
        while (node) {
            count++;
            node = node.next
        }
        return count;
    }
    getLast() {
        let lastNode = this.head;
        if (lastNode) {
            while (lastNode.next) {
                lastNode = lastNode.next
            }
        }
        return lastNode;
    }
    clear() { //empty linkedlist
        this.head = null;
    }
}

let node1 = new Node("peter");
let node2 = new Node("miles");
node1.next = node2

let list = new linkedList(node1);
console.log(list.size()); //return 2
console.log(list.getLast()); //return {last node| val + next}
console.log(list.getLast().val); //return miles

