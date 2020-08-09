import React, { useReducer } from 'react';
import axios from 'axios';
import AnimalContext from './animalContext';
import AnimalReducer from './animalReducer';
import { GET_ANIMALS } from '../types';

const AnimalState = (props) => {
  const initialState = {
    animals: [
      {
        id: 1,
        name: 'Fluffy',
        age: '1 month',
        temperament: 'cuddly',
        image: 'http://placekitten.com/200/200?image=1',
        in_foster: false,
        adopted: false,
      },
      {
        id: 2,
        name: 'Shadow',
        age: '2 months',
        temperament: 'shy',
        image: 'http://placekitten.com/200/200?image=2',
        in_foster: false,
        adopted: false,
      },
      {
        id: 3,
        name: 'Mischief',
        age: '3 months',
        temperament: 'playful',
        image: 'http://placekitten.com/200/200?image=3',
        in_foster: false,
        adopted: false,
      },
      {
        id: 4,
        name: 'Cocoa',
        age: '4 weeks',
        temperament: 'shy',
        image: 'http://placekitten.com/200/200?image=4',
        in_foster: false,
        adopted: false,
      },
      {
        id: 5,
        name: 'Viola',
        age: '5 weeks',
        temperament: 'playful',
        image: 'http://placekitten.com/200/200?image=5',
        in_foster: false,
        adopted: false,
      },
      {
        id: 6,
        name: 'Muffin',
        age: '6 months',
        temperament: 'cuddly',
        image: 'http://placekitten.com/200/200?image=6',
        in_foster: false,
        adopted: false,
      },
      {
        id: 7,
        name: 'Totoro',
        age: '7 months',
        temperament: 'shy',
        image: 'http://placekitten.com/200/200?image=7',
        in_foster: false,
        adopted: false,
      },
      {
        id: 8,
        name: 'Pikachu',
        age: '8 weeks',
        temperament: 'playful',
        image: 'http://placekitten.com/200/200?image=8',
        in_foster: false,
        adopted: false,
      },
      {
        id: 9,
        name: 'Jiji',
        age: '9 weeks',
        temperament: 'playful',
        image: 'http://placekitten.com/200/200?image=9',
        in_foster: false,
        adopted: false,
      },
      {
        id: 10,
        name: 'Figaro',
        age: '10 months',
        temperament: 'playful',
        image: 'http://placekitten.com/200/200?image=10',
        in_foster: false,
        adopted: false,
      },
    ],
  };

  const [state, dispatch] = useReducer(AnimalReducer, initialState);

  // Get animals

  return (
    <AnimalContext.Provider
      value={{
        animals: state.animals,
      }}
    >
      {props.children}
    </AnimalContext.Provider>
  );
};

export default AnimalState;
