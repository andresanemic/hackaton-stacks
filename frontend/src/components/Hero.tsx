import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <section className="w-full py-16 bg-red-600 text-white relative">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold">Build your DAO, Build your World</h1>
        <p className="text-lg mt-4">
          Build your DAO, explore communities, and fund your ideas globally.
        </p>
      </div>

      <div className="container mx-auto px-4 mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* First Card: Create Your DAO */}
        <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg">
          <div className="flex justify-center mb-4">
            {/* Create Icon (PNG from Iconfinder) */}
            <img src="https://cdn.icon-icons.com/icons2/2070/PNG/512/settings_app_icon_125827.png" alt="Create Icon" className="w-12 h-12" />
          </div>
          <h3 className="text-xl font-bold">Create your DAO</h3>
          <p className="text-gray-600 mt-2">
            Mint tokens, set governance parameters, and deploy your DAO on-chain in minutes with our no-code setup process.
          </p>
          <div className="mt-6">
            <button
              className="bg-red-600 text-white px-4 py-2 rounded-lg w-full hover:bg-red-700"
              onClick={() => navigate('/select-dao-type')}
            >
              Create a DAO
            </button>
          </div>
        </div>

        {/* Second Card: Learn about DAOs */}
        <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg">
          <div className="flex justify-center mb-4">
            {/* Learn Icon (PNG from Iconfinder) */}
            <img src="https://cdn.icon-icons.com/icons2/2099/PNG/512/education_online_icon_128092.png" alt="Learn Icon" className="w-12 h-12" />
          </div>
          <h3 className="text-xl font-bold">Learn about DAOs</h3>
          <p className="text-gray-600 mt-2">
            Find inspiration and learn about DAOs in our education portal designed for builders at every stage of the journey.
          </p>
          <div className="mt-6">
            <button
              className="bg-red-600 text-white px-4 py-2 rounded-lg w-full hover:bg-red-700"
              onClick={() => window.open('https://inti-dao-builder.gitbook.io/inti-dao-builder-docs/para-empezar/daos', '_blank')}
            >
              Learn about DAOs
            </button>
          </div>
        </div>

        {/* Third Card: Track Roadmap On Chain */}
        <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg">
          <div className="flex justify-center mb-4">
            {/* Track Icon (PNG from Iconfinder) */}
            <img src="https://icon-icons.com/icons2/1508/PNG/512/pow-proof-of-work-blockchain-technology_106996.png" alt="Track Icon" className="w-12 h-12" />
          </div>
          <h3 className="text-xl font-bold">Track Roadmap On Chain</h3>
          <p className="text-gray-600 mt-2">
            Use our governance plugins to build a DAO, dApp, or anything you can imagine on the Aragon OSx protocol.
          </p>
          <div className="mt-6">
            <button className="bg-gray-300 text-gray-600 px-4 py-2 rounded-lg w-full" disabled>
              Coming soon
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;