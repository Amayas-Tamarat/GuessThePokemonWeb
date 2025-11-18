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

  {
  name: "Jigglypuff",
  type1: "Normal",
  type2: "Fairy",
  evolutionStage: 1,
  fullyEvolved: false,
  color: "Pink",
  habitat: "Grasslands",
  generation: 1,
},
{
  name: "Gengar",
  type1: "Ghost",
  type2: "Poison",
  evolutionStage: 3,
  fullyEvolved: true,
  color: "Purple",
  habitat: "Caves",
  generation: 1,
},
{
  name: "Onix",
  type1: "Rock",
  type2: "Ground",
  evolutionStage: 1,
  fullyEvolved: false,
  color: "Gray",
  habitat: "Mountains",
  generation: 1,
},
{
  name: "Psyduck",
  type1: "Water",
  evolutionStage: 1,
  fullyEvolved: false,
  color: "Yellow",
  habitat: "Lakes",
  generation: 1,
},
{
  name: "Eevee",
  type1: "Normal",
  evolutionStage: 1,
  fullyEvolved: false,
  color: "Brown",
  habitat: "Urban",
  generation: 1,
},
{
  name: "Pidgeotto",
  type1: "Normal",
  type2: "Flying",
  evolutionStage: 2,
  fullyEvolved: false,
  color: "Brown",
  habitat: "Forests",
  generation: 1,
},

];
