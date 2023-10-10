# Decentralized Exchange Project (DEX)

This personal project is the front-end of a **Decentralized Exchange** that integrates the smart contracts uploaded in [this github repository](https://github.com/DappDojo/Automated-Market-Maker) as part of an Automated Market Maker project. 

For this web application we implemented the [Usedapp](https://usedapp.io/) framework for rapid React development.

An online Web3 example can be found in this [link](https://dappdojo-dex.netlify.app/). The smart contracts were deployed to the Sepolia network.

These are smart contract addresses:

PoolRouter: [0xDcC0FD6FEC01B50c560eA3E749322F1D9f9C6ec3](https://sepolia.etherscan.io/address/0xDcC0FD6FEC01B50c560eA3E749322F1D9f9C6ec3#code)

PoolFactory: [0xA47B4cC48f77dbC0726Fa12eF15c6dbBaff09c79](https://sepolia.etherscan.io/address/0xA47B4cC48f77dbC0726Fa12eF15c6dbBaff09c79#code)

To run the code execute the following commands:

```
npm install
npm run react-app:start
```

If you want to start from scratch make sure you install the framework using the following command:

```
yarn create eth-app my-eth-app
```

> [!NOTE]
> This project was based on the work presented in this interesting [tutorial](https://www.youtube.com/watch?v=Y89q6T1r1Yg) by **Javascript Mastery** on YouTube. The original code can be found in this [github repository](https://github.com/adrianhajdin/project_web3_uniswap). To integrate our contracts we fixed the code and added some improvements.