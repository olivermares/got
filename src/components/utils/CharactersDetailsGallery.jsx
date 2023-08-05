import React from "react";

export default function CharactersDetailsGallery({ data, img }) {
  console.log("http://localhost:3000" + img);
  console.log("http://localhost:3000" + data.image);
  return (
    <div className="details">
      <img src={"http://localhost:3000" + data.image} alt={data.name} />
      <h2 className="e-h2">{data.name}</h2>
      <div className="details-cards">
        <div className="details-card-detail">
          <h3 className="e-h3">CASA</h3>
          <img src={"http://localhost:3000" + img} alt={"escudo"} />
        </div>
        <div className="details-card-detail">
          <h3 className="e-h3">ALIANZAS</h3>
          {data.alliances.map((item) => (
            <p className="e-p" key={item}>
              {item}
            </p>
          ))}
        </div>
        <div className="details-card-detail">
          <h3 className="e-h3">APARICIONES</h3>
          {data.episodes.map((item) => (
            <p className="e-p" key={item}>{item}</p>
          ))}
        </div>
        <div className="details-card-detail">
          <h3 className="e-h3">PADRES</h3>
          {data.parents.map((item) => (
            <p className="e-p" key={item}>{item}</p>
          ))}
        </div>
        <div className="details-card-detail">
          <h3 className="e-h3">DESCENDIENTES</h3>
          {data.siblings.map((item) => (
            <p className="e-p" key={item}>{item}</p>
          ))}
        </div>
        <div className="details-card-detail">
          <h3 className="e-h3">TITULOS</h3>
          {data.titles.map((item) => (
            <p className="e-p" key={item}>{item}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
