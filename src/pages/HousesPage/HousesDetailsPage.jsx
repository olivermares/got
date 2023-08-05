import React from 'react';
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { useState , useEffect} from 'react';
import axios from 'axios';
import HousesDetailsGallery from '../../components/utils/HousesDetailsGallery';

export default function HousesDetailsPage() {
    const {id}=useParams();
    const [house, setHouse] = useState();

    async function getCharacters() {
      try {
        const {data} = await axios(`http://localhost:3000/houses/${id}`);
        setHouse(data);
      } catch (error) {
        console.log(error);
      }
    }
    useEffect(() => {
      getCharacters();
    }, []);
    return (
      <div className="house">
      <Link to={"/houses"}>
        <p>VOLVER</p>
      </Link>
       {house && <HousesDetailsGallery data={house} />}
      </div>
    );
}
