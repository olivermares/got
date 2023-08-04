import React from 'react'
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
       {house && <HousesDetailsGallery data={house} />}
      </div>
    );
}
