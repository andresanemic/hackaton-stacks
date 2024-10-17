import React, { useEffect, useState } from "react";
import {
  AppConfig,
  UserSession,
  showConnect,
  openContractCall,
} from "@stacks/connect";
import { StacksMocknet } from "@stacks/network";
import { stringUtf8CV } from "@stacks/transactions";
import { UserData } from "@stacks/auth";

// Import additional components
import Header from './components/Header';
import Hero from './components/Hero';
import DAOCards from './components/DAOCards';
import Footer from './components/Footer';

function App() {
  const [message, setMessage] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [currentMessage, setCurrentMessage] = useState("");
  const [userData, setUserData] = useState<UserData | undefined>(undefined);

  const appConfig = new AppConfig(["store_write"]);
  const userSession = new UserSession({ appConfig });
  const appDetails = {
    name: "Hello Stacks",
    icon: "https://freesvg.org/img/1541103084.png",
  };

  useEffect(() => {
    if (userSession.isSignInPending()) {
      userSession.handlePendingSignIn().then((userData: any) => {
        setUserData(userData);
      });
    } else if (userSession.isUserSignedIn()) {
      setUserData(userSession.loadUserData());
    }
  }, []);

  const connectWallet = () => {
    showConnect({
      appDetails,
      onFinish: () => window.location.reload(),
      userSession,
    });
  };

  const handleMessageChange = (e: any) => {
    setMessage(e.target.value);
  };

  const submitMessage = async (e: any) => {
    e.preventDefault();

    const network = new StacksMocknet();

    const options = {
      contractAddress: "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM",
      contractName: "hello-stacks",
      functionName: "write-message",
      functionArgs: [stringUtf8CV(message)],
      network,
      appDetails,
      onFinish: ({ txId }: { txId: string }) => {
        console.log(txId);
        setTransactionId(txId);
      },
    };

    await openContractCall(options);
  };

  const handleTransactionChange = (e: any) => {
    setTransactionId(e.target.value);
  };

  const retrieveMessage = () => {
    // Add logic to retrieve message using transactionId
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen  gap-8 bg-gray-100 p-4">
      {/* Header Component */}
      <Header />
      
      {/* Hero Section */}
      <Hero />
      
      {/* DAO Cards Section */}
      <DAOCards />

      {/* Main Wallet Connection and Contract Call Logic */}
      <h1 className="text-6xl font-black text-center text-indigo-600">
        Test contract
      </h1>
      
      {!userData && (
        <button
          className="p-4 bg-indigo-500 rounded text-white text-lg shadow-lg"
          onClick={connectWallet}
        >
          Connect Wallet
        </button>
      )}

      {userData && (
        <div className="flex flex-col gap-4 items-center max-w-md w-full">
          <input
            className="p-4 border border-indigo-500 rounded w-full text-lg shadow-sm"
            placeholder="Write message here..."
            onChange={handleMessageChange}
            value={message}
          />
          <button
            className="p-4 bg-indigo-500 rounded text-white text-lg shadow-lg w-full"
            onClick={submitMessage}
          >
            Submit New Message
          </button>
        </div>
      )}

      <div className="flex flex-col gap-4 items-center max-w-md w-full">
        <input
          className="p-4 border border-indigo-500 rounded w-full text-lg shadow-sm"
          placeholder="Paste transaction ID to look up message"
          onChange={handleTransactionChange}
          value={transactionId}
        />
        <button
          className="p-4 bg-indigo-500 rounded text-white text-lg shadow-lg w-full"
          onClick={retrieveMessage}
        >
          Retrieve Message
        </button>
      </div>

      {currentMessage.length > 0 && (
        <p className="text-2xl text-center text-indigo-700">{currentMessage}</p>
      )}

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default App;