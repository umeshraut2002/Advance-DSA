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
        while(temp !==){
            console.log(temp.value);
            temp = temp.next;
        }
    }

    getHead(){
        if(!this.head){
            this.head = 
        }
    }
}