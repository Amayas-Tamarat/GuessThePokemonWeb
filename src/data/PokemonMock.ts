export type Pokemon = {
  name: string;
  type1: string;          
  type2?: string;         
  evolutionStage: 1 | 2 | 3; 
  fullyEvolved: boolean;
  color: string;           
  habitat: string;         
  generation: number;      
};

export const pokemonMock: Pokemon[] = [
  {
    name: "Pikachu",
    type1: "Electric",
    evolutionStage: 2,
    fullyEvolved: true,
    color: "Yellow",
    habitat: "Forests",
    generation: 1,
  },
  {
    name: "Bulbasaur",
    type1: "Grass",
    type2: "Poison",
    evolutionStage: 1,
    fullyEvolved: false,
    color: "Green",
    habitat: "Grasslands",
    generation: 1,
  },
  {
    name: "Charmander",
    type1: "Fire",
    evolutionStage: 1,
    fullyEvolved: false,
    color: "Red",
    habitat: "Mountains",
    generation: 1,
  },
  {
    name: "Squirtle",
    type1: "Water",
    evolutionStage: 1,
    fullyEvolved: false,
    color: "Blue",
    habitat: "Lakes",
    generation: 1,
  },
];
