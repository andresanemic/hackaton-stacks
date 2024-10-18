import React, { useState, useEffect } from "react";
import { AppConfig, UserSession, showConnect } from "@stacks/connect";
import { UserData } from "@stacks/auth";

function Header() {
  const appConfig = new AppConfig(["store_write"]);
  const [userData, setUserData] = useState<UserData | undefined>(undefined);

  const userSession = new UserSession({ appConfig });

  const appDetails = {
    name: "Hello Stacks",
    icon: "https://freesvg.org/img/1541103084.png",
  };

  useEffect(() => {
    if (userSession.isSignInPending()) {
      userSession.handlePendingSignIn().then((data: any) => {
        setUserData(data);
      });
    } else if (userSession.isUserSignedIn()) {
      const data = userSession.loadUserData();
      setUserData(data);
    }
  }, []);

  const connectWallet = () => {
    showConnect({
      appDetails,
      onFinish: () => window.location.reload(),
      userSession,
    });
  };

  const disconnectWallet = () => {
    userSession.signUserOut();
    setUserData(undefined);
  };

  return (
    <header className="w-full flex justify-between items-center py-4 px-6 bg-indigo-600">
      <h1 className="text-2xl text-white font-bold">DAO Builder</h1>
      {!userData ? (
        <button
          className="bg-white text-indigo-600 px-4 py-2 rounded shadow-lg"
          onClick={connectWallet}
        >
          Connect Wallet
        </button>
      ) : (
        <div className="flex items-center">
          <span className="text-white mr-4">
            Wallet Address:{" "}
            {userData.profile.stxAddress.testnet || "No address available"}
          </span>
          <button
            className="bg-white text-indigo-600 px-4 py-2 rounded shadow-lg"
            onClick={disconnectWallet}
          >
            Disconnect
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;
