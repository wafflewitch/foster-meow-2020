import React, { Fragment, useContext, useEffect } from 'react';
import AnimalObject from '../../components/animals/AnimalObject';
import AnimalContext from '../../context/animal/animalContext';

const AnimalsAvailable = () => {
  const animalContext = useContext(AnimalContext);

  const { animalsAvailable, getAnimalsAvailable, clearAnimals } = animalContext;

  useEffect(() => {
    clearAnimals();
    getAnimalsAvailable();
    // eslint-disable-next-line
  }, []);

  console.log(animalsAvailable);

  return (
    <Fragment>
      <h2>Animals Available for Fostering</h2>
      <div className='container animals-container'>
        {animalsAvailable !== null ? (
          animalsAvailable.map((animal) => <AnimalObject animal={animal} />)
        ) : (
          <h3>There are no animals available at this time.</h3>
        )}
      </div>
    </Fragment>
  );
};

export default AnimalsAvailable;
