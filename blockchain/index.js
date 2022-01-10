const Block = require('./block');
const Db = require('../util/db');

let genesis = Block.genesis();
class Blockchain {
    constructor() {
        this.blockchainDB = new Db('data/blockchain.json', genesis);

        this.chain = this.blockchainDB.read();
    }

    addBlock({ block }) {
        return new Promise((resolve, reject) => {
            
            Block.validateBlock({ 
                lastBlock: this.chain[this.chain.length - 1],
                block

            }).then(() => { // If the block validation is successful, the new block can be added to the chain

                this.chain.push(block);
                this.blockchainDB.write(this.chain); // Store the block
                this.chain = this.blockchainDB.read();

                return resolve();
            
            }).catch(reject); // If the validation is unsuccessful, return error
        });
    }
}

module.exports = Blockchain;