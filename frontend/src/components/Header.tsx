import React from 'react';

function Header() {
  return (
    <header className="w-full flex justify-between items-center py-4 px-6 bg-indigo-600">
      <h1 className="text-2xl text-white font-bold">DAO Builder</h1>
      <button className="bg-white text-indigo-600 px-4 py-2 rounded shadow-lg">
        Connect Wallet
      </button>
    </header>
  );
}

export default Header;