import React from "react";
import { NavLink, Link } from "react-router-dom";

export default function HousesGallery({ data }) {
  //const dataAux= data.map((element)=> {...element, element.image: })
  //console.log(data[0].image)
  return (
      <div className="gallery-card">
        {data.map((item) => (
          
          <div key={item.id}>
          <Link to={`/houses/${item.id}`}>
            <img src={"http://localhost:3000" + item.image} alt={item.name} />
            <h2>{item.name}</h2>
            </Link>
          </div>
         
        ))}
        
      </div>
  );
}
