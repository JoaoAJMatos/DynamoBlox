const { GENESIS_DATA } = require('../config');

class Block {
          constructor({ blockHeaders }) {
                    this.blockHeaders = blockHeaders;
          }

          static mineBlock({ lastBlock }) {

          }

          static genesis() { // Returns the GENESIS Block
                    return new this(GENESIS_DATA);
          }
}

module.exports = Block;