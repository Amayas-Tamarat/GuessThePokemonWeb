import { Routes, Route } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-4">🎮 GuessPokemon</h1>
      <p className="text-lg mb-6 text-gray-300 text-center max-w-md">
        Welcome! Try to guess the hidden Pokémon. Each wrong guess gives you a hint.
      </p>
      <a
        href="/game"
        className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold"
      >
        Play as Guest
      </a>
    </div>
  );
}

function Game() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 text-white">
      <h1 className="text-3xl font-bold mb-6">🔥 Game Page</h1>
      <p className="mb-6">This is where the game will go!</p>
      <a
        href="/"
        className="bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-lg font-semibold"
      >
        Back to Home
      </a>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/game" element={<Game />} />
    </Routes>
  );
}
