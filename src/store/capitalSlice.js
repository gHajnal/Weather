import { createSlice } from "@reduxjs/toolkit";
import capitals from "./capitals.json";

const pullNames = () => {
  const capitalNames = [];

  capitals.forEach((capitalObject, i) => {
    capitalNames.push({ id: i, name: capitalObject.name, show: true });
  });

  return capitalNames;
};

const initialCapitalNamesState = {
  savedCapitalNames: [],
  feed: [...pullNames()],
  filteredCapitals: [],
};

const updateLocalStorage = (savedCapitalNames) => {
  const storedState = JSON.stringify(savedCapitalNames);
  try {
    sessionStorage.clear();
    sessionStorage.setItem("persistedState", storedState);
  } catch (error) {
    throw new Error("Error persisting state:", error);
  }
};

const handleStorageOfCapitals = (state, capital) => {
  const { id, name } = capital;

  state.savedCapitalNames.push({
    id: id,
    name: name,
  });

  state.feed[id].show = false;

  updateLocalStorage(state.savedCapitalNames);
};

const capitalSlice = createSlice({
  name: "capital",
  initialState: initialCapitalNamesState,
  reducers: {
    storeCapital(state, action) {
      const capital = { id: action.payload.id, name: action.payload.name };
      handleStorageOfCapitals(state, capital);
    },
    storeFilteredCapitals(state, action) {
      state.filteredCapitals = [];
      state.filteredCapitals.push(...action.payload);
    },
    removeCapital(state, action) {
      const id = action.payload;
      const indexToDeleteInSCN = state.savedCapitalNames.findIndex(
        (el, i) => el.id === id
      );
      state.savedCapitalNames.splice(indexToDeleteInSCN, 1);
      state.feed[id].show = true;
      updateLocalStorage(state.savedCapitalNames);
    },
    getPersistedCapitals(state) {
      if (state.savedCapitalNames.length === 0) {
        try {
          const persistedState = JSON.parse(
            sessionStorage.getItem("persistedState")
          );

          Object.entries(persistedState).forEach((capitalObject, i) => {
            const id = capitalObject[1].id;
            const name = capitalObject[1].name;
            handleStorageOfCapitals(state, { id: id, name: name });
          });
        } catch (error) {
          throw new Error("Error parsing persisted state:", error);
        }
      }
    },
  },
});

export default capitalSlice;
