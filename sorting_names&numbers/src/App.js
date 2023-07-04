import React from "react";
import NamesArranged from "./NamesArranged";
import NumsArranged from "./NumsArranged";

export default function App() {
  const names = ["mahek", "nidhi", "divyang", "fenil", "umang"];
  const numbers = [2, -8, 9, 58, 47, -76, 38];

  return (
    <div className="App">
      <h1>Sorting Examples</h1>
      <NamesArranged names={names} orderBy="ALPHABETS" order="ASC" />
      <NumsArranged data={numbers} order="DESC" />
    </div>
  );
}
