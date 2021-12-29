const { sortCharacters } = require('../index');

describe('util', () => {
      describe('sortCharacters()', () => {
            it('creates the same string fot objects with the same properties in a different order', () => {
                  expect(sortCharacters({ dynamo: 'dynamo', blox: 'blox' })).toEqual(sortCharacters({ blox: 'blox', dynamo: 'dynamo' }));
            });

            it('creates a different string for different objects', () => {
                  expect(sortCharacters({ dynamo: 'dynamo' })).not.toEqual(sortCharacters({ blox: 'blox' }));
            });
      });
});