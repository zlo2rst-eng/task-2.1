/**
 * Seminar 2.2 Transaction output
 */

const SHA256 = require('ethereum-cryptography/sha256').sha256;
const utf8ToBytes = require('ethereum-cryptography/utils').utf8ToBytes;


class Transaction {
    constructor(from, to, value) {
        // TODO 1: инициализация полей транзакции.
        this.from = from;
        this.to = to;
        this.value = value;
        this.spent = false;
        // Хеш считается от конкатенации from + to + value.
        this.hash = SHA256(utf8ToBytes(from + to + value));
    }

    spend() {
        // TODO 2: транзакцию нельзя провести дважды.
        if (this.spent) {
            throw new Error('Already spended!');
        }
        this.spent = true;
    }
}

module.exports = { Transaction }
