export const initialState = {
  cities: [],
  user: null,
};

export const actionType = {
  CITIESDB: "CITIESDB",
  USER: "USER",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "CITIESDB":
      return {
        ...state,
        cities: action.cities,
      };

    case "USER":
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;
