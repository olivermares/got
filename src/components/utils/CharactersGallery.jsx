import React from 'react'
import { Link } from "react-router-dom";

export default function CharactersGallery({data}) {
  return (
    <>
      <div className="list-group" id="list">
          {data.map((item) => (          
          <a className="list-group-item list-group-item-action" href={item.id}>{item}</a>
          ))} 
      </div>
      
          <div data-bs-spy="scroll" data-bs-target="#list" data-bs-offset="0" className= "scrollspy" tabindex="0">
          <div className="row">
          {data-bs-target.map((item) => (
            <div key={item.id} className="col-6 col-lg-2">
            <Link to={`/characters/${item.id}`}>
              <img className='img hideDiv margin-top' src={"http://localhost:3000" + item.image} alt={item.name} />
              <div className='hide alignCenter'>
                <h4 className='e-h4 shadow'>{item.name}</h4>
              </div>
              </Link>
            </div>
            ))}
            <p>{item.id}</p>
        </div>

      
      </div>
    </>
  )
}

