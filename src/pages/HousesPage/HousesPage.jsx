import { useEffect, useState } from "react";
import axios from "axios";
import HousesGallery from "../../components/utils/HousesGallery";


export default function HousesPage() {
  const [houses, setHouses] = useState();

  async function getCharacters() {
    try {
      const {data} = await axios(`http://localhost:3000/houses`);
      //console.log(data)
      setHouses(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <div className="houses">
        {houses && <HousesGallery data={houses} />}
    </div>
  );
}