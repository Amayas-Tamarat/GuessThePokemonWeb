import { useState } from "react";
import { useGame } from "../../hook/useGame";
import type { Pokemon } from "../../data/PokemonMock";

export default function Game() {
  const { currentPokemon, searchPokemon } = useGame();
  console.log(currentPokemon)

  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Pokemon[]>([]);

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setQuery(value);

    const res = searchPokemon(value);
    setResults(res);
  }

  function handleSelect(name: string) {
    setQuery(name);
    setResults([]);
  }

  return (
    <div className="flex flex-col items-center justify-start w-full max-w-md mx-auto px-6 py-10 text-gray-900 font-sans text-center">
      <div className="relative w-48 h-48 sm:w-60 sm:h-60 bg-gray-200 rounded-xl border border-gray-400 shadow-inner flex items-center justify-center">
        <div className="w-2/3 h-2/3 bg-gray-400/80 rounded-full" />
      </div>


      <div className="mt-6 w-full relative">
        <input
          type="text"
          value={query}
          onChange={handleInput}
          placeholder="Enter Pokémon name..."
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-base shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
        />

        {results.length > 0 && (
          <ul className="absolute left-0 right-0 mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto z-10">
            {results.map((p) => (
              <li
                key={p.name}
                onClick={() => handleSelect(p.name)}
                className="px-3 py-2 cursor-pointer hover:bg-gray-100 text-left"
              >
                {p.name}
              </li>
            ))}
          </ul>
        )}
      </div>

      <button
        onClick={() => alert("Guess submitted!")}
        className="mt-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-5 py-2 rounded-md shadow-sm transition"
      >
        Guess
      </button>

      <div className="mt-6 text-gray-600 text-sm">
        Attempts: <span className="font-semibold text-gray-800">0</span>
      </div>
    </div>
  );
}
