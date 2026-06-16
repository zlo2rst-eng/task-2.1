/**
 * Seminar 2.3 Binary search tree
 */

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}


class Tree {
    constructor() {
        this.root = null;
    }

    addNode(node){
        // TODO 1: вставка узла в бинарное дерево поиска.
        // Меньше родителя -> налево, больше -> направо.
        if (this.root === null) {
            this.root = node;
            return;
        }
        let current = this.root;
        while (true) {
            if (node.data < current.data) {
                if (current.left === null) {
                    current.left = node;
                    return;
                }
                current = current.left;
            } else {
                if (current.right === null) {
                    current.right = node;
                    return;
                }
                current = current.right;
            }
        }
    }

    hasNode(data){
        // TODO 2: поиск узла по значению (спуск по дереву).
        let current = this.root;
        while (current !== null) {
            if (data === current.data) return true;
            current = data < current.data ? current.left : current.right;
        }
        return false;
    }
}



module.exports = { Node, Tree }
