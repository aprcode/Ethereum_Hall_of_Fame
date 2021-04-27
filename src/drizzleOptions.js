import Billboard from './contracts/Billboard.json'

const options ={
  contracts: [Billboard],

  web3: {
    fallback:{
      type: "ws",
      url: "ws://127.0.0.1:8545"
    }
  }
}

export default options;
