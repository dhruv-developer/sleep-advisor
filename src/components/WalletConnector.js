import React, { useState } from "react";
import Web3 from "web3";

const WalletConnector = () => {
  const [account, setAccount] = useState("");

  const connectWallet = async () => {
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
      const accounts = await web3.eth.getAccounts();
      setAccount(accounts[0]);
    } else {
      alert("Please install MetaMask!");
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg text-black">
      <h2 className="text-3xl font-semibold mb-6">Connect Ethereum Wallet</h2>
      <button
        onClick={connectWallet}
        className="bg-purple-600 text-white py-2 px-4 rounded-lg"
      >
        {account ? `Connected: ${account}` : "Connect Wallet"}
      </button>
    </div>
  );
};

export default WalletConnector;
