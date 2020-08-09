import React, { Fragment, useContext, useEffect } from 'react';
import AnimalContext from '../../context/animal/animalContext';

const Animals = () => {
  const animalContext = useContext(AnimalContext);

  const { animals } = animalContext;

  return (
    <Fragment>
      {animals.map((animal) => (
        <div className='card bg-light'>
          <span>
            <img src={animal.image} alt='' />
          </span>
          <p>{animal.name}</p>
          <p>{animal.age}</p>
          <p>{animal.temperament}</p>
        </div>
      ))}
    </Fragment>
  );
};

export default Animals;
