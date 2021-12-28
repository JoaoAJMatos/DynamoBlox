// Bloxy Interpreter

const opCodes = require('./opCodes');

const EXECUTION_COMPLETE = 'Exited with code 0';
class Interpreter {
  constructor() {
    this.state = {
      programCounter: 0,
      stack: [],
      code: []
    };
  }

  // Jump helper method
  jump() {
    const destination = this.state.stack.pop(); // Get destination of the jump 

    if (destination < 0 || destination > this.state.code.length) { // Validate the destination of the jump
      throw new Error(`Invalid JUMP destination: ${destination}.`);
    }

    this.state.programCounter = destination; // Set the program counter to the destination
    this.state.programCounter--; // Since the PC (program counter) is incremented in every iterarion we must decrement it
  }

  runCode(code) {
    this.state.code = code;

    while (this.state.programCounter < this.state.code.length) { // Loop through the code inside the `code` array interpreter

      const opCode = this.state.code[this.state.programCounter];

      try {

        switch (opCode) {

          case opCodes.STOP: // Halts execution
            throw new Error(EXECUTION_COMPLETE);
          
          case opCodes.PUSH: // Pushes a value to the stack
            this.state.programCounter++;

            if (this.state.programCounter === this.state.code.length) { // If the PUSH instruction is last in the code, there is nothing to PUSH. So, return error
              throw new Error(`No value passed to PUSH instruction. PUSH instruction cannot be last.`)
            }

            const value = this.state.code[this.state.programCounter];
            this.state.stack.push(value);
            break;
          
          case opCodes.ADD:                             // Since all 9 instructions interact with the stack the same way
          case opCodes.SUB:                             // (pop 2 values from stack, push final value to stack). We can
          case opCodes.MUL:                             // stack the `case` statements up like this in order to avoid redundant code
          case opCodes.DIV:
          case opCodes.LT:                              // Logic and comparison statements also pop and push values to the stack.
          case opCodes.GT:                              // The result pushed to the stack wil be `1` if the condition evaluated is
          case opCodes.EQ:                              // true, and `0` otherwise.
          case opCodes.AND:
          case opCodes.OR:
          
            let a = this.state.stack.pop();             // The `a` variable always corresponds to the latest value added to the stack
            let b = this.state.stack.pop();             // In the case of a code such as ['PUSH', 2, 'PUSH', 3] then a = 3 and b = 2

            // Add support for ASCII arythmetics
            //
            // Check if `a` and/or `b` are a Char
            // If so, get the ascii value. Do the mathmatic operation, return final value.
            // If the value on the stack is a string, get the ascii value of the first letter and perform the same operation
             
            if (typeof a == 'string' || a instanceof String) {
              a = a.charCodeAt(0);
            }

            if (typeof b == 'string' || b instanceof String) {
              b = b.charCodeAt(0);
            }

            let result;

            if (opCode === opCodes.ADD) result = a + b;
            if (opCode === opCodes.SUB) result = a - b;
            if (opCode === opCodes.MUL) result = a * b;

            // Check for division by 0
            if (b !== 0) {
              if (opCode === opCodes.DIV) result = a / b;
            
            } else {
              throw new Error("Division by 0 caught");
            }
            
            
            if (opCode === opCodes.LT) result = a < b ? 1 : 0;
            if (opCode === opCodes.GT) result = a > b ? 1 : 0;
            if (opCode === opCodes.EQ) result = a === b ? 1 : 0;

            // Only allow logic operations if the values on the stack are boolean values
            if ((a === 1 || a === 0) && (b === 1 || b === 0)){

              if (opCode === opCodes.AND) result = a && b;
              if (opCode === opCodes.OR) result = a || b;
            
            } else { // Else, throw error
              throw new Error(`Two boolean arguments expected, got: ${a}, ${b}`);
            }

            this.state.stack.push(result);
            break;
          
          case opCodes.JUMP:
            this.jump();
            break;

          case opCodes.JUMPI:
            const condition = this.state.stack.pop();
            
            if (condition !== 0 || 1) {
              throw new Error(`JUMPI only accepts boolean values, but ${condition} was passed`);
            }

            if (condition === 1) {
              this.jump();
              break;
            }

          default:
            break;
        }
      } catch (error) {

        if (error.message === EXECUTION_COMPLETE) { // Check if the code correctly exited before returning final stack value
          return this.state.stack[this.state.stack.length-1];
        }

        throw error;
      }

      this.state.programCounter++; // Increment program counter
    }
  }
}

// Code testing

const code = ['PUSH', 0, 'PUSH', 1, 'DIV', 'STOP'];
try {
  result = new Interpreter().runCode(code);
  console.log(result);
} catch (error){
  console.log(error)
}
