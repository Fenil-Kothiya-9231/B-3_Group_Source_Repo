
(function (params) {
  const InitialState = {
      allChars: [
          "A",
          "B",
          "C",
          "D",
          "E",
          "F",
          "G",
          "H",
          "I",
          "J",
          "K",
          "L",
          "M",
          "N",
          "O",
          "P",
          "Q",
          "R",
          "S",
          "T",
          "U",
          "V",
          "W",
          "X",
          "Y",
          "Z",
      ],
      allIds: [
          "id_Piyush",
          "id_Ajay",
          "ids_Bhavesh",
          "ids_Amit",
          "ids_Brijesh",
      ],
      selectedChars: ["A", "P", "B"],
      idsBy1stChar: {
          A: ["id_Ajay", "ids_Amit"],
          B: ["ids_Brijesh", "ids_Bhavesh"],
          C: [],
          D: [],
          E: [],
          F: [],
          G: [],
          H: [],
          I: [],
          J: [],
          K: [],
          L: [],
          M: [],
          N: [],
          O: [],
          P: ["id_Piyush"],
          Q: [],
          R: [],
          S: [],
          T: [],
          U: [],
          V: [],
          W: [],
          X: [],
          Y: [],
          Z: [],
      },
      allNamesByIds: {
          id_Piyush: {
              id: "id_Piyush",
              name: "Piyush",
              addedAt: 0,
              isFav: false,
          },
          id_Ajay: { id: "id_Ajay", name: "Ajay", addedAt: 0, isFav: false },
          ids_Bhavesh: {
              id: "ids_Bhavesh",
              name: "Bhavesh",
              addedAt: 0,
              isFav: false,
          },
          ids_Amit: {
              id: "ids_Amit",
              name: "Amit",
              addedAt: 0,
              isFav: false,
          },
          ids_Brijesh: {
              id: "ids_Brijesh",
              name: "Brijesh",
              addedAt: 0,
              isFav: false,
          },
      },
  };

})();
(function () {
  const InitialEmptyState = {
      allChars: [
          "A",
          "B",
          "C",
          "D",
          "E",
          "F",
          "G",
          "H",
          "I",
          "J",
          "K",
          "L",
          "M",
          "N",
          "O",
          "P",
          "Q",
          "R",
          "S",
          "T",
          "U",
          "V",
          "W",
          "X",
          "Y",
          "Z",
      ],
      allIds: [],
      selectedChars: [],
      idsBy1stChar: {
          A: [],
          B: [],
          C: [],
          D: [],
          E: [],
          F: [],
          G: [],
          H: [],
          I: [],
          J: [],
          K: [],
          L: [],
          M: [],
          N: [],
          O: [],
          P: [],
          Q: [],
          R: [],
          S: [],
          T: [],
          U: [],
          V: [],
          W: [],
          X: [],
          Y: [],
          Z: [],
      },
      allNamesByIds: {},
      favIds: {},
  };
  const ReduxActionTypes = {
      ADD_USER: "ADD_USER",
      TOGGLE_SELECTION: "TOGGLE_SELECTION",
      DELETE_USER: "DELETE_USER",
      TOGGLE_FAVORITE: 'TOGGLE_FAVORITE',
  };

  const reducer = (state = InitialEmptyState, action) => {
      // console.log("In reducer function ", { state, action });
      const { type, payload } = action;
      switch (type) {
          case ReduxActionTypes.ADD_USER:
              // payload looks like - { id, name: "...", addedAt: 0, isFav: false }
              const { name, id } = payload;
              const idsBy1stChar = { ...state.idsBy1stChar };
              const firstChar = payload.name[0].toUpperCase();
              idsBy1stChar[firstChar].push(id);
              return {
                  ...state,
                  allIds: [...state.allIds, payload.id],
                  idsBy1stChar,
                  allNamesByIds: { ...state.allNamesByIds, [id]: payload },
              };
              break;
          case ReduxActionTypes.DELETE_USER: {
              let { selectedChars, favIds } = state;
              // payload will be id of the user to be deleted
              const firstChar = state.allNamesByIds[payload].name[0].toUpperCase();
              const idsBy1stChar = { ...state.idsBy1stChar };
              idsBy1stChar[firstChar] = idsBy1stChar[firstChar].filter(id => id !== payload);
              const allIds = state.allIds.filter(id => id !== payload);
              const allNamesByIds = { ...state.allNamesByIds };
              delete allNamesByIds[payload];
              if (idsBy1stChar[firstChar].length === 0) {
                  selectedChars = state.selectedChars.filter(ch => ch !== firstChar);
              }
              if (allIds.length === 0) {
                  selectedChars.length = 0;
              }
              delete favIds[payload];
              if (Object.keys(favIds).length === 0 && selectedChars.includes("FAV")) {
                  selectedChars.length = 0;
              }
              return {
                  ...state,
                  allIds,
                  idsBy1stChar,
                  allNamesByIds,
                  selectedChars,
                  favIds: { ...favIds },
              };
          }
          case ReduxActionTypes.TOGGLE_SELECTION: {
              // payload will be like - "A" / "ALL" / "Z" - the button clicked
              let selectedChars = [...state.selectedChars];
              if (selectedChars.includes(payload)) {
                  /* we are going to remove the current selection */
                  selectedChars = selectedChars.filter(char => char !== payload);
              } else {
                  /* we are going to add the current selection */
                  /* if u r adding ALL or FAV then first remove all the previous selections */
                  if (selectedChars.includes("ALL") || selectedChars.includes("FAV")) {
                      selectedChars.length = 0;
                  } else if (payload === 'ALL' || payload === 'FAV'){
                      selectedChars.length = 0;
                  }
                  selectedChars.push(payload);
              }
              return {
                  ...state,
                  selectedChars,
              };
          }
          case ReduxActionTypes.TOGGLE_FAVORITE: {
              // payload will be id
              const nameObj = state.allNamesByIds[payload];
              nameObj.isFav = !nameObj.isFav;
              const { favIds, selectedChars } = state;
              if (nameObj.isFav) {
                  favIds[payload] = true; 
              } else {
                  delete favIds[payload];
              }

              if (Object.keys(favIds).length === 0 && selectedChars.includes("FAV")) {
                  selectedChars.length = 0;
              }
              return {
                  ...state,
                  allNamesByIds: { ...state.allNamesByIds },
                  favIds: { ...favIds },
                  selectedChars: [ ...selectedChars ],
              }
          }
          default:
              return state;
              break;
      }
  };

  const store = Redux.createStore(
      reducer,
      InitialEmptyState,
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  window.store = store;
  // console.log("Before calling function state = ", store.getState());
  generateBtns();
  generateList();

  store.subscribe(generateBtns);
  store.subscribe(generateList);



  function getButton(totalNames, isSelected, text) {
      const button = document.createElement("button");
      let buttonText = text;
      if (totalNames === 0) {
          button.setAttribute("disabled", true);
      } else {
          buttonText = `${buttonText}(${totalNames})`;
      }
      if (isSelected) {
          button.classList.add("active");
      }
      button.textContent = buttonText;
      button.dataset.char = text;
      return button;
  }

  function generateBtns() {
      btnContainer.innerHTML = "";
      const state = store.getState() || InitialEmptyState;
      // console.log("state in generate Btn ", state);
      const {
          allChars,
          allIds,
          selectedChars,
          idsBy1stChar,
          allNamesByIds,
          favIds,
      } = state;
      allChars.forEach((alpha) => {
          const totalNames = idsBy1stChar[alpha].length;
          const isSelected = selectedChars.includes(alpha);
          const myButton = getButton(totalNames, isSelected, alpha);
          btnContainer.appendChild(myButton);
      });

      const allButton = getButton(allIds.length, selectedChars.includes("ALL"), "ALL");
      btnContainer.appendChild(allButton);

      const favButton = getButton( Object.keys(favIds).length , selectedChars.includes("FAV"), "FAV");
      btnContainer.appendChild(favButton);
  }

  const NamesActions = {
      DELETE: 'delete',
      MARK_FAVORITE: 'mark-favorite',
  }
  function generateList() {
      const state = store.getState() || InitialEmptyState;
      console.log("state in generateList ", state);
      const {
          allIds,
          selectedChars,
          idsBy1stChar,
          allNamesByIds,
          favIds,
      } = state;
      namesList.innerHTML = "";
      selectedChars.forEach((char) => {
          let ids;
          if (char === "ALL") ids = allIds;
          else if (char === "FAV"){
              ids = Object.keys(favIds).sort((i1, i2) => {
                  const name1 = allNamesByIds[i1].name;
                  const name2 = allNamesByIds[i2].name;
                  return name1.localeCompare(name2)
              });
          }
          else ids = idsBy1stChar[char];
          ids.forEach((id) => {
              const nameObj = allNamesByIds[id];
              const li = document.createElement("li");
              li.textContent = nameObj.name;

              const deleteLink = document.createElement("a");
              deleteLink.dataset.id = id;
              deleteLink.dataset.action = NamesActions.DELETE;
              deleteLink.classList.add("deleteLink");
              deleteLink.textContent = "Delete";
              li.appendChild(deleteLink);


              const favLink = document.createElement("a");
              favLink.dataset.id = id;
              favLink.dataset.action = NamesActions.MARK_FAVORITE;
              favLink.textContent = nameObj.isFav ? 'Remove From Favorite' : 'Add to Favorite';
              li.appendChild(favLink);

              if (nameObj.isFav) {
                  li.classList.add("favName");
                  favLink.classList.add("removeFavLink");
              } else {
                  favLink.classList.add("addFavLink");
              }
              namesList.appendChild(li)
          });
      });
  }

  namesList.onclick = (e) => {
      const { action, id } = e.target.dataset;
      console.log({ action, id });
      if (action === NamesActions.DELETE && id) {
          store.dispatch({
              type: ReduxActionTypes.DELETE_USER,
              payload: id,
          });
      } else if (id && action === NamesActions.MARK_FAVORITE) {
          store.dispatch({
              type: ReduxActionTypes.TOGGLE_FAVORITE,
              payload: id,
          });
      }
  }

  submitBtn.onclick = (e) => {
      e.preventDefault();
      const name = firstName.value.trim();
      if (name.length === 0) {
          return;
      }
      const nameObj = {
          id: crypto.randomUUID(),
          name,
          addedAt: new Date().getTime(),
          isFav: false,
      };
      store.dispatch({
          type: ReduxActionTypes.ADD_USER,
          payload: nameObj,
      });
      firstName.value = "";
      firstName.focus();
  };

  btnContainer.onclick = (e) => {
      const text = e.target.dataset.char;
      if ((text >= 'A' && text <= 'Z') || text === 'ALL' || text === 'FAV') {
          store.dispatch({
              type: ReduxActionTypes.TOGGLE_SELECTION,
              payload: text,
          });
      }

  };
})();
