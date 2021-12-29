const { describe, it } = require('@jest/globals');
const { sortCharacters, keccakHash } = require('../index');

describe('util', () => {
      describe('sortCharacters()', () => {
            it('creates the same string fot objects with the same properties in a different order', () => {
                  expect(sortCharacters({ dynamo: 'dynamo', blox: 'blox' })).toEqual(sortCharacters({ blox: 'blox', dynamo: 'dynamo' }));
            });

            it('creates a different string for different objects', () => {
                  expect(sortCharacters({ dynamo: 'dynamo' })).not.toEqual(sortCharacters({ blox: 'blox' }));
            });
      });

      describe('keccakHash()', () => {
            it('produces a keccak256 hash', () =>  {
                  expect(keccakHash('dynamoBlox')).toEqual('e0b92a1e8fbeff81ad85755fe3573346620e39f326568020d501bc9cf68f7d10');
            });
      });
});

