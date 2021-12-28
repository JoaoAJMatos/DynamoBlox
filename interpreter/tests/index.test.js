const Interpreter = require('../index');

describe('Interpreter', () => {
          describe('runCode()', () => {
                    // Mathematic instructions tests

                    describe('and the code includes ADD', () => {
                              it('adds two values', () => {
                                        expect(
                                                  new Interpreter().runCode(['PUSH', 2, 'PUSH', 3, 'ADD', 'STOP'])
                                        ).toBe(5);
                              });
                    });

                    describe('and the code includes SUB', () => {
                              it('subtracts one value from another', () => {
                                        expect(
                                                  new Interpreter().runCode(['PUSH', 2, 'PUSH', 3, 'SUB', 'STOP'])
                                        ).toBe(1);
                              });
                    });

                    describe('and the code includes MUL', () => {
                              it('multiplies two values', () => {
                                        expect(
                                                  new Interpreter().runCode(['PUSH', 2, 'PUSH', 3, 'MUL', 'STOP'])
                                        ).toBe(6);
                              });
                    });

                    describe('and the code includes DIV', () => {
                              it('devide a value from another', () => {
                                        expect(
                                                  new Interpreter().runCode(['PUSH', 2, 'PUSH', 3, 'DIV', 'STOP'])
                                        ).toBe(1.5);
                              });
                    });

                    // Comparison instructions tests

                    describe('and the code includes LT', () => {
                              it('returns if one value is less then another', () => {
                                        expect(
                                                  new Interpreter().runCode(['PUSH', 2, 'PUSH', 3, 'LT', 'STOP'])
                                        ).toBe(0);
                              });
                    });

                    describe('and the code includes GT', () => {
                              it('check if one value is greater than another', () => {
                                        expect(
                                                  new Interpreter().runCode(['PUSH', 2, 'PUSH', 3, 'GT', 'STOP'])
                                        ).toBe(1);
                              });
                    });

                    describe('and the code includes EQ', () => {
                              it('checks if one value is equal to another', () => {
                                        expect(
                                                  new Interpreter().runCode(['PUSH', 2, 'PUSH', 3, 'EQ', 'STOP'])
                                        ).toBe(0);
                              });
                    });

                    // Logic instructions tests

                    describe('and the code includes AND', () => {
                              it('ANDs two booleans', () => {
                                        expect(
                                                  new Interpreter().runCode(['PUSH', 0, 'PUSH', 1, 'AND', 'STOP'])
                                        ).toBe(0);
                              });
                    });

                    describe('and the code includes OR', () => {
                              it('ORs two booleans', () => {
                                        expect(
                                                  new Interpreter().runCode(['PUSH', 0, 'PUSH', 1, 'OR', 'STOP'])
                                        ).toBe(1);
                              });
                    });

                    // Jump instructions tests

                    describe('and the code includes JUMP', () => {
                              it('JUMPS to a destination', () => {
                                        expect(
                                                  new Interpreter().runCode(['PUSH', 6, 'JUMP', 'PUSH', 0, 'JUMP', 'PUSH', '0x0', 'STOP'])
                                        ).toBe('0x0');
                              });
                    });

                    describe('and the code includes JUMPI', () => {
                              it('JUMPS to a destination', () => {
                                        expect(
                                                  new Interpreter().runCode(['PUSH', 8, 'PUSH', 1, 'JUMPI', 'PUSH', 0, 'JUMP', 'PUSH', '0x0', 'STOP'])
                                        ).toBe('0x0');
                              });
                    });

                    // Errors

                    describe('and the code includes an invalid JUMP destinantion', () => {
                              it('throws an error', () => {
                                        expect(
                                                  () => new Interpreter().runCode(['PUSH', 99, 'JUMP', 'PUSH', 0, 'JUMP', 'PUSH', '0x0', 'STOP'])   
                                        ).toThrow('Invalid JUMP destination: 99.');
                              });
                    });

                    describe('and the code includes an invalid JUMP destinantion', () => {
                              it('throws an error', () => {
                                        expect(
                                                  () => new Interpreter().runCode(['PUSH', 0, 'PUSH'])   
                                        ).toThrow('No value passed to PUSH instruction. PUSH instruction cannot be last.');
                              });
                    });
          });
});