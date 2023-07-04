import React from "react";

const NamesArranged = ({ names, orderBy, order }) => {
  const sortNames = () => {
    const sortedNames = [...names];

    switch (orderBy) {
      case "LENGTH":
        sortedNames.sort((a, b) => {
          if (order === "ASC") {
            return a.length - b.length;
          } else {
            return b.length - a.length;
          }
        });
        break;
      case "ALPHABETS":
        sortedNames.sort((a, b) => {
          if (order === "ASC") {
            return a.localeCompare(b);
          } else {
            return b.localeCompare(a);
          }
        });
        break;
      case "VOWELS_COUNT":
        sortedNames.sort((a, b) => {
          const countVowels = (name) => {
            const vowels = ["a", "e", "i", "o", "u"];
            let count = 0;
            for (let char of name.toLowerCase()) {
              if (vowels.includes(char)) {
                count++;
              }
            }
            return count;
          };

          if (order === "ASC") {
            return countVowels(a) - countVowels(b);
          } else {
            return countVowels(b) - countVowels(a);
          }
        });
        break;
      default:
        break;
    }

    return sortedNames;
  };
  const sortedNames = sortNames();

  return (
    <div>
      <h2>Names Arranged with Order</h2>
      <ul>
        {sortedNames.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default NamesArranged;
