import { SEARCH_REQUEST, NEXT_PAGE_REQUEST } from "./actionTypes";

const initialState = {
  items: [],
  stats: [],
  nextPage: "",
  lastSearch: "",
  apiKey: "AIzaSyCBjlhE8jhcjEl14_EKCmxCnPDgVkCU6eQ",
};

export const data = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_REQUEST: {
      return {
        ...state,
        items: action.data,
        stats: action.stats,
        nextPage: action.nextPage,
        lastSearch: action.lastSearch,
      };
    }

    case NEXT_PAGE_REQUEST: {
      return {
        ...state,
        items: [...state.items, ...action.data],
        stats: [...state.stats, ...action.stats],
        nextPage: action.nextPage,
      };
    }

    default:
      return state;
  }
};
