// i/p : 1 -> 4 -> 6 -> 3 -> 5 -> 2
// o/p : 1 -> 2 -> 3 -> 4 -> 5 -> 6

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class linkedList{
    constructor(value){
        const newNode = new Node(value);

        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }

    printList(){
        let temp = this.head;
        while(temp !== null){
            console.log(temp.value);
            temp = temp.next;
        }
    }

    getHead(){
        if(this.head === null){
            console.log("Head : Null");
        }
        else{
            console.log("Head: ", this.head);
        }
    }

    getTail(){
        if(this.tail === null){
            console.log("Tail: Null")
        }
        else{
            console.log("Tail : ", this.tail);
        }
    }

    makeEmpty(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value){
        const newNode = new Node(value);

        if(!this.head){
            this.head.value = newNode;
            this.tail =newNode;
        }
        else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }
    sort(){

    }
}

const list = new linkedList;

list.push(1);
list.push(2);
list.push(3);
list.push(4);

console.log(list)