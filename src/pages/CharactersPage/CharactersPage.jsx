import { useEffect, useState } from "react";
import axios from "axios";
import CharactersGallery from "../../components/utils/CharactersGallery";
import SearchElement from "../../components/utils/SearchElement";

export default function CharactersPage() {
  const [characters, setCharacters] = useState();
  const [filter, setFilter] = useState("");

  async function getCharacters(localFilter) {
    try {
      const { data } = await axios(
        "http://localhost:3000/characters?&name="+ localFilter);
      console.log("http://localhost:3000/characters&name="+localFilter)
      setCharacters(data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getCharacters(filter);
  }, []);

  const updateFilter = (algo) => {
    const fliterAux = algo;
    setFilter(fliterAux)
    getCharacters(filter);
  };

  return (
    <div className="characters">
      <SearchElement updateFilter={updateFilter} />
      {characters && <CharactersGallery data={characters} />}
    </div>
  );
}
