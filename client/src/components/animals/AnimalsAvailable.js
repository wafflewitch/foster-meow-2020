import React, { Fragment, useContext, useEffect } from 'react';
import AnimalObject from '../../components/animals/AnimalObject';
import AnimalContext from '../../context/animal/animalContext';

const AnimalsAvailable = () => {
  const animalContext = useContext(AnimalContext);

  const {
    animalsAvailable,
    getAnimalsAvailable,
    clearAnimals,
    animalsStatic,
  } = animalContext;

  useEffect(() => {
    getAnimalsAvailable();
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <h2>Animals Available for Fostering</h2>
      <div className='container animals-container'>
        {animalsAvailable.length > 0 ? (
          animalsAvailable.map((animal) => (
            <AnimalObject key={animal._id} animal={animal} />
          ))
        ) : (
          <h3>There are no animals available at this time.</h3>
        )}
      </div>
    </Fragment>
  );

  // return (
  //   <Fragment>
  //     <h2>Animals Available for Fostering</h2>
  //     <div className='container animals-container'>
  //       {animalsStatic !== null ? (
  //         animalsStatic.map((animal) => (
  //           <AnimalObject key={animal.id} animal={animal} />
  //         ))
  //       ) : (
  //         <h3>There are no animals available at this time.</h3>
  //       )}
  //     </div>
  //   </Fragment>
  // );
};

export default AnimalsAvailable;
