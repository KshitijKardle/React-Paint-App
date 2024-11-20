import React from "react";

const Menu = ({ setlineWidth, setLineColor, setLineOpacity }) => {
  return (
    <div className="menu">
      <div className="card">
        <label>Color</label>
        <input
          type="color"
          onChange={(e) => {
            setLineColor(e.target.value);
          }}
        />
      </div>

      <div className="card">
        <label>Width</label>
        <input
          type="range"
          min="1"
          max="20"
          onChange={(e) => {
            setlineWidth(e.target.value);
          }}
        />
      </div>

      <div className="card">
        <label>Opacity</label>
        <input
          type="range"
          min="1"
          max="100"
          onChange={(e) => {
            setLineOpacity(e.target.value / 100);
          }}
        />
      </div>
    </div>
  );
};

export default Menu;
