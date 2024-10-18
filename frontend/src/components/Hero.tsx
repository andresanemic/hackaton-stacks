import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  const handleCreateDao = () => {
    navigate("/create");
  };

  return (
    <section className="w-full text-center py-16 bg-gray-100 mt-16">
      {" "}
      {/* Ajusta mt según la altura del header */}
      <h2 className="text-5xl font-bold text-indigo-600">
        Explore the DAO World
      </h2>
      <p className="text-xl text-gray-600 mt-4">
        Build your DAO, explore communities, and find inspiration for your
        project all in one place.
      </p>
      <div className="mt-8 flex justify-center gap-4">
        <button
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-lg"
          onClick={handleCreateDao}
        >
          Create a DAO
        </button>
        <button className="bg-gray-300 text-gray-800 px-6 py-3 rounded-lg shadow-lg">
          Learn about DAOs
        </button>
        <button className="bg-gray-300 text-gray-800 px-6 py-3 rounded-lg shadow-lg">
          Build faster
        </button>
      </div>
    </section>
  );
}

export default Hero;
