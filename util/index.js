// DynamoBlox Utility
const keccak256 = require('js-sha3').keccak256;

const sortCharacters = data => {
      return JSON.stringify(data).split('').sort().join(''); // Produces the same output string if the order of the elements in an object is changed
}

const keccakHash = data => { // Hash incomming string
      const hash = keccak256.create();

      hash.update(sortCharacters(data));

      return hash.hex();
}

module.exports = {
      sortCharacters,
      keccakHash
};