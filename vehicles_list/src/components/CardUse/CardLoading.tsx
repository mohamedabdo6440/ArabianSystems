import React, { FC } from "react";

interface Props{
    buttColor:string;
}
const CardLoading :FC<Props> = ({buttColor}) => {
  return (
    <div className="card me-2 mb-3 text-center" aria-hidden="true" style={{ width: "16rem" }}>
      <div
        className="disabled placeholder"
        style={{ width: "16rem", height: "150px" }}
      ></div>
      <div className="card-body">
        <h5 className="card-title placeholder-glow">
          <span className="placeholder col-6"></span>
        </h5>
        <p className="card-text placeholder-glow">
          <span className="placeholder col-7"></span>
          <span className="placeholder col-4"></span>
          <span className="placeholder col-4"></span>
          <span className="placeholder col-6"></span>
          <span className="placeholder col-8"></span>
        </p>
        <button
          className={`w-75 btn disabled placeholder col-6 me-auto btn-${buttColor}`}
          aria-disabled="true"
        ></button>
      </div>
    </div>
  );
};

export default CardLoading;
