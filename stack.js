/*
Create a stack class with the following methods and an array to implement a LIFO (Last In First Out) data structure:
    push
    - add item to top of stack
    pop
    - remove and return top item from stack
    peek
    - return top item without removing
    isEmpty
    size
 */

class Stack {
    /**
     * The constructor is executed when instantiating a new Stack() to construct
     * a new instance.
     * @returns {Stack} This new Stack instance is returned without having to
     *    explicitly write 'return' (implicit return).
     */
    constructor(items = []) {
        this.items = items;
    }

}