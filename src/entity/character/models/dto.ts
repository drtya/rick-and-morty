interface Place {
  name: string;
  url: string;
}

interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: CharacterGender;
  origin: Place;
  location: Place;
  image: string;
  episode: string[];
  url: string;
  created: string;
}
enum CharacterGender {
  "Female" = "Female",
  "Male" = "Male",
  "Genderless" = "Genderless",
  "unknown" = "unknown",
  "undefined" = "undefined",
}
export type { Character, CharacterGender };
