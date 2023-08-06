import { useEffect, useState } from "react";
import axios from "axios";
import ChronologyGallery from "../../components/utils/ChronologyGallery";
import Header from "../../components/basic/Header";
import Footer from "../../components/basic/Footer";

export default function ChronologyPage() {
  const [characters, setCharacters] = useState([]);
  const [order, setOrder] = useState(false);

  async function getCharacters() {
    try {
      const { data } = await axios(`http://localhost:3000/characters`);
      setCharacters(data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getCharacters();
    putOrder();
  }, []);

  const putOrder = () => {
    const orderAux = !order;
    let charactersAux = [];
    if (orderAux) {
      charactersAux = characters.sort((a, b) => a.age - b.age);
    } else {
      charactersAux = characters.sort((a, b) => b.age - a.age);
    }
    setOrder(orderAux);
    setCharacters(charactersAux);
  };

  return (
    <div>
    <Header home={true}/>
      <div className="alignCenter">
      <button className="btnOrder" onClick={putOrder}><p className="e-p padding10">O</p></button>
      {characters && <ChronologyGallery data={characters} />}
      </div>
      
      <Footer/>
    </div>
  );
}
