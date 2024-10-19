import React, { useState } from "react";
import Web3 from "web3";

const Rewards = () => {
  const [points, setPoints] = useState(0);
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

  const rewardUser = () => {
    setPoints(points + 10);
    // Future logic for rewarding with Ethereum tokens using smart contracts
  };

  return (
    <div className="p-6">
      <h1 className="text-4xl mb-6 text-center">Rewards</h1>
      <button onClick={connectWallet} className="bg-purple-600 text-white py-2 px-4 rounded-lg mb-4">
        {account ? `Connected: ${account}` : "Connect Wallet"}
      </button>
      <p className="text-2xl mb-6">Points Earned: {points}</p>
      <button onClick={rewardUser} className="bg-green-500 text-white py-2 px-4 rounded-lg">
        Reward Me (10 points)
      </button>
    </div>
  );
};

export default Rewards;
