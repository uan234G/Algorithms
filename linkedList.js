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
    getAverage() {
        let runner = this.head;
        console.log(runner.val);
        let sum = 0;
        let count = 0;
        while (runner) {
            count++;
            sum += runner.val;
            runner = runner.next;
        }
        return sum / count;
    }
}

// let node1 = new Node("peter");
// let node2 = new Node("miles");
// node1.next = node2

// let list = new linkedList(node1);
// console.log(list.size()); //return 2
// console.log(list.getLast()); //return {last node| val + next}
// console.log(list.getLast().val); //return miles

//getaverage
let node1 = new Node(3);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);
let node5 = new Node(5);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = null;
let list = new linkedList(node1);
let avgv = list.getAverage();
console.log(avgv);