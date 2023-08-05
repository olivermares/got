import React from "react";
import { Link } from "react-router-dom";

export default function HousesGallery({ data }) {
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
