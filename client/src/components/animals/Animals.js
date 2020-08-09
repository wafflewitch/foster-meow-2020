import React, { Fragment, useContext, useEffect } from 'react';
import AnimalObject from '../../components/animals/AnimalObject';
import AnimalContext from '../../context/animal/animalContext';

const Animals = () => {
  const animalContext = useContext(AnimalContext);

  const {
    userAnimalsCurrent,
    getUserAnimalsCurrent,
    userAnimalsPrevious,
    getUserAnimalsPrevious,
    // animalsAvailable,
    // getAnimalsAvailable,
    clearAnimals,
  } = animalContext;

  useEffect(() => {
    getUserAnimalsCurrent();
    getUserAnimalsPrevious();
    // getAnimalsAvailable();
    // eslint-disable-next-line
    return function cleanup() {
      clearAnimals();
    };
  }, []);

  // console.log(userAnimalsPrevious);

  const fostersCurrent = (
    <Fragment>
      <h2>Current Fosters</h2>
      <div className='container animals-container'>
        {userAnimalsCurrent !== null ? (
          userAnimalsCurrent.map((animal) => (
            <AnimalObject key={animal._id} animal={animal} />
          ))
        ) : (
          <h3>You have no current fosters.</h3>
        )}
      </div>
    </Fragment>
  );

  const fostersPrevious = (
    <Fragment>
      <h2>Previous Fosters</h2>
      <div className='container animals-container'>
        {userAnimalsPrevious !== null ? (
          userAnimalsPrevious.map((animal) => (
            <AnimalObject key={animal._id} animal={animal} />
          ))
        ) : (
          <h3>You have no previous fosters.</h3>
        )}
      </div>
    </Fragment>
  );

  // const fostersPotential = (
  //   <Fragment>
  //     <h2>Animals Available for Fostering</h2>
  //     <div className='container animals-container'>
  //       {animalsAvailable !== null ? (
  //         animalsAvailable.map((animal) => (
  //           <AnimalObject key={animal._id} animal={animal} />
  //         ))
  //       ) : (
  //         <h3>There are no animals available at this time.</h3>
  //       )}
  //     </div>
  //   </Fragment>
  // );

  return (
    <div>
      {fostersCurrent}
      {fostersPrevious}
    </div>
  );
};

export default Animals;
