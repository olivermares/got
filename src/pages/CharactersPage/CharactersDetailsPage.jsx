import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import CharactersDetailsGallery from "../../components/utils/CharactersDetailsGallery";
import Header from "../../components/basic/Header";

export default function CharactersDetailsPage() {
  const { id } = useParams();

  const [character, setCharacter] = useState();
  const [house, setHouse] = useState();

  async function getCharacter() {
    try {
      const { data } = await axios(`http://localhost:3000/characters/${id}`);
      setCharacter(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function getHouse(houseName) {
    try {
      const {data} = await axios(`http://localhost:3000/houses?name=${houseName}`);
      setHouse(data[0]);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getCharacter();
  }, []);
  useEffect(()=>{
    if(character)getHouse(character.house)
  }, [character]);
  return (
    <div>
      <Header home={true}/>
      <main className="container">
      <Link to={"/characters"}>
      <div className="return">
        <img className= "img-icon" src="/arrowleft.png" alt="return"/>
        <p className='e-p'>VOLVER</p>
      </div>
      </Link>
      {character && house && <CharactersDetailsGallery data={character} img={house.image} />}
      </main>
    </div>
    
  );
}
