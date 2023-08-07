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
    console.log(name);
    const charactersAux = characters.filter((character) =>
      character.name.toLowerCase().includes(name.toLowerCase())
    );
    setCharactersCopy(charactersAux);
  };

  return (
    <>
      <header className="header">
        <SearchElement updateFilter={updateFilter} />
        <Header home={true} />
      </header>
      <main className="main">
        {charactersCopy && (
          <CharactersGallery
            updateFilter={updateFilter}
            data={charactersCopy}
          />
        )}
      </main>
      <footer className="footer margin-top margin-bottom">
        <Footer />
      </footer>
    </>
  );
}
