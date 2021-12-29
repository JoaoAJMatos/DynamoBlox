// DynamoBlox Utility

const sortCharacters = data => {
      return JSON.stringify(data).split('').sort().join(''); // Produces the same output string if the order of the elements in an object is changed
}

module.exports = {
      sortCharacters
};