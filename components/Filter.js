
import React from "react";
import "./Filter.css";

const Filter = ({ activeFilter, onChangeFilter }) => {
  return (
    <div className="filter">
      <select
        value={activeFilter}
        onChange={(e) => onChangeFilter(e.target.value)}
      >
        <option value="all" style={{ color: "black" }}>
          All
        </option>
        <option value="active" style={{ color: "blue" }}>
          Active
        </option>
        <option value="completed" style={{ color: "pink" }}>
          Completed
        </option>
      </select>
    </div>
  );
};

export default Filter;
