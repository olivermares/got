import React from "react";
import { Link } from "react-router-dom";
import SimpleBar from "simplebar-react";

export default function HousesGallery({ data }) {
  return (
    <div className="container">
      <SimpleBar forceVisible="y" autoHide="false" style={{ maxHeight: 500 }}>
        <div className="row container">
          {data.map((item) => (
            <div key={item.id} className="col-6 col-lg-2">
              <Link to={`/houses/${item.id}`}>
                <div className="card">
                  <img
                    className="img"
                    src={"http://localhost:3000" + item.image}
                    alt={item.name}
                  />
                  <h4 className="e-h4 alignCenter">
                    {item.name}
                  </h4>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </SimpleBar>
    </div>
  );
}
