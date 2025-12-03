import React from "react";
import "./MemberCard.css";

const MemberCard = ({ name, picture, role, bio }) => {
  return (
    <div className="member-card">
      <img src={`/images/${picture}`} alt={name} />
      <div className="overlay">
        <h3>{name}</h3>
        <p>{role}</p>
        <p>{bio}</p>
      </div>
    </div>
  );
};

export default MemberCard;
