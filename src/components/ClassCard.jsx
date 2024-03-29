import React from "react";

const ClassCard = ({ img, nameClasse, desc }) => {
  return (
    <div className="item">
      <div className="work">
        <div
          className="img d-flex align-items-end justify-content-center"
          style={{
            backgroundImage: "url(" + `${img}` + ")",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="text w-100">
            <span className="cat">{nameClasse}</span>
            <h3>
              <a href="#">{desc}</a>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
