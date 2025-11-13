import { useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === "/";

  return (
    <header className="w-full flex flex-col items-center justify-center text-center py-8 px-4 relative">
      {!isHome && (
        <button
          onClick={() => navigate("/")}
          className="absolute left-4 top-4 text-sm sm:text-base font-semibold text-blue-700 hover:text-blue-900 transition"
        >
          ← Home
        </button>
      )}

      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-yellow-400 drop-shadow-[3px_3px_0px_rgba(0,0,0,0.7)]">
        Guess<span className="text-blue-600">Pokémon!</span>
      </h1>
      
      {isHome && (
        <p className="mt-3 text-base sm:text-lg text-gray-800 font-medium">
          Can you guess them all?
        </p>
      )}
    </header>
  );
}
