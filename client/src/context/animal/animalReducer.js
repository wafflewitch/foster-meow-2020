import { GET_ANIMALS } from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_ANIMALS:
      return {
        ...state,
      };
    default:
      return state;
  }
};
