const GENESIS_DATA = {
      blockHeaders: {
          parentHash: "DYNAMOBLOX",
          beneficiary: "DYNAMOBLOX",
          difficulty: 1,
          height: 0,
          timestamp: "DYNAMO-EPOCH",
          nonce: 0
      }
  };

  const MILISECONDS = 1;
  const SECONDS = 1000 * MILISECONDS;
  const MINE_RATE = 13 * SECONDS; // Every 13 seconds a block is added to the chain
  
  module.exports = {
      GENESIS_DATA,
      MINE_RATE
  };