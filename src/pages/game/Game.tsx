import { useGame } from "../../hook/useGame";

export default function Game() {

    const { currentPokemon } = useGame();
    console.log(currentPokemon);

  return (
    <div className="flex flex-col items-center justify-start w-full max-w-md mx-auto px-6 py-10 text-gray-900 font-sans text-center">
        
            <div className="relative w-48 h-48 sm:w-60 sm:h-60 bg-gray-200 rounded-xl border border-gray-400 shadow-inner flex items-center justify-center">
                <div className="w-2/3 h-2/3 bg-gray-400/80 rounded-full" />
            </div>

            <div className="mt-6 bg-white border border-gray-300 rounded-lg p-3 shadow-sm w-full">
                <p className="text-gray-700 text-base">
                Hint: This Pokémon is known for its speed ⚡
                </p>
            </div>

        <div className="mt-6 flex flex-col sm:flex-row items-center gap-3 w-full">
            <input
            type="text"
            placeholder="Enter Pokémon name..."
            className="flex-grow border border-gray-300 rounded-md px-3 py-2 text-base shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button
            onClick={() => alert("Guess submitted!")}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-5 py-2 rounded-md shadow-sm transition"
            >
            Guess
            </button>
        </div>

        <div className="mt-6 text-gray-600 text-sm">
            Attempts: <span className="font-semibold text-gray-800">0</span>
        </div>
    </div>
  );
}
