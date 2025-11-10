import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-4 text-center">
      <h1 className="text-5xl font-bold mb-6">🎮 GuessPokemon</h1>
      <p className="text-lg text-gray-300 mb-8 max-w-md">
        Welcome! Try to guess the hidden Pokémon. Each wrong guess gives you a new hint.
      </p>

      <div className="flex flex-col space-y-4 w-full max-w-xs">
        <button
          onClick={() => navigate("/game")}
          className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition"
        >
          Play as Guest
        </button>

        <button
          onClick={() => alert('Login system coming soon!')}
          className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg font-semibold transition"
        >
          Login / Signup
        </button>
      </div>
    </div>
  );
}
