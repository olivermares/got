import { useEffect, useState } from "react";
import axios from "axios";
import CharactersGallery from "../../components/utils/CharactersGallery";
import SearchElement from "../../components/utils/SearchElement";

export default function CharactersPage() {
  const [characters, setCharacters] = useState([]);
  const [charactersCopy, setCharactersCopy] = useState([]);

  async function getCharacters() {
    try {
      const { data } = await axios("http://localhost:3000/characters");
      setCharacters(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getCharacters();
  }, []);
  useEffect(() => {
    setCharactersCopy([...characters]);
  }, [characters]);

  const updateFilter = (name) => {
    const charactersAux = characters.filter((character) =>
      character.name.toLowerCase().includes(name.toLowerCase())
    );
    setCharactersCopy(charactersAux);
  };

  return (
    <div className="characters">
      <SearchElement updateFilter={updateFilter} />
      {charactersCopy && <CharactersGallery data={charactersCopy} />}
    </div>
  );
}
