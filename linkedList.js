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
}

let node1 = new Node("peter");
let node2 = new Node("miles");
node1.next = node2

let list = new linkedList(node1)

console.log(list.head.next.val) // return miles