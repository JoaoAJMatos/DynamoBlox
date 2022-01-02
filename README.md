# DynamoBlox

DynamoBlox is a decentralized computer that serves as a platform for building decentralized applications.
It has it's own programming language with a full set of features for mathematical operations, loops, conditionality and more.
This programming language is used to create smart contracts (like in Ethereum).

## Smart Contracts

You can think of a smart contract as an account like any other within the DynamoBlox's cryptocurrency. However, when someone transacts with the smart contract, it actually runs code. This opens the door to a wide variety of useful applications. For example, with smart contracts you can build complex financial systems. These can be used to enforce the rules for ensurance policies, to make investment decisions or even to power gambling schemes. You can even build games on top of DynamoBlox.

## How does DynamoBlox work?

As a decentralized computer, it's code executes in a decentralized manner. Meaning, when code executes on DynamoBlox, it not only executes on one centralized machine, but all the machines in the decentralized network. To support this decentralization, DynamoBlox leverages it's own blockchain. Blockchains are used as public ledgers of data (most often transactional data).

Bitcoin and many other cryptocurrencies also relie on the same basic principles of the blockchain to store transactional data too. However, DynamoBlox differs from Bitcoin since transactions aren't simple exchanges in currency. They are actually transactions of state. Each transaction describing how a computer's state should change. This allows everyone in the network to syncronize their computer's state by keeping their blockchains up-to-date but also know what state transactions to run in order to keep their machine state up-to-date.

## Bloxy (DynamoBlox's programming language)

In order to create and run the smart contracts, DynamoBlox needs a special virtual environment, just like Java. The code executed by the DynamoBlox's VM (DBVM) is written in a language called Bloxy which includes a various set of instructions to perform mathmatical operations, loops, conditionality and more.

Following are the instructions (OpCodes) supported by the DBVM as of 01-02-2022:

| OpCode  | Description                              |
|---------|------------------------------------------|
| `STOP`  | Halts program execution                  |
| `PUSH`  | Pushes a word to the stack               |
| `ADD`   | Addition operation                       |
| `SUB`   | Subtraction operation                    |
| `MUL`   | Multiplication operation                 |
| `DIV`   | Division operation                       |
| `LT`    | Less-than comparison                     |
| `GT`    | Greater-than comparison                  |
| `EQ`    | Equality comparison                      |
| `AND`   | Bitwise AND operation                    |
| `OR`    | Bitwise OR operation                     |
| `JUMP`  | Alter program counter                    |
| `JUMPI` | Conditionally alter the program counter  |
