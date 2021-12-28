// Object containing all the available OpCodes for the DBVM

opCodes = {
      STOP: 'STOP',     // Halts execution
      PUSH: 'PUSH',     // Pushes value to the stack

      // Mathematics

      ADD: 'ADD',       // Adds numbers on the stack
      SUB: 'SUB',       // Subtracts numbers on the stack
      MUL: 'MUL',       // Multiplies numbers on the stack
      DIV: 'DIV',       // Divides numbers on the stack

      // Comparison & Logic

      LT: 'LT',         // Less than
      GT: 'GT',         // Greater than
      EQ: 'EQ',         // Equality
      AND: 'AND',       // AND operator
      OR: 'OR',         // OR operator

      // Jumps

      JUMP: 'JUMP',     // Moces the program counter to another location in the code array
      JUMPI: 'JUMPI'    // Jump IF
}

module.exports = opCodes
