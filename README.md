# Ethereum HOF Solidity Drizzle 

![Alt Text](https://reactjs.org/favicon.ico) ![Alt Text](https://www.trufflesuite.com/img/favicons/favicon.ico)


![](https://img.shields.io/github/stars/pandao/editor.md.svg) ![](https://img.shields.io/github/forks/pandao/editor.md.svg) ![](https://img.shields.io/github/tag/pandao/editor.md.svg) ![](https://img.shields.io/github/release/pandao/editor.md.svg) ![](https://img.shields.io/github/issues/pandao/editor.md.svg) ![](https://img.shields.io/bower/v/editor.md.svg)


**Table of Contents**

[TOC]


##  Purpose
This project allow the contract owner to generate a ranking. This ranking is based on the amout of Ether sub to the contract. After a transaction the amout is send to the contract owner and the ranking is lock in the contract.

The main goal is give example of a the integration of drizzle 

##  Technical Stake

  -  [Reactjs](https://github.com/facebook/react)  front-end
  -  [Drizzle](https://github.com/trufflesuite/drizzle)  handle the connection to the mainnet
  -  [Truffle](https://github.com/trufflesuite/truffle) & [Ganache-cli](https://github.com/trufflesuite/ganache-cli)  test
  -  [Solidity](https://docs.soliditylang.org/en/v0.8.4/)  contract language

##  Start 
### Install Truffle
Truffle is the most popular development environment and testing framework for DApp developers. It helps you to compile, test, and deploy your contracts to the blockchain.
```bash
$ npm install -g truffle
```

###  Install Ganache
Ganache is a virtual blockchain for local testing
```bash
$ npm install -g ganache-cli
```
### Run Ganache
Before all, you need to start your test blockchain
```bash
$ ganache-cli 
```

### Compile the contract
The contract need to be compile before used
```bash
$ truffle compile
```

### Start React
Now start the fron end 
```bash
$ npm start 
```

## Contributing
The project is used as example of smart contract integration with Drizzle. Please used it, with responsability. 

