export const initialState = {
  cities: [],
  itineraries: [],
  user: null,
};

export const actionType = {
  CITIESDB: "CITIESDB",
  ITINERARIESDB:"ITINERARIESDB",
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

      case "ITINERARIESDB":
        return {
          ...state,
          itineraries: action.itineraries,
        };

    default:
      return state;
  }
};

export default reducer;
