import React from 'react'
import { Link } from "react-router-dom";

export default function CharactersGallery({data}) {
  return (
    <div className="row">
              {data.map((item) => (          
          <div key={item.id} className="col-12 col-lg-3">
          <Link to={`/characters/${item.id}`}>
            <img src={"http://localhost:3000" + item.image} alt={item.name} />
            <h2>{item.name}</h2>
            </Link>
          </div>
         
        ))} 
    </div>
  )
}
