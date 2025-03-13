import React from "react";
import "@styles/components/_toggle.scss";

const Toggle = ({ title, description, isOn, onChange }) => {
  return (
    <div className="toggle">
      <div className="toggle__description">
        <strong>{title}</strong>
        <p>{description}</p>
      </div>
      <div
        className={`toggle__switch ${isOn ? "toggle__switch--checked" : ""}`}
        onClick={onChange}
      >
        <div
          className={`toggle__circle ${isOn ? "toggle__circle--checked" : ""}`}
        />
      </div>
    </div>
  );
};

export default Toggle;
