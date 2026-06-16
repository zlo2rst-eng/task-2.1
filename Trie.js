/**
 * Seminar 2.5 Simple Trie
 */


class TrieNode {
    constructor(key) {
        this.key = key;
        this.children = {};
        this.isWord = false;
    }
}


class Trie {
    constructor() {
        this.root = new TrieNode(null);
    }

    insert(word) {
        // TODO: вставка слова символ за символом.
        let current = this.root;
        for (const letter of word) {
            if (!current.children[letter]) {
                current.children[letter] = new TrieNode(letter);
            }
            current = current.children[letter];
        }
        // Последний узел помечается как конец слова.
        current.isWord = true;
    }

    hasNode(word){
        // Проверка, что слово целиком есть в дереве.
        let current = this.root;
        for (const letter of word) {
            if (!current.children[letter]) return false;
            current = current.children[letter];
        }
        return current.isWord;
    }

    getAllNodes(){
        // Возвращает все узлы дерева в виде массива (обход в глубину).
        const nodes = [];
        const walk = (node) => {
            for (const key in node.children) {
                const child = node.children[key];
                nodes.push(child);
                walk(child);
            }
        };
        walk(this.root);
        return nodes;
    }
}

module.exports = { Trie };
