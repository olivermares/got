import React from "react";

export default function HousesDetailsGallery({ data }) {
  return (
    <div className="details">
      <img src={"http://localhost:3000" + data.image} alt={data.name} />
      <h2>{data.name}</h2>
      <div className="details-card">
        <div className="details-card-detail">
          <h3>SEDE</h3>
          <p>{data.settlement}</p>
        </div>
        <div className="details-card-detail">
          <h3>REGION</h3>
          <p>{data.region}</p>
        </div>
        <div className="details-card-detail">
          <h3>ALIANZAS</h3>
          {data.alliances.map((item)=>(
            <p key={item}>{item}</p>
          ))}
        </div>
        <div className="details-card-detail">
          <h3>RELIGIONES (SECTAS)</h3>
          {data.religions.map((item)=>(
            <p key={item}>{item}</p>
          ))}
        </div>
        <div className="details-card-detail">
          <h3>FUNDACION</h3>
          <p>{data.foundation}</p>
        </div>
      </div>
    </div>
  );
}
