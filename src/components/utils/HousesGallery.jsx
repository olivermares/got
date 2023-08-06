import React from "react";
import { Link } from "react-router-dom";

export default function HousesGallery({ data }) {
  return (
      <div className="row">
        {data.map((item) => (          
          <div key={item.id} className="col-6 col-lg-2">
          <Link to={`/houses/${item.id}`}>
            <img className='img margin-top' src={"http://localhost:3000" + item.image} alt={item.name} />
            <h4 className="e-h4 alignCenter margin-top margin-bottom">{item.name}</h4>
            </Link>
          </div>
         
        ))}       
      </div>
  );
}
