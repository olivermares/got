import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import HousesDetailsGallery from "../../components/utils/HousesDetailsGallery";
import Header from "../../components/basic/Header";

export default function HousesDetailsPage() {
  const { id } = useParams();
  const [house, setHouse] = useState();

  async function getCharacters() {
    try {
      const { data } = await axios(`http://localhost:3000/houses/${id}`);
      setHouse(data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <>
      <header className="header">
        <Header home={true} />
      </header>
      <main className="container">
        <Link to={"/houses"}>
          <div className="return">
            <img className="img-icon" src="/arrowleft.png" alt="return" />
            <p className="e-p">VOLVER</p>
          </div>
        </Link>
        {house && <HousesDetailsGallery data={house} />}
      </main>
    </>
  );
}
