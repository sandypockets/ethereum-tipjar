# Ethereum Tip Jar
A React component to add ETH tipping functionality to website styled with Tailwind CSS.

### Note
The popup is only displayed if the user has a wallet, though the popup could be easily modified to popup all the time too. 

## How it works
When the user enters an amount in the tip form and clicks **Send Tip**, their browser based ETH wallet creates a transaction. The user then approves or rejects the transaction. If approved, the ETH is sent from the user's account to the `receivingAccount` in `EthTipJar.jsx`.

## Getting started
1. Fork and clone this repository.
2. Copy or move the `EthTipJar.jsx` file into your project.
3. In the `EthTipJar.jsx` file, on Line 12, change the `receivingAccount` constant to the Ethereum account you want to receive tips at. 
4. Ensure that you have the dependencies below installed. Packages can be managed with `npm` or `yarn`.

## Dependencies
* [React](https://www.npmjs.com/package/react)
* [Web3.js](https://www.npmjs.com/package/web3)
* [Tailwind CSS](https://www.npmjs.com/package/tailwindcss)

## Screenshots

![ethereum tip jar screenshot](https://github.com/sandypockets/ethereum-tipjar/blob/main/docs/eth-tip-jar.png?raw=true)

![ethereum tip jar screenshot](https://github.com/sandypockets/ethereum-tipjar/blob/main/docs/eth-tip-jar-white-bg.png?raw=true)

## Additional docs
* [Tailwind CSS installation guide](https://tailwindcss.com/docs/installation)