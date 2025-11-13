import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-between text-gray-900 font-sans py-10 px-4">
    
        <div className="flex flex-col items-center space-y-3 sm:space-y-4 mb-10 w-full max-w-xs">
        <button
          onClick={() => navigate("/game")}
          className="bg-yellow-400 border-4 border-black px-6 sm:px-8 py-3 text-lg sm:text-xl font-bold rounded-lg shadow-[2px_2px_0px_#000] hover:translate-y-1 hover:shadow-none transition w-full"
        >
          ▶ Play as Guest
        </button>

      {/* Pokéball Art */}
      <div className="w-28 h-28 sm:w-32 sm:h-32 my-8 relative flex-shrink-0">
        {/* Top red half */}
        <div className="absolute inset-0 bg-red-500 rounded-full border-4 border-black" />
        <div className="absolute inset-x-0 top-1/2 h-1/2 bg-white rounded-b-full border-4 border-black -mt-[2px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-white border-4 border-black rounded-full" />
      </div>

        <button
          onClick={() => alert('Login system coming soon!')}
          className="bg-blue-500 border-4 border-black px-6 sm:px-8 py-3 text-lg sm:text-xl font-bold rounded-lg shadow-[2px_2px_0px_#000] hover:translate-y-1 hover:shadow-none transition w-full text-white"
        >
          👤 Login / Signup
        </button>
      </div>

      <section className="text-center text-gray-800 mb-10">
        <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-black">
          How to Play
        </h2>
        <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base max-w-md mx-auto">
          <li>1️⃣ Guess the Pokémon silhouette.</li>
          <li>2️⃣ Each wrong guess gives you a new hint.</li>
          <li>3️⃣ Get it right in as few tries as possible!</li>
        </ul>
      </section>
    </div>
  );
}
