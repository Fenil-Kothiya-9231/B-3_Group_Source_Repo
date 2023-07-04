import * as React from "react";
import "./styles.css";
const sorted = (ary) => {
  ary.sort((item1, item2) => {
    if (item1.name.length < item2.name.length) return 1;
    if (item1.name.length > item2.name.length) return -1;

    if (item1.name.length === item2.name.length) {
      return item1.fChar.localeCompare(item2.fChar);
    }
  });
  return ary;
};
export default function App() {
  const [name, setName] = React.useState("");
  const [records, setRecords] = React.useState([]);
  const [srecords, setSrecords] = React.useState([]);
  const [num, setNum] = React.useState(0);
  const handleSubmit = () => {
    const newRecords = [...records];
    const newSrecords = [...srecords];
    setName("");
    let fChar = name[0].toUpperCase();
    let length = name.length;
    let matchFound = false;
    let c = 0;
    c = 1;
    for (let i = 0; i < newRecords.length; i++) {
      let count = newRecords[i].name.length;
      c = c + count;
      if (fChar === newRecords[i].fChar) {
        newRecords[i].name.push(name);
        matchFound = true;
        break;
      }
    }
    if (!matchFound) {
      newRecords.push({
        name: [name],
        fChar
      });
    }
    setNum(c);
    setRecords(newRecords);
    let lenFound = false;
    for (let i = 0; i < newSrecords.length; i++) {
      if (length === newSrecords[i].length) {
        newSrecords[i].Lnames.push(name);
        lenFound = true;
        break;
      }
    }

    if (!lenFound) {
      newSrecords.push({
        length,
        Lnames: [name]
      });
    }

    //console.log(newRecords, newSrecords);

    setSrecords(newSrecords);
  };
  return (
    <div className="App">
      <h1>Names Exercise</h1>
      <div>
        <input
          type="text"
          placeholder="Enter First Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      <br />
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
      <div id="tableContainer">
        <table id="nameTable">
          <thead>
            <tr>
              <th>First Character</th>
              <th>Frequency</th>
              <th>Names</th>
            </tr>
          </thead>
          <tbody id="nameTableBody">
            {sorted(records).map(({ name, fChar }, index) => {
              return (
                <tr key={index}>
                  <td>{fChar}</td>
                  <td>{name.length}</td>
                  <td>{name.join("  --  ")}</td>
                </tr>
              );
            })}
            <tr>
              <td>Total</td>
              <td>{num}</td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <table id="nameLengthTable">
          <thead>
            <tr>
              <th>Name Length</th>
              <th>Names</th>
            </tr>
          </thead>
          <tbody id="nameLengthTableBody">
            {srecords
              .sort((a, b) => b.length - a.length)
              .map(({ length, Lnames }, index) => {
                return (
                  <tr key={index}>
                    <td>{length}</td>
                    <td>
                      {Lnames.sort((a, b) => a[0].localeCompare(b[0])).join(
                        " -- "
                      )}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
