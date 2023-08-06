import React from "react";
import { Link } from "react-router-dom";

export default function ChronologyGallery({ data }) {
  return (
    <div className="order row">
      {data.map((item, index) => (
        <div className="col-6 container2">
        {(index % 2===0)  && <div key={item.id} className='order-character margin-left'>
          <h3 className="e-h3 margin-top50 alignCenter border-top">{item.age}</h3>
          <h4 className="e-h4 margin-top5 alignCenter">{item.name}</h4>
          <img className="order-character-img margin-top5" src={"http://localhost:3000" + item.image} alt={item.name} />
        </div>} 
        {(index % 2!==0)  && <div key={item.id} className='order-character padding50 borderleft margin-right'>
          <h3 className="e-h3 margin-top50 alignCenter border-top">{item.age}</h3>
          <h4 className="e-h4 margin-top5 alignCenter">{item.name}</h4>
          <img className="order-character-img margin-top5" src={"http://localhost:3000" + item.image} alt={item.name} />
        </div>}
        </div>
      ))}
    </div>
  );
}
