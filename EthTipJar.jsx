import { useState, useEffect } from "react";
import Web3 from "web3";


export default function EthTipJar() {
  const [hasEthAccount, setHasEthAccount] = useState(false)
  const [ethAmount, setEthAmount] = useState("0.01")
  const [isValidKeyPress, setIsValidKeyPress] = useState(true)
  const [displayError, setDisplayError] = useState(false)

  const web3 = new Web3(Web3.givenProvider)
  const receivingAccount = "0x96dd23677a9454fbb79b0a8d1722b29bb4f15c66";

  useEffect(() => {
    if (window.ethereum) {
      setHasEthAccount(true)
    }
  }, [])


  const validateInput = (event) => {
    if (event.keyCode < 65 || event.keyCode > 90) {
      console.log("input was not alpha");
      setIsValidKeyPress(true)
    } else {
      setIsValidKeyPress(false)
      setDisplayError(true)
      setTimeout(() => {
        setDisplayError(false)
      }, 2000)
    }
  }


  const handleSend = async function (e) {
    e.preventDefault()
    const accounts = await window.ethereum.request({ method: "eth_requestAccounts" })
    const wei = web3.utils.toWei(ethAmount, "ether")
    if (accounts.length > 0) {
      window.ethereum.request({
        method: "eth_sendTransaction",
        params: [{
          from: accounts[0],
          to: receivingAccount,
          value: web3.utils.toHex(wei)
        }]
      })
    }
    console.log(ethAmount)
  }

  return (
    <>
      {hasEthAccount &&
      <div className="fixed bottom-4 right-4 px-2 pb-2 pt-1 rounded-md bg-gradient-to-r from-gray-800 via-gray-900 to-black shadow">
        <form className="flex flex-col justify-evenly text-white py-5 px-5 font-inter">
          {
            displayError ? (
              <label className="text-xl pt-1 pb-3 text-center">
                Only numbers are permitted.
              </label>
            ) : (
              <label className="text-xl pt-1 pb-3 text-center">
                Show your support, send Ethereum.
              </label>
            )
          }
          <div className="py-3 text-3xl flex justify-evenly max-w-min">
            <input
              onKeyDown={(event) => validateInput(event)}
              onKeyUp={() => setIsValidKeyPress(false)}
              onChange={(event) => {
                if (isValidKeyPress) {
                  setEthAmount(event.target.value.toString())
                  setIsValidKeyPress(false)
                } else {
                  console.log("keypress was not valid", event.target.value)
                }
              }
              }
              type="number"
              value={ethAmount}
              className="text-right px-5 bg-gray-600 input-arrows-none w-72 rounded-md"
            />
            <span className="px-2 align-middle">ETH</span>
          </div>
          <button
            className="rounded-md py-2 px-4 font-semibold tracking-wide text-white bg-gradient-to-r from-green-400 to-blue-500"
            onClick={(e) => handleSend(e)}
          >
            Send Tip
          </button>
        </form>
      </div>
      }
    </>
  )
}