import { useEffect, useState } from "react";
import axios from "axios";
import CharactersGallery from "../../components/utils/CharactersGallery";
import SearchElement from "../../components/utils/SearchElement";
import Header from "../../components/basic/Header";
import Footer from "../../components/basic/Footer";

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
    <div>
    <Header home={true}/>
    <main className="main">
      <SearchElement updateFilter={updateFilter} />
      {charactersCopy && <CharactersGallery data={charactersCopy} />}
      </main>
      <Footer/>
    </div>
  );
}
