import React from 'react';

const AlphabetButtons = () => {
  return (
    <section id="btnContainer">
      {Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ').map((letter) => (
        <button key={letter} disabled={true} data-char={letter}>
          {letter}
        </button>
      ))}
      <button disabled={true} data-char="ALL">
        ALL
      </button>
      <button disabled={true} data-char="FAV">
        FAV
      </button>
    </section>
  );
};

export default AlphabetButtons;
