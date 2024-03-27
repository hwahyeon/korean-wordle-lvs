import React from "react";
import "@styles/components/_toggle.scss";

const Toggle = ({title, description, isOn, onChange}) => {

  return (
    <div className="toggle-wrapper">
      <div className="desc">
        <strong>{title}</strong>
        <p>{description}</p>
      </div>
      <div className={`toggle-container ${isOn ? "toggle--checked" : ""}`} onClick={onChange}>
        <div className={`toggle-circle ${isOn ? "toggle--checked" : ""}`}/>
      </div>
    </div>
  );
};

export default Toggle;
