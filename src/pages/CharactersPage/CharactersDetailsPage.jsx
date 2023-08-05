import React from 'react';
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { useState , useEffect} from 'react';
import axios from 'axios';
import CharactersDetailsGallery from '../../components/utils/CharactersDetailsGallery';

export default function CharactersDetailsPage() {
  const {id}=useParams();
  const [character, setCharacter] = useState();

  async function getCharacter() {
    try {
      const {data} = await axios(`http://localhost:3000/characters/${id}`);
      setCharacter(data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getCharacter();
  }, []);
  return (
    <div>
          <Link to={"/characters"}>
        <p>VOLVER</p>
      </Link>
    {character && <CharactersDetailsGallery data={character} />}
    </div>
  );
}
