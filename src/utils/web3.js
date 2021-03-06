import Web3 from 'web3'

let web3

// Checking if Web3 has been injected by the browser (Mist/MetaMask)
if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  // Use Mist/MetaMask's provider.
  web3 = new Web3(window.web3.currentProvider)
  console.log(web3)
  console.log('Injected web3 detected.')
} else {
  // Fallback to localhost if no web3 injection. We've configured this to
  // use the development console's port by default.
  const provider = new Web3.providers.HttpProvider('http://127.0.0.1:8545')
  web3 = new Web3(provider)
  console.log('No web3 instance injected, using Local web3.')
}

// window.addEventListener('load', async () => {
//   if (window.ethereum) {
//     // console.log("Ethereum detected in Modern dapp browser");
//     web3 = new Web3(window.ethereum)
//     try {
//       // console.log("Requesting Access")
//       await window.ethereum.enable()
//       // console.log("Access Granted")
//       console.log(web3)
//     } catch (error) {
//       console.log(error)
//       // console.log("Access Restricted")
//     }
//   }
// })

export default web3
