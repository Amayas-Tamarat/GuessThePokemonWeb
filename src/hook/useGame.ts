import { useState, useEffect } from "react";
import { pokemonMock } from "../data/PokemonMock";
import type { Pokemon } from "../data/PokemonMock";

export function useGame() {
  const [currentPokemon, setCurrentPokemon] = useState<Pokemon | null>(null);
  const [attempts, setAttempts] = useState(0);

  useEffect(() => {
    const random = Math.floor(Math.random() * pokemonMock.length);
    setCurrentPokemon(pokemonMock[random]);
  }, []);


  function searchPokemon(query: string) {
    if (!query) return [];
    const normalizedQuery = query.toLowerCase();
    return pokemonMock.filter(p => p.name.toLowerCase().includes(normalizedQuery)).slice(0, 10)
  
  }

  function checkAnswer(name: string) {
    if (!currentPokemon) return false;

    const normalizedGuess = name.trim().toLowerCase();
    const normalizedCorrect = currentPokemon.name.toLowerCase();

    const isCorrect = normalizedGuess === normalizedCorrect;

    setAttempts(prev => prev + 1);

    return isCorrect;
  }

  return { currentPokemon, searchPokemon, checkAnswer, attempts };
}

