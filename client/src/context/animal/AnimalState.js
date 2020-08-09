import React, { useReducer } from 'react';
import axios from 'axios';
import AnimalContext from './animalContext';
import AnimalReducer from './animalReducer';
import {
  GET_ANIMALS,
  GET_ANIMALS_AVAILABLE,
  ADD_ANIMAL,
  GET_USER_ANIMALS_CURRENT,
  GET_USER_ANIMALS_PREVIOUS,
  UPDATE_ANIMAL,
  CLEAR_ANIMALS,
  ANIMAL_ERROR,
} from '../types';

const AnimalState = (props) => {
  const initialState = {
    // animals: [
    //   {
    //     id: 1,
    //     name: 'Fluffy',
    //     age: '1 month',
    //     temperament: 'cuddly',
    //     image: 'http://placekitten.com/200/200?image=1',
    //     in_foster: false,
    //     adopted: false,
    //   },
    //   {
    //     id: 2,
    //     name: 'Shadow',
    //     age: '2 months',
    //     temperament: 'shy',
    //     image: 'http://placekitten.com/200/200?image=2',
    //     in_foster: false,
    //     adopted: false,
    //   },
    //   {
    //     id: 3,
    //     name: 'Mischief',
    //     age: '3 months',
    //     temperament: 'playful',
    //     image: 'http://placekitten.com/200/200?image=3',
    //     in_foster: false,
    //     adopted: false,
    //   },
    //   {
    //     id: 4,
    //     name: 'Cocoa',
    //     age: '4 weeks',
    //     temperament: 'shy',
    //     image: 'http://placekitten.com/200/200?image=4',
    //     in_foster: false,
    //     adopted: false,
    //   },
    //   {
    //     id: 5,
    //     name: 'Viola',
    //     age: '5 weeks',
    //     temperament: 'playful',
    //     image: 'http://placekitten.com/200/200?image=5',
    //     in_foster: false,
    //     adopted: false,
    //   },
    //   {
    //     id: 6,
    //     name: 'Muffin',
    //     age: '6 months',
    //     temperament: 'cuddly',
    //     image: 'http://placekitten.com/200/200?image=6',
    //     in_foster: false,
    //     adopted: false,
    //   },
    //   {
    //     id: 7,
    //     name: 'Totoro',
    //     age: '7 months',
    //     temperament: 'shy',
    //     image: 'http://placekitten.com/200/200?image=7',
    //     in_foster: false,
    //     adopted: false,
    //   },
    //   {
    //     id: 8,
    //     name: 'Pikachu',
    //     age: '8 weeks',
    //     temperament: 'playful',
    //     image: 'http://placekitten.com/200/200?image=8',
    //     in_foster: false,
    //     adopted: false,
    //   },
    //   {
    //     id: 9,
    //     name: 'Jiji',
    //     age: '9 weeks',
    //     temperament: 'playful',
    //     image: 'http://placekitten.com/200/200?image=9',
    //     in_foster: false,
    //     adopted: false,
    //   },
    //   {
    //     id: 10,
    //     name: 'Figaro',
    //     age: '10 months',
    //     temperament: 'playful',
    //     image: 'http://placekitten.com/200/200?image=10',
    //     in_foster: false,
    //     adopted: false,
    //   },
    // ],
    animals: null,
    userAnimalsCurrent: null,
    userAnimalsPrevious: null,
    animalsAvailable: null,
  };

  const [state, dispatch] = useReducer(AnimalReducer, initialState);

  // Get animals
  const getAnimals = async () => {
    try {
      const res = await axios.get('api/animals');

      dispatch({ type: GET_ANIMALS, payload: res.data });
    } catch (err) {
      dispatch({ type: ANIMAL_ERROR, payload: err.response.msg });
    }
  };

  // Get animals available for fostering
  const getAnimalsAvailable = async () => {
    try {
      const res = await axios.get('api/animals');

      const animals = res.data.filter((animal) => animal.available == true);

      console.log(animals);

      dispatch({ type: GET_ANIMALS_AVAILABLE, payload: res.data });
    } catch (err) {
      dispatch({ type: ANIMAL_ERROR, payload: err.response.msg });
    }
  };

  const getUserAnimalsCurrent = async () => {
    try {
      const res = await axios.get('api/animals');

      const animals = res.data.filter((animal) => animal.in_foster == true);

      dispatch({ type: GET_USER_ANIMALS_CURRENT, payload: animals });
    } catch (err) {
      dispatch({ type: ANIMAL_ERROR, payload: err.response.msg });
    }
  };

  const getUserAnimalsPrevious = async () => {
    try {
      const res = await axios.get('api/animals');

      const animals = res.data.filter((animal) => animal.adopted == true);

      dispatch({ type: GET_USER_ANIMALS_PREVIOUS, payload: animals });
    } catch (err) {
      dispatch({ type: ANIMAL_ERROR, payload: err.response.msg });
    }
  };

  // Create animal
  const addAnimal = async (animal) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.post('api/animals', animal, config);
      dispatch({ type: ADD_ANIMAL, payload: res.data });
    } catch (err) {
      dispatch({ type: ANIMAL_ERROR, payload: err.response.msg });
    }
  };

  // Update animal
  const updateAnimal = async (animal) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.put(`/api/animals/${animal._id}`, animal, config);
      dispatch({ type: UPDATE_ANIMAL, payload: res.data });
    } catch (err) {
      dispatch({ type: ANIMAL_ERROR, payload: err.response.msg });
    }
  };

  // Clear animals
  const clearAnimals = () => {
    dispatch({ type: CLEAR_ANIMALS });
  };

  return (
    <AnimalContext.Provider
      value={{
        animals: state.animals,
        animalsAvailable: state.animalsAvailable,
        userAnimalsCurrent: state.userAnimalsCurrent,
        userAnimalsPrevious: state.userAnimalsPrevious,
        getAnimals,
        getAnimalsAvailable,
        getUserAnimalsCurrent,
        getUserAnimalsPrevious,
        addAnimal,
        clearAnimals,
      }}
    >
      {props.children}
    </AnimalContext.Provider>
  );
};

export default AnimalState;
