const { GENESIS_DATA } = require('../config');

const HASH_LENGTH = 64;
const MAX_HASH_VALUE = parseInt("F".repeat(HASH_LENGTH), 16);

class Block {
    constructor({ blockHeaders }) {
        this.blockHeaders = blockHeaders;
    }

    static calculateBlockTargetHash({ lastBlock }) {
        const value = (MAX_HASH_VALUE / lastBlock.blockHeaders.difficulty).toString(16);
    
        if (value.length > HASH_LENGTH) {
            return "F".repeat(HASH_LENGTH);
        }

        return "0".repeat(HASH_LENGTH - value.length) + value;
    }
  
    static mineBlock({ lastBlock, beneficiary }) {
        
    }
  
    static genesis() { // Returns the GENESIS Block
        return new this(GENESIS_DATA);
    }
}

module.exports = Block;