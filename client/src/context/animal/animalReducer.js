import {
  GET_ANIMALS,
  GET_ANIMALS_AVAILABLE,
  GET_USER_ANIMALS_CURRENT,
  GET_USER_ANIMALS_PREVIOUS,
  ADD_ANIMAL,
  UPDATE_ANIMAL,
  CLEAR_ANIMALS,
  ANIMAL_ERROR,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    // case GET_ANIMALS:
    //   return {
    //     ...state,
    //     animals: action.payload,
    //   };
    case GET_ANIMALS_AVAILABLE:
      return {
        ...state,
        animalsAvailable: action.payload,
        userAnimalsCurrent: null,
        userAnimalsPrevious: null,
      };
    case GET_USER_ANIMALS_CURRENT:
      return {
        ...state,
        userAnimalsCurrent: action.payload,
      };
    case GET_USER_ANIMALS_PREVIOUS:
      return {
        ...state,
        userAnimalsPrevious: action.payload,
      };
    case ADD_ANIMAL:
      return {
        ...state,
        animalsAvailable: [action.payload, ...state.animalsAvailable],
      };
    case CLEAR_ANIMALS:
      return {
        ...state,
        animalsAvailable: [],
        userAnimalsCurrent: null,
        userAnimalsPrevious: null,
      };
    case ANIMAL_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
