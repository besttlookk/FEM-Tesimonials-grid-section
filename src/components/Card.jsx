import React from "react";

const Card = ({ data }) => {
  return (
    <div className={`card ${data.image}`}>
      <div className="card__header">
        <div className="avatar">
          <img alt="avatr" src={require(`../images/image-${data.image}.jpg`)} />
        </div>
        <div className="card__detail">
          <p className="name">{data.name}</p>
          <p className="verified">Verified Graduate</p>
        </div>
      </div>
      <h3 className="heading">{data.heading}</h3>
      <p className="content">
        {" "}
        <span>" </span>
        {data.content}
        <span> "</span>
      </p>
    </div>
  );
};

export default Card;
