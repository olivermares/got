import React from "react";
import { Link } from "react-router-dom";

export default function ChronologyGallery({ data }) {
  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <p>{item.age}</p>
          <p>{item.name}</p>
          <img src={"http://localhost:3000" + item.image} alt={item.name} />
        </div>
      ))}
    </div>
  );
}
