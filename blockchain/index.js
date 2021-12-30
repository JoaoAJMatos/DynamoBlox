const Block = require('./block');

class Blockchain {
    constructor() {
        this.chain = [Block.genesis()];
    }

    addBlock({ block }) {
        return new Promise((resolve, reject) => {
            
            Block.validateBlock({ 
                lastBlock: this.chain[this.chain.length - 1],
                block

            }).then(() => { // If the block validation is successful, the new block can be added to the chain

                this.chain.push(block);

                return resolve();
            
            }).catch(error => reject(error)); // If the validation is unsuccessful, return error
        });
    }
}

module.exports = Blockchain;