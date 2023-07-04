import React from "react";

const NumsArranged = ({ data, order }) => {
  const sortedData =
    order === "ASC"
      ? [...data].sort((a, b) => a - b)
      : [...data].sort((a, b) => b - a);

  const heading = order === "ASC" ? "Ascending" : "Descending";
  return (
    <div>
      <h2>Numbers Arranged ({heading})</h2>
      <ul>
        {sortedData.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
    </div>
  );
};

export default NumsArranged;
