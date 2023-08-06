import React from 'react'
import { Link } from "react-router-dom";

export default function CharactersGallery({data}) {
  return (
    <div className="row">
              {data.map((item) => (          
          <div key={item.id} className="col-12 col-lg-3">
          <Link to={`/characters/${item.id}`}>
            <img className='img' src={"http://localhost:3000" + item.image} alt={item.name} />
            <h4 className='e-h4'>{item.name}</h4>
            </Link>
          </div>
         
        ))} 
    </div>
  )
}
