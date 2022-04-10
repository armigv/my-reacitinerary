export const initialState = {
  cities: [],
  itineraries: [],
  user: null,
   filterCity:[],
   
};

export const actionType = {
  CITIESDB: "CITIESDB",
  ITINERARIESDB:"ITINERARIESDB",
  USER: "USER",
  FILTER:"FILTER",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "CITIESDB":
      return {
        ...state,
        cities: action.cities,
        filterCity: action.cities,
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

        case "FILTER":
          const filterCity = state.cities.filter(city=>city.city.toLowerCase().startsWith(action.value.toLowerCase().trim()))
          return {
              ...state,
              filterCity: filterCity
          }

    default:
      return state;
  }
};

export default reducer;
